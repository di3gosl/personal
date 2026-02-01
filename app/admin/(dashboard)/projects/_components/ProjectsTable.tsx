"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Pencil,
    Trash2,
    ExternalLink,
    Loader2,
    Plus,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import type { Project } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { deleteProject } from "../actions";

type ProjectWithCounts = Project & {
    _count: {
        screenshots: number;
        tags: number;
    };
};

interface ProjectsTableProps {
    projects: ProjectWithCounts[];
}

export default function ProjectsTable({ projects }: ProjectsTableProps) {
    const router = useRouter();
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [projectToDelete, setProjectToDelete] =
        useState<ProjectWithCounts | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    // Calculate pagination
    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProjects = projects.slice(startIndex, endIndex);

    function handleDeleteClick(project: ProjectWithCounts) {
        setProjectToDelete(project);
        setDeleteDialogOpen(true);
    }

    async function handleConfirmDelete() {
        if (!projectToDelete) return;

        setIsDeleting(true);
        try {
            const result = await deleteProject(projectToDelete.id);

            if (result.success) {
                toast.success("Project deleted", {
                    description: `"${projectToDelete.title}" has been removed.`,
                });
                router.refresh();
            } else {
                toast.error("Failed to delete project", {
                    description: result.error,
                });
            }
        } catch {
            toast.error("An unexpected error occurred");
        } finally {
            setIsDeleting(false);
            setDeleteDialogOpen(false);
            setProjectToDelete(null);
        }
    }

    if (projects.length === 0) {
        return (
            <div className="bg-card rounded-lg border border-border p-12 text-center">
                <p className="text-muted-foreground mb-4">
                    No projects found. Create your first project to get started.
                </p>
                <Button asChild>
                    <Link href="/admin/projects/new">
                        <Plus /> Create Project
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-12">Order</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Year</TableHead>
                            <TableHead className="text-center">
                                Featured
                            </TableHead>
                            <TableHead className="text-center">
                                Active
                            </TableHead>
                            <TableHead className="text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedProjects.map((project) => (
                            <TableRow key={project.id}>
                                <TableCell className="font-mono text-sm">
                                    {project.order}
                                </TableCell>
                                <TableCell>
                                    <div>
                                        <p className="font-medium text-foreground">
                                            {project.title}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {project.slug}
                                        </p>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline">
                                        {project.type}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="default">
                                        {project.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{project.year}</TableCell>
                                <TableCell className="text-center">
                                    {project.isFeatured ? (
                                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                                            Featured
                                        </Badge>
                                    ) : (
                                        <span className="text-muted-foreground">
                                            —
                                        </span>
                                    )}
                                </TableCell>
                                <TableCell className="text-center">
                                    {project.isActive ? (
                                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                                            Active
                                        </Badge>
                                    ) : (
                                        <Badge variant="secondary">
                                            Inactive
                                        </Badge>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center justify-end gap-1">
                                        <Button
                                            variant="ghost"
                                            size="icon-sm"
                                            asChild
                                            title="View on site"
                                        >
                                            <Link
                                                href={`/portfolio/${project.slug}`}
                                                target="_blank"
                                            >
                                                <ExternalLink className="size-4" />
                                            </Link>
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon-sm"
                                            asChild
                                            title="Edit"
                                        >
                                            <Link
                                                href={`/admin/projects/${project.id}/edit`}
                                            >
                                                <Pencil className="size-4" />
                                            </Link>
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon-sm"
                                            onClick={() =>
                                                handleDeleteClick(project)
                                            }
                                            title="Delete"
                                            className="text-destructive hover:text-destructive hover:bg-destructive/10! cursor-pointer"
                                        >
                                            <Trash2 className="size-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {totalPages > 1 && (
                <div className="flex items-center justify-between px-2">
                    <p className="text-sm text-muted-foreground">
                        Showing {startIndex + 1} to{" "}
                        {Math.min(endIndex, projects.length)} of{" "}
                        {projects.length} projects
                    </p>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                                setCurrentPage((p) => Math.max(1, p - 1))
                            }
                            disabled={currentPage === 1}
                            className="cursor-pointer"
                        >
                            <ChevronLeft className="size-4" />
                            Previous
                        </Button>
                        <div className="flex items-center gap-1">
                            {Array.from(
                                { length: totalPages },
                                (_, i) => i + 1,
                            ).map((page) => (
                                <Button
                                    key={page}
                                    variant={
                                        currentPage === page
                                            ? "default"
                                            : "outline"
                                    }
                                    size="sm"
                                    onClick={() => setCurrentPage(page)}
                                    className="min-w-9 cursor-pointer"
                                >
                                    {page}
                                </Button>
                            ))}
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                                setCurrentPage((p) =>
                                    Math.min(totalPages, p + 1),
                                )
                            }
                            disabled={currentPage === totalPages}
                            className="cursor-pointer"
                        >
                            Next
                            <ChevronRight className="size-4" />
                        </Button>
                    </div>
                </div>
            )}

            <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Project</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete &quot;
                            {projectToDelete?.title}&quot;? This action can be
                            undone by an administrator.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="gap-3">
                        <Button
                            variant="outline"
                            onClick={() => setDeleteDialogOpen(false)}
                            disabled={isDeleting}
                            className="cursor-pointer"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={handleConfirmDelete}
                            disabled={isDeleting}
                            className="cursor-pointer"
                        >
                            {isDeleting ? (
                                <>
                                    <Loader2 className="animate-spin" />
                                    Deleting...
                                </>
                            ) : (
                                <>
                                    <Trash2 />
                                    Delete
                                </>
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
