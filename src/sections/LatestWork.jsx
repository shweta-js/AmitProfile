function LatestWork() {
    const featuredProjects = [
      {
        title: "Personal Portfolio Website",
        description: "A fully responsive MERN-based portfolio built with React, Node.js, and Express. Features project showcase, contact form, and dynamic routing.",
        image: "https://via.placeholder.com/500x250?text=Portfolio+Website",
        link: "https://github.com/yourusername/personal-portfolio"
      },
      {
        title: "Task Manager App",
        description: "A task management web app built with React and Express.js. Includes user authentication, CRUD operations, and MongoDB backend.",
        image: "https://via.placeholder.com/500x250?text=Task+Manager+App",
        link: "https://github.com/yourusername/task-manager"
      }
    ];
  
    return (
      <section className="container">
        <h1>Latest Work</h1>
        <div className="latest-grid">
          {featuredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default LatestWork;
  