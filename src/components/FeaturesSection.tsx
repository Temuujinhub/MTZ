"use client";

import { useTranslations } from "next-intl";
import { Zap, Shield, Clock, TrendingUp } from "lucide-react";

const features = [
  { key: "fast", icon: Zap },
  { key: "safe", icon: Shield },
  { key: "reliable", icon: Clock },
  { key: "growing", icon: TrendingUp },
];

export default function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="section-tag">{t("sectionTag")}</p>
          <h2 className="section-title max-w-2xl mx-auto">{t("title")}</h2>
          <div className="section-divider mx-auto" />
          <p className="text-text-secondary mt-5 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.key} className="flex gap-5 group">
                <div className="shrink-0 w-16 h-16 bg-surface rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 font-[family-name:var(--font-heading)]">
                    {t(`${feature.key}.title` as "fast.title" | "safe.title" | "reliable.title" | "growing.title")}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t(`${feature.key}.description` as "fast.description" | "safe.description" | "reliable.description" | "growing.description")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
