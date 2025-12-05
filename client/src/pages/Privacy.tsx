import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="container max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Politique de Confidentialité
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-sm text-gray-500">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Collecte des Données</h2>
              <p>SocialFlux collecte les données suivantes :</p>
              <ul className="list-disc pl-6">
                <li>Informations de compte Shopify (nom de boutique, email)</li>
                <li>Données Instagram publiques (posts, photos) via l'API Instagram</li>
                <li>Données d'utilisation de l'application</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Utilisation des Données</h2>
              <p>Nous utilisons vos données pour :</p>
              <ul className="list-disc pl-6">
                <li>Afficher votre contenu Instagram sur votre boutique Shopify</li>
                <li>Améliorer nos services</li>
                <li>Vous contacter concernant votre compte</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Partage des Données</h2>
              <p>Nous ne vendons jamais vos données. Nous partageons uniquement avec :</p>
              <ul className="list-disc pl-6">
                <li>Instagram/Meta (pour l'authentification API)</li>
                <li>Shopify (pour l'intégration boutique)</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Sécurité</h2>
              <p>Nous utilisons le chiffrement SSL et OAuth 2.0 pour protéger vos données.</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Vos Droits</h2>
              <p>Vous avez le droit de :</p>
              <ul className="list-disc pl-6">
                <li>Accéder à vos données</li>
                <li>Modifier vos données</li>
                <li>Supprimer vos données</li>
                <li>Exporter vos données</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Contact</h2>
              <p>Pour toute question : <a href="mailto:contact@socialflux.fr" className="text-red-600">contact@socialflux.fr</a></p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}