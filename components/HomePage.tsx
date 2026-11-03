import React from 'react';
import { CONTACT_LINKS, CV_URL } from '../data/content';
import { navigate, workPath } from '../hooks/useRoute';

const contactHref = (label: string) => CONTACT_LINKS.find((l) => l.label === label)?.href ?? '';

/** In-app link to a case study, handled by the History API router. */
const WorkLink: React.FC<{ slug: string; children: React.ReactNode }> = ({ slug, children }) => (
  <a
    href={workPath(slug)}
    onClick={(e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      navigate(workPath(slug));
    }}
  >
    {children}
  </a>
);

interface HomePageProps {
  onAskAi: () => void;
  askAiRef: React.Ref<HTMLButtonElement>;
}

const HomePage: React.FC<HomePageProps> = ({ onAskAi, askAiRef }) => (
  <main>
    <h1>James Jullies</h1>

    <p>
      I'm a martech and AI architect in Johannesburg. I design how customer data moves between engagement
      platforms, and lately I build the AI tools that sit on top of it.
    </p>

    <p>
      Currently, I'm a Senior Solutions Consultant at <a href="https://www.youknow.co.za/">YOUKNOW Technologies</a>,
      where I lead the technical architecture practice and run pre-sales for fintech, banking and retail clients.
      Before that I spent seven years at inQuba in CX, service delivery and business analysis, and started out in
      fund operations on Oracle Flexcube.
    </p>

    <p>Some of the work I'm proudest of:</p>
    <ul>
      <li>
        <WorkLink slug="melon-mobile-amplitude-appsflyer">Melon Mobile</WorkLink> – Amplitude + AppsFlyer across
        Android, iOS, Huawei and web (phase one in 6 weeks)
      </li>
      <li>
        <WorkLink slug="braze-implementation">OM Bank</WorkLink> – Braze architecture and identity resolution (140k
        identities at launch, 1M+ customers by 2026)
      </li>
      <li>
        <WorkLink slug="onesignal-migration">Banco Millennium Atlântico</WorkLink> – OneSignal migration off MS
        Dynamics 365 (WhatsApp + SOAP SMS)
      </li>
      <li>
        <WorkLink slug="retail-analytics-ecosystem">Retail analytics</WorkLink> – one Amplitude taxonomy for Cape
        Union Mart, Old Khaki and Poetry (3 brands)
      </li>
      <li>
        <WorkLink slug="sales-intelligence-slack-bot">Sales Slack bot</WorkLink> – MCP + Claude API across HubSpot,
        Notion and Zendesk (live in sales ops)
      </li>
      <li>
        <strong>Delivery tooling</strong> – time-boxed platform onboarding (~6 months down to ~8 weeks)
      </li>
    </ul>

    <p>
      And a few things I built for fun: <a href="https://tile-predictor-pro.vercel.app">Tile Predictor Pro</a>, which
      reads loyalty gameboards with Gemini vision, and <a href="https://run-dna-cards.vercel.app">Run DNA Cards</a>,
      which turns a GPX file into a collectible card.
    </p>

    <p>
      I'm certified 8× on Braze, 7× on Amplitude and 5× through Anthropic Academy, and I'm an AppsFlyer Reseller
      Solution Architect. I've worked with clients in South Africa, Angola, West Africa, Australia, the USA and the
      UK.
    </p>

    <p>In my spare time I run trails and roads and play piano.</p>

    <p>
      You can find me on <a href={contactHref('LinkedIn')}>LinkedIn</a> and{' '}
      <a href={contactHref('GitHub')}>GitHub</a>, grab my <a href={CV_URL} download>CV</a>, or{' '}
      <a href={contactHref('Email')}>email me</a> about a customer-data, engagement or AI problem.
    </p>

    <p>
      <button ref={askAiRef} type="button" className="link-button" onClick={onAskAi} aria-haspopup="dialog">
        Ask an AI about my work →
      </button>
    </p>
  </main>
);

export default HomePage;
