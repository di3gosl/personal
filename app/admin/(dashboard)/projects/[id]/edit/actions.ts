"use server";

import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import authOptions from "@/lib/auth";

export async function getProject(id: string) {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return { success: false, error: "Unauthorized", data: null };
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
        return { success: false, error: "Failed to fetch project", data: null };
    }
}
