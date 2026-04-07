import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    bgBase: 'bg-white/[0.02]',
    border: 'border-blue-500/20',
    iconBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
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
    bgBase: 'bg-white/[0.02]',
    border: 'border-indigo-500/20',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
    accent: '#6366f1',
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
    bgBase: 'bg-white/[0.02]',
    border: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
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

function SkillBar({ name, level, inView, delay }) {
  return (
    <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${delay}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-300">{name}</span>
        </div>
        <span className="font-mono text-[11px] text-slate-500 bg-white/5 px-2 py-0.5 rounded">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <div
          className="progress-fill"
          style={{ width: inView ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function SkillCard({ title, icon, bgBase, border, iconBg, skills, inView, cardDelay }) {
  return (
    <div className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${cardDelay} rounded-2xl p-6 ${bgBase} border ${border} card-hover relative overflow-hidden`}>

      <div className="flex items-center gap-3 mb-7">
        <div className={`w-11 h-11 rounded-xl border flex items-center justify-center font-bold text-base ${iconBg}`}>
          {icon}
        </div>
        <h3 className="font-semibold text-white">{title}</h3>
      </div>

      <div className="space-y-5">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} inView={inView} delay={Math.min(i + 1, 6)} />
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
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div ref={titleRef} className={`reveal ${titleIn ? 'in-view' : ''} text-center mb-16`}>
          <p className="section-label mb-3">// skills & expertise</p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black mb-2">My Tech Stack</h2>
          <span className="section-line" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-[0.95rem]">
            A curated set of technologies I use to build modern, high-quality web applications.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} {...cat} inView={cardsIn} cardDelay={i + 1} />
          ))}
        </div>

        {/* Tags ticker */}
        <div ref={tagsRef} className={`reveal ${tagsIn ? 'in-view' : ''} mt-16 overflow-hidden`}>
          <p className="text-center text-xs text-slate-600 font-mono mb-4 tracking-widest">// more expertise</p>
          <div className="flex gap-3 animate-ticker" style={{ width: 'max-content' }}>
            {[...tags, ...tags].map((tag, i) => (
              <span
                key={i}
                className="flex-shrink-0 px-4 py-2 rounded-full glass border border-white/[0.07] text-slate-400 text-sm font-medium whitespace-nowrap"
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
