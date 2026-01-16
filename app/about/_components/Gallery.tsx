"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { containerVariants, naturalEase } from "@/lib/animations";
import { PHOTOS } from "@/data/gallery";

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: naturalEase },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: naturalEase,
        },
    },
};

export default function Gallery() {
    const galleryRef = useRef(null);
    const isGalleryInView = useInView(galleryRef, { once: true, amount: 0.2 });

    return (
        <section ref={galleryRef} className="py-24 px-6 md:px-12 bg-light/40">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-12 space-y-4"
                    variants={headerVariants}
                    initial="hidden"
                    animate={isGalleryInView ? "visible" : "hidden"}
                >
                    <p className="text-sm tracking-[0.4em] uppercase text-accent">
                        Gallery
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Moments & Memories
                    </h2>
                    <p className="text-lg md:text-xl text-accent max-w-2xl leading-relaxed">
                        A glimpse into the moments, people, and places that
                        inspire my work beyond the code.
                    </p>
                </motion.div>

                {/* Image Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isGalleryInView ? "visible" : "hidden"}
                >
                    {PHOTOS.map((photo) => (
                        <motion.div
                            key={photo.src}
                            className="relative aspect-square overflow-hidden rounded-lg bg-light"
                            variants={imageVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt || "Gallery Image"}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className={`cursor-pointer object-cover ${photo.align} grayscale-100 hover:grayscale-0 transition-all duration-500`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
