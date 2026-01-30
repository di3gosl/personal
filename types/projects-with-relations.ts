import type { Project, Screenshot, ProjectTag, Tag } from "@prisma/client";

export type ProjectWithRelations = Omit<
    Project,
    "whatIBuilt" | "techStack" | "designDecisions"
> & {
    screenshots: Screenshot[];
    tags: (ProjectTag & { tag: Tag })[];
    whatIBuilt: string[];
    techStack: { category: string; technologies: string[] }[];
    designDecisions: string[];
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
