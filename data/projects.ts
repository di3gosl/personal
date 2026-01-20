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
        title: "PrintQuoteNow",
        description:
            "A comprehensive print management platform featuring an advanced gang-run optimization algorithm, instant quoting, production workflows, and accounting integration through QuickBooks.",
        technologies: [
            "SaaS",
            "Gang Optimization",
            "AWS",
            "React",
            "Redux",
            "PHP",
            "Yii Framework",
            "MySQL",
            "QuickBooks Integration",
        ],
        year: "2022",
        image: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/pqn/preview.png",
        label: "",
        slug: "print-quote-now",
    },
    {
        title: "RTLS System (Real-Time Locating System)",
        description:
            "A real-time locating system (RTLS) prototype combining embedded firmware, wireless communication, and a web-based visualization platform to track the position of electronic devices with high accuracy.",
        technologies: [
            "IoT",
            "Embedded Systems",
            "RTLS",
            "Firmware",
            "Prototype",
            "React",
            "PHP",
            "MySQL",
            "REST API",
        ],
        year: "2021",
        image: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/rtls/preview.png",
        label: "",
        slug: "rtls-system",
    },
    {
        title: "Eiwa Water Level Sensor",
        description:
            "A prototype IoT solution to estimate water level in 20L containers using capacitive sensing, featuring a custom firmware algorithm and an API integration layer to store and expose measurements to a companion Android app.",
        technologies: [
            "IoT",
            "Firmware",
            "C++",
            "ESP8266",
            "WiFi",
            "REST API",
            "Android",
            "Prototype",
        ],
        year: "2020",
        image: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/eiwa/preview.png",
        label: "",
        slug: "eiwa",
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
            "AWS Architecture",
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
        title: "B-Circuits Website",
        description:
            "A corporate informational website built for an engineering and hardware development company, designed to clearly communicate services, capabilities, and development processes through a structured and professional interface.",
        technologies: [
            "PHP",
            "Yii Framework",
            "HTML",
            "CSS",
            "Bootstrap",
            "Corporate Website",
        ],
        year: "2019",
        image: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/b-circuits/preview.png",
        label: "",
        slug: "b-circuits",
    },
    {
        title: "EcoHyT Temperature & Humidity Monitor",
        description:
            "An IoT monitoring prototype that measures room temperature and humidity, displays readings on an onboard LCD, and sends time-series measurements to a REST API for storage in MySQL and visualization in an existing web dashboard.",
        technologies: [
            "IoT",
            "Firmware",
            "C++",
            "ESP8266",
            "WiFi",
            "REST API",
            "MySQL",
            "LCD",
        ],
        year: "2018",
        image: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/ecohyt/preview.png",
        label: "",
        slug: "ecohyt",
        isFeatured: true,
    },
    {
        title: "Absolute EDDM",
        description:
            "A web platform that allows customers to plan EDDM (Every Door Direct Mail) campaigns by selecting USPS routes, uploading print-ready artwork, completing payment via CardPointe, and generating the required list and documentation for fulfillment.",
        technologies: [
            "EDDM",
            "USPS Integration",
            "CardPointe",
            "AWS Architecture",
            "PHP",
            "Yii Framework",
            "MySQL",
            "Bootstrap",
            "jQuery",
        ],
        year: "2018",
        image: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/eddm/preview.png",
        label: "",
        slug: "absolute-eddm",
        isFeatured: true,
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
        title: "B-Made Inventory System",
        description:
            "An internal inventory management system designed to centralize electronic component tracking, supplier data, and operational records in a structured, searchable web dashboard.",
        technologies: [
            "Internal Tool",
            "Inventory Management",
            "React",
            "Redux",
            "Material UI",
            "PHP",
            "Node.js",
            "Yii Framework",
            "MySQL",
            "AWS Architecture",
            "REST API",
        ],
        year: "2017",
        image: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/bmade-inventory/preview.png",
        label: "",
        slug: "bmade-inventory",
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
    {
        title: "Controlec",
        description:
            "A mobile and web-based platform designed to support the coordination and monitoring of electoral processes in Yucatan, providing operational tools for field teams and administrators.",
        technologies: ["Android", "Java", "Mobile App", "Team Project"],
        year: "2015",
        image: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/controlec/preview.png",
        label: "",
        slug: "controlec",
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
            "Designed and implemented a modern frontend architecture using Next.js App Router.",
            "Built reusable UI components with TailwindCSS and shadcn/ui.",
            "Implemented smooth, subtle animations using Motion.",
            "Integrated backend services and data persistence with Supabase.",
            "Optimized performance, loading behavior, and responsiveness across devices.",
            "Deployed and configured the site on Vercel with continuous integration.",
            "Built within a public GitHub repository to allow anyone to explore the codebase.",
            "Designed portfolio mockups in Canva.",
            "Uploaded portfolio images and assets to Supabase Storage for efficient delivery.",
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
            "Developed a responsive, informative website using React.js for the frontend.",
            "Implemented state management using Redux to handle application data flow.",
            "Built backend services with Node.js and PHP to support data persistence.",
            "Designed and integrated a MySQL database for structured content storage.",
            "Implemented REST-style data communication between frontend and backend.",
            "Structured the layout using Bootstrap combined with custom HTML and CSS.",
            "Ensured cross-device compatibility and consistent behavior across screen sizes.",
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
            "Led the development of a custom online printing shop for a wholesale printing company.",
            "Implemented an instant quote estimator based on configurable printing options.",
            "Developed a complete purchasing flow including cart, checkout, and artwork upload.",
            "Integrated payment processing using Authorize.Net, later upgraded to CardPointe.",
            "Implemented a loyalty points system rewarding customers for each purchase.",
            "Built a coupon and discount system to support promotional campaigns.",
            "Designed and implemented a MySQL database for products, customers, orders, pricing, and rewards.",
            "Developed a comprehensive administrative dashboard for managing products, customers, pricing, and orders.",
            "Implemented production workflow tracking with status updates across the full printing lifecycle.",
            "Built a custom reporting system to track sales performance, orders, and revenue metrics.",
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
                technologies: ["Authorize.Net", "CardPointe"],
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
            "Developed a web platform to upload and manage video advertisements.",
            "Implemented a server-side upload workflow that stores videos in the filesystem (server folders).",
            "Stored only video metadata in MySQL (URL and filename) to reference files efficiently.",
            "Built management tools for publishers, agencies, clients, and vending machines.",
            "Designed and implemented a REST API used by devices to sync and retrieve video content.",
            "Implemented device communication to download videos over WiFi and keep local content updated.",
            "Built interaction tracking triggered by physical button presses on vending machines.",
            "Implemented counting per video on each machine to generate statistics per video and publisher.",
            "Designed the MySQL data model to support machines, videos, publishers, and interaction events.",
            "Implemented authentication and controlled access for platform users.",
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
            "Developed a web application for professional networking and knowledge sharing.",
            "Implemented user profiles with experience, skills, and expertise management.",
            "Built project management functionality to track development progress.",
            "Implemented a recommendation system to suggest relevant developers and consultants.",
            "Developed consulting workflows allowing users to offer expertise and solve industry problems.",
            "Designed and implemented a MySQL database for users, projects, expertise, and transactions.",
            "Deployed and configured the platform on Amazon Web Services.",
            "Configured EC2 instances for application compute.",
            "Provisioned RDS MySQL for managed database services.",
            "Set up S3 for file storage.",
            "Configured Route 53 for domain management.",
            "Implemented Load Balancers for traffic distribution and scalability.",
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
            "AWS Architecture",
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
    {
        slug: "b-circuits",
        title: "B-Circuits Website",
        year: "2019",
        type: "Client Project · Corporate / Informational Website",
        status: "Delivered",
        hero: {
            shortDescription:
                "A corporate informational website built for an engineering and hardware development company, designed to clearly communicate services, capabilities, and development processes through a structured and professional interface.",
            ctas: [],
        },
        overview: {
            goal: "The goal of this project was to design and develop an informational website for B-Circuits that clearly presents the company's engineering services, development process, and value proposition. The site needed to communicate technical credibility while remaining accessible to potential clients from non-technical backgrounds.",
            challenge:
                "The main challenge was translating complex engineering and hardware development services into clear, well-structured content that could be easily understood by prospective clients, without oversimplifying the technical depth of the company's work.",
            role: "I worked as a full-stack developer, responsible for the frontend implementation, backend structure, and overall technical execution of the website.",
        },
        facts: {
            role: "Full-Stack Developer",
            timeline: "2019",
            platform: "Web",
            team: "Small team",
            repository: "Private",
        },
        screenshots: [
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/b-circuits/screen1.png",
                alt: "Homepage hero section",
                caption:
                    "Hero section introducing B-Circuits' engineering services",
            },
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/b-circuits/screen2.jpg",
                alt: "Services overview",
                caption:
                    "Additional sections detailing services and development process",
            },
        ],
        whatIBuilt: [
            "Developed a corporate informational website for an engineering and hardware company.",
            "Implemented a responsive frontend layout using Bootstrap and custom HTML/CSS.",
            "Built structured service pages to clearly explain development workflows and offerings.",
            "Implemented backend logic using PHP and Yii Framework.",
            "Ensured consistent behavior and layout across desktop and mobile devices.",
            "Focused on clarity, hierarchy, and professional presentation over dynamic functionality.",
        ],
        techStack: [
            {
                category: "Frontend",
                technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
            },
            {
                category: "Backend",
                technologies: ["PHP", "Yii Framework"],
            },
        ],
        designDecisions: {
            title: "Design & Content Decisions",
            items: [
                "Strong visual emphasis on engineering and hardware-related imagery",
                "Clear sectioning to separate services, plans, and value proposition",
                "Content-first layout focused on explaining complex services clearly",
                "Responsive design to ensure accessibility across devices",
                "Professional visual language aligned with an engineering audience",
            ],
        },
        results:
            "The project delivered a clean and professional corporate website that effectively communicated B-Circuits' engineering services and development capabilities. It served as a digital presence aligned with the company's technical focus, reinforcing credibility and providing a clear entry point for potential clients.",
        badges: [
            "PHP",
            "Yii Framework",
            "HTML",
            "CSS",
            "Bootstrap",
            "Corporate Website",
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
        slug: "rtls-system",
        title: "RTLS System (Real-Time Locating System)",
        year: "2021",
        type: "IoT · Embedded Systems · Web Platform",
        status: "Prototype",
        hero: {
            shortDescription:
                "A real-time locating system (RTLS) prototype combining embedded firmware, wireless communication, and a web-based visualization platform to track the position of electronic devices with high accuracy.",
            ctas: [],
        },
        overview: {
            goal: "The goal of this project was to design and validate a real-time positioning system capable of tracking mobile devices inside an indoor environment, combining embedded electronics, positioning algorithms, and a web-based visualization interface.",
            challenge:
                "The main challenge was achieving reliable positioning accuracy in an indoor environment while integrating firmware, data transmission, and real-time visualization into a cohesive system suitable for future commercial development.",
            role: "I worked across the full technical stack: developing the firmware for the microcontroller, implementing the positioning algorithm, building the backend API to receive device data, and creating the web interface to visualize device positions in real time.",
        },
        facts: {
            role: "Full-Stack & Embedded Systems Developer",
            timeline: "2021",
            platform: "Web · Embedded · IoT",
            team: "Hardware & software collaboration",
            repository: "Private",
        },
        screenshots: [
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/rtls/screen2.jpg",
                alt: "RTLS web dashboard",
                caption:
                    "Web-based visualization of real-time device positions",
            },
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/rtls/screen1.jpg",
                alt: "RTLS electronic board prototype",
                caption: "RTLS hardware prototype (firmware developed by me)",
            },
        ],
        whatIBuilt: [
            "Developed firmware for the microcontroller handling positioning logic and data transmission.",
            "Implemented a trilateration-based positioning algorithm.",
            "Built a backend API to receive positioning data from embedded devices.",
            "Designed and developed a web interface to visualize device positions in real time.",
            "Integrated wireless communication between anchors, tags, and the server.",
            "Collaborated with the hardware team responsible for PCB design.",
        ],
        techStack: [
            {
                category: "Embedded Systems",
                technologies: ["STM32 Microcontroller", "WiFi Communication"],
            },
            {
                category: "Frontend",
                technologies: ["React", "Redux"],
            },
            {
                category: "Backend",
                technologies: ["Node.js", "PHP", "MySQL"],
            },
        ],
        designDecisions: {
            title: "Technical & System Design Decisions",
            items: [
                "Separated firmware logic from web visualization for modularity",
                "Real-time data flow optimized for low-latency position updates",
                "Web interface designed to clearly represent spatial positioning",
                "System structured to allow future commercial scalability",
            ],
        },
        results:
            "This prototype successfully demonstrated an indoor RTLS system with approximately 30 cm accuracy, validating both the positioning algorithm and the end-to-end integration between embedded hardware and a web-based visualization platform.",
        badges: [
            "IoT",
            "Embedded Systems",
            "RTLS",
            "Firmware",
            "Web Platform",
            "Prototype",
            "React",
            "PHP",
            "MySQL",
            "REST API",
        ],
        navigation: {
            next: {
                slug: "next-project-slug",
                title: "Next Project",
            },
        },
    },
    {
        slug: "eiwa",
        title: "Eiwa Water Level Sensor",
        year: "2020",
        type: "IoT Prototype · Firmware & API Integration",
        status: "Private · Prototype",
        hero: {
            shortDescription:
                "A prototype IoT solution to estimate water level in 20L containers using capacitive sensing, featuring a custom firmware algorithm and an API integration layer to store and expose measurements to a companion Android app.",
            ctas: [],
        },
        overview: {
            goal: "The goal of this project was to build a reliable prototype capable of estimating the liquid level in water containers using capacitive sensing, and to deliver those readings to a backend service that could be consumed by a mobile application.",
            challenge:
                "The main technical challenge was translating raw sensor readings into a stable and meaningful “water level” value under real-world conditions. This required careful handling of noise, calibration behavior, and ensuring consistent measurements over time, while keeping the firmware lightweight and reliable.",
            role: "I was responsible for developing the measurement algorithm in firmware and implementing the data delivery flow to a backend REST API. I also provided technical guidance to the Android team on the API contract and database structure to store device metadata and measurement history. I did not design or build the electronics, and I did not develop the Android application.",
        },
        facts: {
            role: "Firmware & Backend Integration",
            timeline: "2020",
            platform: "IoT · Firmware + API",
            team: "Cross-functional (mobile handled by a third party)",
            repository: "Private",
        },
        screenshots: [
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/eiwa/screen1.jpg",
                alt: "Android app showing the water level percentage",
                caption:
                    "Mobile view consuming measurements from the backend API",
            },
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/eiwa/screen2.jpg",
                alt: "Capacitive sensor board close-up",
                caption:
                    "Hardware prototype used for validation (electronics not developed by me)",
            },
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/eiwa/screen3.jpg",
                alt: "Device installed on a water container for testing",
                caption:
                    "Prototype installation used during real-world measurement tests",
            },
        ],
        whatIBuilt: [
            "Designed and implemented the firmware algorithm to estimate liquid level from capacitive sensor readings.",
            "Implemented the firmware networking flow to send measurements to a backend REST API over WiFi (ESP8266).",
            "Defined the API contract required to register devices and store measurement history.",
            "Advised on database modeling to persist device metadata, measurement logs, and last-known status.",
            "Supported integration with a third-party Android application by aligning payload formats and endpoint behavior.",
            "Validated the prototype through measurement tests with satisfactory results under real usage conditions.",
        ],
        techStack: [
            {
                category: "Firmware",
                technologies: ["C++", "ESP8266", "WiFi"],
            },
            {
                category: "Backend Integration",
                technologies: ["REST API", "Database Modeling"],
            },
            {
                category: "Domain",
                technologies: ["Capacitive Sensing", "IoT Prototyping"],
            },
            {
                category: "Mobile",
                technologies: ["Android"],
            },
        ],
        designDecisions: {
            title: "Technical Decisions",
            items: [
                "Firmware-first approach to keep the measurement logic close to the sensor and reduce backend complexity",
                "Stable payload structure for long-term device compatibility and straightforward mobile consumption",
                "Database design focused on traceability: device metadata + time-series measurement history",
                "Clear separation of responsibilities between firmware delivery and mobile presentation layer",
            ],
        },
        results:
            "The prototype achieved satisfactory measurement results and proved the feasibility of using capacitive sensing for water-level estimation in real-world conditions. The project also established a clean integration path between embedded firmware and a mobile-facing backend API, enabling reliable ingestion and storage of device readings.",
        badges: [
            "IoT",
            "Firmware",
            "C++",
            "ESP8266",
            "WiFi",
            "REST API",
            "Android",
            "Prototype",
        ],
        navigation: {
            next: {
                slug: "rtls-system",
                title: "RTLS System",
            },
        },
    },
    {
        slug: "ecohyt",
        title: "EcoHyT Temperature & Humidity Monitor",
        year: "2018",
        type: "IoT Prototype · Firmware & API Integration",
        status: "Private",
        hero: {
            shortDescription:
                "An IoT monitoring prototype that measures room temperature and humidity, displays readings on an onboard LCD, and sends time-series measurements to a REST API for storage in MySQL and visualization in an existing web dashboard.",
            ctas: [],
        },
        overview: {
            goal: "The goal of this project was to implement the firmware and connectivity layer for an embedded monitoring device that captures temperature and humidity readings, shows them locally on an LCD, and reliably uploads the measurements to the client's backend for historical tracking and visualization.",
            challenge:
                "The core challenge was ensuring consistent measurements and dependable delivery over WiFi to the backend API, while keeping the firmware stable and lightweight. Additionally, integration required aligning the device payloads with an existing web platform and database schema so the client could visualize the data without changing their dashboard workflow.",
            role: "I handled the firmware implementation end-to-end: sensor measurement logic, LCD rendering, and the networking flow to send readings to a REST API. I also implemented the required API endpoints within the client's existing web application to persist data into MySQL. I did not design or build the electronics hardware, and the dashboard UI was already provided by the client.",
        },
        facts: {
            role: "Firmware & Backend Integration",
            timeline: "2018",
            platform: "IoT · Firmware + API",
            team: "Collaborative (client owned dashboard)",
            repository: "Private",
        },
        screenshots: [
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/ecohyt/screen2.jpg",
                alt: "EcoHyT dashboard",
                caption:
                    "Monitoring dashboard displaying historical temperature and humidity readings",
            },
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/ecohyt/screen3.jpg",
                alt: "EcoHyT device close-up",
                caption: "Hardware prototype used for testing",
            },
        ],
        whatIBuilt: [
            "Implemented firmware logic to measure temperature and humidity from the embedded sensors.",
            "Displayed real-time readings on the device LCD for local monitoring and quick validation.",
            "Implemented WiFi connectivity (ESP8266) to send measurements to a backend REST API.",
            "Aligned payload structure with the client's backend requirements for seamless ingestion.",
            "Implemented the necessary API endpoints inside the client's existing web application.",
            "Stored measurements in MySQL to enable historical tracking and visualization in the client dashboard.",
            "Ensured stable, repeatable data delivery suitable for continuous monitoring scenarios.",
        ],
        techStack: [
            {
                category: "Firmware",
                technologies: ["C++", "ESP8266", "WiFi", "LCD Display"],
            },
            {
                category: "Backend Integration",
                technologies: ["REST API", "MySQL"],
            },
            {
                category: "Domain",
                technologies: [
                    "Temperature Monitoring",
                    "Humidity Monitoring",
                    "IoT Prototyping",
                ],
            },
        ],
        designDecisions: {
            title: "Technical Decisions",
            items: [
                "Local LCD output to provide immediate validation and troubleshooting during field testing",
                "Lightweight, consistent API payloads to integrate smoothly with an existing web platform",
                "Time-series storage in MySQL to support charts and historical analysis in the client's dashboard",
                "Separation of concerns: firmware focused on measurement + delivery; dashboard focused on visualization",
            ],
        },
        results:
            "This project delivered a working monitoring prototype where device readings were displayed locally and reliably ingested into the client's backend. By integrating the firmware data flow with the client's REST API and MySQL storage, the existing dashboard could immediately visualize historical measurements without requiring changes to the frontend reporting experience.",
        badges: [
            "IoT",
            "Firmware",
            "C++",
            "ESP8266",
            "WiFi",
            "REST API",
            "MySQL",
            "LCD",
        ],
        navigation: {
            next: {
                slug: "eiwa-water-level-sensor",
                title: "Eiwa Water Level Sensor",
            },
        },
    },
    {
        slug: "print-quote-now",
        title: "PrintQuoteNow",
        year: "2022",
        type: "Enterprise Web Application",
        status: "Active / Long-term Project",
        hero: {
            shortDescription:
                "A comprehensive print management platform featuring an advanced gang-run optimization algorithm, instant quoting, production workflows, and accounting integration through QuickBooks.",
            ctas: [
                {
                    label: "View Live",
                    href: "https://printquotenow.com",
                },
            ],
        },
        overview: {
            goal: "Build a scalable print management system capable of generating instant, highly optimized print quotes while managing the full production lifecycle, invoicing, and reporting.",
            challenge:
                "Designing and implementing a complex gang-run algorithm to optimally position multiple print jobs on a single sheet, minimizing paper waste and machine time, while keeping the system flexible for continuous feature expansion over multiple years.",
            role: "Lead Full-Stack Developer responsible for system architecture, core algorithm development, API design, cloud infrastructure, and long-term platform evolution.",
        },
        facts: {
            role: "Lead Full-Stack Developer",
            timeline: "2022",
            platform: "Enterprise web application for printing companies",
            team: "4 developers",
            repository: "Private",
        },
        screenshots: [
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/pqn/screen1.jpg",
                alt: "Instant quote builder interface",
                caption:
                    "Advanced quote builder powered by the gang-run optimization algorithm.",
            },
        ],
        whatIBuilt: [
            "Gang-run optimization algorithm to efficiently position multiple print jobs on a single sheet.",
            "Instant quote engine calculating costs based on paper usage, machine time, ink, and finishing processes.",
            "REST API to support quoting, production workflows, and integrations.",
            "Invoice management module with QuickBooks API integration to push invoices and synchronize accounting data.",
            "Reporting system capable of exporting synchronized financial and production data.",
            "AWS cloud infrastructure setup and deployment for scalability and reliability.",
            "Reporting system capable of exporting synchronized financial and production data.",
        ],
        techStack: [
            {
                category: "Frontend",
                technologies: ["React", "Redux", "HTML", "CSS"],
            },
            {
                category: "Backend",
                technologies: ["PHP", "Node.js", "Yii Framework"],
            },
            {
                category: "Database",
                technologies: ["MySQL"],
            },
            {
                category: "Cloud & Infrastructure",
                technologies: [
                    "AWS EC2",
                    "AWS Lambda",
                    "AWS RDS",
                    "AWS S3",
                    "Route 53",
                ],
            },
            {
                category: "Integrations",
                technologies: ["QuickBooks API", "REST APIs"],
            },
        ],
        designDecisions: {
            title: "Key Architectural and Technical Decisions",
            items: [
                "Custom gang-run algorithm developed from scratch using mathematical and geometric optimization techniques.",
                "Modular system design to allow continuous feature expansion without disrupting existing workflows.",
                "Separation of pricing logic, production logic, and accounting integrations for maintainability.",
                "Use of AWS managed services to ensure scalability, fault tolerance, and long-term reliability.",
            ],
        },
        results:
            "The platform enabled printing companies to generate instant, highly optimized quotes, significantly reducing paper waste and manual estimation time. Its accounting integration streamlined invoicing workflows and improved financial reporting accuracy.",
        badges: [
            "Enterprise Application",
            "Custom Algorithm",
            "Gang Optimization",
            "AWS Architecture",
            "EC2",
            "RDS",
            "S3",
            "Route 53",
            "Load Balancer",
            "React",
            "Redux",
            "PHP",
            "Yii Framework",
            "MySQL",
            "QuickBooks API",
            "REST APIs",
            "Private / Restricted",
        ],
        navigation: {
            previous: {
                slug: "eco-hyt",
                title: "EcoHyT",
            },
            next: {
                slug: "printing-shop-platform",
                title: "Printing Shop Platform",
            },
        },
    },
    {
        slug: "bmade-inventory",
        title: "B-Made Inventory System",
        year: "2017",
        type: "Internal Web Application · Inventory Management",
        status: "Private / Internal Use",
        hero: {
            shortDescription:
                "An internal inventory management system designed to centralize electronic component tracking, supplier data, and operational records in a structured, searchable web dashboard.",
            ctas: [],
        },
        overview: {
            goal: "Create a reliable internal web platform to manage electronic component inventory with clear traceability, fast search, and controlled access for staff.",
            challenge:
                "Keeping inventory data consistent across categories, manufacturers, and part numbers while maintaining a UI that stays fast and easy to use for day-to-day operations.",
            role: "Full-Stack Developer responsible for implementing the web application, backend logic, database structure, and deployment on AWS.",
        },
        facts: {
            role: "Full-Stack Developer",
            timeline: "2017",
            platform: "Web",
            team: "Solo project",
            repository: "Private",
        },
        screenshots: [
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/bmade-inventory/screen1.jpg",
                alt: "B-Made dashboard navigation",
                caption:
                    "Structured navigation for inventory and administration modules.",
            },
        ],
        whatIBuilt: [
            "Inventory module to manage electronic components with categories, manufacturers, and part number references.",
            "Search and filtering experience to quickly locate parts across large inventories.",
            "Admin section to manage internal users and configuration settings.",
            "Core entities for client and company records to support internal operational workflows.",
            "REST API endpoints to support CRUD operations and future integration needs.",
            "Deployment and hosting on AWS for a stable internal environment.",
        ],
        techStack: [
            {
                category: "Frontend",
                technologies: ["React", "Redux", "Material UI"],
            },
            {
                category: "Backend",
                technologies: ["PHP", "Node.js", "Yii Framework"],
            },
            {
                category: "Database",
                technologies: ["MySQL"],
            },
            {
                category: "Cloud & Infrastructure",
                technologies: ["AWS"],
            },
        ],
        designDecisions: {
            title: "Design & UX Decisions",
            items: [
                "Material UI-based interface to keep internal screens consistent and easy to scan.",
                "Table-first UX with search and filters to optimize for daily inventory operations.",
                "Clear separation between inventory entities (components, categories, manufacturers) to reduce data duplication.",
                "Role-based access patterns to keep internal administration controlled and auditable.",
            ],
        },
        results:
            "The system replaced fragmented manual tracking with a centralized inventory source of truth, improving operational visibility and reducing time spent locating parts and validating stock data.",
        badges: [
            "Internal Tool",
            "Inventory Management",
            "React",
            "Redux",
            "Material UI",
            "PHP",
            "Node.js",
            "Yii Framework",
            "MySQL",
            "AWS Architecture",
            "REST API",
            "Private / Restricted",
        ],
        navigation: {
            previous: {
                slug: "print-quote-now",
                title: "PrintQuoteNow",
            },
            next: {
                slug: "sprink-ads",
                title: "Sprink Ads",
            },
        },
    },
    {
        slug: "controlec",
        title: "Controlec",
        year: "2015",
        type: "Mobile App + Web Platform",
        status: "Completed",
        hero: {
            shortDescription:
                "A mobile and web-based platform designed to support the coordination and monitoring of electoral processes in Yucatan, providing operational tools for field teams and administrators.",
            ctas: [],
        },
        overview: {
            goal: "Support the coordination, tracking, and supervision of election-related activities through a mobile application connected to a web-based backend.",
            challenge:
                "Contributing to a time-sensitive, multi-module platform where reliability, clear workflows, and coordination between mobile and backend components were critical.",
            role: "Android Developer (team contributor). Supported the development of multiple modules within the mobile application as part of a larger engineering team.",
        },
        facts: {
            role: "Android Developer (Contributor)",
            timeline: "2015",
            platform: "Android + Web",
            team: "Multiple developers",
            repository: "Private",
        },
        screenshots: [
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/controlec/preview.png",
                alt: "Controlec mobile application home screen",
                caption:
                    "Main navigation screen of the Controlec Android application.",
            },
        ],
        whatIBuilt: [
            "Contributed to the development and maintenance of several Android application modules.",
            "Implemented features and UI logic using Java for Android.",
            "Worked closely with the team to integrate mobile features with existing backend services.",
            "Provided development support within a collaborative, multi-developer environment.",
        ],
        techStack: [
            {
                category: "Mobile",
                technologies: ["Android", "Java"],
            },
            {
                category: "Backend & Platform",
                technologies: ["REST API", "Web Platform"],
            },
        ],
        designDecisions: {
            title: "Development Approach",
            items: [
                "Modular Android architecture to allow parallel development by multiple developers.",
                "Clear separation between mobile UI logic and backend services.",
                "Incremental feature delivery aligned with project timelines.",
            ],
        },
        results:
            "The project was successfully delivered as a collaborative effort, providing a functional platform to support the coordination and monitoring of electoral operations in Yucatan.",
        badges: [
            "Android",
            "Java",
            "Mobile App",
            "Team Project",
            "Private / Restricted",
        ],
        navigation: {
            previous: {
                slug: "b-made-inventory-system",
                title: "B-Made - Inventory System",
            },
            next: {
                slug: "print-quote-now",
                title: "PrintQuoteNow",
            },
        },
    },
    {
        slug: "absolute-eddm",
        title: "Absolute EDDM",
        year: "2018",
        type: "Web Application · Direct Mail / EDDM Ordering Platform",
        status: "Private / Restricted",
        hero: {
            shortDescription:
                "A web platform that allows customers to plan EDDM (Every Door Direct Mail) campaigns by selecting USPS routes, uploading print-ready artwork, completing payment via CardPointe, and generating the required list and documentation for fulfillment.",
            ctas: [],
        },
        overview: {
            goal: "Create a self-service ordering experience for EDDM campaigns where users can select mailing routes, estimate total costs (printing + postage), upload artwork, complete checkout, and generate the necessary data to execute fulfillment through USPS.",
            challenge:
                "Building a workflow that combines interactive route selection and pricing logic with a reliable order management backend, while keeping the UX straightforward for non-technical customers.",
            role: "Full-Stack Developer responsible for implementing the end-to-end web application, including customer checkout flows, admin management features, pricing logic, and integrations.",
        },
        facts: {
            role: "Full-Stack Developer",
            timeline: "2018",
            platform: "Web",
            team: "Small team",
            repository: "Private",
        },
        screenshots: [
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/eddm/screen1.png",
                alt: "Absolute EDDM landing page",
                caption: "Landing page introducing the Absolute EDDM platform.",
            },
            {
                src: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/projects/eddm/screen2.png",
                alt: "Route selection map tool",
                caption:
                    "Interactive map tool to select USPS routes and preview audience details and costs.",
            },
        ],
        whatIBuilt: [
            "Customer-facing EDDM ordering workflow: route selection, product configuration, artwork upload, and checkout.",
            "Interactive mapping experience to browse and select USPS routes with detailed route statistics.",
            "Pricing logic combining print options and EDDM postage costs for accurate campaign totals.",
            "Checkout and payment flow integrated with CardPointe for secure transaction processing.",
            "Admin dashboard to manage customers, orders, pricing rules, and operational settings.",
            "AWS-based hosting and deployment setup for reliability and scalability.",
        ],
        techStack: [
            {
                category: "Frontend",
                technologies: [
                    "HTML",
                    "CSS",
                    "Bootstrap",
                    "JavaScript",
                    "jQuery",
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
                category: "Cloud & Infrastructure",
                technologies: ["AWS"],
            },
            {
                category: "Integrations",
                technologies: ["USPS EDDM", "CardPointe Payment Gateway"],
            },
        ],
        designDecisions: {
            title: "Key Design & Technical Decisions",
            items: [
                "A guided, step-based customer flow to reduce friction for non-technical users purchasing mail campaigns.",
                "Map-first interaction model to make route selection intuitive and visual.",
                "Centralized pricing rules and admin-controlled configuration to support frequent business changes.",
                "Payment processing abstracted into a dedicated integration layer to keep checkout logic maintainable.",
            ],
        },
        results:
            "The platform streamlined the process of launching EDDM campaigns by combining route discovery, pricing, artwork submission, and payment into a single workflow, reducing manual coordination and enabling faster fulfillment.",
        badges: [
            "EDDM",
            "USPS Integration",
            "Mapping Tool",
            "Payment Processing",
            "CardPointe",
            "AWS",
            "PHP",
            "Yii Framework",
            "MySQL",
            "Bootstrap",
            "jQuery",
            "Private / Restricted",
        ],
        navigation: {
            previous: {
                slug: "controlec",
                title: "Controlec",
            },
            next: {
                slug: "print-quote-now",
                title: "PrintQuoteNow",
            },
        },
    },
];
