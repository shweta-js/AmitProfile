import React from "react";
import "./Experience.css";
import { useNavigate } from "react-router-dom";

const experienceData = [
  {
    id: "03",
    year: "2022 - 2023",
    role: "Sr Data Analyst",
    duration: "03/2022 - 11/2023",
    company: "Tiger Analytics",
    details:
      "Worked with Experian and US financial institutions on fraud model validation, automation, and Tableau dashboards for ROI and cost-benefit analysis.",
    fullId: 0
  },
  {
    id: "02",
    year: "2020 - 2022",
    role: "AI Software Engineer",
    duration: "11/2020 - 01/2022",
    company: "Saigeware Technologies Pvt Ltd",
    details:
      "Built and deployed ML/DL models for Cardiac & Pulmonary domains, optimized for mobile and edge devices, and mentored interns.",
    fullId: 1
  },
  {
    id: "01",
    year: "2020",
    role: "Deep Learning Engineer - Intern",
    duration: "01/2020 - 06/2020",
    company: "Aidetic Software Pvt Ltd",
    details:
      "Developed deep learning models for computer vision and NLP tasks like topic modelling, translation, and summarization.",
    fullId: 2
  }
];

export default function Experience() {
  const navigate = useNavigate();

  return (
    <section className="exp-timeline-section">
      <h2 className="exp-title">Experience</h2>
      <div className="exp-timeline">
        {/* Beyond Work clickable card */}
        <div
          className="exp-item beyond-work-link"
          role="button"
          
          style={{ cursor: "pointer" }}
        >
          <div className="exp-left">
            <div className="exp-circle">BW</div>
            <span className="exp-year">Beyond</span>
          </div>
          <div className="exp-right">
            <h3>Beyond Work</h3>
            <p>
              Traveling, volunteering, speaking, and unique life
              experiences outside of my technical career.
            </p>
            <button
                className="read-more-btn"
                onClick={() => navigate("/beyond_work")}
              >
                Read More
              </button>
          </div>
        </div>

        {/* Timeline items */}
        {experienceData.map((exp) => (
          <div className="exp-item" key={exp.id}>
            <div className="exp-left">
              <div className="exp-circle">{exp.id}</div>
              <span className="exp-year">{exp.year}</span>
            </div>
            <div className="exp-right">
              <h3>
                {exp.role}{" "}
                <span className="exp-duration">({exp.duration})</span>
              </h3>
              <h4>{exp.company}</h4>
              <p>{exp.details}</p>
              <button
                className="read-more-btn"
                onClick={() => navigate(`/experience/${exp.fullId}`)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
