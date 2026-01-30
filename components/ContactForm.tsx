
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#030712]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass p-10 md:p-16 rounded-[3rem] border-[#025147]/30 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0F4C81]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-offwhite">Let's <span className="gradient-text">Collaborate</span></h2>
            <p className="text-gray-400">Ready to build the next big thing in AI? Send me a message!</p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-[#2B9B78]/20 text-[#2B9B78] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-offwhite">Message Received!</h3>
              <p className="text-gray-400 mb-8">I'll get back to you within 24 hours.</p>
              <button onClick={() => setStatus('idle')} className="text-[#0F4C81] font-bold hover:text-[#2B9B78] transition-colors">Send another one</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#0F4C81] text-offwhite transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#0F4C81] text-offwhite transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Message</label>
                <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#0F4C81] text-offwhite transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full bg-[#0F4C81] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#025147] transition-all disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
