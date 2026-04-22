'use client';

import { motion } from 'framer-motion';

const WORDS = [
  'BAR ズキュン',
  '大人のおしゃれ隠れ家',
  'Shinjuku Gyoen',
  'Neon Nights',
  'Cocktails & Whisky',
  'since 2025',
];

export default function Marquee() {
  const loop = [...WORDS, ...WORDS, ...WORDS];

  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-champagne/25 bg-cream py-10"
    >
      <motion.div
        className="flex gap-16 whitespace-nowrap will-change-transform"
        animate={{ x: ['0%', '-33.3333%'] }}
        transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
      >
        {loop.map((t, i) => {
          const isLatin = !/[　-鿿]/.test(t);
          return (
            <span
              key={i}
              className={`flex items-center gap-16 text-4xl tracking-widest2 text-ink/80 md:text-6xl ${
                isLatin ? 'display-latin italic' : 'display'
              }`}
            >
              <span
                className={
                  i % 3 === 0
                    ? 'neon-text font-medium'
                    : i % 3 === 1
                      ? 'gold-text font-medium'
                      : 'font-normal'
                }
              >
                {t}
              </span>
              <span className="text-champagne text-2xl md:text-3xl">✦</span>
            </span>
          );
        })}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}
