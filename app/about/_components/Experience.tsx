"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { containerVariants, naturalEase } from "@/lib/animations";
import { Briefcase } from "lucide-react";
import { EXPRERIENCE } from "@/data/experience";

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: naturalEase },
    },
};

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

export default function Experience() {
    const experienceRef = useRef(null);
    const isExperienceInView = useInView(experienceRef, {
        once: true,
        amount: 0.1,
    });

    return (
        <section ref={experienceRef} className="py-24 px-6 md:px-12">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-12 space-y-4"
                    variants={headerVariants}
                    initial="hidden"
                    animate={isExperienceInView ? "visible" : "hidden"}
                >
                    <p className="text-sm tracking-[0.4em] uppercase text-accent">
                        Career Journey
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Professional Experience
                    </h2>
                    <p className="text-lg md:text-xl text-accent max-w-4xl leading-relaxed">
                        A career spent designing and building web applications,
                        SaaS platforms, and e-commerce solutions for companies
                        in Mexico and the United States.
                    </p>
                </motion.div>

                {/* Experience Entries */}
                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isExperienceInView ? "visible" : "hidden"}
                >
                    {EXPRERIENCE.map((job) => (
                        <motion.article
                            key={job.company}
                            className="flex gap-4 p-4 border-l-4 border-primary bg-white rounded-r-lg hover:shadow-md transition-shadow"
                            variants={itemVariants}
                        >
                            <div className="shrink-0">
                                <Briefcase
                                    className="w-6 h-6 text-primary mt-1"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-primary">
                                    {job.role}
                                </h3>
                                <p className="text-base font-medium text-secondary">
                                    {job.company}
                                </p>
                                <p className="text-sm text-accent mb-2">
                                    {job.startDate} - {job.endDate} ·{" "}
                                    {job.duration}
                                </p>
                                <p className="text-sm text-accent">
                                    {job.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
