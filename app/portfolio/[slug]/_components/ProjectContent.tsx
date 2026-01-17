"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
    CheckCircle2,
    Code2,
    Palette,
    TrendingUp,
    Sparkles,
} from "lucide-react";
import type { ProjectDetail } from "@/types/projectDetails";
import { containerVariants, naturalEase } from "@/lib/animations";
import { Separator } from "@/components/ui/separator";

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

interface ProjectContentProps {
    project: ProjectDetail;
}

export default function ProjectContent({ project }: ProjectContentProps) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-light/40">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    className="space-y-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* What I Built */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <div className="flex items-center gap-3">
                            <Code2 className="w-6 h-6 text-primary" />
                            <h2 className="text-3xl font-bold text-primary">
                                What I Built
                            </h2>
                        </div>
                        <ul className="space-y-3">
                            {project.whatIBuilt.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-accent"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                    <span className="leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <Separator className="bg-primary/10" />

                    {/* Tech Stack */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <div className="flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-primary" />
                            <h2 className="text-3xl font-bold text-primary">
                                Tech Stack
                            </h2>
                        </div>
                        <div className="space-y-6">
                            {project.techStack.map((category) => (
                                <div
                                    key={category.category}
                                    className="space-y-3"
                                >
                                    <h3 className="text-lg font-semibold text-primary">
                                        {category.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 bg-background text-primary rounded-lg text-sm font-medium border border-primary/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <Separator className="bg-primary/10" />

                    {/* Design Decisions */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <div className="flex items-center gap-3">
                            <Palette className="w-6 h-6 text-primary" />
                            <h2 className="text-3xl font-bold text-primary">
                                {project.designDecisions.title}
                            </h2>
                        </div>
                        <p className="text-accent leading-relaxed mb-4">
                            These decisions were intentional to ensure the site
                            feels professional, calm, and easy to navigate:
                        </p>
                        <ul className="space-y-3">
                            {project.designDecisions.items.map(
                                (item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-accent"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <span className="leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ),
                            )}
                        </ul>
                    </motion.div>

                    <Separator className="bg-primary/10" />

                    {/* Results & Learnings */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <div className="flex items-center gap-3">
                            <TrendingUp className="w-6 h-6 text-primary" />
                            <h2 className="text-3xl font-bold text-primary">
                                Results & Learnings
                            </h2>
                        </div>
                        <p className="text-accent leading-relaxed text-lg">
                            {project.results}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
