export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            cols: 1,
            skills: [
                { name: "React" },
                { name: "Next.js" },
                { name: "TypeScript" },
                { name: "Tailwind CSS" },
                { name: "Shadcn/ui" },
                { name: "Redux" },
                { name: "Bootstrap" },
                { name: "CSS3" },
            ],
        },
        {
            title: "Backend",
            cols: 1,
            skills: [
                { name: "Node.js" },
                { name: "PHP" },
                { name: "Yii Framework" },
                { name: "REST APIs" },
                { name: "Python" },
                { name: "GraphQL" },
            ],
        },
        {
            title: "Cloud & DevOps",
            cols: 1,
            skills: [
                { name: "AWS EC2" },
                { name: "AWS RDS" },
                { name: "AWS S3" },
                { name: "AWS Amplify" },
                { name: "AWS Route 53" },
                { name: "AWS Lambda" },
                { name: "Linux" },
                { name: "Nginx" },
                { name: "Apache" },
            ],
        },
        {
            title: "Databases",
            cols: 1,
            skills: [
                { name: "MySQL" },
                { name: "MariaDB" },
                { name: "MongoDB" },
                { name: "SQLite" },
                { name: "Supabase" },
            ],
        },
        {
            title: "AI",
            cols: 1,
            skills: [
                { name: "OpenAI" },
                { name: "Anthropic Claude" },
                { name: "Google Gemini" },
                { name: "Chatbots & Assistants" },
                { name: "AI-driven automation" },
                { name: "GitHub Copilot" },
                { name: "Agentic Frameworks" },
                { name: "RAG" },
            ],
        },
        {
            title: "E-commerce",
            cols: 1,
            skills: [
                { name: "WordPress" },
                { name: "WordPress Plugins & Themes" },
                { name: "Shopify" },
                { name: "Shopware" },
                { name: "Printify" },
                { name: "Printful" },
                { name: "Gooten" },
                { name: "Stripe" },
                { name: "QuickBooks" },
            ],
        },
        {
            title: "Other Technologies",
            cols: 2,
            skills: [
                { name: "Unity Videogames" },
                { name: "Android" },
                { name: "Git" },
                { name: "GitHub" },
                { name: "Bitbucket" },
                { name: "C / C++" },
                { name: "Assembly" },
                { name: "Microcontrollers (Microchip, ARM, Espressif)" },
                { name: "LabVIEW" },
                { name: "Electronics" },
            ],
        },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center pt-18 pb-36">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="mb-16 space-y-4">
                    <p className="text-sm tracking-[0.4em] uppercase text-accent">
                        My Expertise
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg md:text-xl text-accent max-w-2xl">
                        A comprehensive toolkit built over 10+ years of hands-on
                        development
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className={`space-y-6 col-span-${category.cols}`}
                        >
                            <h3 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2">
                                {category.title}
                            </h3>
                            <div className={`flex flex-wrap gap-2`}>
                                {category.skills.map((skill, skillIdx) => (
                                    <span
                                        key={skillIdx}
                                        className="px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-lg border border-light hover:bg-light transition-colors"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 pt-12">
                    <p className="text-lg text-accent text-center max-w-4xl mx-auto">
                        Beyond these core technologies, I have a solid
                        background in software architecture, scalable system
                        design, and AI-driven automation. I&apos;m comfortable
                        owning projects end-to-end, from planning and API design
                        to deployment on AWS, while collaborating with
                        distributed teams and working within modern agile
                        workflows.
                    </p>
                </div>
            </div>
        </section>
    );
}
