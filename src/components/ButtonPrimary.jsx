import { Link } from "react-router-dom";

const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
    if (href) {
        
        const isInternalRoute = href.startsWith("/") && !href.startsWith("//");

        if (isInternalRoute) {
            return (
                <Link to={href} className={"btn btn-primary " + classes}>
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
                </Link>
            );
        } else {
            return (
                <a
                    href={href}
                    target={target}
                    className={"btn btn-primary " + classes}
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
        }
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
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

export default ButtonPrimary;
