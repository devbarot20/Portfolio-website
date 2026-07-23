import { useScrollReveal } from '../hooks/useScrollReveal';
import profileImg from '../assets/profile.png';

const highlights = [
  { text: 'React & Node.js' },
  { text: 'REST APIs' },
  { text: 'Full Stack' },
  { text: 'Clean Architecture' },
];

export default function About() {
  const { ref: leftRef, inView: leftIn } = useScrollReveal();
  const { ref: rightRef, inView: rightIn } = useScrollReveal();

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-[#0f111a] border-t-2 border-[#1e293b] aurora-bg">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-14 xl:gap-24 items-center">

          {/* ── Left: Visual ── */}
          <div
            ref={leftRef}
            className={`reveal-left ${leftIn ? 'in-view' : ''} flex justify-center relative py-10 sm:py-12`}
          >
            {/* spinning square rings */}
            <div
              className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 border-4 border-dashed border-[#334155] animate-spin-slow"
              style={{ animationDuration: '40s' }}
            />
            <div
              className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 border-4 border-[#4f46e5] animate-spin-slow opacity-20"
              style={{ animationDuration: '30s', animationDirection: 'reverse' }}
            />
            <div
              className="absolute w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 border-2 border-[#10b981] animate-spin-slow opacity-10"
              style={{ animationDuration: '20s' }}
            />

            {/* avatar card */}
            <div className="relative z-10 gradient-border">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-[#050505] border-2 border-[#1e293b] shadow-[10px_10px_0px_#4f46e5] overflow-hidden group">
                <img
                  src={profileImg}
                  alt="Dev Barot"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4f46e5]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* highlight pills inside card bottom */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 flex-wrap justify-center w-full px-3">
                  {highlights.slice(0, 2).map(h => (
                    <span key={h.text} className="text-[9px] sm:text-[10px] font-bold px-2 py-1 bg-[#1e293b]/90 backdrop-blur-sm border-2 border-[#334155] text-white uppercase tracking-wider">
                      {h.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-2 -right-2 sm:-top-2 sm:-right-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#10b981] to-[#34d399] border-2 border-[#050505] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_#050505] animate-float z-20" style={{ animationDelay: '1s' }}>
              Open to Work
            </div>
            <div className="absolute bottom-2 -left-2 sm:-bottom-2 sm:-left-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#9333ea] to-[#a855f7] border-2 border-[#050505] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_#050505] animate-float-reverse z-20" style={{ animationDelay: '2.2s' }}>
              Full Stack Dev
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div ref={rightRef} className={`reveal-right ${rightIn ? 'in-view' : ''}`}>
            <p className="section-label mb-3 sm:mb-4">ABOUT ME</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black uppercase tracking-tighter leading-tight mb-5 sm:mb-6">
              <span className="text-white">Crafting Bold<br /></span>
              <span className="gradient-text">Experiences</span>
            </h2>

            <div className="space-y-4 sm:space-y-5 text-slate-400 leading-relaxed text-[0.95rem] sm:text-[1rem] font-medium">
              <p>
                I'm <span className="text-white font-bold bg-[#1e293b] px-2">Dev Barot</span>, a passionate Full Stack
                Developer who builds end-to-end web applications — from polished,
                responsive UIs to robust server-side APIs.
                Currently open to internship opportunities as a Full Stack Developer.
              </p>
              <p>
                On the frontend I specialise in <span className="text-white font-bold border-b-2 border-[#4f46e5]">React.js</span>, crafting
                pixel-perfect, performant interfaces. On the backend I work with <span className="text-white font-bold border-b-2 border-[#10b981]">Node.js &amp; Express.js</span> to
                design clean REST APIs and handle data with care.
              </p>
              <p>
                I believe great software lives at the intersection of solid architecture and bold aesthetics —
                and I obsess over both sides of that equation.
              </p>
              <p>
                When I'm not shipping features, I'm sharpening my problem-solving skills, exploring new full stack
                patterns, and contributing to open source.
              </p>
            </div>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
              {highlights.map(({ text }) => (
                <span
                  key={text}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-[#334155] bg-[#050505] text-slate-300 text-[10px] sm:text-xs font-bold uppercase tracking-wide hover:border-[#4f46e5] hover:text-white hover:bg-[#4f46e5]/10 transition-all duration-200 cursor-default"
                >
                  {text}
                </span>
              ))}
            </div>

            {/* Resume CTA */}
            <a
              href="https://drive.google.com/file/d/1P3oRqlW0ol3mb2tSviaAxF2jAQzRq_bh/view?usp=sharing"
              download="Dev_Barot_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="download-cv-btn"
              className="inline-flex items-center gap-3 mt-8 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#4f46e5] to-[#6366f1] border-2 border-[#4f46e5] text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:-translate-y-1 transition-transform duration-200 shadow-[6px_6px_0px_#1e293b] hover:shadow-[8px_8px_0px_#1e293b] overflow-hidden relative group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="relative z-10">Download Résumé</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
