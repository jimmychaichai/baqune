'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

const LINE_1 = ['大', '人', 'の'];
const LINE_1_ACCENT = ['お', 'し', 'ゃ', 'れ'];
const LINE_2 = ['隠', 'れ', '家', 'バ', 'ー'];

const charVariants = {
  hidden: { y: '110%', opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.6 + i * 0.05,
      duration: 1.1,
      ease: [0.2, 0.9, 0.3, 1],
    },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ivory-radial px-6"
    >
      {/* parallax photo background */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1800&q=80&auto=format&fit=crop"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-[0.09]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-paper/75 to-paper" />
      </motion.div>

      {/* muted animated blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-neon-pink/20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-[560px] w-[560px] rounded-full bg-neon-purple/18 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, -18, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-champagne/30 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* slow rotating conic sheen */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          background:
            'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,79,184,0.3) 60deg, transparent 140deg, rgba(201,168,118,0.4) 220deg, transparent 300deg)',
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      {/* subtle vertical side ornaments */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-4 text-champagne/80">
          <span className="display-latin italic text-[10px] tracking-widest">
            est. 2025
          </span>
          <div className="h-20 w-px bg-gradient-to-b from-transparent via-champagne/70 to-transparent" />
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-4 text-champagne/80">
          <div className="h-20 w-px bg-gradient-to-b from-transparent via-champagne/70 to-transparent" />
          <span
            className="display-latin italic text-[10px] tracking-widest"
            style={{ writingMode: 'vertical-rl' }}
          >
            tokyo · shinjuku
          </span>
        </div>
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="display-latin mb-6 text-sm italic tracking-widest text-champagne"
        >
          — a hideaway bar in shinjuku gyoen —
        </motion.p>

        <motion.div style={{ y: logoY }} className="mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
            className="relative mx-auto flex h-44 w-44 items-center justify-center"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-neon-gradient blur-2xl"
              animate={{ opacity: [0.12, 0.3, 0.12] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              aria-hidden
              className="absolute inset-[-12px] rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, rgba(201,168,118,0.0) 0deg, rgba(201,168,118,0.9) 90deg, rgba(255,79,184,0.0) 180deg, rgba(157,78,221,0.8) 270deg, rgba(201,168,118,0.0) 360deg)',
                mask: 'radial-gradient(circle, transparent 66%, black 68%, black 100%)',
                WebkitMask:
                  'radial-gradient(circle, transparent 66%, black 68%, black 100%)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
            />
            <div className="relative flex h-44 w-44 flex-col items-center justify-center rounded-full border border-champagne/50 bg-cream shadow-luxe">
              <span className="display-latin italic text-[10px] tracking-widest text-champagne-dark">
                shinjuku gyoen
              </span>
              <span className="display mt-1 text-2xl font-medium tracking-widest2 neon-text">
                BAR
              </span>
              <span className="display text-xl font-normal tracking-widest2 text-ink">
                ズキュン
              </span>
              <span className="display-latin mt-1 italic text-[10px] tracking-widest text-ink/40">
                est. 2025
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          style={{ y: titleY }}
          initial="hidden"
          animate="show"
          className="display text-balance text-[40px] font-normal leading-[1.3] tracking-widest2 md:text-6xl"
        >
          <span className="block overflow-hidden">
            <span className="inline-flex">
              {LINE_1.map((c, i) => (
                <motion.span
                  key={`l1-${i}`}
                  custom={i}
                  variants={charVariants}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
              {LINE_1_ACCENT.map((c, i) => (
                <motion.span
                  key={`l1a-${i}`}
                  custom={i + LINE_1.length}
                  variants={charVariants}
                  className="inline-block neon-text font-medium"
                >
                  {c}
                </motion.span>
              ))}
            </span>
          </span>
          <span className="mt-3 block overflow-hidden">
            <span className="inline-flex">
              {LINE_2.map((c, i) => (
                <motion.span
                  key={`l2-${i}`}
                  custom={i + LINE_1.length + LINE_1_ACCENT.length}
                  variants={charVariants}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
            </span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="mt-10 h-px w-28 origin-center bg-gradient-to-r from-transparent via-champagne to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.7, ease: 'easeOut' }}
          className="mt-10 max-w-md text-[13px] leading-[2.2] tracking-wider text-ink/70 md:text-sm"
        >
          新宿御苑の路地裏に灯る、ピンクとパープルのネオン。
          <br />
          静かな夜に、胸をズキュンと撃ち抜く一杯を。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: 'easeOut' }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#system" className="neon-button">
            <span>Reserve</span>
            <motion.span
              aria-hidden
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </a>
          <a
            href="#cast"
            className="display-latin italic text-sm tracking-widest text-ink/60 underline-offset-8 hover:text-champagne hover:underline"
          >
            meet the cast
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-champagne"
        aria-hidden
      >
        <span className="display-latin italic text-[10px] tracking-widest">
          scroll
        </span>
        <ChevronDown className="animate-float" size={16} />
      </motion.div>
    </section>
  );
}
