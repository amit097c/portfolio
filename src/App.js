import logo from './logo.svg';
import './App.css';
import Header1 from "./components/Header1";
import AboutMe from "./components/AboutMe";
// import Projects from "./components/Details";
import Projects from "./pages/Projects";

import Footer from "./components/Footer";
import Achievements from "./pages/Achievements";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Define Routes for Navigation */}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/experience" element={<Experience/>} />
          {/* Additional routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
