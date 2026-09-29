export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  roles: string[];
  intro: string;
  statement: string;
  aboutParagraphs: string[];
  metadata: {
    location: string;
    education: string;
    focus: string;
    currentlyLearning: string;
  };
  socials: {
    linkedin: string;
    github: string;
    email: string;
  };
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface JourneyItem {
  id: string;
  year: string;
  title: string;
  category: string;
  description: string;
}

export interface CapabilityCard {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  skills: string[];
}

export interface SkillNode {
  name: string;
  category: 'PROGRAMMING' | 'DATA' | 'AI / ML' | 'WEB DEVELOPMENT' | 'TOOLS';
  level?: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  visualType: 'chart' | 'map' | 'fintech' | 'security' | 'code' | 'dashboard' | 'analytics';
}

export interface AchievementItem {
  id: string;
  title: string;
  award: string;
  organization: string;
  badgeType: 'WINNER' | 'PANEL WINNER' | 'RANK' | 'TOP 50' | 'PARTICIPATION';
  participants?: string;
  duration?: string;
  details?: string;
}

export interface SecondaryAchievement {
  id: string;
  name: string;
  type: string;
  year: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
}

export interface CertificationCategory {
  category: string;
  certifications: {
    title: string;
    provider: string;
    issuerNote?: string;
  }[];
}

export interface GithubRepo {
  name: string;
  description: string;
  language: string;
  category: string;
  url: string;
  stars?: number;
}

export const personalInfo: PersonalInfo = {
  name: "PRAJITHA MARY.J",
  shortName: "PRAJITHA",
  title: "Computer Science Engineering Student • Data Science & AI/ML Explorer",
  roles: [
    "DATA SCIENCE ENTHUSIAST",
    "AI/ML EXPLORER",
    "FULL-STACK DEVELOPER"
  ],
  intro: "Computer Science Engineering student passionate about turning data, code, and ideas into meaningful digital solutions.",
  statement: "I TURN IDEAS INTO INTELLIGENT SOLUTIONS.",
  aboutParagraphs: [
    "I’m a Computer Science Engineering student at St. Joseph’s College of Engineering, passionate about Data Science, Artificial Intelligence, Machine Learning, and Full-Stack Development.",
    "I enjoy working with data, building intelligent applications, and transforming ideas into practical digital solutions.",
    "I’m continuously learning, experimenting with new technologies, and building projects that strengthen my technical and problem-solving skills."
  ],
  metadata: {
    location: "India",
    education: "Computer Science Engineering",
    focus: "Data Science • AI/ML • Full Stack",
    currentlyLearning: "Machine Learning • Data Analytics • AI • Full Stack • System Design • Power BI"
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/prajitha-mary-j/",
    github: "https://github.com/PRAJITHAMARY",
    email: "prajithamaryj@gmail.com"
  }
};

export const educationList: EducationItem[] = [
  {
    id: "edu-1",
    institution: "ST. JOSEPH'S COLLEGE OF ENGINEERING",
    degree: "Computer Science Engineering",
    period: "Present",
    details: "Focusing on Data Structures, Algorithms, Data Mining, Database Systems, Artificial Intelligence, and Software Engineering."
  },
  {
    id: "edu-2",
    institution: "HOLY FAMILY CONVENT MATRICULATION HIGHER SECONDARY SCHOOL",
    degree: "School Education",
    period: "Completed",
    details: "Strong foundation in Higher Secondary Mathematics, Physics, Chemistry, and Computer Science."
  }
];

