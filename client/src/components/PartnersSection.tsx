import { useTranslation } from "react-i18next";

export default function PartnersSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Official Integrations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We integrate with trusted platforms to provide seamless connections and powerful solutions for your store.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 md:ml-48">
          <div className="flex items-center justify-center">
            <img 
              src="/images/SocialFlux-logo.png" 
              alt="SocialFlux" 
              className="h-16 md:h-20 object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/images/Instagram_Glyph_Black.jpg" 
              alt="Instagram Integration" 
              className="h-16 md:h-20 object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/images/Meta_lockup_positive primary_RGB.jpg" 
              alt="Meta Integration" 
              className="h-16 md:h-20 object-contain"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="/images/shopify_logo_white.png" 
              alt="Shopify Integration" 
              className="h-16 md:h-20 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}