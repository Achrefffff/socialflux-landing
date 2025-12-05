import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GDPR() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="container max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Conformité RGPD
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-lg">SocialFlux est entièrement conforme au Règlement Général sur la Protection des Données (RGPD).</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">Vos Droits RGPD</h2>
              <ul className="list-disc pl-6">
                <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> Vous pouvez corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Vous pouvez exporter vos données</li>
                <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
                <li><strong>Droit à la limitation :</strong> Vous pouvez limiter le traitement de vos données</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">Base Légale du Traitement</h2>
              <p>Nous traitons vos données sur la base de :</p>
              <ul className="list-disc pl-6">
                <li>Votre consentement explicite</li>
                <li>L'exécution du contrat de service</li>
                <li>Nos obligations légales</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">Durée de Conservation</h2>
              <p>Nous conservons vos données :</p>
              <ul className="list-disc pl-6">
                <li>Pendant la durée d'utilisation du service</li>
                <li>3 ans après la résiliation pour les obligations légales</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">Transferts de Données</h2>
              <p>Vos données peuvent être transférées vers :</p>
              <ul className="list-disc pl-6">
                <li>États-Unis (Meta/Instagram) - Clauses contractuelles types</li>
                <li>Canada (Shopify) - Décision d'adéquation</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">Exercer Vos Droits</h2>
              <p>Pour exercer vos droits RGPD, contactez-nous à : <a href="mailto:contact@socialflux.fr" className="text-red-600">contact@socialflux.fr</a></p>
              <p>Nous répondrons dans un délai de 30 jours maximum.</p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8">Réclamation</h2>
              <p>Vous avez le droit de déposer une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}