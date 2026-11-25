import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "@/components/site";
import { LegalPageLtr } from "@/components/legal-ltr";

export const metadata: Metadata = { title: "Terms of Use", description: "The terms for using the Teavon app and the Teavon+ subscription." };

export default function Terms() {
  return (
    <LegalPageLtr lang="en" title="Terms of Use" updated="November 25, 2026">
      <p>Your use of Teavon (the app and the website) is governed by these terms and by Apple&apos;s Standard License Agreement for apps (Standard EULA). If you do not agree to them, do not use the service.</p>
      <section>
        <h2>1. The service</h2>
        <p>Teavon imports recipes from links you share (Reels, videos and websites), writes them out with the help of artificial intelligence, in the post&apos;s own language or in the language you choose, and saves them to your account.</p>
      </section>
      <section>
        <h2>2. Other people&apos;s content</h2>
        <p>Teavon is a personal tool for saving recipes. Recipes, videos and photos belong to their creators. Use them for your own cooking only, and do not republish them as your own. Each recipe keeps a link to the original post to credit the creator. Only import content you are allowed to view.</p>
      </section>
      <section>
        <h2>3. Accuracy, kosher and health</h2>
        <p>Recipes are written automatically and may contain mistakes in quantities, steps or translation. The meat / dairy / parve label is a guide only and is not a kosher certification. Always check the ingredients yourself, especially if you have allergies or sensitivities, or keep kosher.</p>
      </section>
      <section>
        <h2>4. Free plan and Teavon+</h2>
        <ul>
          <li>Free: 3 imports a week and the notebook.</li>
          <li>Teavon+ monthly or yearly, at the price shown in the App Store at the time of purchase.</li>
          <li>Payment is charged to your Apple ID account. The subscription renews automatically at the end of each period unless you cancel at least 24 hours before it ends.</li>
          <li>Manage or cancel in iPhone Settings → Apple ID → Subscriptions. Refund requests are handled by Apple.</li>
        </ul>
      </section>
      <section>
        <h2>5. Fair use</h2>
        <p>You may not try to get around the limits, disrupt the service, run it automatically at scale or import illegal content. We may suspend an account that breaks these terms.</p>
      </section>
      <section>
        <h2>6. Your account</h2>
        <p>You are responsible for the use of your account. You can delete it at any time in the app (Profile → Delete account). See also our <a href="/en/privacy">Privacy Policy</a>.</p>
      </section>
      <section>
        <h2>7. Liability</h2>
        <p>The service is provided as is. To the extent the law allows, Teavon is not liable for indirect damage, and its total liability is limited to the amount you paid for the subscription in the last 12 months.</p>
      </section>
      <section>
        <h2>8. Governing law and changes</h2>
        <p>These terms are governed by Israeli law. If they change, we will update the date at the top of this page. Continuing to use the service after an update means you accept the new terms.</p>
      </section>
      <section>
        <h2>9. Contact</h2>
        <p><a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
      </section>
    </LegalPageLtr>
  );
}
