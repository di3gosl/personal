"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { ProjectDetail } from "@/types/projectDetails";
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

interface ProjectHeroProps {
    project: ProjectDetail;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
    return (
        <section className="relative md:min-h-screen flex items-center justify-center pt-24 md:pt-0 pb-16 px-6 md:px-12 bg-linear-to-b from-background to-light/40">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Metadata */}
                    <motion.div
                        className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 text-sm text-accent"
                        variants={itemVariants}
                    >
                        <span className="tracking-[0.3em] uppercase">
                            {project.year}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-accent hidden md:block" />
                        <span>{project.type}</span>
                        <span className="w-1 h-1 rounded-full bg-accent hidden md:block" />
                        <span className="px-3 py-1 border border-accent/30 rounded-full">
                            {project.status}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight"
                        variants={itemVariants}
                    >
                        {project.title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-accent max-w-3xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        {project.hero.shortDescription}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-4 pt-4"
                        variants={itemVariants}
                    >
                        {project.hero.ctas.map((cta, index) => {
                            const isOutline = cta.variant === "outline";
                            const Icon = cta.label
                                .toLowerCase()
                                .includes("repo")
                                ? Github
                                : ExternalLink;

                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        href={cta.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                        inline-flex items-center gap-2 px-6 py-2 rounded-lg
                                        font-medium transition-all duration-300 border-2 border-primary
                                        ${
                                            isOutline
                                                ? "text-primary hover:bg-primary hover:text-white"
                                                : "bg-primary text-white hover:bg-secondary"
                                        }
                                    `}
                                    >
                                        {cta.label}
                                        <Icon className="w-4 h-4" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Badges */}
                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-2 pt-8"
                        variants={itemVariants}
                    >
                        {project.badges.map((badge) => (
                            <span
                                key={badge}
                                className="px-3 py-1 text-xs font-medium bg-light/60 text-primary rounded-full border border-primary/10"
                            >
                                {badge}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <ScrollIndicator />
        </section>
    );
}
