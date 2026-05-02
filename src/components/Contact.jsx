import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

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
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-[#0f111a] border-t-2 border-[#1e293b]">

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div ref={titleRef} className={`reveal ${titleIn ? 'in-view' : ''} mb-20 text-center`}>
          <p className="section-label mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
            Contact Me
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-[1rem] font-medium">
            Have a project in mind or just want to say hi? My inbox is always open.
            Let's build something bold together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Form */}
          <form
            ref={rightRef}
            onSubmit={handleSubmit}
            id="contact-form"
            className={`reveal ${rightIn ? 'in-view' : ''} bg-[#050505] border-4 border-[#1e293b] p-8 sm:p-10 space-y-6 shadow-[12px_12px_0px_#4f46e5]`}
          >
            <h3 className="text-white font-black text-2xl uppercase tracking-tight mb-8">Send a Message</h3>

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
              className={`w-full py-5 text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 ${
                status === 'sent'
                  ? 'bg-[#10b981] border-2 border-[#10b981] text-white shadow-[6px_6px_0px_#064e3b]'
                  : 'btn-primary shadow-[6px_6px_0px_#1e293b]'
                } disabled:cursor-not-allowed`}
              style={status !== 'sent' ? { backgroundColor: '#4f46e5', borderColor: '#4f46e5', color: 'white', fontWeight: 'bold' } : { fontWeight: 'bold' }}
            >
              {status === 'sending' && (
                <svg className="w-5 h-5 animate-spin relative z-10" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
              )}
              {status === 'sent' && <span className="text-xl font-bold">✓</span>}
              <span className="relative z-10 font-bold">
                {status === 'sent' ? 'Message Sent!' : status === 'sending' ? 'Sending...' : 'Send Message →'}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
