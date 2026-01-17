"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { containerVariants, naturalEase } from "@/lib/animations";
import ScrollIndicator from "@/components/ScrollIndicator";

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

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: naturalEase,
        },
    },
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
            <div className="container min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
                {/* Left Content */}
                <motion.div
                    className="space-y-10 mt-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="space-y-2" variants={itemVariants}>
                        <p className="text-sm tracking-[0.4em] uppercase text-accent">
                            Diego Salazar
                        </p>
                        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-primary">
                            Full-Stack Developer
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-lg md:text-xl leading-relaxed text-accent"
                        variants={itemVariants}
                    >
                        Over the past 10+ years, I&apos;ve built scalable web
                        applications, SaaS platforms, and AI-driven automation
                        systems using Next.js, React, Node.js, PHP, AWS, and
                        modern API-based architectures.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap items-center gap-6 text-base font-semibold"
                        variants={itemVariants}
                    >
                        <Link
                            href="/about"
                            className="hover:underline underline-offset-4 transition-all cursor-pointer flex items-center"
                        >
                            Read more about me
                            <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="relative w-full h-[500px] lg:h-[800px] order-first lg:order-last self-end"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/hero-image.png"
                            alt="Diego Salazar - Full-Stack Developer"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent via-80% to-background pointer-events-none" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <ScrollIndicator />
        </section>
    );
}
