
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Nikolaj",
    lastName: "Storm",
    tagline: "Designer, Developer & Digital Storyteller",
    profileImage: "/lovable-uploads/a4e71c80-eb0f-4ad6-91cb-b174fd7f4db3.png",
    floatingCircleImage: "/Small.png"
  },

  // About Section
  about: {
    title: "About",
    paragraphs: [
      "I'm a passionate creator at the intersection of technology and design, crafting digital experiences that tell meaningful stories.",
      "With a background in both academic research and creative development, I bring a unique perspective to every project I work on."
    ]
  },

  // Blog Section
  blog: {
    title: "Latest Thoughts",
    posts: [
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
    ]
  },

  // Academic Papers Section
  academicPapers: {
    title: "Academic Work",
    papers: [
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
    ]
  },

  // Projects Section
  projects: {
    title: "Creative Projects",
    items: [
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
    ]
  },

  // Contact Section
  contact: {
    title: "Let's Connect",
    description: "Ready to collaborate on something amazing? I'd love to hear from you.",
    links: [
      {
        type: "email",
        label: "Email",
        url: "mailto:hello@nikolajstorm.com"
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        url: "https://linkedin.com/in/nikolajstorm"
      },
      {
        type: "github",
        label: "GitHub",
        url: "https://github.com/nikolaj-storm"
      }
    ]
  },

  // Footer
  footer: {
    copyright: "© 2024 Nikolaj Storm. Crafted with care and minimal design principles."
  }
};
