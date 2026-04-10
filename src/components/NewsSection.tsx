"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    category: "meeting",
    date: "2026-03-31",
    titleMn: "Гүйцэтгэх захирлын ээлжит шуурхай хуралдаан боллоо",
    titleEn: "Executive Director held regular briefing meeting",
    titleZh: "执行董事召开例行工作会议",
  },
  {
    id: 2,
    category: "meeting",
    date: "2026-03-31",
    titleMn: "\"Чайна Энержи Групп\"-ийн төлөөлөгчидтэй уулзалт хийлээ",
    titleEn: "Meeting with China Energy Group representatives",
    titleZh: "与中国能源集团代表会面",
  },
  {
    id: 3,
    category: "announcement",
    date: "2026-03-23",
    titleMn: "2026 оны эхний улиралд 3 сая тонн ачаа тээвэрлэлээ",
    titleEn: "3 million tons of cargo transported in Q1 2026",
    titleZh: "2026年第一季度运输300万吨货物",
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
                    {t(`categories.${item.category}` as "categories.general" | "categories.project" | "categories.event" | "categories.announcement" | "categories.meeting")}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary">
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <line x1="8" y1="7" x2="16" y2="7" />
                    <line x1="8" y1="11" x2="16" y2="11" />
                    <line x1="8" y1="15" x2="12" y2="15" />
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
