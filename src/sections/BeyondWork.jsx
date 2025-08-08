import React from "react";
import { useNavigate } from "react-router-dom";
import "./BeyondWork.css";
import AmitImage from "../assets/volunteering.jpg";
import KumbhImage from "../assets/kumbh.jpg";
import MantissaImage from "../assets/mantissa.jpg";
import Navbar from "../components/Navbar"; // Assuming you have a Navbar components

const beyondWorkData = [
  {
    title: "Isha Foundation – Volunteer & Sadhanapada Participant",
    duration: "Nov 2023 – Dec 2024",
    description:
      "Volunteered at Isha Yoga Center, contributed to operations and dashboards for program applications, and completed the 7-month Sadhanapada program.",
    image: AmitImage,
    fullId: 0
  },
  {
    title: "Maha Kumbh Mela Experience",
    duration: "Jan 2025 – Mar 2025",
    description:
      "Gained exposure to large-scale event logistics, adaptability, and cultural richness while living onsite during the world's largest gathering.",
    image: KumbhImage,
    fullId: 1
  },
  {
    title: "Volunteer & Speaker – Mantissa Data Science",
    duration: "Ongoing",
    description:
      "Helping the community in Data Science & Deep Learning through talks, workshops, and mentorship.",
    image: MantissaImage,
    fullId: 2
  }
];

export default function BeyondWork() {
  const navigate = useNavigate();

  return (
     <>
    <Navbar /> {/* ✅ Navbar is now here */}

    <section className="beyond-work-section">
      <h2 className="beyond-work-title">Beyond Work</h2>
      <div className="beyond-work-grid">
        {beyondWorkData.map((item, index) => (
          <div
            key={index}
            className={`beyond-work-card ${index % 2 === 0 ? "tall" : "short"}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="beyond-work-overlay">
              <h3>{item.title}</h3>
              <span className="beyond-work-duration">{item.duration}</span>
              <p>{item.description}</p>
              <button
                onClick={() => navigate(`/beyond_work/${item.fullId}`)}
                className="beyond-work-btn"
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
