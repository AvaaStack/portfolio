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
            <p className="text-sm mb-4 text-zinc-500">{t.role}</p>

            <h2 className="text-5xl font-bold leading-tight mb-6">
                {t.title}
            </h2>

            <p className="text-zinc-500 mb-8 leading-7">
                {t.description}
            </p>
        </>
    );
}