"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import { naturalEase } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/types/project";

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: naturalEase, delay: 0.2 },
    },
};

const viewAllVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
};

export const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
            ease: naturalEase,
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

interface PortfolioProps {
    projects: ProjectCard[];
}

export default function Portfolio({ projects }: PortfolioProps) {
    const ref = useRef(null);
    const [amount, setAmount] = useState(0.1);

    useEffect(() => {
        const updateAmount = () => {
            setAmount(window.innerWidth < 768 ? 0.02 : 0.1);
        };

        updateAmount();
        window.addEventListener("resize", updateAmount);
        return () => window.removeEventListener("resize", updateAmount);
    }, []);

    const isInView = useInView(ref, { once: true, amount });

    return (
        <section
            ref={ref}
            className="flex items-center justify-center py-16 md:py-24 px-6 md:px-12 bg-light/40"
        >
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-16 space-y-4"
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <p className="text-sm tracking-[0.4em] uppercase text-accent">
                        Featured Work
                    </p>
                    <div className="flex items-end justify-between gap-4 flex-wrap">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                            Portfolio
                        </h2>
                        <motion.span
                            className="group"
                            variants={viewAllVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: {
                                    duration: 0.2,
                                    ease: naturalEase,
                                },
                            }}
                        >
                            <Link
                                href="/portfolio"
                                className="flex items-center gap-1.5 text-sm font-semibold border border-current rounded-full px-4 py-2 transition-colors mb-2 group-hover:bg-primary group-hover:text-white"
                            >
                                View All Projects
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.span>
                    </div>
                    <p className="text-lg md:text-xl text-accent max-w-2xl">
                        A selection of projects showcasing full-stack
                        development, AI integration, and scalable system
                        architecture
                    </p>
                </motion.div>

                {/* Projects Grid with stagger animation */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={gridVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {projects.map((project) => (
                        <PortfolioCard key={project.title} project={project} />
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    className="mt-8 pt-12 text-center"
                    variants={additionalInfoVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <p className="text-lg text-accent max-w-3xl mx-auto mb-6">
                        These projects represent a fraction of my work.
                        I&apos;ve delivered solutions for startups, enterprises,
                        and agencies across e-commerce, SaaS, fintech, and
                        automation domains.
                    </p>
                    <Link
                        href="/portfolio"
                        className="text-base font-semibold text-primary hover:underline underline-offset-4 transition-all cursor-pointer flex items-center justify-center"
                    >
                        View All Projects
                        <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
