import { notFound } from "next/navigation";
import ProjectHero from "./_components/ProjectHero";
import ProjectOverview from "./_components/ProjectOverview";
import ProjectFacts from "./_components/ProjectFacts";
import ProjectScreenshots from "./_components/ProjectScreenshots";
import ProjectContent from "./_components/ProjectContent";
import ProjectNavigation from "./_components/ProjectNavigation";
import { getProject } from "./actions";

export default async function PortfolioDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
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
