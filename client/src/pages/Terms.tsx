import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="container max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Conditions d'Utilisation
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-sm text-gray-500">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Acceptation des Conditions</h2>
              <p>En utilisant SocialFlux, vous acceptez ces conditions d'utilisation.</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Description du Service</h2>
              <p>SocialFlux permet d'intégrer du contenu Instagram sur votre boutique Shopify.</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Compte Utilisateur</h2>
              <ul className="list-disc pl-6">
                <li>Vous devez avoir un compte Shopify actif</li>
                <li>Vous devez avoir un compte Instagram Business</li>
                <li>Vous êtes responsable de la sécurité de votre compte</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Utilisation Acceptable</h2>
              <p>Vous vous engagez à :</p>
              <ul className="list-disc pl-6">
                <li>Respecter les conditions d'Instagram et Shopify</li>
                <li>Ne pas utiliser le service à des fins illégales</li>
                <li>Ne pas tenter de contourner les limitations du service</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Propriété Intellectuelle</h2>
              <p>Vous conservez tous les droits sur votre contenu. SocialFlux conserve les droits sur l'application.</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Limitation de Responsabilité</h2>
              <p>SocialFlux n'est pas responsable des interruptions de service causées par Instagram ou Shopify.</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">7. Résiliation</h2>
              <p>Vous pouvez résilier votre compte à tout moment. Nous pouvons suspendre votre compte en cas de violation des conditions.</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">8. Contact</h2>
              <p>Pour toute question : <a href="mailto:contact@socialflux.fr" className="text-red-600">contact@socialflux.fr</a></p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}