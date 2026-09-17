import { useEffect, useState } from "react";

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React"],
  Tools: ["Git", "GitHub", "VS Code"],
  Backend: ["Currently Learning"],
};

const projects = [
  {
    title: "Weather App",
    description:
      "A responsive weather application that lets users search for a city and view current weather information using a weather API.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
  }

];

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="logo" href="#home" onClick={closeMenu}>
          &lt;Akriti/&gt;
        </a>

        <button
          className="menu-button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact Me</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy reveal">
        <p className="eyebrow">BSc CSIT Graduate • Open to Internships</p>
        <h1>
          Hi, I'm <span>Akriti</span>
          <br />
          Negi
        </h1>
        <h2>
          Aspiring <strong>Frontend Developer</strong>
        </h2>
        <p className="tagline">"Your vision, my code."</p>
        <a className="work-link" href="#projects">
          View My Work <span>→</span>
        </a>
      </div>

      <div className="hero-photo reveal">
        <div className="photo-back"></div>
        <img
          src="/akriti-profile.jpg"
          alt="Portrait of Akriti Negi"
        />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section narrow reveal">
      <p className="section-number">01 / ABOUT</p>
      <h2 className="section-title">About Me</h2>
      <p className="section-text">
        I'm a recently graduated BSc CSIT student and aspiring frontend developer
        passionate about creating clean, responsive and user-friendly websites.
        I enjoy turning ideas and designs into functional web experiences while
        continuously learning and improving my development skills.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section reveal">
      <p className="section-number">02 / SKILLS</p>
      <h2 className="section-title">My Skills</h2>

      <div className="skills-grid">
        {Object.entries(skills).map(([group, items]) => (
          <article className="skill-card" key={group}>
            <h3>{group}</h3>
            <div className="skill-list">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section narrow reveal">
      <p className="section-number">03 / EXPERIENCE</p>
      <h2 className="section-title">Experience</h2>

      <article className="experience-card">
        <div>
          <p className="date">29 January 2026 – 27 April 2026</p>
          <h3>Frontend Development Intern</h3>
          <p className="company">Clouds Nepal Web Pvt. Ltd.</p>
        </div>
        <p className="section-text">
          Gained practical experience in frontend development, responsive web
          interfaces and real-world development workflows while working with
          modern frontend technologies.
        </p>
      </article>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section reveal">
      <p className="section-number">04 / PROJECTS</p>
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <span className="project-index">0{index + 1}</span>
              <span className="project-arrow">↗</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/akritiinegii/Weather_app"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>              </div>

          </article>
        ))}
      </div>

    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section narrow reveal">
      <p className="section-number">05 / EDUCATION</p>
      <h2 className="section-title">Education</h2>

      <div className="education-list">
        <article className="education-item">
          <span>01</span>
          <div>
            <h3>BSc CSIT</h3>
            <p>Far Western University</p>
            <p>Mahendranagar, Kanchanpur • Recently Graduated</p>
          </div>
        </article>

        <article className="education-item">
          <span>02</span>
          <div>
            <h3>Advanced Diploma in Information Technology</h3>
            <p>ADIT</p>
            <p>Web Development,Microsoft Office, Email and Internet</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="section contact-section reveal">
      <div className="contact-copy">
        <p className="section-number">06 / CONTACT</p>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-text">
          I'm currently looking for frontend development opportunities
          where I can learn, contribute and grow as a developer.
        </p>

        <div className="contact-details">
          <a href="mailto:negiakriti75@gmail.com">
            <span>Email</span>
            negiakriti75@gmail.com
          </a>
          <a href="https://github.com/akritiinegii" target="_blank" rel="noreferrer">
            <span>GitHub</span>
            github.com/akritiinegii
          </a>
        </div>
      </div>

      
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="logo" href="#home">&lt;Akriti/&gt;</a>
       
      </div>

     
      
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
