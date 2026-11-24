import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AtmosphericFogCanvas from './AtmosphericFogCanvas';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef(null);
  const archRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-reveal',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.18,
          delay: 0.2
        }
      );

      tl.fromTo(
        archRef.current,
        { scale: 0.96, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1.8 },
        '-=1.2'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#060709] select-none pt-24 pb-12"
    >
      {/* Background Gradient & Architecture Sky */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 75% at 50% 85%, #151c27 0%, #0a0d13 55%, #050608 100%)'
          }}
        />

        {/* Ambient Warm Horizon Glow in Muted Blue */}
        <div
          className="absolute bottom-1/4 left-0 right-0 h-64 opacity-30 blur-3xl pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(56, 189, 248, 0.25), transparent)'
          }}
        />

        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 arch-grid-bg opacity-30" />
      </div>

      {/* Layer 1: Background Atmospheric Clouds */}
      <AtmosphericFogCanvas
        density={0.85}
        speedMultiplier={0.7}
        className="z-10"
      />

      {/* Layer 2: Hero Architectural Monolith Composition */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div
          ref={archRef}
          className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center transition-transform duration-500 ease-out"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 2}deg) rotateX(${-mousePos.y * 2}deg)`
          }}
        >
          {/* Architectural Monolith Silhouette */}
          <div className="relative w-[320px] md:w-[440px] lg:w-[520px] h-[72vh] flex flex-col items-center justify-end">
            
            {/* Ambient backlight */}
            <div className="absolute top-1/3 w-64 h-80 rounded-none bg-cyan-500/15 blur-[80px]" />

            {/* Central Tower */}
            <div className="relative w-full h-[90%] flex items-end justify-center">
              {/* Main Brutalist Volume */}
              <div className="relative w-52 md:w-68 lg:w-76 h-full bg-gradient-to-b from-[#1c222c] via-[#0f131a] to-[#07090c] border-x border-t border-white/10 shadow-2xl overflow-hidden rounded-none">
                {/* Horizontal formwork texture */}
                <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_bottom,transparent_49%,rgba(255,255,255,0.08)_50%,transparent_51%)] bg-[length:100%_32px]" />
                
                {/* Vertical Slit Aperture / Warm Light Corridor with clean rectangular edges */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-1.5 h-36 bg-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.8)] opacity-90 rounded-none" />
                <div className="absolute top-68 left-1/2 -translate-x-1/2 w-1.5 h-20 bg-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.6)] opacity-75 rounded-none" />

                {/* Base fade into landscape */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060709] via-[#060709]/80 to-transparent" />
              </div>

              {/* Flanking Cantilevers */}
              <div className="w-20 md:w-28 h-[50%] bg-gradient-to-b from-[#141820] to-[#060709] border-l border-t border-white/5 -mr-4 opacity-80 rounded-none" />
              <div className="w-24 md:w-32 h-[62%] bg-gradient-to-b from-[#171c26] to-[#07090d] border-r border-t border-white/8 -ml-4 opacity-90 rounded-none" />
            </div>

            {/* Fine architectural line work */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
              viewBox="0 0 500 700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="60" y1="160" x2="440" y2="160" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
              <line x1="60" y1="360" x2="440" y2="360" stroke="rgba(56,189,248,0.3)" strokeDasharray="4 4" />
              <line x1="250" y1="60" x2="250" y2="640" stroke="rgba(56,189,248,0.35)" strokeWidth="0.8" />
              <circle cx="250" cy="160" r="3" stroke="#38bdf8" />
            </svg>
          </div>
        </div>
      </div>

      {/* Layer 3: Midground Drifting Fog Strata */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 -left-[20%] w-[140%] h-[60%] opacity-40 mix-blend-screen animate-cloud-slow pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 65% 45% at 50% 50%, rgba(180, 210, 240, 0.4) 0%, rgba(100, 130, 165, 0.15) 55%, transparent 80%)',
            filter: 'blur(50px)'
          }}
        />

        <div
          className="absolute -bottom-8 left-0 right-0 h-[40%] opacity-80 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #060709 20%, rgba(6, 7, 9, 0.6) 70%, transparent 100%)',
            backdropFilter: 'blur(3px)'
          }}
        />
      </div>

      {/* Layer 4: Foreground Light Wisps */}
      <AtmosphericFogCanvas
        density={0.4}
        speedMultiplier={1.1}
        className="z-40 opacity-70"
      />

      {/* Layer 5: Hero Content & Clear Editorial Typography */}
      <div className="relative z-50 flex-1 flex flex-col justify-between px-6 md:px-12 lg:px-20 pointer-events-none">
        
        {/* Top Studio Indicator */}
        <div className="w-full flex items-center justify-between text-xs tracking-[0.2em] text-[#38bdf8] uppercase font-sans-clean border-b border-white/5 pb-4">
          <div className="hero-reveal flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-none bg-[#38bdf8]" />
            <span className="tracking-widest font-medium text-white/90">Independent Architecture Studio</span>
          </div>

          <div className="hero-reveal hidden sm:flex items-center gap-6 text-[11px] text-white/50">
            <span>Spatial Design</span>
            <span>Tectonic Craft</span>
            <span>Material Research</span>
          </div>
        </div>

        {/* Center Editorial Title & Content */}
        <div className="w-full my-auto text-center flex flex-col items-center max-w-5xl mx-auto py-12">
          
          {/* Main Studio Heading */}
          <div className="hero-reveal mb-2">
            <h1 className="hero-monolith-title font-display text-[#f8fafc] tracking-tight drop-shadow-2xl uppercase">
              AETHER & MONOLITH
            </h1>
          </div>

          {/* Meaningful Tagline */}
          <div className="hero-reveal max-w-2xl mb-6">
            <p className="font-serif-elegant italic text-xl sm:text-2xl md:text-3xl text-cyan-300 font-normal tracking-wide">
              Architecture shaped by light, material and atmosphere.
            </p>
          </div>

          {/* Grounded Supporting Description */}
          <div className="hero-reveal max-w-xl text-center mb-10">
            <p className="text-sm sm:text-base font-sans-clean font-light text-white/75 leading-relaxed">
              We are an independent architecture and spatial design studio. We conceive buildings, environments and structures defined by geologic permanence, honest material craft, and the quiet presence of natural illumination.
            </p>
          </div>

          {/* Action CTAs with clean rectangular edges & transparent Start a Project button */}
          <div className="hero-reveal flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
            <a
              href="#projects"
              className="btn-primary rounded-none"
            >
              <span>Explore Our Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="btn-start-project rounded-none"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Simple scroll indicator */}
        <div className="w-full flex items-center justify-between text-xs font-sans-clean tracking-wider text-white/50 border-t border-white/5 pt-4">
          <span className="text-[11px] uppercase tracking-widest text-cyan-400">
            Concept Studies & Commissions
          </span>

          <a
            href="#projects"
            className="pointer-events-auto flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[11px] uppercase tracking-widest group"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
