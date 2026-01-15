"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { naturalEase } from "../lib/animations";
import { Heart } from "lucide-react";
import Link from "next/link";

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

const linksContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
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
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
};

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <footer className="bg-background pb-6 px-6 md:px-12">
            <motion.div
                ref={ref}
                className={`container mx-auto text-primary grid grid-cols-12 border-t border-light pt-10 gap-4`}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div
                    className="col-span-12 md:col-span-5"
                    variants={itemVariants}
                >
                    <div className="text-primary mb-5 text-lg font-semibold">
                        Contact Information
                    </div>
                    <div className="mb-4 text-accent">
                        Feel free to reach out by email, connect with me on
                        social media, or send a message through the{" "}
                        <Link
                            href="/contact"
                            className="text-primary hover:underline"
                        >
                            contact form.
                        </Link>
                    </div>
                    <div className="text-accent">
                        E:
                        <span className="text-primary ml-1">
                            <a
                                href="mailto:diego.salazar.ic@gmail.com"
                                className="text-primary hover:underline underline-offset-4"
                            >
                                diego.salazar.ic@gmail.com
                            </a>
                        </span>
                    </div>
                </motion.div>
                <motion.div
                    className="col-span-12 md:col-span-3 md:col-start-10"
                    variants={itemVariants}
                >
                    <div className="text-primary mb-5 text-lg font-semibold">
                        Follow me on
                    </div>
                    <motion.div
                        className="text-primary space-y-1"
                        variants={linksContainerVariants}
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
                        <motion.div variants={linkVariants}>
                            <Link
                                href="/contact"
                                className="text-primary hover:underline underline-offset-4"
                            >
                                Contact
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="col-span-12 text-accent text-sm text-center mt-6"
                    variants={itemVariants}
                >
                    <div className="mb-1">
                        Copyright © {new Date().getFullYear()} Diego Salazar
                    </div>
                    <div className="flex justify-center items-center">
                        Built with{" "}
                        <Heart className="w-4.5 h-4.5 text-accent mx-1 fill-current" />
                        in Merida, Mexico.
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
}
