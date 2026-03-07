/**
 * NORTH LEDGER ADVISORY — Contact Section
 * Design: Dark Luxury Fintech
 * Dark section with consultation form, calendar booking, and location info
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { MapPin, Phone, Mail, Calendar, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear the form
    setForm({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
    // Show success message
    setSubmitted(true);
  };

  const services = [
    "Business Accounting",
    "Tax Strategy",
    "CFO Advisory",
    "Bookkeeping",
    "Financial Forecasting",
    "General Inquiry",
  ];

  return (
    <section id="contact" className="bg-[#0F1E2E] py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        {/* Section header */}
        <div className={`max-w-2xl mb-16 fade-up ${isVisible ? "visible" : ""}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#D4AF37]" />
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-[#D4AF37]">
              Get Started
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-300 text-white leading-tight mb-4">
            Let's Build Your{" "}
            <span className="italic text-[#D4AF37]">Financial Future</span>
          </h2>
          <p className="font-heading text-base text-white/50 leading-relaxed">
            Book a complimentary 30-minute discovery call. No commitment, no pressure — just clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact form */}
          <div className={`lg:col-span-3 fade-up ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
            {submitted ? (
              <div className="glass-card rounded-sm p-10 flex flex-col items-center justify-center text-center min-h-80">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                  <CheckCircle size={28} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-heading text-2xl font-600 text-white mb-3">
                  Message Received
                </h3>
                <p className="font-heading text-sm text-white/50 leading-relaxed max-w-sm">
                  Thank you for reaching out. A member of our team will contact you within one business day to schedule your consultation.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    // Ensure form is cleared when resetting
                    setForm({
                      name: "",
                      email: "",
                      company: "",
                      service: "",
                      message: "",
                    });
                  }}
                  className="mt-6 font-heading text-xs text-[#D4AF37] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-sm p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading text-xs text-white/40 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 font-heading text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37]/50 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-xs text-white/40 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 font-heading text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37]/50 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading text-xs text-white/40 uppercase tracking-wider mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your Company LLC"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 font-heading text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37]/50 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block font-heading text-xs text-white/40 uppercase tracking-wider mb-2">
                    Service of Interest
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[#0F1E2E] border border-white/10 rounded-sm px-4 py-3 font-heading text-sm text-white/70 focus:outline-none focus:border-[#D4AF37]/50 transition-colors duration-200"
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-heading text-xs text-white/40 uppercase tracking-wider mb-2">
                    Tell Us About Your Needs
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Briefly describe your business and what you're looking to achieve..."
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 font-heading text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37]/50 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full inline-flex items-center justify-center gap-2 font-heading text-sm font-600 px-7 py-3.5 rounded-sm"
                >
                  Send Message
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className={`lg:col-span-2 space-y-5 fade-up ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "300ms" }}>
            {/* Calendar booking */}
            <div className="glass-card rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-sm bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <Calendar size={16} className="text-[#D4AF37]" />
                </div>
                <div>
                  <div className="font-heading text-sm font-600 text-white">Schedule a Call</div>
                  <div className="font-heading text-xs text-white/40">30-min discovery session</div>
                </div>
              </div>
              <p className="font-heading text-xs text-white/40 leading-relaxed mb-4">
                Prefer to book directly? Choose a time that works for you and we'll confirm within the hour.
              </p>
              <button className="btn-outline-gold w-full font-heading text-sm py-2.5 rounded-sm inline-flex items-center justify-center gap-2">
                <Calendar size={14} />
                Book via Calendar
              </button>
            </div>

            {/* Contact info */}
            <div className="glass-card rounded-sm p-6 space-y-4">
              <div className="font-heading text-xs text-white/30 uppercase tracking-wider mb-4">Direct Contact</div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#D4AF37]" />
                </div>
                <div>
                  <div className="font-heading text-sm text-white/80">245 Park Avenue, Suite 1700</div>
                  <div className="font-heading text-xs text-white/40">New York, NY 10167</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-[#D4AF37]" />
                </div>
                <div>
                  <div className="font-heading text-sm text-white/80">+1 (212) 555-0180</div>
                  <div className="font-heading text-xs text-white/40">Mon–Fri, 9am–6pm EST</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-[#D4AF37]" />
                </div>
                <div>
                  <div className="font-heading text-sm text-white/80">hello@northledger.com</div>
                  <div className="font-heading text-xs text-white/40">Response within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="glass-card rounded-sm p-5 border border-[#D4AF37]/15">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-heading text-xs text-white/50 uppercase tracking-wider">Accepting New Clients</span>
              </div>
              <p className="font-heading text-xs text-white/35 leading-relaxed">
                We maintain a selective client roster to ensure every engagement receives the attention it deserves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
