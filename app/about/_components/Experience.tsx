"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { containerVariants, naturalEase } from "@/lib/animations";
import { Briefcase } from "lucide-react";

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: naturalEase,
        },
    },
};

export default function Experience() {
    const experienceRef = useRef(null);
    const isExperienceInView = useInView(experienceRef, {
        once: true,
        amount: 0.1,
    });

    return (
        <section ref={experienceRef} className="py-24 px-6 md:px-12">
            <div className="container mx-auto">
                <motion.div
                    className="mb-12 space-y-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={
                        isExperienceInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.6, ease: naturalEase }}
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

                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isExperienceInView ? "visible" : "hidden"}
                >
                    {/* Salozar Software */}
                    <motion.div
                        className="flex gap-4 p-4 border-l-4 border-primary bg-white rounded-r-lg hover:shadow-md transition-shadow"
                        variants={itemVariants}
                    >
                        <div className="shrink-0">
                            <Briefcase className="w-6 h-6 text-primary mt-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">
                                Co-Founder & Full-Stack / AI Developer
                            </h3>
                            <p className="text-base font-medium text-secondary">
                                Salozar Software
                            </p>
                            <p className="text-sm text-accent mb-2">
                                March 2020 - Present · 4+ years
                            </p>
                            <p className="text-sm text-accent">
                                At Salozar Software, I lead the development of
                                custom digital solutions for clients in Mexico
                                and the United States. I build modern web and
                                SaaS platforms using Next.js, React, Node.js,
                                PHP, and API-driven architectures, while
                                integrating AI capabilities with OpenAI, Claude,
                                and Gemini. My work also includes developing
                                e-commerce systems with WordPress and
                                WooCommerce, managing multi-service integrations
                                like Stripe, Printify, and QuickBooks, and
                                overseeing deployments across AWS and other
                                hosting environments. I collaborate closely with
                                remote teams and manage the full development
                                lifecycle from architecture to launch.
                            </p>
                        </div>
                    </motion.div>

                    {/* BioFractal */}
                    <motion.div
                        className="flex gap-4 p-4 border-l-4 border-primary bg-white rounded-r-lg hover:shadow-md transition-shadow"
                        variants={itemVariants}
                    >
                        <div className="shrink-0">
                            <Briefcase className="w-6 h-6 text-primary mt-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">
                                Co-Founder & Senior Software Developer
                            </h3>
                            <p className="text-base font-medium text-secondary">
                                BioFractal
                            </p>
                            <p className="text-sm text-accent mb-2">
                                July 2015 - September 2020 · 5 years 3 months
                            </p>
                            <p className="text-sm text-accent">
                                At BioFractal, I led the design and development
                                of enterprise-level web applications and R&D
                                initiatives. I worked with technologies such as
                                Node.js, React, Redux, GraphQL, PHP, and Python
                                to build scalable systems for data processing,
                                automation, and analytics. My responsibilities
                                also included architecting modular platforms and
                                managing AWS servers for production
                                environments.
                            </p>
                        </div>
                    </motion.div>

                    {/* Freelance */}
                    <motion.div
                        className="flex gap-4 p-4 border-l-4 border-primary bg-white rounded-r-lg hover:shadow-md transition-shadow"
                        variants={itemVariants}
                    >
                        <div className="shrink-0">
                            <Briefcase className="w-6 h-6 text-primary mt-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">
                                Freelance / Independent Developer
                            </h3>
                            <p className="text-sm text-accent mb-2">
                                January 2015 - March 2020 · 5 years 2 months
                            </p>
                            <p className="text-sm text-accent">
                                As an independent developer, I delivered custom
                                web applications, websites, and REST APIs for
                                local and international clients. I worked across
                                PHP, MySQL, JavaScript, React, Node.js, and
                                WordPress to create administrative systems,
                                dashboards, e-commerce platforms, and automation
                                solutions. This role gave me the opportunity to
                                collaborate directly with entrepreneurs,
                                agencies, and small businesses, delivering
                                end-to-end tailored digital products.
                            </p>
                        </div>
                    </motion.div>

                    {/* B-Circuits */}
                    <motion.div
                        className="flex gap-4 p-4 border-l-4 border-primary bg-white rounded-r-lg hover:shadow-md transition-shadow"
                        variants={itemVariants}
                    >
                        <div className="shrink-0">
                            <Briefcase className="w-6 h-6 text-primary mt-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">
                                Co-Founder & Senior Embedded Software Developer
                            </h3>
                            <p className="text-base font-medium text-secondary">
                                B-Circuits
                            </p>
                            <p className="text-sm text-accent mb-2">
                                January 2016 - September 2020 · 4 years 9 months
                            </p>
                            <p className="text-sm text-accent">
                                At B-Circuits, I developed embedded Software and
                                firmware for electronic and IoT devices using
                                Microchip, ARM, and Espressif microcontrollers.
                                I worked closely with hardware teams to
                                integrate communication protocols and
                                system-level interfaces, ensuring seamless
                                connectivity between custom hardware and backend
                                systems.
                            </p>
                        </div>
                    </motion.div>

                    {/* INKCU */}
                    <motion.div
                        className="flex gap-4 p-4 border-l-4 border-primary bg-white rounded-r-lg hover:shadow-md transition-shadow"
                        variants={itemVariants}
                    >
                        <div className="shrink-0">
                            <Briefcase className="w-6 h-6 text-primary mt-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">
                                Co-Founder & IT Consultant
                            </h3>
                            <p className="text-base font-medium text-secondary">
                                INKCU
                            </p>
                            <p className="text-sm text-accent mb-2">
                                April 2017 - January 2020 · 2 years 10 months
                            </p>
                            <p className="text-sm text-accent">
                                As an IT consultant for INKCU, I supported
                                digital transformation projects, building
                                internal tools, automation workflows, and
                                embedded system integrations. My work combined
                                Software development with strategic technical
                                guidance for early-stage initiatives.
                            </p>
                        </div>
                    </motion.div>

                    {/* Grupo Endor */}
                    <motion.div
                        className="flex gap-4 p-4 border-l-4 border-primary bg-white rounded-r-lg hover:shadow-md transition-shadow"
                        variants={itemVariants}
                    >
                        <div className="shrink-0">
                            <Briefcase className="w-6 h-6 text-primary mt-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">
                                Senior Web & Mobile Developer
                            </h3>
                            <p className="text-base font-medium text-secondary">
                                Grupo Endor
                            </p>
                            <p className="text-sm text-accent mb-2">
                                January 2015 - July 2015 · 7 months
                            </p>
                            <p className="text-sm text-accent">
                                At Grupo Endor, I developed business
                                applications using PHP (Yii Framework), MySQL,
                                and REST integrations. I also contributed to
                                mobile development with Android, building
                                internal tools that supported operational
                                workflows.
                            </p>
                        </div>
                    </motion.div>

                    {/* MyPetStone Studios */}
                    <motion.div
                        className="flex gap-4 p-4 border-l-4 border-primary bg-white rounded-r-lg hover:shadow-md transition-shadow"
                        variants={itemVariants}
                    >
                        <div className="shrink-0">
                            <Briefcase className="w-6 h-6 text-primary mt-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">
                                Web Developer & Project Lead
                            </h3>
                            <p className="text-base font-medium text-secondary">
                                MyPetStone Studios
                            </p>
                            <p className="text-sm text-accent mb-2">
                                October 2011 - January 2015 · 3 years 4 months
                            </p>
                            <p className="text-sm text-accent">
                                At MyPetStone, I built custom websites and
                                e-commerce platforms for clients in the United
                                States, integrating payment gateways, logistics
                                APIs, and backend systems. I was responsible for
                                server configuration, performance optimization,
                                and leading small development projects from
                                planning to deployment.
                            </p>
                        </div>
                    </motion.div>

                    {/* Cytron Soluciones Moviles */}
                    <motion.div
                        className="flex gap-4 p-4 border-l-4 border-primary bg-white rounded-r-lg hover:shadow-md transition-shadow"
                        variants={itemVariants}
                    >
                        <div className="shrink-0">
                            <Briefcase className="w-6 h-6 text-primary mt-1" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary">
                                Web Developer
                            </h3>
                            <p className="text-base font-medium text-secondary">
                                Cytron Soluciones Moviles
                            </p>
                            <p className="text-sm text-accent mb-2">
                                October 2011 - January 2015 · 3 years 4 months
                            </p>
                            <p className="text-sm text-accent">
                                At Cytron, I worked on web applications using
                                PHP, Java Servlets, .NET, and Google Maps API,
                                developing and maintaining systems that
                                integrated with BlackBerry-based mobile apps.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
