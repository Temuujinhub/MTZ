"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative h-[100vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1920&q=80"
        alt="Railway"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-block bg-green text-white text-xs font-bold uppercase tracking-widest px-4 py-2 mb-6 font-[family-name:var(--font-heading)]">
            {t("tag")}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-[1.1] font-[family-name:var(--font-heading)] uppercase">
            {t("title")}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 max-w-lg mb-8 leading-relaxed">
            {t("description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="btn-green">
              {t("cta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="btn-outline">
              {t("learnMore")}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary-dark/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "1,815+", label: t("statKm") },
              { value: "3.2M", label: t("statPassengers") },
              { value: "30M+", label: t("statCargo") },
              { value: "75+", label: t("statYears") },
            ].map((stat, i) => (
              <div key={i} className="py-5 px-4 text-center">
                <p className="text-xl sm:text-2xl font-extrabold text-white font-[family-name:var(--font-heading)]">
                  {stat.value}
                </p>
                <p className="text-xs text-white/60 mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-white/40">
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
