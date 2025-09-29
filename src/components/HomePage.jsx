import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import Header from "./Header";
import HeroPage from "./Hero";
import About from "./About";
import Skill from "./Skill";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HomePage = () => {
    const location = useLocation();

    // GSAP animations setup
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

    useEffect(() => {
        // Handle hash navigation when coming from other routes
        if (location.hash) {
            const targetId = location.hash.substring(1); // Remove the # symbol
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Small delay to ensure the page is fully rendered and GSAP is ready
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                    // Refresh ScrollTrigger to ensure animations work properly
                    ScrollTrigger.refresh();
                }, 300);
            }
        } else {
            // If no hash, refresh ScrollTrigger anyway to ensure animations work
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 100);
        }
    }, [location.hash]);

    // Also refresh ScrollTrigger when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
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
    );
};

export default HomePage;
