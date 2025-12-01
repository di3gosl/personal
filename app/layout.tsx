import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import PageTransition from "@/src/components/PageTransition";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Diego Salazar - Full-Stack Developer",
    description:
        "Over the past 10+ years, I've built scalable web applications, SaaS platforms, and AI-driven automation systems using Next.js, React, Node.js, PHP, AWS, and modern API-based architectures.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
            >
                <PageTransition>{children}</PageTransition>
            </body>
        </html>
    );
}
