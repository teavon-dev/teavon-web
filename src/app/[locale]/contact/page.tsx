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
  const t = await getTranslations({ locale, namespace: "Contact" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Contact" });

  return (
    <PageShell title={t("title")} description={t("description")}>
      <p>{t("body")}</p>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">{t("emailLabel")}</p>
        <p className="mt-1">
          <a
            href="mailto:support@teavon.app"
            className="font-medium text-primary underline-offset-2 transition-colors hover:underline cursor-pointer"
          >
            support@teavon.app
          </a>
        </p>
      </div>
      <p className="text-sm text-slate-500">{t("responseTime")}</p>
    </PageShell>
  );
}
