"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import { generateContactEmailTemplate } from "@/emails/ContactEmail";
import { contactSchema, type ContactFormData } from "@/lib/validators/contact";
import prisma from "@/lib/prisma";
import { rateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_RATE_LIMIT = 5; // 5 submissions
const CONTACT_RATE_WINDOW = 15 * 60 * 1000; // per 15 minutes
const MIN_SUBMISSION_TIME = 5000; // 5 seconds minimum

export async function submitContactAction(
    data: ContactFormData,
    formLoadTime: number,
) {
    try {
        // Rate limiting by IP
        const headersList = await headers();
        const ip =
            headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            "unknown";
        const { success: rateLimitOk } = rateLimit(
            `contact:${ip}`,
            CONTACT_RATE_LIMIT,
            CONTACT_RATE_WINDOW,
        );

        if (!rateLimitOk) {
            return {
                success: false,
                error: "Too many submissions. Please try again later.",
            };
        }

        // Server-side time-based bot check
        const now = Date.now();
        if (
            typeof formLoadTime !== "number" ||
            formLoadTime > now ||
            now - formLoadTime < MIN_SUBMISSION_TIME
        ) {
            console.warn("Time-based check failed - potential bot detected");
            return {
                success: false,
                error: "Please take your time filling out the form.",
            };
        }

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

        // Save message to database
        await prisma.contactMessage.create({
            data: {
                firstName: validatedData.firstName,
                lastName: validatedData.lastName,
                email: validatedData.email,
                company: validatedData.company,
                projectType: validatedData.projectType,
                foundMe: validatedData.foundMe,
                message: validatedData.message,
            },
        });

        // Send email using Resend
        const emailResponse = await resend.emails.send({
            from: "Portfolio Contact Form <no-reply@mail.diegosalazar.dev>",
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
