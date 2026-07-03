import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const roles = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Open Source Contributor'];

// Static particles generated once outside component
const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 3 + 3,
  opacity: Math.random() * 0.5 + 0.1,
}));

// Solid floating tech badge
function TechBadge({ label, delay = 0, style = {}, color = '#4f46e5' }) {
  return (
    <div
      className="hidden md:block absolute px-4 py-2 bg-[#0f111a]/90 backdrop-blur-sm border-2 border-[#1e293b] text-xs font-mono font-bold animate-float select-none pointer-events-none"
      style={{
        animationDelay: `${delay}s`,
        boxShadow: `4px 4px 0px ${color}`,
        color: '#e2e8f0',
        ...style
      }}
    >
      {label}
    </div>
  );
}

// Geometric floating shape
function FloatingShape({ type, delay = 0, style = {}, color }) {
  const baseClass = "hidden md:flex absolute animate-spin-slow opacity-80 pointer-events-none items-center justify-center";
  
  let shape;
  if (type === 'circle') {
    shape = <div className="w-16 h-16 rounded-full border-4" style={{ borderColor: color, borderStyle: 'dashed' }} />;
  } else if (type === 'square') {
    shape = <div className="w-12 h-12 border-4" style={{ borderColor: color }} />;
  } else if (type === 'cross') {
    shape = (
      <div className="relative w-12 h-12">
        <div className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2" style={{ backgroundColor: color }} />
        <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2" style={{ backgroundColor: color }} />
      </div>
    );
  } else if (type === 'triangle') {
    shape = (
      <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px]"
        style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: color }} />
    );
  }

  return (
    <div className={baseClass} style={{ animationDelay: `${delay}s`, ...style }}>
      {shape}
    </div>
  );
}

// Aurora Blob
function AuroraBlob({ color, size = 300, delay = 0, style = {} }) {
  return (
    <div
      className="absolute rounded-full opacity-20 blur-3xl pointer-events-none animate-aurora"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent)`,
        animationDelay: `${delay}s`,
        ...style
      }}
    />
  );
}

// Particle Grid
function ParticleGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.size > 2 ? '#4f46e5' : '#6366f1',
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
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
        timeout = setTimeout(() => {
          setRoleIndex(i => (i + 1) % roles.length);
          setTyping(true);
        }, 50);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scroll = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">

      {/* ── Aurora Blobs ── */}
      <AuroraBlob color="#4f46e5" size={400} delay={0} style={{ top: '-10%', right: '-5%' }} />
      <AuroraBlob color="#10b981" size={300} delay={2} style={{ bottom: '-5%', left: '-5%' }} />
      <AuroraBlob color="#9333ea" size={250} delay={4} style={{ top: '40%', left: '40%' }} />

      {/* ── Particle Grid ── */}
      <ParticleGrid />

      {/* ── Floating Geometric Shapes ── */}
      <FloatingShape type="cross" color="#4f46e5" delay={0} style={{ top: '15%', right: '15%' }} />
      <FloatingShape type="circle" color="#10b981" delay={1.5} style={{ bottom: '20%', left: '12%' }} />
      <FloatingShape type="square" color="#9333ea" delay={0.5} style={{ top: '35%', left: '5%' }} />
      <FloatingShape type="triangle" color="#f59e0b" delay={2} style={{ bottom: '35%', right: '8%' }} />

      {/* ── Floating tech labels ── */}
      <TechBadge label="React.js" delay={0} color="#4f46e5" style={{ top: '20%', left: '10%' }} />
      <TechBadge label="Tailwind" delay={1.2} color="#10b981" style={{ top: '28%', right: '8%' }} />
      <TechBadge label="Vite"    delay={2.1} color="#f59e0b" style={{ bottom: '30%', left: '7%' }} />
      <TechBadge label="TypeScript" delay={0.8} color="#3b82f6" style={{ bottom: '20%', right: '10%' }} />
      <TechBadge label="Next.js" delay={1.6} color="#9333ea" style={{ top: '50%', right: '3%' }} />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">

        {/* Available badge */}
        <div className={`reveal ${inView ? 'in-view' : ''} inline-flex items-center gap-2.5 px-4 py-2 bg-[#0f111a]/90 backdrop-blur-sm border-2 border-emerald-500/30 text-sm font-bold mb-10 shadow-[4px_4px_0px_rgba(16,185,129,0.3)]`}>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full bg-emerald-400 opacity-75 rounded-full" />
            <span className="relative inline-flex h-3 w-3 bg-emerald-500 rounded-full" />
          </span>
          <span className="text-slate-200 tracking-wide">AVAILABLE FOR HIRE</span>
        </div>

        {/* Name */}
        <h1 className={`reveal ${inView ? 'in-view' : ''} reveal-delay-1 text-5xl sm:text-7xl md:text-[6.5rem] font-black leading-[1.05] tracking-tighter mb-6 uppercase`}>
          <span className="text-white">Hi, I'm{' '}</span>
          <span className="gradient-text">Dev<br className="hidden sm:block" /> Barot</span>
        </h1>

        {/* Typewriter */}
        <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-2 h-14 flex items-center justify-center mb-8 bg-[#0f111a]/90 backdrop-blur-sm border-2 border-[#1e293b] max-w-lg mx-auto shadow-[4px_4px_0px_rgba(30,41,59,0.5)]`}>
          <span className="text-xl sm:text-2xl font-mono font-bold text-slate-400">
            <span className="text-[#10b981] mr-2">{'>'}</span>
            <span className="text-white">{displayed}</span>
            <span className="animate-blink text-[#4f46e5] ml-1">_</span>
          </span>
        </div>

        {/* Tagline */}
        <p className={`reveal ${inView ? 'in-view' : ''} reveal-delay-3 text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium`}>
          I craft <span className="text-white font-bold border-b-2 border-[#4f46e5]">bold</span>, performant, and accessible web
          experiences — turning complex ideas into powerful interfaces.
        </p>

        {/* CTA buttons */}
        <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-4 flex flex-col sm:flex-row items-center justify-center gap-6 mb-20`}>
          <button
            id="hero-view-projects"
            onClick={() => scroll('#projects')}
            className="btn-primary px-8 py-4 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button
            id="hero-contact-me"
            onClick={() => scroll('#contact')}
            className="btn-secondary px-8 py-4 w-full sm:w-auto bg-[#0f111a]/90 backdrop-blur-sm"
          >
            Contact Me
          </button>
        </div>

        {/* Scroll cue */}
        <div className="flex flex-col items-center gap-3 animate-float">
          <span className="text-[12px] tracking-[0.3em] uppercase text-slate-500 font-bold">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-[#334155] flex items-start justify-center pt-2 bg-[#0f111a]/90 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#4f46e5] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