export const journeyTimeline: JourneyItem[] = [
  {
    id: "j-1",
    year: "FOUNDATION",
    title: "SCHOOL EDUCATION",
    category: "Academics",
    description: "Built strong mathematical & logical foundations at Holy Family Convent Matriculation Higher Secondary School."
  },
  {
    id: "j-2",
    year: "PRESENT",
    title: "COMPUTER SCIENCE ENGINEERING",
    category: "Academics",
    description: "Enrolled in B.E. Computer Science Engineering at St. Joseph's College of Engineering, diving deep into core computer science concepts."
  },
  {
    id: "j-3",
    year: "CONTINUOUS",
    title: "TECHNICAL LEARNING & EXPLORATION",
    category: "Self-Driven",
    description: "Mastered Python, SQL, Pandas, Scikit-learn, React, and Power BI through hands-on coursework and certified specializations."
  },
  {
    id: "j-4",
    year: "2025 – 2026",
    title: "INDUSTRY INTERNSHIPS",
    category: "Professional Experience",
    description: "Gained real-world engineering exposure across AI/ML (Codework), Networking (Zilogic Systems), and Data Science (Unlox®)."
  },
  {
    id: "j-5",
    year: "MILESTONES",
    title: "FEATURED TECHNICAL PROJECTS",
    category: "Engineering",
    description: "Engineered real-world analytical software including WhatsApp Chat Analyzer, Student Tracking System, Fraud Detection Files, and Tech Salary Decoder."
  },
  {
    id: "j-6",
    year: "COMPETITIVE",
    title: "HACKATHONS & INNOVATION",
    category: "Competitions",
    description: "Participated and ranked in high-impact technical hackathons including SEMmozhi Ideathon, CodeCraft, and HackDevengers."
  },
  {
    id: "j-7",
    year: "RECOGNITION",
    title: "ACHIEVEMENTS & CERTIFICATIONS",
    category: "Milestones",
    description: "Earned accolades like Ideathon Panel Winner, Top 50 nationwide rank, and top credentials from IBM, Cisco, Google, and NASSCOM."
  },
  {
    id: "j-8",
    year: "HORIZON",
    title: "FUTURE GOALS",
    category: "Aspiration",
    description: "Aiming to build scalable AI-driven data products and contribute to high-impact technical engineering teams."
  }
];

export const capabilities: CapabilityCard[] = [
  {
    number: "01",
    title: "DATA SCIENCE",
    description: "Data cleaning, preprocessing, analysis, visualization, and extracting meaningful insights from complex datasets.",
    tags: ["Python", "Pandas", "NumPy", "Data Preprocessing", "Exploratory Data Analysis"]
  },
  {
    number: "02",
    title: "DATA ANALYTICS",
    description: "Transforming raw operational data into interactive dashboards, visual reports, and actionable business insights.",
    tags: ["Power BI", "SQL", "Data Dashboards", "Statistical Modeling", "Business Intelligence"]
  },
  {
    number: "03",
    title: "AI / MACHINE LEARNING",
    description: "Exploring machine learning models, AI applications, feature engineering, classification, regression, and intelligent systems.",
    tags: ["Scikit-learn", "Classification", "Regression", "Feature Engineering", "Automated Pipelines"]
  },
  {
    number: "04",
    title: "FULL-STACK DEVELOPMENT",
    description: "Building responsive, modern web applications using modern frontend frameworks and robust backend API integration.",
    tags: ["React", "JavaScript/TypeScript", "Tailwind CSS", "HTML5/CSS3", "REST APIs", "Git"]
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "UNLOX®",
    role: "Data Science Intern",
    period: "Jun 2026 – Sep 2026",
    location: "Bengaluru, Karnataka · Remote",
    type: "Remote",
    responsibilities: [
      "Data collection from multi-source datasets",
      "Data cleaning and missing value imputation",
      "Data preprocessing and feature normalization",
      "Dataset validation and integrity verification",
      "Power BI visualization dashboard design",
      "Extracting data-driven business insights",
      "Collaborating in cross-functional team iterations",
      "Managing end-to-end data processing workflow"
    ],
    skills: ["Data Science", "Data Analytics", "Data Cleaning", "Power BI"]
  },
  {
    id: "exp-2",
    company: "ZILOGIC SYSTEMS",
    role: "Networking Intern",
    period: "Nov 2025",
    location: "Chennai · On-site",
    type: "On-site",
    responsibilities: [
      "LAN/WAN networking fundamental concepts",
      "Network topology analysis and architecture",
      "Router and switch configuration basics",
      "Firewalls and security policies",
      "Network setup and basic troubleshooting",
      "Network monitoring and packet flow analysis",
      "Technical documentation of network setups",
      "Understanding core network protocols & security fundamentals"
    ],
    skills: ["Networking", "Firewalls", "Routers & Switches", "Protocols", "Troubleshooting"]
  },
  {
    id: "exp-3",
    company: "CODEWORK",
    role: "AI & ML Intern",
    period: "Jun 2025",
    location: "Chennai · On-site",
    type: "On-site",
    responsibilities: [
      "Machine learning pipeline design using Python",
      "Leveraging Scikit-learn for ML model implementation",
      "Data preprocessing with Pandas and matrix manipulation",
      "Feature engineering and selection techniques",
      "Model training, cross-validation, and hyperparameter tuning",
      "Classification and Regression task modeling",
      "Exploration of AI automation workflows",
      "Version control using Git for model tracking and documentation"
    ],
    skills: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Git"]
  }
];

