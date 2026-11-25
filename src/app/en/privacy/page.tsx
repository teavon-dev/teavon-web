import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "@/components/site";
import { LegalPageLtr } from "@/components/legal-ltr";

export const metadata: Metadata = { title: "Privacy Policy", description: "What Teavon collects, why, who it is shared with and how to delete it." };

export default function Privacy() {
  return (
    <LegalPageLtr lang="en" title="Privacy Policy" updated="November 25, 2026">
      <p>Teavon is an app that saves recipes from Reels and websites and keeps them tidy. This page explains exactly what is collected, why, and how to delete it. We do not sell data, show ads or track you across other apps.</p>
      <section>
        <h2>1. What we collect</h2>
        <ul>
          <li><b>Your account.</b> On first launch an anonymous guest account is created, with no personal details: you can use the app and buy Teavon+ without anything else. If you want, you can create an account with Apple, Google or email and password to keep your notebook and subscription across devices. We store your email address, and your name when Apple or Google pass it on (Apple lets you hide your email). Your password is stored encrypted and we cannot read it. To confirm an email sign-up or reset a password, we email you a code.</li>
          <li><b>Your content.</b> The recipes you saved, the links you imported, dish photos, folders, meal plans and the grocery list.</li>
          <li><b>Import usage.</b> For each import we store the link and the time, to count the 3 free imports a week.</li>
          <li><b>Subscription.</b> Whether you have an active Teavon+ subscription. Payment details stay with Apple and we never see them.</li>
          <li><b>Technical data.</b> IP address and request details in server logs, for security and to prevent abuse.</li>
          <li><b>Settings on your phone.</b> The app language and, with Teavon+, the language you want recipes written in. They stay on your device and are sent with each import so the server writes the recipe in the right language.</li>
        </ul>
      </section>
      <section>
        <h2>2. Why</h2>
        <p>Only to run the service: import and write recipes, save and sync them to your account, manage the subscription and the free limit, and protect the service from abuse.</p>
      </section>
      <section>
        <h2>3. Who we share it with</h2>
        <p>With providers that run the service for us, and only as much as needed:</p>
        <ul>
          <li><b>Supabase</b> (servers in Frankfurt, Germany): database, sign-in and photo storage.</li>
          <li><b>Google Cloud</b> (Frankfurt): the server that imports recipes.</li>
          <li><b>AI providers</b>: Google Gemini, Anthropic Claude, OpenRouter and KIE. They receive the public content of the post (caption, images or video) to write a recipe from it, without your name or email.</li>
          <li><b>Apify</b>: reading public Instagram posts.</li>
          <li><b>RevenueCat</b> and <b>Apple</b>: subscription management. <b>Apple</b> and <b>Google</b>: sign-in, if you choose it.</li>
          <li><b>Resend</b>: sending verification and reset codes by email (email address only).</li>
        </ul>
        <p>We will disclose data to authorities only if the law requires it.</p>
      </section>
      <section>
        <h2>4. How long</h2>
        <p>Your content and account are kept until you delete them. A recipe imported from a public post is kept in the server cache for up to 30 days to speed up repeat imports of the same post. Server logs are deleted automatically under Google Cloud&apos;s policy.</p>
      </section>
      <section>
        <h2>5. Deleting your account</h2>
        <p>In the app: Profile → <b>Delete account</b>. Your account, recipes, photos, lists and plans are permanently deleted. A Teavon+ subscription is not cancelled automatically: cancel it in iPhone Settings → Apple ID → Subscriptions. You can also ask us by email to delete your data or send you a copy.</p>
      </section>
      <section>
        <h2>6. Children</h2>
        <p>Teavon is not meant for children under 13, and we do not knowingly collect data about them.</p>
      </section>
      <section>
        <h2>7. Security and changes</h2>
        <p>Data is encrypted in transit, and each user can only access their own data. If this policy changes, we will update the date at the top of this page and tell you in the app about any significant change.</p>
      </section>
      <section>
        <h2>8. Contact</h2>
        <p>For any privacy question: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
      </section>
    </LegalPageLtr>
  );
}
