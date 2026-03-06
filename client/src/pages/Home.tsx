/**
 * NORTH LEDGER ADVISORY — Home Page
 * Design: Dark Luxury Fintech
 * Assembles all sections in order: Nav → Hero → TrustedBy → Services → Partners → Methodology → Testimonials → Insights → Contact → Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import MethodologySection from "@/components/MethodologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <StatsSection />
      <ServicesSection />
      <PartnersSection />
      <MethodologySection />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
