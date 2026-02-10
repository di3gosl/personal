import type { Project as PrismaProject } from "@prisma/client";

export type Project = {
    slug: string;
    title: string;
    description: string;
    year: number;
    image: string;
    label?: string | null;
    isFeatured?: boolean;
    type: string;
    status: string;
    liveUrl?: string | null;
    repoUrl?: string | null;
    goal: string;
    challenge: string;
    roleDescription: string;
    role: string;
    platform: string;
    team: string;
    repository: string;
    screenshots: {
        src: string;
        previewSrc?: string | null;
        caption: string;
    }[];
    whatIBuilt: string[];
    techStack: {
        category: string;
        technologies: string[];
    }[];
    designDecisions: string[];
    results: string;
    // navigation?: {
    //     previous?: {
    //         slug: string;
    //         title: string;
    //     };
    //     next?: {
    //         slug: string;
    //         title: string;
    //     };
    // };
};

export type ProjectCard = {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    year: number;
    label: string | null;
    tags: { tag: { id: string; tag: string } }[];
};

export type ProjectWithCounts = PrismaProject & {
    _count: {
        screenshots: number;
        tags: number;
    };
};
