import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, ExternalLink, Github, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingProfileCircle from './FloatingProfileCircle';
import ScrollTrigger from './ScrollTrigger';
import { portfolioConfig } from '../config/portfolioConfig';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    blog: useRef<HTMLDivElement>(null),
    papers: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  // Debug log to ensure component is mounting
  useEffect(() => {
    console.log('Portfolio component mounted');
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs[sectionId as keyof typeof sectionRefs].current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' },
    { id: 'papers', label: 'Academic Papers' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  console.log('Portfolio rendering...');

  return (
    <div className="relative min-h-screen bg-[#F7E8D6]">
      <FloatingProfileCircle />
      
      {/* Header with Hamburger Menu */}
      <header className="sticky top-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4 flex justify-end items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 relative p-2 rounded-lg glass-effect"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#333446] bg-opacity-95 z-40 flex items-center justify-center">
            <nav className="text-center">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full py-4 px-8 text-2xl font-light transition-colors hover:text-[#B8CFCE] ${
                    activeSection === item.id ? 'text-[#B8CFCE]' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={sectionRefs.hero} id="hero" className="min-h-screen flex items-center justify-center px-6">
        <ScrollTrigger>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-extralight text-[#333446] mb-6 leading-tight">
              {portfolioConfig.personal.name}
            </h1>
            <p className="text-xl md:text-2xl text-[#7F8CAA] font-light mb-8 leading-relaxed">
              {portfolioConfig.personal.tagline}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7F8CAA] to-[#B8CFCE] mx-auto"></div>
          </div>
        </ScrollTrigger>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollTrigger>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#333446] mb-16 text-center">{portfolioConfig.about.title}</h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                {portfolioConfig.about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-[#7F8CAA] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="glass-effect p-8 rounded-3xl">
                <img 
                  src={portfolioConfig.personal.profileImage} 
                  alt="Nikolaj Storm" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* Blog Section */}
      <section ref={sectionRefs.blog} id="blog" className="py-24 px-6 bg-gradient-to-b from-transparent to-[#B8CFCE]/20">
        <div className="container mx-auto max-w-6xl">
          <ScrollTrigger>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#333446] mb-16 text-center">{portfolioConfig.blog.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {portfolioConfig.blog.posts.map((post, index) => (
                <ScrollTrigger key={index} delay={index * 200}>
                  <Link to={`/blog/${post.id}`}>
                    <article className="glass-effect rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-[#7F8CAA]">{post.date}</span>
                          <span className="text-sm text-[#7F8CAA]">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-medium text-[#333446] mb-3">{post.title}</h3>
                        <p className="text-[#7F8CAA] text-sm leading-relaxed">{post.excerpt}</p>
                      </div>
                    </article>
                  </Link>
                </ScrollTrigger>
              ))}
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* Academic Papers Section */}
      <section ref={sectionRefs.papers} id="papers" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollTrigger>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#333446] mb-16 text-center">{portfolioConfig.academicPapers.title}</h2>
            <div className="space-y-8">
              {portfolioConfig.academicPapers.papers.map((paper, index) => (
                <ScrollTrigger key={index} delay={index * 200}>
                  <Link to={`/paper/${paper.id}`}>
                    <div className="glass-effect p-8 rounded-3xl hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <h3 className="text-2xl font-medium text-[#333446] mb-3">{paper.title}</h3>
                      <p className="text-[#7F8CAA] mb-2">{paper.authors}</p>
                      <p className="text-sm text-[#7F8CAA] mb-4">{paper.journal}, {paper.year}</p>
                      <p className="text-[#7F8CAA] leading-relaxed mb-6">{paper.abstract}</p>
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#333446] text-white rounded-full hover:bg-[#7F8CAA] transition-colors">
                        <Download size={16} />
                        Read Paper
                      </div>
                    </div>
                  </Link>
                </ScrollTrigger>
              ))}
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRefs.projects} id="projects" className="py-24 px-6 bg-gradient-to-b from-[#B8CFCE]/20 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <ScrollTrigger>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#333446] mb-16 text-center">{portfolioConfig.projects.title}</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {portfolioConfig.projects.items.map((project, index) => (
                <ScrollTrigger key={index} delay={index * 300}>
                  <div className="glass-effect rounded-3xl overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                    <div className="p-8">
                      <h3 className="text-2xl font-medium text-[#333446] mb-3">{project.title}</h3>
                      <p className="text-[#7F8CAA] leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-[#B8CFCE] text-[#333446] rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a href={project.github} className="flex items-center gap-2 text-[#333446] hover:text-[#7F8CAA] transition-colors">
                          <Github size={16} />
                          Code
                        </a>
                        <a href={project.demo} className="flex items-center gap-2 text-[#333446] hover:text-[#7F8CAA] transition-colors">
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollTrigger>
              ))}
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollTrigger>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#333446] mb-16">{portfolioConfig.contact.title}</h2>
            <p className="text-xl text-[#7F8CAA] mb-12 leading-relaxed">
              {portfolioConfig.contact.description}
            </p>
            <div className="flex justify-center gap-8">
              {portfolioConfig.contact.links.map((link, index) => (
                <a key={index} href={link.url} className="flex items-center gap-2 text-[#333446] hover:text-[#7F8CAA] transition-colors text-lg">
                  {link.type === 'email' && <Mail size={20} />}
                  {link.type === 'linkedin' && <Linkedin size={20} />}
                  {link.type === 'github' && <Github size={20} />}
                  {link.label}
                </a>
              ))}
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <ScrollTrigger>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7F8CAA] to-[#B8CFCE] mx-auto mb-6"></div>
          <p className="text-[#7F8CAA] text-sm">
            {portfolioConfig.footer.copyright}
          </p>
        </ScrollTrigger>
      </footer>
    </div>
  );
};

export default Portfolio;
