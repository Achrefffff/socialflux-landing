import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

/**
 * Final CTA Section - SocialFlux Landing Page
 * Design Philosophy: Modern Minimalist with Bold Accents
 * - Last conversion opportunity
 * - Bold, centered layout
 * - Clear value proposition and CTA
 */

export default function FinalCTASection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-red-50 to-red-100 border-t border-red-200">
      <div className="container">
        <div className="flex flex-col gap-8 text-center max-w-3xl mx-auto">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {t('finalCta.title')}
          </h2>



          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white font-bold px-10 py-7 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="https://apps.shopify.com/" target="_blank" rel="noopener noreferrer">
                {t('finalCta.installButton')}
              </a>
            </Button>
          </div>



          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-red-200">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm text-gray-700 font-medium">
                {t('finalCta.freeTrial')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm text-gray-700 font-medium">
                {t('finalCta.cancelAnytime')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm text-gray-700 font-medium">
                {t('finalCta.support247')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