export const skillNodes: SkillNode[] = [
  { name: "PYTHON", category: "PROGRAMMING", description: "Primary language for Data Science, AI/ML pipelines, and scripting." },
  { name: "JAVA", category: "PROGRAMMING", description: "Object-oriented software development and algorithm implementations." },
  { name: "SQL", category: "PROGRAMMING", description: "Relational database querying, join optimizations, and data manipulation." },
  { name: "HTML", category: "WEB DEVELOPMENT", description: "Semantic web structuring and accessible HTML5 standards." },
  { name: "CSS", category: "WEB DEVELOPMENT", description: "Modern responsive layouts, flexbox, grid, and CSS design systems." },
  { name: "JAVASCRIPT", category: "WEB DEVELOPMENT", description: "ES6+ asynchronous web logic and dynamic front-end interactions." },
  { name: "REACT", category: "WEB DEVELOPMENT", description: "Component-driven single page app development with state management." },
  { name: "PANDAS", category: "DATA", description: "High-performance data frames, cleaning, filtering, and analysis." },
  { name: "SCIKIT-LEARN", category: "AI / ML", description: "Predictive ML algorithms, classification, regression, and model evaluation." },
  { name: "POWER BI", category: "DATA", description: "Interactive business intelligence dashboards, DAX queries, and report design." },
  { name: "GIT", category: "TOOLS", description: "Distributed version control, branch management, and collaborative workflows." },
  { name: "MACHINE LEARNING", category: "AI / ML", description: "Supervised & unsupervised learning, model training, and performance tuning." },
  { name: "DATA SCIENCE", category: "DATA", description: "Statistical inference, data wrangling, and quantitative modeling." },
  { name: "DATA ANALYTICS", category: "DATA", description: "Exploratory data analysis, KPI visualization, and pattern identification." },
  { name: "AI", category: "AI / ML", description: "Artificial intelligence concepts, automation, and prompt engineering." }
];

export const projectsList: ProjectItem[] = [
  {
    id: "proj-1",
    number: "01",
    title: "GROUPDNA_WHATSAPP_CHAT_ANALYZER",
    category: "Data Analytics & NLP",
    description: "An interactive analytical application designed to process exported WhatsApp group chat datasets. Generates detailed activity timelines, participant messaging frequencies, sentiment analysis trends, peak active hours, and customized word clouds.",
    technologies: ["Python", "Pandas", "Natural Language Processing", "Streamlit / Matplotlib", "Data Preprocessing"],
    githubUrl: "https://github.com/PRAJITHAMARY/GROUPDNA_WHATSAPP_CHAT_ANALYZER",
    featured: true,
    visualType: "chart"
  },
  {
    id: "proj-2",
    number: "02",
    title: "BUS_DRIVER_STUDENT_TRACKING_SYSTEM",
    category: "Full-Stack & IoT Systems",
    description: "A comprehensive student safety and location monitoring solution connecting school bus drivers, institution administrators, and parents. Features real-time location tracking updates, automated student check-ins, and alert notifications.",
    technologies: ["React", "JavaScript", "Node.js / Express", "Geolocation APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/PRAJITHAMARY/BUS_DRIVER_STUDENT_TRACKING_SYSTEM",
    featured: true,
    visualType: "map"
  },
  {
    id: "proj-3",
    number: "03",
    title: "SpendDNA_INDUSTRY_GRADED",
    category: "FinTech & Data Analytics",
    description: "An industry-graded financial analytical engine that categorizes personal expenditure, identifies spending patterns, flags recurring subscription anomalies, and delivers clear graphical financial reports.",
    technologies: ["Python", "Pandas", "SQL", "Chart.js / Data Visualization", "Financial Modeling"],
    githubUrl: "https://github.com/PRAJITHAMARY/SpendDNA_INDUSTRY_GRADED",
    featured: true,
    visualType: "fintech"
  },
  {
    id: "proj-4",
    number: "04",
    title: "REDFLAG_THE_FRAUD_FILES",
    category: "AI/ML Security",
    description: "An intelligent fraud detection platform evaluating transaction records to identify suspicious patterns, outlier activity, and fraudulent financial behavior using supervised machine learning classification.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Machine Learning", "Anomaly Detection"],
    githubUrl: "https://github.com/PRAJITHAMARY/REDFLAG_THE_FRAUD_FILES",
    featured: true,
    visualType: "security"
  },
  {
    id: "proj-5",
    number: "05",
    title: "SENTINEL-X",
    category: "AI Threat Intelligence",
    description: "An automated threat monitoring and system health diagnostic framework designed to detect anomalies in infrastructure telemetry and flag potential security violations.",
    technologies: ["Python", "AI Automation", "System Diagnostics", "Log Analytics"],
    githubUrl: "https://github.com/PRAJITHAMARY/SENTINEL-X",
    featured: true,
    visualType: "code"
  },
  {
    id: "proj-6",
    number: "06",
    title: "BANGALORE_TECH_SALARY_DECODER",
    category: "Data Science & Estimation",
    description: "A data science model and interactive web engine analyzing technology compensation trends in Bangalore. Estimates developer salaries based on tech stack, experience, company size, and domain parameters.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Regression Models", "Data Analytics"],
    githubUrl: "https://github.com/PRAJITHAMARY/BANGALORE_TECH_SALARY_DECODER",
    featured: true,
    visualType: "analytics"
  },
  {
    id: "proj-7",
    number: "07",
    title: "SALES_OPERATION_ANALYTICS",
    category: "Business Intelligence",
    description: "An executive-level operational analytics dashboard built with Power BI and SQL, transforming transactional data into interactive KPIs, regional sales trends, and revenue growth insights.",
    technologies: ["Power BI", "DAX", "SQL", "Data Modeling", "Dashboard Design"],
    githubUrl: "https://github.com/PRAJITHAMARY/SALES_OPERATION_ANALYTICS",
    featured: true,
    visualType: "dashboard"
  }
];

