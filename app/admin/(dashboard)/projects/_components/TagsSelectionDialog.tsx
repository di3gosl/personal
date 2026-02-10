"use client";

import { useState } from "react";
import { Plus, Loader2 } from "lucide-react";
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
import { TAG_KIND_LABELS } from "@/data/tags";
import { type TagBase, type ProjectTag } from "@/types/tag-shared";

interface TagsSelectionDialogProps {
    allTags: TagBase[];
    isLoading: boolean;
    onChange: (tags: ProjectTag[]) => void;
    selectedTags: ProjectTag[];
    isDialogOpen: boolean;
    setIsDialogOpen: (open: boolean) => void;
}

export default function TagsSelectionDialog({
    allTags,
    selectedTags,
    onChange,
    isLoading,
    isDialogOpen,
    setIsDialogOpen,
}: TagsSelectionDialogProps) {
    const [selectedKind, setSelectedKind] = useState<TagBase["kind"] | "all">(
        "all",
    );

    const addTag = (tagId: string) => {
        onChange([...selectedTags, { tagId, isPreview: false }]);
    };

    const selectedTagIds = selectedTags.map((t) => t.tagId);

    const availableTags =
        selectedKind === "all"
            ? allTags.filter((tag) => !selectedTagIds.includes(tag.id))
            : allTags.filter(
                  (tag) =>
                      tag.kind === selectedKind &&
                      !selectedTagIds.includes(tag.id),
              );

    const groupedAvailableTags = availableTags.reduce(
        (acc, tag) => {
            if (!acc[tag.kind]) {
                acc[tag.kind] = [];
            }

            acc[tag.kind].push(tag);
            return acc;
        },
        {} as Record<TagBase["kind"], TagBase[]>,
    );

    return (
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
                        <label className="text-sm font-medium">Filter:</label>
                        <Select
                            value={selectedKind}
                            onValueChange={(value) =>
                                setSelectedKind(
                                    value as TagBase["kind"] | "all",
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
                                    : `No ${TAG_KIND_LABELS[selectedKind as TagBase["kind"]]} tags available`}
                            </div>
                        ) : selectedKind === "all" ? (
                            Object.entries(groupedAvailableTags).map(
                                ([kind, tags]) => (
                                    <div key={kind}>
                                        <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                                            {
                                                TAG_KIND_LABELS[
                                                    kind as TagBase["kind"]
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
    );
}
