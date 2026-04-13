"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?auto=format&fit=crop&w=1920&q=80"
        alt="Railway background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary-dark/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-tag text-gold mb-2">{t("sectionTag")}</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase mb-12 font-[family-name:var(--font-heading)]">
          {t("title")}
        </h2>

        <div className="relative">
          <Quote className="w-12 h-12 text-gold/30 mx-auto mb-6" />
          <blockquote className="text-lg sm:text-xl text-white/90 leading-relaxed italic max-w-2xl mx-auto mb-8">
            &ldquo;{t("quote")}&rdquo;
          </blockquote>
          <div>
            <p className="text-white font-bold text-base font-[family-name:var(--font-heading)] uppercase">
              {t("author")}
            </p>
            <p className="text-white/60 text-sm mt-1">{t("authorRole")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
