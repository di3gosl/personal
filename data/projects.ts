import type { Project } from "@/types/portfolio";
import type { ProjectDetail } from "@/types/projectDetails";

export const PROJECTS: Project[] = [
    {
        title: "Personal Portfolio Website",
        description:
            "A modern, minimal personal portfolio built to showcase my projects, experience, and technical expertise with a strong focus on clarity, performance, and user experience.",
        technologies: [
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "shadcn/ui",
            "Motion",
            "Supabase",
            "Public Repo",
            "Solo Project",
        ],
        year: "2025",
        image: "/images/portfolio/personal/preview.png",
        label: "Public Repo",
        slug: "personal-portfolio",
    },
    {
        title: "BioFractal Website",
        description:
            "An informative corporate website built to communicate BioFractal's mission, values, and sustainable technology approach through a clean structure and clear visual storytelling.",
        technologies: [
            "React.js",
            "Redux",
            "Node.js",
            "PHP",
            "MySQL",
            "REST API",
            "Bootstrap",
            "Responsive Design",
        ],
        year: "2019",
        image: "/images/portfolio/biofractal/preview.png",
        label: "",
        slug: "biofractal",
    },
    {
        title: "WordPress Plugin Suite",
        description:
            "Created custom WooCommerce plugins for print-on-demand automation, integrating multiple fulfillment providers and payment gateways.",
        technologies: ["PHP", "WordPress", "WooCommerce", "REST APIs"],
        year: "2023",
        image: "",
        label: "",
        slug: "",
    },
    {
        title: "Real-time Analytics Dashboard",
        description:
            "Built a high-performance analytics platform processing millions of events daily with real-time visualization and reporting capabilities.",
        technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
        year: "2022",
        image: "",
        label: "",
        slug: "",
    },
    {
        title: "Inventory Management System",
        description:
            "Developed a comprehensive inventory tracking solution with multi-warehouse support, barcode scanning, and QuickBooks integration.",
        technologies: ["Next.js", "TypeScript", "MySQL", "Node.js"],
        year: "2022",
        image: "",
        label: "",
        slug: "",
    },
    {
        title: "Mobile IoT Application",
        description:
            "Created Android application for real-time monitoring and control of IoT devices using custom firmware on ESP32 microcontrollers.",
        technologies: ["Android", "C++", "ESP32", "MQTT", "Firebase"],
        year: "2021",
        image: "",
        label: "",
        slug: "",
    },
];

