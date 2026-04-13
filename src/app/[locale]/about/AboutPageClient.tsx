"use client";

import { useTranslations } from "next-intl";
import { Shield, Star, Lightbulb, Leaf, Clock, Target, Award } from "lucide-react";

const timeline = [
  { year: "1949", titleMn: "Монголын Төмөр Зам байгуулагдсан", titleEn: "Mongolian Railway established" },
  { year: "1955", titleMn: "Улаанбаатар - Дархан чиглэл нээгдсэн", titleEn: "Ulaanbaatar - Darkhan route opened" },
  { year: "1961", titleMn: "Дархан - Эрдэнэт чиглэл", titleEn: "Darkhan - Erdenet route" },
  { year: "2010", titleMn: "Орчин үеийн техник технологи нэвтрүүлэлт", titleEn: "Modern technology implementation" },
  { year: "2024", titleMn: "Шинэ чиглэлүүдийн бүтээн байгуулалт", titleEn: "New route construction" },
];

const values = [
  { icon: Shield, key: "safety", color: "from-blue-500 to-blue-600" },
  { icon: Star, key: "reliability", color: "from-amber-500 to-amber-600" },
  { icon: Lightbulb, key: "innovation", color: "from-emerald-500 to-emerald-600" },
  { icon: Leaf, key: "sustainability", color: "from-teal-500 to-teal-600" },
];

export default function AboutPageClient() {
  const t = useTranslations("about");

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-primary-dark overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary">{t("history.title")}</h2>
              </div>
              <div className="section-divider mb-8" />
              <p className="text-text-secondary leading-relaxed text-lg">{t("history.description")}</p>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:bg-secondary group-hover:text-primary-dark transition-colors shadow-md">
                      {item.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && <div className="w-0.5 h-6 bg-gray-200 mt-2" />}
                  </div>
                  <div className="pt-2">
                    <span className="text-xs text-text-light font-medium">{item.year}</span>
                    <p className="text-text-primary font-medium">{item.titleMn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">{t("mission.title")}</h2>
            <div className="section-divider mx-auto mb-8" />
            <p className="text-xl text-text-secondary leading-relaxed">{t("mission.description")}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">{t("values.title")}</h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.key} className="group bg-surface rounded-2xl p-8 text-center card-hover border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${v.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">
                    {t(`values.${v.key}` as "values.safety" | "values.reliability" | "values.innovation" | "values.sustainability")}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
