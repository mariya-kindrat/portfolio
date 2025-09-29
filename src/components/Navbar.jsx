import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const location = useLocation();

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
        activeBox.current.style.width =
            lastActiveLink.current.offsetWidth + "px";
        activeBox.current.style.height =
            lastActiveLink.current.offsetHeight + "px";
    };

    useEffect(initActiveBox, []);
    window.addEventListener("resize", initActiveBox);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove("active");
        event.target.classList.add("active");
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + "px";
        activeBox.current.style.left = event.target.offsetLeft + "px";
        activeBox.current.style.width = event.target.offsetWidth + "px";
        activeBox.current.style.height = event.target.offsetHeight + "px";
    };

    // Helper function to get the correct link based on current location
    const getLink = (hashLink) => {
        // If we're on the home page, use hash links
        if (location.pathname === "/") {
            return hashLink;
        }
        // If we're on other pages, navigate to home page with hash
        return `/${hashLink}`;
    };

    const navItems = [
        {
            label: "Home",
            link: getLink("#home"),
            className: "nav-link active",
            ref: lastActiveLink,
            isHash: location.pathname === "/",
        },
        {
            label: "About",
            link: getLink("#about"),
            className: "nav-link",
            isHash: location.pathname === "/",
        },
        {
            label: "Skills",
            link: getLink("#skills"),
            className: "nav-link",
            isHash: location.pathname === "/",
        },
        {
            label: "Projects",
            link: getLink("#work"),
            className: "nav-link",
            isHash: location.pathname === "/",
        },
        {
            label: "Resume",
            link: "/resume",
            className: "nav-link",
            isHash: false,
        },
        {
            label: "References",
            link: "/references",
            className: "nav-link",
            isHash: false,
        },
        {
            label: "Contact",
            link: getLink("#contact"),
            className: "nav-link md:hidden",
            isHash: location.pathname === "/",
        },
    ];

    return (
        <nav className={"navbar " + (navOpen ? "active" : "")}>
            {navItems.map(({ label, link, className, ref, isHash }, index) =>
                isHash ? (
                    <a
                        href={link}
                        key={index}
                        ref={ref}
                        className={className}
                        onClick={activeCurrentLink}
                    >
                        {label}
                    </a>
                ) : (
                    <Link
                        to={link}
                        key={index}
                        ref={ref}
                        className={className}
                        onClick={activeCurrentLink}
                    >
                        {label}
                    </Link>
                )
            )}

            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

export default Navbar;
