"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { tagSchema, type TagFormData } from "@/lib/validators/tag";

export async function getTags() {
    try {
        const tags = await prisma.tag.findMany({
            orderBy: [{ kind: "asc" }, { order: "asc" }, { tag: "asc" }],
            include: {
                _count: {
                    select: {
                        projects: true,
                    },
                },
            },
        });

        return { success: true, data: tags };
    } catch (error) {
        console.error("Failed to fetch tags:", error);
        return { success: false, error: "Failed to fetch tags" };
    }
}

export async function getTag(id: string) {
    try {
        const tag = await prisma.tag.findUnique({
            where: { id },
        });

        return { success: true, data: tag };
    } catch (error) {
        console.error("Failed to fetch tag:", error);
        return { success: false, error: "Failed to fetch tag" };
    }
}

export async function createTag(data: TagFormData) {
    try {
        const validatedData = tagSchema.parse(data);

        const tag = await prisma.tag.create({
            data: validatedData,
        });

        revalidatePath("/admin/tags");
        return { success: true, data: tag };
    } catch (error) {
        console.error("Failed to create tag:", error);
        return { success: false, error: "Failed to create tag" };
    }
}

export async function updateTag(id: string, data: TagFormData) {
    try {
        const validatedData = tagSchema.parse(data);

        const tag = await prisma.tag.update({
            where: { id },
            data: validatedData,
        });

        revalidatePath("/admin/tags");
        return { success: true, data: tag };
    } catch (error) {
        console.error("Failed to update tag:", error);
        return { success: false, error: "Failed to update tag" };
    }
}

export async function deleteTag(id: string) {
    try {
        // First check if the tag is being used by any projects
        const tagWithProjects = await prisma.tag.findUnique({
            where: { id },
            include: {
                _count: {
                    select: {
                        projects: true,
                    },
                },
            },
        });

        if (tagWithProjects && tagWithProjects._count.projects > 0) {
            return {
                success: false,
                error: `Cannot delete tag. It is being used by ${tagWithProjects._count.projects} project(s).`,
            };
        }

        await prisma.tag.delete({
            where: { id },
        });

        revalidatePath("/admin/tags");
        return { success: true };
    } catch (error) {
        console.error("Failed to delete tag:", error);
        return { success: false, error: "Failed to delete tag" };
    }
}
