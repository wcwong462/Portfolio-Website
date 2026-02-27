import { Code, Github, Globe, Linkedin, Server, Terminal } from "lucide-react";


export const personalData = {
  name: "Wong Wang Chak, Samuel",
  title: "Quantitative Finance & Computer Science",
  location: "Hong Kong",
  email: "wcwong462.samuel@gmail.com",
  about:
    `I bridge the gap between complex financial theory and high-performance execution. My experience is built at the intersection of Algorithmic Market-Making, Risk Analytics, and Quantitative Research.
From optimizing trading execution to modelling volatility and factor anomalies, I love translating data into conviction.
Outside of work, I'm a swim and gym rat, also an americano enthusiast ☕️ Always down to talk market microstructure, trading strategies, or the best coffee spots in HK.`,
  socials: [
    { name: "GitHub", url: "https://github.com/wcwong462", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/samuelwong1114/", icon: Linkedin },
  ],
  languages: ["English (Fluent)", "Cantonese (Native)", "Mandarin (Fluent)"],
  interests: ["Poker", "Fitness Training", "Swimming", "Coding", "Central Coffee Hunter"],
  recommendedBooks: [
    { title: "A Course in Derivative Securities: Introduction to Theory and Computation", author: "Kerry Back" },
    { title: "Chancing It: The Laws of Chance and How They Can Work for You", author: "Robert Matthews" }
  ],
  extracurricularActivities: [
    { title: "Student Mentor (2024 - 2025)", description: "Guided junior students in academic and career development." },
    { title: "Web3 Ideathon (2025)", description: "Developed innovative blockchain-based solutions." },
    { title: "HSBC Global Private Banking Case Challenge (2024)", description: "Participated in a global wealth management and portfolio advisory simulation." }
  ],
  certificates: [
    { name: "Citi Markets Quantitative Analysis Job Simulation", date: "Jun 2025" },
    { name: "Li Dak Sum Yip Yio Chin Scholarship", date: "2023 - 2024" },
    { name: "Ning Po Local University Fund", date: "2023 - 2027" }
  ]
};

export const skills = [
  // Programming & Data Science
  { name: "Python", iconUrl: "https://cdn.simpleicons.org/python", url: "https://www.python.org/", category: "Programming" },
  { name: "C++", iconUrl: "https://cdn.simpleicons.org/cplusplus", url: "https://isocpp.org/", category: "Programming" },
  { name: "Java", iconUrl: "https://cdn.simpleicons.org/openjdk", url: "https://www.oracle.com/java/", category: "Programming" },
  { name: "R", iconUrl: "https://cdn.simpleicons.org/r", url: "https://www.r-project.org/", category: "Programming" },
  { name: "VBA", iconUrl: "https://api.iconify.design/vscode-icons:file-type-vba.svg", url: "#", category: "Programming" },
  
  // Finance & Quantitative Analysis
  { name: "Derivative Pricing", iconUrl: "https://api.iconify.design/lucide/trending-up.svg", url: "#", category: "Quantitative Finance" },
  { name: "Stochastic Calculus", iconUrl: "https://api.iconify.design/lucide/sigma.svg", url: "#", category: "Quantitative Finance" },
  { name: "Risk Management", iconUrl: "https://api.iconify.design/lucide/shield-check.svg", url: "#", category: "Quantitative Finance" },
  { name: "Linear Algebra", iconUrl: "https://api.iconify.design/lucide/grid.svg", url: "#", category: "Quantitative Finance" },
  { name: "Portfolio Optimization", iconUrl: "https://api.iconify.design/lucide/pie-chart.svg", url: "#", category: "Quantitative Finance" },
  
  // Web Development & Databases
  { name: "JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", category: "Web Development" },
  { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript", url: "https://www.typescriptlang.org/", category: "Web Development" },
  { name: "SQL", iconUrl: "https://cdn.simpleicons.org/mysql", url: "https://www.mysql.com/", category: "Web Development" },
  { name: "MongoDB", iconUrl: "https://cdn.simpleicons.org/mongodb", url: "https://www.mongodb.com/", category: "Web Development" },
  
] as const;

export const workExperience = [
  {
    role: "Quantitative Consulting - FinTech Intern",
    company: "TS Imagine",
    period: "Jun 2026 - Aug 2026",
    iconUrl: "https://api.iconify.design/lucide/trending-up.svg",
    logoUrl: "/image/company.png",
    url: "https://tsimagine.com/",
    description: "Incoming intern providing real-time risk solutions and decision-making frameworks for Tier-1 investment banks using Python, VBA, and JavaScript.",
  },
  {
    role: "Algorithm Trading Intern",
    company: "Sundawn Capital",
    period: "Sep 2025 - May 2026",
    iconUrl: "https://api.iconify.design/lucide/settings-2.svg",
    logoUrl: "/image/company.png",
    url: "#",
    description: "Engineered high-frequency market-making strategies and automated execution engines in Python, extracting alpha from high-frequency datasets.",
  },
  {
    role: "Research Mentee (Quant Research)",
    company: "City University of Hong Kong",
    period: "Sep 2024 - Present",
    iconUrl: "https://api.iconify.design/lucide/search.svg",
    logoUrl: "/image/company.png",
    url: "#",
    description: "Engineered an automated factor research pipeline for event-based trading strategies on S&P 500/CSI 300, optimizing backtesting workflows by 90%.",
  },
  {
    role: "Quantitative Analyst Fellow (Virtual Programme)",
    company: "Oakcean Capital",
    period: "Aug 2025 - Sep 2025",
    iconUrl: "https://api.iconify.design/lucide/line-chart.svg",
    logoUrl: "/image/company.png",
    url: "#",
    description: "Developed statistical arbitrage and interest rate strategies for China A-shares and SOFR futures, achieving a Sharpe Ratio of 1.6.",
  },
  {
    role: "Full-Stack Developer Intern",
    company: "SnapFeedback AI",
    period: "Jun 2025 – Aug 2025",
    iconUrl: "https://api.iconify.design/lucide/code-2.svg",
    logoUrl: "/image/company.png",
    url: "#",
    description: "Managed the full-stack development of a speech therapy app, integrating various deep learning models for scalable deployment.",
  },
];

export const education = [
  {
    institution: "City University of Hong Kong",
    degree: "BSc in Computational Finance & Computer Science (Double Degree)",
    period: "Expected Jun 2028",
    url: "https://www.cityu.edu.hk/",
    description: "Key Modules: Derivative Pricing, Stochastic Calculus, Portfolio & Risk Management",
  },
];

export const projects = [
  {
    title: "QFinZero: A Unified Financial Toolchain for LLM-Based Trading Agents",
    description:
      "Submitted to ACL 2026 Demo. A unified trading environment for LLM-based financial agents, standardizing multi-frequency market data access, structured news retrieval, and stateful brokerage simulation for reproducible research.",
    tags: ["LLMs", "Trading Agents", "Python", "Agentic Systems"],
    links: [],
  },
  {
    title: "Multi-Model Delta-Gamma Dynamic Hedging",
    description:
      "Developed a hedging strategy for S&P 500 index options using Python. Tested the BS model, GARCH and Heston Stochastic Volatility models to analyze volatility clustering and leverage effects on hedge stability. Conducted Monte Carlo simulations and Binomial Trees to validate numerical convergence.",
    tags: ["Python", "Financial Modeling", "Monte Carlo", "Greeks"],
    links: [],
  },
  {
    title: "Cross Asset Beta Trading & Factor Research",
    description:
      "Evaluated the applicability of the CAPM framework to digital assets, researching the Betting-Against-Beta (BAB) anomaly across 50+ cryptocurrencies. Performed cross-sectional econometric analysis to test factor premiums for long-short factor portfolio construction.",
    tags: ["Python", "Crypto", "Factor Research", "Econometrics"],
    links: [],
  },
];
