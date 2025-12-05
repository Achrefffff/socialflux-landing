import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="container max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {t('about.title')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                {t('about.intro')}
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('about.missionTitle')}</h2>
              <p className="text-gray-600 mb-6">
                {t('about.mission')}
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('about.whyTitle')}</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>{t('features.autoSync')}</li>
                <li>{t('faq.q4')}</li>
                <li>{t('ugc.conversionBooster')}</li>
                <li>{t('finalCta.support247')}</li>
                <li>{t('trust.gdpr')}</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('about.contactTitle')}</h2>
              <p className="text-gray-600">
                {t('about.contactText')}{" "}
                <a href="mailto:contact@socialflux.fr" className="text-red-600 hover:text-red-700">
                  contact@socialflux.fr
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}