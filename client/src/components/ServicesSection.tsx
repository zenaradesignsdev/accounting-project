/**
 * NORTH LEDGER ADVISORY — Services Section
 * Design: Dark Luxury Fintech
 * Light section with large modern service cards, gold icon accents
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  BookOpen,
  FileText,
  Briefcase,
  Calculator,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Business Accounting",
    description:
      "Comprehensive accounting solutions that give you a clear, real-time picture of your financial health — so you can make decisions with confidence.",
    highlight: "Full-cycle accounting",
  },
  {
    icon: FileText,
    title: "Tax Strategy",
    description:
      "Proactive tax planning that minimizes liability and maximizes opportunity. We go beyond compliance to build a strategy aligned with your growth.",
    highlight: "Proactive planning",
  },
  {
    icon: Briefcase,
    title: "CFO Advisory",
    description:
      "Fractional CFO services that bring enterprise-level financial leadership to your business — without the enterprise-level cost.",
    highlight: "Strategic leadership",
  },
  {
    icon: Calculator,
    title: "Bookkeeping",
    description:
      "Accurate, timely bookkeeping that keeps your records clean and your business audit-ready. We handle the details so you can focus on growth.",
    highlight: "Always audit-ready",
  },
  {
    icon: TrendingUp,
    title: "Financial Forecasting",
    description:
      "Data-driven financial models and forecasts that help you plan for growth, secure funding, and navigate uncertainty with a clear roadmap.",
    highlight: "Data-driven models",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="container">
        {/* Section header */}
        <div ref={ref} className={`max-w-2xl mb-16 fade-up ${isVisible ? "visible" : ""}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#D4AF37]" />
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-[#D4AF37]">
              What We Do
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-300 text-[#0F1E2E] leading-tight mb-4">
            Services Built for{" "}
            <span className="italic text-[#3A556A]">Strategic Growth</span>
          </h2>
          <p className="font-heading text-base text-[#3A556A]/80 leading-relaxed">
            Every service we offer is designed to move your business forward — not just keep the books balanced.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`service-card group relative bg-[#F7F8FA] border border-[#0F1E2E]/8 rounded-sm p-7 fade-up ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-sm bg-[#0F1E2E] flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
                  <Icon size={20} className="text-[#D4AF37] group-hover:text-[#0F1E2E] transition-colors duration-300" />
                </div>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-1.5 mb-3">
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                  <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]">
                    {service.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-600 text-[#0F1E2E] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-heading text-sm text-[#3A556A]/80 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn more link */}
                <div className="mt-6 flex items-center gap-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-heading text-xs font-600 uppercase tracking-wider">Learn More</span>
                  <div className="w-4 h-px bg-[#D4AF37] group-hover:w-8 transition-all duration-300" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-[#D4AF37]/10 border-l-[32px] border-l-transparent group-hover:border-t-[#D4AF37]/25 transition-colors duration-300" />
                </div>
              </div>
            );
          })}

          {/* CTA card */}
          <div className={`service-card bg-[#0F1E2E] border border-[#D4AF37]/20 rounded-sm p-7 flex flex-col justify-between fade-up ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "400ms" }}>
            <div>
              <div className="w-12 h-12 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-6">
                <span className="text-[#D4AF37] text-xl font-display">N</span>
              </div>
              <h3 className="font-heading text-xl font-600 text-white mb-3">
                Not sure where to start?
              </h3>
              <p className="font-heading text-sm text-white/50 leading-relaxed">
                Book a complimentary discovery call and we'll identify the right services for your business.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-gold inline-flex items-center justify-center gap-2 font-heading text-sm font-600 px-5 py-3 rounded-sm mt-8"
            >
              Start the Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
