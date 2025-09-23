import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: "/images/react.svg",
        label: "React",
        desc: "Frontend Library",
    },
    {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "Programming Language",
    },
    {
        imgSrc: "/images/nextjs.svg",
        label: "Next.js",
        desc: "React Framework",
    },
    {
        imgSrc: "/images/redux.svg",
        label: "Redux",
        desc: "State Management",
    },
    {
        imgSrc: "/images/bootstrap.svg",
        label: "Bootstrap",
        desc: "CSS Framework",
    },
    {
        imgSrc: "/images/materialui.svg",
        label: "Material UI",
        desc: "React Components",
    },
    {
        imgSrc: "/images/stripe.svg",
        label: "Stripe",
        desc: "Payment Processing",
    },
    {
        imgSrc: "/images/css3.svg",
        label: "CSS3",
        desc: "Styling Language",
    },
    {
        imgSrc: "/images/nodejs.svg",
        label: "Node.js",
        desc: "Runtime Environment",
    },
    {
        imgSrc: "/images/expressjs.svg",
        label: "Express.js",
        desc: "Backend Framework",
    },
    {
        imgSrc: "/images/mysql.svg",
        label: "MySQL",
        desc: "Relational Database",
    },
    {
        imgSrc: "/images/postgresql.svg",
        label: "PostgreSQL",
        desc: "Relational Database",
    },
    {
        imgSrc: "/images/mongodb.svg",
        label: "MongoDB",
        desc: "NoSQL Database",
    },
    {
        imgSrc: "/images/tailwindcss.svg",
        label: "Tailwind CSS",
        desc: "Utility-First CSS",
    },
    {
        imgSrc: "/images/github.svg",
        label: "GitHub",
        desc: "Version Control",
    },
    {
        imgSrc: "/images/aws.svg",
        label: "AWS",
        desc: "Cloud Platform",
    },
    {
        imgSrc: "/images/googlecloud.svg",
        label: "Google Cloud",
        desc: "Cloud Platform",
    },
    {
        imgSrc: "/images/firebase.svg",
        label: "Firebase",
        desc: "Backend Service",
    },
    {
        imgSrc: "/images/vercel.svg",
        label: "Vercel",
        desc: "Deployment Platform",
    },
    {
        imgSrc: "/images/figma.svg",
        label: "Figma",
        desc: "Design Tool",
    },
];

const Skill = () => {
    return (
        <section id="skills" className="section section-enhanced">
            <div className="container">
                <h2 className="headline-2 reveal-up">Essential Tools i use</h2>
                <p className="text-gray-400 mt-3 mb:-8 max-w-[50ch] reveal-up">
                    Discover the powerful tools and technologies I use to create
                    exceptional, high-performing websites & applications.
                </p>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-12">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
