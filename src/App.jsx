import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Resume from "./components/Resume";
import References from "./components/References";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/references" element={<References />} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;
