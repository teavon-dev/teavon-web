import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HowToTutorial } from "@/components/how-to-tutorial";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HowToLink" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function HowToLinkPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HowToTutorial namespace="HowToLink" current="link" />;
}
