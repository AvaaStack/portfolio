export const translations = {
    en: {
        role: "Frontend Developer",
        title: "Building modern web experiences with React & Next.js",
        description:
            "Passionate frontend developer focused on building clean, responsive and accessible interfaces.",
    },
    fa: {
        role: "توسعه‌دهنده فرانت‌اند",
        title: "ساخت تجربه‌های مدرن وب با React و Next.js",
        description:
            "توسعه‌دهنده فرانت‌اند با تمرکز روی ساخت رابط‌های کاربری تمیز، واکنش‌گرا و قابل‌دسترس.",
    },
    de: {
        role: "Frontend-Entwicklerin",
        title: "Moderne Web-Erlebnisse mit React und Next.js entwickeln",
        description:
            "Frontend-Entwicklerin mit Fokus auf saubere, responsive und zugängliche Benutzeroberflächen.",
    },
} as const;

export type Language = keyof typeof translations;