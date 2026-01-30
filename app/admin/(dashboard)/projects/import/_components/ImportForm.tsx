"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, CheckCircle2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { importProjectFromJson } from "../actions";

export default function ImportForm() {
    const router = useRouter();
    const [jsonInput, setJsonInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<{
        success: boolean;
        message: string;
        missingTags?: string[];
    } | null>(null);

    const handleImport = async () => {
        if (!jsonInput.trim()) {
            setResult({
                success: false,
                message: "Please paste a JSON object to import.",
            });
            return;
        }

        setIsLoading(true);
        setResult(null);

        try {
            const response = await importProjectFromJson(jsonInput);
            setResult(response);

            if (response.success) {
                // Clear the input on success and redirect after a delay
                setTimeout(() => {
                    setJsonInput("");
                    router.push("/admin/projects");
                }, 2000);
            }
        } catch (error) {
            setResult({
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "An unexpected error occurred.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleClear = () => {
        setJsonInput("");
        setResult(null);
    };

    return (
        <div className="space-y-6">
            <Card className="p-6">
                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="json-input"
                            className="block text-sm font-medium mb-2"
                        >
                            Project JSON
                        </label>
                        <Textarea
                            id="json-input"
                            value={jsonInput}
                            onChange={(e) => setJsonInput(e.target.value)}
                            placeholder="Paste your project JSON here..."
                            className="font-mono text-sm min-h-80"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="flex gap-3">
                        <Button
                            onClick={handleImport}
                            disabled={isLoading || !jsonInput.trim()}
                            className="flex-1 cursor-pointer"
                        >
                            {isLoading ? (
                                <>Processing...</>
                            ) : (
                                <>
                                    <Upload />
                                    Import Project
                                </>
                            )}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={handleClear}
                            disabled={isLoading}
                            className="cursor-pointer"
                        >
                            Clear
                        </Button>
                    </div>
                </div>
            </Card>

            {result && (
                <Card
                    className={`p-6 ${
                        result.success
                            ? "border-green-500 bg-green-50"
                            : "border-red-500 bg-red-50"
                    }`}
                >
                    <div className="flex items-start gap-3">
                        {result.success ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                        ) : (
                            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        )}
                        <div className="flex-1 space-y-2">
                            <p
                                className={
                                    result.success
                                        ? "text-green-900 font-medium"
                                        : "text-red-900 font-medium"
                                }
                            >
                                {result.message}
                            </p>
                            {result.missingTags &&
                                result.missingTags.length > 0 && (
                                    <div className="mt-3">
                                        <p className="text-sm text-red-800 font-medium mb-2">
                                            Missing tags:
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {result.missingTags.map((tag) => (
                                                <code
                                                    key={tag}
                                                    className="px-2 py-1 bg-red-100 text-red-900 rounded text-sm"
                                                >
                                                    {tag}
                                                </code>
                                            ))}
                                        </div>
                                        <p className="text-sm text-red-700 mt-3">
                                            Please create these tags in the{" "}
                                            <a
                                                href="/admin/tags"
                                                className="underline font-medium hover:text-red-900"
                                            >
                                                Tags section
                                            </a>{" "}
                                            before importing this project.
                                        </p>
                                    </div>
                                )}
                        </div>
                    </div>
                </Card>
            )}

            <Card className="p-6 bg-muted/50">
                <h3 className="font-semibold mb-3">Import Instructions</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>
                            Paste a valid project JSON object in the format
                            specified in the documentation
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>
                            All tags referenced in <code>badges</code> and{" "}
                            <code>technologies</code> must exist in the Tags
                            database
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>
                            If a project with the same slug exists, it will be
                            updated; otherwise, a new project will be created
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>
                            Tags from <code>technologies</code> will be marked
                            as <code>isPreview = true</code>
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>
                            Screenshots, whatIBuilt, techStack, and
                            designDecisions will be created automatically
                        </span>
                    </li>
                </ul>
            </Card>
        </div>
    );
}
