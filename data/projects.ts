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
            "Personal Project",
            "Vercel",
        ],
        year: "2025",
        image: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/personal/preview.png",
        label: "Public Repo",
        slug: "personal-portfolio",
        isFeatured: true,
    },
    {
        title: "BioFractal Network",
        description:
            "A prototype knowledge and project management platform designed to connect researchers, developers, and consultants, enabling collaboration, expertise matching, and paid consulting workflows within a unified network.",
        technologies: [
            "React.js",
            "Redux",
            "PHP/Yii Framework",
            "MySQL",
            "REST API",
            "AWS",
            "EC2",
            "RDS",
            "S3",
            "Route 53",
            "Load Balancer",
        ],
        year: "2019",
        image: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/biofractal-network/preview.png",
        label: "",
        slug: "biofractal-network",
    },
    {
        title: "Sprink Ads",
        description:
            "A distributed advertising platform that connects a web-based management system with physical vending machines, enabling video ad synchronization, real-time interaction tracking, and usage statistics per video and publisher.",
        technologies: [
            "React.js",
            "Redux",
            "Node.js",
            "PHP",
            "Yii Framework",
            "MySQL",
            "REST API",
            "IoT",
            "Raspberry Pi",
        ],
        year: "2019",
        image: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/sprink-ads/preview.png",
        label: "",
        slug: "sprink-ads",
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
        year: "2017",
        image: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/biofractal/preview.png",
        label: "",
        slug: "biofractal",
        isFeatured: true,
    },
    {
        title: "Absolute Color Printing Shop",
        description:
            "A custom-built online printing platform for a wholesale printing company, featuring instant price estimation, online ordering, secure payment processing, loyalty rewards, and full production workflow tracking, generating significant new revenue through digital sales.",
        technologies: [
            "PHP",
            "Yii Framework",
            "MySQL",
            "JavaScript",
            "E-commerce",
            "Instant Quote",
            "Payment Integration",
            "Loyalty System",
            "Reporting & Analytics",
            "Admin Dashboard",
            "Team Leadership",
        ],
        year: "2015",
        image: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/absolute-color/preview.png",
        label: "",
        slug: "absolute-color",
        isFeatured: true,
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
            "Uploaded portfolio images and assets to Supabase Storage for efficient delivery",
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
            {
                category: "Cloud Infrastructure",
                technologies: ["Vercel"],
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
            "Personal Project",
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
        year: "2017",
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
            timeline: "2017",
            platform: "Web",
            team: "Multidisciplinary team",
            repository: "Private",
        },
        screenshots: [
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/biofractal/screen1.jpg",
                alt: "BioFractal home page",
                caption: "Homepage and primary landing experience",
            },
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/biofractal/screen2.jpg",
                alt: "About section",
                caption: "Additional sections and internal pages",
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
    {
        slug: "absolute-color",
        title: "Absolute Color Printing Shop",
        year: "2015",
        type: "Client Project · E-commerce / Printing Platform",
        status: "Delivered",
        hero: {
            shortDescription:
                "A custom-built online printing platform for a wholesale printing company, featuring instant price estimation, online ordering, secure payment processing, loyalty rewards, and full production workflow tracking, generating significant new revenue through digital sales.",
            ctas: [],
        },
        overview: {
            goal: "The goal of this project was to build a complete web-based printing platform that enables customers to instantly quote printing jobs, place orders online, upload artwork, and track their orders throughout the full production lifecycle. From the business perspective, the platform aimed to unlock new digital revenue streams that previously did not exist for the company.",
            challenge:
                "Printing services involve complex configuration options, pricing rules, promotions, and production workflows. The main challenge was building an accurate instant quote estimator and a reliable order lifecycle system, while also supporting secure payments, loyalty rewards, discount coupons, and business reporting within a custom-built architecture.",
            role: "I led the development team and worked as a full-stack developer, defining the technical direction of the platform and actively contributing to frontend development, backend logic, database design, pricing rules, payment integrations, reporting systems, and administrative tooling.",
        },
        facts: {
            role: "Lead Full-Stack Developer",
            timeline: "2015",
            platform: "Web",
            team: "Led a team of 3 developers",
            repository: "Private",
        },
        screenshots: [
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/absolute-color/screen1.png",
                alt: "Printing product configuration",
                caption:
                    "Printing product configuration with instant price estimation",
            },
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/absolute-color/screen2.png",
                alt: "Shopping cart and checkout",
                caption: "Shopping cart with detailed order summary",
            },
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/absolute-color/screen3.jpg",
                alt: "Admin dashboard and reports",
                caption: "Additional sections of the platform",
            },
        ],
        whatIBuilt: [
            "Led the development of a custom online printing shop for a wholesale printing company",
            "Implemented an instant quote estimator based on configurable printing options",
            "Developed a complete purchasing flow including cart, checkout, and artwork upload",
            "Integrated payment processing using Authorize.Net, later upgraded to CardConnect",
            "Implemented a loyalty points system rewarding customers for each purchase",
            "Built a coupon and discount system to support promotional campaigns",
            "Designed and implemented a MySQL database for products, customers, orders, pricing, and rewards",
            "Developed a comprehensive administrative dashboard for managing products, customers, pricing, and orders",
            "Implemented production workflow tracking with status updates across the full printing lifecycle",
            "Built a custom reporting system to track sales performance, orders, and revenue metrics",
        ],
        techStack: [
            {
                category: "Frontend",
                technologies: [
                    "JavaScript",
                    "jQuery",
                    "HTML",
                    "CSS",
                    "Bootstrap",
                ],
            },
            {
                category: "Backend",
                technologies: ["PHP", "Yii Framework"],
            },
            {
                category: "Database",
                technologies: ["MySQL"],
            },
            {
                category: "Payments",
                technologies: ["Authorize.Net", "CardConnect"],
            },
        ],
        designDecisions: {
            title: "Architecture & UX Decisions",
            items: [
                "Custom-built pricing engine to support complex printing configurations",
                "Instant quote estimator optimized for speed and accuracy",
                "Step-by-step checkout flow to reduce friction during purchase",
                "Loyalty and coupon systems designed to drive repeat business",
                "Production workflow tracking integrated directly into the admin dashboard",
                "Custom reporting tools to provide visibility into revenue and operational performance",
                "Administrative interface optimized for daily operational efficiency",
            ],
        },
        results:
            "The platform became a significant new digital sales channel for the client, generating hundreds of thousands of dollars in additional revenue that previously did not exist. This impact was measured through a custom-built reporting system designed specifically for the platform, providing visibility into sales performance, order volume, and revenue growth. The project strengthened my experience leading development teams and delivering business-critical systems with measurable commercial impact.",
        badges: [
            "PHP",
            "Yii Framework",
            "MySQL",
            "JavaScript",
            "jQuery",
            "E-commerce",
            "Instant Quote",
            "Payment Integration",
            "Loyalty System",
            "Reporting & Analytics",
            "Admin Dashboard",
            "Team Leadership",
            "Client Project",
        ],
        navigation: {
            next: {
                slug: "next-project-slug",
                title: "Next Project",
            },
        },
    },
    {
        slug: "sprink-ads",
        title: "Sprink Ads Advertising Platform",
        year: "2019",
        type: "Client Project · Advertising Platform / IoT",
        status: "Delivered (NDA)",
        hero: {
            shortDescription:
                "A distributed advertising platform that connects a web-based management system with physical vending machines, enabling video ad synchronization, real-time interaction tracking, and usage statistics per video and publisher.",
            ctas: [],
        },
        overview: {
            goal: "The goal of this project was to build an end-to-end advertising platform that allows agencies and publishers to upload and manage video advertisements, synchronize content with vending machines in the field, and track real-world interactions generated by users. The system needed to bridge a web application with embedded devices while keeping data accurate and operationally manageable.",
            challenge:
                "The main challenge was designing a reliable communication flow between the web platform and physical machines operating under real-world network constraints. This included synchronizing video files over WiFi, tracking user interactions through hardware events, and keeping consistent counts per video, machine, and publisher to generate trustworthy statistics; while also operating under NDA constraints.",
            role: "I worked as a full-stack developer, contributing to the design and implementation of the web platform, the API layer used by devices, the video synchronization workflow, and the interaction tracking and statistics logic.",
        },
        facts: {
            role: "Full-Stack Developer",
            timeline: "2019",
            platform: "Web + Physical Devices",
            team: "Small development team",
            repository: "Private",
        },
        screenshots: [
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/sprink-ads/screen1.png",
                alt: "Login",
                caption: "Login screen for advertisers and publishers",
            },
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/sprink-ads/screen2.png",
                previewSrc:
                    "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/sprink-ads/screen2-preview.jpg",
                alt: "Dashboard",
                caption: "Dashboard to manage videos, machines, and statistics",
            },
        ],
        whatIBuilt: [
            "Developed a web platform to upload and manage video advertisements",
            "Implemented a server-side upload workflow that stores videos in the filesystem (server folders)",
            "Stored only video metadata in MySQL (URL and filename) to reference files efficiently",
            "Built management tools for publishers, agencies, clients, and vending machines",
            "Designed and implemented a REST API used by devices to sync and retrieve video content",
            "Implemented device communication to download videos over WiFi and keep local content updated",
            "Built interaction tracking triggered by physical button presses on vending machines",
            "Implemented counting per video on each machine to generate statistics per video and publisher",
            "Designed the MySQL data model to support machines, videos, publishers, and interaction events",
            "Implemented authentication and controlled access for platform users",
        ],
        techStack: [
            {
                category: "Frontend",
                technologies: ["React.js", "Redux"],
            },
            {
                category: "Backend",
                technologies: ["Node.js", "PHP", "Yii Framework", "REST API"],
            },
            {
                category: "Database",
                technologies: ["MySQL"],
            },
            {
                category: "Storage",
                technologies: ["Server File Storage (filesystem)"],
            },
            {
                category: "Hardware & IoT",
                technologies: [
                    "Raspberry Pi",
                    "Embedded Devices",
                    "WiFi Communication",
                ],
            },
        ],
        designDecisions: {
            title: "Architecture & System Design Decisions",
            items: [
                "Filesystem-based video storage for simple and efficient media delivery",
                "Database design focused on metadata (URL/filename) and event tracking rather than binary storage",
                "API-driven architecture to decouple the web platform from devices in the field",
                "Event-based interaction tracking triggered by hardware inputs",
                "Statistics model based on per-video, per-machine counting to support publisher-level insights",
            ],
        },
        results:
            "The project delivered a working advertising platform capable of syncing video content to physical vending machines and tracking real-world user interactions through hardware events. By counting interactions per video on each machine, the platform produced reliable statistics per video and publisher; demonstrating a practical distributed system that combines web software, APIs, and IoT embedded hardware under NDA constraints.",
        badges: [
            "React.js",
            "Redux",
            "Node.js",
            "PHP",
            "Yii Framework",
            "MySQL",
            "REST API",
            "Filesystem Storage",
            "IoT",
            "Raspberry Pi",
            "Distributed Systems",
        ],
        navigation: {
            next: {
                slug: "next-project-slug",
                title: "Next Project",
            },
        },
    },
    {
        slug: "biofractal-network",
        title: "BioFractal Network",
        year: "2019",
        type: "Prototype · Knowledge Network / Project Management Platform",
        status: "Prototype (Validated)",
        hero: {
            shortDescription:
                "A prototype knowledge and project management platform designed to connect researchers, developers, and consultants, enabling collaboration, expertise matching, and paid consulting workflows within a unified network.",
            ctas: [],
        },
        overview: {
            goal: "The goal of this project was to build a web-based platform that enables professionals to create detailed profiles, showcase their experience, manage collaborative projects, and offer consulting services. The platform aimed to connect knowledge, talent, and real-world problems while providing tools for project tracking, expert recommendations, and payment handling.",
            challenge:
                "The main challenge was designing a flexible system that could support multiple user roles including developers, consultants, project owners, and organizations while maintaining a clear structure for profiles, expertise, project management, and transactions. Additionally, the platform needed to be scalable and production-ready despite being launched as a prototype.",
            role: "I worked as a full-stack developer and cloud engineer, responsible for application development, system architecture, cloud infrastructure configuration, deployment, and operational setup on AWS.",
        },
        facts: {
            role: "Full-Stack Developer",
            timeline: "2019",
            platform: "Web",
            team: "Small development team",
            repository: "Private",
        },
        screenshots: [
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/biofractal-network/screen1.png",
                alt: "Network landing and search",
                caption:
                    "Developer Profile Dashboard - Skills, Projects & Team Overview",
            },
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/biofractal-network/screen2.png",
                alt: "Landing page",
                caption: "Landing page with search",
            },
        ],
        whatIBuilt: [
            "Developed a web application for professional networking and knowledge sharing",
            "Implemented user profiles with experience, skills, and expertise management",
            "Built project management functionality to track development progress",
            "Implemented a recommendation system to suggest relevant developers and consultants",
            "Developed consulting workflows allowing users to offer expertise and solve industry problems",
            "Designed and implemented a MySQL database for users, projects, expertise, and transactions",
            "Deployed and configured the platform on Amazon Web Services",
            "Configured EC2 instances for application compute",
            "Provisioned RDS MySQL for managed database services",
            "Set up S3 for file storage",
            "Configured Route 53 for domain management",
            "Implemented Load Balancers for traffic distribution and scalability",
        ],
        techStack: [
            {
                category: "Frontend",
                technologies: ["React.js", "Redux"],
            },
            {
                category: "Backend",
                technologies: ["PHP", "Yii Framework", "REST API"],
            },
            {
                category: "Database",
                technologies: ["MySQL"],
            },
            {
                category: "Cloud Infrastructure",
                technologies: [
                    "AWS EC2",
                    "AWS RDS",
                    "AWS S3",
                    "AWS Route 53",
                    "AWS Load Balancer",
                ],
            },
        ],
        designDecisions: {
            title: "Architecture & Platform Design Decisions",
            items: [
                "Modular platform design to support multiple user roles and workflows",
                "Profile-driven expertise representation to enable meaningful matching",
                "Project-centric collaboration model to track real development work",
                "Cloud-native deployment on AWS to support scalability and reliability",
                "Separation of application logic and infrastructure for future growth",
            ],
        },
        results:
            "BioFractal Network was launched as a functional prototype and received promising early validation, including interest from multiple universities looking to integrate their research teams into the platform. While the long-term continuation of the project is unknown, the prototype demonstrated strong product-market interest and validated the core concept of a collaborative knowledge and project management network.",
        badges: [
            "React.js",
            "Redux",
            "PHP",
            "Yii Framework",
            "MySQL",
            "REST API",
            "AWS",
            "EC2",
            "RDS",
            "S3",
            "Route 53",
            "Load Balancer",
            "Prototype",
            "Validated Concept",
        ],
        navigation: {
            next: {
                slug: "next-project-slug",
                title: "Next Project",
            },
        },
    },
];
