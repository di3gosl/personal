"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "motion/react";
import { naturalEase } from "../lib/animations";

const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: naturalEase,
            staggerChildren: 0.1,
        },
    },
};

const logoVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: naturalEase,
        },
    },
};

const menuVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: naturalEase,
        },
    },
};

export default function Header() {
    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <motion.div variants={logoVariants}>
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
                </motion.div>

                {/* Menu Button */}
                <motion.button
                    className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase cursor-pointer hover:text-accent transition-colors group"
                    aria-label="Open menu"
                    variants={menuVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span>Menu</span>
                    <div className="w-7 h-7 flex flex-col justify-center gap-1.5">
                        <span className="w-full h-0.5 bg-current transition-all duration-300 group-hover:-translate-y-0.5"></span>
                        <span className="w-full h-0.5 bg-current transition-all duration-300"></span>
                        <span className="w-full h-0.5 bg-current transition-all duration-300 group-hover:translate-y-0.5"></span>
                    </div>
                </motion.button>
            </div>

            {/* Floating Email Button */}
            <motion.button
                className="fixed bottom-8 left-8 w-11 h-11 bg-accent rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-secondary"
                aria-label="Contact via email"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    scale: { type: "tween", duration: 0.2, ease: naturalEase },
                    opacity: { duration: 0.5, delay: 0.6, ease: naturalEase },
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
            >
                <Mail className="w-4.5 h-4.5 text-white" />
            </motion.button>
        </motion.header>
    );
}
