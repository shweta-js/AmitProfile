import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ExperienceDetail.css";
import Navbar from "../components/Navbar";

const fullExperienceData = [
  {
    title: "Sr Data Analyst",
    company: "Tiger Analytics",
    duration: "03/2022 - 11/2023",
    description: [
      "Worked as a Sr Data analyst for one of the largest credit bureaus in the USA - Experian",
      "Collaborated with US banks and financial institutions to recommend fraud models and scores tailored to their specific use cases.",
      "Directly interacted with clients to gather requirements and partnered with internal teams to deliver results.",
      "Validated model-produced scores using appropriate metrics and reported on their performance.",
      "Automated numerous tasks, reducing processing time from days to minutes, increasing team productivity and decreasing turnaround time by 96x.",
      "Developed a Tableau project to showcase ROI, performance, and cost-benefit simulations of fraud scores."
    ]
  },
  {
    title: "AI Software Engineer",
    company: "Saigeware Technologies Pvt Ltd",
    duration: "11/2020 - 01/2022",
    description: [
      "End-to-end ML/DL model development, validating, deploying, monitoring, and improving performance.",
      "Built algorithms to improve performance, quality, data management, and accuracy.",
      "Optimized models for mobile devices and AI edge inference solutions.",
      "Guided interns and advised the team on best ML/software practices."
    ]
  },
  {
    title: "Deep Learning Engineer - Intern",
    company: "Aidetic Software Pvt Ltd",
    duration: "01/2020 - 06/2020",
    description: [
      "Developed & improved DL techniques for real-time computer vision applications.",
      "Worked on NLP tasks: Topic Modelling, Neural Translation, Similarity, QA, Summarization.",
      "Designed scalable deep learning models according to requirements and runtime constraints."
    ]
  }
];

export default function ExperienceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const exp = fullExperienceData[Number(id)];

  if (!exp) return <p>Experience not found</p>;

  return (
    <>
    <Navbar />
    <div className="experience-detail">
     <h2 className="exp-detail-title">Experience</h2>

      <h2>{exp.title}</h2>
      <h3>{exp.company}</h3>
      <p className="duration">{exp.duration}</p>
      <ul>
        {exp.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

    </div></>
  );
}
