import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card card-0">
          <h3>Instagram post generator</h3>
          <p><ul>
  <li>
    Built an Instagram post generator that generates a post given a topic,
    leveraging large language models (LLM - Mixtral-8x7B-Instruct) via Together AI
    to create engaging captions and relevant hashtags for any topic.
  </li>
  <li>
    Integrated agentic AI workflows using LangChain, enabling multi-step,
    tool-based automation for content creation (summarization, hashtag generation,
    and image synthesis).
  </li>
</ul>
</p>
                        {/* <a href="#">View Project</a> */}
        </div>
        <div className="project-card card-1">
          <h3>MLOps</h3>
          <p>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
  <li>Used MobileNetV2 for transfer learning and created the classifier for numbers</li>
  <li>Deployed an image classifier model using Docker and FastAPI</li>
  <li>Provided a GUI for users to interact with the classification API</li>
</ul>

          </p>
            {/* <a href="#">View Project</a> */}
        </div>
        <div className="project-card card-2">
          <h3>OCR - Date Extractor</h3>
          <p><ul>
            <li>Extracted date from bills
</li>
            <li>Pre-processed image (skew correction, thresholding)
</li>
            <li>Used tesseract OCR to get the text, do a regex search for date patterns 
</li>
            </ul></p>
            {/* <a href="#">View Project</a> */}
        </div>
        {/* <div className="project-card card-3">
          <h3>Chat App</h3>
          <p>Real-time chat app using Socket.IO and Node.js with authentication and themes.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project-card card-4">
          <h3>Weather Dashboard</h3>
          <p>Weather forecast UI using public APIs and React hooks.</p>
          <a href="#">View Project</a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;