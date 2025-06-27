export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Nikolaj Storm Petersen",
    tagline: "Shure you want to look arroung here?? this is just me playing arround.",
    profileImage: "/lovable-uploads/85845c7d-54a3-4c65-bc50-ea663f750414.png", // Fixed path
    floatingCircleImage: "/lovable-uploads/a4e71c80-eb0f-4ad6-91cb-b174fd7f4db3.png" // Fixed path
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
        id: "future-web-development",
        title: "The Future of Web Development",
        excerpt: "Exploring emerging trends and technologies shaping the web.",
        date: "2024-06-15",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
        content: `
          <h2>Introduction</h2>
          <p>Web development is constantly evolving, with new technologies and frameworks emerging regularly. In this post, we'll explore some of the most exciting trends that are shaping the future of web development.</p>
          
          <h2>Key Trends</h2>
          <h3>1. AI Integration</h3>
          <p>Artificial Intelligence is becoming increasingly integrated into web development workflows, from code generation to automated testing.</p>
          
          <h3>2. WebAssembly</h3>
          <p>WebAssembly is opening up new possibilities for high-performance web applications, allowing developers to run code written in various languages at near-native speed.</p>
          
          <h3>3. Progressive Web Apps</h3>
          <p>PWAs continue to bridge the gap between web and mobile applications, offering app-like experiences directly in the browser.</p>
          
          <h2>Conclusion</h2>
          <p>The future of web development is bright, with exciting technologies that will enable us to create more powerful and engaging web experiences.</p>
        `
      },
      {
        id: "minimalist-design",
        title: "Minimalist Design Principles",
        excerpt: "How less can be more in digital design and user experience.",
        date: "2024-06-10",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
        content: `
          <h2>What is Minimalist Design?</h2>
          <p>Minimalist design is about stripping away unnecessary elements and focusing on what truly matters. It's the art of achieving more with less.</p>
          
          <h2>Core Principles</h2>
          <h3>1. White Space</h3>
          <p>White space (or negative space) is not empty space—it's a powerful design tool that helps create focus and hierarchy.</p>
          
          <h3>2. Typography</h3>
          <p>In minimalist design, typography often takes center stage. Choose fonts carefully and use them consistently.</p>
          
          <h3>3. Color Palette</h3>
          <p>A limited color palette creates harmony and prevents visual overwhelm. Often, minimalist designs use monochromatic or analogous color schemes.</p>
          
          <h2>Benefits</h2>
          <p>Minimalist design improves user experience by reducing cognitive load and making interfaces more intuitive to navigate.</p>
        `
      },
      {
        id: "sustainable-technology",
        title: "Sustainable Technology",
        excerpt: "Building eco-friendly digital solutions for tomorrow.",
        date: "2024-06-05",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
        content: `
          <h2>The Environmental Impact of Technology</h2>
          <p>As our digital world expands, it's crucial to consider the environmental impact of our technological choices.</p>
          
          <h2>Sustainable Practices</h2>
          <h3>1. Efficient Code</h3>
          <p>Writing efficient code reduces server load and energy consumption. Every optimization matters.</p>
          
          <h3>2. Green Hosting</h3>
          <p>Choose hosting providers that use renewable energy sources and have strong environmental commitments.</p>
          
          <h3>3. Minimalist Approach</h3>
          <p>Reduce file sizes, minimize HTTP requests, and optimize images to decrease bandwidth usage.</p>
          
          <h2>The Future</h2>
          <p>Sustainable technology isn't just about the environment—it's about creating a better, more efficient digital world for everyone.</p>
        `
      }
    ]
  },

  // Academic Papers Section
  academicPapers: {
    title: "Academic Work",
    papers: [
      {
        id: "ml-web-dev",
        title: "Machine Learning in Web Development: A Comprehensive Study",
        authors: "N. Storm, et al.",
        journal: "Journal of Web Technologies",
        year: "2024",
        abstract: "This paper explores the integration of machine learning techniques in modern web development practices...",
        pdfUrl: "/papers/ml-web-dev.pdf",
        content: `
          <h2>Abstract</h2>
          <p>This comprehensive study examines the integration of machine learning techniques in modern web development practices. We analyze current trends, challenges, and opportunities in this rapidly evolving field.</p>
          
          <h2>Introduction</h2>
          <p>Machine learning has become increasingly important in web development, offering new possibilities for creating intelligent, adaptive web applications.</p>
          
          <h2>Methodology</h2>
          <p>Our research involved analyzing 150+ web applications that incorporate machine learning features, surveying 200+ developers, and conducting case studies on successful implementations.</p>
          
          <h2>Key Findings</h2>
          <ul>
            <li>73% of developers believe ML will be essential for future web development</li>
            <li>Personalization features show 45% improvement in user engagement</li>
            <li>Automated testing using ML reduces bugs by 30%</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>Machine learning integration in web development is no longer optional but essential for creating competitive, user-centric applications.</p>
          
          <h2>References</h2>
          <p>[1] Smith, J. (2023). "AI in Frontend Development"<br/>
          [2] Johnson, M. (2023). "Machine Learning for Web Applications"</p>
        `
      },
      {
        id: "ux-analytics",
        title: "User Experience Optimization Through Data Analytics",
        authors: "N. Storm, J. Doe",
        journal: "HCI Research Quarterly",
        year: "2023",
        abstract: "An in-depth analysis of how data-driven insights can significantly improve user experience design...",
        pdfUrl: "/papers/ux-analytics.pdf",
        content: `
          <h2>Abstract</h2>
          <p>This paper presents an in-depth analysis of how data-driven insights can significantly improve user experience design. We explore methodologies for collecting, analyzing, and applying user data to create more effective digital experiences.</p>
          
          <h2>Introduction</h2>
          <p>User experience optimization has evolved from intuition-based design to data-driven decision making. This transformation has enabled designers to create more effective and user-centered digital products.</p>
          
          <h2>Data Collection Methods</h2>
          <h3>Quantitative Approaches</h3>
          <ul>
            <li>Heat mapping and click tracking</li>
            <li>A/B testing and multivariate testing</li>
            <li>Performance metrics and analytics</li>
          </ul>
          
          <h3>Qualitative Approaches</h3>
          <ul>
            <li>User interviews and surveys</li>
            <li>Usability testing sessions</li>
            <li>Customer feedback analysis</li>
          </ul>
          
          <h2>Case Studies</h2>
          <p>We examined three major e-commerce platforms that implemented data-driven UX optimization, resulting in average conversion rate improvements of 25%.</p>
          
          <h2>Conclusions</h2>
          <p>Data analytics provides invaluable insights for UX optimization, but must be balanced with human empathy and design intuition.</p>
        `
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
