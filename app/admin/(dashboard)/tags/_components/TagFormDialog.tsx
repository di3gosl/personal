"use client";

import { useState, useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { tagSchema, type TagFormData } from "@/lib/validators/tag";
import { createTag, updateTag } from "../actions";
import { TAG_KINDS } from "@/data/tags";

interface TagFormDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    tag?: {
        id: string;
        tag: string;
        kind: string;
        isFilterable: boolean;
    };
    defaultKind?: string;
}

export function TagFormDialog({
    open,
    onOpenChange,
    tag,
    defaultKind,
}: TagFormDialogProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isEditing = !!tag;

    const form = useForm<FieldValues>({
        // Type assertion needed due to zod v4 type incompatibility with react-hook-form
        resolver: standardSchemaResolver(tagSchema) as never,
        defaultValues: (tag
            ? {
                  tag: tag.tag,
                  kind: tag.kind,
                  isFilterable: tag.isFilterable,
              }
            : {
                  tag: "",
                  kind: defaultKind ?? "tech",
                  isFilterable: false,
              }) as FieldValues,
    });

    // Reset form when tag changes (for edit mode)
    useEffect(() => {
        if (tag) {
            form.reset({
                tag: tag.tag,
                kind: tag.kind,
                isFilterable: tag.isFilterable,
            });
        } else {
            form.reset({
                tag: "",
                kind: defaultKind ?? "tech",
                isFilterable: false,
            });
        }
    }, [tag, defaultKind, form]);

    const onSubmit = async (data: FieldValues) => {
        setIsSubmitting(true);

        try {
            const result = isEditing
                ? await updateTag(tag.id, data as TagFormData)
                : await createTag(data as TagFormData);

            if (result.success) {
                toast.success(
                    isEditing
                        ? "Tag updated successfully"
                        : "Tag created successfully",
                );
                onOpenChange(false);
                form.reset();
            } else {
                toast.error(result.error || "Failed to save tag");
            }
        } catch {
            toast.error("An unexpected error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[450px]">
                <DialogHeader>
                    <DialogTitle>
                        {isEditing ? "Edit Tag" : "Create Tag"}
                    </DialogTitle>
                    <DialogDescription>
                        {isEditing
                            ? "Update the tag information below."
                            : "Add a new tag to organize your projects."}
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="tag"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tag Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="e.g., React, TypeScript, AWS"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="kind"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tag Kind</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a tag kind" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {TAG_KINDS.map((kind) => (
                                                <SelectItem
                                                    key={kind.value}
                                                    value={kind.value}
                                                >
                                                    {kind.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="isFilterable"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">
                                            Filterable
                                        </FormLabel>
                                        <FormDescription>
                                            Display this tag in project filter
                                            options
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            className="cursor-pointer"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end gap-3 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => onOpenChange(false)}
                                disabled={isSubmitting}
                                className="cursor-pointer"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="cursor-pointer"
                            >
                                {isSubmitting && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                {isSubmitting
                                    ? isEditing
                                        ? "Updating..."
                                        : "Creating..."
                                    : isEditing
                                      ? "Update Tag"
                                      : "Create Tag"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
