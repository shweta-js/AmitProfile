// App.jsx
import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Recommendations from "./sections/Recommendations";
import Contact from "./sections/Contact";
import BeyondWork from "./sections/BeyondWork";
import BeyondWorkDetail from "./sections/BeyondWorkDetail"; // make sure you have this
import ExperienceDetail from "./sections/ExperienceDetail";
import RecommendationDetail from "./sections/RecommendationDetail";

// Layout that handles scrolling to section based on hash
function ScrollLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const target = document.getElementById(targetId);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // wait for DOM to render
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="recommendation">
          <Recommendations />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage with sections */}
        <Route path="/" element={<ScrollLayout />} />

        {/* Beyond Work list */}
        <Route path="/beyond_work" element={<BeyondWork />} />

        {/* Beyond Work detail */}
        <Route path="/beyond_work/:id" element={<BeyondWorkDetail />} />
         <Route path="/experience" element={<Experience />} />

        {/* Beyond Work detail */}
        <Route path="/experience/:id" element={<ExperienceDetail />} />
      <Route path="/recommendation" element={<Recommendations />} />

        {/* Beyond Work detail */}
        <Route path="/recommendation/:id" element={<RecommendationDetail />} />
      
      </Routes>
    </Router>
  );
}
