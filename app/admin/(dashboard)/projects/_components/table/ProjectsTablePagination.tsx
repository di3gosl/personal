"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectsTablePaginationProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
    startIndex: number;
    endIndex: number;
    filteredCount: number;
    totalCount: number;
    hasActiveFilters: boolean;
}

export default function ProjectsTablePagination({
    currentPage,
    setCurrentPage,
    totalPages,
    startIndex,
    endIndex,
    filteredCount,
    totalCount,
    hasActiveFilters,
}: ProjectsTablePaginationProps) {
    return (
        <div className="flex items-center justify-between px-2">
            <p className="text-sm text-muted-foreground">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredCount)}{" "}
                of {filteredCount} projects
                {hasActiveFilters && ` (filtered from ${totalCount})`}
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
