import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      fill="currentColor"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden>
      <path fill="#00D9FF" d="M0 85v342h171V256L0 85z" />
      <path fill="#00F076" d="M0 85l256 171L512 85V0H0v85z" />
      <path fill="#FFD23F" d="M256 256L0 427v85l512-256L256 256z" />
      <path fill="#FF3A44" d="M512 85L256 256l256 171V85z" />
    </svg>
  );
}

function StoreBadge({
  href,
  label,
  sublabel,
  variant,
}: {
  href: string;
  label: string;
  sublabel: string;
  variant: "apple" | "google";
}) {
  const badgeClass =
    "group relative flex min-h-[52px] min-w-[180px] max-w-full cursor-pointer items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 px-5 py-3 text-left text-sm font-semibold text-white shadow-lg ring-1 ring-inset ring-white/10 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/25 hover:ring-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  return (
    <Link href={href} className={badgeClass}>
      <span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(255,107,0,0.12),transparent_55%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden
      />
      <span className="relative flex shrink-0 items-center justify-center">
        {variant === "apple" ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
            <AppleGlyph className="h-5 w-5 text-white" />
          </span>
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-white/20">
            <PlayGlyph className="h-6 w-6" />
          </span>
        )}
      </span>
      <span className="relative flex min-w-0 flex-1 flex-col leading-tight">
        <span className="text-[10px] font-medium uppercase tracking-wider text-slate-300">
          {sublabel}
        </span>
        <span className="truncate">{label}</span>
      </span>
    </Link>
  );
}

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: PageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("Home");

  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(255,107,0,0.18),transparent)]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:gap-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex-1 text-center lg:max-w-xl lg:text-start">
            <p className="mb-4 inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {t("badge")}
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl">
              {t("subtitle")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <StoreBadge
                href="#"
                variant="apple"
                sublabel={t("storeSoon")}
                label={t("appStore")}
              />
              <StoreBadge
                href="#"
                variant="google"
                sublabel={t("storeSoon")}
                label={t("googlePlay")}
              />
            </div>
            <p className="mt-6 text-sm text-slate-500">{t("downloadNote")}</p>
          </div>
          <div className="mx-auto flex w-full max-w-sm flex-1 justify-center lg:max-w-md">
            <div
              className="relative aspect-[9/19] w-full max-w-[280px] rounded-[2.5rem] border border-slate-200/80 bg-gradient-to-b from-white to-slate-100 p-3 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5 sm:max-w-[320px]"
              role="img"
              aria-label={t("mockupAria")}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-slate-50">
                <div className="h-6 shrink-0 bg-slate-200/80" />
                <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-8">
                  <div className="h-12 w-12 rounded-2xl bg-primary/15 ring-2 ring-primary/30" />
                  <p className="text-center font-heading text-sm font-semibold text-slate-700">
                    {t("mockupTitle")}
                  </p>
                  <p className="text-center text-xs leading-relaxed text-slate-500">
                    {t("mockupDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
