"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { containerVariants, naturalEase } from "@/lib/animations";
import { SKILL_CATEGORIES } from "@/data/skills";

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: naturalEase,
        },
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

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section
            ref={ref}
            className="min-h-screen flex items-center justify-center py-16 md:py-24 px-6 md:px-12 bg-light/40"
        >
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-16 space-y-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{
                        duration: 0.6,
                        ease: naturalEase,
                    }}
                >
                    <p className="text-sm tracking-[0.4em] uppercase text-accent">
                        My Expertise
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg md:text-xl text-accent max-w-2xl leading-relaxed">
                        A comprehensive toolkit built over 10+ years of hands-on
                        development
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {SKILL_CATEGORIES.map((category, idx) => (
                        <motion.div
                            key={idx}
                            className={`space-y-6 col-span-${category.cols}`}
                            variants={itemVariants}
                        >
                            <h3 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2">
                                {category.title}
                            </h3>
                            <div className={`flex flex-wrap gap-2`}>
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.span
                                        key={skillIdx}
                                        className="px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-lg border border-light hover:bg-primary hover:text-white transition-colors cursor-default"
                                        variants={skillBadgeVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.2 },
                                        }}
                                    >
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    className="mt-8 pt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                        duration: 0.6,
                        delay: 0.8,
                        ease: naturalEase,
                    }}
                >
                    <p className="text-lg text-accent text-center max-w-6xl mx-auto">
                        Beyond these core technologies, I have a strong
                        background in Software architecture, scalable system
                        design, and building reliable automation workflows.
                        I&apos;m comfortable owning projects end-to-end, from
                        planning and API design to deployment across cloud
                        platforms or custom servers, while collaborating with
                        distributed teams and working within modern agile
                        environments.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
