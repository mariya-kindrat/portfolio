const ButttonOutline = ({ href, target = "_self", label, icon, classes }) => {
    if (href) {
        return (
            <a
                href={href}
                targrt={target}
                className={"btn btn-outline " + classes}
            >
                {label}
                {icon ? (
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        {" "}
                        {icon}
                    </span>
                ) : undefined}
            </a>
        );
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}
                {icon ? (
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        {" "}
                        {icon}
                    </span>
                ) : undefined}
            </button>
        );
    }
};

export default ButttonOutline;
