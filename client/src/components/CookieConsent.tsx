import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              {t("cookies.bannerText")}{" "}
              <a href="/cookies" className="text-red-600 hover:text-red-700 underline">
                {t("cookies.learnMore")}
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={rejectCookies}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              {t("cookies.reject")}
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="bg-black hover:bg-gray-800 text-white"
            >
              {t("cookies.accept")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
