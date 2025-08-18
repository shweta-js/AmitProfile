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
    description: `
Contributed to the Data Science team, streamlining operations and improving decision-making for the Sadhanapada application process, including dashboard and visualization design.  

Volunteered at the Isha Yoga Center, driven by Sadhguru's vision, particularly his initiatives promoting ecological harmony and a profound reconnection with nature like Cauvery Calling and Save Soil. My time involved living amidst the natural surroundings at the foothills of the Velliangiri Mountains, allowing for a deep engagement with the elements of nature.  

Selected for the Sadhanapada program, a selective global initiative (1,200 chosen out of 30,000 applicants) — a 7-month residential program for inner transformation designed to establish balance, clarity, and emotional stability.  

Cultivated inner stability and enhanced capabilities to manage work efficiently and calmly, fostering mental clarity that drives success in both personal and professional pursuits.  

Gained diverse practical experience through activities like cooking, farming, and promoting yoga, offering my skills and giving back to society through Sadhguru's vision.
    `,
    image: AmitImage
  },
  
  {
    id: "1",
    title: "Maha Kumbh Mela Experience",
    duration: "Jan 2025 – Mar 2025",
    description:`This personal initiative allowed for deep exploration of its unique energy, logistical complexities, and vibrant cultural tapestry.
Gained unparalleled exposure to large-scale temporary city management, complex logistical coordination, and diverse community engagement by living on-site and actively participating in daily life, including engaging with various akhadas and daily rituals of bathing in the sangam
Cultivated enhanced adaptability, resilience, mindfulness, and cross-cultural communication skills within a dynamic and challenging environment.
`,
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
