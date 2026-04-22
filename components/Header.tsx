'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const NAV = [
  { href: '#hero', label: 'HOME', latin: 'home' },
  { href: '#cast', label: 'CAST', latin: 'cast' },
  { href: '#news', label: 'NEWS', latin: 'news' },
  { href: '#system', label: 'SYSTEM', latin: 'system' },
  { href: '#access', label: 'ACCESS', latin: 'access' },
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
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-cream/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#hero"
          className="flex flex-col leading-none"
        >
          <span className="display-latin italic text-[10px] tracking-widest text-champagne">
            shinjuku gyoen
          </span>
          <span className="display mt-0.5 text-lg tracking-widest2 text-ink">
            <span className="neon-text font-medium">BAR</span>{' '}
            <span>ズキュン</span>
          </span>
        </a>

        <nav className="hidden gap-10 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center leading-none"
            >
              <span className="display-latin italic text-[10px] tracking-widest text-champagne/80 transition-colors group-hover:text-champagne">
                {item.latin}
              </span>
              <span className="mt-1 text-[11px] tracking-widest3 text-ink/70 transition-colors group-hover:text-ink">
                {item.label}
              </span>
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
        <div className="md:hidden border-t border-ink/5 bg-cream/95 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-3"
              >
                <span className="display-latin italic text-xs text-champagne">
                  {item.latin}
                </span>
                <span className="text-sm tracking-widest3 text-ink/80">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
