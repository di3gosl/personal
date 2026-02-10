import { Tag } from "@/types/tag";

export const KIND_DESCRIPTIONS: Record<string, string> = {
    tech: "Programming languages, frameworks, and technologies",
    service: "Third-party services and APIs",
    tool: "Development tools and software",
    platform: "Deployment and hosting platforms",
    meta: "Project metadata and characteristics",
};

export const TAG_KINDS = [
    { value: "tech", label: "Technology" },
    { value: "service", label: "Service" },
    { value: "tool", label: "Tool" },
    { value: "platform", label: "Platform" },
    { value: "meta", label: "Meta" },
] as const;

export const TAG_KIND_LABELS: Record<Tag["kind"], string> = {
    tech: "Technology",
    service: "Service",
    tool: "Tool",
    platform: "Platform",
    meta: "Meta",
};
