import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RecommendationDetail.css";
import Navbar from "../components/Navbar"; // Assuming you have a Navbar components


const testimonials = [
  {
    name: "Seth Kressin",
    role: "Data Scientist - Analytics Manager | Experian North America",
    text: `I have had the pleasure of working with and managing Amit for the last ~18 months within
    Experian’s Fraud Analytics business unit. Our work has revolved around modeling fraud and credit risk
    across the North American financial industry, with many of our clients being the largest financial
    institutions in the world, and with a responsibility of over $150+ million dollars of annual revenue. Amit
    has been instrumental in the continued support of our business as well as the pursuit of new business. In
    his role Amit has excelled in his ability to quickly grasp very complicated analytical problems, learn new
    analytics languages, and deliver best in class analysis and results. Amit has shown great skill in using
    Python, SQL, SAS, and Bash/Linux syntax, he has experience using both standard industry models such as
    logistic regression, as well as more advanced machine learning capabilities such as extreme gradient
    boosting and random forest models. He has worked on both individual client projects, as well as generic
    cross industry solutions. Amit’s experience extends all the way from data delivery, ingestion,
    validation/cleaning, to implementation and delivery of solutions.
    Perhaps even more than his technical capabilities, Amit has been wonderful to work with. He is
    self-motivated and can work independently, he thinks through problems and can make critical decisions
    without direction. He is a true team player, and has a good foundational base as a person, which allows
    him to be an effective professional. I give my whole hearted recommendation to anyone considering
    Amit’s abilities now or in the future.`
  },
  {
    name: "Sahil Shah",
    role: "Senior Analyst - Data Science @Tiger Analytics",
    text: `I wholeheartedly endorse Amit, for his exceptional contributions to our team. At the time I joined the
    project, his profound understanding of the domain and technical intricacies, coupled with his proactive
    assistance to others, played a pivotal role in our collective success. Amit is not only a valuable team
    member but also a collaborative and supportive professional. It has been a pleasure working alongside
    him, and I am confident that his skills and dedication will make a significant impact in any future project
    or role.`
  },
  {
    name: "Rishabh Saxena",
    role: "Tiger Analytics | IIT Madras",
    text: `I am delighted to provide recommendation for Amit with whom I am working on the data science project.
    He is highly cooperative and responsive.

    Amit has a wide range of technical skills that include Python, SAS, Linux, and more. As a Python expert, he
    possesses a deep understanding of the language and its applications to data manipulation, analysis, and
    machine learning. Additionally, his proficiency in SAS and Linux has proven invaluable in delivering credit
    and fraud risk related projects. He excels at guiding and automating tasks to optimize efficiency and
    productivity.

    One of the most impressive traits of Amit is his unwavering commitment to delivering top-notch results.
    Plus, he is a keen listener and takes everyone’s recommendations seriously. In addition to setting a high
    standard of excellence, he motivates others to do the same. In conclusion, I wholeheartedly recommend
    Amit for his technical acumen in Python, SAS, Linux, and data science combined with their guidance in
    task automation and project management, making him an exceptional colleague and mentor with a
    positive attitude.`
  }
];

export default function RecommendationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recommendation = testimonials[parseInt(id)];

  if (!recommendation) {
    return <p>Recommendation not found.</p>;
  }

  return (
    <>
    <Navbar/>
    <div className="recommendation-detail-container">
      <h2 className="recommendations-detail-title">Recommendations</h2>
      <h2 className="recommendation-detail-name">{recommendation.name}</h2>
      <h3 className="recommendation-detail-role">{recommendation.role}</h3>
      <p className="recommendation-detail-text">{recommendation.text}</p>
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

    </div></>
  );
}

