import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UGCMarketingSection from "@/components/UGCMarketingSection";
import PartnersSection from "@/components/PartnersSection";

import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

/**
 * Home Page - SocialFlux Landing Page
 * Design Philosophy: Modern Minimalist with Bold Accents
 * 
 * This page combines all sections of the landing page:
 * 1. Header - Navigation and CTAs
 * 2. Hero - Main value proposition
 * 3. Features - 6 key features
 * 4. How It Works - 3-step process
 * 5. UGC Marketing - Educational content
 * 6. Trust & Security - Certifications and security features
 * 7. Pricing - 2 pricing plans
 * 8. FAQ - Common questions
 * 9. Final CTA - Last conversion opportunity
 * 10. Footer - Navigation and legal info
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UGCMarketingSection />
        <PartnersSection />

        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
