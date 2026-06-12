import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import MagneticButton from './MagneticButton';

const fieldClasses =
  'w-full bg-transparent border-0 border-b border-line px-0 py-4 text-lg md:text-xl text-paper placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-36 border-t border-line scroll-mt-16">
      <SectionHeading
        index="05"
        label="Contact"
        title="Let's Collaborate"
        intro="Ready to build the next big thing in AI? Send me a message!"
      />

      <div className="max-w-3xl">
        {status === 'success' ? (
          <div className="py-12 border-t border-line">
            <span className="font-mono text-accent text-2xl" aria-hidden="true">✓</span>
            <h3 className="display-heading text-3xl md:text-4xl text-paper mt-6 mb-3">
              Message Received!
            </h3>
            <p className="text-muted mb-10">I'll get back to you within 24 hours.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mono-label text-paper border-b border-paper/30 pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Send another one
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="mono-label text-muted block mb-2">Name</label>
                <input required type="text" className={fieldClasses} placeholder="John Doe" />
              </div>
              <div>
                <label className="mono-label text-muted block mb-2">Email</label>
                <input required type="email" className={fieldClasses} placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="mono-label text-muted block mb-2">Message</label>
              <textarea
                required
                rows={4}
                className={`${fieldClasses} resize-none`}
                placeholder="How can I help you?"
              ></textarea>
            </div>
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
      </div>
    </section>
  );
};

export default ContactForm;
