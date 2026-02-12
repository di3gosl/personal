"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { naturalEase } from "@/lib/animations";
import PortfolioCard from "@/components/PortfolioCard";
import { ProjectCard } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Funnel, ArrowUpDown } from "lucide-react";

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
            staggerChildren: 0.08,
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
    const [sortBy, setSortBy] = useState<"relevance" | "year">("relevance");

    const filteredAndSortedProjects = useMemo(() => {
        // First, filter by tags
        let filtered = projects;
        if (selectedTags.length > 0) {
            filtered = projects.filter((project) => {
                const projectTagIds = project.tags.map((t) => t.tag.id);
                return selectedTags.every((tagId) =>
                    projectTagIds.includes(tagId),
                );
            });
        }

        // Then, sort
        const sorted = [...filtered].sort((a, b) => {
            if (sortBy === "relevance") {
                return b.order - a.order; // Higher order first
            } else {
                return b.year - a.year; // More recent year first
            }
        });

        return sorted;
    }, [projects, selectedTags, sortBy]);

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

            {/* Filters and Sorting */}
            <motion.div
                className="mb-4 md:mb-6 space-y-4"
                variants={filterVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Tag Filters */}
                {tags.length > 0 && (
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
                )}

                {/* Sorting */}
                <div className="flex flex-wrap items-center gap-3 justify-between mt-5">
                    <div>
                        {selectedTags.length > 0 && (
                            <p className="text-sm text-accent">
                                Showing {filteredAndSortedProjects.length} of{" "}
                                {projects.length} projects
                            </p>
                        )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm font-medium text-accent flex items-center gap-1.5">
                            <ArrowUpDown className="w-4 h-4 inline-block" />{" "}
                            Sort by:
                        </span>
                        <Select
                            value={sortBy}
                            onValueChange={(value: "relevance" | "year") =>
                                setSortBy(value)
                            }
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="relevance">
                                    Relevance
                                </SelectItem>
                                <SelectItem value="year">Year</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </motion.div>

            {/* Projects Grid with stagger animation */}
            <motion.div
                key={`${selectedTags.join("-")}-${sortBy}`}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {filteredAndSortedProjects.length > 0 ? (
                    filteredAndSortedProjects.map((project) => (
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
