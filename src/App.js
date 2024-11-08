import React from 'react';

const App = () => {
  return (
    <div>
      <header>
        <h1>Aishik Tokdar</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#tech-stack">Tech Stack</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am currently pursuing a degree in Electronics and Communication Engineering, where I explore ECE concepts while also expanding my knowledge of various programming techniques. My passion lies in solving complex engineering challenges through innovative technology solutions, with a focus on signal processing, automation, and predictive modeling. Additionally, I have a strong interest in computer science concepts like Artificial Intelligence and Machine Learning, as well as Full Stack Development.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Audio Signal Filtering and Processing Project</h3>
          <p>
            The Audio Signal Processing and Filtering project demonstrates the implementation and effects of a range of filters, including low-pass, high-pass, band-pass, band-stop, peak, and notch filters, on various audio signals. It includes MATLAB scripts for adding noise to audio files, as well as a script for generating custom audio signals. This project allowed me to explore and understand the practical applications of digital signal processing in audio technology.
          </p>
        </div>
        {/* Add more projects as needed */}
      </section>

      <section id="tech-stack">
        <h2>Tech Stack & Skills</h2>
        <p>I'm proficient in the following technologies and languages:</p>
        <ul>
          <li>Programming Languages: C, C++, MATLAB</li>
          <li>Web Development: HTML, CSS</li>
          <li>Full Stack Development: MERN (MongoDB, Express, React, Node.js), MEAN (MongoDB, Express, Angular, Node.js)</li>
          <li>Embedded Systems: ESP32, Arduino</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out!</p>
        <ul className="contact-info">
          <li>Email: <a href="mailto:aishiktokdar@gmail.com">aishikotdar@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/aishikotdar/" target="_blank" rel="noopener noreferrer">linkedin.com/in/aishikotdar</a></li>
          <li>Phone: +91-8145111682, +91-8293355404</li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2024 Aishik Tokdar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
