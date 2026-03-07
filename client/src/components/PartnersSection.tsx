/**
 * NORTH LEDGER ADVISORY — Partners Section
 * Design: Dark Luxury Fintech
 * Dark section with elegant portrait cards and credentials
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Linkedin, Award } from "lucide-react";

const MICHAEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409971799/2d8awCJtCFvfTRMPDXJEDN/nla-partner-michael-P5HdPCcrwJXuko6EXeJDDy.webp";
const OLIVIA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409971799/2d8awCJtCFvfTRMPDXJEDN/nla-partner-olivia-FZ2RX5kw8E8hCCidKdR9xM.webp";

const partners = [
  {
    name: "Michael Rivera",
    credentials: "CPA, MST",
    title: "Managing Partner",
    specialty: "Tax Strategy & Business Advisory",
    bio: "Strategic tax planning specialist with 15+ years advising high-growth businesses and entrepreneurs. Michael has helped clients collectively save over $85K in tax liability through proactive planning and deep regulatory expertise.",
    photo: MICHAEL_IMG,
    highlights: ["IRS Enrolled Agent", "Big 4 Alumni", "Forbes 30 Under 30"],
  },
  {
    name: "Olivia Hart",
    credentials: "CPA, MBA",
    title: "Partner, Financial Advisory",
    specialty: "Financial Reporting & Business Strategy",
    bio: "Expert in financial reporting, business advisory, and CFO-level strategic planning. Olivia brings a data-first approach to financial management, helping companies build scalable financial infrastructure for long-term growth.",
    photo: OLIVIA_IMG,
    highlights: ["AICPA Member", "Fractional CFO Expert", "Series A–C Specialist"],
  },
];

export default function PartnersSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="team" className="bg-[#0F1E2E] py-24 lg:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="container relative z-10">
        {/* Section header */}
        <div ref={ref} className={`max-w-2xl mb-16 fade-up ${isVisible ? "visible" : ""}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#D4AF37]" />
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-[#D4AF37]">
              Our Partners
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-300 text-white leading-tight mb-4">
            The Minds Behind{" "}
            <span className="italic text-[#D4AF37]">Your Strategy</span>
          </h2>
          <p className="font-heading text-base text-white/50 leading-relaxed">
            Two decades of combined expertise, dedicated to your financial success.
          </p>
        </div>

        {/* Partner cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              className={`group relative glass-card rounded-sm overflow-hidden fade-up ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Portrait */}
                <div className="relative w-full sm:w-52 h-64 sm:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={partner.photo}
                    alt={partner.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gold overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2E]/60 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#0F1E2E]/20" />
                </div>

                {/* Content */}
                <div className="flex-1 p-7">
                  {/* Name & credentials */}
                  <div className="mb-1">
                    <h3 className="font-heading text-2xl font-600 text-white">
                      {partner.name}
                    </h3>
                    <span className="font-heading text-sm text-[#D4AF37] font-500">
                      {partner.credentials}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-px bg-[#D4AF37]/50" />
                    <span className="font-heading text-xs text-white/50 uppercase tracking-wider">
                      {partner.title}
                    </span>
                  </div>

                  {/* Specialty */}
                  <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                    <Award size={11} className="text-[#D4AF37]" />
                    <span className="font-heading text-[10px] text-[#D4AF37] uppercase tracking-wider">
                      {partner.specialty}
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="font-heading text-sm text-white/55 leading-relaxed mb-5">
                    {partner.bio}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {partner.highlights.map((h) => (
                      <span
                        key={h}
                        className="font-heading text-[10px] text-white/60 border border-white/10 px-2.5 py-1 rounded-sm"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* LinkedIn */}
                  <button className="flex items-center gap-2 text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors duration-200">
                    <Linkedin size={14} />
                    <span className="font-heading text-xs">Connect on LinkedIn</span>
                  </button>
                </div>
              </div>

              {/* Bottom gold accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/0 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
