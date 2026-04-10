"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Calendar, ArrowRight, Filter } from "lucide-react";

const allNews = [
  {
    id: 1,
    category: "meeting",
    date: "2026-03-31",
    titleMn: "Гүйцэтгэх захирлын ээлжит шуурхай хуралдаан боллоо",
    titleEn: "Executive Director held regular briefing meeting",
    titleZh: "执行董事召开例行工作会议",
    excerptMn: "Гүйцэтгэх захирал О. Батчулуун ээлжит шуурхай хуралдааныг удирдан явуулж, компанийн цаашдын үйл ажиллагааны чиглэлийг тодорхойлов.",
    excerptEn: "Executive Director O. Batchuluun chaired the regular briefing meeting, outlining the company's future operational directions.",
    excerptZh: "执行董事O.巴特楚伦主持召开例行工作会议，明确公司未来运营方向。",
  },
  {
    id: 2,
    category: "meeting",
    date: "2026-03-31",
    titleMn: "\"Чайна Энержи Групп\"-ийн төлөөлөгчидтэй уулзалт хийлээ",
    titleEn: "Meeting with China Energy Group representatives",
    titleZh: "与中国能源集团代表会面",
    excerptMn: "Хамтын ажиллагааны хүрээнд \"Чайна Энержи Групп\"-ийн төлөөлөгчидтэй уулзалт зохион байгуулж, ачаа тээврийн хамтын ажиллагааг хэлэлцэв.",
    excerptEn: "A meeting was organized with China Energy Group representatives to discuss freight transportation cooperation.",
    excerptZh: "与中国能源集团代表召开会议，讨论货运合作事宜。",
  },
  {
    id: 3,
    category: "announcement",
    date: "2026-03-23",
    titleMn: "2026 оны эхний улиралд 3 сая тонн ачаа тээвэрлэлээ",
    titleEn: "3 million tons of cargo transported in Q1 2026",
    titleZh: "2026年第一季度运输300万吨货物",
    excerptMn: "Тавантолгой-Зүүнбаян чиглэлийн төмөр замаар 2026 оны эхний улиралд нийт 3 сая тонн ачааг амжилттай тээвэрлэсэн байна.",
    excerptEn: "A total of 3 million tons of cargo were successfully transported via the Tavan Tolgoi-Zuunbayan railway in Q1 2026.",
    excerptZh: "2026年第一季度通过塔温陶勒盖-宗巴彦铁路成功运输了300万吨货物。",
  },
  {
    id: 4,
    category: "event",
    date: "2026-03-20",
    titleMn: "Төрийн дээд шагнал, медаль гардуулах ёслол боллоо",
    titleEn: "State awards and medals ceremony held",
    titleZh: "举行国家奖章和勋章颁发仪式",
    excerptMn: "Монголын төмөр замын салбарт олон жил үр бүтээлтэй ажилласан ажилтнуудад Төрийн дээд шагнал, медаль гардуулав.",
    excerptEn: "State awards and medals were presented to employees who have worked productively in the Mongolian railway sector for many years.",
    excerptZh: "向在蒙古铁路行业工作多年的优秀员工颁发了国家奖章和勋章。",
  },
  {
    id: 5,
    category: "event",
    date: "2026-03-20",
    titleMn: "Компани байгуулагдсаны 18 жилийн ой тэмдэглэлээ",
    titleEn: "18th anniversary of company establishment celebrated",
    titleZh: "庆祝公司成立18周年",
    excerptMn: "\"Монголын төмөр зам\" ТӨХК байгуулагдсаны 18 жилийн ойг тэмдэглэн өнгөрүүлж, компанийн хөгжлийн замналыг эргэн харав.",
    excerptEn: "The 18th anniversary of Mongolian Railway JSC establishment was celebrated, looking back at the company's development journey.",
    excerptZh: "庆祝蒙古铁路股份公司成立18周年，回顾公司的发展历程。",
  },
  {
    id: 6,
    category: "meeting",
    date: "2026-03-20",
    titleMn: "Удирдлагын зөвлөлийн хуралдаан хөгжлийн сэдвээр боллоо",
    titleEn: "Management council meeting held on development topics",
    titleZh: "管理委员会召开发展主题会议",
    excerptMn: "Удирдлагын зөвлөлийн хуралдаанд компанийн цаашдын хөгжлийн стратеги, шинэ төслүүдийн явцыг хэлэлцэв.",
    excerptEn: "The management council meeting discussed the company's future development strategy and progress of new projects.",
    excerptZh: "管理委员会会议讨论了公司未来发展战略和新项目进展。",
  },
];

const categories = ["all", "general", "meeting", "event", "announcement", "project"];

export default function NewsPageClient() {
  const t = useTranslations("news");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? allNews
      : allNews.filter((n) => n.category === activeCategory);

  const getTitle = (item: typeof allNews[0]) => {
    if (locale === "en") return item.titleEn;
    if (locale === "zh") return item.titleZh;
    return item.titleMn;
  };

  const getExcerpt = (item: typeof allNews[0]) => {
    if (locale === "en") return item.excerptEn;
    if (locale === "zh") return item.excerptZh;
    return item.excerptMn;
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      {/* Filter & News List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex items-center gap-3 mb-12 flex-wrap">
            <Filter className="w-5 h-5 text-text-light" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-surface text-text-secondary hover:bg-primary/10"
                }`}
              >
                {cat === "all"
                  ? t("allNews")
                  : t(`categories.${cat}` as "categories.general" | "categories.project" | "categories.event" | "categories.announcement" | "categories.meeting")}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="group bg-surface rounded-2xl overflow-hidden card-hover border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-primary/15 to-primary-light/15 relative">
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary shadow-sm">
                      {t(`categories.${item.category}` as "categories.general" | "categories.project" | "categories.event" | "categories.announcement" | "categories.meeting")}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary">
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
                  <h3 className="font-bold text-text-primary mb-3 leading-snug group-hover:text-primary transition-colors">
                    {getTitle(item)}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
                    {getExcerpt(item)}
                  </p>
                  <button className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light transition-colors">
                    {t("readMore")}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-text-light">
              {locale === "mn" ? "Энэ ангилалд мэдээ байхгүй байна." : locale === "zh" ? "该类别暂无新闻。" : "No news in this category."}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
