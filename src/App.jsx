import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroPage from "./components/Hero";
import Skill from "./components/Skill";
import Work from "./components/Work";
import { ThemeProvider } from "./contexts/ThemeContext";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
    useGSAP(() => {
        const elements = gsap.utils.toArray(".reveal-up");

        elements.forEach((element) => {
            gsap.fromTo(
                element,
                {
                    y: 100,
                    opacity: 0,
                    filter: "blur(10px)",
                },
                {
                    scrollTrigger: {
                        trigger: element,
                        start: "-200 bottom",
                        end: "bottom 80%",
                        scrub: true,
                    },
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "power2.out",
                }
            );
        });
    });

    return (
        <ThemeProvider>
            <ReactLenis root>
                <Header />
                <main>
                    <HeroPage />
                    <About />
                    <Skill />
                    <Work />
                    <Contact />
                </main>
                <Footer />
            </ReactLenis>
        </ThemeProvider>
    );
};

export default App;
