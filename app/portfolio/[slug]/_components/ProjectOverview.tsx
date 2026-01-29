"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Target, Lightbulb, User } from "lucide-react";
import type { Project } from "@/types/project";
import { containerVariants, naturalEase } from "@/lib/animations";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: naturalEase,
        },
    },
};

interface ProjectOverviewProps {
    project: Project;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const overviewItems = [
        {
            icon: Target,
            title: "The Goal",
            content: project.goal,
        },
        {
            icon: Lightbulb,
            title: "The Challenge",
            content: project.challenge,
        },
        {
            icon: User,
            title: "My Role",
            content: project.roleDescription,
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-16 md:py-24 px-6 md:px-12 bg-background"
        >
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <motion.div
                    className="mb-8 md:mb-16 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.6, ease: naturalEase }}
                >
                    <p className="text-sm tracking-[0.4em] uppercase text-accent mb-4">
                        Project Overview
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Understanding the Project
                    </h2>
                </motion.div>

                {/* Overview Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 2xl:gap-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {overviewItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                className="space-y-4"
                                variants={itemVariants}
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary">
                                    {item.title}
                                </h3>
                                <p className="text-accent leading-relaxed">
                                    {item.content}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
