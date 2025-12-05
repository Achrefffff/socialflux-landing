import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * Footer Component - SocialFlux Landing Page
 * Design Philosophy: Modern Minimalist with Bold Accents
 * - 4-column layout with organized links
 * - Social media links and contact info
 * - Copyright and legal information
 */



export default function Footer() {
  const { t } = useTranslation();

  const footerColumns = [
    {
      title: t('footer.product'),
      links: [
        { label: t('footer.features'), href: "/#features" },
        { label: t('footer.pricing'), href: "/#pricing" },
        { label: t('footer.documentation'), href: "#" },
        { label: t('footer.changelog'), href: "#" },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { label: t('footer.about'), href: "/about" },
        { label: t('footer.blog'), href: "/blog" },
        { label: t('footer.contact'), href: "#" },
        { label: t('footer.partners'), href: "#" },
      ],
    },
    {
      title: t('footer.legal'),
      links: [
        { label: t('footer.privacy'), href: "/privacy" },
        { label: t('footer.terms'), href: "/terms" },
        { label: t('footer.gdpr'), href: "/gdpr" },
        { label: t('footer.cookies'), href: "/cookies" },
      ],
    },
    {
      title: t('footer.connect'),
      links: [
        { label: "Instagram", href: "#", icon: Instagram },
        { label: "Twitter", href: "#", icon: Twitter },
        { label: "LinkedIn", href: "#", icon: Linkedin },
        { label: t('footer.support'), href: "mailto:contact@socialflux.fr", icon: Mail },
      ],
    },
  ];

  return (
    <footer className="text-gray-300 border-t border-gray-800" style={{ backgroundColor: 'black' }}>
      <div className="container py-16 md:py-24">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => {
                  const Icon = link.icon;
                  return (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t('footer.privacy')}
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t('footer.terms')}
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t('footer.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
