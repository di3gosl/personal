"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { containerVariants, naturalEase } from "@/lib/animations";
import { PHOTOS } from "@/data/gallery";
import { Maximize2 } from "lucide-react";

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
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [amount, setAmount] = useState(0.1);

    useEffect(() => {
        const updateAmount = () => {
            setAmount(window.innerWidth < 768 ? 0.05 : 0.1);
        };

        updateAmount();
        window.addEventListener("resize", updateAmount);
        return () => window.removeEventListener("resize", updateAmount);
    }, []);

    const isGalleryInView = useInView(galleryRef, { once: true, amount });

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    return (
        <section
            ref={galleryRef}
            className="py-16 md:py-24 px-6 md:px-12 bg-light/40"
        >
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
                    {PHOTOS.map((photo, index) => (
                        <motion.div
                            key={photo.src}
                            className="relative aspect-square overflow-hidden rounded-lg bg-light"
                            variants={imageVariants}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3 },
                            }}
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt || "Gallery Image"}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className={`cursor-pointer object-cover ${photo.align} lg:grayscale-100 hover:grayscale-0 transition-all duration-500`}
                            />
                            {/* Click indicator overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                            <div className="absolute bottom-4 right-4 bg-primary/90 text-background rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Maximize2 className="w-5 h-5" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Lightbox */}
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    index={currentIndex}
                    slides={PHOTOS.map((photo) => ({
                        src: photo.src,
                        alt: photo.alt,
                    }))}
                />
            </div>
        </section>
    );
}
