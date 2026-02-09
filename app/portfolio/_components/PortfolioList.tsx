"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { naturalEase } from "@/lib/animations";
import PortfolioCard from "@/components/PortfolioCard";
import { ProjectCard } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { Funnel } from "lucide-react";

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: naturalEase },
    },
};

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

const additionalInfoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.8,
            ease: naturalEase,
        },
    },
};

const filterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.3,
            ease: naturalEase,
        },
    },
};

interface PortfolioListProps {
    projects: ProjectCard[];
    tags: { id: string; tag: string; kind: string }[];
}

export default function PortfolioList({ projects, tags }: PortfolioListProps) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const filteredProjects = useMemo(() => {
        if (selectedTags.length === 0) return projects;

        return projects.filter((project) => {
            const projectTagIds = project.tags.map((t) => t.tag.id);
            return selectedTags.every((tagId) => projectTagIds.includes(tagId));
        });
    }, [projects, selectedTags]);

    const toggleTag = (tagId: string) => {
        setSelectedTags((prev) =>
            prev.includes(tagId)
                ? prev.filter((id) => id !== tagId)
                : [...prev, tagId],
        );
    };

    const clearFilters = () => {
        setSelectedTags([]);
    };

    return (
        <div className="container mx-auto">
            {/* Header with animation */}
            <motion.div
                className="mb-8 md:mb-12 space-y-4"
                variants={headerVariants}
                initial="hidden"
                animate="visible"
            >
                <p className="text-sm tracking-[0.4em] uppercase text-accent">
                    Featured Work
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                    Portfolio
                </h1>
                <p className="text-lg md:text-xl text-accent max-w-2xl">
                    A selection of projects showcasing full-stack development,
                    AI integration, and scalable system architecture
                </p>
            </motion.div>

            {/* Filters */}
            {tags.length > 0 && (
                <motion.div
                    className="mb-8 md:mb-12"
                    variants={filterVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm font-medium text-accent flex items-center gap-1.5">
                            <Funnel className="w-4 h-4 inline-block" /> Filter
                            by:
                        </span>
                        {tags.map((tag) => (
                            <Badge
                                key={tag.id}
                                variant={
                                    selectedTags.includes(tag.id)
                                        ? "default"
                                        : "outline"
                                }
                                className="cursor-pointer transition-all hover:scale-105"
                                onClick={() => toggleTag(tag.id)}
                            >
                                {tag.tag}
                            </Badge>
                        ))}
                        {selectedTags.length > 0 && (
                            <button
                                onClick={clearFilters}
                                className="text-sm text-accent hover:text-primary underline underline-offset-4 transition-colors cursor-pointer"
                            >
                                Clear all
                            </button>
                        )}
                    </div>
                    {selectedTags.length > 0 && (
                        <p className="text-sm text-accent mt-3">
                            Showing {filteredProjects.length} of{" "}
                            {projects.length} projects
                        </p>
                    )}
                </motion.div>
            )}

            {/* Projects Grid with stagger animation */}
            <motion.div
                key={selectedTags.join("-")}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12">
                        <p className="text-lg text-accent">
                            No projects match the selected filters.
                        </p>
                    </div>
                )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
                className="mt-16 md:mt-24 text-center"
                variants={additionalInfoVariants}
                initial="hidden"
                animate="visible"
            >
                <p className="text-lg text-accent max-w-3xl mx-auto mb-6">
                    These projects represent only a few of my work. Many
                    projects I&apos;ve worked on are under NDA and cannot be
                    publicly shared. I&apos;ve delivered solutions for startups,
                    enterprises, and agencies across e-commerce, SaaS, fintech,
                    and automation domains.
                </p>
            </motion.div>
        </div>
    );
}
