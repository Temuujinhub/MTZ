"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Train, MapPin, Phone, Mail, ExternalLink, Send } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-darker text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                <Train className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-extrabold text-lg leading-tight font-[family-name:var(--font-heading)]">МТЗ</p>
                <p className="text-[10px] text-white/50 uppercase tracking-widest">Mongolian Railway</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              {t("description")}
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-9 h-9 bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-5 font-[family-name:var(--font-heading)]">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: nav("home") },
                { href: "/about", label: nav("about") },
                { href: "/services", label: nav("services") },
                { href: "/news", label: nav("news") },
                { href: "/contact", label: nav("contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2">
                    <span className="text-accent/50">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-5 font-[family-name:var(--font-heading)]">
              {t("contactInfo")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  Улаанбаатар, Сүхбаатар дүүрэг, Бага тойруу 8
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span className="text-white/60 text-sm">+976 11-321510</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span className="text-white/60 text-sm">info@mtz.mn</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-5 font-[family-name:var(--font-heading)]">
              {t("newsletter")}
            </h3>
            <p className="text-white/60 text-sm mb-4">{t("newsletterDescription")}</p>
            <div className="flex">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1 px-3 py-2.5 bg-white/10 text-white text-sm placeholder:text-white/40 border-none outline-none focus:bg-white/15 transition-colors"
              />
              <button className="px-3 py-2.5 bg-accent hover:bg-accent-hover transition-colors">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">{t("copyright")}</p>
          <div className="flex gap-6 text-white/40 text-xs">
            <a href="#" className="hover:text-white transition-colors">{t("terms")}</a>
            <a href="#" className="hover:text-white transition-colors">{t("privacy")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
