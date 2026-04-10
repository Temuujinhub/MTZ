"use client";

import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  subtitle: string;
}

export default function PlaceholderPage({ title, subtitle }: PlaceholderPageProps) {
  return (
    <div>
      <section className="relative py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">{subtitle}</p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Construction className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Энэ хуудас боловсруулагдаж байна
          </h2>
          <p className="text-text-secondary">
            Тун удахгүй бэлэн болно. Та дахин зочилж үзнэ үү.
          </p>
        </div>
      </section>
    </div>
  );
}
