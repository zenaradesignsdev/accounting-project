/**
 * NORTH LEDGER ADVISORY — Insights Section
 * Design: Dark Luxury Fintech
 * Light section with editorial blog-style cards
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    category: "Tax Planning",
    title: "7 Tax Strategies Every Business Owner Should Implement Before Year-End",
    excerpt:
      "Proactive tax planning can save your business tens of thousands of dollars. Here are the strategies our CPAs recommend before the fiscal year closes.",
    readTime: "6 min read",
    date: "Feb 2026",
    featured: true,
  },
  {
    category: "Financial Strategy",
    title: "How to Build a Financial Dashboard That Actually Drives Decisions",
    excerpt:
      "Most business owners have financial data — but not financial intelligence. Learn how to structure your reporting for clarity and action.",
    readTime: "5 min read",
    date: "Jan 2026",
    featured: false,
  },
  {
    category: "Growth Planning",
    title: "The CFO Playbook for Scaling from $1M to $10M in Revenue",
    excerpt:
      "The financial infrastructure that works at $1M breaks at $5M. Here's how to build the systems, processes, and team to scale confidently.",
    readTime: "8 min read",
    date: "Jan 2026",
    featured: false,
  },
  {
    category: "Tax Planning",
    title: "Understanding the R&D Tax Credit: A Guide for Tech Founders",
    excerpt:
      "Many technology companies leave significant R&D tax credits on the table. This guide explains eligibility, calculation, and how to claim what you're owed.",
    readTime: "7 min read",
    date: "Dec 2025",
    featured: false,
  },
];

export default function InsightsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const featured = articles[0];
  const rest = articles.slice(1);

  const categoryColor: Record<string, string> = {
    "Tax Planning": "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20",
    "Financial Strategy": "text-[#3A556A] bg-[#3A556A]/10 border-[#3A556A]/20",
    "Growth Planning": "text-[#0F1E2E] bg-[#0F1E2E]/8 border-[#0F1E2E]/15",
  };

  return (
    <section id="insights" className="bg-white py-24 lg:py-32">
      <div className="container">
        {/* Section header */}
        <div ref={ref} className={`flex items-end justify-between mb-16 fade-up ${isVisible ? "visible" : ""}`}>
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#D4AF37]" />
              <span className="font-heading text-xs tracking-[0.25em] uppercase text-[#D4AF37]">
                Insights & Resources
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-300 text-[#0F1E2E] leading-tight">
              Financial Intelligence,{" "}
              <span className="italic text-[#3A556A]">Delivered</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-heading text-sm text-[#D4AF37] hover:gap-3 transition-all duration-200"
          >
            View All Articles
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Featured + grid layout */}
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-6 fade-up ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
          {/* Featured article */}
          <div className="lg:col-span-3 group relative bg-[#F7F8FA] border border-[#0F1E2E]/8 rounded-sm p-8 hover:border-[#D4AF37]/30 hover:shadow-lg transition-all duration-300 cursor-pointer">
            {/* Category */}
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-sm border text-[10px] font-heading uppercase tracking-wider mb-4 ${categoryColor[featured.category]}`}>
              {featured.category}
            </div>

            {/* Featured badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 ml-2 mb-4">
              <span className="font-heading text-[10px] text-[#D4AF37] uppercase tracking-wider">Featured</span>
            </div>

            <h3 className="font-heading text-2xl font-600 text-[#0F1E2E] leading-snug mb-4 group-hover:text-[#3A556A] transition-colors duration-200">
              {featured.title}
            </h3>
            <p className="font-heading text-sm text-[#3A556A]/75 leading-relaxed mb-6">
              {featured.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-[#3A556A]/50">
                <Clock size={12} />
                <span className="font-heading text-xs">{featured.readTime}</span>
                <span className="font-heading text-xs">·</span>
                <span className="font-heading text-xs">{featured.date}</span>
              </div>
              <div className="flex items-center gap-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="font-heading text-xs font-600 uppercase tracking-wider">Read Article</span>
                <ArrowRight size={12} />
              </div>
            </div>
          </div>

          {/* Side articles */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((article, i) => (
              <div
                key={article.title}
                className={`group bg-[#F7F8FA] border border-[#0F1E2E]/8 rounded-sm p-5 hover:border-[#D4AF37]/30 hover:shadow-md transition-all duration-300 cursor-pointer fade-up ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${250 + i * 100}ms` }}
              >
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm border text-[10px] font-heading uppercase tracking-wider mb-3 ${categoryColor[article.category]}`}>
                  {article.category}
                </div>
                <h3 className="font-heading text-sm font-600 text-[#0F1E2E] leading-snug mb-2 group-hover:text-[#3A556A] transition-colors duration-200">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-[#3A556A]/40">
                  <Clock size={10} />
                  <span className="font-heading text-[11px]">{article.readTime}</span>
                  <span className="font-heading text-[11px]">·</span>
                  <span className="font-heading text-[11px]">{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile view all */}
        <div className="flex md:hidden justify-center mt-8">
          <a href="#" className="btn-outline-gold font-heading text-sm px-6 py-2.5 rounded-sm inline-flex items-center gap-2">
            View All Articles
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
