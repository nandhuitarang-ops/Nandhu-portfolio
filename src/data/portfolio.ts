export const personalInfo = {
  name: "Y. Nandha Kumar Reddy",
  firstName: "Yerasi Nandha Kumar Reddy",
  role: "AI & Full Stack Developer",
  tagline: "Building Intelligent Systems & Scalable Web Applications",
  intro:
    "I design and develop production-grade SaaS platforms, AI-powered automation pipelines, and data-driven applications that solve real-world business problems.",
  email: "nandhu939880@gmail.com",
  phone: "+91 9951939880",
  location: "Kadapa, India",
  github: "https://github.com/nandhuitarang-ops",
  linkedin: "https://linkedin.com/in/nandhuitarang-ops",
  resumeUrl: "/YERASI_NANDHA_KUMAR_REDDY_Resume.docx",
  profileImage: "/images/profile.jpeg",
};

export const aboutMe = {
  summary:
    "Software Developer with hands-on experience building scalable SaaS platforms, fintech-grade CRM systems, real-time telemetry pipelines, and AI-powered automation workflows. Proficient in Python, JavaScript, Next.js, and Supabase, with a strong foundation in system design, data pipelines, and workflow automation.",
  highlights: [
    {
      title: "Full Stack Development",
      description:
        "End-to-end web application development using Next.js, React, Tailwind CSS, and Supabase with PostgreSQL backends.",
      icon: "code",
    },
    {
      title: "AI & Intelligent Systems",
      description:
        "Building RAG-based chatbots, OCR pipelines, ML prediction models, and AI-assisted development workflows.",
      icon: "brain",
    },
    {
      title: "Data Pipelines & Automation",
      description:
        "Designing real-time data ingestion systems, telemetry dashboards, and automated document processing workflows.",
      icon: "database",
    },
  ],
};

export const skills = {
  categories: [
    {
      name: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    },
    {
      name: "Backend",
      items: ["Python", "Supabase", "PostgreSQL", "REST APIs"],
    },
    {
      name: "AI / ML",
      items: ["RAG Architecture", "OCR", "OpenCV", "Scikit-learn", "Pandas"],
    },
    {
      name: "Cloud & Storage",
      items: ["AWS S3"],
    },
    {
      name: "Tools & Platforms",
      items: ["VS Code", "Git", "Power BI", "Claude AI", "Advanced Excel"],
    },
  ],
};

