import React, { useEffect, useRef } from 'react';

/**
 * AtmosphericFogCanvas
 * High-performance 2D canvas simulation of volumetric fog and layered clouds
 * in the classic black, charcoal, silver-slate, and muted blue architectural palette.
 */
export default function AtmosphericFogCanvas({
  density = 1.0,
  speedMultiplier = 0.8,
  interactive = true,
  className = ''
}) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Atmospheric mist tint: Silver blue and cold white mist over abyssal black
    const getCloudColor = (alpha, isHighlight) => {
      if (isHighlight) {
        return `rgba(215, 235, 255, ${alpha * 0.85})`; // Cold white highlight
      }
      return `rgba(165, 195, 230, ${alpha})`; // Muted silver cyan-blue
    };

    const particleCount = Math.floor(40 * density);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const depth = Math.random();
      particles.push({
        x: Math.random() * width * 1.3 - width * 0.15,
        y: Math.random() * height * 1.2 - height * 0.1,
        baseY: 0,
        radius: (200 + Math.random() * 260) * (0.65 + depth * 0.6),
        alpha: (0.012 + Math.random() * 0.035) * (depth < 0.3 ? 0.7 : 1.0),
        vx: (0.12 + (1 - depth) * 0.25) * (Math.random() > 0.1 ? 1 : -0.5),
        vyFreq: 0.0006 + Math.random() * 0.0009,
        vyAmp: 12 + Math.random() * 28,
        phase: Math.random() * Math.PI * 2,
        depth: depth,
        stretchX: 1.3 + Math.random() * 0.7,
        isHighlight: Math.random() > 0.6
      });
    }

    particles.forEach((p) => (p.baseY = p.y));

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const normalizedX = (e.clientX / width - 0.5) * 2;
      const normalizedY = (e.clientY / height - 0.5) * 2;
      mouseRef.current.targetX = normalizedX * 35;
      mouseRef.current.targetY = normalizedY * 20;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    let lastTime = performance.now();

    const render = (time) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse damping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.035;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.035;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx * speedMultiplier * (delta * 60);
          p.phase += p.vyFreq * speedMultiplier * (delta * 60);
          p.y = p.baseY + Math.sin(p.phase) * p.vyAmp;

          if (p.x - p.radius * p.stretchX > width * 1.1) {
            p.x = -p.radius * p.stretchX - 40;
            p.y = p.baseY = Math.random() * height * 1.2 - height * 0.1;
          } else if (p.x + p.radius * p.stretchX < -width * 0.25) {
            p.x = width * 1.1 + p.radius * p.stretchX;
          }
        }

        const px = p.x + mouseRef.current.x * (p.depth + 0.2);
        const py = p.y + mouseRef.current.y * (p.depth + 0.2);

        ctx.save();
        ctx.translate(px, py);
        ctx.scale(p.stretchX, 1.0);

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.radius);
        grad.addColorStop(0, getCloudColor(p.alpha * 1.1, p.isHighlight));
        grad.addColorStop(0.45, getCloudColor(p.alpha * 0.6, p.isHighlight));
        grad.addColorStop(0.8, getCloudColor(p.alpha * 0.15, false));
        grad.addColorStop(1, 'rgba(6, 7, 9, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [density, speedMultiplier, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none mix-blend-screen ${className}`}
      style={{ opacity: 0.85 }}
    />
  );
}
