import React from "react";
import "./Skills.css";

export default function Skillset() {
  return (
    <section className="skillset-section">
      <div className="skillset-content">
        <h1 className="title">My skillset</h1>
        <p className="subtitle">
          I’m <span className="highlight">a Data Science and AI Engineer</span>
        </p>
        <p className="description">
          Experienced in designing and deploying end‑to‑end machine learning and deep learning solutions. 
          Skilled in data preprocessing, feature engineering, and building predictive models using Python, 
          TensorFlow, and PyTorch. Proficient with SQL/NoSQL databases, cloud platforms,
           and creating insightful dashboards with tools like Tableau and Power BI. 
           Passionate about turning complex datasets into actionable insights and impactful business outcomes.
        </p>
        <a className="download-btn" href="/amit-sure-resume.pdf" download="amit-sure-resume.pdf" target="_blank" type="application/octet-stream">
  Download Resume <span className="arrow">↓</span>
</a>
      </div>

      <div className="skills-bubbles">
        <div className="bubble Python">Python</div>
        <div className="bubble DS">Data Science</div>
        <div className="bubble ML">Machine Learning</div>
        <div className="bubble DL">Deep Learning</div>
        <div className="bubble NLP">NLP</div>
        <div className="bubble CV">Computer vision</div>
        <div className="bubble Flask">Agentic AI</div>
        <div className="bubble Cloud">Cloud</div>
        <div className="bubble BD">LLMs</div>
        <div className="bubble Git">Git</div>
      </div>
    </section>
  );
}
