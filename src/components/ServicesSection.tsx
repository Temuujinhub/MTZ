"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const servicesData = [
  {
    key: "passenger",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
  },
  {
    key: "cargo",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  },
  {
    key: "international",
    image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="section-tag">{t("sectionTag")}</p>
          <h2 className="section-title">{t("title")}</h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link
              key={service.key}
              href="/services"
              className="group block bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="img-overlay-card h-60 relative">
                <Image
                  src={service.image}
                  alt={service.key}
                  fill
                  className="object-cover"
                />
                <div className="overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-white uppercase font-[family-name:var(--font-heading)] tracking-wide">
                    {t(`${service.key}.title` as "passenger.title" | "cargo.title" | "international.title")}
                  </h3>
                </div>
              </div>
              {/* Text */}
              <div className="p-5">
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {t(`${service.key}.description` as "passenger.description" | "cargo.description" | "international.description")}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent group-hover:gap-2.5 transition-all font-[family-name:var(--font-heading)]">
                  {t("readMore")} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
