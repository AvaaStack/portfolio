"use client";

import { translations } from "@/lib/translations";
import { useLanguage } from "@/provider/language-provider";

export default function AboutSection() {
    const { language } = useLanguage();
    const t = translations[language] ?? translations.en;

    return (
        <section className="mt-24">
            <h2 className="mb-6 text-2xl font-semibold">{t.aboutTitle}</h2>

            <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
                <div className="rounded-3xl border p-6">
                    <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                        {t.aboutText}
                    </p>
                </div>

                <div className="rounded-3xl border border-dashed p-6 bg-zinc-50 dark:bg-zinc-950">
                    <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                        {t.personalText}
                    </p>
                </div>
            </div>

            <a
                href={t.cvHref}
                download
                className="mt-6 inline-flex rounded-full border px-5 py-3 text-sm font-medium transition hover:scale-105 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
                {t.cvLabel}
            </a>
        </section>
    );
}