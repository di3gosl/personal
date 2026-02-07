import { z } from "zod";

export const contactSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    company: z.string().optional(),
    projectType: z.string().optional(),
    foundMe: z.string().optional(),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
    website: z.string().max(0, "Invalid submission").optional(), // Honeypot field
});

export type ContactFormData = z.infer<typeof contactSchema>;
