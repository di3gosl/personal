"use server";

import prisma from "@/lib/prisma";

export async function getProjects() {
    try {
        const projects = await prisma.project.findMany({
            where: { isDeleted: false, isActive: true },
            orderBy: { order: "desc" },
            select: {
                id: true,
                title: true,
                slug: true,
                description: true,
                image: true,
                year: true,
                order: true,
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

export async function getFilterableTags() {
    try {
        const tags = await prisma.tag.findMany({
            where: { isFilterable: true },
            orderBy: { tag: "asc" },
            select: {
                id: true,
                tag: true,
                kind: true,
            },
        });

        return { success: true, data: tags };
    } catch (error) {
        console.error("Failed to fetch filterable tags:", error);
        return { success: false, error: "Failed to fetch tags", data: [] };
    }
}
