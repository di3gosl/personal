import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

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
