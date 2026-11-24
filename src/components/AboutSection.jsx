import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Feather, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-[#0a0d13] py-36 px-6 md:px-12 lg:px-20 text-[#f8fafc] overflow-hidden border-t border-white/5"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 arch-grid-bg opacity-15 pointer-events-none" />

      {/* Atmospheric Cloud Silhouette */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] opacity-20 mix-blend-screen pointer-events-none animate-cloud-slow"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.3), transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Section Pill */}
        <div className="about-reveal flex items-center gap-2 text-xs font-sans-clean tracking-[0.3em] text-cyan-400 uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-none bg-cyan-400" />
          <span>About the Studio</span>
        </div>

        {/* Studio Philosophy Headline */}
        <div className="mb-12">
          <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-white">
            <span className="about-reveal block">
              ARCHITECTURE BORN OF SILENCE,
            </span>
            <span className="about-reveal block font-serif-elegant italic text-cyan-300/90 my-2 font-light">
              Proportion, and Tactile Truth.
            </span>
          </h2>
        </div>

        {/* Narrative Description */}
        <div className="about-reveal max-w-2xl text-center mb-16">
          <p className="font-sans-clean text-base sm:text-lg text-white/75 font-light leading-relaxed">
            AETHER & MONOLITH is an independent architecture and spatial design practice. We design bespoke residences, cultural structures, and quiet environments for those who appreciate architectural clarity, enduring materials, and the contemplative presence of daylight.
          </p>
        </div>

        {/* 3 Core Studio Values with clean rectangular edges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full border-t border-white/10 pt-14">
          
          <div className="about-reveal flex flex-col gap-3 p-6 panel-dark rounded-none border border-white/10">
            <span className="font-sans-clean text-cyan-400 text-xs tracking-widest uppercase">
              01 // SPATIAL RESTRAINT
            </span>
            <h3 className="font-display text-lg text-white font-normal uppercase">
              Essential Calm
            </h3>
            <p className="font-sans-clean text-xs text-white/70 leading-relaxed font-light">
              We eliminate decorative excess to emphasize volume, acoustic serenity, and natural light. Every dimension is carefully considered to nurture a profound sense of ease.
            </p>
          </div>

          <div className="about-reveal flex flex-col gap-3 p-6 panel-dark rounded-none border border-white/10">
            <span className="font-sans-clean text-cyan-400 text-xs tracking-widest uppercase">
              02 // HONEST PERMANENCE
            </span>
            <h3 className="font-display text-lg text-white font-normal uppercase">
              Enduring Materials
            </h3>
            <p className="font-sans-clean text-xs text-white/70 leading-relaxed font-light">
              We specify raw concrete, quarried stone, solid timber, and patinated metals that weather naturally under sun, wind, and rain, gaining character over generations.
            </p>
          </div>

          <div className="about-reveal flex flex-col gap-3 p-6 panel-dark rounded-none border border-white/10">
            <span className="font-sans-clean text-cyan-400 text-xs tracking-widest uppercase">
              03 // SITE COLLABORATION
            </span>
            <h3 className="font-display text-lg text-white font-normal uppercase">
              Contextual Dialogue
            </h3>
            <p className="font-sans-clean text-xs text-white/70 leading-relaxed font-light">
              No building exists in isolation. We treat the ground, horizon, and prevailing atmosphere as essential design collaborators from initial sketch to final construction.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
