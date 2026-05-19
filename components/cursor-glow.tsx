'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9997] hidden md:block"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
        borderRadius: '50%',
        transition: 'left 0.15s ease-out, top 0.15s ease-out',
      }}
      aria-hidden="true"
    />
  );
}
