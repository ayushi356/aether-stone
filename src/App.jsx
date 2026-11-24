import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import MonolithShowcase from './components/MonolithShowcase';
import VideoTypographySection from './components/VideoTypographySection';
import ApproachSection from './components/ApproachSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#060709] text-[#f8fafc] selection:bg-cyan-500/30 selection:text-white">
      {/* Precision Cursor */}
      <CustomCursor />

      {/* Film Grain Texture */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Experience Flow */}
      <main className="w-full overflow-hidden">
        {/* 1. Hero — AETHER & MONOLITH */}
        <HeroSection />

        {/* 2. Selected Projects — Architectural portfolio */}
        <MonolithShowcase />

        {/* 2.5 Scroll-Driven Video Typography Effect */}
        <VideoTypographySection />

        {/* 3. Our Approach — Form & Structure, Light & Atmosphere, Material & Detail */}
        <ApproachSection />

        {/* 4. Our Process — Discovery, Concept & Direction, Design Development, Realisation */}
        <ProcessSection />

        {/* 5. About the Studio — Architectural philosophy */}
        <AboutSection />

        {/* 6. Contact — Have a space in mind? Start a conversation */}
        <ContactSection />
      </main>
    </div>
  );
}
