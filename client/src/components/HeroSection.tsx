/**
 * NORTH LEDGER ADVISORY — Hero Section
 * Design: Dark Luxury Fintech
 * Full-bleed dark hero with compass rose background, animated headline, dual CTAs
 */
import { useEffect, useRef } from "react";
import { ArrowRight, TrendingUp, Shield, BarChart3 } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409971799/2d8awCJtCFvfTRMPDXJEDN/nla-hero-bg-aFYpspLvn7y5MrdeB8je6Z.webp";

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".word");
    words.forEach((w, i) => {
      const delay = 150 + i * 100;
      (w as HTMLElement).style.transitionDelay = `${delay}ms`;
      setTimeout(() => {
        (w as HTMLElement).classList.add("visible");
      }, delay);
    });
  }, []);

  const stats = [
    { icon: TrendingUp, value: "$2.4B+", label: "Assets Managed" },
    { icon: Shield, value: "500+", label: "Clients Served" },
    { icon: BarChart3, value: "15+", label: "Years of Excellence" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F1E2E]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1E2E]/60 via-[#0F1E2E]/40 to-[#0F1E2E]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E2E]/80 via-transparent to-[#0F1E2E]/40" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Animated floating data cards */}
      <div className="absolute top-1/4 right-8 lg:right-16 hidden lg:block z-10">
        <div className="glass-card rounded-lg p-4 w-52 animate-pulse-slow">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-heading text-xs text-white/50 uppercase tracking-wider">Portfolio Health</span>
          </div>
          <div className="text-2xl font-heading font-700 text-white">+18.4%</div>
          <div className="text-xs text-white/40 font-heading mt-1">YTD Growth</div>
          <div className="mt-3 flex gap-1">
            {[40, 55, 45, 70, 60, 80, 75].map((h, i) => (
              <div key={i} className="flex-1 bg-[#D4AF37]/30 rounded-sm" style={{ height: `${h * 0.4}px` }} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-12 lg:right-24 hidden lg:block z-10">
        <div className="glass-card rounded-lg p-4 w-44 animate-pulse-slow" style={{ animationDelay: '2s' }}>
          <div className="text-xs text-white/40 font-heading uppercase tracking-wider mb-1">Tax Savings</div>
          <div className="text-xl font-heading font-700 text-[#D4AF37]">$340K</div>
          <div className="text-xs text-white/40 font-heading">This fiscal year</div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container pt-28 pb-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-6 h-px bg-[#D4AF37]" />
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-[#D4AF37]">
              Boutique Accounting &amp; Advisory
            </span>
          </div>

          {/* Main headline */}
          <div ref={headlineRef} className="mb-6">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-300 text-white leading-[1.1] tracking-tight">
              <span className="word fade-up inline-block mr-4">Financial</span>
              <span className="word fade-up inline-block mr-4">Clarity</span>
              <br />
              <span className="word fade-up inline-block font-display italic text-gradient-gold mr-4">
                for Modern
              </span>
              <span className="word fade-up inline-block text-white">
                Businesses
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="font-heading text-lg md:text-xl text-white/60 leading-relaxed max-w-xl mb-10 fade-up visible" style={{ transitionDelay: "500ms" }}>
            We help entrepreneurs and growing companies navigate financial complexity with strategic precision — turning numbers into your competitive advantage.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 fade-up visible" style={{ transitionDelay: "650ms" }}>
            <a
              href="#contact"
              className="btn-gold inline-flex items-center justify-center gap-2 font-heading text-sm font-600 px-7 py-3.5 rounded-sm"
            >
              Book a Consultation
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="btn-outline-gold inline-flex items-center justify-center gap-2 font-heading text-sm font-500 px-7 py-3.5 rounded-sm"
            >
              View Services
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 fade-up visible" style={{ transitionDelay: "800ms" }}>
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <Icon size={16} className="text-[#D4AF37]" />
                </div>
                <div>
                  <div className="font-heading text-xl font-700 text-white">{value}</div>
                  <div className="font-heading text-xs text-white/40 uppercase tracking-wider">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F7F8FA] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 lg:right-16 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" style={{ animation: 'bounce 2s infinite' }} />
        <span className="font-heading text-[10px] tracking-widest uppercase text-white rotate-90 origin-center mt-2">Scroll</span>
      </div>
    </section>
  );
}
