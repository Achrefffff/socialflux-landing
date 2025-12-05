import { RotateCw, Tag, Users, Palette, BarChart3, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Features Section - SocialFlux Landing Page
 * Design Philosophy: Modern Minimalist with Bold Accents
 * - 3-column grid layout on desktop
 * - Clean card design with icons and descriptions
 * - Red accent for visual hierarchy
 */



export default function FeaturesSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: RotateCw,
      title: t('features.autoSync'),
      description: t('features.autoSyncDesc'),
    },
    {
      icon: Tag,
      title: t('features.productTagging'),
      description: t('features.productTaggingDesc'),
    },
    {
      icon: Users,
      title: t('features.multiAccount'),
      description: t('features.multiAccountDesc'),
    },
    {
      icon: Palette,
      title: t('features.customDisplay'),
      description: t('features.customDisplayDesc'),
    },
    {
      icon: BarChart3,
      title: t('features.analytics'),
      description: t('features.analyticsDesc'),
    },
    {
      icon: Star,
      title: t('features.ugcPower'),
      description: t('features.ugcPowerDesc'),
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-gray-50" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className={`flex flex-col gap-4 text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Accent Line */}
                <div className="w-0 h-1 bg-red-600 mt-6 group-hover:w-12 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
