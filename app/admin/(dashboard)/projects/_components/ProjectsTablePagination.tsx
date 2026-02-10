"use client";

import { useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectWithCounts } from "@/types/project";

interface ProjectsTablePaginationProps {
    projects: ProjectWithCounts[];
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    searchQuery: string;
    typeFilter: string;
    yearFilter: string;
}

export default function ProjectsTablePagination({
    projects,
    currentPage,
    setCurrentPage,
    searchQuery,
    typeFilter,
    yearFilter,
}: ProjectsTablePaginationProps) {
    const itemsPerPage = 15;

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

    const hasActiveFilters =
        searchQuery !== "" || typeFilter !== "all" || yearFilter !== "all";

    return (
        <div className="flex items-center justify-between px-2">
            <p className="text-sm text-muted-foreground">
                Showing {startIndex + 1} to{" "}
                {Math.min(endIndex, filteredProjects.length)} of{" "}
                {filteredProjects.length} projects
                {hasActiveFilters && ` (filtered from ${projects.length})`}
            </p>
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="cursor-pointer"
                >
                    <ChevronLeft className="size-4" />
                    Previous
                </Button>
                <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                            <Button
                                key={page}
                                variant={
                                    currentPage === page ? "default" : "outline"
                                }
                                size="sm"
                                onClick={() => setCurrentPage(page)}
                                className="min-w-9 cursor-pointer"
                            >
                                {page}
                            </Button>
                        ),
                    )}
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="cursor-pointer"
                >
                    Next
                    <ChevronRight className="size-4" />
                </Button>
            </div>
        </div>
    );
}
