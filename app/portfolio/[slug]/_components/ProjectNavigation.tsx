"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid3x3 } from "lucide-react";
import type { Project } from "@/types/project";
import { naturalEase } from "@/lib/animations";

interface ProjectNavigationProps {
    navigation: Project["navigation"];
}

export default function ProjectNavigation({
    navigation,
}: ProjectNavigationProps) {
    return (
        <section className="py-8 md:py-16 px-6 md:px-12 bg-background border-t border-primary/10">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Previous Project */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: naturalEase }}
                    >
                        {navigation?.previous ? (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    href={`/portfolio/${navigation.previous.slug}`}
                                    className="group flex items-center gap-3 p-6 rounded-lg transition-all duration-300 hover:bg-light/40"
                                >
                                    <ArrowLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition-transform" />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-accent mb-1">
                                            Previous
                                        </p>
                                        <p className="font-semibold text-primary group-hover:text-secondary transition-colors">
                                            {navigation.previous.title}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ) : (
                            <div className="p-6 rounded-lg opacity-30">
                                <p className="text-sm text-accent">
                                    No previous project
                                </p>
                            </div>
                        )}
                    </motion.div>

                    {/* Back to Portfolio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            ease: naturalEase,
                            delay: 0.1,
                        }}
                        className="flex items-center justify-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                href="/portfolio"
                                className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:bg-light/40"
                            >
                                <Grid3x3 className="w-4 h-4 text-primary" />
                                <span className="font-medium text-primary">
                                    All Projects
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Next Project */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            ease: naturalEase,
                            delay: 0.2,
                        }}
                    >
                        {navigation?.next ? (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    href={`/portfolio/${navigation.next.slug}`}
                                    className="group flex items-center justify-end gap-3 p-6 rounded-lg transition-all duration-300 hover:bg-light/70"
                                >
                                    <div className="text-right">
                                        <p className="text-xs uppercase tracking-wider text-accent mb-1">
                                            Next
                                        </p>
                                        <p className="font-semibold text-primary group-hover:text-secondary transition-colors">
                                            {navigation.next.title}
                                        </p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ) : (
                            <div className="p-6 rounded-lg opacity-30 text-right">
                                <p className="text-sm text-accent">
                                    No next project
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
