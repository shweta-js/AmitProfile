import React from "react";
import "./Home.css";
import DevSVG from "../assets/home.svg"; 

export default function Home() {
  return (
    <section className="home-section">
       <div className="home-image">
        <img src={DevSVG} alt="Developer Illustration" />
      </div>
      <div className="home-text">
        <h1>
          Hi, I'm <h1 className="my-name">Shweta Sure</h1> <span className="wave">👋</span>
        </h1>
        <hr></hr>
        <h2>Full Stack Web Developer</h2>
        <p>
          Welcome to my personal portfolio. I build clean, modern, and responsive
          web applications using the <strong>MERN stack</strong>.
        </p>
        <a href="#contact" className="contact-button">
  Contact Me
</a>
      </div>
     
    </section>
  );
}
