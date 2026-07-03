import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/devbarot20',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: '#e2e8f0',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/devbarot',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#0A66C2',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/barotdev20',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: '#1DA1F2',
  },
  {
    name: 'Email',
    url: 'mailto:devbarot20@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: '#4f46e5',
  },
];

const InputField = ({ label, id, type = 'text', value, onChange, placeholder, required }) => (
  <div>
    <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-5 py-4 bg-[#050505] border-2 border-[#1e293b] text-white placeholder-slate-600 text-[0.95rem] font-medium focus:outline-none focus:border-[#4f46e5] focus:shadow-[4px_4px_0px_#4f46e5] transition-all duration-200"
    />
  </div>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const { ref: rightRef, inView: rightIn } = useScrollReveal();
  const { ref: titleRef, inView: titleIn } = useScrollReveal();
  const { ref: socialRef, inView: socialIn } = useScrollReveal();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1600);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-[#0f111a] border-t-2 border-[#1e293b] aurora-bg">

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* Heading */}
        <div ref={titleRef} className={`reveal ${titleIn ? 'in-view' : ''} mb-20 text-center`}>
          <p className="section-label mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            <span className="text-white">Contact</span>{' '}
            <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-[1rem] font-medium">
            Have a project in mind or just want to say hi? My inbox is always open.
            Let's build something bold together.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {/* Social Sidebar */}
          <div ref={socialRef} className={`reveal-left ${socialIn ? 'in-view' : ''} md:col-span-2 flex md:flex-col gap-4 md:gap-3`}>
            {socials.map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 border-2 border-[#1e293b] bg-[#050505] text-slate-300 hover:text-white hover:border-[#4f46e5] transition-all duration-200 group"
              >
                <span className="social-icon group-hover:text-[var(--social-color)]" style={{ '--social-color': s.color }}>
                  {s.icon}
                </span>
                <span className="font-bold text-sm uppercase tracking-wider">{s.name}</span>
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            ref={rightRef}
            onSubmit={handleSubmit}
            id="contact-form"
            className={`reveal-right ${rightIn ? 'in-view' : ''} md:col-span-3 bg-[#050505] border-4 border-[#1e293b] p-8 sm:p-10 space-y-6 shadow-[12px_12px_0px_#4f46e5]`}
          >
            <h3 className="text-white font-black text-2xl uppercase tracking-tight mb-8">
              Send a <span className="gradient-text">Message</span>
            </h3>

            <InputField
              label="Your Name" id="name" value={form.name}
              onChange={handleChange} placeholder="Dev Barot" required
            />
            <InputField
              label="Email Address" id="email" type="email" value={form.email}
              onChange={handleChange} placeholder="dev@example.com" required
            />

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-5 py-4 bg-[#050505] border-2 border-[#1e293b] text-white placeholder-slate-600 text-[0.95rem] font-medium focus:outline-none focus:border-[#4f46e5] focus:shadow-[4px_4px_0px_#4f46e5] transition-all duration-200 resize-none"
              />
            </div>

            <button
              id="contact-submit-btn"
              type="submit"
              disabled={status !== 'idle'}
              className={`w-full py-5 text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden ${
                status === 'sent'
                  ? 'bg-gradient-to-r from-[#10b981] to-[#34d399] border-2 border-[#10b981] text-white shadow-[6px_6px_0px_#064e3b]'
                  : 'bg-gradient-to-r from-[#4f46e5] to-[#6366f1] border-2 border-[#4f46e5] text-white shadow-[6px_6px_0px_#1e293b] hover:shadow-[8px_8px_0px_#1e293b] hover:-translate-y-0.5'
                } disabled:cursor-not-allowed font-bold`}
            >
              {status === 'sending' && (
                <svg className="w-5 h-5 animate-spin relative z-10" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
              )}
              {status === 'sent' && <span className="text-xl font-bold relative z-10">✓</span>}
              <span className="relative z-10 font-bold">
                {status === 'sent' ? 'Message Sent!' : status === 'sending' ? 'Sending...' : 'Send Message →'}
              </span>
              {status === 'idle' && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
