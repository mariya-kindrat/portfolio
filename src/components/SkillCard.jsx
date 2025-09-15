const SkillCard = ({ imgSrc, label, desc, classes }) => {
    return (
        <div
            className={
                "flex items-center gap-3 ring-2 ring-inset ring-indigo-200/30 rounded-2xl p-3 hover:bg-indigo-50/50 transition-all duration-300 group card-hover spotlight " +
                classes
            }
        >
            <figure className="bg-white/80 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-indigo-50 transition-colors border border-indigo-200/30">
                <img
                    src={imgSrc}
                    width={32}
                    height={32}
                    alt={label}
                    className=""
                />
            </figure>
            <div className="">
                <h3 className="text-gray-900 font-medium">{label}</h3>

                <p className="text-gray-600 text-sm">{desc}</p>
            </div>
        </div>
    );
};

export default SkillCard;
