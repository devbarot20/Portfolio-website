import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Design & Prototyping',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    bgBase: 'bg-[#0f111a]',
    border: 'border-[#1e293b]',
    accent: '#f24e1e', // Figma orange-ish red
    gradient: 'from-[#f24e1e] to-[#ff7262]',
    skills: ['Figma', 'Photoshop', 'Illustrator', 'Canva', 'Wireframing', 'Prototyping', 'User Research'],
  },
  {
    title: 'Frontend',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    bgBase: 'bg-[#0f111a]',
    border: 'border-[#1e293b]',
    accent: '#3b82f6',
    gradient: 'from-[#3b82f6] to-[#2563eb]',
    skills: ['React.js', 'Tailwind CSS', 'TypeScript', 'HTML/CSS', 'Next.js', 'Vite', 'Framer Motion'],
  },
  {
    title: 'Backend & Data',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    bgBase: 'bg-[#0f111a]',
    border: 'border-[#1e293b]',
    accent: '#10b981',
    gradient: 'from-[#10b981] to-[#34d399]',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Firebase'],
  },
];

const tags = ['Responsive Design', 'Web Accessibility', 'Performance Optimization', 'SEO Basics', 'Agile/Scrum', 'Clean Code', 'Code Review', 'UI/UX Design'];

function SkillCard({ title, icon, bgBase, border, accent, gradient, skills, inView, cardDelay }) {
  return (
    <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${cardDelay} p-8 ${bgBase} border-2 ${border} relative overflow-hidden group hover:-translate-y-2 transition-all duration-300`} style={{ boxShadow: '4px 4px 0px rgba(30,41,59,0.5)' }}>
      
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:to-[var(--hover-color)]/5 transition-all duration-500 pointer-events-none" style={{ '--hover-color': accent }} />

      {/* Decorative corner square */}
      <div className="absolute top-0 right-0 w-8 h-8 border-b-2 border-l-2 transition-all duration-300 group-hover:w-12 group-hover:h-12" style={{ borderColor: accent, backgroundColor: `${accent}20` }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />

      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className={`w-14 h-14 border-2 border-[#050505] flex items-center justify-center font-bold text-lg text-white shadow-[4px_4px_0px_#050505] bg-gradient-to-br ${gradient}`}>
          {icon}
        </div>
        <h3 className="font-black text-xl text-white uppercase tracking-tight">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3 relative z-10">
        {skills.map((skill, i) => (
          <span 
            key={skill} 
            className="px-3 py-1.5 border-2 border-[#1e293b] bg-[#050505] text-slate-300 text-xs font-bold uppercase tracking-wide hover:text-white transition-colors duration-200"
            style={{
               transitionDelay: `${i * 50}ms`
            }}
          >
            {skill}
          </span>
        ))}
      </div>
      
      <style>{`
        .group:hover span {
           border-color: ${accent}40;
           box-shadow: 2px 2px 0px ${accent}40;
        }
      `}</style>
    </div>
  );
}

export default function Skills() {
  const { ref: titleRef, inView: titleIn } = useScrollReveal();
  const { ref: cardsRef, inView: cardsIn } = useScrollReveal();
  const { ref: tagsRef,  inView: tagsIn  } = useScrollReveal();

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden bg-[#050505] border-t-2 border-[#1e293b]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div ref={titleRef} className={`reveal ${titleIn ? 'in-view' : ''} mb-20 md:flex items-end justify-between`}>
          <div>
            <p className="section-label mb-4">SKILLS & EXPERTISE</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter">
              <span className="text-white">Tech</span>{' '}
              <span className="gradient-text">Stack</span>
            </h2>
          </div>
          <p className="text-slate-400 mt-6 md:mt-0 max-w-sm text-[1rem] font-medium border-l-4 border-[#10b981] pl-4">
            A curated set of technologies I use to build modern, high-quality web applications.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} {...cat} inView={cardsIn} cardDelay={i + 1} />
          ))}
        </div>

        {/* Tags ticker */}
        <div ref={tagsRef} className={`reveal ${tagsIn ? 'in-view' : ''} mt-20 overflow-hidden`}>
          <div className="flex gap-4 animate-ticker" style={{ width: 'max-content' }}>
            {[...tags, ...tags].map((tag, i) => (
              <span
                key={i}
                className="flex-shrink-0 px-6 py-3 border-2 border-[#334155] bg-[#0f111a]/90 backdrop-blur-sm text-slate-300 text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_#1e293b] hover:border-[#4f46e5] hover:text-white transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
