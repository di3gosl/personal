"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { containerVariants, naturalEase } from "@/src/lib/animations";

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
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const skillCategories = [
        {
            title: "Frontend",
            cols: 1,
            skills: [
                { name: "React" },
                { name: "Next.js" },
                { name: "TypeScript" },
                { name: "Tailwind CSS" },
                { name: "Shadcn/ui" },
                { name: "Redux" },
                { name: "Bootstrap" },
                { name: "CSS3" },
            ],
        },
        {
            title: "Backend",
            cols: 1,
            skills: [
                { name: "Node.js" },
                { name: "PHP" },
                { name: "Yii Framework" },
                { name: "REST APIs" },
                { name: "Python" },
                { name: "GraphQL" },
            ],
        },
        {
            title: "Cloud & DevOps",
            cols: 1,
            skills: [
                { name: "AWS EC2" },
                { name: "AWS RDS" },
                { name: "AWS S3" },
                { name: "AWS Amplify" },
                { name: "AWS Route 53" },
                { name: "AWS Lambda" },
                { name: "Linux" },
                { name: "Nginx" },
                { name: "Apache" },
            ],
        },
        {
            title: "Databases",
            cols: 1,
            skills: [
                { name: "MySQL" },
                { name: "MariaDB" },
                { name: "MongoDB" },
                { name: "SQLite" },
                { name: "Supabase" },
            ],
        },
        {
            title: "AI",
            cols: 1,
            skills: [
                { name: "OpenAI" },
                { name: "Anthropic Claude" },
                { name: "Google Gemini" },
                { name: "Chatbots & Assistants" },
                { name: "AI-driven automation" },
                { name: "GitHub Copilot" },
                { name: "Agentic Frameworks" },
                { name: "RAG" },
            ],
        },
        {
            title: "E-commerce",
            cols: 1,
            skills: [
                { name: "WordPress" },
                { name: "WordPress Plugins & Themes" },
                { name: "Shopify" },
                { name: "Shopware" },
                { name: "Printify" },
                { name: "Printful" },
                { name: "Gooten" },
                { name: "Stripe" },
                { name: "QuickBooks" },
            ],
        },
        {
            title: "Other Technologies",
            cols: 2,
            skills: [
                { name: "Unity Videogames" },
                { name: "Android" },
                { name: "Git" },
                { name: "GitHub" },
                { name: "Bitbucket" },
                { name: "C / C++" },
                { name: "Assembly" },
                { name: "Microcontrollers (Microchip, ARM, Espressif)" },
                { name: "LabVIEW" },
                { name: "Electronics" },
            ],
        },
    ];

    return (
        <section
            ref={ref}
            className="min-h-screen flex items-center justify-center pt-18 pb-36 px-6 md:px-12"
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
                    <p className="text-lg md:text-xl text-accent max-w-2xl">
                        A comprehensive toolkit built over 10+ years of hands-on
                        development
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {skillCategories.map((category, idx) => (
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
                                        className="px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-lg border border-light hover:bg-light transition-colors cursor-default"
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
                    <p className="text-lg text-accent text-center max-w-4xl mx-auto">
                        Beyond these core technologies, I have a solid
                        background in software architecture, scalable system
                        design, and AI-driven automation. I&apos;m comfortable
                        owning projects end-to-end, from planning and API design
                        to deployment on AWS, while collaborating with
                        distributed teams and working within modern agile
                        workflows.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
