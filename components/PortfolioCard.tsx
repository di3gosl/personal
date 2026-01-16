"use client";

import { motion } from "motion/react";
import { naturalEase } from "../lib/animations";
import Image from "next/image";
import type { Project } from "@/types/portfolio";

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

interface Props {
    project: Project;
}

export default function PortfolioCard({ project }: Props) {
    return (
        <motion.div
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

                {/* Year Badge and Label */}
                <div className="flex justify-between items-start gap-2">
                    <span className="text-xs font-semibold text-accent tracking-wider uppercase">
                        {project.year}
                    </span>
                    {project.label && (
                        <motion.span
                            className="px-2.5 py-1 bg-primary text-white text-xs font-semibold rounded-full uppercase tracking-wide"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                        >
                            {project.label}
                        </motion.span>
                    )}
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
                    {project.technologies.map((tech, techIdx) => (
                        <span
                            key={techIdx}
                            className="px-3 py-1 bg-background text-secondary text-xs font-medium rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
