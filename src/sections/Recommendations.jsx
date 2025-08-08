import React, { useState, useEffect } from "react";
import "./Recommendations.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

export default function Recommendations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="recommendations-section">
      <h2 className="recommendations-title">Recommendations</h2>

      <div className="recommendations-slider">
        <button className="arrow-btn left" onClick={prevSlide}>
          <FaArrowLeft />
        </button>

        <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((t, index) => (
            <div className="recommendation-card" key={index}>
              <div className="recommendation-inner">
                <p className="recommendation-text">
                  "{t.text.length > 200 ? t.text.substring(0, 200) + "..." : t.text}"
                </p>
                <h4 className="recommendation-name">{t.name}</h4>
                <p className="recommendation-role">{t.role}</p>
                {t.text.length > 200 && (
                  <button
                    className="read-more-btn"
                    onClick={() => navigate(`/recommendation/${index}`)}
                  >
                    Read More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <button className="arrow-btn right" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>

      <div className="slider-dots">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
}
