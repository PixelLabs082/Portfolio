'use client';

import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from '@/lib/icons';
import { site } from '@/data/site';
import { btnPrimary, iconBtn } from '@/lib/ui';

function Header() {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-6 px-4 py-3.5 sm:px-7 sm:py-[18px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[110px] bg-gradient-to-b from-bg to-transparent" />

      <a
        href="#home"
        className="pointer-events-auto relative z-[2] inline-flex items-center rounded-full border border-line bg-glass px-[18px] py-2.5 font-display text-[1.15rem] font-bold backdrop-blur-lg"
      >
        {site.brand}
      </a>

      <nav
        className="pointer-events-auto relative z-[2] hidden items-center gap-7 rounded-full border border-line bg-glass px-[22px] py-2.5 backdrop-blur-lg lg:flex"
        aria-label="Primary"
      >
        {site.nav.map((link, index) => (
          <a key={link.href} href={link.href} className="flex items-center gap-2 text-[0.86rem] text-muted hover:text-fg">
            <span className="text-[0.7rem] tracking-widest">0{index + 1}</span>
            {link.name}
          </a>
        ))}
      </nav>

      <div className="pointer-events-auto relative z-[2] flex items-center gap-2.5">
        <button
          type="button"
          className={iconBtn}
          onClick={() => {
            const next = theme === 'dark' ? 'light' : 'dark';
            setTheme(next);
            document.documentElement.setAttribute('data-theme', next);
            window.localStorage.setItem('theme', next);
          }}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <a className={`${btnPrimary} hidden min-h-11 lg:inline-flex`} href="#contact">
          Start a project
        </a>
        <button
          type="button"
          className={`${iconBtn} lg:hidden`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[1] flex flex-col justify-between bg-bg px-7 pt-[110px] pb-10">
          <nav className="flex flex-col gap-[18px]">
            {site.nav.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex gap-3 font-display text-[clamp(2rem,8vw,3.4rem)] tracking-[-0.04em] text-fg"
              >
                <span className="mt-[18px] text-[0.9rem] text-muted">0{index + 1} /</span>
                {link.name}
              </a>
            ))}
          </nav>
          <a className={btnPrimary} href="#contact" onClick={closeMenu}>
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
