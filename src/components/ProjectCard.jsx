const ProjectCard = ({ card, classes }) => {
    return (
        <div
            className={
                "relative p-4 rounded-2xl bg-white/90 hover:bg-stone-50/60 active:bg-stone-100/60 ring-1 ring-inset ring-stone-200/40 transition-all duration-300 card-hover spotlight " +
                classes
            }
        >
            <figure className="img-box aspect-square rounded-lg mb-4">
                <img
                    src={card.imgSrc}
                    alt={card.title}
                    loading="lazy"
                    className="img-cover"
                />
            </figure>

            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3 text-gray-900">{card.title}</h3>

                    <div className="flex flex-wrap items-center gap-2">
                        {card.tags.map((label, key) => (
                            <span
                                key={key}
                                className="h-8 text-sm text-gray-600 bg-stone-50/90 grid items-center px-3 rounded-lg border border-stone-200/40"
                            >
                                {" "}
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2 shrink-0">
                    {card.githubLink && (
                        <a
                            href={card.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-lg grid place-items-center bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-600 hover:to-gray-800 transition-all duration-300"
                            title="View on GitHub"
                        >
                            <span
                                className="material-symbols-rounded"
                                aria-hidden="true"
                            >
                                code
                            </span>
                        </a>
                    )}
                    {card.projectLink && (
                        <a
                            href={card.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-lg grid place-items-center bg-gradient-to-r from-gray-800 to-black text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300"
                            title="View Project"
                        >
                            <span
                                className="material-symbols-rounded"
                                aria-hidden="true"
                            >
                                arrow_outward
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
