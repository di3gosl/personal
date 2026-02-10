"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useForm, useFieldArray, FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { projectSchema, type ProjectFormData } from "@/lib/validators/project";
import { slugify, downloadJson } from "@/lib/utils";
import { createProject, updateProject } from "../actions";
import ProjectFormHeader from "./form/ProjectFormHeader";
import BasicInfoCard from "./form/BasicInfoCard";
import ProjectDetailsCard from "./form/ProjectDetailsCard";
import TechStackCard from "./form/TechStackCard";
import StringListCard from "./form/StringListCard";
import ScreenshotsCard from "./form/ScreenshotsCard";
import SidebarCards from "./form/SidebarCards";

interface ProjectFormProps {
    initialData?: ProjectFormData & { id?: string };
    mode: "create" | "edit";
}

export default function ProjectForm({ initialData, mode }: ProjectFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FieldValues>({
        // Type assertion needed due to zod v4 type incompatibility with react-hook-form
        resolver: standardSchemaResolver(projectSchema) as never,
        defaultValues: (initialData as FieldValues) || {
            slug: "",
            title: "",
            description: "",
            year: new Date().getFullYear(),
            image: "",
            label: "",
            isFeatured: false,
            type: "",
            status: "In Progress",
            liveUrl: "",
            repoUrl: "",
            goal: "",
            challenge: "",
            roleDescription: "",
            role: "",
            platform: "",
            team: "",
            repository: "",
            results: "",
            order: 0,
            isActive: true,
            techStack: [{ category: "", technologies: [] }],
            designDecisions: [],
            whatIBuilt: [],
            screenshots: [],
            tags: [],
        },
    });

    const techStackFieldArray = useFieldArray({
        control: form.control,
        name: "techStack",
    });

    const screenshotFieldArray = useFieldArray({
        control: form.control,
        name: "screenshots",
    });

    const designDecisionFieldArray = useFieldArray({
        control: form.control,
        name: "designDecisions" as never,
    });

    const whatIBuiltFieldArray = useFieldArray({
        control: form.control,
        name: "whatIBuilt" as never,
    });

    async function onSubmit(values: FieldValues) {
        setIsSubmitting(true);
        const formData = values as ProjectFormData;

        try {
            const result =
                mode === "create"
                    ? await createProject(formData)
                    : await updateProject(initialData!.id!, formData);

            if (result.success) {
                toast.success(
                    mode === "create"
                        ? "Project created successfully"
                        : "Project updated successfully",
                );
                router.push("/admin/projects");
                router.refresh();
            } else {
                toast.error(result.error || "An error occurred");
            }
        } catch {
            toast.error("An unexpected error occurred");
        } finally {
            setIsSubmitting(false);
        }
    }

    function handleTitleChange(value: string) {
        form.setValue("title", value);
        if (mode === "create") {
            form.setValue("slug", slugify(value));
        }
    }

    function exportToJson() {
        try {
            const tags = (initialData?.tags || []) as Array<{
                tagId: string;
                isPreview: boolean;
                name: string;
            }>;
            const technologies = tags
                .filter((tag) => tag.isPreview)
                .map((tag) => tag.name);
            const badges = tags.map((tag) => tag.name);

            const { tags: _, ...dataWithoutTags } = initialData || {};
            const exportData = {
                ...dataWithoutTags,
                technologies,
                badges,
                exportedAt: new Date().toISOString(),
            };

            const filename = `project-${initialData?.slug || "export"}-${new Date().getTime()}.json`;
            downloadJson(exportData, filename);
            toast.success("Project exported successfully");
        } catch (error) {
            console.error("Export error:", error);
            toast.error("Failed to export project");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <ProjectFormHeader
                    mode={mode}
                    isSubmitting={isSubmitting}
                    onExport={mode === "edit" ? exportToJson : undefined}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <BasicInfoCard
                            form={form}
                            onTitleChange={handleTitleChange}
                        />
                        <ProjectDetailsCard form={form} />
                        <TechStackCard
                            form={form}
                            fieldArray={techStackFieldArray}
                        />
                        <StringListCard
                            form={form}
                            fieldArray={whatIBuiltFieldArray}
                            title="What I Built"
                            description="Key features and components you built"
                            fieldName="whatIBuilt"
                            placeholder="e.g., Built the authentication system"
                            addLabel="Add Item"
                        />
                        <StringListCard
                            form={form}
                            fieldArray={designDecisionFieldArray}
                            title="Design Decisions"
                            description="Key design and architecture decisions"
                            fieldName="designDecisions"
                            placeholder="e.g., Used microservices architecture"
                            addLabel="Add Decision"
                        />
                        <ScreenshotsCard
                            form={form}
                            fieldArray={screenshotFieldArray}
                        />
                    </div>

                    {/* Sidebar */}
                    <SidebarCards form={form} />
                </div>
            </form>
        </Form>
    );
}
