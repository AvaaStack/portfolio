"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Language } from "@/lib/translations";

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "avastack-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (saved === "en" || saved === "fa" || saved === "de") {
            setLanguageState(saved);
            document.documentElement.lang = saved;
            document.documentElement.dir = saved === "fa" ? "rtl" : "ltr";
        }
    }, []);

    function setLanguage(nextLanguage: Language) {
        setLanguageState(nextLanguage);
        localStorage.setItem(STORAGE_KEY, nextLanguage);

        document.documentElement.lang = nextLanguage;
        document.documentElement.dir = nextLanguage === "fa" ? "rtl" : "ltr";
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }

    return context;
}