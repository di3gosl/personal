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
    FormMessage,
} from "@/components/ui/form";

interface StringListCardProps {
    form: UseFormReturn<FieldValues>;
    fieldArray: UseFieldArrayReturn<FieldValues, string, "id">;
    title: string;
    description: string;
    fieldName: string;
    placeholder: string;
    addLabel: string;
}

export default function StringListCard({
    form,
    fieldArray: { fields, append, remove },
    title,
    description,
    fieldName,
    placeholder,
    addLabel,
}: StringListCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {fields.map((field, index) => (
                    <div key={field.id} className="flex gap-2 items-center">
                        <FormField
                            control={form.control}
                            name={`${fieldName}.${index}`}
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder={placeholder}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                    onClick={() => append("")}
                >
                    <Plus className="size-4" />
                    {addLabel}
                </Button>
            </CardContent>
        </Card>
    );
}
