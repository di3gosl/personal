import Image from "next/image";

export default function Portfolio() {
    const projects = [
        {
            title: "E-commerce SaaS Platform",
            description:
                "Built a scalable multi-tenant e-commerce platform with custom integrations for Shopify, Printify, and Stripe. Handles 10K+ daily transactions.",
            technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe"],
            year: "2024",
            image: "/images/portfolio/biofractal-preview.png",
        },
        {
            title: "AI-Powered Chatbot System",
            description:
                "Developed an intelligent customer service automation platform using OpenAI and Claude APIs with RAG for context-aware responses.",
            technologies: [
                "React",
                "Python",
                "OpenAI",
                "MongoDB",
                "AWS Lambda",
            ],
            year: "2023",
            image: "",
        },
        {
            title: "WordPress Plugin Suite",
            description:
                "Created custom WooCommerce plugins for print-on-demand automation, integrating multiple fulfillment providers and payment gateways.",
            technologies: ["PHP", "WordPress", "WooCommerce", "REST APIs"],
            year: "2023",
            image: "",
        },
        {
            title: "Real-time Analytics Dashboard",
            description:
                "Built a high-performance analytics platform processing millions of events daily with real-time visualization and reporting capabilities.",
            technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
            year: "2022",
            image: "",
        },
        {
            title: "Inventory Management System",
            description:
                "Developed a comprehensive inventory tracking solution with multi-warehouse support, barcode scanning, and QuickBooks integration.",
            technologies: ["Next.js", "TypeScript", "MySQL", "Node.js"],
            year: "2022",
            image: "",
        },
        {
            title: "Mobile IoT Application",
            description:
                "Created Android application for real-time monitoring and control of IoT devices using custom firmware on ESP32 microcontrollers.",
            technologies: ["Android", "C++", "ESP32", "MQTT", "Firebase"],
            year: "2021",
            image: "",
        },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center pt-36 pb-18">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="mb-16 space-y-4">
                    <p className="text-sm tracking-[0.4em] uppercase text-accent">
                        Featured Work
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                        Portfolio
                    </h2>
                    <p className="text-lg md:text-xl text-accent max-w-2xl">
                        A selection of projects showcasing full-stack
                        development, AI integration, and scalable system
                        architecture
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-light rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                        >
                            {/* Content */}
                            <div className="p-6 space-y-4">
                                {/* Project Image */}
                                {project.image && (
                                    <div className="relative w-full h-64 bg-gray-100">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                                
                                {/* Year Badge */}
                                <div className="flex justify-between items-start">
                                    <span className="text-xs font-semibold text-accent tracking-wider uppercase">
                                        {project.year}
                                    </span>
                                </div>

                                {/* Project Title */}
                                <h3 className="text-xl font-bold text-primary">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-accent leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.technologies.map(
                                        (tech, techIdx) => (
                                            <span
                                                key={techIdx}
                                                className="px-3 py-1 bg-background text-secondary text-xs font-medium rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 pt-12 text-center">
                    <p className="text-lg text-accent max-w-3xl mx-auto mb-6">
                        These projects represent a fraction of my work.
                        I&apos;ve delivered solutions for startups, enterprises,
                        and agencies across e-commerce, SaaS, fintech, and
                        automation domains.
                    </p>
                    <button className="text-base font-semibold text-primary hover:underline underline-offset-4 transition-all cursor-pointer">
                        View All Projects →
                    </button>
                </div>
            </div>
        </section>
    );
}
