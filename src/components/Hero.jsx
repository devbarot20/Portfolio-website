import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const roles = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Open Source Contributor'];

// Floating tech badge
function TechBadge({ label, delay = 0, style = {} }) {
  return (
    <div
      className="hidden md:block absolute px-3 py-1.5 rounded-xl glass-strong border border-indigo-500/20 text-xs font-mono text-indigo-300 animate-float select-none pointer-events-none"
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      {label}
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const { ref, inView } = useScrollReveal({ threshold: 0.05 });

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scroll = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">

      {/* ── Background orbs & Grid removed ── */}

      {/* ── Floating tech labels ── */}
      <TechBadge label="React.js" delay={0} style={{ top: '22%', left: '8%' }} />
      <TechBadge label="Tailwind" delay={1.2} style={{ top: '35%', right: '7%' }} />
      <TechBadge label="Vite"    delay={2.1} style={{ bottom: '28%', left: '10%' }} />
      <TechBadge label="TypeScript" delay={0.8} style={{ bottom: '22%', right: '8%' }} />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">

        {/* Available badge */}
        <div className={`reveal ${inView ? 'in-view' : ''} inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-strong border border-white/10 text-sm font-medium mb-10`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-slate-300">Available for new opportunities</span>
        </div>

        {/* Name */}
        <h1 className={`reveal ${inView ? 'in-view' : ''} reveal-delay-1 text-4xl sm:text-6xl md:text-[5.5rem] font-black leading-[1.05] tracking-tight mb-5`}>
          Hi, I'm{' '}
          <span className="gradient-text">Dev<br className="hidden sm:block" /> Barot</span>
        </h1>

        {/* Typewriter */}
        <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-2 h-12 flex items-center justify-center mb-7`}>
          <span className="text-xl sm:text-2xl font-mono text-slate-400">
            {'// '}
            <span className="text-indigo-300 font-semibold">{displayed}</span>
            <span className="animate-blink text-purple-400 ml-0.5">|</span>
          </span>
        </div>

        {/* Tagline */}
        <p className={`reveal ${inView ? 'in-view' : ''} reveal-delay-3 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12`}>
          I craft <span className="text-slate-200">beautiful</span>, performant, and accessible web
          experiences — turning complex ideas into elegant, user-friendly interfaces.
        </p>

        {/* CTA buttons */}
        <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20`}>
          <button
            id="hero-view-projects"
            onClick={() => scroll('#projects')}
            className="btn-primary px-8 py-3.5 rounded-full text-white font-semibold text-sm w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button
            id="hero-contact-me"
            onClick={() => scroll('#contact')}
            className="px-8 py-3.5 rounded-full glass-strong border border-white/15 hover:border-indigo-400/40 hover:bg-indigo-500/5 text-slate-200 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto"
          >
            Contact Me
          </button>
        </div>

        {/* Scroll cue */}
        <div className="flex flex-col items-center gap-2 animate-float">
          <span className="text-[11px] tracking-[0.25em] uppercase text-slate-600 font-medium">scroll</span>
          <div className="w-5 h-9 rounded-full border border-slate-700 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-indigo-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
