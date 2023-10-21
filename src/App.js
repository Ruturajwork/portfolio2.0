import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./components/SplashScreen";
import EducationScreen from "./screens/EducationScreen";
import Footer from "./components/footer/Footer";
import ExperienceScreen from "./screens/ExperianceScreen";
import ProjectScreen from "./screens/ProjectScreen";
import { motion, useScroll, useSpring } from "framer-motion";
import ContactMe from "./screens/ContactMe";
import ResumeScreen from "./screens/ResumeScreen";

function App() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., fetching data, initializing app state)
    // Replace setTimeout with your actual async operation
    setTimeout(() => {
      setLoading(false); // Set loading to false after the async operation is completed
    }, 3000); // Simulate a 2-second loading time
  }, []);

  if (loading) {
    // Show the splash screen while loading
    return <SplashScreen />;
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/home" element={<HomeScreen />} /> */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/education" element={<EducationScreen />} />
          <Route path="/experience" element={<ExperienceScreen />} />
          <Route path="/projects" element={<ProjectScreen />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/resume" element={<ResumeScreen />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
