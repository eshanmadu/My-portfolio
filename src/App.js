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
      technologies: ["Java", "Apache Netbeans", "My SQL"],
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
              <a href="mailto:eshanmadushanka273@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm sm:text-base break-all">
                eshanmadushanka273@gmail.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-xl hover-lift card-mobile card-sm card-md card-lg card-xl">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 animate-pulse-slow">💼</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/eshan-madushanka-2737a7321" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm sm:text-base">
                linkedin.com/in/eshan
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-xl hover-lift card-mobile card-sm card-md card-lg card-xl sm:col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 animate-pulse-slow">🐙</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">GitHub</h3>
              <a href="https://github.com/eshanmadu" target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm sm:text-base">
                github.com/eshanmadu
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8 sm:mb-12">
            <a
              href="https://facebook.com/eshanmadu"
              target="_blank"
              rel="noreferrer"
              className="group bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full hover-lift transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400/50"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/eshan"
              target="_blank"
              rel="noreferrer"
              className="group bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full hover-lift transition-all duration-300 hover:bg-blue-600/20 hover:border-blue-500/50"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/eshanmadu"
              target="_blank"
              rel="noreferrer"
              className="group bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full hover-lift transition-all duration-300 hover:bg-gray-700/20 hover:border-gray-500/50"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-gray-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
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
      <footer className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 border-t border-white/10 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
            {/* About Section */}
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                Eshan Madushanka
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Data Analyst & MERN Stack Developer passionate about creating innovative solutions and transforming data into actionable insights.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="mailto:eshanmadushanka273@gmail.com"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
                >
                  📧 eshanmadushanka273@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm capitalize"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
              <p className="text-gray-300 text-sm mb-4">
                Ready to collaborate or have a project in mind? Let's discuss how we can work together.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://linkedin.com/in/eshan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <span className="text-gray-500">•</span>
                <a
                  href="https://github.com/eshanmadu"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://facebook.com/eshanmadu"
              target="_blank"
              rel="noreferrer"
              className="group bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full hover-lift transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400/50"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/eshan"
              target="_blank"
              rel="noreferrer"
              className="group bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full hover-lift transition-all duration-300 hover:bg-blue-600/20 hover:border-blue-500/50"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/eshanmadu"
              target="_blank"
              rel="noreferrer"
              className="group bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full hover-lift transition-all duration-300 hover:bg-gray-700/20 hover:border-gray-500/50"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 text-gray-300 group-hover:text-gray-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-center sm:text-left">
                <p className="text-gray-400 text-sm">
                  © 2024 Eshan Madushanka. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Built with ❤️ using React & Tailwind CSS
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-xs text-gray-500">
                <span>📍 Sri Lanka</span>
                <span>•</span>
                <span>🎓 BSc (Hons) IT</span>
                <span>•</span>
                <span>💼 Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;