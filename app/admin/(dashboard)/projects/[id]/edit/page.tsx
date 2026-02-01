import { notFound } from "next/navigation";
import ProjectForm from "../../_components/ProjectForm";
import type { ProjectFormData } from "@/lib/validators/project";
import { getProject } from "./actions";

interface EditProjectPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditProjectPage({
    params,
}: EditProjectPageProps) {
    const { id } = await params;
    const { data: project } = await getProject(id);

    if (!project || project.isDeleted) {
        notFound();
    }

    // Transform data to match form schema
    const initialData: ProjectFormData & { id: string } = {
        id: project.id,
        slug: project.slug,
        title: project.title,
        description: project.description,
        year: project.year,
        image: project.image,
        label: project.label || "",
        isFeatured: project.isFeatured,
        type: project.type,
        status: project.status,
        liveUrl: project.liveUrl || "",
        repoUrl: project.repoUrl || "",
        goal: project.goal,
        challenge: project.challenge,
        roleDescription: project.roleDescription,
        role: project.role,
        platform: project.platform,
        team: project.team,
        repository: project.repository,
        results: project.results,
        order: project.order,
        isActive: project.isActive,
        techStack: project.techStack as {
            category: string;
            technologies: string[];
        }[],
        designDecisions: project.designDecisions as string[],
        whatIBuilt: project.whatIBuilt as string[],
        screenshots: project.screenshots.map((s) => ({
            id: s.id,
            src: s.src,
            previewSrc: s.previewSrc || "",
            caption: s.caption || "",
            order: s.order,
        })),
        tags: project.tags.map((pt) => ({
            tagId: pt.tagId,
            isPreview: pt.isPreview,
            name: pt.tag.tag,
        })),
    };

    return <ProjectForm mode="edit" initialData={initialData} />;
}
