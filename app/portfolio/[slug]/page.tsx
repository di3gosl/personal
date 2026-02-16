import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectHero from "./_components/ProjectHero";
import ProjectOverview from "./_components/ProjectOverview";
import ProjectFacts from "./_components/ProjectFacts";
import ProjectScreenshots from "./_components/ProjectScreenshots";
import ProjectContent from "./_components/ProjectContent";
import ProjectNavigation from "./_components/ProjectNavigation";
import { getProject } from "./actions";

interface PortfolioDetailsPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({
    params,
}: PortfolioDetailsPageProps): Promise<Metadata> {
    const { slug } = await params;
    const { data: project } = await getProject(slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    const tags = project.tags.map((t) => t.tag.tag);

    return {
        title: project.title,
        description: project.description,
        keywords: tags,
        alternates: {
            canonical: `/portfolio/${project.slug}`,
        },
        openGraph: {
            title: project.title,
            description: project.description,
            url: `/portfolio/${project.slug}`,
            type: "article",
            images: project.image
                ? [{ url: project.image, alt: project.title }]
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
            images: project.image ? [project.image] : undefined,
        },
    };
}

export default async function PortfolioDetailsPage({
    params,
}: PortfolioDetailsPageProps) {
    const { slug } = await params;
    const { data: project } = await getProject(slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <ProjectHero project={project} />
            <ProjectOverview project={project} />
            <ProjectFacts project={project} />
            <ProjectScreenshots project={project} />
            <ProjectContent project={project} />
            <ProjectNavigation project={project} />
        </>
    );
}
