"use client";

import { translations } from "@/lib/translations";
import { useLanguage } from "@/provider/language-provider";

export default function HeroContent() {
    const { language, mounted } = useLanguage();
    const t = translations[language];

    if (!mounted) {
        return null;
    }

    return (
        <>
            <p className="text-sm text-zinc-500 mb-2 lg:mb-0">{t.role}</p>

            <h2 className="text-3xl mb-4 lg:text-5xl font-bold leading-tight lg:mb-2">
                {t.title}
            </h2>

            <p className="text-zinc-500 mb-6 lg:mb-4 leading-7">
                {t.description}
            </p>
        </>
    );
}