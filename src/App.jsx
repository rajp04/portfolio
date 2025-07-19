import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Globe, Smartphone, ChevronDown, Menu, X, Star, Layers } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'Express.js', level: 85, icon: '🚀' },
    { name: 'JavaScript', level: 90, icon: '💛' },
    { name: 'MySQL', level: 80, icon: '🔷' },
    { name: 'HTML/CSS', level: 95, icon: '🎨' },
    { name: 'Git', level: 85, icon: '📚' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB featuring user authentication, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: '#',
      live: '#',
      image: '🛒'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, user roles, and project tracking capabilities.',
      tech: ['React', 'Socket.io', 'MongoDB', 'JWT'],
      github: '#',
      live: '#',
      image: '📋'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization and automated reporting features.',
      tech: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
      github: '#',
      live: '#',
      image: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Raj Ghodasara
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400' : 'text-white/80'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl">
                👨‍💻
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Raj Ghodasara
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-2">MERN Stack Developer</p>
            <p className="text-lg text-white/60 mb-8">1.5 Years of Experience</p>
            <div className="flex justify-center space-x-4">
              <a
                href="#contact"
                onClick={(e) => {e.preventDefault(); scrollToSection('contact');}}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {e.preventDefault(); scrollToSection('projects');}}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-white/60" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                I'm a passionate MERN Stack Developer with 1.5 years of hands-on experience building modern web applications. 
                I specialize in creating scalable, user-friendly solutions that bridge the gap between design and functionality.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                My journey in web development has been driven by curiosity and a love for problem-solving. I enjoy working 
                with the latest technologies and am always eager to learn new frameworks and tools to enhance my skillset.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Mail className="text-cyan-400" size={20} />
                  <span className="text-white/80">rajpatel46118@email.com</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-cyan-400" size={20} />
                  <span className="text-white/80">Ahmedabad, Gujarat, India</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Code className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                <p className="text-white/70">React.js, JavaScript, HTML, CSS, Responsive Design</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Database className="text-purple-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Backend</h3>
                <p className="text-white/70">Node.js, Express.js, MongoDB, MySQL, RESTful APIs</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Globe className="text-pink-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Web</h3>
                <p className="text-white/70">Full-Stack Development, SPA, PWA</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Layers className="text-green-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">Tools</h3>
                <p className="text-white/70">VS Code , Git, GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{project.image}</div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-1 text-white/80 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-1 text-white/80 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/80 mb-12">
            I'm always excited to work on new projects and collaborate with amazing people. 
            Let's build something incredible together!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Mail className="text-cyan-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-white/70">rajpatel46118@email.com</p>
            </div>
            {/* <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Phone className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-white/70">+91 </p>
            </div> */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <MapPin className="text-pink-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-white/70">Ahmedabad, Gujarat</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/rajp04"
              className="bg-white/10 hover:bg-cyan-400/20 border border-white/20 hover:border-cyan-400/50 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ghodasara-raj/"
              className="bg-white/10 hover:bg-cyan-400/20 border border-white/20 hover:border-cyan-400/50 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rajpatel46118@gmail.com"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-black/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Raj Ghodasara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;