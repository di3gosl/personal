"use client";

import { motion } from "motion/react";
import { naturalEase } from "@/lib/animations";
import PortfolioCard from "@/components/PortfolioCard";
import { PROJECTS } from "@/data/projects";

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: naturalEase },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const additionalInfoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.8,
            ease: naturalEase,
        },
    },
};

export default function PortfolioPage() {
    return (
        <section className="pt-32 pb-24">
            <div className="container mx-auto">
                {/* Header with animation */}
                <motion.div
                    className="mb-16 space-y-4"
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <p className="text-sm tracking-[0.4em] uppercase text-accent">
                        Featured Work
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                        Portfolio
                    </h1>
                    <p className="text-lg md:text-xl text-accent max-w-2xl">
                        A selection of projects showcasing full-stack
                        development, AI integration, and scalable system
                        architecture
                    </p>
                </motion.div>

                {/* Projects Grid with stagger animation */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {PROJECTS.map((project) => (
                        <PortfolioCard key={project.title} project={project} />
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    className="mt-16 pt-12 text-center"
                    variants={additionalInfoVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <p className="text-lg text-accent max-w-3xl mx-auto mb-6">
                        These projects represent a fraction of my work.
                        I&apos;ve delivered solutions for startups, enterprises,
                        and agencies across e-commerce, SaaS, fintech, and
                        automation domains.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
