const aboutItems = [
    {
        label: "Project done",
        number: 7,
    },
    {
        label: "Years of experience",
        number: 3,
    },
];

const About = () => {
    return (
        <section id="about" className="section section-enhanced">
            <div className="container">
                <div
                    className="about-card bg-white/80 p-7 rounded-2xl md:p-12 reveal-up border border-indigo-200/50 card-hover spotlight"
                    style={{
                        boxShadow:
                            "0 8px 30px rgba(99, 102, 241, 0.1), inset 0 0 30px rgba(168, 85, 247, 0.05)",
                    }}
                >
                    <h1 className="headline-1 mb-4 md:mb-6 text-center md:text-left w-full">
                        React & Next.js Developer: Creating Modern Web
                        Applications
                    </h1>
                    <p className="about-text text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-8 font-medium text-center md:text-left w-full">
                        With over three years of experience as a Frontend
                        Developer, I specialize in crafting scalable,
                        responsive, and high-performance web applications using
                        React.js and Next.js. I am passionate about creating
                        pixel-perfect user interfaces and optimizing performance
                        to deliver an exceptional user experience. In my recent
                        role, I led key initiatives that improved application
                        responsiveness by 16% and reduced initial page load
                        times by 20% through strategic optimization techniques
                        like code splitting and lazy loading. I have extensive
                        experience in global state management using Redux
                        Toolkit and in integrating third-party REST APIs. I
                        thrive in collaborative, Agile environments, working
                        closely with designers to transform complex Figma
                        mockups into polished, interactive components. A
                        dedicated learner with a keen eye for detail, I am
                        always seeking new challenges to contribute my skills to
                        a dynamic and innovative team. My core competencies
                        include: JavaScript (ES6+), TypeScript, Redux, HTML/CSS,
                        REST APIs, and Agile/Scrum methodologies.
                    </p>
                    <div className=" flex flex-wrap items-center gap-4 md:gap-7">
                        {aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-bold md:text-4xl">
                                        {number}
                                    </span>
                                    <span className="about-plus text-white font-semibold md:text-3xl">
                                        +
                                    </span>
                                </div>
                                <p className="about-label text-sm text-gray-400">
                                    {label}
                                </p>
                            </div>
                        ))}

                        <img
                            src="/images/kindrat_mariya_logo.png"
                            alt="logo"
                            width={30}
                            height={30}
                            className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
