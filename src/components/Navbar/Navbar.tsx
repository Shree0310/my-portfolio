"use client"

import {Link} from "next-view-transitions";
import {motion} from 'framer-motion';
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa'
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useTheme } from "next-themes";

const Navbar = () => {
    const navItems = [
        {
            title: 'Work',
            href:'/'
        },
        {
            title: 'About',
            href:'/about'
        },
        {
            title: "Projects",
            href: '/projects2'
        },
        {
            title: 'Contact',
            href: '/contact'
        }
    ]

    const {theme, setTheme, resolvedTheme} = useTheme();

    const [systemTheme, setSystemTheme] = useState<"light" | "dark">("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setSystemTheme(mediaQuery.matches ? "dark" : "light");

        const handleThemeChange = (e: MediaQueryListEvent) => {
            setSystemTheme(mediaQuery.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleThemeChange);

        return () => mediaQuery.removeEventListener("change", handleThemeChange);
    }, []);

    // Determine if dark mode is active based on resolved theme
    // Only calculate after mounting to avoid hydration mismatch
    const isDarkMode = mounted && (resolvedTheme === "dark" || (theme === "system" && systemTheme === "dark"));

    const SWITCH_THEME = () => {
        switch (theme) {
            case "light": {
                setTheme("dark");
                return;
            }
            case "dark": {
                setTheme("light");
                return;
            }
            case "system": {
                setTheme(systemTheme === "dark" ? "light" : "dark");
                return;
            }
        }
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Name */}
                    <Link href="/" className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                        Sowrasree
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, idx) => (
                            <Link
                                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                                href={item.href}
                                key={idx}>
                                {item.title}
                            </Link>
                        ))}
                        <button
                            onClick={SWITCH_THEME}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-label="Toggle theme">
                            {mounted ? (isDarkMode ? <FaSun size={14} className="text-neutral-600 dark:text-neutral-400"/> : <FaMoon size={14} className="text-neutral-600 dark:text-neutral-400"/>) : <FaMoon size={14}/>}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-4">
                        <button
                            onClick={SWITCH_THEME}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            aria-label="Toggle theme">
                            {mounted ? (isDarkMode ? <FaSun size={14} className="text-neutral-600 dark:text-neutral-400"/> : <FaMoon size={14} className="text-neutral-600 dark:text-neutral-400"/>) : <FaMoon size={14}/>}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                            <IconMenu2 className="w-5 h-5 text-neutral-600 dark:text-neutral-400"/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen &&
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                    <div className="px-6 py-4 space-y-4">
                        {navItems.map((item, idx) => (
                            <Link
                                onClick={() => setIsOpen(false)}
                                className="block text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                                href={item.href}
                                key={idx}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            }
        </nav>
    )
}

export default Navbar;