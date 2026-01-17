export type ProjectDetail = {
    slug: string;
    title: string;
    year: string;
    type: string;
    status: string;
    hero: {
        shortDescription: string;
        ctas: {
            label: string;
            href: string;
            variant?: "default" | "outline";
        }[];
    };
    overview: {
        goal: string;
        challenge: string;
        role: string;
    };
    facts: {
        role: string;
        timeline: string;
        platform: string;
        team: string;
        repository: string;
    };
    screenshots: {
        src: string;
        alt: string;
        caption?: string;
    }[];
    whatIBuilt: string[];
    techStack: {
        category: string;
        technologies: string[];
    }[];
    designDecisions: {
        title: string;
        items: string[];
    };
    results: string;
    badges: string[];
    navigation: {
        previous?: {
            slug: string;
            title: string;
        };
        next?: {
            slug: string;
            title: string;
        };
    };
};
