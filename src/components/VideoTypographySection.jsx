import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Film, Compass, Play, Pause } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const REELS = [
  {
    id: 'concrete',
    label: 'REEL 01 // BRUTALIST CONCRETE',
    src: 'https://cdn.coverr.co/videos/coverr-concrete-building-structure-4122/1080p.mp4',
    poster: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    caption: 'Cast concrete geometry under raking sunlight'
  },
  {
    id: 'facade',
    label: 'REEL 02 // TECTONIC FACADE',
    src: 'https://cdn.coverr.co/videos/coverr-architecture-of-a-modern-building-5381/1080p.mp4',
    poster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    caption: 'Monolithic glass and steel reflections'
  }
];

export default function VideoTypographySection() {
  const sectionRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const svgMaskRef = useRef(null);
  const videoRef = useRef(null);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const activeReel = REELS[activeReelIndex];

  // Toggle play/pause
  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const ctx = gsap.context(() => {
      // 1. Entrance reveal & subtle scale transition
      gsap.fromTo(
        svgMaskRef.current,
        { scale: 0.94, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // 2. Scroll-driven vertical movement of video inside letterforms
      if (!prefersReducedMotion && videoWrapperRef.current) {
        gsap.fromTo(
          videoWrapperRef.current,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeReelIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#060709] py-28 md:py-36 px-6 md:px-12 lg:px-20 text-[#f8fafc] overflow-hidden border-t border-white/5 select-none"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 arch-grid-bg opacity-20 pointer-events-none" />

      {/* Atmospheric glow in cyan */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] opacity-20 blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4), transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Eyebrow Header */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-4 mb-8 text-xs font-sans-clean tracking-[0.2em] text-[#38bdf8] uppercase gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-none bg-[#38bdf8]" />
            <span>Cinematic Study // Video Typography</span>
          </div>
          <div className="flex items-center gap-4 text-white/50 text-[11px]">
            <span>Scroll-Driven Optical Mask</span>
            <span className="text-white/20">|</span>
            <span className="text-cyan-400">1080P Architectural Reel</span>
          </div>
        </div>

        {/* MASKED VIDEO TYPOGRAPHY VIEWPORT */}
        <div className="relative w-full h-[52vh] sm:h-[60vh] md:h-[72vh] bg-[#060709] overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl">
          
          {/* Layer 1: Background Video Container that moves vertically with scroll */}
          <div
            ref={videoWrapperRef}
            className="absolute inset-x-0 w-full h-[140%] -top-[20%] pointer-events-none"
          >
            <video
              ref={videoRef}
              key={activeReel.src}
              autoPlay
              muted
              loop
              playsInline
              poster={activeReel.poster}
              className="w-full h-full object-cover brightness-95 contrast-120"
              src={activeReel.src}
            />
          </div>

          {/* Layer 2: Inverted SVG Mask (Dark surround, transparent cut-out letters) */}
          <div ref={svgMaskRef} className="absolute inset-0 w-full h-full pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1600 600"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <mask id="architectural-video-knockout">
                  {/* Solid White renders the dark background */}
                  <rect x="0" y="0" width="100%" height="100%" fill="white" />
                  
                  {/* Solid Black cuts out the letterforms revealing the video underneath */}
                  <text
                    x="50%"
                    y="44%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="black"
                    fontSize="180"
                    fontWeight="600"
                    fontFamily="'Cinzel', 'Cormorant Garamond', serif"
                    letterSpacing="0.08em"
                  >
                    MONOLITH
                  </text>

                  {/* Supporting subtitle cutout */}
                  <text
                    x="50%"
                    y="67%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="black"
                    fontSize="56"
                    fontStyle="italic"
                    fontFamily="'Cormorant Garamond', Georgia, serif"
                    letterSpacing="0.04em"
                  >
                    Shadow, Concrete & Air
                  </text>
                </mask>
              </defs>

              {/* Background cover matching site backdrop #060709 */}
              <rect
                x="0"
                y="0"
                width="100%" height="100%"
                fill="#060709"
                mask="url(#architectural-video-knockout)"
              />

              {/* Hairline architectural letter outlines for crisp definition */}
              <text
                x="50%"
                y="44%"
                textAnchor="middle"
                dominantBaseline="central"
                fill="none"
                stroke="rgba(56, 189, 248, 0.45)"
                strokeWidth="1.2"
                fontSize="180"
                fontWeight="600"
                fontFamily="'Cinzel', 'Cormorant Garamond', serif"
                letterSpacing="0.08em"
                className="opacity-60"
              >
                MONOLITH
              </text>

              <text
                x="50%"
                y="67%"
                textAnchor="middle"
                dominantBaseline="central"
                fill="none"
                stroke="rgba(248, 250, 252, 0.25)"
                strokeWidth="0.8"
                fontSize="56"
                fontStyle="italic"
                fontFamily="'Cormorant Garamond', Georgia, serif"
                letterSpacing="0.04em"
                className="opacity-50"
              >
                Shadow, Concrete & Air
              </text>
            </svg>
          </div>

          {/* Top Left Watermark / Datum */}
          <div className="absolute top-4 left-6 pointer-events-none text-[10px] font-sans-clean text-white/50 tracking-widest uppercase">
            <span>OPTICAL DEPTH FIELD // 01</span>
          </div>

          {/* Bottom Right Reel Info */}
          <div className="absolute bottom-4 right-6 pointer-events-none text-[10px] font-sans-clean text-cyan-300 tracking-wider">
            <span>{activeReel.caption}</span>
          </div>
        </div>

        {/* Reel Controls & Telemetry Bar below video */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-4 mt-6 text-xs font-sans-clean text-white/60 gap-4">
          
          {/* Reel Switcher Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-wider uppercase text-white/40 mr-2">
              Select Reel:
            </span>
            {REELS.map((reel, idx) => {
              const isActive = activeReelIndex === idx;
              return (
                <button
                  key={reel.id}
                  onClick={() => setActiveReelIndex(idx)}
                  className={`px-3 py-1.5 text-[11px] font-sans-clean tracking-wider uppercase rounded-none border transition-all ${
                    isActive
                      ? 'border-[#38bdf8] bg-cyan-500/10 text-cyan-300'
                      : 'border-white/10 hover:border-white/25 text-white/60 hover:text-white'
                  }`}
                >
                  {reel.label}
                </button>
              );
            })}
          </div>

          {/* Play / Pause Toggle Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleTogglePlay}
              className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-sans-clean tracking-wider uppercase rounded-none border border-white/15 hover:border-cyan-400 bg-white/5 text-white/80 hover:text-white transition-all"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-cyan-400" />
                  <span>Pause Motion</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-cyan-400" />
                  <span>Resume Motion</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
