"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Train, MapPin, Phone, Mail, Globe, Video } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center">
                <Train className="w-6 h-6 text-primary-dark" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">МТЗ</p>
                <p className="text-xs text-white/60">ТӨХК</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-secondary font-semibold mb-5 text-sm uppercase tracking-wider">
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
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-secondary font-semibold mb-5 text-sm uppercase tracking-wider">
              {t("contactInfo")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  Улаанбаатар, Сүхбаатар дүүрэг, Бага тойруу 8
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-white/70 text-sm">+976 7000-1949</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-white/70 text-sm">info@mtz.mn</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-secondary font-semibold mb-5 text-sm uppercase tracking-wider">
              {t("socialMedia")}
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary-dark transition-all"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary-dark transition-all"
              >
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-white/50 text-sm">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
