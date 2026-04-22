'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

type CastMember = {
  name: string;
  ruby: string;
  role: string;
  photo: string;
  bio: string;
};

const CAST: CastMember[] = [
  {
    name: 'RINA',
    ruby: 'りな',
    role: 'Owner / Mixologist',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: '気まぐれに創るシグネチャーカクテルが評判。笑うと目がなくなるタイプ。',
  },
  {
    name: 'MIKU',
    ruby: 'みく',
    role: 'Bartender',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    bio: 'クラシックカクテルに強い理論派。静かな夜が得意。',
  },
  {
    name: 'AYA',
    ruby: 'あや',
    role: 'Cast',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    bio: 'ワインとチーズの話し出すと止まらない。たまに歌う。',
  },
  {
    name: 'SAKI',
    ruby: 'さき',
    role: 'Cast',
    photo: 'https://randomuser.me/api/portraits/women/33.jpg',
    bio: '日本酒ソムリエ。常連の顔と好みを全員分記憶している。',
  },
];

export default function Cast() {
  return (
    <section id="cast" className="relative py-28 px-6 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="section-subtitle flex items-center gap-2">
            <Sparkles size={14} /> CAST
          </span>
          <h2 className="section-title mt-3">魅力的なキャスト</h2>
          <p className="mt-6 max-w-md text-sm leading-loose tracking-wider text-ink/60">
            夜を彩るのは、個性豊かなキャストたち。
            あなたの「いつもの」を見つけてください。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {CAST.map((c, idx) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                delay: idx * 0.12,
                ease: 'easeOut',
              }}
              className="group flex flex-col items-center"
            >
              <div className="relative w-full">
                <div className="arch relative mx-auto h-80 w-full max-w-[220px] overflow-hidden bg-gradient-to-b from-pink-100 via-white to-purple-100 p-[3px] shadow-[0_6px_40px_-20px_rgba(157,78,221,0.6)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-neon">
                  <div className="arch relative h-full w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.photo}
                      alt={c.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent mix-blend-multiply" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-transparent to-neon-purple/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center text-center">
                <span className="text-[10px] tracking-widest2 text-neon-pink">
                  {c.role}
                </span>
                <h3 className="mt-2 text-xl font-medium tracking-widest2 text-ink">
                  {c.name}
                </h3>
                <span className="mt-1 text-xs tracking-wider text-ink/50">
                  {c.ruby}
                </span>
                <p className="mt-4 max-w-[220px] text-xs leading-relaxed text-ink/60">
                  {c.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
