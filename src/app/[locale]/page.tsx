import { getTranslations } from "next-intl/server";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import CTASection from "@/components/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
