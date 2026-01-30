"use server";

import prisma from "@/lib/prisma";

export async function getProject(id: string) {
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
        return { success: false, error: "Failed to fetch project", data: null };
    }
}
