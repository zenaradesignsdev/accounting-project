/**
 * NORTH LEDGER ADVISORY — Methodology Section
 * Design: Dark Luxury Fintech
 * Light section with premium 4-step horizontal timeline
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, BarChart2, Target, RefreshCw } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We begin with a deep-dive consultation to understand your business model, financial goals, and current challenges. No assumptions — only clarity.",
  },
  {
    num: "02",
    icon: BarChart2,
    title: "Financial Analysis",
    description:
      "Our team conducts a comprehensive review of your financials, identifying inefficiencies, risks, and untapped opportunities in your current structure.",
  },
  {
    num: "03",
    icon: Target,
    title: "Strategic Planning",
    description:
      "We build a tailored financial roadmap — from tax optimization to cash flow forecasting — aligned with your short-term needs and long-term vision.",
  },
  {
    num: "04",
    icon: RefreshCw,
    title: "Ongoing Advisory",
    description:
      "We stay by your side as your business evolves. Regular reviews, proactive adjustments, and always-available guidance keep your strategy on course.",
  },
];

export default function MethodologySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="methodology" className="bg-[#F7F8FA] py-24 lg:py-32">
      <div className="container">
        {/* Section header */}
        <div ref={ref} className={`max-w-2xl mb-16 fade-up ${isVisible ? "visible" : ""}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#D4AF37]" />
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-[#D4AF37]">
              Our Process
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-300 text-[#0F1E2E] leading-tight mb-4">
            A Framework Built for{" "}
            <span className="italic text-[#3A556A]">Precision</span>
          </h2>
          <p className="font-heading text-base text-[#3A556A]/80 leading-relaxed">
            Every engagement follows our proven four-stage methodology — delivering measurable results at every step.
          </p>
        </div>

        {/* Timeline — desktop horizontal */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative mb-0">
            <div className="absolute top-8 left-0 right-0 h-px bg-[#0F1E2E]/10" />
            <div
              className={`absolute top-8 left-0 h-px bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/30 ${isVisible ? "w-full" : "w-0"}`}
              style={{ transition: 'width 1.5s ease', transitionDelay: "300ms" }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className={`relative pt-16 fade-up ${isVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${200 + i * 120}ms` }}
                >
                  {/* Step dot */}
                  <div className="absolute top-5 left-0 w-6 h-6 rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  </div>

                  {/* Step number */}
                  <div className="font-display text-6xl font-300 text-[#0F1E2E]/8 leading-none mb-3 select-none">
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-sm bg-[#0F1E2E] flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[#D4AF37]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-600 text-[#0F1E2E] mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-heading text-sm text-[#3A556A]/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline — mobile vertical */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`relative flex gap-6 pb-10 fade-up ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${150 + i * 100}ms` }}
              >
                {/* Vertical line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/50 to-[#D4AF37]/10" />
                )}

                {/* Icon circle */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0F1E2E] border-2 border-[#D4AF37]/30 flex items-center justify-center z-10">
                  <Icon size={16} className="text-[#D4AF37]" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display text-3xl font-300 text-[#0F1E2E]/15 leading-none">
                      {step.num}
                    </span>
                    <h3 className="font-heading text-lg font-600 text-[#0F1E2E]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-heading text-sm text-[#3A556A]/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
