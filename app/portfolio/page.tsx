"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { naturalEase } from "@/src/lib/utils";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: naturalEase,
        },
    },
};

export default function Portfolio() {
    const projects = [
        {
            title: "E-commerce SaaS Platform",
            description:
                "Built a scalable multi-tenant e-commerce platform with custom integrations for Shopify, Printify, and Stripe. Handles 10K+ daily transactions.",
            technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe"],
            year: "2024",
            image: "/images/portfolio/biofractal-preview.png",
        },
        {
            title: "AI-Powered Chatbot System",
            description:
                "Developed an intelligent customer service automation platform using OpenAI and Claude APIs with RAG for context-aware responses.",
            technologies: [
                "React",
                "Python",
                "OpenAI",
                "MongoDB",
                "AWS Lambda",
            ],
            year: "2023",
            image: "",
        },
        {
            title: "WordPress Plugin Suite",
            description:
                "Created custom WooCommerce plugins for print-on-demand automation, integrating multiple fulfillment providers and payment gateways.",
            technologies: ["PHP", "WordPress", "WooCommerce", "REST APIs"],
            year: "2023",
            image: "",
        },
        {
            title: "Real-time Analytics Dashboard",
            description:
                "Built a high-performance analytics platform processing millions of events daily with real-time visualization and reporting capabilities.",
            technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
            year: "2022",
            image: "",
        },
        {
            title: "Inventory Management System",
            description:
                "Developed a comprehensive inventory tracking solution with multi-warehouse support, barcode scanning, and QuickBooks integration.",
            technologies: ["Next.js", "TypeScript", "MySQL", "Node.js"],
            year: "2022",
            image: "",
        },
        {
            title: "Mobile IoT Application",
            description:
                "Created Android application for real-time monitoring and control of IoT devices using custom firmware on ESP32 microcontrollers.",
            technologies: ["Android", "C++", "ESP32", "MQTT", "Firebase"],
            year: "2021",
            image: "",
        },
    ];

    return (
        <>
            <Header />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <section className="min-h-screen pt-32 pb-24">
                    <div className="container mx-auto px-4">
                        {/* Header with animation */}
                        <motion.div
                            className="mb-16 space-y-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: naturalEase,
                            }}
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center text-sm text-accent hover:text-primary transition-colors mb-4"
                            >
                                <span>← Back to Home</span>
                            </Link>
                            <p className="text-sm tracking-[0.4em] uppercase text-accent">
                                Featured Work
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                                Portfolio
                            </h1>
                            <p className="text-lg md:text-xl text-accent max-w-2xl">
                                A selection of projects showcasing full-stack
                                development, AI integration, and scalable system
                                architecture
                            </p>
                        </motion.div>

                        {/* Projects Grid with stagger animation */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {projects.map((project, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.3 },
                                    }}
                                    className="bg-white border border-light rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                                >
                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        {/* Project Image */}
                                        {project.image && (
                                            <motion.div
                                                className="relative w-full h-64 bg-gray-100 rounded-md overflow-hidden"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    className="object-contain"
                                                />
                                            </motion.div>
                                        )}

                                        {/* Year Badge */}
                                        <div className="flex justify-between items-start">
                                            <span className="text-xs font-semibold text-accent tracking-wider uppercase">
                                                {project.year}
                                            </span>
                                        </div>

                                        {/* Project Title */}
                                        <h3 className="text-xl font-bold text-primary">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-accent leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.technologies.map(
                                                (tech, techIdx) => (
                                                    <span
                                                        key={techIdx}
                                                        className="px-3 py-1 bg-background text-secondary text-xs font-medium rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Additional Info */}
                        <motion.div
                            className="mt-16 pt-12 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <p className="text-lg text-accent max-w-3xl mx-auto mb-6">
                                These projects represent a fraction of my work.
                                I&apos;ve delivered solutions for startups,
                                enterprises, and agencies across e-commerce,
                                SaaS, fintech, and automation domains.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </motion.main>
            <Footer />
        </>
    );
}
