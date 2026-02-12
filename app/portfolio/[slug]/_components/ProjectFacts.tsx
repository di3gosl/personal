"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, Calendar, Monitor, Users } from "lucide-react";
import type { ProjectWithRelations } from "../../../../types/projects-with-relations";
import { containerVariants, naturalEase } from "@/lib/animations";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: naturalEase,
        },
    },
};

interface ProjectFactsProps {
    project: ProjectWithRelations;
}

export default function ProjectFacts({ project }: ProjectFactsProps) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const facts = [
        {
            icon: Briefcase,
            label: "Role",
            value: project.role,
        },
        {
            icon: Calendar,
            label: "Timeline",
            value: project.year,
        },
        {
            icon: Monitor,
            label: "Platform",
            value: project.platform,
        },
        {
            icon: Users,
            label: "Team",
            value: project.team,
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-16 md:py-24 px-6 md:px-12 bg-light/40 border-y border-primary/5"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {facts.map((fact) => {
                        const Icon = fact.icon;
                        return (
                            <motion.div
                                key={fact.label}
                                className="text-center space-y-3"
                                variants={itemVariants}
                            >
                                <div className="flex justify-center">
                                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-accent mb-1">
                                        {fact.label}
                                    </p>
                                    <p className="font-semibold text-primary">
                                        {fact.value}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
