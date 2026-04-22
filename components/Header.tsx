'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV = [
  { href: '#hero', label: 'HOME' },
  { href: '#cast', label: 'CAST' },
  { href: '#news', label: 'NEWS' },
  { href: '#system', label: 'SYSTEM' },
  { href: '#access', label: 'ACCESS' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#hero"
          className="text-lg font-light tracking-widest2 text-ink"
        >
          <span className="neon-text font-medium">BAR</span>{' '}
          <span>ズキュン</span>
        </a>

        <nav className="hidden gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-widest2 text-ink/70 transition-colors hover:text-neon-pink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/5 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-widest2 text-ink/80"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
