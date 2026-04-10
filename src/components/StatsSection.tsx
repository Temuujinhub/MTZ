"use client";

import { useTranslations } from "next-intl";
import { TrainTrack, Package, Building2, Calendar } from "lucide-react";

const statsData = [
  { key: "railLength", value: "1,815", icon: TrainTrack },
  { key: "passengers", value: "3", icon: Package },
  { key: "cargo", value: "5", icon: Building2 },
  { key: "employees", value: "2008", icon: Calendar },
];

export default function StatsSection() {
  const t = useTranslations("stats");

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t("title")}
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.key}
                className="group relative bg-surface rounded-2xl p-8 text-center card-hover border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-text-secondary font-medium">
                  {t(stat.key as "railLength" | "passengers" | "cargo" | "employees")}
                </p>
                <p className="text-xs text-text-light mt-1">
                  {t(`${stat.key}Unit` as "railLengthUnit" | "passengersUnit" | "cargoUnit" | "employeesUnit")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