export const featuredAchievements: AchievementItem[] = [
  {
    id: "ach-1",
    title: "SEMmozhi CLASH IDEATHON",
    award: "Panel Winner",
    organization: "Kumaraguru Institutions",
    badgeType: "PANEL WINNER",
    details: "Recognized as Panel Winner for proposing an innovative technical solution evaluated by academic and domain expert judges."
  },
  {
    id: "ach-2",
    title: "CODECRAFT — THE ULTIMATE DEVELOPER QUEST",
    award: "9th Rank Nationwide",
    organization: "Developer Quest Hackathon",
    badgeType: "RANK",
    details: "Secured overall 9th Rank in an intensive developer coding challenge testing problem-solving, rapid prototyping, and algorithmic speed."
  },
  {
    id: "ach-3",
    title: "HACKDEVENGERS 1.0",
    award: "Top 50 Finalist",
    organization: "8-Hour Online Hackathon",
    badgeType: "TOP 50",
    participants: "4,200+ Participants",
    duration: "8 Hours",
    details: "Ranked among the top 50 projects out of over 4,200 participants across the nation in an intense 8-hour live coding sprint."
  }
];

export const secondaryAchievements: SecondaryAchievement[] = [
  { id: "sec-1", name: "Adobe University Hackathon", type: "National Hackathon", year: "2025" },
  { id: "sec-2", name: "OOSC 4.0 Hackathon", type: "Open Source Challenge", year: "2025" },
  { id: "sec-3", name: "PRISMATIC '26", type: "Technical Innovation Fest", year: "2026" },
  { id: "sec-4", name: "Designathon 2025", type: "UI/UX & Product Sprint", year: "2025" },
  { id: "sec-5", name: "HackDevengers 2.0", type: "Developer Hackathon", year: "2025" },
  { id: "sec-6", name: "Buildathon 2026 / IdeaForge", type: "Product Hackathon", year: "2026" },
  { id: "sec-7", name: "MAEGATHon'26", type: "Inter-College Hackathon", year: "2026" },
  { id: "sec-8", name: "VizFest", type: "Data Visualization Sprint", year: "2025" },
  { id: "sec-9", name: "STUDAI Foundry", type: "AI Innovation Challenge", year: "2025" }
];

export const teamMembers: TeamMember[] = [
  {
    id: "tm-1",
    name: "PRAJITHA MARY J",
    role: "Team Leader",
    initials: "PM",
    avatarBg: "from-[#FFB7C5]/30 to-[#EC4899]/20"
  },
  {
    id: "tm-2",
    name: "PRADHAPKUMAR S",
    role: "Backend Developer",
    initials: "PS",
    avatarBg: "from-[#3B82F6]/30 to-[#1D4ED8]/20"
  },
  {
    id: "tm-3",
    name: "RAGASHREE R",
    role: "Frontend Developer & UI/UX Designer",
    initials: "RR",
    avatarBg: "from-[#10B981]/30 to-[#059669]/20"
  },
  {
    id: "tm-4",
    name: "SNEHASREE S",
    role: "AI/ML & Data Analyst",
    initials: "SS",
    avatarBg: "from-[#8B5CF6]/30 to-[#6D28D9]/20"
  }
];

