import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import { rateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

const LOGIN_RATE_LIMIT = 10; // 10 attempts
const LOGIN_RATE_WINDOW = 15 * 60 * 1000; // per 15 minutes

export const authOptions: AuthOptions = {
    pages: {
        signIn: "/admin/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24, // 24 hours
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string;
                session.user.role = token.role as string;
            }
            return session;
        },
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Rate limiting by IP
                const headersList = await headers();
                const ip =
                    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
                    "unknown";

                const { success: rateLimitOk } = rateLimit(
                    `login:${ip}`,
                    LOGIN_RATE_LIMIT,
                    LOGIN_RATE_WINDOW,
                );

                if (!rateLimitOk) {
                    throw new Error("TooManyRequests");
                }
                const parsed = loginSchema.safeParse(credentials);

                if (!parsed.success) {
                    return null;
                }

                const { email, password } = parsed.data;

                const user = await prisma.user.findUnique({
                    where: { email },
                });

                if (!user || !user.isActive || user.isDeleted) {
                    return null;
                }

                if (user.role !== UserRole.ADMIN) {
                    return null;
                }

                const passwordMatch = await bcrypt.compare(
                    password,
                    user.password,
                );

                if (!passwordMatch) {
                    return null;
                }

                return {
                    id: String(user.id),
                    email: user.email,
                    name: user.name,
                    role: user.role,
                };
            },
        }),
    ],
};

export default authOptions;
