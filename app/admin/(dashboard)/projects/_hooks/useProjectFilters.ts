"use client";

import { useMemo, useState } from "react";
import { type ProjectWithCounts } from "@/types/project";
import { PROJECTS_PER_PAGE } from "../_constants";

interface UseProjectFiltersOptions {
    projects: ProjectWithCounts[];
}

export function useProjectFilters({ projects }: UseProjectFiltersOptions) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [yearFilter, setYearFilter] = useState("all");

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

    const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

    const hasActiveFilters =
        searchQuery !== "" || typeFilter !== "all" || yearFilter !== "all";

    function clearFilters() {
        setSearchQuery("");
        setTypeFilter("all");
        setYearFilter("all");
        setCurrentPage(1);
    }

    return {
        // Filter state
        searchQuery,
        setSearchQuery,
        typeFilter,
        setTypeFilter,
        yearFilter,
        setYearFilter,
        hasActiveFilters,
        clearFilters,

        // Pagination state
        currentPage,
        setCurrentPage,
        totalPages,
        startIndex,
        endIndex,

        // Computed data
        filteredProjects,
        paginatedProjects,
    };
}
