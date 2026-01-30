"use client";

import { useState } from "react";
import { Plus, X, Filter } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TagFormDialog } from "./TagFormDialog";
import { DeleteTagDialog } from "./DeleteTagDialog";
import { KIND_DESCRIPTIONS } from "@/data/tags";

interface Tag {
    id: string;
    tag: string;
    kind: string;
    isFilterable: boolean;
    order: number;
    _count: {
        projects: number;
    };
}

interface TagKindCardProps {
    kind: string;
    kindLabel: string;
    tags: Tag[];
}

export function TagKindCard({ kind, kindLabel, tags }: TagKindCardProps) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingTag, setEditingTag] = useState<Tag | undefined>();
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [deletingTag, setDeletingTag] = useState<{
        id: string;
        name: string;
    } | null>(null);

    const handleDelete = (tagId: string, tagName: string) => {
        setDeletingTag({ id: tagId, name: tagName });
        setDeleteDialogOpen(true);
    };

    const handleEdit = (tag: Tag) => {
        setEditingTag(tag);
        setDialogOpen(true);
    };

    const handleDialogClose = (open: boolean) => {
        setDialogOpen(open);
        if (!open) {
            setEditingTag(undefined);
        }
    };

    const handleDeleteDialogClose = (open: boolean) => {
        setDeleteDialogOpen(open);
        if (!open) {
            setDeletingTag(null);
        }
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-xl font-display">
                                {kindLabel}
                            </CardTitle>
                            <CardDescription className="mt-1">
                                {KIND_DESCRIPTIONS[kind]}
                            </CardDescription>
                        </div>
                        <Button
                            size="sm"
                            onClick={() => setDialogOpen(true)}
                            className="cursor-pointer"
                        >
                            <Plus className="mr-1" />
                            Add Tag
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    {tags.length === 0 ? (
                        <p className="text-sm text-muted-foreground py-4 text-center">
                            No tags yet. Click &quot;Add Tag&quot; to create
                            one.
                        </p>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <div
                                    key={tag.id}
                                    className="group relative inline-flex items-center gap-1.5 rounded-full border bg-secondary/20 hover:bg-secondary/40 px-3 py-1.5 text-sm cursor-pointer transition-colors"
                                >
                                    <button
                                        onClick={() => handleEdit(tag)}
                                        className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer"
                                    >
                                        <span className="font-medium">
                                            {tag.tag}
                                        </span>
                                        {tag.isFilterable && (
                                            <Filter className="ml-1 h-3 w-3 text-primary" />
                                        )}
                                    </button>
                                    <Badge className="text-xs px-1.5 py-0 ml-2">
                                        {tag._count.projects}
                                    </Badge>
                                    <button
                                        onClick={() =>
                                            handleDelete(tag.id, tag.tag)
                                        }
                                        className="ml-1 hover:text-destructive transition-colors cursor-pointer"
                                        aria-label={`Delete ${tag.tag}`}
                                    >
                                        <X className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>

            <TagFormDialog
                open={dialogOpen}
                onOpenChange={handleDialogClose}
                tag={editingTag}
                defaultKind={kind}
            />

            {deletingTag && (
                <DeleteTagDialog
                    open={deleteDialogOpen}
                    onOpenChange={handleDeleteDialogClose}
                    tagId={deletingTag.id}
                    tagName={deletingTag.name}
                />
            )}
        </>
    );
}
