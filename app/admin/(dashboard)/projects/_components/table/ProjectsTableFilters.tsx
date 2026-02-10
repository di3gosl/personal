"use client";

import { useMemo } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { PROJECT_TYPES } from "@/data/projectTypes";
import { ProjectWithCounts } from "@/types/project";

interface ProjectsTableFiltersProps {
    projects: ProjectWithCounts[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    typeFilter: string;
    setTypeFilter: (type: string) => void;
    yearFilter: string;
    setYearFilter: (year: string) => void;
    setCurrentPage: (page: number) => void;
    hasActiveFilters: boolean;
    clearFilters: () => void;
}

export default function ProjectsTableFilters({
    projects,
    searchQuery,
    setSearchQuery,
    typeFilter,
    setTypeFilter,
    yearFilter,
    setYearFilter,
    setCurrentPage,
    hasActiveFilters,
    clearFilters,
}: ProjectsTableFiltersProps) {
    // Get unique years from projects
    const availableYears = useMemo(() => {
        const years = [...new Set(projects.map((p) => p.year))];
        return years.sort((a, b) => b - a); // Sort descending
    }, [projects]);

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

    return (
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
            <Select value={typeFilter} onValueChange={handleTypeFilterChange}>
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
            <Select value={yearFilter} onValueChange={handleYearFilterChange}>
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
    );
}
