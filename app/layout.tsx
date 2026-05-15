import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import {LanguageProvider} from "@/provider/language-provider";
import Navbar from "@/components/navbar";

export default function RootLayout({children,}: { children: React.ReactNode; }) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body>
            <ThemeProvider>
                <LanguageProvider>
                    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
                        <div className="max-w-5xl mx-auto px-6 py-8">
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