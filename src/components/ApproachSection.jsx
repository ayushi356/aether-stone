import React, { useState } from 'react';
import { Layers, Sun, Box, Sparkles, ArrowRight } from 'lucide-react';

const APPROACH_PILLARS = [
  {
    id: 'form-structure',
    num: '01',
    title: 'Form & Structure',
    subtitle: 'Tectonic Clarity & Monolithic Presence',
    description:
      'Architecture begins with uncompromised structural logic. We pursue monolithic honesty—pure geometries, proportional balance, and structural honesty that anchor buildings firmly within their natural topography rather than imposing arbitrary ornament.',
    principles: [
      { heading: 'Structural Honesty', body: 'Exposing the primary load-bearing system as the primary spatial expression.' },
      { heading: 'Topographical Alignment', body: 'Responding to ground contours, natural horizons, and geologic permanence.' },
      { heading: 'Volumetric Restraint', body: 'Allowing negative space and mass to establish visual calm and equilibrium.' }
    ]
  },
  {
    id: 'light-atmosphere',
    num: '02',
    title: 'Light & Atmosphere',
    subtitle: 'Choreography of Shadow, Air & Daylight',
    description:
      'Natural light is our primary sculpting medium. We choreograph deep reveals, zenith apertures, and recessed glazing to direct the subtle shifts of daylight, morning mist, and evening dusk across interior planes.',
    principles: [
      { heading: 'Zenith Apertures', body: 'Introducing vertical shafts of sunlight that animate textured interior walls.' },
      { heading: 'Diffused Horizons', body: 'Filtering harsh direct solar glare through deep structural embrasures.' },
      { heading: 'Atmospheric Continuity', body: 'Dissolving hard barriers between internal air and surrounding weather.' }
    ]
  },
  {
    id: 'material-detail',
    num: '03',
    title: 'Material & Detail',
    subtitle: 'Tactility, Permanence & Honest Craft',
    description:
      'We celebrate enduring materials that patinate with beauty—board-formed concrete, native granite, blackened steel, and seasoned timber. Every joint, reveal, and junction is designed with rigorous precision to ensure tactile delight.',
    principles: [
      { heading: 'Enduring Craftsmanship', body: 'Prioritising materials that improve in character over decades of exposure.' },
      { heading: 'Tactile Transitions', body: 'Meticulously resolved flush junctions, shadow lines, and textural contrasts.' },
      { heading: 'Authentic Textures', body: 'Emphasising unclad, honest surfaces that celebrate their natural origins.' }
    ]
  }
];

export default function ApproachSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = APPROACH_PILLARS[activeTab];

  return (
    <section
      id="approach"
      className="relative w-full bg-[#0a0d13] py-32 px-6 md:px-12 lg:px-20 text-[#f8fafc] overflow-hidden border-t border-white/5"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 arch-grid-bg opacity-20 pointer-events-none" />

      {/* Atmospheric Ambient Blur */}
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-none pointer-events-none opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.6), transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-sans-clean tracking-[0.25em] text-cyan-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-none bg-cyan-400" />
              <span>Our Approach</span>
            </div>
            <h2 className="section-editorial-heading font-display text-white">
              Principles of <span className="font-serif-elegant italic text-white/60">Creation</span>
            </h2>
          </div>
          <div className="max-w-md font-sans-clean text-sm text-white/70 leading-relaxed font-light">
            Every environment we design is rooted in three foundational disciplines: structural integrity, atmospheric illumination, and refined material craft.
          </div>
        </div>

        {/* 3 Pillar Selector Tabs with clean rectangular edges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {APPROACH_PILLARS.map((pillar, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`flex flex-col p-6 rounded-none border transition-all duration-300 text-left relative overflow-hidden group ${
                  isActive
                    ? 'border-cyan-400 bg-[#161f2e] shadow-[0_4px_20px_rgba(56,189,248,0.2)]'
                    : 'border-white/10 bg-[#0c0e12]/60 hover:border-white/25 hover:bg-[#0c0e12]'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-cyan-400" />
                )}
                <div className="flex items-center justify-between mb-4 text-xs font-sans-clean">
                  <span className={isActive ? 'text-cyan-300 font-semibold' : 'text-white/40'}>
                    PILLAR {pillar.num}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-none bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />}
                </div>
                <h3 className="font-display text-xl tracking-tight text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-sans-clean text-white/50">
                  {pillar.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Pillar Card with clean rectangular edges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center panel-dark p-8 sm:p-12 rounded-none border border-white/10">
          
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-xs font-sans-clean tracking-[0.2em] text-cyan-400 uppercase mb-2">
              Discipline 0{activeTab + 1} // Detail
            </div>
            
            <h3 className="font-display text-3xl sm:text-4xl text-white mb-4">
              {current.title}
            </h3>

            <p className="font-serif-elegant italic text-lg sm:text-xl text-cyan-300/80 mb-6">
              {current.subtitle}
            </p>

            <p className="font-sans-clean text-sm sm:text-base text-white/75 font-light leading-relaxed mb-8">
              {current.description}
            </p>

            <a
              href="#process"
              className="inline-flex items-center gap-2 text-xs font-sans-clean tracking-wider uppercase text-cyan-400 hover:text-white transition-colors"
            >
              <span>See how this informs our process</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Principle Breakdown Grid with clean rectangular edges */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {current.principles.map((p, i) => (
              <div
                key={i}
                className="p-5 rounded-none bg-[#07090d] border border-white/8 hover:border-cyan-400/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-none bg-cyan-400" />
                  <h4 className="font-sans-clean text-sm font-medium text-white">
                    {p.heading}
                  </h4>
                </div>
                <p className="font-sans-clean text-xs text-white/60 leading-relaxed font-light pl-3.5">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
