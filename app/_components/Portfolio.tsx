"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import { naturalEase } from "@/lib/animations";
import { PROJECTS } from "@/data/projects";
import { ArrowRight } from "lucide-react";

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: naturalEase, delay: 0.2 },
    },
};

export const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
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

export default function Portfolio() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const displayedProjects = isMobile ? PROJECTS.slice(0, 3) : PROJECTS;

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
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                        Portfolio
                    </h2>
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
                    {displayedProjects.map((project) => (
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
