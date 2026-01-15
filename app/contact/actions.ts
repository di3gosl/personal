"use server";

import { Resend } from "resend";
import { z } from "zod";
import { generateContactEmailTemplate } from "@/emails/ContactEmail";
import { contactSchema, type ContactFormData } from "@/lib/validators/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactAction(data: ContactFormData) {
    try {
        // Server-side validation
        const validatedData = contactSchema.parse(data);

        // Honeypot check - reject if website field is filled
        if (validatedData.website) {
            console.warn("Honeypot triggered - potential spam detected");
            return {
                success: true,
                message: "Thank you! I'll get back to you soon.",
            };
        }

        // TODO: Add message to database
        // Example:
        // await db.contactSubmissions.create({
        //     data: {
        //         firstName: validatedData.firstName,
        //         lastName: validatedData.lastName,
        //         email: validatedData.email,
        //         company: validatedData.company,
        //         projectType: validatedData.projectType,
        //         foundMe: validatedData.foundMe,
        //         message: validatedData.message,
        //         createdAt: new Date(),
        //     }
        // });

        // Send email using Resend
        const emailResponse = await resend.emails.send({
            from: "Portfolio Contact Form <onboarding@resend.dev>",
            to: [process.env.RESEND_ADMIN_EMAIL!],
            replyTo: validatedData.email,
            subject: `New Contact Form Submission from ${validatedData.firstName} ${validatedData.lastName}`,
            html: await generateContactEmailTemplate(validatedData),
        });

        if (emailResponse.error) {
            console.error("Resend error:", emailResponse.error);
            return {
                success: false,
                error: "Failed to send email. Please try again later.",
            };
        }

        return {
            success: true,
            message: "Thank you! I'll get back to you soon.",
        };
    } catch (error) {
        console.error("Contact form error:", error);

        if (error instanceof z.ZodError) {
            return {
                success: false,
                error: "Invalid form data. Please check your inputs.",
            };
        }

        return {
            success: false,
            error: "An unexpected error occurred. Please try again later.",
        };
    }
}
