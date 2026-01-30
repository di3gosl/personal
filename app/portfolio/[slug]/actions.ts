"use server";

import prisma from "@/lib/prisma";
import type { ProjectWithRelations } from "../../../types/projects-with-relations";

export async function getProject(slug: string): Promise<{
    success: boolean;
    data?: ProjectWithRelations;
    error?: string;
}> {
    try {
        const project = await prisma.project.findUnique({
            where: { slug },
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

        if (!project) {
            return { success: false, error: "Project not found" };
        }

        // Fetch previous and next projects based on the order field
        const previousProject = await prisma.project.findFirst({
            where: {
                order: { lt: project.order },
            },
            orderBy: { order: "desc" },
        });

        let previousProjectNavigation = undefined;
        if (previousProject) {
            previousProjectNavigation = {
                slug: previousProject.slug,
                title: previousProject.title,
            };
        }

        const nextProject = await prisma.project.findFirst({
            where: {
                order: { gt: project.order },
            },
            orderBy: { order: "asc" },
        });

        let nextProjectNavigation = undefined;
        if (nextProject) {
            nextProjectNavigation = {
                slug: nextProject.slug,
                title: nextProject.title,
            };
        }

        if (previousProject || nextProject) {
            (project as ProjectWithRelations).navigation = {
                previous: previousProjectNavigation,
                next: nextProjectNavigation,
            };
        }

        return {
            success: true,
            data: project as ProjectWithRelations,
        };
    } catch (error) {
        console.error("Failed to fetch project:", error);
        return { success: false, error: "Failed to fetch project" };
    }
}
