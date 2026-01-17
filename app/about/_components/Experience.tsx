"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { containerVariants, naturalEase } from "@/lib/animations";
import { Calendar, MapPin, Square } from "lucide-react";
import { EXPRERIENCE } from "@/data/experience";

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: naturalEase },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: naturalEase,
        },
    },
};

export default function Experience() {
    const experienceRef = useRef(null);
    const [amount, setAmount] = useState(0.1);

    useEffect(() => {
        const updateAmount = () => {
            setAmount(window.innerWidth < 768 ? 0.03 : 0.2);
        };

        updateAmount();
        window.addEventListener("resize", updateAmount);
        return () => window.removeEventListener("resize", updateAmount);
    }, []);

    const isExperienceInView = useInView(experienceRef, {
        once: true,
        amount,
    });

    return (
        <section ref={experienceRef} className="py-16 md:py-24 px-6 md:px-12">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    className="mb-16 space-y-4"
                    variants={headerVariants}
                    initial="hidden"
                    animate={isExperienceInView ? "visible" : "hidden"}
                >
                    <p className="text-sm tracking-[0.4em] uppercase text-accent">
                        Career Journey
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">
                        Professional Experience
                    </h2>
                    <p className="text-lg md:text-xl text-accent max-w-4xl leading-relaxed">
                        A career spent designing and building web applications,
                        SaaS platforms, and e-commerce solutions for companies
                        in Mexico and the United States.
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="relative space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isExperienceInView ? "visible" : "hidden"}
                    >
                        {/* Timeline line */}
                        <div className="absolute left-0 top-11 bottom-11 w-px bg-linear-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block" />

                        {EXPRERIENCE.map((job, index) => (
                            <motion.article
                                key={`${job.company}-${index}`}
                                className="relative group"
                                variants={itemVariants}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-11 w-3 h-3 rounded-full bg-primary ring-4 ring-white hidden md:block -translate-x-[5px] group-hover:scale-125 transition-transform duration-200" />

                                {/* Card */}
                                <div className="md:ml-10 bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border group-hover:border-primary/20">
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-1 group-hover:text-primary/80 transition-colors">
                                                {job.role}
                                            </h3>
                                            {job.company && (
                                                <div className="flex items-center gap-2 text-secondary font-medium">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{job.company}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-start md:items-center gap-2 text-sm text-accent shrink-0 flex-col md:flex-row">
                                            <Calendar className="w-4 h-4 hidden md:block" />
                                            <span className="font-medium">
                                                {job.startDate} - {job.endDate}
                                            </span>
                                            <span className="text-accent/60">
                                                <span className="hidden md:inline">
                                                    ·{" "}
                                                </span>
                                                {job.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description as bullets */}
                                    <ul className="space-y-2.5 text-sm md:text-base text-accent/90 leading-relaxed ml-6">
                                        {job.description.map((point, idx) => (
                                            <li
                                                key={idx}
                                                className="flex gap-3 items-start"
                                            >
                                                <span className="text-primary shrink-0">
                                                    <Square className="w-1 h-1 mt-3 fill-current" />
                                                </span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
