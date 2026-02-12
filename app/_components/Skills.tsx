"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { naturalEase } from "@/lib/animations";
import Link from "next/link";
import { SKILLS } from "@/data/skills";
import { ArrowRight } from "lucide-react";

export const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2,
            ease: naturalEase,
        },
    },
};

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: naturalEase },
    },
};

const skillBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
};

const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: naturalEase },
    },
};

export default function Skills() {
    const skillsRef = useRef(null);
    const isSkillsInView = useInView(skillsRef, { once: true, amount: 0.2 });

    return (
        <section ref={skillsRef} className="py-16 md:py-24 px-6 md:px-12">
            <div className="container mx-auto">
                <motion.div
                    className="mb-12 space-y-4"
                    variants={headerVariants}
                    initial="hidden"
                    animate={isSkillsInView ? "visible" : "hidden"}
                >
                    <p className="text-sm tracking-[0.4em] uppercase text-accent">
                        Technical Skills
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Core Competencies
                    </h2>
                    <p className="text-lg text-accent max-w-2xl">
                        Key technologies and tools I use to build modern web
                        applications
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap gap-3 max-w-6xl mx-auto items-center justify-center"
                    variants={skillsContainerVariants}
                    initial="hidden"
                    animate={isSkillsInView ? "visible" : "hidden"}
                >
                    {SKILLS.map((skill) => (
                        <motion.span
                            key={skill}
                            className="px-5 py-3 bg-white text-gray-800 text-base font-medium rounded-lg border border-light hover:bg-primary hover:text-white transition-colors cursor-default"
                            variants={skillBadgeVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: {
                                    duration: 0.2,
                                    ease: naturalEase,
                                },
                            }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-12 text-center space-y-4"
                    variants={footerVariants}
                    initial="hidden"
                    animate={isSkillsInView ? "visible" : "hidden"}
                >
                    <p className="text-lg text-accent text-center max-w-4xl mx-auto">
                        This is just a snapshot of my technical toolkit.
                        I&apos;m always learning and adapting to new
                        technologies to deliver the best solutions for every
                        project.
                    </p>
                    <Link
                        href="/about"
                        className="text-base font-semibold text-primary hover:underline underline-offset-4 transition-all cursor-pointer flex items-center justify-center mt-6"
                    >
                        View All My Skills
                        <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
