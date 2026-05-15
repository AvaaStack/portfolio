"use client";

import { Language } from "@/lib/translations";
import { useLanguage } from "@/provider/language-provider";

const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "fa", label: "FA" },
    { code: "de", label: "DE" },
];

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex min-h-9 min-w-9 items-center gap-1 rounded-full border p-1">
            {languages.map((item) => (
                <button
                    key={item.code}
                    onClick={() => setLanguage(item.code)}
                    className={`rounded-full px-3 py-1 text-sm transition ${
                        language === item.code
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}