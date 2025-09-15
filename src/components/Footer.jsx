import ButtonPrimary from "./ButtonPrimary";

const sitemap = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Work",
        href: "#work",
    },
    {
        label: "Reviews",
        href: "#reviews",
    },
    {
        label: "Contact me",
        href: "#contact",
    },
];

const socials = [
    {
        label: "GitHub",
        href: "https://www.github.com/codewithsadee-org",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/codewithsadee",
    },
    {
        label: "Twitter X",
        href: "https://x.com/codewithsadee_",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/codewithsadee",
    },
    {
        label: "CodePen",
        href: "https://codepen.io/codewithsadee",
    },
];

const Footer = () => {
    return (
        <footer className="section section-enhanced">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                            Let&apos;s work together today!
                        </h2>

                        <ButtonPrimary
                            href=""
                            label="Start project"
                            icon="chevron_right"
                            classes="reveal-up"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="footer-heading mb-2 reveal-up text-gray-900 font-medium">
                                Sitemap
                            </p>

                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            className="footer-link block text-sm text-gray-600 py-1 transition-colors hover:text-indigo-600 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="footer-heading mb-2 reveal-up text-gray-900 font-medium">
                                Socials
                            </p>

                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            className="footer-link block text-sm text-gray-600 py-1 transition-colors hover:text-indigo-600 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="/" className="logo reveal-up">
                        <img
                            src="/images/logo.svg"
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                    </a>

                    <p className="footer-copyright text-gray-500 text-sm reveal-up">
                        &copy; 2025{" "}
                        <span className="footer-brand text-gray-900">
                            codewithmaria
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
