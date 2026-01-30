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

        return {
            success: true,
            data: project as ProjectWithRelations,
        };
    } catch (error) {
        console.error("Failed to fetch project:", error);
        return { success: false, error: "Failed to fetch project" };
    }
}
