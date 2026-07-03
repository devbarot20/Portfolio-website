import { useEffect, useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import profileImg from '../assets/profile.png';

const highlights = [
  { text: 'React & Redux' },
  { text: 'Pixel-perfect UI' },
  { text: 'Performance first' },
  { text: 'Accessibility' },
];

const stats = [
  { label: 'Projects Built', value: 10, suffix: '+' },
  { label: 'Technologies', value: 15, suffix: '+' },
  { label: 'Open Source', value: 5, suffix: '+' },
  { label: 'Commits', value: 500, suffix: '+' },
];

function AnimatedCounter({ label, value, suffix = '', inView, delay = 0 }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true;
      const duration = 2000;
      const steps = 30;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${delay} text-center`}>
      <div className="text-3xl sm:text-4xl font-black text-white">
        <span className="gradient-text">{count}</span>{suffix}
      </div>
      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  const { ref: leftRef, inView: leftIn } = useScrollReveal();
  const { ref: rightRef, inView: rightIn } = useScrollReveal();
  const { ref: statsRef, inView: statsIn } = useScrollReveal();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[#0f111a] border-t-2 border-[#1e293b] aurora-bg">

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left: Visual ── */}
          <div
            ref={leftRef}
            className={`reveal-left ${leftIn ? 'in-view' : ''} flex justify-center relative`}
          >
            {/* spinning square rings */}
            <div
              className="absolute w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 border-4 border-dashed border-[#334155] animate-spin-slow"
              style={{ animationDuration: '40s' }}
            />
            <div
              className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 border-4 border-[#4f46e5] animate-spin-slow opacity-20"
              style={{ animationDuration: '30s', animationDirection: 'reverse' }}
            />
            <div
              className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 border-2 border-[#10b981] animate-spin-slow opacity-10"
              style={{ animationDuration: '20s' }}
            />

            {/* avatar card with gradient border */}
            <div className="relative z-10 gradient-border">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-[#050505] border-2 border-[#1e293b] shadow-[12px_12px_0px_#4f46e5] overflow-hidden group">
                <img
                  src={profileImg}
                  alt="Dev Barot"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4f46e5]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* highlight pills inside card bottom */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 flex-wrap justify-center w-full px-4">
                  {highlights.slice(0, 2).map(h => (
                    <span key={h.text} className="text-[10px] font-bold px-2 py-1 bg-[#1e293b]/90 backdrop-blur-sm border-2 border-[#334155] text-white uppercase tracking-wider">
                      {h.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -right-4 px-4 py-2 bg-gradient-to-r from-[#10b981] to-[#34d399] border-2 border-[#050505] text-white text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_#050505] animate-float z-20" style={{ animationDelay: '1s' }}>
              Open to Work
            </div>
            <div className="absolute -bottom-6 -left-4 px-4 py-2 bg-gradient-to-r from-[#9333ea] to-[#a855f7] border-2 border-[#050505] text-white text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_#050505] animate-float-reverse z-20" style={{ animationDelay: '2.2s' }}>
              React Expert
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div ref={rightRef} className={`reveal-right ${rightIn ? 'in-view' : ''}`}>
            <p className="section-label mb-4">ABOUT ME</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">
              <span className="text-white">Crafting Bold<br /></span>
              <span className="gradient-text">Experiences</span>
            </h2>

            <div className="space-y-6 text-slate-400 leading-relaxed text-[1rem] font-medium">
              <p>
                I'm <span className="text-white font-bold bg-[#1e293b] px-2">Dev Barot</span>, a passionate Frontend
                Developer building modern web applications that are fast,
                accessible, and visually striking.
                Currently open to internship opportunities as a Frontend Developer.
              </p>
              <p>
                My focus is on <span className="text-white font-bold border-b-2 border-[#4f46e5]">React.js</span>, crafting
                pixel-perfect UIs from designs, and obsessing over performance. I believe great software is
                both technically sound and aesthetically bold.
              </p>
              <p>
                When I'm not shipping features, I'm exploring new patterns, contributing to open source,
                and writing about frontend development.
              </p>
              <p>
                Currently, I am improving my problem-solving skills and exploring more advanced frontend concepts to become a better developer.
              </p>
            </div>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-3 mt-8">
              {highlights.map(({ text }) => (
                <span
                  key={text}
                  className="px-4 py-2 border-2 border-[#334155] bg-[#050505] text-slate-300 text-xs font-bold uppercase tracking-wide hover:border-[#4f46e5] hover:text-white hover:bg-[#4f46e5]/10 transition-all duration-200 cursor-default"
                >
                  {text}
                </span>
              ))}
            </div>

            {/* Resume CTA */}
            <a
              href="https://drive.google.com/file/d/1l_gGFmLzr242BIkwx_h9rk5PbjYXj_9X/view?usp=sharing"
              download="Dev_Barot_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="download-cv-btn"
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-gradient-to-r from-[#4f46e5] to-[#6366f1] border-2 border-[#4f46e5] text-white text-sm font-bold uppercase tracking-widest hover:-translate-y-1 transition-transform duration-200 shadow-[6px_6px_0px_#1e293b] hover:shadow-[8px_8px_0px_#1e293b] overflow-hidden relative group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="relative z-10">Download Résumé</span>
            </a>
          </div>
        </div>

        {/* ── Stats Counter ── */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t-2 border-[#1e293b]">
          {stats.map((stat, i) => (
            <AnimatedCounter key={stat.label} {...stat} inView={statsIn} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
