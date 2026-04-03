import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const info = [
  { icon: '📧', title: 'Email',    value: 'alex.johnson@example.com', color: 'border-indigo-500/20 bg-indigo-500/5 text-indigo-400' },
  { icon: '📍', title: 'Location', value: 'San Francisco, CA (Remote OK)', color: 'border-purple-500/20 bg-purple-500/5 text-purple-400' },
  { icon: '⏱️', title: 'Response', value: 'Usually within 24 hours',   color: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400' },
];

const socials = [
  {
    name: 'GitHub',
    id: 'social-github',
    href: 'https://github.com',
    cls: 'hover:text-white hover:border-white/30',
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>,
  },
  {
    name: 'LinkedIn',
    id: 'social-linkedin',
    href: 'https://linkedin.com',
    cls: 'hover:text-blue-400 hover:border-blue-400/40',
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  },
  {
    name: 'Twitter',
    id: 'social-twitter',
    href: 'https://twitter.com',
    cls: 'hover:text-sky-400 hover:border-sky-400/40',
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
];

const InputField = ({ label, id, type = 'text', value, onChange, placeholder, required }) => (
  <div>
    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2" htmlFor={id}>
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
      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.04] focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
    />
  </div>
);

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const { ref: leftRef,  inView: leftIn  } = useScrollReveal();
  const { ref: rightRef, inView: rightIn } = useScrollReveal();
  const { ref: titleRef, inView: titleIn } = useScrollReveal();

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
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* bg orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: 'radial-gradient(ellipse, #6366f1, transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div ref={titleRef} className={`reveal ${titleIn ? 'in-view' : ''} text-center mb-16`}>
          <p className="section-label mb-3">// get in touch</p>
          <h2 className="text-4xl md:text-[2.75rem] font-black mb-2">Contact Me</h2>
          <span className="section-line" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-[0.95rem]">
            Have a project in mind or just want to say hi? My inbox is always open.
            Let's build something great together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">

          {/* Left: Info */}
          <div ref={leftRef} className={`reveal-left ${leftIn ? 'in-view' : ''} space-y-4`}>
            {/* Info items */}
            <div className="glass-strong rounded-3xl p-6 border border-white/[0.07] space-y-4">
              <h3 className="text-white font-semibold text-lg mb-5">Let's Connect</h3>
              {info.map(({ icon, title, value, color }) => (
                <div key={title} className={`flex items-center gap-4 p-3 rounded-xl border ${color}`}>
                  <div className="text-xl w-9 text-center flex-shrink-0">{icon}</div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-slate-500 font-medium">{title}</p>
                    <p className="text-slate-200 text-sm mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="glass-strong rounded-3xl p-6 border border-white/[0.07]">
              <h3 className="text-white font-semibold mb-4">Find Me Online</h3>
              <div className="flex flex-col gap-2">
                {socials.map(({ name, id, href, icon, cls }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={id}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/[0.08] text-slate-400 text-sm font-medium transition-all duration-200 ${cls}`}
                  >
                    {icon}
                    {name}
                    <span className="ml-auto text-slate-700">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            ref={rightRef}
            onSubmit={handleSubmit}
            id="contact-form"
            className={`reveal-right ${rightIn ? 'in-view' : ''} glass-strong rounded-3xl p-8 border border-white/[0.07] space-y-5`}
          >
            <h3 className="text-white font-semibold text-lg mb-6">Send a Message</h3>

            <InputField
              label="Your Name" id="name" value={form.name}
              onChange={handleChange} placeholder="Alex Johnson" required
            />
            <InputField
              label="Email Address" id="email" type="email" value={form.email}
              onChange={handleChange} placeholder="alex@example.com" required
            />

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2" htmlFor="message">
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
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.04] focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200 resize-none"
              />
            </div>

            <button
              id="contact-submit-btn"
              type="submit"
              disabled={status !== 'idle'}
              className={`w-full relative overflow-hidden py-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                status === 'sent'
                  ? 'bg-emerald-600/20 border border-emerald-500/40 text-emerald-400'
                  : 'btn-primary text-white'
              } disabled:cursor-not-allowed`}
            >
              {status === 'sending' && (
                <svg className="w-4 h-4 animate-spin relative z-10" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
              )}
              {status === 'sent' && <span className="text-lg">✅</span>}
              <span className="relative z-10">
                {status === 'sent' ? 'Message Sent! I\'ll get back to you soon.' : status === 'sending' ? 'Sending...' : 'Send Message →'}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
