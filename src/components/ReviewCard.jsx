const ratings = new Array(5);
ratings.fill({
    icon: "star",
    style: { fontVariationSettings: '"FILL" 1' },
});
console.log(ratings);

const ReviewCard = ({ content, imgSrc, name, company }) => {
    return (
        <div className="bg-white/80 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] border border-indigo-200/30 card-hover spotlight">
            <div className="flex items-center gap-1 mb-3">
                {ratings.map(({ icon, style }, key) => (
                    <span
                        key={key}
                        className="material-symbols-rounded text-amber-400 text-[18px]"
                        style={style}
                    >
                        {icon}
                    </span>
                ))}
            </div>

            <p className="text-gray-600 mb-8">{content}</p>
            <div className="flex items-center gap-2 mt-auto">
                <figure className="img-box rounded-lg">
                    <img
                        src={imgSrc}
                        alt={name}
                        width={44}
                        height={44}
                        loading="lazy"
                        className="img-cover"
                    />
                </figure>
                <div className="">
                    <p className="text-gray-900 font-medium">{name}</p>

                    <p className="text-xs text-gray-500 tracking-wider">
                        {company}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
