import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * Header Component - SocialFlux Landing Page
 * Design Philosophy: Modern Minimalist with Bold Accents
 * - Clean navigation with red accent CTAs
 * - Responsive hamburger menu for mobile
 * - Trust badges (Meta & Shopify verified)
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { label: t('header.features'), href: "/#features" },
    { label: t('header.howItWorks'), href: "/#how-it-works" },
    { label: t('header.pricing'), href: "/#pricing" },
    { label: t('footer.about'), href: "/about" },
    { label: t('footer.blog'), href: "/blog" },
    { label: t('header.faq'), href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/images/SocialFlux-logo.png" alt="SocialFlux" className="h-20 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              className="bg-black hover:bg-gray-800 text-white"
              asChild
            >
              <a href="https://apps.shopify.com/" target="_blank" rel="noopener noreferrer">
                {t('header.installButton')}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium"
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (link.href.startsWith('/#')) {
                      setTimeout(() => {
                        const id = link.href.substring(2);
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 px-4">
                <Button
                  size="sm"
                  className="w-full bg-black hover:bg-gray-800 text-white"
                  asChild
                >
                  <a href="https://apps.shopify.com/" target="_blank" rel="noopener noreferrer">
                    {t('header.installButton')}
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
