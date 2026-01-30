import Hero from "./_components/Hero";
import Skills from "./_components/Skills";
import Portfolio from "./_components/Portfolio";
import { getProjects } from "./actions";

export default async function Home() {
    const { data: projects } = await getProjects();

    return (
        <>
            <Hero />
            <Portfolio projects={projects} />
            <Skills />
        </>
    );
}