export const projects = [
  {
    title: "RAG-Based Stock Price Prediction",
    description:
      "Full-stack stock analysis platform combining ML signals from technical indicators with Retrieval-Augmented Generation (RAG) over scraped financial content to produce structured Buy/Sell/Hold decisions with natural-language reasoning.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Python",
      "FastAPI",
      "Supabase",
      "pgvector",
      "XGBoost",
      "Groq",
      "BGE Embeddings",
      "Firecrawl",
      "Tailwind CSS",
      "Recharts",
    ],
    highlights: [
      "Dual-scope RAG architecture — ticker-specific news + global knowledge base (Varsity, Investopedia, NSE/SEBI)",
      "Hybrid search with dense semantic search (BGE + pgvector HNSW) and sparse full-text search fused via Reciprocal Rank Fusion",
      "Automated web scraping via Firecrawl with structure-aware chunking and SHA256 deduplication",
      "Technical indicators from 90-day OHLCV data: RSI, SMA, EMA, MACD, volatility",
      "7-gate deterministic decision engine — LLM never overrides numerical signals",
      "Groq (LLaMA-3.3-70B) for natural-language paraphrasing of decisions",
      "Local FastAPI microservice for BGE-small-en-v1.5 embedding generation",
      "Next.js 15 dashboard with per-ticker drill-down and Recharts visualization",
    ],
    image: "/images/projects/rag_stock_prediction.svg",
    github: "#",
    live: null,
  },
  {
    title: "RAG-Based Knowledge Chatbot",
    description:
      "AI-powered chatbot using retrieval-augmented generation (RAG) architecture with document ingestion, embeddings-based search, and role-based access control for secure knowledge retrieval.",
    techStack: ["JavaScript", "PostgreSQL", "APIs", "RAG"],
    highlights: [
      "Implemented embeddings-based semantic search",
      "Designed role-based access control and visibility filtering",
      "Built structured knowledge retrieval pipeline",
    ],
    image: "/images/projects/rag_knowledge_chatbot.svg",
    github: "#",
    live: null,
  },
  {
    title: "Dealer Scraper & Lead Intelligence",
    description:
      "Automated system to scrape, enrich, and process dealer leads from external sources with advanced deduplication logic and lead assignment workflows.",
    techStack: ["JavaScript", "APIs", "Data Processing"],
    highlights: [
      "Advanced deduplication using phone normalization & name matching",
      "Lead assignment and tracking workflows",
      "Reduced duplicate entries by ~35%",
    ],
    image: "/images/projects/dealer_lead_intelligence.svg",
    github: "#",
    live: null,
  },
  {
    title: "Dealer Onboarding & Digital Agreement",
    description:
      "Multi-step onboarding system with KYC verification, document uploads, banking details, and integrated e-sign workflows with Aadhaar/DSC-based signing.",
    techStack: ["Next.js", "JavaScript", "APIs", "Digio"],
    highlights: [
      "Integrated Digio e-sign with Aadhaar/DSC signing",
      "Agreement lifecycle tracking and sequential signing",
      "End-to-end onboarding automation",
    ],
    image: "/images/projects/dealer_onboarding_agreement.svg",
    github: "#",
    live: null,
  },
  {
    title: "E-Voting System with Face Authentication",
    description:
      "Secure online voting system using facial recognition for identity verification, focused on accuracy, privacy, and real-time authentication.",
    techStack: ["Python", "OpenCV", "Face Recognition"],
    highlights: [
      "Real-time facial recognition for voter verification",
      "Privacy-focused secure authentication flow",
      "Tamper-resistant voting mechanism",
    ],
    image: "/images/projects/evoting_face_authentication.svg",
    github: "#",
    live: null,
  },
  {
    title: "Stock Price Prediction System",
    description:
      "Machine learning models using regression and time-series analysis to predict stock prices with improved accuracy using historical financial datasets.",
    techStack: ["Python", "Pandas", "Scikit-learn"],
    highlights: [
      "Regression and time-series analysis models",
      "Historical financial dataset processing",
      "Improved prediction accuracy through feature engineering",
    ],
    image: "/images/projects/stock_price_prediction.svg",
    github: "#",
    live: null,
  },
  {
    title: "Forest Dryness Detection System",
    description:
      "IoT-based system to monitor environmental dryness and predict fire risks with real-time alert generation using environmental data.",
    techStack: ["Python", "IoT", "Data Analysis"],
    highlights: [
      "Real-time environmental monitoring",
      "Fire risk prediction using sensor data",
      "Automated alert generation system",
    ],
    image: "/images/projects/forest_dryness_detection.svg",
    github: "#",
    live: null,
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "iTarang",
    period: "Dec 2025 - Present",
    duration: "4+ Months",
    responsibilities: [
      {
        title: "End-to-End CRM System Development",
        description:
          "Architected a scalable CRM platform managing the complete dealer lifecycle from lead to fulfillment. Built role-based dashboards and real-time analytics, improving operational efficiency by ~40%.",
        tech: "Next.js, JavaScript, Supabase, REST APIs",
      },
      {
        title: "Fintech & KYC Automation",
        description:
          "Integrated Decentro APIs for real-time Aadhaar and PAN verification. Built secure onboarding workflows, reducing manual KYC effort and verification delays by ~60%.",
        tech: "JavaScript, REST APIs, JSON",
      },
      {
        title: "Intellicar Telemetry Data Pipeline",
        description:
          "Designed a real-time data ingestion pipeline for vehicle and battery telemetry. Built analytics dashboards for battery health, usage patterns, and risk insights — scalable for 1000+ vehicles.",
        tech: "Python, APIs, PostgreSQL",
      },
      {
        title: "OCR-Based Document Automation",
        description:
          "Developed OCR pipelines to extract structured data from documents, automating processing and validation. Reduced manual data entry effort by ~50%.",
        tech: "Python, OCR APIs, JSON",
      },
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Kalasalingam University",
    period: "2021 - 2025",
    score: "CGPA: 7.25",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Board of Intermediate Education",
    period: "",
    score: "93.7%",
  },
  {
    degree: "SSC (10th Standard)",
    institution: "Board of Secondary Education",
    period: "",
    score: "92%",
  },
];

export const certifications = [
  "Research Publication — IC-BIEST 2024",
  "Research Publication — ICITSM 2025",
  "Hackathon Participant",
  "Europia: Techno-management & Sustainability Event",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
