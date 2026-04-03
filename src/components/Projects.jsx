import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'A modern personal portfolio showcasing projects and skills. Dark aesthetic with smooth animations, glassmorphism cards, and responsive layout.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    icon: '🌐',
    gradient: 'from-indigo-600/15 to-purple-600/15',
    border: 'border-indigo-500/20',
    hover: 'hover:border-indigo-500/50',
    tag: 'Personal',
    tagCls: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce UI',
    description: 'Feature-rich e-commerce frontend with product listings, cart management, filters, and responsive checkout flow with modern UX patterns.',
    tech: ['React', 'Redux', 'CSS Modules', 'REST API'],
    icon: '🛍️',
    gradient: 'from-emerald-600/15 to-teal-600/15',
    border: 'border-emerald-500/20',
    hover: 'hover:border-emerald-500/50',
    tag: 'UI/UX',
    tagCls: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 'todo',
    title: 'To-Do App',
    description: 'Productivity app with drag-and-drop task management, category filters, real-time updates, and local persistence via localStorage.',
    tech: ['React', 'Context API', 'Tailwind CSS'],
    icon: '✅',
    gradient: 'from-orange-600/15 to-rose-600/15',
    border: 'border-orange-500/20',
    hover: 'hover:border-orange-500/50',
    tag: 'Productivity',
    tagCls: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

function ProjectCard({ id, title, description, tech, icon, gradient, border, hover, tag, tagCls, github, demo, delay, inView }) {
  return (
    <div
      id={`project-card-${id}`}
      className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${delay} group relative rounded-3xl p-7 bg-gradient-to-br ${gradient} border ${border} ${hover} card-hover flex flex-col h-full overflow-hidden`}
    >
      {/* Hover glow top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div className="flex items-start justify-between mb-5">
        {/* Icon */}
        <div className={`w-13 h-13 rounded-2xl glass flex items-center justify-center text-2xl border ${border} p-3`}>
          {icon}
        </div>
        {/* Tag */}
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${tagCls}`}>{tag}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2.5 group-hover:gradient-text transition-all duration-300">{title}</h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-5">{description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map(t => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-lg glass border border-white/[0.08] text-[11px] text-slate-400 font-mono"
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
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass border border-white/10 hover:border-white/25 text-sm text-slate-300 hover:text-white transition-all duration-200"
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
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl btn-primary text-sm text-white"
        >
          <span className="relative z-10 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </span>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: titleRef, inView: titleIn } = useScrollReveal();
  const { ref: cardsRef, inView: cardsIn } = useScrollReveal();

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(168,85,247,0.07) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={titleRef} className={`reveal ${titleIn ? 'in-view' : ''} text-center mb-16`}>
          <p className="section-label mb-3">// featured work</p>
          <h2 className="text-4xl md:text-[2.75rem] font-black mb-2">
            Projects
          </h2>
          <span className="section-line" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-[0.95rem]">
            A selection of projects I've built — each one a meaningful step forward in my journey as a developer.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} {...project} delay={i + 1} inView={cardsIn} />
          ))}
        </div>

        <div className={`reveal ${titleIn ? 'in-view' : ''} reveal-delay-4 text-center mt-12`}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            id="view-all-projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass-strong border border-white/10 hover:border-indigo-500/35 text-slate-400 hover:text-indigo-300 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
