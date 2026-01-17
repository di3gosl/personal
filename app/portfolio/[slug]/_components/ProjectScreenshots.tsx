"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import type { ProjectDetail } from "@/types/projectDetails";
import { containerVariants, naturalEase } from "@/lib/animations";
import { Maximize2 } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: naturalEase,
        },
    },
};

interface ProjectScreenshotsProps {
    project: ProjectDetail;
}

export default function ProjectScreenshots({
    project,
}: ProjectScreenshotsProps) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const slides = project.screenshots.map((screenshot) => ({
        src: screenshot.src,
        alt: screenshot.alt,
        title: screenshot.caption,
    }));

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <section ref={sectionRef} className="py-16 md:py-24 px-6 md:px-12 bg-background">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.6, ease: naturalEase }}
                >
                    <p className="text-sm tracking-[0.4em] uppercase text-accent mb-4">
                        Screenshots
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Visual Showcase
                    </h2>
                </motion.div>

                {/* Screenshots Grid */}
                <motion.div
                    className="space-y-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {project.screenshots.map((screenshot, index) => (
                        <motion.div
                            key={index}
                            className="space-y-4"
                            variants={imageVariants}
                        >
                            <div
                                className="relative aspect-video overflow-hidden rounded-lg bg-light border border-primary/10 cursor-pointer group"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={screenshot.src}
                                    alt={screenshot.alt}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110 group-hover:translate-y-[5%] brightness-95"
                                    sizes="(max-width: 1440px) 100vw, 1440px"
                                />
                                {/* Click indicator overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                                <div className="absolute bottom-4 right-4 bg-primary/90 text-background rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Maximize2 className="w-5 h-5" />
                                </div>
                            </div>
                            {screenshot.caption && (
                                <p className="text-sm text-accent text-center italic">
                                    {screenshot.caption}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Lightbox */}
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={slides}
                    index={lightboxIndex}
                    plugins={[Zoom]}
                />
            </div>
        </section>
    );
}
