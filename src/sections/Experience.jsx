function Experience() {
    const jobs = [
      {
        company: "Primesoft Solutions",
        role: "Associate Engineer",
        duration: "2023 – Present",
        description: "Worked on frontend/backend features, REST APIs, and code quality improvements in JavaScript and Python.",
      },
      {
        company: "Fart Magazine",
        role: "API Developer Intern",
        duration: "2022 – 2023",
        description: "Built and tested Node.js APIs with MongoDB integration for content management.",
      },
      {
        company: "Technologics",
        role: "Python & AI/ML Intern",
        duration: "2021 – 2022",
        description: "Developed ML models and automation scripts using Python and Scikit-learn.",
      },
    ];
  
    return (
      <section className="container">
        <h1>Experience</h1>
        <div className="timeline">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h2>{job.role}</h2>
              <h3>{job.company}</h3>
              <span>{job.duration}</span>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Experience;
  