"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import authOptions from "@/lib/auth";
import { projectSchema, type ProjectFormData } from "@/lib/validators/project";

export async function getProjects() {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        const projects = await prisma.project.findMany({
            where: {
                isDeleted: false,
            },
            orderBy: [{ order: "asc" }, { createdAt: "desc" }],
            include: {
                _count: {
                    select: {
                        screenshots: true,
                        tags: true,
                    },
                },
            },
        });

        return { success: true, data: projects };
    } catch (error) {
        console.error("Failed to fetch project:", error);
        return { success: false, error: "Failed to fetch project" };
    }
}

export async function getProject(id: string) {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        const project = await prisma.project.findUnique({
            where: { id },
            include: {
                screenshots: {
                    orderBy: { order: "asc" },
                },
                tags: {
                    include: {
                        tag: true,
                    },
                },
            },
        });

        return { success: true, data: project };
    } catch (error) {
        console.error("Failed to fetch project:", error);
        return { success: false, error: "Failed to fetch project" };
    }
}

export async function createProject(data: ProjectFormData) {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        const validated = projectSchema.safeParse(data);

        if (!validated.success) {
            return {
                success: false,
                error: "Validation failed",
                errors: validated.error.flatten().fieldErrors,
            };
        }

        const { screenshots, tags, ...projectData } = validated.data;

        // Check if slug already exists
        const existingProject = await prisma.project.findUnique({
            where: { slug: projectData.slug },
        });

        if (existingProject) {
            return {
                success: false,
                error: "A project with this slug already exists",
            };
        }

        const project = await prisma.project.create({
            data: {
                ...projectData,
                liveUrl: projectData.liveUrl || null,
                repoUrl: projectData.repoUrl || null,
                screenshots: {
                    create: screenshots.map((screenshot, index) => ({
                        src: screenshot.src,
                        previewSrc: screenshot.previewSrc || null,
                        caption: screenshot.caption,
                        order: screenshot.order ?? index,
                    })),
                },
                tags: {
                    create: tags.map((tag) => ({
                        tagId: tag.tagId,
                        isPreview: tag.isPreview,
                    })),
                },
            },
        });

        revalidatePath("/admin/projects");
        revalidatePath("/portfolio");
        revalidatePath("/");

        return { success: true, data: project };
    } catch (error) {
        console.error("Failed to create project:", error);
        return { success: false, error: "Failed to create project" };
    }
}

export async function updateProject(id: string, data: ProjectFormData) {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        const validated = projectSchema.safeParse(data);

        if (!validated.success) {
            return {
                success: false,
                error: "Validation failed",
                errors: validated.error.flatten().fieldErrors,
            };
        }

        const { screenshots, tags, ...projectData } = validated.data;

        // Check if slug already exists for another project
        const existingProject = await prisma.project.findFirst({
            where: {
                slug: projectData.slug,
                id: { not: id },
            },
        });

        if (existingProject) {
            return {
                success: false,
                error: "A project with this slug already exists",
            };
        }

        // Delete existing screenshots and tags
        await prisma.screenshot.deleteMany({
            where: { projectId: id },
        });
        await prisma.projectTag.deleteMany({
            where: { projectId: id },
        });

        const project = await prisma.project.update({
            where: { id },
            data: {
                ...projectData,
                liveUrl: projectData.liveUrl || null,
                repoUrl: projectData.repoUrl || null,
                screenshots: {
                    create: screenshots.map((screenshot, index) => ({
                        src: screenshot.src,
                        previewSrc: screenshot.previewSrc || null,
                        caption: screenshot.caption,
                        order: screenshot.order ?? index,
                    })),
                },
                tags: {
                    create: tags.map((tag) => ({
                        tagId: tag.tagId,
                        isPreview: tag.isPreview,
                    })),
                },
            },
        });

        revalidatePath("/admin/projects");
        revalidatePath(`/admin/projects/${id}/edit`);
        revalidatePath("/portfolio");
        revalidatePath(`/portfolio/${project.slug}`);
        revalidatePath("/");

        return { success: true, data: project };
    } catch (error) {
        console.error("Failed to update project:", error);
        return { success: false, error: "Failed to update project" };
    }
}

export async function deleteProject(id: string) {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        // Soft delete - just mark as deleted
        await prisma.project.update({
            where: { id },
            data: { isDeleted: true },
        });

        revalidatePath("/admin/projects");
        revalidatePath("/portfolio");
        revalidatePath("/");

        return { success: true };
    } catch (error) {
        console.error("Failed to delete project:", error);
        return { success: false, error: "Failed to delete project" };
    }
}

export async function getTags() {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return { success: false, error: "Unauthorized" };
    }

    try {
        const tags = await prisma.tag.findMany({
            orderBy: [{ kind: "asc" }, { order: "asc" }, { tag: "asc" }],
        });

        return { success: true, data: tags };
    } catch (error) {
        console.error("Failed to fetch tags:", error);
        return { success: false, error: "Failed to fetch tags" };
    }
}
