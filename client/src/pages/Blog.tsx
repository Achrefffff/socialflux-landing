import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="container max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {t('blog.title')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                {t('blog.intro')}
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('blog.whatTitle')}</h2>
              <p className="text-gray-600 mb-6">
                {t('blog.whatText')}
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('blog.whyTitle')}</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. {t('blog.trust')}</h3>
              <p className="text-gray-600 mb-4">
                {t('blog.trustText')}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. {t('blog.conversion')}</h3>
              <p className="text-gray-600 mb-4">
                {t('blog.conversionText')}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. {t('blog.social')}</h3>
              <p className="text-gray-600 mb-4">
                {t('blog.socialText')}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. {t('blog.engagement')}</h3>
              <p className="text-gray-600 mb-4">
                {t('blog.engagementText')}
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('blog.howTitle')}</h2>
              <p className="text-gray-600 mb-6">
                {t('blog.howText')}
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('blog.ctaTitle')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('blog.ctaText')}
                </p>
                <a 
                  href="/" 
                  className="inline-block px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
                >
                  {t('blog.ctaButton')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}