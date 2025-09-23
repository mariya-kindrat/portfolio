const SkillCard = ({ imgSrc, label, desc, classes }) => {
    return (
        <div
            className={`
                group relative overflow-hidden
                bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
                border border-stone-200/40 dark:border-gray-700/50
                rounded-lg px-3 py-4 
                hover:bg-stone-50/60 dark:hover:bg-gray-700/60
                hover:border-stone-300/60 dark:hover:border-gray-600/60
                hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-black/30
                transition-all duration-500 ease-out
                card-hover spotlight
                ${classes}
            `}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-stone-50/0 via-transparent to-stone-100/0 group-hover:from-stone-50/30 group-hover:to-stone-100/20 dark:from-gray-800/0 dark:via-transparent dark:to-gray-700/0 dark:group-hover:from-gray-800/30 dark:group-hover:to-gray-700/20 transition-all duration-500 pointer-events-none" />

            {/* Content container */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                {/* Icon container */}
                <div className="relative">
                    <figure
                        className="
                        w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
                        bg-gradient-to-br from-stone-50 to-white dark:from-gray-700 dark:to-gray-600
                        rounded-lg p-2.5
                        border border-stone-200/50 dark:border-gray-600/50
                        group-hover:border-stone-300/80 dark:group-hover:border-gray-500/80
                        group-hover:shadow-lg group-hover:shadow-stone-500/20 dark:group-hover:shadow-black/40
                        transition-all duration-500
                        flex items-center justify-center
                    "
                    >
                        <img
                            src={imgSrc}
                            width={28}
                            height={28}
                            alt={label}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 dark:brightness-110"
                        />
                    </figure>

                    {/* Pulse effect on hover */}
                    <div className="absolute inset-0 rounded-lg bg-stone-400/20 dark:bg-gray-400/20 scale-0 group-hover:scale-110 group-hover:opacity-0 transition-all duration-500" />
                </div>

                {/* Text content */}
                <div className="space-y-1">
                    <h3
                        className="
                        text-gray-900 dark:text-gray-100 font-semibold text-sm md:text-base
                        group-hover:text-gray-800 dark:group-hover:text-white
                        transition-colors duration-300
                    "
                    >
                        {label}
                    </h3>

                    <p
                        className="
                        text-gray-600 dark:text-gray-300 text-xs
                        group-hover:text-gray-700 dark:group-hover:text-gray-200
                        transition-colors duration-300
                        leading-relaxed
                    "
                    >
                        {desc}
                    </p>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-gray-800 to-black dark:from-gray-400 dark:to-gray-200 group-hover:w-3/4 transition-all duration-500 rounded-full" />
        </div>
    );
};

export default SkillCard;
