import Anthropic from '@anthropic-ai/sdk';
import { buildSystemPrompt } from '../data/systemPrompt.js';

/**
 * Ask AI guide backend. Runs as a Vercel serverless function so the API key
 * (ANTHROPIC_API_KEY) never reaches the browser.
 */

const MODEL = 'claude-haiku-5-5';
const MAX_TOKENS = 600;
const MAX_MESSAGE_CHARS = 500;
const MAX_MESSAGES = 12; // six exchanges
const RATE_LIMIT = 15; // requests per IP per window
const RATE_WINDOW_MS = 10 * 60 * 1000;

const SYSTEM_PROMPT = buildSystemPrompt();

// Best-effort, per-instance limiter. Good enough to blunt casual abuse on a
// portfolio; a shared store (e.g. Upstash) would be needed for a hard limit.
const hits = new Map<string, number[]>();

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT;
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

type Incoming = { role?: unknown; content?: unknown };

const parseMessages = (raw: unknown): Anthropic.MessageParam[] | string => {
  if (!Array.isArray(raw) || raw.length === 0) return 'No messages provided.';
  if (raw.length > MAX_MESSAGES) return 'This conversation has reached its limit. Please refresh to start a new one.';

  const messages: Anthropic.MessageParam[] = [];
  for (const m of raw as Incoming[]) {
    if ((m.role !== 'user' && m.role !== 'assistant') || typeof m.content !== 'string') {
      return 'Invalid message format.';
    }
    const content = m.content.trim();
    if (!content) return 'Messages cannot be empty.';
    if (m.role === 'user' && content.length > MAX_MESSAGE_CHARS) {
      return `Please keep questions under ${MAX_MESSAGE_CHARS} characters.`;
    }
    messages.push({ role: m.role, content: content.slice(0, 4000) });
  }
  if (messages[0].role !== 'user' || messages[messages.length - 1].role !== 'user') {
    return 'Invalid conversation order.';
  }
  return messages;
};

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return json({ error: "You've asked a lot of questions in a short time. Please try again in a few minutes." }, 429);
  }

  let body: { messages?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  const messages = parseMessages(body.messages);
  if (typeof messages === 'string') return json({ error: messages }, 400);

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('chat: ANTHROPIC_API_KEY is not set');
    return json({ error: 'The guide is unavailable right now.' }, 503);
  }

  try {
    const client = new Anthropic({ timeout: 25_000, maxRetries: 1 });
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      thinking: { type: 'disabled' },
      output_config: { effort: 'low' },
      system: [{ type: 'text', text: SYSTEM_PROMPT, cache_control: { type: 'ephemeral' } }],
      messages,
    });

    if (response.stop_reason === 'refusal') {
      return json({ reply: "I can't help with that one. Feel free to ask about James's projects, experience or certifications." });
    }

    const reply = response.content
      .filter((b): b is Anthropic.TextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('')
      .trim();

    return json({ reply: reply || "Sorry, I couldn't put an answer together. Please try rephrasing." });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return json({ error: 'The guide is busy right now. Please try again shortly.' }, 503);
    }
    if (error instanceof Anthropic.APIError) {
      console.error(`chat: Claude API error ${error.status}: ${error.message}`);
    } else {
      console.error('chat: unexpected error', error);
    }
    return json({ error: 'The guide is unavailable right now.' }, 502);
  }
}
