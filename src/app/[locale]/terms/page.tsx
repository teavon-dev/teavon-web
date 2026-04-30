import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/page-shell";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Terms" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Terms" });

  return (
    <PageShell title={t("title")} description={t("description")}>
      <div className="mx-auto max-w-2xl space-y-10 text-[17px] leading-[1.8] text-slate-700">
        <p>{t("intro")}</p>
        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-slate-900">
            {t("section1Title")}
          </h2>
          <p>{t("section1Body")}</p>
        </section>
        <section className="space-y-3">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-slate-900">
            {t("section2Title")}
          </h2>
          <p>{t("section2Body")}</p>
        </section>
        <section className="space-y-3 border-t border-slate-200 pt-10">
          <h2 className="font-heading text-xl font-semibold tracking-tight text-slate-900">
            {t("contactTitle")}
          </h2>
          <p>
            {t("contactBefore")}
            <a
              href={`mailto:${t("contactEmail")}`}
              className="font-medium text-primary underline-offset-2 transition-colors hover:underline"
            >
              {t("contactEmail")}
            </a>
            {t("contactAfter")}
          </p>
        </section>
        <p className="text-sm leading-normal text-slate-500">
          {t("lastUpdated")}
        </p>
      </div>
    </PageShell>
  );
}
