
function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <a className="logo" href="#home">
          Pranitha.
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>
          <h1>Kusakula Pranitha</h1>
          <h2>Computer Science &amp; Engineering Graduate</h2>

          <p className="hero-text">
            I enjoy building practical applications, exploring new
            technologies, and turning ideas into useful digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects">View My Work</a>
            <a href="#contact">Let's Connect</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>
        <h2>A little about me</h2>

        <p>
          I'm a Computer Science and Engineering graduate with an interest in
          software development, backend development, data, and AI-based
          applications.
        </p>

        <p>
          I like learning by building projects and understanding how different
          technologies work together to solve practical problems.
        </p>

        <p>
          I'm currently looking for opportunities where I can improve my
          technical skills, contribute to real-world projects, and grow as a
          software professional.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="section-label">TECHNICAL SKILLS</p>
        <h2>What I work with</h2>

        <div className="skills-grid">
          <div>Python</div>
          <div>Java</div>
          <div>C</div>
          <div>HTML &amp; CSS</div>
          <div>SQL</div>
          <div>React</div>
          <div>Flask</div>
          <div>Git &amp; GitHub</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="section-label">PROJECTS</p>
        <h2>Things I've built</h2>

        <div className="projects-grid">
          <article className="project-card">
            <span>01</span>
            <h3>Accident Detection &amp; Alert System</h3>
            <p>
              A computer vision project designed to detect accidents from CCTV
              feeds and trigger alerts using a YOLO-based deep learning model.
            </p>
            <p className="tech">YOLOv8 · Python · Flask</p>
          </article>

          <article className="project-card">
            <span>02</span>
            <h3>Task Management API</h3>
            <p>
              A backend API for creating, updating, tracking, and managing
              tasks with information such as urgency, effort, status, and
              blockers.
            </p>
            <p className="tech">
              FastAPI · Python · SQLite · SQLAlchemy
            </p>
          </article>

          <article className="project-card">
            <span>03</span>
            <h3>Fake Social Media Account Detection</h3>
            <p>
              A project focused on identifying suspicious social media accounts
              using account characteristics and available data.
            </p>
            <p className="tech">
              Python · Machine Learning · Data Analysis
            </p>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <p className="section-label">CONTACT</p>
        <h2>Let's Connect</h2>

        <p>
          I'm open to opportunities, collaborations, and conversations about
          software development and technology.
        </p>

        <div className="contact-links">
          {/* Replace with your actual email */}
          <a href="mailto:YOUR_EMAIL">Email</a>

          {/* Replace with your actual LinkedIn profile */}
          <a
            href="https://www.linkedin.com/in/YOUR_PROFILE"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          {/* Replace with your actual GitHub profile */}
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          {/* Your Google Drive Resume */}
          <a
            href="https://drive.google.com/file/d/1vICnNXp_eLW9979_NAp1rFwDkN4rIcwl/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Kusakula Pranitha. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;