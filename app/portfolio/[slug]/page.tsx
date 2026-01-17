import { notFound } from "next/navigation";
import { PROJECTS_DETAILS } from "@/data/projects";
import ProjectHero from "./_components/ProjectHero";
import ProjectOverview from "./_components/ProjectOverview";
import ProjectFacts from "./_components/ProjectFacts";
import ProjectScreenshots from "./_components/ProjectScreenshots";
import ProjectContent from "./_components/ProjectContent";
import ProjectNavigation from "./_components/ProjectNavigation";

export default async function PortfolioDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    console.log(slug);
    const project = PROJECTS_DETAILS.find((p) => p.slug === slug);

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
            <ProjectNavigation navigation={project.navigation} />
        </>
    );
}
