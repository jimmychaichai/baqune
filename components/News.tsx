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
  NEWS: 'border border-neon-pink/40 text-neon-pink',
  NOTICE: 'border border-ink/20 text-ink/60',
};

export default function News() {
  return (
    <section
      id="news"
      className="relative bg-gradient-to-b from-white via-paper to-white py-28 px-6 md:py-36"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="section-subtitle flex items-center gap-2">
            <CalendarDays size={14} /> NEWS & EVENT
          </span>
          <h2 className="section-title mt-3">最新のお知らせ</h2>
        </motion.div>

        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {ITEMS.map((item, idx) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: 'easeOut',
              }}
            >
              <a
                href="#"
                className="group flex flex-col gap-3 py-6 transition-colors hover:bg-white/60 md:flex-row md:items-center md:gap-8 md:py-8"
              >
                <time className="text-xs tracking-widest2 text-ink/50 md:w-28">
                  {item.date}
                </time>
                <span
                  className={`inline-flex h-6 w-fit items-center rounded-full px-3 text-[10px] tracking-widest2 ${tagStyle[item.tag]}`}
                >
                  {item.tag}
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-medium tracking-wider text-ink group-hover:text-neon-pink md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink/60 md:text-sm">
                    {item.body}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon-pink"
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
