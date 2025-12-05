import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * Pricing Section - SocialFlux Landing Page
 * Design Philosophy: Modern Minimalist with Bold Accents
 * - Two pricing plans side by side
 * - Pro plan highlighted as "Most Popular"
 * - Clear feature comparison
 */



export default function PricingSection() {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('pricing.free'),
      price: t('pricing.freePrice'),
      description: t('pricing.freeDesc'),
      features: [
        t('pricing.upTo50Posts'),
        t('pricing.oneAccount'),
        t('pricing.basicAnalytics'),
        t('pricing.communitySupport'),
      ],
      cta: t('pricing.startFree'),
      highlighted: false,
    },
    {
      name: t('pricing.pro'),
      price: t('pricing.proPrice'),
      description: t('pricing.proDesc'),
      features: [
        t('pricing.unlimitedPosts'),
        t('pricing.multipleAccounts'),
        t('pricing.advancedAnalytics'),
        t('pricing.productTagging'),
        t('pricing.prioritySupport'),
      ],
      cta: t('pricing.startTrial'),
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "md:scale-105 bg-white border-2 border-red-600 shadow-2xl"
                  : "bg-white border border-gray-200 shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {t('pricing.mostPopular')}
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-8 md:p-10">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </div>
                  {plan.highlighted && (
                    <p className="text-sm text-gray-600 mt-2">
                      {t('pricing.billedMonthly')}
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className={`w-full mb-8 font-semibold py-6 text-base rounded-lg transition-all ${
                    plan.highlighted
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                  asChild
                >
                  <a href="https://apps.shopify.com/" target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>

                {/* Features List */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-gray-900 mb-4">
                    {t('pricing.whatsIncluded')}
                  </p>
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            {t('pricing.trialInfo')}
          </p>
          <p className="text-sm text-gray-500">
            {t('pricing.customPlan')} <a href="mailto:contact@socialflux.fr" className="text-red-600 hover:text-red-700 font-semibold">{t('pricing.contactUs')}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
