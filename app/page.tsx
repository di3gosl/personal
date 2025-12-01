import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Hero from "./_components/Hero";
import Skills from "./_components/Skills";
import Portfolio from "./_components/Portfolio";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Portfolio />
                <Skills />
            </main>
            <Footer />
        </>
    );
}
