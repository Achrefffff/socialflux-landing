import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * Hero Section - SocialFlux Landing Page
 * Design Philosophy: Modern Minimalist with Bold Accents
 * - Asymmetric layout with text on left, image on right
 * - Bold red CTA button for primary action
 * - Trust badges for credibility
 * - High-quality mockup image showcasing the product
 */
export default function HeroSection() {
  const { t } = useTranslation();
  
  return (
    
    <section className="py-16 md:py-24 lg:py-32 bg-white">
     
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
                style={{ backgroundColor: "#1877F2", borderColor: "#1877F2" }}
              >
                <span className="text-xs font-semibold text-white">
                  {t("hero.metaVerified")}
                </span>
              </div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
                style={{ backgroundColor: "#95BF47", borderColor: "#95BF47" }}
              >
                <span className="text-xs font-semibold text-white">
                  {t("hero.shopifyPartner")}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t("hero.headline")}{" "}
                <span className="text-red-600">{t("hero.headlineSales")}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                {t("hero.description")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-6 text-base rounded-lg shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <a href="https://apps.shopify.com/" target="_blank" rel="noopener noreferrer">
                  {t("hero.installButton")}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-6 text-base rounded-lg flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                {t("hero.watchDemo")}
              </Button>
            </div>

            {/* Social Proof Stats */}
            <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <p className="text-sm text-gray-600">
                  {t("hero.activeMerchants")}
                </p>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">2M+</div>
                <p className="text-sm text-gray-600">{t("hero.postsSynced")}</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">35%</div>
                <p className="text-sm text-gray-600">
                  {t("hero.conversionIncrease")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <img
              src="/images/hero-mockup.png"
              alt="SocialFlux Product Mockup"
              className="w-full max-w-md drop-shadow-2xl rounded-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
