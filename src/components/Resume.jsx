import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import Header from "./Header";

const Resume = () => {
    const navigate = useNavigate();
    const { isDark } = useTheme();

    const handleDownload = () => {
        // Create a temporary link element to trigger download
        const link = document.createElement("a");
        link.href = "/resume/kindrat_mariya_resume.pdf";
        link.download = "kindrat_mariya_resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-zinc-900 transition-colors duration-300">
            <Header />
            {/* Header with back button */}
            <div className="container mx-auto px-4 py-6 pt-28">
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 bg-white dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 border border-gray-300 dark:border-zinc-700 hover:border-gray-400 dark:hover:border-zinc-600 shadow-sm hover:shadow-md"
                    >
                        <span className="material-symbols-rounded text-lg">
                            arrow_back
                        </span>
                        <span>Back to Portfolio</span>
                    </button>

                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                    >
                        <span className="material-symbols-rounded text-lg">
                            download
                        </span>
                        <span>Download Resume</span>
                    </button>
                </div>

                {/* Resume Title */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                        My Resume
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-zinc-400">
                        View and download my professional resume
                    </p>
                </div>

                {/* PDF Viewer Container */}
                <div
                    className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700"
                    style={{
                        aspectRatio: "8.5 / 11", // US Letter format aspect ratio
                        maxHeight: "85vh", // Prevent it from being too tall
                        minHeight: "600px", // Ensure minimum readable size
                    }}
                >
                    {/* PDF Embed */}
                    <div className="relative w-full h-full">
                        <iframe
                            src="/resume/kindrat_mariya_resume.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=FitV&view=FitV"
                            className="w-full h-full"
                            title="Resume PDF"
                            style={{
                                border: "none",
                                borderRadius: "inherit",
                            }}
                        />

                        {/* Fallback message for browsers that don't support PDF viewing */}
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-zinc-800 text-gray-600 dark:text-zinc-400"
                            style={{
                                display: "none", // Will be shown by CSS if iframe fails
                            }}
                            id="pdf-fallback"
                        >
                            <span className="material-symbols-rounded text-6xl mb-4 text-indigo-600 dark:text-indigo-400">
                                description
                            </span>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-zinc-100">
                                PDF Preview Not Available
                            </h3>
                            <p className="mb-6 max-w-md">
                                Your browser doesn't support PDF preview. Please
                                download the resume to view it.
                            </p>
                            <button
                                onClick={handleDownload}
                                className="flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                            >
                                <span className="material-symbols-rounded text-lg">
                                    download
                                </span>
                                <span>Download Resume</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Download Section */}
                <div className="text-center mt-8">
                    <p className="text-sm mb-4 text-gray-500 dark:text-zinc-500">
                        Having trouble viewing the PDF? Click the download
                        button above to save it to your device.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
