import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();

    const handleIsOpen = () => {
        setNavOpen(!navOpen);
    };

    // Helper function to get the correct contact link
    const getContactLink = () => {
        return location.pathname === "/" ? "#contact" : "/#contact";
    };
    return (
        <header className="header-bg fixed top-0 left-0 w-full h-20 flex items-center z-40 backdrop-blur-sm border-b border-theme">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
                <h1>
                    <Link to="/" className="logo ">
                        <img
                            src="/images/kindrat_mariya_logo.png"
                            width={40}
                            height={40}
                            alt="logo"
                        />
                    </Link>
                </h1>

                <div className="relative md:justify-self-center">
                    <button
                        className="menu-btn md:hidden"
                        onClick={handleIsOpen}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? "close" : "menu"}
                        </span>
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    {location.pathname === "/" ? (
                        <a
                            href="#contact"
                            className="btn btn-secondary max-md:hidden md:justify-self-end "
                        >
                            Contact Me
                        </a>
                    ) : (
                        <Link
                            to="/#contact"
                            className="btn btn-secondary max-md:hidden md:justify-self-end "
                        >
                            Contact Me
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