export const PROJECTS_DETAILS: ProjectDetail[] = [
    {
        slug: "personal-portfolio",
        title: "Personal Portfolio Website",
        year: "2025",
        type: "Personal Website · Portfolio",
        status: "Public Repository",
        hero: {
            shortDescription:
                "A modern, minimal personal portfolio built to showcase my projects, experience, and technical expertise with a strong focus on clarity, performance, and user experience.",
            ctas: [
                {
                    label: "View Live",
                    href: "https://diegosalazar.dev",
                },
                {
                    label: "View Public Repo",
                    href: "https://github.com/di3gosl/personal",
                    variant: "outline",
                },
            ],
        },
        overview: {
            goal: "The goal of this project was to design and build a clean, professional personal portfolio that clearly communicates my experience as a full-stack developer, while remaining fast, maintainable, and visually minimal. Beyond showcasing projects, the site was designed to reflect my approach to software development: clarity, structure, and thoughtful details over visual noise.",
            challenge:
                "Most personal portfolios tend to be either overly flashy or overly generic. I wanted to avoid both extremes and instead create a site that feels calm, intentional, and technically solid, while still leaving room for personality.",
            role: "This is a solo project where I handled everything end-to-end: product definition, UX/UI decisions, frontend and backend implementation, and deployment and optimization.",
        },
        facts: {
            role: "Full-Stack Developer",
            timeline: "2025",
            platform: "Web",
            team: "Solo project",
            repository: "Public",
        },
        screenshots: [
            {
                src: "/images/portfolio/screenshot-1.jpg",
                alt: "Home page hero section",
                caption: "Clean hero section with minimal design",
            },
            {
                src: "/images/portfolio/screenshot-2.jpg",
                alt: "Portfolio projects grid",
                caption: "Project showcase with clear hierarchy",
            },
            {
                src: "/images/portfolio/screenshot-3.jpg",
                alt: "About page with gallery",
                caption: "Personal storytelling through imagery",
            },
        ],
        whatIBuilt: [
            "Designed and implemented a modern frontend architecture using Next.js App Router",
            "Built reusable UI components with TailwindCSS and shadcn/ui",
            "Implemented smooth, subtle animations using Motion",
            "Integrated backend services and data persistence with Supabase",
            "Optimized performance, loading behavior, and responsiveness across devices",
            "Deployed and configured the site on Vercel with continuous integration",
            "Built within a public GitHub repository to allow anyone to explore the codebase",
            "Designed portfolio mockups in Canva",
        ],
        techStack: [
            {
                category: "Frontend",
                technologies: [
                    "Next.js",
                    "React",
                    "TypeScript",
                    "TailwindCSS",
                    "shadcn/ui",
                    "Motion",
                ],
            },
            {
                category: "Backend & Services",
                technologies: ["Supabase"],
            },
            {
                category: "Tooling",
                technologies: ["Git & GitHub", "VS Code"],
            },
        ],
        designDecisions: {
            title: "Design & UX Decisions",
            items: [
                "Minimal black-and-white visual language to reduce distraction",
                "Grayscale imagery in personal sections to reinforce storytelling",
                "Color used intentionally only where it adds meaning",
                "Mobile-first layout with progressive enhancement for desktop",
                "Subtle animations to enhance interactivity without overwhelming",
            ],
        },
        results:
            "This project allowed me to consolidate a modern full-stack setup using Next.js and Supabase, while focusing on performance, clarity, and design restraint. It also serves as a living project that I can continuously evolve, refine, and extend as my experience and projects grow.",
        badges: [
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "shadcn/ui",
            "Motion",
            "Supabase",
            "Public Repo",
            "Solo Project",
        ],
        navigation: {
            next: {
                slug: "biofractal",
                title: "BioFractal Website",
            },
        },
    },
    {
        slug: "biofractal",
        title: "BioFractal Website",
        year: "2015",
        type: "Client Website · Corporate / Informational",
        status: "Delivered",
        hero: {
            shortDescription:
                "An informative corporate website built to communicate BioFractal's mission, values, and sustainable technology approach through a clean structure and clear visual storytelling.",
            ctas: [
                {
                    label: "View Live",
                    href: "https://biofractal.com.mx/",
                },
            ],
        },
        overview: {
            goal: "The primary goal of this project was to design and develop a professional informational website that clearly presents BioFractal's vision, methodology, and areas of expertise in sustainable technology. The site needed to communicate credibility, structure, and purpose while remaining accessible to a broad, non-technical audience.",
            challenge:
                "One of the main challenges was translating complex, multidisciplinary concepts related to sustainability, technology, and innovation into clear, easy-to-understand content without oversimplifying the message. The site also needed to maintain a strong institutional identity while being responsive and performant across devices.",
            role: "I worked as a full-stack developer, responsible for the frontend architecture, backend integration, data handling, and overall technical implementation of the website.",
        },
        facts: {
            role: "Full-Stack Developer",
            timeline: "2015",
            platform: "Web",
            team: "Small multidisciplinary team",
            repository: "Private",
        },
        screenshots: [
            {
                src: "/images/portfolio/biofractal/screen1.png",
                alt: "BioFractal home page",
                caption:
                    "Homepage and primary landing experience",
            },
            {
                src: "/images/portfolio/biofractal/screen2.png",
                alt: "About section",
                caption:
                    "Additional sections and internal pages",
            },
        ],
        whatIBuilt: [
            "Developed a responsive, informative website using React.js for the frontend",
            "Implemented state management using Redux to handle application data flow",
            "Built backend services with Node.js and PHP to support data persistence",
            "Designed and integrated a MySQL database for structured content storage",
            "Implemented REST-style data communication between frontend and backend",
            "Structured the layout using Bootstrap combined with custom HTML and CSS",
            "Ensured cross-device compatibility and consistent behavior across screen sizes",
        ],
        techStack: [
            {
                category: "Frontend",
                technologies: ["React.js", "Redux", "Bootstrap", "HTML", "CSS"],
            },
            {
                category: "Backend",
                technologies: ["Node.js", "PHP", "REST API"],
            },
            {
                category: "Database",
                technologies: ["MySQL"],
            },
        ],
        designDecisions: {
            title: "Design & UX Decisions",
            items: [
                "Clear content hierarchy to guide users through institutional information",
                "Strong visual identity aligned with sustainability and nature-inspired themes",
                "Responsive layout to ensure accessibility on desktop and mobile devices",
                "Use of visual sections and iconography to simplify complex concepts",
                "Balanced combination of framework-based layout and custom styling",
            ],
        },
        results:
            "This project resulted in a clear, professional corporate website that effectively communicates BioFractal's values and technological approach. It reinforced my experience building full-stack web applications that balance technical structure, usability, and institutional branding, especially in projects aimed at communicating complex ideas to diverse audiences.",
        badges: [
            "React.js",
            "Redux",
            "Node.js",
            "PHP",
            "MySQL",
            "REST API",
            "Bootstrap",
            "Responsive Design",
            "Client Project",
        ],
        navigation: {
            previous: {
                slug: "personal-portfolio",
                title: "Personal Portfolio Website",
            },
            next: {
                slug: "next-project-slug",
                title: "Next Project",
            },
        },
    },
];
