"use client"

import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
import LanguageSwitcher from "@/components/language-switcher";

export default function Navbar() {

    return (
        <nav className="flex items-center justify-between mb-24">
            <h1 className="text-xl font-semibold">
                <Image src={"/ava.png"} alt="AVA stack" className="h-8 w-auto dark:invert" width={96} height={96} />
            </h1>

            <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <ThemeToggle />
            </div>
        </nav>
    )}

