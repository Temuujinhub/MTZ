"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Menu, X, Globe, ChevronDown, Train, ExternalLink } from "lucide-react";
import { useLocale } from "next-intl";

const languages = [
  { code: "mn", label: "Монгол", flag: "🇲🇳" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const mainNavItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/news", label: t("news") },
    { href: "/contact", label: t("contact") },
  ];

  const moreNavItems: Array<{ href: string; label: string; external?: string }> = [
    { href: "/transparency", label: t("transparency") },
    { href: "/legal", label: t("legal") },
    { href: "/careers", label: t("careers") },
    { href: "/anticorruption", label: t("anticorruption") },
    { href: "#", label: "Шилэн данс", external: "https://shilendans.gov.mn/organization/26012" },
  ];

  const handleLanguageChange = (langCode: string) => {
    router.replace(pathname, { locale: langCode });
    setLangDropdownOpen(false);
  };

  const currentLang = languages.find((l) => l.code === locale);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
      {/* Top bar */}
      <div className="bg-primary-dark text-white/80 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <div className="flex items-center gap-4">
            <span>+(976) 70006464</span>
            <span className="hidden sm:inline">info@mtz.gov.mn</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/MongolianRailway" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <a href="https://www.instagram.com/mtz_railway/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:bg-primary-light transition-colors">
              <Train className="w-7 h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-primary leading-tight">
                {locale === "mn"
                  ? "Монголын Төмөр Зам"
                  : locale === "zh"
                    ? "蒙古铁路"
                    : "Mongolian Railway"}
              </p>
              <p className="text-xs text-text-secondary leading-tight">
                {locale === "mn" ? "ТӨХК" : locale === "zh" ? "国有股份公司" : "State-Owned JSC"}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "text-text-primary hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-text-primary hover:bg-primary/10 transition-all"
              >
                <span>{locale === "mn" ? "Бусад" : locale === "zh" ? "更多" : "More"}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${moreDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {moreDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in-up">
                  {moreNavItems.map((item, i) => (
                    "external" in item && item.external ? (
                      <a
                        key={i}
                        href={item.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 hover:bg-primary/5 transition-colors text-text-primary"
                        onClick={() => setMoreDropdownOpen(false)}
                      >
                        {item.label}
                        <ExternalLink className="w-3 h-3 text-text-light" />
                      </a>
                    ) : (
                      <Link
                        key={i}
                        href={"href" in item ? item.href : "/"}
                        className="block w-full text-left px-4 py-2.5 text-sm hover:bg-primary/5 transition-colors text-text-primary"
                        onClick={() => setMoreDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-text-primary hover:bg-primary/10 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{currentLang?.flag} {currentLang?.label}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in-up">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-primary/5 transition-colors ${
                        locale === lang.code
                          ? "text-primary font-semibold bg-primary/5"
                          : "text-text-primary"
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[70vh] overflow-y-auto">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {mainNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-text-primary hover:bg-primary/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="border-t border-gray-100 mt-2 pt-2">
              {moreNavItems.map((item, i) => (
                "external" in item && item.external ? (
                  <a
                    key={i}
                    href={item.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-text-secondary hover:bg-primary/10"
                  >
                    {item.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <Link
                    key={i}
                    href={"href" in item ? item.href : "/"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-text-secondary hover:bg-primary/10"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
