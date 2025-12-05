import { Link2, CheckSquare, Code } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * How It Works Section - SocialFlux Landing Page
 * Design Philosophy: Modern Minimalist with Bold Accents
 * - 3-step process with icons and descriptions
 * - Asymmetric layout with connecting lines
 * - Clear visual hierarchy
 */



export default function HowItWorksSection() {
  const { t } = useTranslation();

  const steps = [
    {
      number: 1,
      icon: Link2,
      title: t('howItWorks.step1'),
      description: t('howItWorks.step1Desc'),
    },
    {
      number: 2,
      icon: CheckSquare,
      title: t('howItWorks.step2'),
      description: t('howItWorks.step2Desc'),
    },
    {
      number: 3,
      icon: Code,
      title: t('howItWorks.step3'),
      description: t('howItWorks.step3Desc'),
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-red-400 to-red-200 -z-10" />

          {/* Steps */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Step Circle */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-red-600 rounded-full flex items-center justify-center font-bold text-red-600">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs">
                  {step.description}
                </p>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-1 h-8 bg-red-300 mt-8" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
