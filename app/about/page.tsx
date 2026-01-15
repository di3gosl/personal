"use client";

import { motion } from "motion/react";
import Hero from "./_components/Hero";
import Gallery from "./_components/Gallery";
import Education from "./_components/Education";
import Skills from "./_components/Skills";
import Experience from "./_components/Experience";

export default function About() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Hero />
                <Gallery />
                <Education />
                <Skills />
                <Experience />
            </motion.div>
        </>
    );
}
