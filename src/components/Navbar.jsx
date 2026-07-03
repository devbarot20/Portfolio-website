import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const scrollH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollH > 0 ? (window.scrollY / scrollH) * 100 : 0);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b-2 border-[#1e293b] shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => scroll(e, '#home')}
            className="flex items-center gap-3 relative group"
          >
            {/* Emblem */}
            <div className="w-10 h-10 bg-gradient-to-br from-[#4f46e5] to-[#9333ea] border-2 border-[#1e293b] flex items-center justify-center text-white font-black text-lg shadow-[4px_4px_0px_#1e293b] group-hover:shadow-[2px_2px_0px_#1e293b] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-200">
              D<span className="text-[#050505]">B</span>
            </div>
            {/* Text */}
            <div className="font-black text-xl tracking-tight uppercase">
              <span className="text-white relative">
                Dev
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4f46e5] to-[#9333ea] group-hover:w-full transition-all duration-300" />
              </span>
              <span className="text-slate-400">Barot</span>
              <span className="text-[#4f46e5]">.</span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map(({ label, href }) => {
              const isActive = active === href.replace('#', '');
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={e => scroll(e, href)}
                    className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 border-2 ${
                      isActive
                        ? 'text-white border-[#4f46e5] bg-[#4f46e5]/10'
                        : 'text-slate-400 border-transparent hover:text-white hover:border-[#1e293b]'
                    }`}
                  >
                    <span className="relative">
                      {label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#4f46e5]" />
                      )}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={e => scroll(e, '#contact')}
            id="navbar-hire-btn"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#4f46e5] to-[#6366f1] border-2 border-[#4f46e5] text-white text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_#1e293b] hover:shadow-[6px_6px_0px_#1e293b] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden relative"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Hire Me</span>
            <span className="relative z-10 text-white/70">→</span>
          </a>

          {/* Hamburger */}
          <button
            id="mobile-menu-btn"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 bg-[#0f111a] border-2 border-[#1e293b] flex flex-col items-center justify-center gap-[5px] group shadow-[4px_4px_0px_#1e293b] active:shadow-[0px_0px_0px_#1e293b] active:translate-y-1 active:translate-x-1"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </nav>

        {/* Mobile Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b-2 border-[#1e293b] ${
            menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ background: '#050505' }}
        >
          <ul className="px-6 py-6 flex flex-col gap-2">
            {navLinks.map(({ label, href }, i) => {
              const isActive = active === href.replace('#', '');
              return (
                <li key={label} style={{ animationDelay: `${i * 50}ms` }}>
                  <a
                    href={href}
                    onClick={e => scroll(e, href)}
                    className={`flex items-center gap-3 px-4 py-3 border-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'text-white border-[#4f46e5] bg-[#4f46e5]/10'
                        : 'text-slate-400 border-transparent hover:text-white hover:bg-[#0f111a] hover:border-[#1e293b]'
                    }`}
                  >
                    {isActive && <span className="w-2 h-2 bg-[#4f46e5]" />}
                    {label}
                  </a>
                </li>
              );
            })}
            <li className="mt-4">
              <a
                href="#contact"
                onClick={e => scroll(e, '#contact')}
                className="flex items-center justify-center gap-2 px-4 py-4 bg-gradient-to-r from-[#4f46e5] to-[#6366f1] border-2 border-[#4f46e5] text-white text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_#1e293b]"
              >
                <span className="relative z-10">Hire Me →</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
