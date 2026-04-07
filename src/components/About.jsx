import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  { text: 'React & Next.js' },
  { text: 'Pixel-perfect UI' },
  { text: 'Performance first' },
  { text: 'Accessibility' },
];

export default function About() {
  const { ref: leftRef, inView: leftIn } = useScrollReveal();
  const { ref: rightRef, inView: rightIn } = useScrollReveal();

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left: Visual ── */}
          <div
            ref={leftRef}
            className={`reveal-left ${leftIn ? 'in-view' : ''} flex justify-center relative`}
          >
            {/* spinning orbit ring */}
            <div
              className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-dashed border-indigo-500/20 animate-spin-slow"
              style={{ animationDuration: '30s' }}
            />

            {/* avatar card */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl glass-strong border border-white/10 flex flex-col items-center justify-center glow">
              <div className="text-[50px] font-bold text-slate-300 mb-3 animate-float" style={{ animationDelay: '0.5s' }}>DB</div>
              <p className="font-mono text-sm text-indigo-400">Dev Barot</p>
              <p className="text-xs text-slate-500 mt-1">Frontend Developer</p>

              {/* highlight pills inside card bottom */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 flex-wrap justify-center w-full px-2 sm:px-3">
                {highlights.slice(0, 2).map(h => (
                  <span key={h.text} className="text-[10px] px-2 py-1 rounded-full glass border border-white/10 text-slate-400 whitespace-nowrap">
                    {h.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -right-4 px-4 py-2 rounded-2xl glass-strong border border-emerald-500/25 text-emerald-400 text-xs font-semibold animate-float" style={{ animationDelay: '1s' }}>
              Open to Work
            </div>
            <div className="absolute -bottom-6 -left-4 px-4 py-2 rounded-2xl glass-strong border border-purple-500/25 text-purple-400 text-xs font-semibold animate-float" style={{ animationDelay: '2.2s' }}>
              React Expert
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div ref={rightRef} className={`reveal-right ${rightIn ? 'in-view' : ''}`}>
            <p className="section-label mb-3">// about me</p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black leading-tight mb-2">
              Crafting Digital<br />
              {/* <span className="gradient-text">Experiences</span> */}
            </h2>
            <span className="section-line block mb-8 !mx-0" />

            <div className="space-y-4 text-slate-400 leading-relaxed text-[0.95rem]">
              <p>
                I'm <span className="text-white font-semibold">Dev Barot</span>, a passionate Frontend
                Developer with 2+ years of experience building modern web applications that are fast,
                accessible, and delightful to use.
              </p>
              <p>
                My focus is on <span className="text-indigo-400 font-medium">React.js</span>, crafting
                pixel-perfect UIs from designs, and obsessing over performance. I believe great software is
                both technically sound and aesthetically beautiful.
              </p>
              <p>
                When I'm not shipping features, I'm exploring new patterns, contributing to open source,
                and writing about frontend development.
              </p>
            </div>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2 mt-7">
              {highlights.map(({ text }) => (
                <span
                  key={text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 text-slate-300 text-xs font-medium hover:border-indigo-500/40 hover:text-indigo-300 transition-all duration-200"
                >
                  {text}
                </span>
              ))}
            </div>



            {/* Resume CTA */}
            <a
              href="/Dev_Barot_Resume.pdf"
              download="Dev_Barot_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="download-cv-btn"
              className="inline-flex items-center gap-2.5 mt-8 px-6 py-3 rounded-full glass-strong border border-indigo-500/25 text-indigo-300 text-sm font-semibold hover:bg-indigo-500/10 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
