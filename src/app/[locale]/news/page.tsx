import { getTranslations } from "next-intl/server";
import NewsPageClient from "./NewsPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function NewsPage() {
  return <NewsPageClient />;
}
