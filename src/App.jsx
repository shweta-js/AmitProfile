import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import LatestWork from "./sections/LatestWork";
import Contact from "./sections/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="latestwork"><LatestWork /></section>
        <section id="contact"><Contact /></section>
      </main>

    </>
  );
}

export default App;
