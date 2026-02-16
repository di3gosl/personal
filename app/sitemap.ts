import type { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://diegosalazar.dev";

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
    ];

    // Dynamic project pages
    const projects = await prisma.project.findMany({
        where: { isDeleted: false, isActive: true },
        select: { slug: true, updatedAt: true },
    });

    const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: project.updatedAt,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticPages, ...projectPages];
}
