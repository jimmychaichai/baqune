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
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <span className="section-subtitle flex items-center gap-2">
              <Wine size={14} /> SYSTEM
            </span>
            <h2 className="section-title mt-3">料金体系</h2>

            <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {PRICES.map((p) => (
                <li
                  key={p.label}
                  className="flex items-center justify-between py-4 text-sm tracking-wider"
                >
                  <span className="text-ink/70">{p.label}</span>
                  <span className="font-medium text-ink">{p.value}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-relaxed text-ink/50">
              ※ 表示価格はすべて税込です。
              チャージにはお通しが含まれます。
            </p>
          </motion.div>

          {/* HOURS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          >
            <span className="section-subtitle flex items-center gap-2">
              <Clock size={14} /> HOURS
            </span>
            <h2 className="section-title mt-3">営業時間</h2>

            <ul className="mt-10 space-y-4">
              {HOURS.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white px-6 py-4 text-sm tracking-widest2 shadow-[0_4px_24px_-20px_rgba(157,78,221,0.5)]"
                >
                  <span className="text-ink/70">{h.day}</span>
                  <span
                    className={
                      h.time === 'CLOSED'
                        ? 'text-ink/30'
                        : 'neon-text font-medium'
                    }
                  >
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="tel:+81000000000"
              className="mt-10 inline-flex items-center gap-2 text-xs tracking-widest2 text-ink/60 underline-offset-8 hover:text-neon-pink hover:underline"
            >
              <Phone size={14} /> 03-0000-0000
            </a>
          </motion.div>
        </div>
      </section>

      {/* ACCESS */}
      <section
        id="access"
        className="relative bg-gradient-to-b from-white via-paper to-white py-28 px-6 md:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <span className="section-subtitle flex items-center gap-2">
              <MapPin size={14} /> ACCESS
            </span>
            <h2 className="section-title mt-3">アクセス</h2>
            <p className="mt-6 max-w-md text-sm leading-loose tracking-wider text-ink/60">
              新宿御苑前駅より徒歩3分。
              路地の奥、ピンクのネオンが目印です。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="grid gap-10 md:grid-cols-5"
          >
            {/* Map placeholder with atmospheric photo */}
            <div className="md:col-span-3 relative overflow-hidden rounded-3xl border border-ink/10 shadow-[0_20px_60px_-30px_rgba(157,78,221,0.5)]">
              <div className="relative aspect-[4/3] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1400&q=80&auto=format&fit=crop"
                  alt="BAR interior"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/30 via-ink/40 to-neon-purple/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neon-gradient shadow-neon">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <p className="mt-3 text-xs tracking-widest2 text-white/80">
                    Google Map は公開時に埋め込み
                  </p>
                </div>
                <div className="absolute bottom-5 left-6 text-white/90">
                  <p className="text-[10px] tracking-widest2">SHINJUKU GYOEN</p>
                  <p className="text-lg font-light tracking-widest2">
                    BAR ズキュン
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-[10px] tracking-widest2 text-neon-pink">
                  ADDRESS
                </span>
                <p className="mt-2 text-sm leading-loose tracking-wider text-ink/80">
                  〒160-0022
                  <br />
                  東京都新宿区新宿1-0-0
                  <br />
                  ズキュンビル B1F
                </p>
              </div>
              <div>
                <span className="text-[10px] tracking-widest2 text-neon-pink">
                  TRAIN
                </span>
                <p className="mt-2 text-sm leading-loose tracking-wider text-ink/80">
                  東京メトロ丸ノ内線「新宿御苑前」駅 より徒歩3分
                  <br />
                  都営新宿線「新宿三丁目」駅 より徒歩7分
                </p>
              </div>
              <a
                href="https://maps.google.com/"
                target="_blank"
                rel="noreferrer"
                className="neon-button w-fit"
              >
                GOOGLE MAPS
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
