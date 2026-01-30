"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LogIn, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const loginSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: LoginFormData) {
        setIsLoading(true);

        try {
            const result = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            });

            if (result?.error) {
                toast.error("Login failed", {
                    description: "Invalid email or password",
                });
            } else {
                toast.success("Login successful", {
                    description: "Redirecting to dashboard...",
                });
                router.push("/admin/projects");
                router.refresh();
            }
        } catch {
            toast.error("An unexpected error occurred", {
                description: "Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Card className="border-border shadow-lg">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-display">
                    Welcome back
                </CardTitle>
                <CardDescription>
                    Enter your credentials to continue
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="admin@example.com"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full cursor-pointer"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <LogIn />
                                    Sign in
                                </>
                            )}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
