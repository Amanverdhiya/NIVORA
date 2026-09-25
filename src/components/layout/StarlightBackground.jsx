import React, { useEffect, useRef } from 'react';

export default function StarlightBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      ref.current.style.setProperty('--x', `${e.clientX}px`);
      ref.current.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `radial-gradient(800px circle at var(--x, 50vw) var(--y, 50vh), hsla(var(--primary) / 0.2), transparent 45%)`,
      }}
    />
  );
}
