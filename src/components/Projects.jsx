import { useScrollReveal } from '../hooks/useScrollReveal';

const projectImages = {
  herbhex: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=400&fit=crop&auto=format',
  'ai-finance': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
  'meal-planner': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop&auto=format',
};

const projects = [
  {
    id: 'herbhex',
    title: 'HERBHEX',
    description: 'Modern herbal skincare e-commerce platform focused on organic beauty products, smooth product browsing, responsive shopping experience, and clean UI with nature-inspired aesthetics.',
    tech: ['React', 'Tailwind CSS', 'Redux', 'REST API'],
    tag: 'FULL STACK',
    accentColor: '#10b981',
    github: 'https://github.com/devbarot20/Herbal-Skin-Care-Solution.git',
    demo: 'https://herbal-skin-care-solution.vercel.app/',
  },
  {
    id: 'ai-finance',
    title: 'AI FINANCE DASHBOARD',
    description: 'Smart personal finance dashboard with expense tracking, AI-generated insights, budgeting analytics, interactive charts, and responsive data visualization for modern financial management.',
    tech: ['React', 'Chart.js', 'Tailwind CSS', 'Context API'],
    tag: 'FRONTEND HEAVY',
    accentColor: '#3b82f6',
    github: 'https://github.com/devbarot20/AI-Powered-Personal-Finance-Dashboard-.git',
    demo: 'https://ai-powered-personal-finance-dashboa-theta.vercel.app/',
  },
  {
    id: 'meal-planner',
    title: 'MEAL PLANNER & RECIPE APP',
    description: 'Full stack meal planning and recipe management app with personalised weekly meal schedules, rich recipe browsing, cloud-hosted food imagery via Cloudinary, secure REST API backend, and a smooth, responsive React interface.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
    tag: 'FULL STACK',
    accentColor: '#f97316',
    github: 'https://github.com/devbarot20/MealPlanner.git',
    demo: 'https://meal-planner-virid-nu.vercel.app/login',
  },
];

function ProjectCard({ id, title, description, tech, tag, accentColor, github, demo, delay, inView }) {
  return (
    <div
      id={`project-card-${id}`}
      className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${delay} group relative bg-[#0f111a] border-2 border-[#1e293b] flex flex-col overflow-hidden`}
      style={{ '--hover-color': accentColor }}
    >
      {/* Image Preview */}
      <div className="relative h-48 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--hover-color)]/20 to-transparent" />
        <img
          src={projectImages[id]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a] via-transparent to-transparent" />

        {/* Tag on image */}
        <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 uppercase tracking-wider border-2 backdrop-blur-sm" style={{ borderColor: accentColor, color: accentColor, backgroundColor: `${accentColor}20` }}>
          {tag}
        </span>
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-white transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-[0.95rem] leading-relaxed flex-grow mb-6 font-medium">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter">
              <span className="text-white">Pro</span><span className="gradient-text">jects</span>
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
            href="https://github.com/devbarot20?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            id="view-all-projects"
            className="btn-secondary inline-flex items-center gap-3 px-8 py-4 bg-[#0f111a]/90 backdrop-blur-sm"
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
