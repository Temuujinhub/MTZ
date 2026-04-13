"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80",
    category: "project",
    date: "2024-12-15",
    author: "МТЗ",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?auto=format&fit=crop&w=800&q=80",
    category: "event",
    date: "2024-12-10",
    author: "МТЗ",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=800&q=80",
    category: "announcement",
    date: "2024-12-05",
    author: "МТЗ",
  },
];

export default function NewsSection() {
  const t = useTranslations("news");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <p className="section-tag">{t("sectionTag")}</p>
            <h2 className="section-title">{t("title")}</h2>
            <div className="section-divider" />
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent hover:gap-3 transition-all font-[family-name:var(--font-heading)]"
          >
            {t("allNews")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="group bg-white shadow-md hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="img-overlay-card h-56 relative">
                <Image
                  src={item.image}
                  alt={`News ${item.id}`}
                  fill
                  className="object-cover"
                />
                {/* Date badge */}
                <div className="absolute top-4 left-4 bg-accent text-white text-center px-3 py-2 z-10">
                  <p className="text-lg font-bold leading-none">{item.date.split("-")[2]}</p>
                  <p className="text-[10px] uppercase mt-0.5">
                    {item.date.split("-")[1] === "12" ? "Dec" : item.date.split("-")[1]}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-text-light mb-3 pb-3 border-b border-gray-100">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {item.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                </div>

                <h3 className="font-bold text-text-primary mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2 font-[family-name:var(--font-heading)]">
                  {t(`items.${item.id}.title` as "items.1.title" | "items.2.title" | "items.3.title")}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
                  {t(`items.${item.id}.excerpt` as "items.1.excerpt" | "items.2.excerpt" | "items.3.excerpt")}
                </p>

                <Link
                  href="/news"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent group-hover:gap-2.5 transition-all font-[family-name:var(--font-heading)]"
                >
                  {t("readMore")} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
