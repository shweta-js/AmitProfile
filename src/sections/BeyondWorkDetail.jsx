// BeyondWorkDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BeyondWorkDetail.css";
import AmitImage from "../assets/volunteering.jpg";
import KumbhImage from "../assets/kumbh.jpg";
import MantissaImage from "../assets/mantissa.jpg";
import Navbar from "../components/Navbar";

const beyondWorkDetails = [
  {
    id: "0",
    title: "Isha Foundation – Volunteer & Sadhanapada Participant",
    duration: "Nov 2023 – Dec 2024",
    description:
      "Volunteered at Isha Yoga Center, contributed to operations and dashboards for program applications, and completed the 7-month Sadhanapada program.",
    image: AmitImage
  },
  {
    id: "1",
    title: "Maha Kumbh Mela Experience",
    duration: "Jan 2025 – Mar 2025",
    description:
      "Gained exposure to large-scale event logistics, adaptability, and cultural richness while living onsite during the world's largest gathering.",
    image: KumbhImage
  },
  {
    id: "2",
    title: "Volunteer & Speaker – Mantissa Data Science",
    duration: "Ongoing",
    description:
      "Helping the community in Data Science & Deep Learning through talks, workshops, and mentorship.",
    image: MantissaImage
  }
];

export default function BeyondWorkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const detail = beyondWorkDetails[Number(id)];

  if (!detail) return <p>Experience not found.</p>;

  return (
    <>
      <Navbar />
      <div className="beyond-detail-container">
        <h2 className="detail-heading">{detail.title}</h2>
        <img src={detail.image} alt={detail.title} className="detail-image" />
        <p className="detail-duration">{detail.duration}</p>
        <p className="detail-description">{detail.description}</p>
        
        {/* ✅ Always go back to /beyond_work (hash navigation friendly) */}
        <button 
          className="back-btn" 
          onClick={() => navigate("/beyond_work")}
        >
          ← Back
        </button>
      </div>
    </>
  );
}
