"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

type HowToNamespace = "HowToInstagram" | "HowToTikTok" | "HowToLink";

type Props = {
  namespace: HowToNamespace;
  current: "instagram" | "tiktok" | "link";
};

function ProTipLightbulbIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 21h6" />
      <path d="M12 3a6 6 0 0 0-6 6c0 1.6.6 3 1.6 4.2L9 19h6l1.4-5.8A6 6 0 0 0 18 9a6 6 0 0 0-6-6Z" />
    </svg>
  );
}

export function HowToTutorial({ namespace, current }: Props) {
  const t = useTranslations(namespace);
  const tNav = useTranslations("Nav");

  const steps = [1, 2, 3].map((n) => ({
    title: t(`step${n}Title`),
    body: t(`step${n}Body`),
  }));

  const showProTip =
    namespace === "HowToInstagram" || namespace === "HowToTikTok";

  const related = [
    {
      id: "instagram" as const,
      href: "/how-to/instagram",
      label: tNav("howToInstagram"),
    },
    {
      id: "tiktok" as const,
      href: "/how-to/tiktok",
      label: tNav("howToTikTok"),
    },
    {
      id: "link" as const,
      href: "/how-to/link",
      label: tNav("howToLink"),
    },
  ].filter((item) => item.id !== current);

  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {t("description")}
          </p>
        </header>

        {showProTip ? (
          <aside
            className="mb-10 flex gap-4 rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50 to-orange-50/80 p-5 shadow-sm ring-1 ring-amber-100/80"
            aria-labelledby="how-to-pro-tip-heading"
          >
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 shadow-inner"
              aria-hidden
            >
              <ProTipLightbulbIcon className="h-6 w-6" />
            </span>
            <div className="min-w-0 flex-1">
              <h2
                id="how-to-pro-tip-heading"
                className="font-heading text-sm font-semibold uppercase tracking-wide text-amber-950"
              >
                {t("proTipTitle")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-amber-950/90">
                {t("proTipBody")}
              </p>
            </div>
          </aside>
        ) : null}

        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <ol className="order-1 space-y-5">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-base font-bold text-primary-foreground"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div>
                  <h2 className="font-heading text-lg font-semibold text-slate-900">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-slate-600">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div
            className="order-2 flex min-h-[220px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/90 p-8 text-center lg:min-h-0"
            aria-hidden
          >
            <div className="mx-auto aspect-video w-full max-w-md rounded-xl bg-white/60 ring-1 ring-slate-200/80" />
            <p className="mt-4 max-w-sm text-sm text-slate-500">
              {t("mediaPlaceholder")}
            </p>
          </div>
        </div>

        <nav
          className="mt-12 border-t border-slate-200 pt-8"
          aria-label={t("relatedAria")}
        >
          <p className="text-sm font-medium text-slate-900">{t("relatedTitle")}</p>
          <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {related.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-primary underline-offset-2 transition-colors hover:underline cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
