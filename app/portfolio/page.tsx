"use client";

import { motion } from "motion/react";
import { naturalEase } from "@/lib/animations";
import PortfolioCard from "@/components/PortfolioCard";

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

export default function Portfolio() {
    const projects = [
        {
            title: "AI-Powered Chatbot System",
            description:
                "I built my personal portfolio website using Next.js, TypeScript, TailwindCSS, and Framer Motion, with Supabase for backend services and data management. The site showcases my work with a clean, minimal design and subtle animations for a smooth user experience.",
            technologies: [
                "Next.js",
                "React",
                "Supabase",
                "TypeScript",
                "TailwindCSS",
                "Framer Motion",
                "shadcn/ui",
            ],
            year: "2025",
            image: "/images/portfolio/personal-preview.png",
            label: "Public",
        },
        {
            title: "BioFractal",
            description:
                "I developed an informational website for BioFractal using a modern full-stack architecture with React, Redux, Node.js, MySQL, and PHP. The frontend was built with React and Bootstrap, complemented by custom HTML and CSS for layout and styling.",
            technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe"],
            year: "2024",
            image: "/images/portfolio/biofractal-preview.png",
            label: "",
        },
        {
            title: "WordPress Plugin Suite",
            description:
                "Created custom WooCommerce plugins for print-on-demand automation, integrating multiple fulfillment providers and payment gateways.",
            technologies: ["PHP", "WordPress", "WooCommerce", "REST APIs"],
            year: "2023",
            image: "",
            label: "",
        },
        {
            title: "Real-time Analytics Dashboard",
            description:
                "Built a high-performance analytics platform processing millions of events daily with real-time visualization and reporting capabilities.",
            technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
            year: "2022",
            image: "",
            label: "",
        },
        {
            title: "Inventory Management System",
            description:
                "Developed a comprehensive inventory tracking solution with multi-warehouse support, barcode scanning, and QuickBooks integration.",
            technologies: ["Next.js", "TypeScript", "MySQL", "Node.js"],
            year: "2022",
            image: "",
            label: "",
        },
        {
            title: "Mobile IoT Application",
            description:
                "Created Android application for real-time monitoring and control of IoT devices using custom firmware on ESP32 microcontrollers.",
            technologies: ["Android", "C++", "ESP32", "MQTT", "Firebase"],
            year: "2021",
            image: "",
            label: "",
        },
    ];

    return (
        <>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <section className="min-h-screen pt-32 pb-24 px-6 md:px-12">
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
                                <PortfolioCard key={idx} project={project} />
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
        </>
    );
}
