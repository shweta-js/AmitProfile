function Projects() {
    const allProjects = [
      {
        title: "Blog Platform",
        description: "A full-stack blog site using React, Node.js, and MongoDB with admin panel, markdown support, and user auth.",
        github: "https://github.com/yourusername/blog-platform",
        demo: "https://yourblogapp.vercel.app"
      },
      {
        title: "Weather Forecast App",
        description: "A React-based frontend that fetches weather data from OpenWeatherMap API. Fully responsive and styled with Tailwind.",
        github: "https://github.com/yourusername/weather-app",
        demo: "https://weather-forecast.vercel.app"
      },
      {
        title: "Social Media App",
        description: "A MERN-based social media platform with real-time posts, likes, comments, and user authentication.",
        github: "https://github.com/yourusername/social-media-app",
        demo: "https://socialhub.vercel.app"
      },
      {
        title: "E-commerce Website",
        description: "Full-featured e-commerce site built with React, Redux, and Node.js. Includes cart, checkout, and payment integration.",
        github: "https://github.com/yourusername/ecommerce-site",
        demo: "https://shwetastore.vercel.app"
      },
      {
        title: "Portfolio (This Website)",
        description: "This personal portfolio built using the MERN stack with routing, custom styling, and responsiveness.",
        github: "https://github.com/yourusername/personal-portfolio",
        demo: "/"
      }
    ];
  
    return (
      <section className="container">
        <h1>Projects</h1>
        <div className="project-list">
          {allProjects.map((project, index) => (
            <div className="project-entry" key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                {project.demo !== "/" && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  