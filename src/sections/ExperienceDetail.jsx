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
      "interacted with clients to gather requirements and partnered with internal teams to deliver results.",
      "Validated model-produced scores using appropriate metrics and reported on their performance.",
      "Automated numerous tasks, reducing processing time from days to minutes, increasing team productivity and decreasing turnaround time by 96x.",
      "Developed a Tableau project to showcase ROI, performance, and cost-benefit simulations of fraud scores.",
      "Designing lean Proof of Concepts (POC) to answer targeted business questions",
    ]
  },

  {
    title: "AI Software Engineer",
    company: "Saigeware Technologies Pvt Ltd",
    duration: "11/2020 - 01/2022",
    description: [
      "MLOps : end to end ML and DL model development, validating, deploying using AWS EC2 using docker and flask, monitoring, and improving the model performance in the field of Cardiac & Pulmonary",
      "Developed and evaluated algorithms using Python, machine learning, and statistical modeling with libraries like Scikit-learn, Numpy, and Pandas.",
      "Building new models to extract more value from the customer data we collect, which will help us know more about users",
      "Understanding business objectives and developing models that help to achieve them, along with metrics to track their progress",
      "Delivering valuable insights via data analytics and advanced data-driven methods",
      "Formulating plans, prototypes, proposals and high-level design of new features",
      "Optimized models for mobile devices and AI edge inference solutions using TensorRT, NVDLA, and by quantizing DL models.",
      "Created visualizations of complex datasets using Matplotlib, Plotly, and seaborn to gather insights.",
      "Automating the tasks to save time and resources & conducting research",
      "Guided interns and advised the team on best practices for machine learning, software development, and tools like Keras, PyTorch, and TensorFlow."
  ]
  },
  {
    title: "Deep Learning Engineer - Intern",
    company: "Aidetic Software Pvt Ltd",
    duration: "01/2020 - 06/2020",
    description: [
     "Developed and improved deep learning techniques for real-time computer vision applications for object detection and classification using OpenCV and TensorFlow/Keras.",
     "Created custom CNN and ANN models from scratch as well did transfer learning using the existing SOTA models ",
     "Worked on NLP tasks, including topic modeling, neural translation, and summarization, utilizing libraries like Gensim, Spacy, and Hugging Face Transformers.",
     "Participated in Algorithm and Logic design for Image processing and output processing, implementation, debugging and improving existing techniques",
     "Created scalable deep learning models according to the requirements and runtime constraints",
     "Designed and wrote data handling pipelines using Python Multiprocessing",
     "Played a key role in data exploration, visualization, and cleaning using Numpy and Pandas.",
     "Wrote the scripts to automate the tasks, fine-tuned the model performance, tested the model to be used in production"
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
