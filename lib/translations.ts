export const translations = {
    en: {
        role: "Frontend Developer",
        title: "Building modern web experiences with React & Next.js",
        description:
            "Passionate frontend developer focused on building clean, responsive and accessible interfaces.",
        aboutTitle: "About me",
        aboutText:
            "My official name is Kosar Mohammadi, but I prefer to go by Ava. I started frontend development in November 2019 with HTML, CSS, JavaScript, jQuery and DotNetNuke. Since 2021, I have been working with React.js, starting with class components and Redux at Technolife, then moving toward functional components, Provider patterns, React Query, and more recently Nx, monorepos and Zustand.",
        personalText:
            "Outside the editor, I like reading, long walks on sunny spring days, playing harmonica, listening to everything from Pink Floyd and The Beatles to Mohammad-Reza Shajarian and Taylor Swift, and doing hands-on things like puzzles, coloring, painting and baking desserts.",
        cvLabel: "Download CV",
        cvHref: "/cv/kosar(ava)Mohammadi_CV_EN.pdf",
    },
    fa: {
        role: "توسعه‌دهنده فرانت‌اند",
        title: "ساخت تجربه‌های مدرن وب با React و Next.js",
        description:
            "توسعه‌دهنده فرانت‌اند با تمرکز روی ساخت رابط‌های کاربری تمیز، واکنش‌گرا و قابل‌دسترس.",
        aboutTitle: "درباره من",
        aboutText:
            "اسم رسمی من کوثر محمدی است، اما ترجیح می‌دهم آوا صدایم کنند. از آبان ۱۳۹۸ فرانت‌اند را با HTML، CSS، JavaScript، jQuery و DotNetNuke شروع کردم. از سال ۱۴۰۰ با React.js کار کردم؛ ابتدا در تکنولایف با class component و Redux، و بعدتر با functional component، الگوهای Provider، React Query و در ادامه با Nx، monorepo و Zustand.",
        personalText:
            "بیرون از دنیای دولوپری، کتاب خواندن، پیاده‌روی در روزهای آفتابی و بهاری، سازدهنی زدن، گوش دادن به موسیقی از Pink Floyd و The Beatles تا محمدرضا شجریان و Taylor Swift، و کارهای دستی مثل پازل، رنگ‌آمیزی، نقاشی و دسر پختن را دوست دارم.",
        cvLabel: "دانلود رزومه",
        cvHref: "/cv/ava-cv-fa.pdf",
    },
    de: {
        role: "Frontend-Entwicklerin",
        title: "Moderne Web-Erlebnisse mit React und Next.js entwickeln",
        description:
            "Frontend-Entwicklerin mit Fokus auf saubere, responsive und zugängliche Benutzeroberflächen.",
        aboutTitle: "Über mich",
        aboutText:
            "Mein offizieller Name ist Kosar Mohammadi, aber ich bevorzuge Ava. Ich habe im November 2019 mit Frontend-Entwicklung angefangen — mit HTML, CSS, JavaScript, jQuery und DotNetNuke. Seit 2021 arbeite ich mit React.js: zuerst bei Technolife mit Class Components und Redux, später mit Functional Components, Provider-Patterns, React Query und aktuell auch mit Nx, Monorepos und Zustand.",
        personalText:
            "Außerhalb des Editors lese ich gerne, gehe an sonnigen Frühlingstagen spazieren, spiele Mundharmonika, höre Musik von Pink Floyd und The Beatles bis Mohammad-Reza Shajarian und Taylor Swift, und mag kreative Dinge wie Puzzles, Ausmalen, Malen und Desserts backen.",
        cvLabel: "CV herunterladen",
        cvHref: "/cv/kosar(ava)Mohammadi_CV_DE.pdf",
    },
} as const;

export type Language = keyof typeof translations;