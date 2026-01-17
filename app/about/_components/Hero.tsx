"use client";

import { motion } from "motion/react";
import { Code2, Heart } from "lucide-react";
import { containerVariants, naturalEase } from "@/lib/animations";
import { HIGHLIGHTS } from "@/data/highlights";
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

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 pb-24 px-6 md:px-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-8">
                        <motion.div
                            className="space-y-12"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Name and Title */}
                            <motion.div
                                className="space-y-4"
                                variants={itemVariants}
                            >
                                <p className="text-sm tracking-[0.4em] uppercase text-accent">
                                    About Me
                                </p>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
                                    Diego Salazar
                                </h1>
                                <p className="text-2xl md:text-3xl text-accent">
                                    Full-Stack Developer
                                </p>
                            </motion.div>

                            {/* Professional Summary */}
                            <motion.div
                                className="max-w-4xl space-y-6"
                                variants={itemVariants}
                            >
                                <div className="flex items-start gap-4">
                                    <Code2
                                        className="w-8 h-8 text-primary shrink-0 mt-1"
                                        aria-hidden="true"
                                    />
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-primary">
                                            Professional Summary
                                        </h2>
                                        <p className="text-lg leading-relaxed text-accent">
                                            I&apos;m Diego Salazar, a full-stack
                                            developer with a Master&apos;s
                                            degree in Computer Science. I focus
                                            on building clear, efficient, and
                                            meaningful digital experiences. I
                                            specialize in scalable web
                                            applications, SaaS platforms, and
                                            AI-powered systems that help
                                            businesses bring their ideas to
                                            life.
                                        </p>
                                        <p className="text-lg leading-relaxed text-accent">
                                            With over a decade of experience
                                            across frontend, backend, and cloud
                                            infrastructure, I enjoy creating
                                            solutions that are fast, reliable,
                                            and easy to maintain.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Personal Summary */}
                            <motion.div
                                className="max-w-4xl space-y-6"
                                variants={itemVariants}
                            >
                                <div className="flex items-start gap-4">
                                    <Heart
                                        className="w-8 h-8 text-primary shrink-0 mt-1"
                                        aria-hidden="true"
                                    />
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-bold text-primary">
                                            Beyond the Code
                                        </h2>
                                        <p className="text-lg leading-relaxed text-accent">
                                            When I&apos;m not coding,
                                            you&apos;ll find me lacing up my
                                            running shoes or on the soccer
                                            field. Running helps me clear my
                                            mind and push my limits, while
                                            soccer brings out my competitive
                                            spirit and love for teamwork. Both
                                            activities remind me that
                                            consistency, discipline, and
                                            collaboration are just as important
                                            in life as they are in Software
                                            development.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="lg:col-span-4">
                        <aside className="w-full">
                            <motion.div
                                className="space-y-6"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.div variants={itemVariants}>
                                    <h2 className="text-sm tracking-[0.3em] uppercase text-accent/70 mb-6">
                                        At a Glance
                                    </h2>
                                    <ul className="space-y-4">
                                        {HIGHLIGHTS.map((item) => (
                                            <motion.li
                                                key={item.label}
                                                className="border-l-2 border-accent/20 pl-4 py-2"
                                                variants={itemVariants}
                                            >
                                                <div className="space-y-1">
                                                    <p className="text-xs uppercase tracking-wider text-accent/60">
                                                        {item.label}
                                                    </p>
                                                    <p className="text-sm font-medium text-primary">
                                                        {item.value}
                                                    </p>
                                                </div>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        </aside>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <ScrollIndicator />
        </section>
    );
}
