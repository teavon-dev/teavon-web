import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "@/components/site";
import { LegalPageLtr } from "@/components/legal-ltr";

export const metadata: Metadata = { title: "Politique de confidentialité", description: "Ce que Teavon collecte, pourquoi, avec qui c'est partagé et comment le supprimer." };

export default function Privacy() {
  return (
    <LegalPageLtr lang="fr" title="Politique de confidentialité" updated="25 novembre 2026">
      <p>Teavon est une app qui garde les recettes des Reels et des sites et les range proprement. Cette page explique exactement ce qui est collecté, pourquoi, et comment le supprimer. Nous ne vendons aucune donnée, n&apos;affichons pas de publicité et ne vous suivons pas dans d&apos;autres apps.</p>
      <section>
        <h2>1. Ce que nous collectons</h2>
        <ul>
          <li><b>Votre compte.</b> À la première ouverture, un compte invité anonyme est créé, sans donnée personnelle : vous pouvez utiliser l&apos;app et acheter Teavon+ sans rien d&apos;autre. Si vous le souhaitez, vous pouvez créer un compte avec Apple, Google ou un e-mail et un mot de passe, pour retrouver votre carnet et votre abonnement sur tous vos appareils. Nous enregistrons votre adresse e-mail, et votre nom quand Apple ou Google le transmettent (Apple permet de masquer l&apos;e-mail). Le mot de passe est stocké chiffré et nous ne pouvons pas le lire. Pour confirmer une inscription par e-mail ou réinitialiser un mot de passe, nous vous envoyons un code par e-mail.</li>
          <li><b>Votre contenu.</b> Les recettes enregistrées, les liens importés, les photos des plats, les dossiers, les menus et la liste de courses.</li>
          <li><b>Utilisation des imports.</b> Pour chaque import, nous gardons le lien et l&apos;heure, pour compter les 3 imports gratuits par semaine.</li>
          <li><b>Abonnement.</b> Si vous avez un abonnement Teavon+ actif. Les données de paiement restent chez Apple et nous ne les voyons jamais.</li>
          <li><b>Données techniques.</b> Adresse IP et détails des requêtes dans les journaux du serveur, pour la sécurité et contre les abus.</li>
          <li><b>Réglages de votre téléphone.</b> La langue de l&apos;app et, avec Teavon+, la langue choisie pour les recettes. Ils restent sur votre appareil et sont envoyés avec chaque import pour que le serveur écrive la recette dans la bonne langue.</li>
        </ul>
      </section>
      <section>
        <h2>2. Pourquoi</h2>
        <p>Uniquement pour faire fonctionner le service : importer et rédiger les recettes, les enregistrer et les synchroniser sur votre compte, gérer l&apos;abonnement et la limite gratuite, et protéger le service contre les abus.</p>
      </section>
      <section>
        <h2>3. Avec qui c&apos;est partagé</h2>
        <p>Avec les prestataires qui font tourner le service pour nous, et seulement dans la mesure nécessaire :</p>
        <ul>
          <li><b>Supabase</b> (serveurs à Francfort, Allemagne) : base de données, connexion et stockage des photos.</li>
          <li><b>Google Cloud</b> (Francfort) : le serveur qui importe les recettes.</li>
          <li><b>Fournisseurs d&apos;IA</b> : Google Gemini, Anthropic Claude, OpenRouter et KIE. Ils reçoivent le contenu public du post (légende, images ou vidéo) pour en tirer une recette, sans votre nom ni votre e-mail.</li>
          <li><b>Apify</b> : lecture des posts Instagram publics.</li>
          <li><b>RevenueCat</b> et <b>Apple</b> : gestion de l&apos;abonnement. <b>Apple</b> et <b>Google</b> : connexion, si vous la choisissez.</li>
          <li><b>Resend</b> : envoi des codes de vérification et de réinitialisation par e-mail (adresse e-mail uniquement).</li>
        </ul>
        <p>Nous ne communiquerons des données aux autorités que si la loi l&apos;exige.</p>
      </section>
      <section>
        <h2>4. Combien de temps</h2>
        <p>Votre contenu et votre compte sont conservés jusqu&apos;à ce que vous les supprimiez. Une recette importée d&apos;un post public reste dans le cache du serveur jusqu&apos;à 30 jours, pour accélérer un nouvel import du même post. Les journaux du serveur sont supprimés automatiquement selon la politique de Google Cloud.</p>
      </section>
      <section>
        <h2>5. Supprimer votre compte</h2>
        <p>Dans l&apos;app : Profil → <b>Supprimer le compte</b>. Le compte, les recettes, les photos, les listes et les menus sont supprimés définitivement. L&apos;abonnement Teavon+ ne s&apos;arrête pas tout seul : annulez-le dans Réglages de l&apos;iPhone → Identifiant Apple → Abonnements. Vous pouvez aussi nous demander par e-mail de supprimer vos données ou de vous en envoyer une copie.</p>
      </section>
      <section>
        <h2>6. Enfants</h2>
        <p>Teavon n&apos;est pas destinée aux enfants de moins de 13 ans, et nous ne collectons pas sciemment de données les concernant.</p>
      </section>
      <section>
        <h2>7. Sécurité et modifications</h2>
        <p>Les données sont chiffrées pendant leur transfert, et chaque utilisateur n&apos;a accès qu&apos;à ses propres données. Si cette politique change, nous mettrons à jour la date en haut de la page et vous préviendrons dans l&apos;app en cas de changement important.</p>
      </section>
      <section>
        <h2>8. Contact</h2>
        <p>Pour toute question sur la confidentialité : <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
      </section>
    </LegalPageLtr>
  );
}
