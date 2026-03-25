"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { naturalEase } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
            ease: naturalEase,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: naturalEase,
        },
    },
};

export default function CallToAction() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-primary">
            <motion.div
                className="container mx-auto text-center max-w-3xl space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.p
                    className="text-sm tracking-[0.4em] uppercase text-light"
                    variants={itemVariants}
                >
                    Let&apos;s Build Something Great
                </motion.p>

                <motion.h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                    variants={itemVariants}
                >
                    Got a project in mind?
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-light leading-relaxed"
                    variants={itemVariants}
                >
                    Whether you need a full-stack application, a SaaS platform,
                    or an AI-powered solution — I&apos;d love to hear about it.
                </motion.p>

                <motion.div variants={itemVariants}>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-base px-8 py-4 rounded-full hover:bg-light transition-colors"
                    >
                        Get in Touch
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
