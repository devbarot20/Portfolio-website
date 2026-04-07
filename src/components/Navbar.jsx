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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-2xl shadow-black/30 border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={e => scroll(e, '#home')}
          className="flex items-center gap-2.5 relative group"
        >
          {/* Emblem */}
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold tracking-tighter text-sm shadow-[0_0_15px_rgba(99,102,241,0.4)] group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
            D<span className="text-indigo-200">B</span>
          </div>
          {/* Text */}
          <div className="font-bold text-lg tracking-tight">
            <span className="text-white relative">
              Dev
              <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-indigo-500 group-hover:w-full transition-all duration-300" />
            </span>
            <span className="text-slate-400 font-medium">Barot</span>
            <span className="text-indigo-500">.</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.replace('#', '');
            return (
              <li key={label}>
                <a
                  href={href}
                  onClick={e => scroll(e, href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20" />
                  )}
                  <span className="relative">{label}</span>
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
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full btn-primary text-white text-sm font-semibold"
        >
          <span className="relative z-10">Hire Me</span>
          <span className="relative z-10 text-white/70">→</span>
        </a>

        {/* Hamburger */}
        <button
          id="mobile-menu-btn"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] group"
        >
          <span className={`w-5 h-0.5 rounded-full bg-slate-300 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-5 h-0.5 rounded-full bg-slate-300 transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`w-5 h-0.5 rounded-full bg-slate-300 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out border-t border-white/[0.06] ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(7,7,15,0.92)', backdropFilter: 'blur(24px)' }}
      >
        <ul className="px-6 py-5 flex flex-col gap-1">
          {navLinks.map(({ label, href }, i) => {
            const isActive = active === href.replace('#', '');
            return (
              <li key={label} style={{ animationDelay: `${i * 60}ms` }}>
                <a
                  href={href}
                  onClick={e => scroll(e, href)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-indigo-300 bg-indigo-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />}
                  {label}
                </a>
              </li>
            );
          })}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={e => scroll(e, '#contact')}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl btn-primary text-white text-sm font-semibold"
            >
              <span className="relative z-10">Hire Me →</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
