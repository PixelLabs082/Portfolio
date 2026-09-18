'use client';

import { useRef } from 'react';

export default function Magnetic({ children, className = '', strength = 7 }) {
  const ref = useRef(null);

  const onMove = (event) => {
    const node = ref.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = node.getBoundingClientRect();
    const x = (event.clientX - (box.left + box.width / 2)) / strength;
    const y = (event.clientY - (box.top + box.height / 2)) / strength;
    node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  return (
    <span
      ref={ref}
      data-magnetic="true"
      className={`inline-flex will-change-transform ${className}`}
      style={{ transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)' }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = 'translate3d(0,0,0)';
      }}
    >
      {children}
    </span>
  );
}
