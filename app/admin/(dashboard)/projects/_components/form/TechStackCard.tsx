"use client";

import {
    type UseFormReturn,
    type FieldValues,
    type UseFieldArrayReturn,
} from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

interface TechStackCardProps {
    form: UseFormReturn<FieldValues>;
    fieldArray: UseFieldArrayReturn<FieldValues, "techStack", "id">;
}

export default function TechStackCard({
    form,
    fieldArray: { fields, append, remove },
}: TechStackCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
                <CardDescription>
                    Technologies used in this project
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {fields.map((field, index) => (
                    <div
                        key={field.id}
                        className="flex gap-4 items-start p-4 border border-border rounded-lg"
                    >
                        <div className="flex-1 space-y-4">
                            <FormField
                                control={form.control}
                                name={`techStack.${index}.category`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="e.g., Frontend, Backend"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={`techStack.${index}.technologies`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Technologies</FormLabel>
                                        <FormControl>
                                            <Input
                                                value={
                                                    Array.isArray(field.value)
                                                        ? field.value.join(", ")
                                                        : field.value || ""
                                                }
                                                onChange={(e) =>
                                                    field.onChange(
                                                        e.target.value,
                                                    )
                                                }
                                                onBlur={(e) => {
                                                    const value =
                                                        e.target.value;
                                                    field.onChange(
                                                        value
                                                            .split(",")
                                                            .map((t) =>
                                                                t.trim(),
                                                            )
                                                            .filter(Boolean),
                                                    );
                                                }}
                                                placeholder="React, TypeScript, Tailwind"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Comma-separated list
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button
                            type="button"
                            variant="destructive-ghost"
                            size="icon"
                            onClick={() => remove(index)}
                            disabled={fields.length === 1}
                        >
                            <Trash2 className="size-4" />
                        </Button>
                    </div>
                ))}
                <Button
                    type="button"
                    variant="outline"
                    className="cursor-pointer"
                    onClick={() =>
                        append({
                            category: "",
                            technologies: [],
                        })
                    }
                >
                    <Plus className="size-4" />
                    Add Category
                </Button>
            </CardContent>
        </Card>
    );
}
