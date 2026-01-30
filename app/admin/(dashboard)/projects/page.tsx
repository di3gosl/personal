import Link from "next/link";
import { Plus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectsTable from "./_components/ProjectsTable";
import { getProjects } from "./actions";

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold font-display text-foreground">
                        Projects
                    </h1>
                    <p className="text-muted-foreground">
                        Manage your portfolio projects
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" asChild>
                        <Link href="/admin/projects/import">
                            <Upload />
                            Import JSON
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="/admin/projects/new">
                            <Plus />
                            Add Project
                        </Link>
                    </Button>
                </div>
            </div>

            <ProjectsTable projects={projects.data || []} />
        </div>
    );
}
