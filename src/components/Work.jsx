import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: "/images/project-1.jpg",
        title: "Flower Bee Profile",
        tags: ["API", "MVC", "Development"],
        projectLink: "https://insta-flower-bee-profile.vercel.app",
        githubLink:
            "https://github.com/mariya-kindrat/insta-flower-bee-profile",
    },
    {
        imgSrc: "/images/project-2.jpg",
        title: "Event Creator app",
        tags: ["API", "SPA"],
        projectLink: "https://develop.d2fcnp581pdhwl.amplifyapp.com",
        githubLink: "https://github.com/mariya-kindrat/events-creator",
    },
    // {
    //     imgSrc: "/images/project-3.jpg",
    //     title: "Recipe app",
    //     tags: ["Development", "API"],
    //     projectLink: "",
    // },
    // {
    //     imgSrc: "/images/project-4.jpg",
    //     title: "Real state website",
    //     tags: ["Web-design", "Development"],
    //     projectLink: "https://github.com/codewithsadee-org/wealthome",
    // },
    // {
    //     imgSrc: "/images/project-5.jpg",
    //     title: "eCommerce website",
    //     tags: ["eCommerce", "Development"],
    //     projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    // },
    // {
    //     imgSrc: "/images/project-6.jpg",
    //     title: "vCard Personal portfolio",
    //     tags: ["Web-design", "Development"],
    //     projectLink:
    //         "https://github.com/codewithsadee/vcard-personal-portfolio",
    // },
];

const Work = () => {
    return (
        <section id="work" className="section section-enhanced">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map((work, index) => (
                        <ProjectCard
                            card={work}
                            key={index}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
