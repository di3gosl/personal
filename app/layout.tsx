import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

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

const baseUrl = "https://diegosalazar.dev";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Diego Salazar - Full-Stack Architect | SaaS & AI Systems",
        template: "%s | Diego Salazar",
    },
    description:
        "Over the past 10+ years, I've built scalable web applications, SaaS platforms, and AI-driven automation systems using Next.js, React, Node.js, PHP, AWS, and modern API-based architectures.",
    keywords: [
        "Full-Stack Developer",
        "Software Architect",
        "SaaS",
        "AI Systems",
        "Next.js",
        "React",
        "Node.js",
        "PHP",
        "AWS",
        "Web Development",
    ],
    authors: [{ name: "Diego Salazar", url: baseUrl }],
    creator: "Diego Salazar",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: baseUrl,
        siteName: "Diego Salazar",
        title: "Diego Salazar - Full-Stack Architect | SaaS & AI Systems",
        description:
            "Over the past 10+ years, I've built scalable web applications, SaaS platforms, and AI-driven automation systems using Next.js, React, Node.js, PHP, AWS, and modern API-based architectures.",
        images: [
            {
                url: "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/og-image.png",
                alt: "Diego Salazar - Full-Stack Architect",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Diego Salazar - Full-Stack Architect | SaaS & AI Systems",
        description:
            "Over the past 10+ years, I've built scalable web applications, SaaS platforms, and AI-driven automation systems using Next.js, React, Node.js, PHP, AWS, and modern API-based architectures.",
        images: [
            "https://xkvcnbjhkbzrtzdrkbjn.supabase.co/storage/v1/object/public/portfolio/og-image.png",
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: baseUrl,
    },
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
                <Header />
                <main>{children}</main>
                <Footer />
                <Toaster position="top-center" richColors />
                <Analytics />
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
            </body>
        </html>
    );
}
