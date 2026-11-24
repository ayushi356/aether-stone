import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Compass, Maximize2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: '01',
    label: 'CONCEPT STUDY 01',
    title: 'Cliffside Observation Pavilion',
    typology: 'Cultural & Public Space',
    materials: 'Board-formed concrete, darkened bronze, low-iron glass',
    focus: 'Horizontality and diffused coastal daylight',
    description:
      'Conceived as a quiet threshold between sheer rock and open atmosphere. The cantilevered volume frames panoramic vistas through deep architectural reveals, allowing fog and shifting cloud cover to modulate internal light throughout the day.',
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    parameters: [
      { label: 'Typology', value: 'Observation Pavilion' },
      { label: 'Primary Mass', value: 'Board-Formed Concrete' },
      { label: 'Aperture Design', value: 'Deep Recessed Mullions' },
      { label: 'Atmosphere', value: 'Diffused Horizon Light' }
    ]
  },
  {
    id: '02',
    label: 'CONCEPT STUDY 02',
    title: 'Volcanic Coast Residence',
    typology: 'Private Residential Architecture',
    materials: 'Cast basalt masonry, charred cedar, patinated zinc',
    focus: 'Shelter, acoustic isolation and thermal inertia',
    description:
      'Rooted into a windswept coastline, this low-profile residence uses monolithic basalt stone walls to withstand ocean gales. Protected internal courtyards create calm sanctuaries shielded from the surrounding elements.',
    imageUrl:
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85',
    parameters: [
      { label: 'Typology', value: 'Single-Family Residence' },
      { label: 'Materiality', value: 'Honed Basalt & Zinc' },
      { label: 'Courtyard Plan', value: 'Enclosed Microclimate' },
      { label: 'Spatial Quality', value: 'Grounded & Introspective' }
    ]
  },
  {
    id: '03',
    label: 'CONCEPT STUDY 03',
    title: 'Alpine Study & Sanctuary',
    typology: 'Academic & Creative Retreat',
    materials: 'Locally quarried granite, laminated timber, textured lime plaster',
    focus: 'Vertical daylight and high-altitude thermal retention',
    description:
      'Positioned along a high mountain ridge to capture panoramic valley views above the cloud line. Tiered timber study galleries step down the natural contours of the mountain, illuminated by soft northern skylights.',
    imageUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    parameters: [
      { label: 'Typology', value: 'Research & Study Retreat' },
      { label: 'Structural System', value: 'Granite Plinth + Mass Timber' },
      { label: 'Solar Orientation', value: 'Passive Northern Glazing' },
      { label: 'Environment', value: 'Alpine Ridge Topography' }
    ]
  },
  {
    id: '04',
    label: 'CONCEPT STUDY 04',
    title: 'Subterranean Light Chamber',
    typology: 'Exhibition & Contemplative Void',
    materials: 'Rough-cast aggregate concrete, blackened steel, reflective basalt basin',
    focus: 'Acoustic stillness, zenith aperture, water reflection',
    description:
      'Carved into the earth to explore the psychological impact of volume and singular illumination. A central zenith opening directs a moving beam of sunlight across a still basalt water pool, transforming the room with the sun’s daily passage.',
    imageUrl:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=85',
    parameters: [
      { label: 'Typology', value: 'Exhibition Chamber' },
      { label: 'Subgrade Depth', value: 'Subterranean Vault' },
      { label: 'Illumination', value: 'Zenith Aperture Shaft' },
      { label: 'Sensory Detail', value: 'Acoustic Water Basin' }
    ]
  }
];

export default function MonolithShowcase() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      cards.forEach((card) => {
        const image = card.querySelector('.project-img-wrapper');
        const content = card.querySelector('.project-info-wrapper');

        gsap.fromTo(
          image,
          { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', scale: 1.1 },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            scale: 1.0,
            duration: 1.5,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        gsap.fromTo(
          content,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full bg-[#060709] py-32 px-6 md:px-12 lg:px-20 text-[#f8fafc] overflow-hidden border-t border-white/5"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 arch-grid-bg opacity-20 pointer-events-none" />

      {/* Atmospheric glow in cyan tones */}
      <div
        className="absolute top-1/4 -right-1/4 w-3/4 h-1/2 opacity-25 mix-blend-screen animate-cloud-slow pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.3), transparent 70%)',
          filter: 'blur(70px)'
        }}
      />

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-24">
        <div className="flex items-center gap-2.5 text-xs tracking-[0.25em] font-sans-clean text-cyan-400 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-none bg-cyan-400" />
          <span>Selected Projects</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-10">
          <div>
            <h2 className="section-editorial-heading font-display text-white">
              Form & <span className="font-serif-elegant italic text-white/60">Presence</span>
            </h2>
          </div>
          <div className="max-w-md font-sans-clean text-sm text-white/70 leading-relaxed font-light">
            A curated portfolio of architectural concepts exploring how structure, material weight, and natural light combine to shape enduring spatial environments.
          </div>
        </div>
      </div>

      {/* Project Cards List */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-36">
        {PROJECTS.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.id}
              className={`project-card flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-20`}
            >
              {/* IMAGE / ARCHITECTURAL VIEWPORT with clean rectangular edges */}
              <div className="w-full lg:w-7/12 relative group">
                <div className="absolute -top-7 left-0 flex items-center gap-3 text-[11px] font-sans-clean tracking-wider text-cyan-400 uppercase">
                  <span>{item.label}</span>
                  <span className="text-white/30">//</span>
                  <span className="text-white/60">{item.typology}</span>
                </div>

                <div className="project-img-wrapper relative w-full h-[400px] sm:h-[480px] lg:h-[580px] overflow-hidden rounded-none border border-white/10 bg-[#0c0e14]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover brightness-85 contrast-115 group-hover:scale-105 group-hover:brightness-95 transition-all duration-1000 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Fog vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-[#060709]/30 pointer-events-none" />

                  {/* Subtle cool mist drift overlay */}
                  <div
                    className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none animate-cloud-medium"
                    style={{
                      background: 'radial-gradient(ellipse at 70% 80%, rgba(200, 225, 255, 0.4), transparent 70%)',
                      filter: 'blur(30px)'
                    }}
                  />

                  {/* Material badge on image with clean rectangular edges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1.5 rounded-none bg-black/70 backdrop-blur-md text-[11px] font-sans-clean text-cyan-300 border border-white/10">
                      {item.focus}
                    </span>
                  </div>
                </div>
              </div>

              {/* EDITORIAL CONTENT & PARAMETERS */}
              <div className="project-info-wrapper w-full lg:w-5/12 flex flex-col justify-center">
                <div className="text-xs font-sans-clean tracking-[0.2em] text-cyan-400 uppercase mb-2">
                  0{item.id} // Architectural Study
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-white mb-4">
                  {item.title}
                </h3>

                <p className="font-sans-clean text-sm sm:text-base text-white/75 font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Structured Architectural Parameters */}
                <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-5 mb-8 font-sans-clean text-xs">
                  {item.parameters.map((param, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-cyan-400 uppercase text-[10px] tracking-wider">{param.label}</span>
                      <span className="text-white/90 font-medium text-xs">{param.value}</span>
                    </div>
                  ))}
                </div>

                {/* Enquiry CTA */}
                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-sans-clean tracking-wider uppercase text-cyan-400 hover:text-white transition-colors group"
                  >
                    <span>Enquire about similar projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
