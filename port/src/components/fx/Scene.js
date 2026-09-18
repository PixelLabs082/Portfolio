'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotion } from '@/components/fx/MotionProvider';
import { createScene } from '@/lib/scene';

const MODES = [
  { id: 0, label: 'Water wave' },
  { id: 1, label: 'Gridwave' },
  { id: 2, label: 'Light tunnel' },
];

export function SceneModes() {
  const { mode, setMode } = useMotion();

  return (
    <div className="flex flex-col gap-1">
      {MODES.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`text-left text-[12px] tracking-[0.16em] uppercase transition-colors duration-300 ${
            mode === item.id ? 'text-fg' : 'text-muted hover:text-fg'
          }`}
          onClick={() => setMode(item.id)}
        >
          0{item.id + 1} / {item.label}
        </button>
      ))}
    </div>
  );
}

export default function Scene() {
  const canvasRef = useRef(null);
  const apiRef = useRef(null);
  const { mode } = useMotion();
  const [live, setLive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const api = createScene(canvas);
    apiRef.current = api;
    if (!api) return undefined;

    setLive(true);
    api.setMode(mode);
    api.setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 1 : 0);

    const onVisibility = () => (document.hidden ? api.pause() : api.resume());
    const themeWatch = new MutationObserver(() => {
      api.setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 1 : 0);
    });
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      themeWatch.disconnect();
      api.destroy();
    };
  }, []);

  useEffect(() => {
    apiRef.current?.setMode(mode);
  }, [mode]);

  return (
    <>
      <canvas ref={canvasRef} className={`scene-canvas pointer-events-none fixed inset-0 z-0 h-full w-full ${live ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true" />
      <div className={`scene-fallback pointer-events-none fixed inset-0 z-0 ${live ? 'opacity-0' : 'opacity-100'}`} aria-hidden="true" />
      <div className="grain pointer-events-none fixed inset-0 z-40" aria-hidden="true" />
    </>
  );
}
