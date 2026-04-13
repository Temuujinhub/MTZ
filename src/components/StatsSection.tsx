"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

export default function StatsSection() {
  const t = useTranslations("about");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left text */}
          <div className="lg:max-w-2xl">
            <p className="section-tag">{t("sectionTag")}</p>
            <h2 className="section-title mb-4">{t("introTitle")}</h2>
            <p className="text-text-secondary leading-relaxed">
              {t("introDescription")}
            </p>
          </div>
          {/* Right CTA */}
          <div className="shrink-0">
            <Link href="/about" className="btn-primary">
              {t("introButton")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
