"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { naturalEase } from "../lib/animations";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: naturalEase,
        },
    },
};

const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
        },
    },
};

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.footer
            ref={ref}
            className="bg-background pb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="container mx-auto text-primary grid grid-cols-12 border-t border-light pt-10 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div className="col-span-5" variants={itemVariants}>
                    <div className="text-primary mb-5 text-lg font-semibold">
                        Contact Information
                    </div>
                    <div className="mb-4 text-accent">
                        Feel free to reach out by email, connect with me on
                        social media, or send a message through the{" "}
                        <a
                            href="/contact"
                            className="text-primary hover:underline"
                        >
                            contact form.
                        </a>
                    </div>
                    <div className="text-accent">
                        E:
                        <span className="text-primary ml-1">
                            diego.salazar.ic@gmail.com
                        </span>
                    </div>
                </motion.div>
                <motion.div
                    className="col-span-3 col-start-10"
                    variants={itemVariants}
                >
                    <div className="text-primary mb-5 text-lg font-semibold">
                        Follow me on
                    </div>
                    <motion.div
                        className="text-primary space-y-1.5"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.div variants={linkVariants}>
                            <a
                                href="https://www.linkedin.com/in/di3gosl/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline underline-offset-4"
                            >
                                LinkedIn
                            </a>
                        </motion.div>
                        <motion.div variants={linkVariants}>
                            <a
                                href="https://github.com/di3gosl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline underline-offset-4"
                            >
                                GitHub
                            </a>
                        </motion.div>
                        <motion.div variants={linkVariants}>
                            <a
                                href="https://www.behance.net/di3gosl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline underline-offset-4"
                            >
                                Behance
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="col-span-12 text-accent text-sm text-center mt-6"
                    variants={itemVariants}
                >
                    Copyright © 2025 Diego Salazar
                </motion.div>
            </motion.div>
        </motion.footer>
    );
}
