import type { Metadata } from "next";
import Hero from "./_components/Hero";
import Gallery from "./_components/Gallery";
import Education from "./_components/Education";
import Skills from "./_components/Skills";
import Experience from "./_components/Experience";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Diego Salazar — a Full-Stack Architect with 10+ years of experience building SaaS platforms, AI systems, and scalable web applications.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Diego Salazar",
        description:
            "Learn about Diego Salazar — a Full-Stack Architect with 10+ years of experience building SaaS platforms, AI systems, and scalable web applications.",
        url: "/about",
    },
};

export default function AboutPage() {
    return (
        <>
            <Hero />
            <Gallery />
            <Education />
            <Skills />
            <Experience />
        </>
    );
}
