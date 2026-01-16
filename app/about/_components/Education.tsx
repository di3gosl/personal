"use client";

import { motion } from "motion/react";
import { containerVariants, naturalEase } from "@/lib/animations";
import { GraduationCap, School } from "lucide-react";

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

export default function Education() {
    return (
        <section className="py-24 px-6 md:px-12">
            <div className="container mx-auto">
                <motion.div
                    className="mb-12 space-y-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: naturalEase }}
                >
                    <p className="text-sm tracking-[0.4em] uppercase text-accent">
                        Education
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Academic Background
                    </h2>
                    <p className="text-lg md:text-xl text-accent max-w-3xl leading-relaxed">
                        Academic foundations in computing, algorithms, and
                        Software Engineering.
                    </p>
                </motion.div>

                <motion.div
                    className="space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Master's Degree */}
                    <motion.div className="relative" variants={itemVariants}>
                        <div className="flex items-start gap-4">
                            <GraduationCap className="w-8 h-8 text-primary shrink-0 mt-1" />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-primary">
                                    Master&apos;s Degree in Computer Science
                                </h3>
                                <p className="text-lg leading-relaxed text-accent">
                                    Universidad Autonoma de Yucatan (2012 -
                                    2016)
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bachelor's Degree */}
                    <motion.div className="relative" variants={itemVariants}>
                        <div className="flex items-start gap-4">
                            <School className="w-8 h-8 text-primary shrink-0 mt-1" />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-primary">
                                    Bachelor&apos;s Degree in Computing
                                    Engineering
                                </h3>
                                <p className="text-lg leading-relaxed text-accent">
                                    Universidad Autonoma de Yucatan (2005 -
                                    2011)
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
