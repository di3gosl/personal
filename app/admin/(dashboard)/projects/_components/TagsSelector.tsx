"use client";

import { useState, useEffect } from "react";
import { Plus, X, GripVertical, Eye, EyeOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getTags } from "../actions";
import { TAG_KIND_LABELS } from "@/data/tags";
import TagsSelectionDialog from "./TagsSelectionDialog";

interface Tag {
    id: string;
    tag: string;
    kind: "tech" | "service" | "tool" | "platform" | "meta";
    isFilterable: boolean;
}

interface ProjectTag {
    tagId: string;
    isPreview: boolean;
}

interface TagsSelectorProps {
    selectedTags: ProjectTag[];
    onChange: (tags: ProjectTag[]) => void;
}

export default function TagsSelector({
    selectedTags,
    onChange,
}: TagsSelectorProps) {
    const [allTags, setAllTags] = useState<Tag[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

    useEffect(() => {
        async function loadTags() {
            setIsLoading(true);
            const result = await getTags();
            if (result.success && result.data) {
                setAllTags(result.data);
            }
            setIsLoading(false);
        }

        loadTags();
    }, []);

    const selectedTagObjects = selectedTags
        .map((pt) => {
            const tag = allTags.find((t) => t.id === pt.tagId);
            return tag ? { ...tag, isPreview: pt.isPreview } : null;
        })
        .filter((t): t is Tag & { isPreview: boolean } => t !== null);

    const removeTag = (tagId: string) => {
        onChange(selectedTags.filter((t) => t.tagId !== tagId));
    };

    const togglePreview = (tagId: string) => {
        onChange(
            selectedTags.map((t) =>
                t.tagId === tagId ? { ...t, isPreview: !t.isPreview } : t,
            ),
        );
    };

    const handleDragStart = (index: number) => {
        setDraggedIndex(index);
    };

    const handleDragOver = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        if (draggedIndex === null || draggedIndex === index) {
            return;
        }

        const newTags = [...selectedTags];
        const draggedTag = newTags[draggedIndex];
        newTags.splice(draggedIndex, 1);
        newTags.splice(index, 0, draggedTag);

        setDraggedIndex(index);
        onChange(newTags);
    };

    const handleDragEnd = () => {
        setDraggedIndex(null);
    };

    return (
        <div className="space-y-3">
            {/* Selected Tags with Drag & Drop */}
            {selectedTagObjects.length > 0 && (
                <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground">
                        Selected Tags (drag to reorder)
                    </div>
                    <div className="space-y-1.5">
                        {selectedTagObjects.map((tag, index) => (
                            <div
                                key={tag.id}
                                draggable
                                onDragStart={() => handleDragStart(index)}
                                onDragOver={(e) => handleDragOver(e, index)}
                                onDragEnd={handleDragEnd}
                                className="flex items-center gap-2 p-2 bg-secondary/20 rounded-md border border-border hover:bg-secondary/40 transition-colors cursor-move"
                            >
                                <GripVertical className="h-4 w-4 text-muted-foreground" />
                                <Badge
                                    variant="outline"
                                    className="text-xs border-primary w-24"
                                >
                                    {TAG_KIND_LABELS[tag.kind]}
                                </Badge>
                                <span className="flex-1 text-sm font-medium">
                                    {tag.tag}
                                </span>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 px-2 cursor-pointer"
                                    onClick={() => togglePreview(tag.id)}
                                    title={`${tag.isPreview ? "Visible" : "Hidden"} in preview`}
                                >
                                    {tag.isPreview ? (
                                        <Eye className="h-3.5 w-3.5 text-primary" />
                                    ) : (
                                        <EyeOff className="h-3.5 w-3.5 text-muted-foreground" />
                                    )}
                                </Button>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 px-2 cursor-pointer hover:text-destructive hover:bg-destructive/30!"
                                    onClick={() => removeTag(tag.id)}
                                >
                                    <X className="h-3.5 w-3.5" />
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Eye className="h-3 w-3" /> = Visible in project preview
                        card
                    </div>
                </div>
            )}

            {/* Add Tag Button */}
            <Button
                type="button"
                variant="outline"
                className="w-full cursor-pointer"
                onClick={() => setIsDialogOpen(true)}
            >
                <Plus className="h-4 w-4" />
                Add Tags
            </Button>

            {/* Tag Selection Dialog */}
            <TagsSelectionDialog
                allTags={allTags}
                isLoading={isLoading}
                selectedTags={selectedTags}
                onChange={onChange}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
            />
        </div>
    );
}
