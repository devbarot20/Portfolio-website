import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    bgBase: 'bg-[#0f111a]',
    border: 'border-[#1e293b]',
    iconBg: 'bg-[#3b82f6]',
    accent: '#3b82f6',
    skills: [
      { name: 'HTML5',      level: 95 },
      { name: 'CSS3',       level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 70 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '<>',
    bgBase: 'bg-[#0f111a]',
    border: 'border-[#1e293b]',
    iconBg: 'bg-[#4f46e5]',
    accent: '#4f46e5',
    skills: [
      { name: 'React.js',    level: 88 },
      { name: 'Tailwind CSS',level: 92 },
      { name: 'Next.js',     level: 72 },
      { name: 'Redux',       level: 75 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '</>',
    bgBase: 'bg-[#0f111a]',
    border: 'border-[#1e293b]',
    iconBg: 'bg-[#10b981]',
    accent: '#10b981',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code',      level: 95 },
      { name: 'Figma',        level: 78 },
      { name: 'REST APIs',    level: 82 },
    ],
  },
];

const tags = ['Responsive Design', 'Web Accessibility', 'Performance Optimization', 'SEO Basics', 'Agile/Scrum', 'Clean Code', 'Code Review', 'UI/UX Design'];

function SkillBar({ name, level, inView, delay, accent }) {
  return (
    <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${delay}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-[0.9rem] font-bold text-slate-200 uppercase tracking-wide">{name}</span>
        </div>
        <span className="font-mono font-bold text-xs text-white px-2 py-0.5 border-2 border-[#1e293b] bg-[#050505]">{level}%</span>
      </div>
      <div className="h-3 w-full border-2 border-[#1e293b] bg-[#050505] overflow-hidden p-[2px]">
        <div
          className="h-full bg-white transition-all duration-1000 ease-out"
          style={{ width: inView ? `${level}%` : '0%', backgroundColor: accent }}
        />
      </div>
    </div>
  );
}

function SkillCard({ title, icon, bgBase, border, iconBg, accent, skills, inView, cardDelay }) {
  return (
    <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${cardDelay} p-8 ${bgBase} border-2 ${border} relative overflow-hidden group hover:-translate-y-1 transition-transform duration-200`} style={{ boxShadow: `4px 4px 0px rgba(30,41,59,0.5)` }}>
      
      {/* Decorative corner square */}
      <div className="absolute top-0 right-0 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: accent, backgroundColor: `${accent}20` }} />

      <div className="flex items-center gap-4 mb-8">
        <div className={`w-14 h-14 border-2 border-[#050505] flex items-center justify-center font-bold text-lg text-white shadow-[4px_4px_0px_#050505]`} style={{ backgroundColor: accent }}>
          {icon}
        </div>
        <h3 className="font-black text-xl text-white uppercase tracking-tight" style={{ textShadow: `2px 2px 0px ${accent}40` }}>{title}</h3>
      </div>

      <div className="space-y-6">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} inView={inView} delay={Math.min(i + 1, 6)} accent={accent} />
        ))}
      </div>
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
              Tech Stack
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
                className="flex-shrink-0 px-6 py-3 border-2 border-[#334155] bg-[#0f111a] text-slate-300 text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_#1e293b]"
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
