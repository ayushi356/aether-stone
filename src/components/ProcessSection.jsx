import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const STAGES = [
  {
    step: '01',
    title: 'Discovery',
    duration: 'Phase 01',
    summary: 'Site topography, solar analysis & contextual research',
    description:
      'We begin with deep immersion into the site: analyzing prevailing winds, daylight vectors, topography, and microclimates. Through dialogue with clients, we define the spatial rituals and architectural ambitions that guide every subsequent decision.'
  },
  {
    step: '02',
    title: 'Concept & Direction',
    duration: 'Phase 02',
    summary: 'Volumetric massing, spatial flow & daylight choreography',
    description:
      'Translating findings into initial massing studies, spatial layouts, and atmospheric sections. We test how sunlight will penetrate the core, sculpt shadow gradients, and frame surrounding landscapes before committing to form.'
  },
  {
    step: '03',
    title: 'Design Development',
    duration: 'Phase 03',
    summary: 'Structural engineering, material mockups & detail resolution',
    description:
      'Refining the concept into comprehensive architectural drawings, tectonic specifications, and physical mockups. Every structural node, window embrasure, and material threshold is detailed for endurance and beauty.'
  },
  {
    step: '04',
    title: 'Realisation',
    duration: 'Phase 04',
    summary: 'Master craftsmanship, site supervision & handover',
    description:
      'Partnering closely with trusted master builders, stone fabricators, and structural engineers during construction. We maintain continuous on-site presence to ensure the built architecture matches the spatial intent with absolute fidelity.'
  }
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative w-full bg-[#060709] py-32 px-6 md:px-12 lg:px-20 text-[#f8fafc] overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 arch-grid-bg opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-sans-clean tracking-[0.25em] text-cyan-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-none bg-cyan-400" />
              <span>Our Process</span>
            </div>
            <h2 className="section-editorial-heading font-display text-white">
              From Concept to <span className="font-serif-elegant italic text-white/60">Permanence</span>
            </h2>
          </div>
          <div className="max-w-md font-sans-clean text-sm text-white/70 leading-relaxed font-light">
            A structured, collaborative methodology that transforms spatial aspirations into enduring, beautifully realized physical environments.
          </div>
        </div>

        {/* 4 Process Steps Grid with clean rectangular edges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES.map((stage) => (
            <div
              key={stage.step}
              className="panel-dark p-7 rounded-none border border-white/10 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="font-display text-2xl text-cyan-400 group-hover:text-white transition-colors">
                    {stage.step}
                  </span>
                  <span className="text-[10px] font-sans-clean tracking-wider uppercase px-2 py-0.5 rounded-none bg-white/5 text-white/70 border border-white/10">
                    {stage.duration}
                  </span>
                </div>

                <h3 className="font-display text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {stage.title}
                </h3>

                <p className="font-serif-elegant italic text-sm text-cyan-300/80 mb-4">
                  {stage.summary}
                </p>

                <p className="font-sans-clean text-xs text-white/70 leading-relaxed font-light">
                  {stage.description}
                </p>
              </div>

              <div className="pt-8 flex items-center gap-1.5 text-[11px] font-sans-clean uppercase tracking-wider text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Phase Deliverables</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
