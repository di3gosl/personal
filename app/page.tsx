import Hero from "./_components/Hero";
import Skills from "./_components/Skills";
import Portfolio from "./_components/Portfolio";

export default function Home() {
    return (
        <>
            <div>
                <Hero />
                <Portfolio />
                <Skills />
            </div>
        </>
    );
}
