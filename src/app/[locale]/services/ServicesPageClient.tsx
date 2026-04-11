"use client";

import { useTranslations } from "next-intl";
import {
  Users,
  Package,
  Building2,
  Globe,
  CheckCircle2,
  TrainTrack,
  Shield,
  Clock,
  BarChart3,
} from "lucide-react";

const services = [
  {
    key: "passenger",
    icon: Users,
    gradient: "from-blue-500 to-blue-700",
    features: [
      "Дотоодын чиглэлийн зорчигч тээвэр",
      "Олон улсын чиглэлийн зорчигч тээвэр",
      "Тусгай зорчигчдын тээвэр",
      "Тасалбарын онлайн захиалга",
    ],
  },
  {
    key: "cargo",
    icon: Package,
    gradient: "from-amber-500 to-amber-700",
    features: [
      "Нүүрсний тээвэр",
      "Зэсийн баяжмалын тээвэр",
      "Контейнер тээвэр",
      "Тусгай ачааны тээвэр",
    ],
  },
  {
    key: "infrastructure",
    icon: Building2,
    gradient: "from-emerald-500 to-emerald-700",
    features: [
      "Төмөр замын засвар үйлчилгээ",
      "Шинэ замын бүтээн байгуулалт",
      "Гүүр, хоолойн засвар",
      "Дохиоллын системийн шинэчлэл",
    ],
  },
  {
    key: "international",
    icon: Globe,
    gradient: "from-purple-500 to-purple-700",
    features: [
      "Хил дамнасан тээврийн коридор",
      "УБТЗ-тай хамтын ажиллагаа",
      "Олон улсын стандарт нэвтрүүлэлт",
      "Транзит тээврийн үйлчилгээ",
    ],
  },
];

const advantages = [
  { icon: TrainTrack, title: "1,815+ км төмөр зам", description: "Монгол орны өнцөг булан бүрт хүрнэ" },
  { icon: Shield, title: "Аюулгүй байдал", description: "Олон улсын стандартад нийцсэн" },
  { icon: Clock, title: "24/7 үйлчилгээ", description: "Тасралтгүй ажиллагаа" },
  { icon: BarChart3, title: "30+ сая тонн", description: "Жилийн ачаа тээврийн хэмжээ" },
];

export default function ServicesPageClient() {
  const t = useTranslations("services");

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

      {/* Services Detail */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.key}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:direction-rtl" : ""}`}
                >
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                        {t(`${service.key}.title` as "passenger.title" | "cargo.title" | "infrastructure.title" | "international.title")}
                      </h2>
                    </div>
                    <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                      {t(`${service.key}.description` as "passenger.description" | "cargo.description" | "infrastructure.description" | "international.description")}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                          <span className="text-text-primary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${!isEven ? "lg:order-1" : ""}`}>
                    <div className={`h-80 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-10 relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-32 h-32 text-white opacity-50" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Давуу тал</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 text-center card-hover border border-gray-100">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-text-primary mb-2">{adv.title}</h3>
                  <p className="text-sm text-text-secondary">{adv.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
