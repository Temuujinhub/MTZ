"use client";

import { useTranslations, useLocale } from "next-intl";
import { Shield, TrendingUp, Lightbulb, BarChart3, Clock, Target, Award, Building2 } from "lucide-react";

const timeline = [
  { year: "2008", titleMn: "МТЗ ТӨХК байгуулагдсан - ЗГ-ын 82-р тогтоол", titleEn: "MTZ JSC established - Government Resolution #82" },
  { year: "2010", titleMn: "Тавантолгой төмөр зам ХХК байгуулагдсан", titleEn: "Tavan Tolgoi Railway LLC established" },
  { year: "2014", titleMn: "Олон улсын тээврийн коридор өргөтгөл", titleEn: "International transport corridor expansion" },
  { year: "2020", titleMn: "Тавантолгой-Зүүнбаян чиглэлийн бүтээн байгуулалт эхэлсэн", titleEn: "Tavan Tolgoi-Zuunbayan route construction started" },
  { year: "2025", titleMn: "Тавантолгой-Зүүнбаян чиглэлээр тээвэрлэлт эхэлсэн", titleEn: "Transportation on Tavan Tolgoi-Zuunbayan route commenced" },
  { year: "2026", titleMn: "Q1-д 3 сая тонн ачаа тээвэрлэсэн", titleEn: "3 million tons of cargo transported in Q1" },
];

const values = [
  { icon: Shield, key: "safety", color: "from-blue-500 to-blue-600" },
  { icon: Lightbulb, key: "reliability", color: "from-amber-500 to-amber-600" },
  { icon: TrendingUp, key: "innovation", color: "from-emerald-500 to-emerald-600" },
  { icon: BarChart3, key: "sustainability", color: "from-teal-500 to-teal-600" },
];

const subsidiaries = [
  { name: "Тавантолгой төмөр зам ХХК", description: "Тавантолгой-Зүүнбаян чиглэлийн төмөр замын бүтээн байгуулалт, ашиглалт" },
  { name: "Монголиан порт групп", description: "Логистик, порт үйлчилгээ" },
  { name: "Шивээ хүрэн төмөр зам ХХК", description: "Шивээхүрэн чиглэлийн төмөр замын бүтээн байгуулалт" },
  { name: "Чойбалсан-Хөөт-Бичигт төмөр зам ХХК", description: "Зүүн бүсийн төмөр замын төсөл" },
  { name: "Арцсуурь-Нарийнсухайт-Шивээхүрэн төмөр зам ХХК", description: "Өмнөд бүсийн төмөр замын төсөл" },
];

export default function AboutPageClient() {
  const t = useTranslations("about");
  const locale = useLocale();

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

      {/* History */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary">{t("history.title")}</h2>
              </div>
              <div className="section-divider mb-8" />
              <p className="text-text-secondary leading-relaxed text-lg mb-6">{t("history.description")}</p>

              {/* Activity areas */}
              <div className="bg-surface rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-primary mb-4">
                  {locale === "mn" ? "Үйл ажиллагааны чиглэл" : locale === "zh" ? "业务方向" : "Areas of Activity"}
                </h3>
                <ul className="space-y-3 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                    {locale === "mn" ? "Төмөр замын дэд бүтцийг барих, эзэмших, ашиглах" : locale === "zh" ? "铁路基础设施的建设、拥有和运营" : "Building, owning, and operating railway infrastructure"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                    {locale === "mn" ? "Төмөр замын тээвэрлэлтийн үйл ажиллагаа эрхлэх" : locale === "zh" ? "开展铁路运输活动" : "Conducting railway transportation activities"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                    {locale === "mn" ? "Хөдлөх бүрэлдэхүүнийг эзэмших, ашиглах, үйлдвэрлэх, угсрах, түрээслэх, засварлах" : locale === "zh" ? "机车车辆的拥有、运营、制造、组装、租赁和维修" : "Owning, operating, manufacturing, assembling, leasing, and repairing rolling stock"}
                  </li>
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:bg-secondary group-hover:text-primary-dark transition-colors shadow-md">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && <div className="w-0.5 h-6 bg-gray-200 mt-2" />}
                  </div>
                  <div className="pt-3">
                    <p className="text-text-primary font-medium">
                      {locale === "en" ? item.titleEn : item.titleMn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">{t("mission.title")}</h2>
              <div className="section-divider mb-6" />
              <p className="text-lg text-text-secondary leading-relaxed">{t("mission.description")}</p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 border border-gray-100 card-hover">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">{t("vision.title")}</h2>
              <div className="section-divider mb-6" />
              <p className="text-lg text-text-secondary leading-relaxed">{t("vision.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Priority Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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

      {/* Subsidiaries */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">{t("subsidiaries.title")}</h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsidiaries.map((sub, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 card-hover">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">{sub.name}</h3>
                <p className="text-sm text-text-secondary">{sub.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Director */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-3xl font-bold text-white">О.Б</span>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">О. Батчулуун</h3>
            <p className="text-secondary font-medium mb-4">
              {locale === "mn" ? "Гүйцэтгэх захирал" : locale === "zh" ? "执行董事" : "Executive Director"}
            </p>
            <div className="section-divider mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
