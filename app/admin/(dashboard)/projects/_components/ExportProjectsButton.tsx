"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { downloadJson } from "@/lib/utils";
import { exportProjectsToJson } from "../actions";

export default function ExportProjectsButton() {
    const [isExporting, setIsExporting] = useState(false);

    async function handleExport() {
        setIsExporting(true);
        try {
            const result = await exportProjectsToJson();

            if (result.success && result.data) {
                const filename = `projects-export-${new Date().getTime()}.json`;
                downloadJson(result.data, filename);
                toast.success(
                    `Successfully exported ${result.data.count} project${result.data.count !== 1 ? "s" : ""}`,
                );
            } else {
                toast.error(result.error || "Failed to export projects");
            }
        } catch (error) {
            console.error("Export error:", error);
            toast.error("An unexpected error occurred");
        } finally {
            setIsExporting(false);
        }
    }

    return (
        <Button
            variant="outline"
            onClick={handleExport}
            disabled={isExporting}
            className="cursor-pointer"
        >
            <Download />
            {isExporting ? "Exporting..." : "Export JSON"}
        </Button>
    );
}
