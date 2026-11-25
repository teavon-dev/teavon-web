import Link from "next/link";
import { APP_STORE_URL, SUPPORT_EMAIL } from "@/components/site";

// English and French legal pages, linked from the app (paywall, sign-in) when it runs in those languages.
// The rest of the site is Hebrew (root layout is rtl): these pages set their own direction.

type Lang = "en" | "fr";

const COPY = {
  en: { updated: "Last updated", terms: "Terms of Use", privacy: "Privacy Policy", download: "Download on the App Store", tagline: "The notebook for recipes from social media." },
  fr: { updated: "Dernière mise à jour", terms: "Conditions d'utilisation", privacy: "Politique de confidentialité", download: "Télécharger dans l'App Store", tagline: "Le carnet des recettes des réseaux sociaux." },
};

export function LegalPageLtr({ lang, title, updated, children }: { lang: Lang; title: string; updated: string; children: React.ReactNode }) {
  const c = COPY[lang];
  return (
    <div dir="ltr" lang={lang}>
      <header className="mx-auto flex max-w-[1160px] items-center justify-between px-4 py-5 sm:px-6">
        <Link href="/he" className="flex items-center gap-2.5 text-[22px] font-extrabold tracking-tight" aria-label="Teavon">
          <img src="/img/icon.png" alt="" width={34} height={34} className="rounded-[9px]" />
          Teavon
        </Link>
        <a href={APP_STORE_URL} className="rounded-full bg-ink px-5 py-2.5 text-[14px] font-bold text-white">{c.download}</a>
      </header>
      <main className="mx-auto max-w-[720px] px-4 pb-20 pt-10 sm:px-6">
        <h1 className="text-[40px] font-extrabold leading-tight tracking-tight">{title}</h1>
        <p className="mt-2 text-[14px] text-muted">{c.updated}: {updated}</p>
        <div className="legal mt-10 space-y-8 text-[17px] leading-[1.8] text-[#2b2b28] [&_h2]:mb-2 [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-ink [&_li]:mt-1 [&_ul]:list-disc [&_ul]:ps-6 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-4 px-4 py-10 text-[14px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>Teavon · {c.tagline}</span>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href={`/${lang}/privacy`} className="hover:text-ink">{c.privacy}</Link>
            <Link href={`/${lang}/terms`} className="hover:text-ink">{c.terms}</Link>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-ink">{SUPPORT_EMAIL}</a>
            <span>© 2026 Teavon</span>
          </nav>
        </div>
      </footer>
    </div>
  );
}
