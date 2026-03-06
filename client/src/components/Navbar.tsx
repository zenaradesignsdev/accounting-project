/**
 * NORTH LEDGER ADVISORY — Navbar
 * Design: Dark Luxury Fintech
 * Dark sticky nav with glass effect, gold accent on active/hover
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Our Team", href: "#team" },
    { label: "Methodology", href: "#methodology" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F1E2E]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* SVG Logo Mark */}
            <div className="relative w-9 h-9">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Grid/ledger background */}
                <rect x="2" y="2" width="32" height="32" rx="4" fill="#0F1E2E" stroke="#D4AF37" strokeWidth="0.75" opacity="0.8"/>
                {/* Ledger lines */}
                <line x1="8" y1="14" x2="28" y2="14" stroke="#3A556A" strokeWidth="0.75"/>
                <line x1="8" y1="20" x2="28" y2="20" stroke="#3A556A" strokeWidth="0.75"/>
                <line x1="8" y1="26" x2="28" y2="26" stroke="#3A556A" strokeWidth="0.75"/>
                {/* North arrow */}
                <path d="M18 6 L22 16 L18 14 L14 16 Z" fill="#D4AF37"/>
                <line x1="18" y1="14" x2="18" y2="28" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-700 text-white text-[15px] tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                North Ledger
              </span>
              <span className="font-heading font-300 text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase">
                Advisory
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link font-heading text-sm font-400 text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-gold font-heading text-sm px-5 py-2.5 rounded-sm"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white/80 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0F1E2E]/98 backdrop-blur-xl border-t border-white/5`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-sm text-white/70 hover:text-[#D4AF37] py-3 border-b border-white/5 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-gold font-heading text-sm px-5 py-3 rounded-sm text-center mt-3"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}
