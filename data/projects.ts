import type { Project } from "@/types/portfolio";

export const PROJECTS: Project[] = [
    {
        title: "Personal Portfolio Website",
        description:
            "I built my personal portfolio website using Next.js, TypeScript, TailwindCSS, and Framer Motion, with Supabase for backend services and data management. The site showcases my work with a clean, minimal design and subtle animations for a smooth user experience.",
        technologies: [
            "Next.js",
            "React",
            "Supabase",
            "TypeScript",
            "TailwindCSS",
            "Framer Motion",
            "shadcn/ui",
        ],
        year: "2025",
        image: "/images/portfolio/personal-preview.png",
        label: "Public Repo",
    },
    {
        title: "BioFractal Website",
        description:
            "I developed an informational website for BioFractal using a modern full-stack architecture with React, Redux, Node.js, MySQL, and PHP. The frontend was built with React and Bootstrap, complemented by custom HTML and CSS for layout and styling.",
        technologies: [
            "Node.js",
            "Yii Framework",
            "Bootstrap",
            "React",
            "Redux",
            "MySQL",
            "PHP",
        ],
        year: "2019",
        image: "/images/portfolio/biofractal-preview.png",
        label: "",
    },
    {
        title: "WordPress Plugin Suite",
        description:
            "Created custom WooCommerce plugins for print-on-demand automation, integrating multiple fulfillment providers and payment gateways.",
        technologies: ["PHP", "WordPress", "WooCommerce", "REST APIs"],
        year: "2023",
        image: "",
        label: "",
    },
    {
        title: "Real-time Analytics Dashboard",
        description:
            "Built a high-performance analytics platform processing millions of events daily with real-time visualization and reporting capabilities.",
        technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
        year: "2022",
        image: "",
        label: "",
    },
    {
        title: "Inventory Management System",
        description:
            "Developed a comprehensive inventory tracking solution with multi-warehouse support, barcode scanning, and QuickBooks integration.",
        technologies: ["Next.js", "TypeScript", "MySQL", "Node.js"],
        year: "2022",
        image: "",
        label: "",
    },
    {
        title: "Mobile IoT Application",
        description:
            "Created Android application for real-time monitoring and control of IoT devices using custom firmware on ESP32 microcontrollers.",
        technologies: ["Android", "C++", "ESP32", "MQTT", "Firebase"],
        year: "2021",
        image: "",
        label: "",
    },
];
