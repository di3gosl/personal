"use server";

import prisma from "@/lib/prisma";

export async function getProjects() {
    try {
        const projects = await prisma.project.findMany({
            where: { isDeleted: false, isActive: true },
            orderBy: { order: "asc" },
            select: {
                id: true,
                title: true,
                slug: true,
                description: true,
                image: true,
                year: true,
                label: true,
                tags: {
                    where: { isPreview: true },
                    select: {
                        tag: {
                            select: {
                                id: true,
                                tag: true,
                            },
                        },
                    },
                },
            },
        });

        return { success: true, data: projects };
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        return { success: false, error: "Failed to fetch projects", data: [] };
    }
}
