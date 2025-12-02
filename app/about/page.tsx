"use client";

import { motion } from "motion/react";

export default function Contact() {
    return (
        <>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <section className="min-h-screen pt-32 pb-24 px-6 md:px-12"></section>
            </motion.main>
        </>
    );
}
