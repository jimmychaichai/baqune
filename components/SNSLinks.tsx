'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

export default function SNSLinks() {
  return (
    <section className="relative overflow-hidden py-32 px-6 md:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1800&q=80&auto=format&fit=crop"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-paper/70" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-gradient opacity-[0.1] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        className="mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        <span className="display-latin italic text-sm tracking-widest text-champagne">
          — follow us —
        </span>
        <h2 className="section-title mt-6 text-balance">
          <span className="neon-text">日常</span>に、すこしの
          <span className="gold-text">非日常</span>を
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="mt-10 h-px w-28 origin-center bg-gradient-to-r from-transparent via-champagne to-transparent"
        />

        <p className="mt-10 max-w-md text-[13px] leading-[2.2] tracking-wider text-ink/60">
          最新イベント、新作カクテル、キャストの素顔。
          SNS でゆるく発信しています。
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            className="neon-button"
          >
            <Twitter size={14} /> X (Twitter)
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="gold-button"
          >
            <Instagram size={14} /> Instagram
          </a>
        </div>
      </motion.div>
    </section>
  );
}
