"use client";

import { motion } from "motion/react";
import { naturalEase } from "../lib/animations";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ProjectCard } from "@/types/project";

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
    project: ProjectCard;
}

export default function PortfolioCard({ project }: Props) {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{
                y: -8,
                transition: { duration: 0.3 },
            }}
            className="bg-gray-100 border border-light rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Project Image */}
                {project.image && (
                    <motion.div
                        className="relative w-full h-52 bg-gray-100 rounded-md overflow-hidden"
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
                    <span className="text-sm md:text-xs font-semibold text-accent tracking-wider uppercase">
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
                    {!project.label && <div className="h-6"></div>}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-primary">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-sm text-accent leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag.tag.id}
                            className="px-3 py-1 bg-background text-secondary text-sm md:text-xs font-medium rounded-full"
                        >
                            {tag.tag.tag}
                        </span>
                    ))}
                </div>

                {/* View Details Button */}
                <div className="flex justify-center pt-6 border-t border-gray-200">
                    <Button asChild className="group">
                        <Link href={`/portfolio/${project.slug}`}>
                            View Details
                            <ArrowRight className="w-4 h-4 text-current transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
