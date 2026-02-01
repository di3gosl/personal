"use client";

import { motion } from "motion/react";
import ContactForm from "./ContactForm";
import { type ContactFormData } from "@/lib/validators/contact";

interface Props {
    submitContactForm: (data: ContactFormData) => Promise<{
        success: boolean;
        message?: string;
        error?: string;
    }>;
}

export default function ContactContainer({ submitContactForm }: Props) {
    return (
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12 space-y-4"
            >
                <p className="text-sm tracking-[0.4em] uppercase text-accent">
                    CONTACT
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                    Let&apos;s build something great together
                </h1>
                <p className="text-lg md:text-xl text-accent max-w-2xl">
                    I help startups, businesses, and teams develop modern web
                    applications, SaaS products, and automation tools.
                </p>
                <p className="text-base md:text-lg text-accent/80 max-w-2xl">
                    I speak Spanish — Feel free to contact me in Spanish if you
                    prefer.
                </p>
                <p className="text-sm md:text-base text-accent/80 max-w-2xl -mt-3">
                    (Hablo español — Puedes contactarme en español si lo
                    prefieres.)
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-14">
                {/* Left Side - Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <ContactForm onSubmit={submitContactForm} />
                </motion.div>

                {/* Right Side - Info & Testimonial */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="space-y-12 bg-accent/5 p-6 rounded-lg"
                >
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-medium text-accent mb-2 ">
                                ADDRESS
                            </h3>
                            <p className="text-base">
                                Merida, Yucatan
                                <br />
                                Mexico
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-accent mb-2">
                                EMAIL
                            </h3>
                            <a
                                href="mailto:diego.salazar.ic@gmail.com"
                                className="text-base hover:text-primary transition-colors hover:underline underline-offset-4"
                            >
                                diego.salazar.ic@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Testimonial Card */}
                    <blockquote className="text-lg mb-6 italic">
                        &quot;The best code is the one that solves the problem
                        with elegance and clarity. Good engineering is not just
                        about making things work; it&apos;s about making them
                        work beautifully, efficiently, and with intention.&quot;
                    </blockquote>
                </motion.div>
            </div>
        </div>
    );
}
