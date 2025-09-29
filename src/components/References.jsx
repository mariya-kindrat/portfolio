import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import Header from "./Header";

const References = () => {
    const navigate = useNavigate();
    const { isDark } = useTheme();
    const [selectedReference, setSelectedReference] = useState(null);
    const [pdfLoadError, setPdfLoadError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showFallback, setShowFallback] = useState(false);

    const references = [
        {
            id: 1,
            filename: "kindrat_mariya_resume_professional_reference.pdf",
            displayName: "Professional Reference",
            description: "Professional reference letter from supervisor",
            company: "Previous Company",
            position: "Professional Reference",
            date: "2025",
        },
        {
            id: 2,
            filename: "kindrat_mariya_resume_reference.pdf",
            displayName: "Reference Letter",
            description: "Reference letter from colleague",
            company: "Previous Company",
            position: "Reference",
            date: "2025",
        },
        {
            id: 3,
            filename: "kindrat_mariya_resume_referal.pdf",
            displayName: "Referral Letter",
            description: "Professional referral letter",
            company: "Previous Company",
            position: "Referral",
            date: "2025",
        },
    ];

    const handleDownload = (filename, displayName) => {
        const link = document.createElement("a");
        link.href = `/resume/${filename}`;
        link.download =
            displayName.replace(/[^a-z0-9]/gi, "_").toLowerCase() + ".pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePreview = (reference) => {
        setSelectedReference(reference);
        setPdfLoadError(false);
        setIsLoading(true);
        setShowFallback(false);
    };

    useEffect(() => {
        if (selectedReference) {
            setPdfLoadError(false);
            setIsLoading(true);
            setShowFallback(false);

            // Backup timer - only stop loading after 10 seconds, don't show fallback unless there's an error
            const timer = setTimeout(() => {
                setIsLoading(false);
                // Only show fallback if there was actually an error, not just slow loading
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [selectedReference]);

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

                    {selectedReference && (
                        <button
                            onClick={() =>
                                handleDownload(
                                    selectedReference.filename,
                                    selectedReference.displayName
                                )
                            }
                            className="flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                        >
                            <span className="material-symbols-rounded text-lg">
                                download
                            </span>
                            <span>Download Reference</span>
                        </button>
                    )}
                </div>

                {/* References Title */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Professional References
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-zinc-400">
                        View and download my professional reference letters
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* References List */}
                    <div className="lg:w-1/3">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-zinc-100">
                            Available References
                        </h2>
                        <div className="space-y-4">
                            {references.map((reference) => (
                                <div
                                    key={reference.id}
                                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                                        selectedReference?.id === reference.id
                                            ? "scale-105 bg-gray-100 dark:bg-zinc-700 border-indigo-500 shadow-lg"
                                            : "hover:scale-102 bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 hover:border-gray-400 dark:hover:border-zinc-600"
                                    }`}
                                    onClick={() => handlePreview(reference)}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-sm mb-1 text-gray-900 dark:text-zinc-100">
                                                {reference.displayName}
                                            </h3>
                                            <p className="text-xs mb-2 text-gray-600 dark:text-zinc-400">
                                                {reference.company} •{" "}
                                                {reference.date}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-zinc-500">
                                                {reference.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-2 ml-4">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDownload(
                                                        reference.filename,
                                                        reference.displayName
                                                    );
                                                }}
                                                className="p-2 rounded-lg transition-all duration-300 hover:scale-110 bg-indigo-600 text-white hover:bg-indigo-500"
                                                title="Download"
                                            >
                                                <span className="material-symbols-rounded text-sm">
                                                    download
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PDF Viewer */}
                    <div className="lg:w-2/3">
                        {selectedReference ? (
                            <div
                                className="w-full rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700"
                                style={{
                                    aspectRatio: "8.5 / 11",
                                    maxHeight: "85vh",
                                    minHeight: "600px",
                                }}
                            >
                                <div className="relative w-full h-full">
                                    {/* Loading indicator */}
                                    {isLoading && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-zinc-800">
                                            <div className="text-center">
                                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 dark:border-indigo-400 mx-auto mb-4"></div>
                                                <p className="text-gray-600 dark:text-zinc-400">
                                                    Loading PDF...
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* PDF Viewer */}
                                    <iframe
                                        src={`/resume/${selectedReference.filename}#toolbar=1&navpanes=0&scrollbar=0&zoom=FitV&view=FitV`}
                                        className="w-full h-full"
                                        title={`Reference PDF - ${selectedReference.displayName}`}
                                        style={{
                                            border: "none",
                                            borderRadius: "inherit",
                                        }}
                                        onLoad={() => {
                                            setIsLoading(false);
                                            setShowFallback(false);
                                            setPdfLoadError(false);
                                        }}
                                        onError={() => {
                                            setIsLoading(false);
                                            setShowFallback(true);
                                            setPdfLoadError(true);
                                        }}
                                    />

                                    {/* Fallback message */}
                                    {showFallback && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-zinc-800 text-gray-600 dark:text-zinc-400">
                                            <span className="material-symbols-rounded text-6xl mb-4 text-indigo-600 dark:text-indigo-400">
                                                description
                                            </span>
                                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-zinc-100">
                                                PDF Preview Not Available
                                            </h3>
                                            <p className="mb-6 max-w-md">
                                                Your browser doesn't support PDF
                                                preview. Please download the
                                                reference to view it.
                                            </p>
                                            <button
                                                onClick={() =>
                                                    handleDownload(
                                                        selectedReference.filename,
                                                        selectedReference.displayName
                                                    )
                                                }
                                                className="flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                                            >
                                                <span className="material-symbols-rounded text-lg">
                                                    download
                                                </span>
                                                <span>Download Reference</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div
                                className="w-full h-full flex items-center justify-center bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-2xl"
                                style={{
                                    aspectRatio: "8.5 / 11",
                                    maxHeight: "85vh",
                                    minHeight: "600px",
                                }}
                            >
                                <div className="text-center p-8">
                                    <span className="material-symbols-rounded text-6xl mb-4 text-gray-400 dark:text-zinc-600">
                                        description
                                    </span>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-zinc-300">
                                        Select a Reference
                                    </h3>
                                    <p className="text-gray-500 dark:text-zinc-500 max-w-md">
                                        Choose a reference letter from the list
                                        on the left to preview it here.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default References;
