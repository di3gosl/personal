import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImportForm from "./_components/ImportForm";

export default function ImportProjectPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/admin/projects">
                        <ArrowLeft />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-2xl font-bold font-display text-foreground">
                        Import Project from JSON
                    </h1>
                    <p className="text-muted-foreground">
                        Import or update a project by pasting JSON data, both
                        standard JSON and JavaScript object notation are
                        supported.
                    </p>
                </div>
            </div>

            <ImportForm />
        </div>
    );
}
