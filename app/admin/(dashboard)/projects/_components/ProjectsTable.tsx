"use client";

import { useMemo, useState } from "react";
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
    Search,
    X,
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
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { PROJECT_TYPES } from "@/data/projectTypes";
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
    const [searchQuery, setSearchQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [yearFilter, setYearFilter] = useState("all");
    const itemsPerPage = 15;

    // Get unique years from projects
    const availableYears = useMemo(() => {
        const years = [...new Set(projects.map((p) => p.year))];
        return years.sort((a, b) => b - a); // Sort descending
    }, [projects]);

    // Filter projects
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const query = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !query ||
                project.title.toLowerCase().includes(query) ||
                project.slug.toLowerCase().includes(query);

            const matchesType =
                typeFilter === "all" || project.type === typeFilter;

            const matchesYear =
                yearFilter === "all" || project.year.toString() === yearFilter;

            return matchesSearch && matchesType && matchesYear;
        });
    }, [projects, searchQuery, typeFilter, yearFilter]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

    function handleSearchChange(value: string) {
        setSearchQuery(value);
        setCurrentPage(1);
    }

    function handleTypeFilterChange(value: string) {
        setTypeFilter(value);
        setCurrentPage(1);
    }

    function handleYearFilterChange(value: string) {
        setYearFilter(value);
        setCurrentPage(1);
    }

    function clearFilters() {
        setSearchQuery("");
        setTypeFilter("all");
        setYearFilter("all");
        setCurrentPage(1);
    }

    const hasActiveFilters =
        searchQuery !== "" || typeFilter !== "all" || yearFilter !== "all";

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
            <div className="flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input
                        placeholder="Search by name..."
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="pl-9 bg-[#ffffff] dark:bg-[#ffffff]"
                    />
                </div>
                <Select
                    value={typeFilter}
                    onValueChange={handleTypeFilterChange}
                >
                    <SelectTrigger className="w-[180px] bg-[#ffffff] dark:bg-[#ffffff]">
                        <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        {PROJECT_TYPES.map((type) => (
                            <SelectItem key={type} value={type}>
                                {type}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select
                    value={yearFilter}
                    onValueChange={handleYearFilterChange}
                >
                    <SelectTrigger className="w-[140px] bg-[#ffffff] dark:bg-[#ffffff]">
                        <SelectValue placeholder="All Years" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Years</SelectItem>
                        {availableYears.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                                {year}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {hasActiveFilters && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="cursor-pointer"
                    >
                        <X className="size-4" />
                        Clear
                    </Button>
                )}
            </div>

            {filteredProjects.length === 0 && hasActiveFilters ? (
                <div className="bg-card rounded-lg border border-border p-12 text-center">
                    <p className="text-muted-foreground mb-4">
                        No projects match your search. Try adjusting your
                        filters.
                    </p>
                    <Button
                        variant="outline"
                        onClick={clearFilters}
                        className="cursor-pointer"
                    >
                        Clear Filters
                    </Button>
                </div>
            ) : (
                <>
                    <div className="bg-card rounded-lg border border-border overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-12">
                                        Order
                                    </TableHead>
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
                                                        rel="noopener noreferrer"
                                                        aria-label={`Open ${project.title} in a new tab`}
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
                                                        aria-label={`Edit ${project.title}`}
                                                    >
                                                        <Pencil className="size-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon-sm"
                                                    onClick={() =>
                                                        handleDeleteClick(
                                                            project,
                                                        )
                                                    }
                                                    title="Delete"
                                                    aria-label={`Delete ${project.title}`}
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
                                {Math.min(endIndex, filteredProjects.length)} of{" "}
                                {filteredProjects.length} projects
                                {hasActiveFilters &&
                                    ` (filtered from ${projects.length})`}
                            </p>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                        setCurrentPage((p) =>
                                            Math.max(1, p - 1),
                                        )
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
                </>
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
