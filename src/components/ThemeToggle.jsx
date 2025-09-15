import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            <span className="material-symbols-rounded">
                {isDark ? "light_mode" : "dark_mode"}
            </span>
        </button>
    );
};

export default ThemeToggle;
