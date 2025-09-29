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
        label: "Projects",
        href: "#work",
    },
    {
        label: "Skills",
        href: "#skills",
    },
];

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/mariya-kindrat",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mariya-kindrat",
    },
];

const Footer = () => {
    return (
        <footer className="section section-enhanced">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up text-gray-900 dark:text-zinc-100 transition-colors duration-300">
                            Let&apos;s work together!
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="footer-heading mb-2 reveal-up text-gray-900 dark:text-zinc-100 font-medium transition-colors duration-300">
                                Sitemap
                            </p>

                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            className="footer-link block text-sm text-gray-600 dark:text-zinc-400 py-1 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="footer-heading mb-2 reveal-up text-gray-900 dark:text-zinc-100 font-medium transition-colors duration-300">
                                Socials
                            </p>

                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            className="footer-link block text-sm text-gray-600 dark:text-zinc-400 py-1 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 reveal-up"
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
                    <a href="/" className="logo">
                        <img
                            src="/images/kindrat_mariya_logo.png"
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                    </a>

                    <p className="footer-copyright text-gray-500 dark:text-zinc-500 text-sm transition-colors duration-300">
                        &copy; 2025{" "}
                        <span className="footer-brand text-gray-900 dark:text-zinc-100 transition-colors duration-300">
                            codewithmaria
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
