import React from "react";
import "./Home.css";
import AmitImage from "../assets/home.png"; // Replace with your image path
import { useParams, useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();
  
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="intro">
          <p className="hi">Hi, I am</p>
          <h1 className="name">Amit Sure <span className="ai-engg"> - AI Engineer</span></h1>
          <p className="small-text">3.5 years of experience in AI/ML, Deep Learning, and Data Analytics</p>

          <a
  className="contact-me"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
  href="#contact"
>
  Contact Me
</a>

        </div>
      </div>

      <div className="hero-right">
        <img src={AmitImage} alt="Amit" className="amit-photo" />
      </div>
    </section>
  );
}
