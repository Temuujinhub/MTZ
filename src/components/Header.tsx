"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Menu, X, Globe, ChevronDown, Train, Phone, Mail, ExternalLink, MapPin } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/news", label: t("news") },
    { href: "/contact", label: t("contact") },
  ];

  const handleLanguageChange = (langCode: string) => {
    router.replace(pathname, { locale: langCode });
    setLangDropdownOpen(false);
  };

  const currentLang = languages.find((l) => l.code === locale);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-dark text-white/80 text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3" /> +976 11-321510
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3" /> info@mtz.mn
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" />
              {locale === "mn" ? "Улаанбаатар хот" : locale === "zh" ? "乌兰巴托" : "Ulaanbaatar"}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors"><ExternalLink className="w-3.5 h-3.5" /></a>
            {/* Language selector in top bar */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{currentLang?.flag} {currentLang?.label}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded shadow-xl border border-gray-100 py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-gray-50 transition-colors ${
                        locale === lang.code ? "text-accent font-semibold bg-gray-50" : "text-text-primary"
                      }`}
                    >
                      <span>{lang.flag}</span> {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent rounded flex items-center justify-center shadow group-hover:bg-accent-hover transition-colors">
                <Train className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div>
                <p className="text-base lg:text-lg font-extrabold text-primary-dark leading-tight font-[family-name:var(--font-heading)]">
                  {locale === "mn" ? "МТЗ" : locale === "zh" ? "蒙古铁路" : "MTZ"}
                </p>
                <p className="text-[10px] lg:text-xs text-text-light leading-tight tracking-wider uppercase">
                  {locale === "mn" ? "Монголын Төмөр Зам" : locale === "zh" ? "蒙古铁路股份公司" : "Mongolian Railway"}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-200 font-[family-name:var(--font-heading)] ${
                      isActive
                        ? "text-accent"
                        : "text-text-primary hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Phone number - desktop */}
              <div className="hidden xl:flex items-center gap-2 mr-2">
                <Phone className="w-4 h-4 text-accent" />
                <div>
                  <p className="text-[10px] text-text-light uppercase tracking-wider">
                    {locale === "mn" ? "Залгах" : "Call us"}
                  </p>
                  <p className="text-sm font-bold text-primary-dark">+976 11-321510</p>
                </div>
              </div>

              {/* CTA Button - desktop */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex btn-primary text-xs py-2.5 px-5"
              >
                {locale === "mn" ? "Холбоо барих" : locale === "zh" ? "联系我们" : "Contact Us"}
              </Link>

              {/* Mobile language */}
              <div className="lg:hidden relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1 px-2 py-1.5 text-xs font-medium text-text-primary"
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLang?.flag}</span>
                </button>
                {langDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded shadow-xl border border-gray-100 py-1 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-gray-50 ${
                          locale === lang.code ? "text-accent font-semibold" : "text-text-primary"
                        }`}
                      >
                        <span>{lang.flag}</span> {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2 hover:bg-gray-100 transition-colors rounded"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-3 flex flex-col gap-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-semibold uppercase tracking-wide font-[family-name:var(--font-heading)] ${
                    isActive ? "text-accent bg-gray-50" : "text-text-primary hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary text-xs py-3 mt-2 justify-center"
            >
              {locale === "mn" ? "Холбоо барих" : "Contact Us"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