export const certificationCategories: CertificationCategory[] = [
  {
    category: "DATA SCIENCE / ANALYTICS",
    certifications: [
      { title: "Python for Data Science", provider: "IBM" },
      { title: "Python for Data Science", provider: "NPTEL" },
      { title: "Data Science Essentials with Python", provider: "Cisco Networking Academy" },
      { title: "CompTIA Data+: Data Analytics Tools", provider: "Skillsoft Course" },
      { title: "Probability and Statistics using Python", provider: "Infosys Springboard" }
    ]
  },
  {
    category: "AI / MACHINE LEARNING",
    certifications: [
      { title: "Apply AI: Analyze Customer Reviews", provider: "Cisco" },
      { title: "Introduction to Generative AI Studio", provider: "Google" },
      { title: "Introduction to Data Science", provider: "Cisco" }
    ]
  },
  {
    category: "FULL-STACK DEVELOPMENT",
    certifications: [
      { title: "Full Stack Development with MERN", provider: "NASSCOM Foundation / Zikshaa" },
      { title: "ReactJS", provider: "Infosys Springboard" }
    ]
  },
  {
    category: "OTHER RELEVANT CREDENTIALS",
    certifications: [
      { title: "Python Essentials 1", provider: "Cisco" },
      { title: "AI for Data Analysts", provider: "Gradient" }
    ]
  }
];

export const githubRepos: GithubRepo[] = [
  {
    name: "GROUPDNA_WHATSAPP_CHAT_ANALYZER",
    description: "NLP and analytical pipeline for exported WhatsApp group chat analytics, timelines, and sentiment visualization.",
    language: "Python",
    category: "Data Analytics",
    url: "https://github.com/PRAJITHAMARY/GROUPDNA_WHATSAPP_CHAT_ANALYZER"
  },
  {
    name: "BUS_DRIVER_STUDENT_TRACKING_SYSTEM",
    description: "Full-stack location tracking solution with real-time student check-in alerts.",
    language: "JavaScript",
    category: "Full Stack",
    url: "https://github.com/PRAJITHAMARY/BUS_DRIVER_STUDENT_TRACKING_SYSTEM"
  },
  {
    name: "SpendDNA_INDUSTRY_GRADED",
    description: "FinTech data analytics engine categorizing user expenditure patterns and visualizing financial health.",
    language: "Python",
    category: "FinTech",
    url: "https://github.com/PRAJITHAMARY/SpendDNA_INDUSTRY_GRADED"
  },
  {
    name: "REDFLAG_THE_FRAUD_FILES",
    description: "Machine learning fraud classification and transaction anomaly detection framework.",
    language: "Python",
    category: "AI / ML Security",
    url: "https://github.com/PRAJITHAMARY/REDFLAG_THE_FRAUD_FILES"
  },
  {
    name: "SENTINEL-X",
    description: "AI-driven threat detection and automated diagnostic framework for infrastructure log telemetry.",
    language: "Python",
    category: "AI Automation",
    url: "https://github.com/PRAJITHAMARY/SENTINEL-X"
  },
  {
    name: "BANGALORE_TECH_SALARY_DECODER",
    description: "Predictive developer salary decoder model based on tech stack, experience, and domain.",
    language: "Python",
    category: "Data Science",
    url: "https://github.com/PRAJITHAMARY/BANGALORE_TECH_SALARY_DECODER"
  }
];

export const currentlyExploringTags: string[] = [
  "MACHINE LEARNING",
  "DATA ANALYTICS",
  "ARTIFICIAL INTELLIGENCE",
  "FULL-STACK DEVELOPMENT",
  "POWER BI",
  "SYSTEM DESIGN",
  "DATA VISUALIZATION"
];

export const careerOpportunities: { title: string; desc: string; icon: string }[] = [
  { title: "DATA SCIENCE", desc: "Data preprocessing, statistical analysis, and predictive modeling.", icon: "BarChart3" },
  { title: "DATA ANALYTICS", desc: "Designing dashboards, DAX queries, and translating numbers to insights.", icon: "PieChart" },
  { title: "AI / MACHINE LEARNING", desc: "Developing intelligent classification, NLP, and regression models.", icon: "Brain" },
  { title: "FULL-STACK DEVELOPMENT", desc: "Building responsive web interfaces and connecting modern REST APIs.", icon: "Code2" },
  { title: "TECHNICAL COLLABORATIONS", desc: "Joining passionate engineering teams to tackle real-world challenges.", icon: "Users" },
  { title: "HACKATHONS & INNOVATION", desc: "Rapid prototyping, creative problem solving, and intensive coding sprints.", icon: "Trophy" }
];
