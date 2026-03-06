/**
 * NORTH LEDGER ADVISORY — Testimonials Section
 * Design: Dark Luxury Fintech
 * Dark section with large editorial-style testimonials and carousel
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "North Ledger completely transformed how we think about our finances. Michael's tax strategy alone saved us over $180,000 last year. This isn't just accounting — it's a competitive advantage.",
    author: "James Thornton",
    role: "CEO, Apex Technologies",
    industry: "SaaS / Technology",
    savings: "$180K saved",
  },
  {
    quote:
      "Olivia's financial reporting gave us the clarity we needed to close our Series B. Investors were impressed by the depth and precision of our financials. North Ledger is a true strategic partner.",
    author: "Sarah Chen",
    role: "Founder, Meridian Health",
    industry: "Healthcare Technology",
    savings: "Series B Closed",
  },
  {
    quote:
      "As a real estate developer, cash flow is everything. The forecasting models North Ledger built for us have been invaluable — we can now plan 18 months ahead with real confidence.",
    author: "Marcus Williams",
    role: "Principal, Williams Development Group",
    industry: "Real Estate Development",
    savings: "18-month visibility",
  },
  {
    quote:
      "We were drowning in bookkeeping chaos when we found North Ledger. Within 60 days, our books were clean, our processes were streamlined, and I finally understood my own numbers.",
    author: "Elena Vasquez",
    role: "Owner, Luma Hospitality Group",
    industry: "Hospitality & Restaurants",
    savings: "60-day turnaround",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className="bg-[#0F1E2E] py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* Large background quote mark */}
      <div className="absolute top-8 left-8 lg:left-24 font-display text-[20rem] leading-none text-white/[0.02] select-none pointer-events-none">
        "
      </div>

      <div className="container relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`flex items-end justify-between mb-16 fade-up ${isVisible ? "visible" : ""}`}>
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#D4AF37]" />
              <span className="font-heading text-xs tracking-[0.25em] uppercase text-[#D4AF37]">
                Client Stories
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-300 text-white leading-tight">
              Results That{" "}
              <span className="italic text-[#D4AF37]">Speak for Themselves</span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-white/50 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-white/50 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Main testimonial */}
        <div className={`fade-up ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Large quote */}
            <div className="lg:col-span-2">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-300 text-white leading-[1.3] mb-8 italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#3A556A] flex items-center justify-center">
                  <span className="font-heading text-lg font-600 text-white">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-heading text-base font-600 text-white">{t.author}</div>
                  <div className="font-heading text-sm text-white/50">{t.role}</div>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div className="glass-card rounded-sm p-6">
              <div className="mb-4">
                <div className="font-heading text-xs text-white/30 uppercase tracking-wider mb-1">Industry</div>
                <div className="font-heading text-sm text-white/70">{t.industry}</div>
              </div>
              <div className="gold-rule mb-4" />
              <div>
                <div className="font-heading text-xs text-white/30 uppercase tracking-wider mb-1">Key Result</div>
                <div className="font-display text-3xl font-300 text-[#D4AF37]">{t.savings}</div>
              </div>

              {/* Testimonial dots */}
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === active ? "w-6 bg-[#D4AF37]" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-white/50"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-white/50"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
