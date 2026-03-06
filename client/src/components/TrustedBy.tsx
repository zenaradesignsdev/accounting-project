/**
 * NORTH LEDGER ADVISORY — Trusted By Section
 * Design: Dark Luxury Fintech
 * Light section with industry client logos/badges
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const industries = [
  { name: "Technology", icon: "⬡", desc: "SaaS & Software" },
  { name: "Real Estate", icon: "◈", desc: "Property & Development" },
  { name: "Healthcare", icon: "◎", desc: "Medical Practices" },
  { name: "E-Commerce", icon: "◇", desc: "Retail & DTC Brands" },
  { name: "Professional Services", icon: "◉", desc: "Law & Consulting" },
  { name: "Hospitality", icon: "◫", desc: "Hotels & Restaurants" },
];

export default function TrustedBy() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-[#F7F8FA] py-16 border-b border-[#0F1E2E]/8">
      <div className="container" ref={ref}>
        <div className={`text-center mb-10 fade-up ${isVisible ? "visible" : ""}`}>
          <p className="font-heading text-xs tracking-[0.25em] uppercase text-[#3A556A] mb-2">
            Trusted Across Industries
          </p>
          <div className="gold-rule w-16 mx-auto" />
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 fade-up ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="flex flex-col items-center gap-2 p-4 rounded-sm border border-[#0F1E2E]/8 bg-white hover:border-[#D4AF37]/40 hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-2xl text-[#3A556A] group-hover:text-[#D4AF37] transition-colors duration-300">
                {ind.icon}
              </span>
              <span className="font-heading text-xs font-600 text-[#0F1E2E] text-center">{ind.name}</span>
              <span className="font-heading text-[10px] text-[#3A556A]/70 text-center">{ind.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
