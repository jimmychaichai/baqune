'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Wine, Phone } from 'lucide-react';

const HOURS = [
  { day: 'MON - THU', time: '17:00 - 23:00' },
  { day: 'FRI', time: '17:00 - 5:00' },
  { day: 'SAT', time: '18:00 - 5:00' },
  { day: 'SUN', time: 'CLOSED' },
];

const PRICES = [
  { label: 'チャージ', value: '¥2,000' },
  { label: 'カクテル', value: '¥1,200 〜' },
  { label: 'ウイスキー', value: '¥1,500 〜' },
  { label: 'ワイン（グラス）', value: '¥1,000 〜' },
  { label: 'ボトルキープ', value: '¥8,000 〜' },
];

export default function SystemAccess() {
  return (
    <>
      <section id="system" className="relative py-28 px-6 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          {/* SYSTEM */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="display-latin italic text-sm tracking-widest text-champagne">
              — pricing —
            </span>
            <span className="section-eyebrow mt-4">
              <Wine size={12} /> SYSTEM
            </span>
            <h2 className="section-title mt-5">料金体系</h2>

            <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
              {PRICES.map((p, idx) => (
                <motion.li
                  key={p.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.08,
                    ease: 'easeOut',
                  }}
                  className="flex items-baseline justify-between py-5"
                >
                  <span className="text-sm tracking-widest2 text-ink/70">
                    {p.label}
                  </span>
                  <span className="flex items-baseline gap-3">
                    <span className="flex-1 h-px min-w-[40px] bg-gradient-to-r from-transparent to-champagne/50" />
                    <span className="display-latin text-lg font-medium tracking-wider text-ink">
                      {p.value}
                    </span>
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="mt-6 text-[11px] leading-[2] tracking-wider text-ink/45">
              ※ 表示価格はすべて税込です。
              チャージにはお通しが含まれます。
            </p>
          </motion.div>

          {/* HOURS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="display-latin italic text-sm tracking-widest text-champagne">
              — opening hours —
            </span>
            <span className="section-eyebrow mt-4">
              <Clock size={12} /> HOURS
            </span>
            <h2 className="section-title mt-5">営業時間</h2>

            <ul className="mt-12 space-y-4">
              {HOURS.map((h, idx) => (
                <motion.li
                  key={h.day}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.08,
                    ease: 'easeOut',
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-cream px-6 py-4 shadow-[0_4px_24px_-20px_rgba(27,16,25,0.4)] transition-all duration-500 hover:border-champagne/60 hover:shadow-gold"
                >
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-champagne/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  <div className="relative flex items-center justify-between text-sm tracking-widest2">
                    <span className="display-latin font-medium text-ink/70">
                      {h.day}
                    </span>
                    <span
                      className={`display ${
                        h.time === 'CLOSED'
                          ? 'text-ink/30'
                          : 'neon-text font-medium'
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>

            <a
              href="tel:+81000000000"
              className="mt-10 inline-flex items-center gap-2 display-latin italic text-sm tracking-widest text-ink/60 underline-offset-8 hover:text-champagne hover:underline"
            >
              <Phone size={14} /> 03-0000-0000
            </a>
          </motion.div>
        </div>
      </section>

      {/* ACCESS */}
      <section
        id="access"
        className="relative bg-ivory-radial py-28 px-6 md:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="mb-16 flex flex-col items-center text-center"
          >
            <span className="display-latin italic text-sm tracking-widest text-champagne">
              — access —
            </span>
            <span className="section-eyebrow mt-4">
              <MapPin size={12} /> ACCESS
            </span>
            <h2 className="section-title gold-underline mt-5">アクセス</h2>
            <p className="mt-10 max-w-md text-[13px] leading-[2.2] tracking-wider text-ink/60">
              新宿御苑前駅より徒歩3分。
              路地の奥、ピンクのネオンが目印です。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
            className="grid gap-10 md:grid-cols-5"
          >
            <div className="md:col-span-3 relative overflow-hidden rounded-3xl border border-champagne/30 shadow-luxe">
              <div className="relative aspect-[4/3] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1400&q=80&auto=format&fit=crop"
                  alt="BAR interior"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2.5s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/25 via-ink/50 to-neon-purple/35 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neon-gradient shadow-neon">
                    <MapPin className="text-white" size={22} />
                  </div>
                  <p className="display-latin mt-3 italic text-[11px] tracking-widest text-white/80">
                    google map will be embedded here
                  </p>
                </div>
                <div className="absolute bottom-6 left-7 text-white/90">
                  <p className="display-latin italic text-[10px] tracking-widest text-champagne-light">
                    shinjuku gyoen
                  </p>
                  <p className="display mt-1 text-lg font-normal tracking-widest2">
                    BAR ズキュン
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col justify-center space-y-8">
              <div>
                <span className="display-latin italic text-xs tracking-widest text-champagne">
                  address
                </span>
                <p className="mt-2 text-sm leading-[2] tracking-wider text-ink/80">
                  〒160-0022
                  <br />
                  東京都新宿区新宿1-0-0
                  <br />
                  ズキュンビル B1F
                </p>
              </div>
              <div>
                <span className="display-latin italic text-xs tracking-widest text-champagne">
                  train
                </span>
                <p className="mt-2 text-sm leading-[2] tracking-wider text-ink/80">
                  東京メトロ丸ノ内線「新宿御苑前」駅 より徒歩3分
                  <br />
                  都営新宿線「新宿三丁目」駅 より徒歩7分
                </p>
              </div>
              <a
                href="https://maps.google.com/"
                target="_blank"
                rel="noreferrer"
                className="gold-button w-fit"
              >
                <span>Google Maps</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
