export type Project = {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    year: number;
    image: string;
    label: string;
    isFeatured?: boolean;
    type: string;
    status: string;
    shortDescription: string;
    liveUrl?: string;
    repoUrl?: string;
    goal: string;
    challenge: string;
    roleDescription: string;
    role: string;
    platform: string;
    team: string;
    repository: string;
    screenshots: {
        src: string;
        previewSrc?: string;
        alt: string;
        caption?: string;
    }[];
    whatIBuilt: string[];
    techStack: {
        category: string;
        technologies: string[];
    }[];
    designDecisions: string[];
    results: string;
    badges: string[];
    navigation?: {
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
