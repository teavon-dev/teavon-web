"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/navigation";

const navLinkClass =
  "rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const subLinkClass =
  "block rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function Navbar() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const howToDetailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const el = howToDetailsRef.current;
    if (el?.open) {
      el.open = false;
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-xl font-semibold tracking-tight text-slate-900 transition-colors duration-200 hover:text-primary cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Teavon
        </Link>
        <nav
          className="flex flex-wrap items-center gap-1 sm:gap-2"
          aria-label={t("aria")}
        >
          <Link href="/" className={navLinkClass}>
            {t("home")}
          </Link>
          <details ref={howToDetailsRef} className="group relative">
            <summary
              className={`${navLinkClass} list-none [&::-webkit-details-marker]:hidden`}
            >
              <span className="inline-flex items-center gap-1">
                {t("howToImport")}
                <span
                  className="text-xs text-slate-400 transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  ▾
                </span>
              </span>
            </summary>
            <ul
              className="absolute start-0 z-50 mt-1 min-w-[12rem] rounded-xl border border-slate-200 bg-white py-1 shadow-lg ring-1 ring-slate-900/5"
              role="list"
            >
              <li>
                <Link href="/how-to/instagram" className={subLinkClass}>
                  {t("howToInstagram")}
                </Link>
              </li>
              <li>
                <Link href="/how-to/tiktok" className={subLinkClass}>
                  {t("howToTikTok")}
                </Link>
              </li>
              <li>
                <Link href="/how-to/link" className={subLinkClass}>
                  {t("howToLink")}
                </Link>
              </li>
            </ul>
          </details>
          <Link href="/privacy" className={navLinkClass}>
            {t("privacy")}
          </Link>
          <Link href="/contact" className={navLinkClass}>
            {t("contact")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
