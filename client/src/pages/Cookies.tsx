import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Cookies() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="container max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Politique des Cookies
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-sm text-gray-500">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">Qu'est-ce qu'un Cookie ?</h2>
              <p>Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite sur notre site.</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">Cookies Utilisés</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6">1. Cookies Essentiels</h3>
              <p>Nécessaires au fonctionnement du site :</p>
              <ul className="list-disc pl-6">
                <li>Session utilisateur</li>
                <li>Préférences de langue</li>
                <li>Authentification</li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6">2. Cookies Analytiques</h3>
              <p>Pour comprendre l'utilisation du site :</p>
              <ul className="list-disc pl-6">
                <li>Google Analytics (si configuré)</li>
                <li>Pages visitées</li>
                <li>Durée de visite</li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6">3. Cookies de Performance</h3>
              <p>Pour améliorer les performances :</p>
              <ul className="list-disc pl-6">
                <li>Temps de chargement</li>
                <li>Erreurs techniques</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">Gestion des Cookies</h2>
              <p>Vous pouvez gérer les cookies via :</p>
              <ul className="list-disc pl-6">
                <li>Les paramètres de votre navigateur</li>
                <li>Notre bannière de consentement</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">Désactiver les Cookies</h2>
              <p>Pour désactiver les cookies :</p>
              <ul className="list-disc pl-6">
                <li><strong>Chrome :</strong> Paramètres → Confidentialité → Cookies</li>
                <li><strong>Firefox :</strong> Options → Vie privée → Cookies</li>
                <li><strong>Safari :</strong> Préférences → Confidentialité</li>
              </ul>
              
              <p className="text-sm text-gray-500 mt-8">Note : Désactiver les cookies essentiels peut affecter le fonctionnement du site.</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">Contact</h2>
              <p>Pour toute question : <a href="mailto:contact@socialflux.fr" className="text-red-600">contact@socialflux.fr</a></p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}