
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, ExternalLink, Github, Mail, Linkedin } from 'lucide-react';
import FloatingProfileCircle from './FloatingProfileCircle';
import ScrollTrigger from './ScrollTrigger';

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

  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies shaping the web.",
      date: "2024-06-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      title: "Minimalist Design Principles",
      excerpt: "How less can be more in digital design and user experience.",
      date: "2024-06-10",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      title: "Sustainable Technology",
      excerpt: "Building eco-friendly digital solutions for tomorrow.",
      date: "2024-06-05",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    }
  ];

  const academicPapers = [
    {
      title: "Machine Learning in Web Development: A Comprehensive Study",
      authors: "N. Storm, et al.",
      journal: "Journal of Web Technologies",
      year: "2024",
      abstract: "This paper explores the integration of machine learning techniques in modern web development practices...",
      pdfUrl: "/papers/ml-web-dev.pdf"
    },
    {
      title: "User Experience Optimization Through Data Analytics",
      authors: "N. Storm, J. Doe",
      journal: "HCI Research Quarterly",
      year: "2023",
      abstract: "An in-depth analysis of how data-driven insights can significantly improve user experience design...",
      pdfUrl: "/papers/ux-analytics.pdf"
    }
  ];

  const projects = [
    {
      title: "Interactive Data Visualization Platform",
      description: "A web-based platform for creating stunning, interactive data visualizations with real-time collaboration features.",
      tech: ["React", "D3.js", "Node.js", "WebSocket"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com/example/dataviz",
      demo: "https://dataviz-demo.com"
    },
    {
      title: "Sustainable City Planning Tool",
      description: "An AI-powered tool that helps urban planners design more sustainable and livable cities.",
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
      github: "https://github.com/example/city-planner",
      demo: "https://city-planner-demo.com"
    },
    {
      title: "Mindful Meditation App",
      description: "A minimalist meditation app focused on reducing digital noise and promoting mental well-being.",
      tech: ["React Native", "Firebase", "Node.js"],
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop",
      github: "https://github.com/example/meditation-app",
      demo: "https://meditation-demo.com"
    }
  ];

  return (
    <div className="relative">
      <FloatingProfileCircle />
      
      {/* Header with Hamburger Menu */}
      <header className="sticky-header glass-effect">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#333446]">NS</div>
          
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
              Nikolaj
              <span className="block text-[#7F8CAA]">Storm</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#7F8CAA] font-light mb-8 leading-relaxed">
              Designer, Developer & Digital Storyteller
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7F8CAA] to-[#B8CFCE] mx-auto"></div>
          </div>
        </ScrollTrigger>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollTrigger>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#333446] mb-16 text-center">About</h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-lg text-[#7F8CAA] leading-relaxed">
                  I'm a passionate creator at the intersection of technology and design, 
                  crafting digital experiences that tell meaningful stories.
                </p>
                <p className="text-lg text-[#7F8CAA] leading-relaxed">
                  With a background in both academic research and creative development, 
                  I bring a unique perspective to every project I work on.
                </p>
              </div>
              <div className="glass-effect p-8 rounded-3xl">
                <h3 className="text-2xl font-light text-[#333446] mb-4">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Design Systems', 'Data Visualization', 'UX Research', 'Academic Writing'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-[#B8CFCE] text-[#333446] rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* Blog Section */}
      <section ref={sectionRefs.blog} id="blog" className="py-24 px-6 bg-gradient-to-b from-transparent to-[#B8CFCE]/20">
        <div className="container mx-auto max-w-6xl">
          <ScrollTrigger>
            <h2 className="text-4xl md:text-5xl font-extralight text-[#333446] mb-16 text-center">Latest Thoughts</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <ScrollTrigger key={index} delay={index * 200}>
                  <article className="glass-effect rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300">
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
            <h2 className="text-4xl md:text-5xl font-extralight text-[#333446] mb-16 text-center">Academic Work</h2>
            <div className="space-y-8">
              {academicPapers.map((paper, index) => (
                <ScrollTrigger key={index} delay={index * 200}>
                  <div className="glass-effect p-8 rounded-3xl">
                    <h3 className="text-2xl font-medium text-[#333446] mb-3">{paper.title}</h3>
                    <p className="text-[#7F8CAA] mb-2">{paper.authors}</p>
                    <p className="text-sm text-[#7F8CAA] mb-4">{paper.journal}, {paper.year}</p>
                    <p className="text-[#7F8CAA] leading-relaxed mb-6">{paper.abstract}</p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#333446] text-white rounded-full hover:bg-[#7F8CAA] transition-colors">
                      <Download size={16} />
                      Download PDF
                    </button>
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-extralight text-[#333446] mb-16 text-center">Creative Projects</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {projects.map((project, index) => (
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
            <h2 className="text-4xl md:text-5xl font-extralight text-[#333446] mb-16">Let's Connect</h2>
            <p className="text-xl text-[#7F8CAA] mb-12 leading-relaxed">
              Ready to collaborate on something amazing? I'd love to hear from you.
            </p>
            <div className="flex justify-center gap-8">
              <a href="mailto:hello@nikolajstorm.com" className="flex items-center gap-2 text-[#333446] hover:text-[#7F8CAA] transition-colors text-lg">
                <Mail size={20} />
                Email
              </a>
              <a href="https://linkedin.com/in/nikolajstorm" className="flex items-center gap-2 text-[#333446] hover:text-[#7F8CAA] transition-colors text-lg">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://github.com/nikolaj-storm" className="flex items-center gap-2 text-[#333446] hover:text-[#7F8CAA] transition-colors text-lg">
                <Github size={20} />
                GitHub
              </a>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <ScrollTrigger>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7F8CAA] to-[#B8CFCE] mx-auto mb-6"></div>
          <p className="text-[#7F8CAA] text-sm">
            © 2024 Nikolaj Storm. Crafted with care and minimal design principles.
          </p>
        </ScrollTrigger>
      </footer>
    </div>
  );
};

export default Portfolio;
