"use client";

import Link from "next/link";
import { Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { naturalEase } from "../lib/animations";
import { useState } from "react";

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuButtonPosition, setMenuButtonPosition] = useState({
        x: 0,
        y: 0,
    });

    const menuItems = [
        { label: "Home", link: "/" },
        { label: "Portfolio", link: "/portfolio" },
        { label: "About Me", link: "/about" },
        { label: "Contact", link: "/contact" },
    ];

    const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMenuButtonPosition({
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        });
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
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
                        onClick={handleMenuClick}
                    >
                        <span>Menu</span>
                        <div className="w-7 h-7 flex flex-col justify-center gap-1.5">
                            <span className="w-full h-0.5 bg-current transition-all duration-300 group-hover:-translate-y-0.5"></span>
                            <span className="w-full h-0.5 bg-current transition-all duration-300"></span>
                            <span className="w-full h-0.5 bg-current transition-all duration-300 group-hover:translate-y-0.5"></span>
                        </div>
                    </motion.button>
                </div>
            </motion.header>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Expanding Circle Background */}
                        <motion.div
                            className="fixed bg-primary z-60"
                            style={{
                                borderRadius: "50%",
                                left: menuButtonPosition.x,
                                top: menuButtonPosition.y,
                            }}
                            initial={{
                                width: 0,
                                height: 0,
                                x: 0,
                                y: 0,
                            }}
                            animate={{
                                width: "300vmax",
                                height: "300vmax",
                                x: "-150vmax",
                                y: "-150vmax",
                            }}
                            exit={{
                                width: 0,
                                height: 0,
                                x: 0,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    ease: naturalEase,
                                },
                            }}
                            transition={{
                                duration: 0.8,
                                ease: naturalEase,
                            }}
                        />

                        {/* Menu Content */}
                        <motion.div
                            className="fixed inset-0 z-70 flex flex-col items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.4,
                            }}
                        >
                            {/* Close Button */}
                            <motion.button
                                className={`absolute w-12 h-12 flex items-center justify-center text-white hover:text-accent transition-colors cursor-pointer`}
                                style={{
                                    left: menuButtonPosition.x - 24,
                                    top: menuButtonPosition.y - 24,
                                }}
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Close menu"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X className="w-8 h-8" />
                            </motion.button>

                            {/* Menu Items */}
                            <nav className="flex flex-col items-center gap-8">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.link}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.5 + index * 0.1,
                                        }}
                                    >
                                        <Link
                                            href={item.link}
                                            className="text-5xl md:text-7xl font-bold text-white hover:text-accent transition-colors font-jakarta"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Floating Email Button */}
            <Link href="/contact">
                <motion.button
                    className="fixed bottom-8 left-8 w-11 h-11 bg-accent rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-secondary"
                    aria-label="Contact via email"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        scale: {
                            type: "tween",
                            duration: 0.2,
                            ease: naturalEase,
                        },
                        opacity: {
                            duration: 0.5,
                            delay: 0.6,
                            ease: naturalEase,
                        },
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Mail className="w-4.5 h-4.5 text-white" />
                </motion.button>
            </Link>
        </>
    );
}
