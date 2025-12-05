import { Shield, Lock, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * Trust & Security Section - SocialFlux Landing Page
 * Design Philosophy: Modern Minimalist with Bold Accents
 * - Trust badges and certifications
 * - Security features highlighted
 * - Reassurance through transparency
 */



export default function TrustSecuritySection() {
  const { t } = useTranslation();

  const trustPoints = [
    {
      icon: Lock,
      title: t('trust.oauth'),
      description: t('trust.oauthDesc'),
    },
    {
      icon: Shield,
      title: t('trust.gdpr'),
      description: t('trust.gdprDesc'),
    },
    {
      icon: CheckCircle,
      title: t('trust.noStorage'),
      description: t('trust.noStorageDesc'),
    },
    {
      icon: Lock,
      title: t('trust.autoRefresh'),
      description: t('trust.autoRefreshDesc'),
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {t('trust.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('trust.subtitle')}
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-xl border flex flex-col items-center text-center relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #E3F2FD, #BBDEFB)', borderColor: '#1877F2' }}>
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'url(/images/Meta_lockup_positive primary_RGB.jpg)', backgroundSize: '80%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}></div>

            <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">{t('trust.metaVerified')}</h3>
            <p className="text-sm text-gray-600 relative z-10">
              {t('trust.metaDesc')}
            </p>
          </div>

          <div className="p-8 rounded-xl border flex flex-col items-center text-center relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #F1F8E9, #DCEDC8)', borderColor: '#95BF47' }}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/images/shopify_logo_white.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md relative z-10">
              <span className="text-3xl">🛍️</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">{t('trust.shopifyPartner')}</h3>
            <p className="text-sm text-gray-600 relative z-10">
              {t('trust.shopifyDesc')}
            </p>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {point.title}
                  </h4>
                  <p className="text-sm text-gray-600">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
