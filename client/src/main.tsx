import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";
import i18n from "./i18n";

// Update HTML lang attribute based on current language
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

// Set initial lang attribute
document.documentElement.setAttribute('lang', i18n.language);

createRoot(document.getElementById("root")!).render(<App />);
