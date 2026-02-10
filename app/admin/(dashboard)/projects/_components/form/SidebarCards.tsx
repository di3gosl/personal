"use client";

import { type UseFormReturn, type FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
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
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import TagsSelector from "../TagsSelector";

interface SidebarCardsProps {
    form: UseFormReturn<FieldValues>;
}

export default function SidebarCards({ form }: SidebarCardsProps) {
    return (
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
                                    <span className="text-destructive">*</span>
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
                                        selectedTags={field.value || []}
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
                    <CardDescription>External project links</CardDescription>
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
                                <FormLabel>Repository URL</FormLabel>
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
                    <CardDescription>Visibility and ordering</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <FormField
                        control={form.control}
                        name="order"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Display Order</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
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
                                        onCheckedChange={field.onChange}
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
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
