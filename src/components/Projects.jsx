import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'A modern personal portfolio showcasing projects and skills. Brutalist aesthetic with bold typography, solid colors, and responsive layout.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    tag: 'Personal',
    accentColor: '#4f46e5',
    github: 'https://github.com',
    demo: 'https://portfolio-website-alpha-one-92.vercel.app/',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce UI',
    description: 'Feature-rich e-commerce frontend with product listings, cart management, filters, and responsive checkout flow with modern UX patterns.',
    tech: ['React', 'Redux', 'CSS Modules', 'REST API'],
    tag: 'UI/UX',
    accentColor: '#10b981',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 'todo',
    title: 'To-Do App',
    description: 'Productivity app with drag-and-drop task management, category filters, real-time updates, and local persistence via localStorage.',
    tech: ['React', 'Context API', 'Tailwind CSS'],
    tag: 'Productivity',
    accentColor: '#f59e0b',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

function ProjectCard({ id, title, description, tech, tag, accentColor, github, demo, delay, inView }) {
  return (
    <div
      id={`project-card-${id}`}
      className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${delay} group relative p-6 sm:p-8 bg-[#0f111a] border-2 border-[#1e293b] card-hover flex flex-col h-full overflow-hidden`}
      style={{ '--hover-color': accentColor }}
    >
      <div className="flex items-start justify-between mb-6">
        {/* Decorative solid shape */}
        <div className="w-8 h-8 border-2 flex items-center justify-center" style={{ borderColor: accentColor, backgroundColor: `${accentColor}15` }}>
          <div className="w-2 h-2" style={{ backgroundColor: accentColor }} />
        </div>
        {/* Tag */}
        <span className="text-xs font-bold px-3 py-1 uppercase tracking-wider border-2" style={{ borderColor: accentColor, color: accentColor, backgroundColor: `${accentColor}10` }}>
          {tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-white transition-colors duration-200" style={{ textShadow: `2px 2px 0px ${accentColor}40` }}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-[0.95rem] leading-relaxed flex-grow mb-6 font-medium">
        {description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tech.map(t => (
          <span
            key={t}
            className="px-2.5 py-1 bg-[#1e293b] border border-[#334155] text-[11px] text-slate-300 font-mono font-bold uppercase"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-auto">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          id={`${id}-github-btn`}
          className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-[#334155] hover:border-white text-sm font-bold text-slate-300 hover:text-white transition-all duration-200 uppercase tracking-wide bg-[#050505]"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          id={`${id}-demo-btn`}
          className="flex-1 flex items-center justify-center gap-2 py-3 border-2 text-sm font-bold text-white transition-all duration-200 uppercase tracking-wide hover:-translate-y-1"
          style={{ backgroundColor: accentColor, borderColor: accentColor, boxShadow: `2px 2px 0px rgba(255,255,255,0.2)` }}
        >
          <span className="relative z-10 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </span>
        </a>
      </div>

      {/* CSS dynamic hover injection */}
      <style>{`
        #project-card-${id}:hover {
          border-color: ${accentColor};
          box-shadow: 8px 8px 0px ${accentColor};
        }
      `}</style>
    </div>
  );
}

export default function Projects() {
  const { ref: titleRef, inView: titleIn } = useScrollReveal();
  const { ref: cardsRef, inView: cardsIn } = useScrollReveal();

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-[#050505] border-t-2 border-[#1e293b]">

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={titleRef} className={`reveal ${titleIn ? 'in-view' : ''} mb-20 md:flex items-end justify-between`}>
          <div>
            <p className="section-label mb-4">SELECTED WORKS</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
              Projects
            </h2>
          </div>
          <p className="text-slate-400 mt-6 md:mt-0 max-w-sm text-[1rem] font-medium border-l-4 border-[#4f46e5] pl-4">
            A selection of bold projects built with modern technologies.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} {...project} delay={i + 1} inView={cardsIn} />
          ))}
        </div>

        <div className={`reveal ${titleIn ? 'in-view' : ''} reveal-delay-4 mt-16 text-center`}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            id="view-all-projects"
            className="btn-secondary inline-flex items-center gap-3 px-8 py-4 bg-[#0f111a]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View GitHub Archive
          </a>
        </div>
      </div>
    </section>
  );
}
