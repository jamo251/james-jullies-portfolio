import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeading from './SectionHeading';
import MagneticButton from './MagneticButton';
import { CV_URL, CONTACT_LINKS } from '../data/content';

const linkClasses =
  'group mono-label inline-flex items-center gap-2 transition-colors hover:text-accent';

const fieldClasses =
  'w-full bg-transparent border-0 border-b border-line px-0 py-4 text-lg md:text-xl text-paper placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validate = (name: string, email: string, message: string) => {
  if (name.length < 2 || name.length > 100) return 'Please enter your name.';
  if (!EMAIL_PATTERN.test(email) || email.length > 200) return 'Please enter a valid email address.';
  if (message.length < 10) return 'Please add a little more detail to your message.';
  if (message.length > 5000) return 'Please keep your message under 5,000 characters.';
  return null;
};

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (key: string) => String(data.get(key) ?? '').trim();

    // Honeypot: real visitors never see or fill this field
    if (field('company_website')) {
      setStatus('success');
      return;
    }

    const params = { user_name: field('user_name'), user_email: field('user_email'), message: field('message') };
    const problem = validate(params.user_name, params.user_email, params.message);
    setValidationError(problem);
    if (problem) return;

    setStatus('sending');
    emailjs
      .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, params, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-36 border-t border-line scroll-mt-16">
      <SectionHeading
        index="05"
        label="Contact"
        title="Let's Collaborate"
        intro="Working on a customer-data, engagement or AI problem? I'd be glad to talk it through."
      />

      <div className="max-w-3xl">
        {status === 'success' ? (
          <div className="py-12 border-t border-line">
            <span className="font-mono text-accent text-2xl" aria-hidden="true">✓</span>
            <h3 className="display-heading text-3xl md:text-4xl text-paper mt-6 mb-3">
              Message sent
            </h3>
            <p className="text-muted mb-10">Thanks for getting in touch. I'll reply as soon as I can.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mono-label text-paper border-b border-paper/30 pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Send another one
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-10">
            {/* Honeypot, hidden from people and screen readers */}
            <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
              <label>
                Company website
                <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label htmlFor="contact-name" className="mono-label text-muted block mb-2">Name</label>
                <input id="contact-name" required maxLength={100} name="user_name" type="text" autoComplete="name" className={fieldClasses} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mono-label text-muted block mb-2">Email</label>
                <input id="contact-email" required maxLength={200} name="user_email" type="email" autoComplete="email" className={fieldClasses} placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="mono-label text-muted block mb-2">Message</label>
              <textarea
                id="contact-message"
                required
                maxLength={5000}
                name="message"
                rows={4}
                className={`${fieldClasses} resize-none`}
                placeholder="What are you working on?"
              ></textarea>
            </div>
            {validationError && (
              <p role="alert" className="text-sm text-accent">{validationError}</p>
            )}
            {status === 'error' && (
              <p role="alert" className="text-sm text-accent">
                Something went wrong sending your message. Please try again, or email{' '}
                <a href="mailto:james.jullies@gmail.com" className="underline underline-offset-2">james.jullies@gmail.com</a>.
              </p>
            )}
            <MagneticButton>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-accent text-ink font-mono text-xs uppercase tracking-[0.25em] px-12 py-6 hover:bg-paper transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </MagneticButton>
          </form>
        )}

        <div className="mt-16 pt-8 border-t border-line flex flex-wrap items-center gap-x-8 gap-y-4">
          <a href={CV_URL} download className={`${linkClasses} text-accent`}>
            Download CV
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </a>
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`${linkClasses} text-paper`}
            >
              {link.label}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
