import "./globals.css";
import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import { ThemeProvider } from "@/provider/theme-provider";
import {LanguageProvider} from "@/provider/language-provider";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
    title: "Ava Stack | Frontend Developer",
    description:
        "Frontend developer focused on React, Next.js and modern web experiences.",
    keywords: [
        "Frontend Developer",
        "React Developer",
        "Next.js",
        "TypeScript",
        "Ava Stack",
        "Kosar Mohammadi",
        "Ava Mohammadi",
    ],

    authors: [{ name: "Kosar Mohammadi" }],

    creator: "Ava Stack",

    metadataBase: new URL("https://avastack.dev"),

    openGraph: {
        title: "Ava Stack | Frontend Developer",
        description:
            "Frontend developer focused on React, Next.js and modern web experiences.",
        url: "https://avastack.dev",
        siteName: "Ava Stack",
        locale: "en_US",
        type: "website",
        images: ["/og-image.png"],
    },

    twitter: {
        card: "summary_large_image",
        title: "Ava Stack",
        description:
            "Frontend developer focused on React and Next.js.",
    },
};

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const vazirmatn = Vazirmatn({
    subsets: ["arabic"],
    variable: "--font-vazirmatn",
});

export default function RootLayout({children,}: { children: React.ReactNode; }) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} ${vazirmatn.variable}`}>
          <ThemeProvider>
            <LanguageProvider>
              <main className="relative min-h-screen overflow-hidden bg-[#f4f7ff] text-zinc-950 transition-colors dark:bg-[#09090b] dark:text-zinc-50">
                  <div className="absolute inset-0 -z-20 bg-grid opacity-40" />
                  <div className="pointer-events-none absolute inset-0 -z-10">
                      <div className="absolute -left-30 -top-30 h-105 w-105 rounded-full bg-fuchsia-300/35 blur-3xl dark:bg-fuchsia-700/20" />
                      <div className="absolute -right-20 top-30 h-80 w-[320px] rounded-full bg-sky-300/30 blur-3xl dark:bg-cyan-700/20" />
                      <div className="absolute -bottom-30 left-1/2 h-75 w-75 -translate-x-1/2 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-700/10" />
                  </div>

                  <div className="relative z-10 max-w-5xl mx-auto px-6 py-8">
                      <Navbar />
                      {children}
                  </div>
              </main>
            </LanguageProvider>
          </ThemeProvider>
        </body>
      </html>
  );
}