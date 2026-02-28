import { z } from "zod";

export const contactSchema = z.object({
    firstName: z
        .string()
        .min(2, {
            message: "First name must be at least 2 characters.",
        })
        .max(50, {
            message: "First name must be at most 50 characters.",
        }),
    lastName: z
        .string()
        .min(2, {
            message: "Last name must be at least 2 characters.",
        })
        .max(50, {
            message: "Last name must be at most 50 characters.",
        }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    company: z
        .string()
        .max(60, {
            message: "Company must be at most 60 characters.",
        })
        .optional(),
    projectType: z.string().optional(),
    foundMe: z.string().optional(),
    message: z
        .string()
        .min(10, {
            message: "Message must be at least 10 characters.",
        })
        .max(1000, {
            message: "Message must be at most 1000 characters.",
        }),
    website: z.string().max(0, "Invalid submission").optional(), // Honeypot field
});

export type ContactFormData = z.infer<typeof contactSchema>;
