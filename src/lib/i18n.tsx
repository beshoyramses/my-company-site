"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "ar";

export const LANGUAGE_COOKIE = "site-language";

interface LanguageContextValue {
  language: Language;
  isArabic: boolean;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function getLanguageFromCookie(value?: string | null): Language {
  if (value === "ar") return "ar";
  return "en";
}

export function applyLanguageToDocument(language: Language) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.setAttribute("data-lang", language);
}

export function setLanguagePreference(language: Language) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LANGUAGE_COOKIE, language);
  document.cookie = `${LANGUAGE_COOKIE}=${language}; path=/; max-age=31536000; SameSite=Lax`;
  applyLanguageToDocument(language);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedLanguage = window.localStorage.getItem(LANGUAGE_COOKIE);
    const cookieLanguage = document.cookie
      .split("; ")
      .find((entry) => entry.startsWith(`${LANGUAGE_COOKIE}=`))
      ?.split("=")[1];
    const initialLanguage = getLanguageFromCookie(
      storedLanguage ?? cookieLanguage,
    );
    setLanguageState(initialLanguage);
    applyLanguageToDocument(initialLanguage);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    applyLanguageToDocument(language);
    window.localStorage.setItem(LANGUAGE_COOKIE, language);
    document.cookie = `${LANGUAGE_COOKIE}=${language}; path=/; max-age=31536000; SameSite=Lax`;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      isArabic: language === "ar",
      toggleLanguage: () =>
        setLanguageState((current) => (current === "en" ? "ar" : "en")),
      setLanguage: (nextLanguage: Language) => setLanguageState(nextLanguage),
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
