'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    document.documentElement.dataset.cursor = 'on';

    const fast = { x: innerWidth / 2, y: innerHeight / 2 };
    const slow = { x: fast.x, y: fast.y };
    const next = { x: fast.x, y: fast.y };
    let hovering = false;
    let view = false;
    let raf = 0;

    const onMove = (event) => {
      next.x = event.clientX;
      next.y = event.clientY;
      const target = event.target instanceof Element ? event.target : null;
      hovering = Boolean(target?.closest('a, button, summary, [data-magnetic], [data-cursor]'));
      view = Boolean(target?.closest('[data-cursor="view"]'));
    };

    const tick = () => {
      fast.x += (next.x - fast.x) * 0.35;
      fast.y += (next.y - fast.y) * 0.35;
      slow.x += (next.x - slow.x) * 0.14;
      slow.y += (next.y - slow.y) * 0.14;
      const scale = view ? 4.8 : hovering ? 2.6 : 1;
      dot.style.transform = `translate3d(${fast.x}px, ${fast.y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${slow.x}px, ${slow.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      ring.style.opacity = '1';
      dot.style.opacity = view ? '0' : '1';
      label.style.opacity = view ? '1' : '0';
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      delete document.documentElement.dataset.cursor;
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="site-cursor pointer-events-none fixed top-0 left-0 z-[81] h-1.5 w-1.5 rounded-full bg-white opacity-0 mix-blend-difference" aria-hidden="true" />
      <div ref={ringRef} className="site-cursor pointer-events-none fixed top-0 left-0 z-[80] grid h-3.5 w-3.5 place-items-center rounded-full bg-white opacity-0 mix-blend-difference" aria-hidden="true">
        <span ref={labelRef} className="absolute inset-0 grid place-items-center text-[5px] font-medium tracking-[0.18em] uppercase text-black opacity-0">
          View
        </span>
      </div>
    </>
  );
}
