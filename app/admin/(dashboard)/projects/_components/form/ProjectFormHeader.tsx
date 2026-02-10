"use client";

import { Save, Loader2, ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProjectFormHeaderProps {
    mode: "create" | "edit";
    isSubmitting: boolean;
    onExport?: () => void;
}

export default function ProjectFormHeader({
    mode,
    isSubmitting,
    onExport,
}: ProjectFormHeaderProps) {
    return (
        <div className="flex flex-wrap gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/admin/projects">
                        <ArrowLeft className="size-5" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-2xl font-bold font-display text-foreground">
                        {mode === "create" ? "Create Project" : "Edit Project"}
                    </h1>
                    <p className="text-muted-foreground">
                        {mode === "create"
                            ? "Add a new project to your portfolio"
                            : "Update project details"}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                {mode === "edit" && onExport && (
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onExport}
                        className="cursor-pointer"
                    >
                        <Download />
                        Export JSON
                    </Button>
                )}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" />
                            Saving...
                        </>
                    ) : (
                        <>
                            <Save />
                            Save Project
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}
