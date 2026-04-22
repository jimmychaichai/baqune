'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useRef } from 'react';

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

function TiltCard({ c, idx }: { c: CastMember; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });
  const shineX = useTransform(mx, [-0.5, 0.5], ['20%', '80%']);
  const shineY = useTransform(my, [-0.5, 0.5], ['20%', '80%']);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: idx * 0.12, ease: [0.25, 1, 0.5, 1] }}
      className="group flex flex-col items-center"
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        className="relative w-full"
      >
        <div className="arch relative mx-auto h-80 w-full max-w-[220px] overflow-hidden bg-gradient-to-b from-pink-100 via-white to-purple-100 p-[3px] shadow-[0_6px_40px_-20px_rgba(157,78,221,0.6)] transition-shadow duration-500 group-hover:shadow-neon">
          <div className="arch relative h-full w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.photo}
              alt={c.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-transparent to-neon-purple/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* specular shine following cursor */}
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(300px circle at ${shineX.get()} ${shineY.get()}, rgba(255,255,255,0.4), transparent 60%)`,
              }}
            />

            {/* bottom name chip */}
            <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/85 px-3 py-1 backdrop-blur-sm">
              <span className="text-[10px] tracking-widest2 text-ink">
                {c.name}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-7 flex flex-col items-center text-center">
        <span className="display-latin italic text-[11px] tracking-widest text-champagne">
          {c.role.toLowerCase()}
        </span>
        <h3 className="display mt-2 text-xl font-medium tracking-widest2 text-ink">
          {c.name}
        </h3>
        <span className="display mt-1 text-xs tracking-widest2 text-ink/50">
          — {c.ruby} —
        </span>
        <p className="mt-5 max-w-[220px] text-[11px] leading-[2] text-ink/60">
          {c.bio}
        </p>
      </div>
    </motion.article>
  );
}

export default function Cast() {
  return (
    <section id="cast" className="relative py-28 px-6 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <span className="display-latin italic text-sm tracking-widest text-champagne">
            — our cast —
          </span>
          <span className="section-eyebrow mt-4">
            <Sparkles size={12} /> CAST
          </span>
          <h2 className="section-title gold-underline mt-5">魅力的なキャスト</h2>
          <p className="mt-10 max-w-md text-[13px] leading-[2.2] tracking-wider text-ink/60">
            夜を彩るのは、個性豊かなキャストたち。
            あなたの「いつもの」を見つけてください。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {CAST.map((c, idx) => (
            <TiltCard key={c.name} c={c} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
