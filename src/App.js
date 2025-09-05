import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = ['about', 'projects', 'skills', 'contact'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Go Green 360",
      description: "A comprehensive waste management system with recycling tracking, leaderboard, and environmental awareness features. Built with MERN stack and real-time analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      github: "https://github.com/eshanmadu/Waste-management-system",
      live: "https://waste-management-system-git-main-eshan-madushankas-projects.vercel.app?_vercel_share=IfQIBmQOxeI7NGXO9sEr2pj3FhRXLDNJ",
      image: "🌱"
    },
    {
      title: "Airline Reservation System",
      description: "A comprehensive airline booking platform with flight search, seat selection, payment processing, and booking management. Features include real-time flight updates and user dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      github: "https://github.com/yourusername/airline-reservation",
      live: "https://airline-reservation.vercel.app",
      image: "✈️"
    }
  ];

  const skills = [
    // Data Analysis Skills
    { name: "Data Cleaning & Transformation", level: 90, category: "Data Analysis" },
    { name: "Data Visualization", level: 85, category: "Data Analysis" },
    { name: "Statistical Analysis", level: 80, category: "Data Analysis" },
    { name: "Predictive Modeling", level: 75, category: "Data Analysis" },
    { name: "ETL Processes", level: 80, category: "Data Analysis" },
    { name: "Database Management", level: 85, category: "Data Analysis" },
    
    // Business Analysis Skills
    { name: "Requirement Gathering", level: 90, category: "Business Analysis" },
    { name: "Business Process Modeling", level: 85, category: "Business Analysis" },
    { name: "Stakeholder Analysis", level: 80, category: "Business Analysis" },
    { name: "Gap Analysis", level: 85, category: "Business Analysis" },
    { name: "Agile & Scrum", level: 80, category: "Business Analysis" },
    { name: "Problem-Solving", level: 90, category: "Business Analysis" },
    
    // MERN Stack Development Skills
    { name: "React.js", level: 85, category: "MERN Stack" },
    { name: "Node.js", level: 80, category: "MERN Stack" },
    { name: "MongoDB", level: 85, category: "MERN Stack" },
    { name: "Express.js", level: 80, category: "MERN Stack" },
    { name: "RESTful APIs", level: 85, category: "MERN Stack" },
    { name: "JavaScript (ES6+)", level: 90, category: "MERN Stack" },
    { name: "Tailwind CSS", level: 85, category: "MERN Stack" },
    { name: "Git & GitHub", level: 90, category: "MERN Stack" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen font-sans relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 sm:p-6 bg-white/10 backdrop-blur-md shadow-lg fixed w-full z-50 nav-mobile nav-sm nav-md nav-lg nav-xl border-b border-white/20">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:to-purple-400 transition-all duration-300">
          Eshan Madushanka
        </h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-8">
          {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize hover:text-purple-400 transition-colors nav-indicator text-sm lg:text-base ${
                activeSection === section ? 'text-purple-400 active' : 'text-gray-300'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 sm:top-20 left-0 right-0 bg-gray-800/95 backdrop-blur-md z-40">
          <div className="flex flex-col space-y-2 sm:space-y-4 p-4 sm:p-6">
            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize text-left hover:text-purple-400 transition-colors py-2 px-4 text-sm sm:text-base ${
                  activeSection === section ? 'text-purple-400 bg-white/10 rounded' : 'text-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Home */}
      <section className="flex flex-col justify-center items-center text-center h-screen pt-16 sm:pt-20 section-mobile section-sm section-md section-lg section-xl" id="home">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 container-responsive">
          <div className="mb-6 sm:mb-8">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">👋</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Eshan</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8">
              IT Student | Data Analyst | Tech Explorer
            </p>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Passionate about creating innovative web solutions and exploring cutting-edge technologies
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mobile-stack">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base button-mobile button-sm button-md button-lg button-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary text-green-400 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base button-mobile button-sm button-md button-lg button-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 section-transition section-mobile section-sm section-md section-lg section-xl ${visibleSections.has('about') ? 'visible' : ''}`} id="about">
        <div className="max-w-6xl mx-auto container-responsive">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center grid-responsive">
            <div className="order-2 md:order-1">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              I am an enthusiastic Data Analyst and Business Analyst with a strong passion for transforming raw data into meaningful insights that drive smarter decisions. With a solid foundation in data visualization, statistical analysis, and problem-solving, I specialize in identifying trends, optimizing processes, and supporting businesses with data-driven strategies.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Alongside my analytical expertise, I am also a MERN Stack Developer, skilled in building modern, responsive, and user-friendly web applications. My development background allows me to bridge the gap between business requirements and technical solutions, making me versatile in both data-driven decision-making and product development.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I enjoy tackling real-world challenges, whether it's uncovering insights from complex datasets, streamlining workflows, or creating impactful digital solutions. My goal is to combine analytical thinking and technical creativity to deliver value, innovation, and measurable impact.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-xl hover-lift glass order-1 md:order-2 card-mobile card-sm card-md card-lg card-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Quick Facts</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm sm:text-base">Education:</span>
                  <span className="text-white text-sm sm:text-base">BSc (Hons) IT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm sm:text-base">Specialization:</span>
                  <span className="text-white text-sm sm:text-base">Information Systems</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm sm:text-base">Experience:</span>
                  <span className="text-white text-sm sm:text-base">2+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm sm:text-base">Projects:</span>
                  <span className="text-white text-sm sm:text-base">10+ Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-800/50 section-transition section-mobile section-sm section-md section-lg section-xl ${visibleSections.has('projects') ? 'visible' : ''}`} id="projects">
        <div className="max-w-6xl mx-auto container-responsive">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 grid-responsive">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-xl shadow-lg project-card hover-lift card-mobile card-sm card-md card-lg card-xl">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{project.image}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-200 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mobile-stack">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-600 hover:bg-gray-500 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors text-center text-sm sm:text-base button-mobile"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-600 hover:bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors text-center text-sm sm:text-base button-mobile"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 section-transition section-mobile section-sm section-md section-lg section-xl ${visibleSections.has('skills') ? 'visible' : ''}`} id="skills">
        <div className="max-w-6xl mx-auto container-responsive">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 grid-responsive">
            {['Data Analysis', 'Business Analysis', 'MERN Stack'].map((category) => (
              <div key={category} className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-xl hover-lift card-mobile card-sm card-md card-lg card-xl">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{category}</h3>
                <div className="space-y-2 sm:space-y-3">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300 text-xs sm:text-sm">{skill.name}</span>
                          <span className="text-purple-400 text-xs sm:text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 sm:h-2 rounded-full skill-bar"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-800/50 section-transition section-mobile section-sm section-md section-lg section-xl ${visibleSections.has('contact') ? 'visible' : ''}`} id="contact">
        <div className="max-w-4xl mx-auto text-center container-responsive">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 gradient-text">Get In Touch</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            I'm always interested in new opportunities and collaborations. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 grid-responsive">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-xl hover-lift card-mobile card-sm card-md card-lg card-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 animate-pulse-slow">📧</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Email</h3>
              <a href="mailto:eshanmadushanka273@gmail.com" className="text-purple-400 hover:text-pink-400 transition-colors text-sm sm:text-base break-all">
                eshanmadushanka273@gmail.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-xl hover-lift card-mobile card-sm card-md card-lg card-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 animate-pulse-slow">💼</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/eshan" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-pink-400 transition-colors text-sm sm:text-base">
                linkedin.com/in/eshan
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-xl hover-lift card-mobile card-sm card-md card-lg card-xl sm:col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 animate-pulse-slow">🐙</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">GitHub</h3>
              <a href="https://github.com/eshanmadu" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-pink-400 transition-colors text-sm sm:text-base">
                github.com/eshanmadu
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-xl hover-lift glass card-mobile card-sm card-md card-lg card-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Let's Work Together</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              I'm currently available for freelance work and full-time opportunities.
            </p>
            <button
              onClick={() => window.open('mailto:eshanmadushanka273@gmail.com', '_blank')}
              className="btn-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base button-mobile button-sm button-md button-lg button-xl"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 sm:py-8 text-center">
        <p className="text-gray-400 text-sm sm:text-base px-4">
          © 2024 Eshan Madushanka. Built with React and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;