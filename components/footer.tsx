import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const footerLinkClass =
  "text-sm text-slate-600 transition-colors duration-200 hover:text-primary cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-heading text-lg font-semibold text-slate-900">
              Teavon
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
              {t("tagline")}
            </p>
          </div>
          <nav
            className="flex flex-col gap-3 sm:items-end"
            aria-label={t("linksAria")}
          >
            <Link href="/privacy" className={footerLinkClass}>
              {t("privacy")}
            </Link>
            <Link href="/terms" className={footerLinkClass}>
              {t("terms")}
            </Link>
            <Link href="/contact" className={footerLinkClass}>
              {t("contact")}
            </Link>
          </nav>
        </div>
        <p className="mt-10 text-center text-xs text-slate-500 sm:text-start">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
