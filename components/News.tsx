'use client';

import { motion } from 'framer-motion';
import { CalendarDays, ArrowUpRight } from 'lucide-react';

type NewsItem = {
  date: string;
  tag: 'EVENT' | 'NEWS' | 'NOTICE';
  title: string;
  body: string;
};

const ITEMS: NewsItem[] = [
  {
    date: '2026.04.18',
    tag: 'EVENT',
    title: 'Spring Neon Night',
    body: '春限定のシグネチャーカクテルを期間中全品 ¥200 off。DJ も登場。',
  },
  {
    date: '2026.04.05',
    tag: 'NEWS',
    title: 'メニューを刷新しました',
    body: 'モクテルと日本酒ペアリングのページを新しく追加しました。',
  },
  {
    date: '2026.03.22',
    tag: 'NOTICE',
    title: '営業時間変更のお知らせ',
    body: '金曜日の営業時間を 17:00 - 5:00 に延長いたしました。',
  },
];

const tagStyle: Record<NewsItem['tag'], string> = {
  EVENT: 'bg-neon-gradient text-white',
  NEWS: 'border border-champagne/60 text-champagne-dark',
  NOTICE: 'border border-ink/15 text-ink/60',
};

export default function News() {
  return (
    <section
      id="news"
      className="relative bg-ivory-radial py-28 px-6 md:py-36"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="display-latin italic text-sm tracking-widest text-champagne">
            — news & event —
          </span>
          <span className="section-eyebrow mt-4">
            <CalendarDays size={12} /> NEWS
          </span>
          <h2 className="section-title gold-underline mt-5">最新のお知らせ</h2>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="divider-shimmer origin-left"
        />

        <ul className="divide-y divide-ink/10">
          {ITEMS.map((item, idx) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.9,
                delay: idx * 0.12,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <a
                href="#"
                className="group flex flex-col gap-3 py-7 transition-colors hover:bg-cream/60 md:flex-row md:items-center md:gap-8 md:py-9"
              >
                <time className="display-latin italic text-sm tracking-widest text-champagne-dark md:w-28">
                  {item.date}
                </time>
                <span
                  className={`inline-flex h-6 w-fit items-center rounded-full px-3 text-[10px] tracking-widest2 ${tagStyle[item.tag]}`}
                >
                  {item.tag}
                </span>
                <div className="flex-1">
                  <h3 className="display text-base font-medium tracking-wider text-ink transition-colors group-hover:text-neon-pink md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-[2] text-ink/60 md:text-[13px]">
                    {item.body}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink/30 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon-pink"
                />
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="divider-shimmer origin-right"
        />
      </div>
    </section>
  );
}
