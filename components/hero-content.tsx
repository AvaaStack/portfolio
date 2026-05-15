"use client";

import { motion } from "framer-motion";
import { translations } from "@/lib/translations";
import { useLanguage } from "@/provider/language-provider";

export default function HeroContent() {
    const { language } = useLanguage();
    const t = translations[language] ?? translations.en;
    const isFa = language === "fa";

    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
        >
            <p className={` ${isFa ? "text-base" : "text-sm"} text-zinc-500 mb-2 lg:mb-0`}>{t.role}</p>

            <h2 className="text-3xl mb-4 lg:text-5xl font-bold leading-tight lg:mb-2">
                {t.title}
            </h2>

            <p className={` text-zinc-600 dark:text-zinc-400 mb-6 lg:mb-4 leading-7 ${isFa ? "text-lg" : "text-base"}`}>
                {t.description}
            </p>
        </motion.div>
    );
}