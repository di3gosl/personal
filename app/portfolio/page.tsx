import { getProjects } from "./actions";
import PortfolioList from "./_components/PortfolioList";

export default async function PortfolioPage() {
    const { data: projects } = await getProjects();

    return (
        <section className="px-6 md:px-12 pt-24 md:pt-36 pb-12 md:pb-24">
            <PortfolioList projects={projects} />
        </section>
    );
}
