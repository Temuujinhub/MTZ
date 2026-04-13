"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-lg sm:text-xl font-bold text-white uppercase font-[family-name:var(--font-heading)] text-center md:text-left">
          {t("title")}
        </h2>
        <Link
          href="/contact"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-accent font-bold text-sm uppercase tracking-wider font-[family-name:var(--font-heading)] hover:bg-gray-100 transition-all"
        >
          {t("button")}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
