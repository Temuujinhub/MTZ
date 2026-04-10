"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  const locale = useLocale();

  const content = {
    mn: {
      title: "Бидэнтэй хамтран ажиллахад бэлэн үү?",
      description: "Тээврийн үйлчилгээ, хамтын ажиллагааны талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл бидэнтэй холбогдоорой.",
      cta: "Холбоо барих",
      phone: "Утасаар холбогдох",
    },
    en: {
      title: "Ready to work with us?",
      description: "Contact us for more information about our transportation services and partnership opportunities.",
      cta: "Contact Us",
      phone: "Call Us",
    },
    zh: {
      title: "准备与我们合作吗？",
      description: "如需了解更多关于运输服务和合作机会的信息，请联系我们。",
      cta: "联系我们",
      phone: "致电我们",
    },
  };

  const c = content[locale as keyof typeof content] || content.mn;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />

      {/* Decorative */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
          {c.title}
        </h2>
        <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
          {c.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary-dark font-semibold rounded-xl hover:bg-secondary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {c.cta}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:+97670001949"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            <Phone className="w-5 h-5" />
            {c.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
