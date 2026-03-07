/**
 * NORTH LEDGER ADVISORY — Footer
 * Design: Dark Luxury Fintech
 * Clean multi-column footer with navigation, services, contact, legal
 */
import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080F18] border-t border-white/5">
      {/* Top CTA bar */}
      <div className="border-b border-white/5">
        <div className="container py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-300 text-white mb-1">
                Ready to gain financial clarity?
              </h3>
              <p className="font-heading text-sm text-white/40">
                Join 85+ businesses that trust North Ledger Advisory.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-gold flex-shrink-0 font-heading text-sm font-600 px-7 py-3 rounded-sm"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="2" y="2" width="32" height="32" rx="4" fill="#0F1E2E" stroke="#D4AF37" strokeWidth="0.75" opacity="0.8"/>
                  <line x1="8" y1="14" x2="28" y2="14" stroke="#3A556A" strokeWidth="0.75"/>
                  <line x1="8" y1="20" x2="28" y2="20" stroke="#3A556A" strokeWidth="0.75"/>
                  <line x1="8" y1="26" x2="28" y2="26" stroke="#3A556A" strokeWidth="0.75"/>
                  <path d="M18 6 L22 16 L18 14 L14 16 Z" fill="#D4AF37"/>
                  <line x1="18" y1="14" x2="18" y2="28" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-700 text-white text-[14px] tracking-wide">
                  North Ledger
                </span>
                <span className="font-heading font-300 text-[#D4AF37] text-[9px] tracking-[0.2em] uppercase">
                  Advisory
                </span>
              </div>
            </a>

            <p className="font-heading text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              Boutique accounting and financial advisory for entrepreneurs and growing businesses. Clarity, strategy, results.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-white/40 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all duration-200"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-heading text-xs text-white/30 uppercase tracking-[0.2em] mb-5">Navigation</div>
            <ul className="space-y-3">
              {["About Us", "Services", "Our Team", "Methodology", "Insights", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-heading text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="font-heading text-xs text-white/30 uppercase tracking-[0.2em] mb-5">Services</div>
            <ul className="space-y-3">
              {[
                "Business Accounting",
                "Tax Strategy",
                "CFO Advisory",
                "Bookkeeping",
                "Financial Forecasting",
                "Business Valuation",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="font-heading text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-heading text-xs text-white/30 uppercase tracking-[0.2em] mb-5">Contact</div>
            <ul className="space-y-4">
              <li>
                <div className="font-heading text-xs text-white/25 uppercase tracking-wider mb-1">Office</div>
                <div className="font-heading text-sm text-white/50 leading-relaxed">
                  245 Park Avenue<br />Suite 1700<br />New York, NY 10167
                </div>
              </li>
              <li>
                <div className="font-heading text-xs text-white/25 uppercase tracking-wider mb-1">Phone</div>
                <a href="tel:+12125550180" className="font-heading text-sm text-white/50 hover:text-white transition-colors duration-200">
                  +1 (212) 555-0180
                </a>
              </li>
              <li>
                <div className="font-heading text-xs text-white/25 uppercase tracking-wider mb-1">Email</div>
                <a href="mailto:hello@northledger.com" className="font-heading text-sm text-white/50 hover:text-white transition-colors duration-200">
                  hello@northledger.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-heading text-xs text-white/25">
              © {currentYear} North Ledger Advisory LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-heading text-xs text-white/25 hover:text-white/50 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
