import React, { useState } from 'react';
import { ArrowUp, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    typology: 'Private Residence',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#060709] pt-32 pb-16 px-6 md:px-12 lg:px-20 text-[#f8fafc] overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 arch-grid-bg opacity-15 pointer-events-none" />

      {/* Atmospheric Glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(56, 189, 248, 0.3), transparent 75%)',
          filter: 'blur(60px)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between">
        
        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/10">
          
          {/* Left Column: Headline and Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-sans-clean tracking-[0.25em] text-cyan-400 uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-none bg-cyan-400" />
                <span>Project Enquiries</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-5xl font-normal tracking-tight text-white mb-6">
                Have a space in mind? <br />
                <span className="font-serif-elegant italic text-cyan-300/90">Start a conversation.</span>
              </h2>

              <p className="font-sans-clean text-sm sm:text-base text-white/75 font-light leading-relaxed mb-8">
                Whether you are commissioning a bespoke residence, a cultural pavilion, or an interior environment, we invite you to discuss your project vision with our team.
              </p>

              <div className="flex flex-col gap-4 font-sans-clean text-xs text-white/70 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a
                    href="mailto:enquiries@aethermonolith.com"
                    className="hover:text-cyan-300 transition-colors underline decoration-cyan-400"
                  >
                    enquiries@aethermonolith.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Responses typically provided within two business days.</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 text-xs font-sans-clean text-white/50">
              <span className="text-cyan-400 uppercase text-[10px] tracking-wider block mb-1">
                Studio Enquiries & Commissions
              </span>
              <span>Available for independent architectural commissions and select collaborations.</span>
            </div>
          </div>

          {/* Right Column: Functional Enquiry Form with clean rectangular edges */}
          <div className="lg:col-span-7 panel-dark p-8 sm:p-10 rounded-none border border-white/10 bg-[#0d1118]">
            {submitted ? (
              <div className="py-16 flex flex-col items-center justify-center text-center gap-4">
                <CheckCircle2 className="w-12 h-12 text-cyan-400" />
                <h3 className="font-display text-2xl text-white">
                  Enquiry Received
                </h3>
                <p className="font-sans-clean text-sm text-white/75 max-w-md font-light leading-relaxed">
                  Thank you for reaching out. We have received your project details and will be in touch shortly to schedule an introductory consultation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary mt-4 text-xs rounded-none"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-sans-clean text-xs">
                <div className="border-b border-white/10 pb-3 mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-sans-clean text-cyan-400 uppercase tracking-wider">
                    Project Introduction Form
                  </span>
                  <span className="text-[10px] text-white/40">* Required fields</span>
                </div>

                {/* Name & Email with rectangular edges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] text-white/70 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="bg-[#06080c] border border-white/15 px-3.5 py-2.5 text-white placeholder-white/25 focus:outline-none focus:border-cyan-400 rounded-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] text-white/70 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. eleanor@example.com"
                      className="bg-[#06080c] border border-white/15 px-3.5 py-2.5 text-white placeholder-white/25 focus:outline-none focus:border-cyan-400 rounded-none transition-colors"
                    />
                  </div>
                </div>

                {/* Typology & Location with rectangular edges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] text-white/70 uppercase tracking-wider">
                      Project Typology
                    </label>
                    <select
                      value={formData.typology}
                      onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                      className="bg-[#06080c] border border-white/15 px-3.5 py-2.5 text-white focus:outline-none focus:border-cyan-400 rounded-none transition-colors"
                    >
                      <option value="Private Residence">Private Residence</option>
                      <option value="Cultural / Exhibition">Cultural / Exhibition</option>
                      <option value="Pavilion / Landscape">Pavilion / Landscape</option>
                      <option value="Interior Architecture">Interior Architecture</option>
                      <option value="Other Architectural Work">Other Architectural Work</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] text-white/70 uppercase tracking-wider">
                      Location / Context
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Coastal Maine, USA"
                      className="bg-[#06080c] border border-white/15 px-3.5 py-2.5 text-white placeholder-white/25 focus:outline-none focus:border-cyan-400 rounded-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message with rectangular edges */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] text-white/70 uppercase tracking-wider">
                    Project Brief / Overview
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your site, goals, or spatial ambitions..."
                    className="bg-[#06080c] border border-white/15 px-3.5 py-2.5 text-white placeholder-white/25 focus:outline-none focus:border-cyan-400 rounded-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button with clean rectangular edges */}
                <button
                  type="submit"
                  className="btn-primary mt-2 rounded-none"
                >
                  <span>Submit Project Enquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Colophon and Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 text-[11px] font-sans-clean text-white/50 gap-4">
          <div className="flex items-center gap-6">
            <span>© 2026 AETHER & MONOLITH ARCHITECTURE STUDIO.</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-cyan-300 transition-colors">PROJECTS</a>
            <a href="#approach" className="hover:text-cyan-300 transition-colors">APPROACH</a>
            <a href="#process" className="hover:text-cyan-300 transition-colors">PROCESS</a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">ABOUT</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-cyan-300 text-white/70 transition-colors uppercase tracking-wider ml-4 rounded-none"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
