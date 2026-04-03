export default function Footer() {
  const year = new Date().getFullYear();
  const scroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06] pt-12 pb-8 mt-4">
      {/* top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-mono font-bold text-lg">
              <span className="gradient-text">&lt;Dev</span>
              <span className="text-white">Portfolio</span>
              <span className="gradient-text"> /&gt;</span>
            </p>
            <p className="text-slate-600 text-xs mt-1.5">Designed &amp; Built with ❤️ by Alex Johnson</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-1">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={e => scroll(e, `#${item.toLowerCase()}`)}
                className="px-3 py-1.5 rounded-lg text-sm text-slate-500 hover:text-indigo-400 hover:bg-indigo-500/8 transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright + back to top */}
          <div className="flex items-center gap-4">
            <p className="text-slate-600 text-xs">© {year} Alex Johnson</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="w-9 h-9 rounded-xl glass border border-white/10 hover:border-indigo-500/40 hover:text-indigo-400 text-slate-500 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
