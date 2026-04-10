"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Users, Package, Building2, Globe, ArrowRight } from "lucide-react";

const servicesData = [
  { key: "passenger", icon: Users, gradient: "from-blue-500 to-blue-700" },
  { key: "cargo", icon: Package, gradient: "from-amber-500 to-amber-700" },
  { key: "infrastructure", icon: Building2, gradient: "from-emerald-500 to-emerald-700" },
  { key: "international", icon: Globe, gradient: "from-purple-500 to-purple-700" },
];

export default function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t("title")}
          </h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-text-secondary max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className="group bg-white rounded-2xl p-8 card-hover border border-gray-100 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient accent on top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-3">
                  {t(`${service.key}.title` as "passenger.title" | "cargo.title" | "infrastructure.title" | "international.title")}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {t(`${service.key}.description` as "passenger.description" | "cargo.description" | "infrastructure.description" | "international.description")}
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light transition-colors group/link"
                >
                  <span className="border-b border-transparent group-hover/link:border-primary transition-all">
                    {t("title")}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
