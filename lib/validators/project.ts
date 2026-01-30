import { z } from "zod";

// Schema for tech stack items
const techStackItemSchema = z.object({
    category: z.string().min(1, "Category is required"),
    technologies: z
        .array(z.string())
        .min(1, "At least one technology is required"),
});

// Schema for screenshots
const screenshotSchema = z.object({
    id: z.string().optional(),
    src: z.string().min(1, "Screenshot source is required"),
    previewSrc: z.string().optional(),
    caption: z.string().min(1, "Screenshot caption is required"),
    order: z.coerce.number().default(0),
});

// Schema for project tags
const projectTagSchema = z.object({
    tagId: z.string(),
    isPreview: z.boolean().default(false),
});

// Main project schema
export const projectSchema = z.object({
    slug: z
        .string()
        .min(1, "Slug is required")
        .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            "Slug must be lowercase with hyphens only",
        ),
    title: z.string().min(1, "Title is required"),
    description: z
        .string()
        .min(10, "Description must be at least 10 characters"),
    year: z.coerce.number().min(2000).max(2100),
    image: z.string().min(1, "Image URL is required"),
    label: z.string().optional().or(z.literal("")),
    isFeatured: z.boolean().default(false),
    type: z.string().min(1, "Type is required"),
    status: z.string().min(1, "Status is required"),
    liveUrl: z.string().url().optional().or(z.literal("")),
    repoUrl: z.string().url().optional().or(z.literal("")),
    goal: z.string().min(10, "Goal must be at least 10 characters"),
    challenge: z.string().min(10, "Challenge must be at least 10 characters"),
    roleDescription: z
        .string()
        .min(10, "Role description must be at least 10 characters"),
    role: z.string().min(1, "Role is required"),
    platform: z.string().min(1, "Platform is required"),
    team: z.string().min(1, "Team is required"),
    repository: z.string().min(1, "Repository info is required"),
    results: z.string().min(10, "Results must be at least 10 characters"),
    order: z.coerce.number().default(0),
    isActive: z.boolean().default(true),
    techStack: z
        .array(techStackItemSchema)
        .min(1, "At least one tech stack item is required"),
    designDecisions: z.array(z.string()).default([]),
    whatIBuilt: z.array(z.string()).default([]),
    screenshots: z.array(screenshotSchema).default([]),
    tags: z.array(projectTagSchema).default([]), // Array of tag objects with isPreview
});

export type ProjectFormData = z.infer<typeof projectSchema>;

// Schema for creating (requires all fields)
export const createProjectSchema = projectSchema;

// Schema for updating (all fields optional except what's being sent)
export const updateProjectSchema = projectSchema.partial();
