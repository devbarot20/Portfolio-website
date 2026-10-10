import { useEffect } from 'react';

export default function CaseStudyModal({ isOpen, onClose, project }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-full bg-[#0f111a] border-2 border-[#1e293b] shadow-[8px_8px_0px_rgba(79,70,229,0.3)] flex flex-col overflow-hidden animate-slide-up">
        
        {/* Header / Close Button */}
        <div className="flex justify-between items-center p-6 border-b-2 border-[#1e293b] bg-[#050505]">
          <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
            Case Study: <span style={{ color: project.accentColor }}>{project.title}</span>
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-[#1e293b] text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-10 custom-scrollbar">
          
          {/* Overview */}
          <div className="mb-12">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Overview</h3>
            <p className="text-lg text-slate-300 leading-relaxed font-medium">
              {project.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* The Problem */}
            <div>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">The Problem</h3>
              <p className="text-slate-400 leading-relaxed">
                Users needed a more intuitive and efficient way to accomplish their goals within this domain. Existing solutions were either too complex, visually outdated, or lacked the performance required for a seamless experience. The challenge was to simplify the workflow without sacrificing powerful features.
              </p>
            </div>

            {/* The Solution */}
            <div>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">The Solution</h3>
              <p className="text-slate-400 leading-relaxed">
                I designed and developed a modern, responsive interface focusing on speed and accessibility. By implementing a clean UI and robust architecture, the final product delivers a delightful user experience that significantly reduces friction and improves overall satisfaction.
              </p>
            </div>
          </div>

          {/* Design Process / Visuals */}
          <div className="mb-12">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Project Visuals</h3>
            <div className="w-full h-64 md:h-96 bg-[#050505] border-2 border-[#334155] flex flex-col items-center justify-center text-slate-500 relative overflow-hidden group">
              <img 
                src={project.image} 
                alt={`${project.title} Preview`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a]/80 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Tech Stack Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="px-4 py-2 bg-[#050505] border-2 border-[#334155] text-sm text-slate-300 font-bold uppercase tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer / Final Links */}
        <div className="p-6 border-t-2 border-[#1e293b] bg-[#050505] flex flex-col sm:flex-row gap-4 justify-end">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#334155] hover:border-white text-sm font-bold text-slate-300 hover:text-white transition-all duration-200 uppercase tracking-wide bg-[#0f111a]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 border-2 text-sm font-bold text-white transition-all duration-200 uppercase tracking-wide hover:-translate-y-1"
            style={{ backgroundColor: project.accentColor, borderColor: project.accentColor, boxShadow: '2px 2px 0px rgba(255,255,255,0.2)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Project
          </a>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0f111a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
