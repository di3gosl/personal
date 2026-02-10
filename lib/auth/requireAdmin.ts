"use server";

import { getServerSession } from "next-auth";
import { UserRole } from "@prisma/client";
import authOptions from "@/lib/auth";

export async function requireAdmin() {
    const session = await getServerSession(authOptions);
    if (!session?.user || session.user.role !== UserRole.ADMIN) {
        throw new Error("Unauthorized: Admin access required");
    }

    return session;
}
