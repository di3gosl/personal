"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

type ImportProject = {
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
        caption: string;
    }[];
    whatIBuilt: string[];
    techStack: {
        category: string;
        technologies: string[];
    }[];
    designDecisions: string[];
    results: string;
    badges: string[];
};

type ImportResult = {
    success: boolean;
    message: string;
    missingTags?: string[];
};

export async function importProjectFromJson(
    jsonData: string,
): Promise<ImportResult> {
    try {
        // Parse the JSON
        let projectData: ImportProject;
        console.log(jsonData);
        try {
            projectData = JSON.parse(jsonData);
        } catch {
            return {
                success: false,
                message: "Invalid JSON format. Please check your input.",
            };
        }

        // Validate required fields
        const requiredFields = [
            "slug",
            "title",
            "description",
            "technologies",
            "year",
            "image",
            "label",
            "type",
            "status",
            "shortDescription",
            "goal",
            "challenge",
            "roleDescription",
            "role",
            "platform",
            "team",
            "repository",
            "screenshots",
            "whatIBuilt",
            "techStack",
            "designDecisions",
            "results",
            "badges",
        ];

        const missingFields = requiredFields.filter(
            (field) => !(field in projectData),
        );

        if (missingFields.length > 0) {
            return {
                success: false,
                message: `Missing required fields: ${missingFields.join(", ")}`,
            };
        }

        // Collect all tag names that need to exist
        const allTagNames = new Set<string>();

        // Add badges
        projectData.badges.forEach((badge) => allTagNames.add(badge));

        // Add technologies (from top-level)
        projectData.technologies.forEach((tech) => allTagNames.add(tech));

        // Add technologies from techStack
        projectData.techStack.forEach((stack) => {
            stack.technologies.forEach((tech) => allTagNames.add(tech));
        });

        // Fetch all tags from database
        const existingTags = await prisma.tag.findMany({
            select: {
                id: true,
                tag: true,
            },
        });

        // Create a map of tag names to IDs
        const tagMap = new Map<string, string>();
        existingTags.forEach((tag) => {
            tagMap.set(tag.tag, tag.id);
        });

        // Check for missing tags
        const missingTags = Array.from(allTagNames).filter(
            (tagName) => !tagMap.has(tagName),
        );

        if (missingTags.length > 0) {
            return {
                success: false,
                message: `The following tags need to be created first before importing this project:`,
                missingTags: missingTags.sort(),
            };
        }

        // Check if project exists (by slug)
        const existingProject = await prisma.project.findUnique({
            where: { slug: projectData.slug },
        });

        // Prepare project tags
        const projectTags: { tagId: string; isPreview: boolean }[] = [];

        // Add badges (isPreview = false)
        projectData.badges.forEach((badge) => {
            const tagId = tagMap.get(badge);
            if (tagId) {
                projectTags.push({
                    tagId,
                    isPreview: false,
                });
            }
        });

        // Add technologies from top-level (isPreview = true)
        projectData.technologies.forEach((tech) => {
            const tagId = tagMap.get(tech);
            if (tagId) {
                // Check if already added as badge
                const alreadyAdded = projectTags.some(
                    (pt) => pt.tagId === tagId,
                );
                if (!alreadyAdded) {
                    projectTags.push({
                        tagId,
                        isPreview: true,
                    });
                } else {
                    // If already added as badge, update to be preview
                    const existingTag = projectTags.find(
                        (pt) => pt.tagId === tagId,
                    );
                    if (existingTag) {
                        existingTag.isPreview = true;
                    }
                }
            }
        });

        // Prepare project data
        const projectDataToSave = {
            slug: projectData.slug,
            title: projectData.title,
            description: projectData.description,
            shortDescription: projectData.shortDescription,
            year: projectData.year,
            image: projectData.image,
            label: projectData.label,
            isFeatured: projectData.isFeatured ?? false,
            type: projectData.type,
            status: projectData.status,
            liveUrl: projectData.liveUrl || null,
            repoUrl: projectData.repoUrl || null,
            goal: projectData.goal,
            challenge: projectData.challenge,
            roleDescription: projectData.roleDescription,
            role: projectData.role,
            platform: projectData.platform,
            team: projectData.team,
            repository: projectData.repository,
            results: projectData.results,
            techStack: projectData.techStack,
            designDecisions: projectData.designDecisions,
            whatIBuilt: projectData.whatIBuilt,
        };

        let project;

        if (existingProject) {
            // Update existing project
            // First delete existing screenshots and tags
            await prisma.screenshot.deleteMany({
                where: { projectId: existingProject.id },
            });
            await prisma.projectTag.deleteMany({
                where: { projectId: existingProject.id },
            });

            project = await prisma.project.update({
                where: { id: existingProject.id },
                data: {
                    ...projectDataToSave,
                    screenshots: {
                        create: projectData.screenshots.map(
                            (screenshot, index) => ({
                                src: screenshot.src,
                                previewSrc: screenshot.previewSrc || null,
                                caption: screenshot.caption,
                                order: index,
                            }),
                        ),
                    },
                    tags: {
                        create: projectTags,
                    },
                },
            });

            revalidatePath("/admin/projects");
            revalidatePath(`/admin/projects/${existingProject.id}/edit`);
            revalidatePath("/portfolio");
            revalidatePath(`/portfolio/${project.slug}`);
            revalidatePath("/");

            return {
                success: true,
                message: `Project "${project.title}" updated successfully!`,
            };
        } else {
            // Create new project
            project = await prisma.project.create({
                data: {
                    ...projectDataToSave,
                    screenshots: {
                        create: projectData.screenshots.map(
                            (screenshot, index) => ({
                                src: screenshot.src,
                                previewSrc: screenshot.previewSrc || null,
                                caption: screenshot.caption,
                                order: index,
                            }),
                        ),
                    },
                    tags: {
                        create: projectTags,
                    },
                },
            });

            revalidatePath("/admin/projects");
            revalidatePath("/portfolio");
            revalidatePath("/");

            return {
                success: true,
                message: `Project "${project.title}" created successfully!`,
            };
        }
    } catch (error) {
        console.error("Failed to import project:", error);
        return {
            success: false,
            message: `Failed to import project: ${error instanceof Error ? error.message : "Unknown error"}`,
        };
    }
}
