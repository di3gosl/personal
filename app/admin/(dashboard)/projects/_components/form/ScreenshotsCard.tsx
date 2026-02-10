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
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

interface ScreenshotsCardProps {
    form: UseFormReturn<FieldValues>;
    fieldArray: UseFieldArrayReturn<FieldValues, "screenshots", "id">;
}

export default function ScreenshotsCard({
    form,
    fieldArray: { fields, append, remove },
}: ScreenshotsCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Screenshots</CardTitle>
                <CardDescription>
                    Project screenshots and images
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {fields.map((field, index) => (
                    <div
                        key={field.id}
                        className="flex gap-4 items-start p-4 border border-border rounded-lg"
                    >
                        <div className="flex-1 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name={`screenshots.${index}.src`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Source URL</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="/images/screenshot.png"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`screenshots.${index}.previewSrc`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Preview URL (optional)
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="/images/screenshot-preview.png"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name={`screenshots.${index}.caption`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Caption</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Optional caption"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={`screenshots.${index}.order`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Order</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <Button
                            type="button"
                            variant="destructive-ghost"
                            size="icon"
                            onClick={() => remove(index)}
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
                            src: "",
                            previewSrc: "",
                            caption: "",
                            order: fields.length,
                        })
                    }
                >
                    <Plus className="size-4" />
                    Add Screenshot
                </Button>
            </CardContent>
        </Card>
    );
}
