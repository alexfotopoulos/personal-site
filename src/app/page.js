import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Experience from "../components/sections/Experience/Experience";
import Projects from "../components/sections/Projects/Projects";
import Contact from "../components/sections/Contact/Contact";

export default function page() {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </main>
    );
}
