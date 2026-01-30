"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useForm, useFieldArray, FieldValues } from "react-hook-form";
import { Save, Loader2, Plus, Trash2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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
import { projectSchema, type ProjectFormData } from "@/lib/validators/project";
import { createProject, updateProject } from "../actions";
import { PROJECT_TYPES } from "@/data/projectTypes";
import { PROJECT_STATUSES } from "@/data/projectStatuses";
import TagsSelector from "./TagsSelector";

interface ProjectFormProps {
    initialData?: ProjectFormData & { id?: string };
    mode: "create" | "edit";
}

export default function ProjectForm({ initialData, mode }: ProjectFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FieldValues>({
        // Type assertion needed due to zod v4 type incompatibility with react-hook-form
        resolver: standardSchemaResolver(projectSchema) as never,
        defaultValues: (initialData as FieldValues) || {
            slug: "",
            title: "",
            description: "",
            year: new Date().getFullYear(),
            image: "",
            label: "",
            isFeatured: false,
            type: "",
            status: "In Progress",
            liveUrl: "",
            repoUrl: "",
            goal: "",
            challenge: "",
            roleDescription: "",
            role: "",
            platform: "",
            team: "",
            repository: "",
            results: "",
            order: 0,
            isActive: true,
            techStack: [{ category: "", technologies: [] }],
            designDecisions: [],
            whatIBuilt: [],
            screenshots: [],
            tags: [],
        },
    });

    const {
        fields: techStackFields,
        append: appendTechStack,
        remove: removeTechStack,
    } = useFieldArray({
        control: form.control,
        name: "techStack",
    });

    const {
        fields: screenshotFields,
        append: appendScreenshot,
        remove: removeScreenshot,
    } = useFieldArray({
        control: form.control,
        name: "screenshots",
    });

    const {
        fields: designDecisionFields,
        append: appendDesignDecision,
        remove: removeDesignDecision,
    } = useFieldArray({
        control: form.control,
        name: "designDecisions" as never,
    });

    const {
        fields: whatIBuiltFields,
        append: appendWhatIBuilt,
        remove: removeWhatIBuilt,
    } = useFieldArray({
        control: form.control,
        name: "whatIBuilt" as never,
    });

    async function onSubmit(values: FieldValues) {
        setIsSubmitting(true);
        const formData = values as ProjectFormData;

        try {
            const result =
                mode === "create"
                    ? await createProject(formData)
                    : await updateProject(initialData!.id!, formData);

            if (result.success) {
                toast.success(
                    mode === "create"
                        ? "Project created successfully"
                        : "Project updated successfully",
                );
                router.push("/admin/projects");
                router.refresh();
            } else {
                toast.error(result.error || "An error occurred");
            }
        } catch {
            toast.error("An unexpected error occurred");
        } finally {
            setIsSubmitting(false);
        }
    }

    // Auto-generate slug from title
    function handleTitleChange(value: string) {
        form.setValue("title", value);
        if (mode === "create") {
            const slug = value
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
            form.setValue("slug", slug);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="/admin/projects">
                                <ArrowLeft className="size-5" />
                            </Link>
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold font-display text-foreground">
                                {mode === "create"
                                    ? "Create Project"
                                    : "Edit Project"}
                            </h1>
                            <p className="text-muted-foreground">
                                {mode === "create"
                                    ? "Add a new project to your portfolio"
                                    : "Update project details"}
                            </p>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="cursor-pointer"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin" />
                                Saving...
                            </>
                        ) : (
                            <>
                                <Save />
                                Save Project
                            </>
                        )}
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Basic Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Basic Information</CardTitle>
                                <CardDescription>
                                    Core details about the project
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Title{" "}
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    onChange={(e) =>
                                                        handleTitleChange(
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="slug"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Slug{" "}
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                URL-friendly identifier (e.g.,
                                                my-project)
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Description{" "}
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea {...field} rows={4} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="type"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Type{" "}
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select type" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {PROJECT_TYPES.map(
                                                            (type) => (
                                                                <SelectItem
                                                                    key={type}
                                                                    value={type}
                                                                >
                                                                    {type}
                                                                </SelectItem>
                                                            ),
                                                        )}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Status{" "}
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    defaultValue={field.value}
                                                >
                                                    <FormControl>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select status" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {PROJECT_STATUSES.map(
                                                            (status) => (
                                                                <SelectItem
                                                                    key={status}
                                                                    value={
                                                                        status
                                                                    }
                                                                >
                                                                    {status}
                                                                </SelectItem>
                                                            ),
                                                        )}
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="year"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Year{" "}
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    The year where the project
                                                    was released
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="label"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Label</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    This label will appear on
                                                    the preview card (if set)
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Project Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Project Details</CardTitle>
                                <CardDescription>
                                    In-depth information about the project
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="goal"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Goal{" "}
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea {...field} rows={4} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="challenge"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Challenge{" "}
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea {...field} rows={4} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="results"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Results{" "}
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea {...field} rows={4} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Separator />

                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="role"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Role{" "}
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="platform"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Platform{" "}
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="roleDescription"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Role Description{" "}
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea {...field} rows={3} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="team"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Team{" "}
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="repository"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Repository Info{" "}
                                                    <span className="text-destructive">
                                                        *
                                                    </span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tech Stack */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Tech Stack</CardTitle>
                                <CardDescription>
                                    Technologies used in this project
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {techStackFields.map((field, index) => (
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
                                                        <FormLabel>
                                                            Category
                                                        </FormLabel>
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
                                                        <FormLabel>
                                                            Technologies
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                value={
                                                                    Array.isArray(
                                                                        field.value,
                                                                    )
                                                                        ? field.value.join(
                                                                              ", ",
                                                                          )
                                                                        : field.value ||
                                                                          ""
                                                                }
                                                                onChange={(e) =>
                                                                    field.onChange(
                                                                        e.target
                                                                            .value,
                                                                    )
                                                                }
                                                                onBlur={(e) => {
                                                                    const value =
                                                                        e.target
                                                                            .value;
                                                                    field.onChange(
                                                                        value
                                                                            .split(
                                                                                ",",
                                                                            )
                                                                            .map(
                                                                                (
                                                                                    t,
                                                                                ) =>
                                                                                    t.trim(),
                                                                            )
                                                                            .filter(
                                                                                Boolean,
                                                                            ),
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
                                            variant="ghost"
                                            size="icon"
                                            onClick={() =>
                                                removeTechStack(index)
                                            }
                                            disabled={
                                                techStackFields.length === 1
                                            }
                                            className="text-destructive hover:text-destructive cursor-pointer"
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
                                        appendTechStack({
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

                        {/* What I Built */}
                        <Card>
                            <CardHeader>
                                <CardTitle>What I Built</CardTitle>
                                <CardDescription>
                                    Key features and components you built
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {whatIBuiltFields.map((field, index) => (
                                    <div
                                        key={field.id}
                                        className="flex gap-2 items-center"
                                    >
                                        <FormField
                                            control={form.control}
                                            name={`whatIBuilt.${index}`}
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="e.g., Built the authentication system"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            onClick={() =>
                                                removeWhatIBuilt(index)
                                            }
                                            className="text-destructive hover:text-destructive cursor-pointer"
                                        >
                                            <Trash2 className="size-4" />
                                        </Button>
                                    </div>
                                ))}
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="cursor-pointer"
                                    onClick={() => appendWhatIBuilt("")}
                                >
                                    <Plus className="size-4" />
                                    Add Item
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Design Decisions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Design Decisions</CardTitle>
                                <CardDescription>
                                    Key design and architecture decisions
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {designDecisionFields.map((field, index) => (
                                    <div
                                        key={field.id}
                                        className="flex gap-2 items-center"
                                    >
                                        <FormField
                                            control={form.control}
                                            name={`designDecisions.${index}`}
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="e.g., Used microservices architecture"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            onClick={() =>
                                                removeDesignDecision(index)
                                            }
                                            className="text-destructive hover:text-destructive cursor-pointer"
                                        >
                                            <Trash2 className="size-4" />
                                        </Button>
                                    </div>
                                ))}
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="cursor-pointer"
                                    onClick={() => appendDesignDecision("")}
                                >
                                    <Plus className="size-4" />
                                    Add Decision
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Screenshots */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Screenshots</CardTitle>
                                <CardDescription>
                                    Project screenshots and images
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {screenshotFields.map((field, index) => (
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
                                                            <FormLabel>
                                                                Source URL
                                                            </FormLabel>
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
                                                                Preview URL
                                                                (optional)
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
                                                            <FormLabel>
                                                                Caption
                                                            </FormLabel>
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
                                                            <FormLabel>
                                                                Order
                                                            </FormLabel>
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
                                            variant="ghost"
                                            size="icon"
                                            onClick={() =>
                                                removeScreenshot(index)
                                            }
                                            className="text-destructive hover:text-destructive cursor-pointer"
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
                                        appendScreenshot({
                                            src: "",
                                            previewSrc: "",
                                            caption: "",
                                            order: screenshotFields.length,
                                        })
                                    }
                                >
                                    <Plus className="size-4" />
                                    Add Screenshot
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Media */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Media</CardTitle>
                                <CardDescription>Preview image</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="image"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Image URL{" "}
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="/images/project.png"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        {/* Tags */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Tags & Technologies</CardTitle>
                                <CardDescription>
                                    Select or create tags for this project
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <FormField
                                    control={form.control}
                                    name="tags"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <TagsSelector
                                                    selectedTags={
                                                        field.value || []
                                                    }
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        {/* Links */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Links</CardTitle>
                                <CardDescription>
                                    External project links
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="liveUrl"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Live URL</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="https://example.com"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="repoUrl"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Repository URL
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="https://github.com/..."
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        {/* Settings */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Settings</CardTitle>
                                <CardDescription>
                                    Visibility and ordering
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="order"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Display Order</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                Lower numbers appear first
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Separator />

                                <FormField
                                    control={form.control}
                                    name="isFeatured"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center justify-between rounded-lg border border-border p-3">
                                            <div className="space-y-0.5">
                                                <FormLabel>Featured</FormLabel>
                                                <FormDescription>
                                                    Show on homepage
                                                </FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    className="cursor-pointer"
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="isActive"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center justify-between rounded-lg border border-border p-3">
                                            <div className="space-y-0.5">
                                                <FormLabel>Active</FormLabel>
                                                <FormDescription>
                                                    Visible on portfolio
                                                </FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    className="cursor-pointer"
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </form>
        </Form>
    );
}
