"use client";

import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPageClient() {
  const t = useTranslations("contact");

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-primary-dark overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: t("address"),
                  value: t("addressValue"),
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Phone,
                  label: t("phone"),
                  value: "+976 7000-1949",
                  color: "from-emerald-500 to-emerald-600",
                },
                {
                  icon: Mail,
                  label: t("email"),
                  value: "info@mtz.mn",
                  color: "from-amber-500 to-amber-600",
                },
                {
                  icon: Clock,
                  label: t("workHours"),
                  value: t("workHoursValue"),
                  color: "from-purple-500 to-purple-600",
                },
              ].map((info, i) => {
                const Icon = info.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-6 bg-surface rounded-2xl border border-gray-100 card-hover"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-text-light font-medium mb-1">{info.label}</p>
                      <p className="text-text-primary font-medium">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-2xl p-8 sm:p-10 border border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-8">
                  {t("subtitle")}
                </h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        {t("form.name")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-primary"
                        placeholder={t("form.name")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        {t("form.email")}
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-primary"
                        placeholder={t("form.email")}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t("form.subject")}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-primary"
                      placeholder={t("form.subject")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t("form.message")}
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-text-primary"
                      placeholder={t("form.message")}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    {t("form.send")}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16 h-80 bg-surface rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-3" />
              <p className="text-text-light text-sm">
                Улаанбаатар, Сүхбаатар дүүрэг, Бага тойруу 8
              </p>
              <p className="text-text-light text-xs mt-1">47.9184° N, 106.9177° E</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
