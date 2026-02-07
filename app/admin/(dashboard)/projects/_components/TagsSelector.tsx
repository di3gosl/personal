"use client";

import { useState, useEffect } from "react";
import { Plus, X, GripVertical, Eye, EyeOff, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getTags } from "../actions";

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

const TAG_KIND_LABELS: Record<Tag["kind"], string> = {
    tech: "Technology",
    service: "Service",
    tool: "Tool",
    platform: "Platform",
    meta: "Meta",
};

export default function TagsSelector({
    selectedTags,
    onChange,
}: TagsSelectorProps) {
    const [allTags, setAllTags] = useState<Tag[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedKind, setSelectedKind] = useState<Tag["kind"] | "all">(
        "all",
    );
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

    const selectedTagIds = selectedTags.map((t) => t.tagId);
    const selectedTagObjects = selectedTags
        .map((pt) => {
            const tag = allTags.find((t) => t.id === pt.tagId);
            return tag ? { ...tag, isPreview: pt.isPreview } : null;
        })
        .filter((t): t is Tag & { isPreview: boolean } => t !== null);

    const availableTags =
        selectedKind === "all"
            ? allTags.filter((tag) => !selectedTagIds.includes(tag.id))
            : allTags.filter(
                  (tag) =>
                      tag.kind === selectedKind &&
                      !selectedTagIds.includes(tag.id),
              );

    const addTag = (tagId: string) => {
        onChange([...selectedTags, { tagId, isPreview: false }]);
    };

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
        if (draggedIndex === null || draggedIndex === index) return;

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

    const groupedAvailableTags = availableTags.reduce(
        (acc, tag) => {
            if (!acc[tag.kind]) acc[tag.kind] = [];
            acc[tag.kind].push(tag);
            return acc;
        },
        {} as Record<Tag["kind"], Tag[]>,
    );

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
                                    title={
                                        tag.isPreview
                                            ? "Visible in preview"
                                            : "Hidden in preview"
                                    }
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
                                    className="h-7 px-2 cursor-pointer hover:text-destructive"
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
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Add Tags</DialogTitle>
                        <DialogDescription>
                            Select tags to assign to this project
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                        {/* Filter by Kind */}
                        <div className="flex items-center gap-2">
                            <label className="text-sm font-medium">
                                Filter:
                            </label>
                            <Select
                                value={selectedKind}
                                onValueChange={(value) =>
                                    setSelectedKind(
                                        value as Tag["kind"] | "all",
                                    )
                                }
                            >
                                <SelectTrigger className="w-[200px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Categories
                                    </SelectItem>
                                    {Object.entries(TAG_KIND_LABELS).map(
                                        ([kind, label]) => (
                                            <SelectItem key={kind} value={kind}>
                                                {label}
                                            </SelectItem>
                                        ),
                                    )}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Available Tags */}
                        <div className="max-h-[400px] overflow-y-auto border border-border rounded-lg p-4 space-y-4">
                            {isLoading ? (
                                <div className="flex items-center justify-center py-8 text-muted-foreground text-sm">
                                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                                    Loading tags...
                                </div>
                            ) : availableTags.length === 0 ? (
                                <div className="text-center py-4 text-muted-foreground text-sm">
                                    {selectedKind === "all"
                                        ? "All tags have been added"
                                        : `No ${TAG_KIND_LABELS[selectedKind as Tag["kind"]]} tags available`}
                                </div>
                            ) : selectedKind === "all" ? (
                                Object.entries(groupedAvailableTags).map(
                                    ([kind, tags]) => (
                                        <div key={kind}>
                                            <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                                                {
                                                    TAG_KIND_LABELS[
                                                        kind as Tag["kind"]
                                                    ]
                                                }
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {tags.map((tag) => (
                                                    <Button
                                                        key={tag.id}
                                                        type="button"
                                                        variant="outline"
                                                        size="sm"
                                                        className="cursor-pointer"
                                                        onClick={() => {
                                                            addTag(tag.id);
                                                        }}
                                                    >
                                                        <Plus className="h-3 w-3 mr-1" />
                                                        {tag.tag}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                    ),
                                )
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {availableTags.map((tag) => (
                                        <Button
                                            key={tag.id}
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className="cursor-pointer"
                                            onClick={() => {
                                                addTag(tag.id);
                                            }}
                                        >
                                            <Plus className="h-3 w-3 mr-1" />
                                            {tag.tag}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
