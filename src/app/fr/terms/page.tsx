import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "@/components/site";
import { LegalPageLtr } from "@/components/legal-ltr";

export const metadata: Metadata = { title: "Conditions d'utilisation", description: "Les conditions d'utilisation de l'app Teavon et de l'abonnement Teavon+." };

export default function Terms() {
  return (
    <LegalPageLtr lang="fr" title="Conditions d'utilisation" updated="25 novembre 2026">
      <p>L&apos;utilisation de Teavon (l&apos;app et le site) est soumise à ces conditions et au contrat de licence standard d&apos;Apple pour les apps (Standard EULA). Si vous ne les acceptez pas, n&apos;utilisez pas le service.</p>
      <section>
        <h2>1. Le service</h2>
        <p>Teavon importe des recettes à partir des liens que vous partagez (Reels, vidéos et sites), les rédige à l&apos;aide de l&apos;intelligence artificielle, dans la langue du post ou dans celle que vous choisissez, et les enregistre dans votre compte.</p>
      </section>
      <section>
        <h2>2. Le contenu des autres</h2>
        <p>Teavon est un outil personnel pour garder des recettes. Les recettes, vidéos et photos appartiennent à leurs créateurs. Utilisez-les pour cuisiner chez vous uniquement, et ne les republiez pas comme si elles étaient les vôtres. Chaque recette garde un lien vers le post d&apos;origine pour créditer le créateur. N&apos;importez que du contenu que vous avez le droit de voir.</p>
      </section>
      <section>
        <h2>3. Exactitude, cacherout et santé</h2>
        <p>Les recettes sont rédigées automatiquement et peuvent contenir des erreurs de quantités, d&apos;étapes ou de traduction. Le marquage viande / lait / parvé est une aide, pas une certification cacher. Vérifiez toujours les ingrédients vous-même, surtout en cas d&apos;allergie, d&apos;intolérance ou si vous mangez cacher.</p>
      </section>
      <section>
        <h2>4. Version gratuite et Teavon+</h2>
        <ul>
          <li>Gratuit : 3 imports par semaine et le carnet.</li>
          <li>Teavon+ mensuel ou annuel, au prix affiché dans l&apos;App Store au moment de l&apos;achat.</li>
          <li>Le paiement est débité sur votre compte Apple. L&apos;abonnement se renouvelle automatiquement à la fin de chaque période, sauf annulation au moins 24 heures avant la fin.</li>
          <li>Gérez ou annulez dans Réglages de l&apos;iPhone → Identifiant Apple → Abonnements. Les demandes de remboursement sont traitées par Apple.</li>
        </ul>
      </section>
      <section>
        <h2>5. Usage loyal</h2>
        <p>Il est interdit de contourner les limites, de perturber le service, de l&apos;utiliser de façon automatisée à grande échelle ou d&apos;importer du contenu illégal. Nous pouvons suspendre un compte qui ne respecte pas ces conditions.</p>
      </section>
      <section>
        <h2>6. Votre compte</h2>
        <p>Vous êtes responsable de l&apos;utilisation de votre compte. Vous pouvez le supprimer à tout moment dans l&apos;app (Profil → Supprimer le compte). Voir aussi la <a href="/fr/privacy">politique de confidentialité</a>.</p>
      </section>
      <section>
        <h2>7. Responsabilité</h2>
        <p>Le service est fourni en l&apos;état. Dans la mesure permise par la loi, Teavon n&apos;est pas responsable des dommages indirects, et sa responsabilité totale est limitée au montant payé pour l&apos;abonnement au cours des 12 derniers mois.</p>
      </section>
      <section>
        <h2>8. Droit applicable et modifications</h2>
        <p>Ces conditions sont régies par le droit israélien. Si elles changent, nous mettrons à jour la date en haut de cette page. Continuer à utiliser le service après une mise à jour vaut acceptation des nouvelles conditions.</p>
      </section>
      <section>
        <h2>9. Contact</h2>
        <p><a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
      </section>
    </LegalPageLtr>
  );
}
