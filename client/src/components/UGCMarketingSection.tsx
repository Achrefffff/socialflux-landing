import { useTranslation } from "react-i18next";

/**
 * UGC Marketing Section - SocialFlux Landing Page
 * Design Philosophy: Modern Minimalist with Bold Accents
 * - Educational content about UGC value
 * - Infographic showing key statistics
 * - Clean, spacious layout
 */

export default function UGCMarketingSection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {t('ugc.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('ugc.subtitle')}
          </p>
        </div>

        {/* Infographic */}
        <div className="mb-16">
          <img
            src="/images/ugc-infographic.png"
            alt="UGC Statistics and Impact"
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">{t('ugc.trustBuilder')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('ugc.trustDesc')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">{t('ugc.conversionBooster')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('ugc.conversionDesc')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">{t('ugc.brandAuth')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('ugc.brandAuthDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
