"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import PortfolioCard from "@/src/components/PortfolioCard";
import { containerVariants, naturalEase } from "@/src/lib/animations";

export default function Portfolio() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
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
        <section
            ref={ref}
            className="min-h-screen flex items-center justify-center pt-36 pb-18"
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
                        Featured Work
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                        Portfolio
                    </h2>
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
                    animate={isInView ? "visible" : "hidden"}
                >
                    {projects.map((project, idx) => (
                        <PortfolioCard key={idx} project={project} />
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    className="mt-8 pt-12 text-center"
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
                    <p className="text-lg text-accent max-w-3xl mx-auto mb-6">
                        These projects represent a fraction of my work.
                        I&apos;ve delivered solutions for startups, enterprises,
                        and agencies across e-commerce, SaaS, fintech, and
                        automation domains.
                    </p>
                    <Link
                        href="/portfolio"
                        className="text-base font-semibold text-primary hover:underline underline-offset-4 transition-all cursor-pointer"
                    >
                        View All Projects →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
