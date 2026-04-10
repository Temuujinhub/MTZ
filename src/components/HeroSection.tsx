"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Clock, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/5 -rotate-3" />
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/5 -rotate-2" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -rotate-1" />
          <div className="absolute top-2/3 left-0 w-full h-[1px] bg-white/5 rotate-1" />
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span>
              {locale === "mn"
                ? "Төрийн өмчит хувьцаат компани • 2008 онд байгуулагдсан"
                : locale === "zh"
                  ? "国有股份公司 • 成立于2008年"
                  : "State-Owned JSC • Established 2008"}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-secondary font-medium mb-4">
            {t("subtitle")}
          </p>

          {/* Description */}
          <p className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
            {t("description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary-dark font-semibold rounded-xl hover:bg-secondary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {t("cta")}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <Clock className="w-5 h-5" />
              {t("schedule")}
            </Link>
          </div>

          {/* Quick stats bar */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              {
                value: "1,815",
                label: locale === "mn" ? "км төмөр зам" : locale === "zh" ? "公里铁路" : "km railway",
              },
              {
                value: "3M",
                label: locale === "mn" ? "тонн (Q1 2026)" : locale === "zh" ? "吨 (2026年Q1)" : "tons (Q1 2026)",
              },
              {
                value: "5",
                label: locale === "mn" ? "охин компани" : locale === "zh" ? "子公司" : "subsidiaries",
              },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <ChevronRight className="w-5 h-5 rotate-90 animate-bounce" />
      </div>
    </section>
  );
}
