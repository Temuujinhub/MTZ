"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    image: "/images/news-1.jpg",
    category: "project",
    date: "2024-12-15",
    titleMn: "Тавантолгой-Зүүнбаян чиглэлийн төмөр замын бүтээн байгуулалт",
    titleEn: "Tavan Tolgoi - Zuunbayan Railway Construction Update",
    titleZh: "塔温陶勒盖-宗巴彦铁路建设进展",
  },
  {
    id: 2,
    image: "/images/news-2.jpg",
    category: "event",
    date: "2024-12-10",
    titleMn: "Олон улсын төмөр замын форумд оролцлоо",
    titleEn: "Participation in International Railway Forum",
    titleZh: "参加国际铁路论坛",
  },
  {
    id: 3,
    image: "/images/news-3.jpg",
    category: "announcement",
    date: "2024-12-05",
    titleMn: "Шинэ зорчигчийн вагоныг ашиглалтад оруулав",
    titleEn: "New Passenger Wagons Put Into Service",
    titleZh: "新客车投入运营",
  },
];

export default function NewsSection() {
  const t = useTranslations("news");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              {t("title")}
            </h2>
            <div className="section-divider mb-5" />
            <p className="text-text-secondary">{t("subtitle")}</p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors shrink-0"
          >
            {t("allNews")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className="group bg-surface rounded-2xl overflow-hidden card-hover border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image placeholder */}
              <div className="h-52 bg-gradient-to-br from-primary/20 to-primary-light/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary shadow-sm">
                    {t(`categories.${item.category}` as "categories.general" | "categories.project" | "categories.event" | "categories.announcement")}
                  </span>
                </div>
                {/* Train icon as placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-text-light text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <time>{item.date}</time>
                </div>

                <h3 className="font-bold text-text-primary mb-4 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {item.titleMn}
                </h3>

                <Link
                  href="/news"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light transition-colors"
                >
                  {t("readMore")}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
