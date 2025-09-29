import ButttonOutline from "./ButtonOutline";
import ButtonPrimary from "./ButtonPrimary";

const HeroPage = () => {
    return (
        <section
            id="home"
            className="min-h-screen pt-28 lg:pt-36 section-enhanced flex items-center"
        >
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10 w-full">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src="/images/custom/profile-image.png"
                                width={40}
                                height={40}
                                alt=""
                                className="img-cover"
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-gray-600 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-green-500 pulse-glow">
                                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 text-glow">
                        Building Scalable Modern Websites for the Future
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            href="/resume"
                            label="Resume"
                            icon="description"
                            classes="magnetic-hover"
                        />
                        <ButttonOutline
                            href="/references"
                            label="References"
                            icon="folder_open"
                            classes="magnetic-hover"
                        />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <figure
                        className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-stone-100/60 via-25% via-stone-50/40
                     to-65% rounded-[60px] overflow-hidden border-2 border-stone-200/60 shadow-2xl"
                        style={{
                            boxShadow:
                                "0 0 50px rgba(0, 0, 0, 0.12), inset 0 0 50px rgba(245, 245, 244, 0.4)",
                        }}
                    >
                        <img
                            src="/images/custom/profile-image.png"
                            width={656}
                            height={800}
                            alt=""
                            className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default HeroPage;
