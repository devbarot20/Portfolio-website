import { useScrollReveal } from '../hooks/useScrollReveal';
import profileImg from '../assets/profile.jpg';

const highlights = [
  { text: 'React & Redux' },
  { text: 'Pixel-perfect UI' },
  { text: 'Performance first' },
  { text: 'Accessibility' },
];

export default function About() {
  const { ref: leftRef, inView: leftIn } = useScrollReveal();
  const { ref: rightRef, inView: rightIn } = useScrollReveal();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[#0f111a] border-t-2 border-[#1e293b]">

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left: Visual ── */}
          <div
            ref={leftRef}
            className={`reveal-left ${leftIn ? 'in-view' : ''} flex justify-center relative`}
          >
            {/* spinning square ring */}
            <div
              className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 border-4 border-dashed border-[#334155] animate-spin-slow"
              style={{ animationDuration: '40s' }}
            />
            <div
              className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 border-4 border-[#4f46e5] animate-spin-slow opacity-20"
              style={{ animationDuration: '30s', animationDirection: 'reverse' }}
            />

            {/* avatar card */}
            <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-[#050505] border-4 border-[#1e293b] shadow-[12px_12px_0px_#4f46e5] overflow-hidden group">
              <img
                src={profileImg}
                alt="Dev Barot"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />

              {/* highlight pills inside card bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 flex-wrap justify-center w-full px-4">
                {highlights.slice(0, 2).map(h => (
                  <span key={h.text} className="text-[10px] font-bold px-2 py-1 bg-[#1e293b] border-2 border-[#334155] text-white uppercase tracking-wider">
                    {h.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -right-4 px-4 py-2 bg-[#10b981] border-2 border-[#050505] text-white text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_#050505] animate-float z-20" style={{ animationDelay: '1s' }}>
              Open to Work
            </div>
            <div className="absolute -bottom-6 -left-4 px-4 py-2 bg-[#9333ea] border-2 border-[#050505] text-white text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_#050505] animate-float z-20" style={{ animationDelay: '2.2s' }}>
              React Expert
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div ref={rightRef} className={`reveal-right ${rightIn ? 'in-view' : ''}`}>
            <p className="section-label mb-4">ABOUT ME</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-6 text-white">
              Crafting Bold<br />
              <span className="text-[#4f46e5]" style={{ textShadow: '4px 4px 0px rgba(79, 70, 229, 0.2)' }}>Experiences</span>
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
                  className="px-4 py-2 border-2 border-[#334155] bg-[#050505] text-slate-300 text-xs font-bold uppercase tracking-wide hover:border-[#4f46e5] hover:text-white transition-all duration-200 cursor-default"
                >
                  {text}
                </span>
              ))}
            </div>

            {/* Resume CTA */}
            <a
              href="https://drive.google.com/file/d/19PgUpk5SCpx8O4J2TK5Oab6w_9cv8x2E/view"
              download="Dev_Barot_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="download-cv-btn"
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-[#4f46e5] border-2 border-[#4f46e5] text-white text-sm font-bold uppercase tracking-widest hover:-translate-y-1 transition-transform duration-200 shadow-[6px_6px_0px_#1e293b] hover:shadow-[8px_8px_0px_#1e293b]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
