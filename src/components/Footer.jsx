export default function Footer() {
  const year = new Date().getFullYear();
  const scroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t-4 border-[#1e293b] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-10 h-10 bg-[#4f46e5] border-2 border-[#1e293b] flex items-center justify-center text-white font-black tracking-tighter text-sm shadow-[4px_4px_0px_#1e293b]">
                D<span className="text-[#050505]">B</span>
              </div>
              <div className="font-black text-xl tracking-tight uppercase">
                <span className="text-white">Dev</span>
                <span className="text-slate-400">Barot</span>
                <span className="text-[#4f46e5]">.</span>
              </div>
            </div>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-2">Built bold by Dev Barot</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-3">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={e => scroll(e, `#${item.toLowerCase()}`)}
                className="px-4 py-2 border-2 border-transparent text-sm font-bold text-slate-400 uppercase tracking-wider hover:text-white hover:border-[#1e293b] hover:bg-[#0f111a] transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright + back to top */}
          <div className="flex items-center gap-6">
            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">© {year} Dev Barot</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="w-12 h-12 bg-[#0f111a] border-2 border-[#1e293b] hover:border-[#4f46e5] hover:bg-[#4f46e5] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1 shadow-[4px_4px_0px_#1e293b] hover:shadow-[6px_6px_0px_#1e293b]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
