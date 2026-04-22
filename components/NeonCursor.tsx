'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function NeonCursor() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { damping: 22, stiffness: 180, mass: 0.4 });
  const sy = useSpring(y, { damping: 22, stiffness: 180, mass: 0.4 });

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setEnabled(mq.matches);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
        className="pointer-events-none fixed left-0 top-0 z-[55] h-[320px] w-[320px] rounded-full bg-neon-gradient opacity-[0.09] blur-3xl"
      />
      <motion.div
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        className="pointer-events-none fixed left-0 top-0 z-[55] h-2 w-2 rounded-full bg-neon-pink mix-blend-multiply"
      />
    </>
  );
}
