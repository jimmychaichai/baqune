'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white via-paper to-white px-6"
    >
      {/* background photo (very subtle) */}
      <div className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1800&q=80&auto=format&fit=crop"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white" />
      </div>

      {/* ambient neon glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-neon-pink/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[480px] w-[480px] rounded-full bg-neon-purple/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-fuchsia-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-10"
        >
          {/* dummy logo: arched neon badge */}
          <div className="relative mx-auto flex h-40 w-40 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-neon-gradient opacity-20 blur-2xl animate-glow" />
            <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full border border-neon-pink/40 bg-white shadow-neon-soft">
              <span className="text-[10px] tracking-widest2 text-neon-pink">
                SHINJUKU GYOEN
              </span>
              <span className="mt-1 text-2xl font-medium tracking-widest2 neon-text">
                BAR
              </span>
              <span className="text-xl font-light tracking-widest2 text-ink">
                ズキュン
              </span>
              <span className="mt-1 text-[10px] tracking-widest2 text-ink/50">
                EST. 2025
              </span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="text-balance text-3xl font-light leading-relaxed tracking-widest2 md:text-5xl"
        >
          大人の
          <span className="neon-text font-medium">おしゃれ</span>
          <br className="md:hidden" />
          隠れ家バー
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          className="mt-8 max-w-md text-sm leading-loose tracking-wider text-ink/70 md:text-base"
        >
          新宿御苑の路地裏に灯る、ピンクとパープルのネオン。
          <br />
          静かな夜に、胸をズキュンと撃ち抜く一杯を。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#system" className="neon-button">
            RESERVE
          </a>
          <a
            href="#cast"
            className="text-xs tracking-widest2 text-ink/60 underline-offset-8 hover:text-neon-pink hover:underline"
          >
            MEET THE CAST
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/40"
        aria-hidden
      >
        <ChevronDown className="animate-float" size={22} />
      </motion.div>
    </section>
  );
}
