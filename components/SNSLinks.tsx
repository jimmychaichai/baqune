'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

export default function SNSLinks() {
  return (
    <section className="relative overflow-hidden py-28 px-6 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1800&q=80&auto=format&fit=crop"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-white/60" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-gradient opacity-[0.1] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        <span className="section-subtitle">FOLLOW US</span>
        <h2 className="section-title mt-3">
          <span className="neon-text">日常の</span>すこしの非日常を
        </h2>
        <p className="mt-6 max-w-md text-sm leading-loose tracking-wider text-ink/60">
          最新イベント、新作カクテル、キャストの素顔。
          SNS でゆるく発信しています。
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            className="neon-button"
          >
            <Twitter size={16} /> X (Twitter)
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="neon-button"
          >
            <Instagram size={16} /> Instagram
          </a>
        </div>
      </motion.div>
    </section>
  );
}
