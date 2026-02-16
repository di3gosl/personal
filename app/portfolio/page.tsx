import type { Metadata } from "next";
import { getProjects, getFilterableTags } from "./actions";
import PortfolioList from "./_components/PortfolioList";

export const metadata: Metadata = {
    title: "Portfolio",
    description:
        "Explore Diego Salazar's portfolio of web applications, SaaS platforms, and AI-driven systems built with modern technologies.",
    alternates: {
        canonical: "/portfolio",
    },
    openGraph: {
        title: "Portfolio — Diego Salazar",
        description:
            "Explore Diego Salazar's portfolio of web applications, SaaS platforms, and AI-driven systems built with modern technologies.",
        url: "/portfolio",
    },
};

export default async function PortfolioPage() {
    const { data: projects } = await getProjects();
    const { data: tags } = await getFilterableTags();

    return (
        <section className="px-6 md:px-12 pt-24 md:pt-36 pb-12 md:pb-24">
            <PortfolioList projects={projects} tags={tags} />
        </section>
    );
}
