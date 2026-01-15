"use client";

import { motion } from "motion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { contactSchema, type ContactFormData } from "@/lib/validators/contact";

interface ContactFormProps {
    onSubmit: (data: ContactFormData) => Promise<{
        success: boolean;
        message?: string;
        error?: string;
    }>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            firstName: "Diego",
            lastName: "Salazar",
            email: "diego_1717@hotmail.com",
            company: "Mypet",
            projectType: "",
            foundMe: "",
            message: "This is a test message",
            website: "",
        },
    });

    async function handleSubmit(values: ContactFormData) {
        try {
            const result = await onSubmit(values);

            if (result.success) {
                toast.success("Message sent successfully!", {
                    description:
                        "Thank you for reaching out. I'll get back to you soon.",
                });
                form.reset();
            } else {
                toast.error("Failed to send message", {
                    description: "Please try again later.",
                });
            }
        } catch {
            toast.error("An unexpected error occurred", {
                description: "Please try again later.",
            });
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-6"
            >
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    First name{" "}
                                    <span className="text-red-500">*</span>
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
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Last name{" "}
                                    <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Email{" "}
                                    <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Company */}
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Project Type and How did you find me */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project Type</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem
                                            value="Web Development"
                                            className="data-highlighted:bg-light"
                                        >
                                            Web Development
                                        </SelectItem>
                                        <SelectItem
                                            value="SaaS Platform"
                                            className="data-highlighted:bg-light"
                                        >
                                            SaaS Platform
                                        </SelectItem>
                                        <SelectItem
                                            value="AI/Automation"
                                            className="data-highlighted:bg-light"
                                        >
                                            AI/Automation
                                        </SelectItem>
                                        <SelectItem
                                            value="E-commerce"
                                            className="data-highlighted:bg-light"
                                        >
                                            E-commerce
                                        </SelectItem>
                                        <SelectItem
                                            value="WordPress/WooCommerce"
                                            className="data-highlighted:bg-light"
                                        >
                                            WordPress/WooCommerce
                                        </SelectItem>
                                        <SelectItem
                                            value="API Integration"
                                            className="data-highlighted:bg-light"
                                        >
                                            API Integration
                                        </SelectItem>
                                        <SelectItem
                                            value="Consulting"
                                            className="data-highlighted:bg-light"
                                        >
                                            Consulting
                                        </SelectItem>
                                        <SelectItem
                                            value="Mobile App"
                                            className="data-highlighted:bg-light"
                                        >
                                            Mobile App
                                        </SelectItem>
                                        <SelectItem
                                            value="Other"
                                            className="data-highlighted:bg-light"
                                        >
                                            Other
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="foundMe"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>How did you find me?</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select an option" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem
                                            value="Google Search"
                                            className="data-highlighted:bg-light"
                                        >
                                            Google Search
                                        </SelectItem>
                                        <SelectItem
                                            value="LinkedIn"
                                            className="data-highlighted:bg-light"
                                        >
                                            LinkedIn
                                        </SelectItem>
                                        <SelectItem
                                            value="GitHub"
                                            className="data-highlighted:bg-light"
                                        >
                                            GitHub
                                        </SelectItem>
                                        <SelectItem
                                            value="Referral"
                                            className="data-highlighted:bg-light"
                                        >
                                            Referral
                                        </SelectItem>
                                        <SelectItem
                                            value="Other"
                                            className="data-highlighted:bg-light"
                                        >
                                            Other
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Message */}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Tell me about your project{" "}
                                <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    rows={6}
                                    placeholder="Tell me about your project..."
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Honeypot field - hidden from users */}
                <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                        <FormItem className="hidden" aria-hidden="true">
                            <FormLabel>Website</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full cursor-pointer transition-colors"
                        disabled={form.formState.isSubmitting}
                    >
                        <Send />{" "}
                        {form.formState.isSubmitting ? "Sending..." : "Send"}
                    </Button>
                </motion.div>
            </form>
        </Form>
    );
}
