"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Calendar, ArrowRight, Filter } from "lucide-react";

const allNews = [
  {
    id: 1,
    category: "project",
    date: "2024-12-15",
    title: "Тавантолгой-Зүүнбаян чиглэлийн төмөр замын бүтээн байгуулалт",
    excerpt: "Шинэ чиглэлийн төмөр замын бүтээн байгуулалт амжилттай үргэлжилж байна. Нийт 416 км урт замын 85 хувийг барьж дуусгасан.",
  },
  {
    id: 2,
    category: "event",
    date: "2024-12-10",
    title: "Олон улсын төмөр замын форумд оролцлоо",
    excerpt: "OSJD-ийн жил бүрийн чуулга уулзалтад МТЗ ТӨХК-ийн төлөөлөгчид оролцож, олон улсын хамтын ажиллагааг өргөжүүлэв.",
  },
  {
    id: 3,
    category: "announcement",
    date: "2024-12-05",
    title: "Шинэ зорчигчийн вагоныг ашиглалтад оруулав",
    excerpt: "ХБНГУ-аас импортолсон орчин үеийн 20 зорчигчийн вагоныг Улаанбаатар - Дархан чиглэлд ашиглалтад оруулав.",
  },
  {
    id: 4,
    category: "general",
    date: "2024-11-28",
    title: "Өвлийн улиралд бэлтгэх ажлууд хийгдэж байна",
    excerpt: "Төмөр замын бүх шугамд өвлийн улирлын бэлтгэл ажлыг бүрэн хийж дуусгалаа. Аюулгүй ажиллагааг ханган ажиллана.",
  },
  {
    id: 5,
    category: "project",
    date: "2024-11-20",
    title: "Дижитал шилжилтийн хөтөлбөр",
    excerpt: "МТЗ ТӨХК дижитал шилжилтийн хүрээнд тасалбарын онлайн системийг бүрэн шинэчилж, хэрэглэгчдэд илүү хялбар болгов.",
  },
  {
    id: 6,
    category: "event",
    date: "2024-11-15",
    title: "Ажилтнуудын мэргэжил дээшлүүлэх сургалт",
    excerpt: "Бүх салбарын ажилтнуудад зориулсан мэргэжил дээшлүүлэх сургалтыг амжилттай зохион байгуулав.",
  },
];

const categories = ["all", "general", "project", "event", "announcement"];

export default function NewsPageClient() {
  const t = useTranslations("news");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? allNews
      : allNews.filter((n) => n.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-primary-dark overflow-hidden">
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
                  : t(`categories.${cat}` as "categories.general" | "categories.project" | "categories.event" | "categories.announcement")}
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
                      {t(`categories.${item.category}` as "categories.general" | "categories.project" | "categories.event" | "categories.announcement")}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-text-light text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <time>{item.date}</time>
                  </div>
                  <h3 className="font-bold text-text-primary mb-3 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <button className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light transition-colors">
                    {t("readMore")}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
