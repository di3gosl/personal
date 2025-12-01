"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-xl border-3 border-primary flex items-center justify-center mr-2">
                        <span className="text-xl font-bold text-primary">
                            D<span className="cursor-blink">_</span>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold leading-tight text-primary">
                            Diego Salazar
                        </span>
                        <span className="text-xs tracking-wider uppercase leading-tight text-secondary">
                            Full-Stack Developer
                        </span>
                    </div>
                </Link>

                {/* Menu Button */}
                <button
                    className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase cursor-pointer hover:text-accent transition-colors group"
                    aria-label="Open menu"
                >
                    <span>Menu</span>
                    <div className="w-7 h-7 flex flex-col justify-center gap-1.5">
                        <span className="w-full h-0.5 bg-current transition-all duration-300 group-hover:-translate-y-0.5"></span>
                        <span className="w-full h-0.5 bg-current transition-all duration-300"></span>
                        <span className="w-full h-0.5 bg-current transition-all duration-300 group-hover:translate-y-0.5"></span>
                    </div>
                </button>
            </div>

            {/* Floating Email Button */}
            <motion.div
                className="fixed bottom-8 left-8 w-11 h-11 bg-accent rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-secondary"
                aria-label="Contact via email"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", duration: 0.2 }}
            >
                <Mail className="w-4.5 h-4.5 text-white transition-all duration-300" />
            </motion.div>
        </header>
    );
}
