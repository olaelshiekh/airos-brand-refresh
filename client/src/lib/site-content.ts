import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  GraduationCap,
} from "lucide-react";

export const brandAssets = {
  logo: "/manus-storage/airos-logo_d5de32ee.png",
  mark: "/manus-storage/airos-mark_637af318.png",
  originalVisuals: {
    aiStrategy: "/manus-storage/ai-strategy_e7f82735.webp",
    robotics: "/manus-storage/robotics_e7b0afcf.webp",
    cloudData: "/manus-storage/cloud-data_8f57b364.webp",
    researchLab: "/manus-storage/research-lab_6de0a99d.webp",
    academy: "/manus-storage/academy_bf411e6c.webp",
    agritech: "/manus-storage/agritech-project_dc6da0dd.webp",
    learning: "/manus-storage/cozy-earth-interior_3d7f6ce3.webp",
    industry: "/manus-storage/industry-project_ef14644a.webp",
  },
};

export const navigation = [
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Academy", href: "/academy" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
];

export const solutions = [
  {
    id: "agents",
    number: "01",
    icon: Bot,
    title: "AI Agents",
    label: "From answering to acting",
    description:
      "Connect your tools to handle enquiries, qualify leads, schedule meetings and prepare reports.",
    detail:
      "Build goal-driven workflows around the way your team already works. We help connect knowledge, business tools and human oversight so AI can support useful, repeatable tasks.",
    examples: [
      "Customer enquiries and lead qualification",
      "Scheduling and follow-up workflows",
      "Knowledge retrieval and reporting",
    ],
    tags: ["Automation", "Enterprise integration"],
  },
  {
    id: "robotics",
    number: "02",
    icon: BrainCircuit,
    title: "AI & Robotics",
    label: "Intelligence in the real world",
    description:
      "Design, test and scale practical AI and robotics solutions around your business needs.",
    detail:
      "Move from an idea to a tested solution with applied AI consulting and robotics development. Define the problem first, validate an approach, and plan how it will work in the real world.",
    examples: [
      "AI strategy and solution design",
      "Applied research and prototyping",
      "Robotics integration and testing",
    ],
    tags: ["Applied AI", "Robotics"],
  },
  {
    id: "learning",
    number: "03",
    icon: GraduationCap,
    title: "Adaptive Learning",
    label: "A better fit for every learner",
    description:
      "Create learning tools that adapt to individual needs and support meaningful progress.",
    detail:
      "Use AI to support educators and learners, not remove the human connection. We explore adaptive learning experiences and practical capacity building for education and training.",
    examples: [
      "Personalised learning pathways",
      "AI-assisted educational tools",
      "Training and capacity building",
    ],
    tags: ["Education", "Human-centred AI"],
  },
  {
    id: "data",
    number: "04",
    icon: ChartNoAxesCombined,
    title: "Data Intelligence",
    label: "Make your data useful",
    description:
      "Turn information into clearer decisions with data science, machine learning and analytics.",
    detail:
      "Connect data science with the decisions your organisation needs to make. We help frame analytical questions and build AI approaches that translate information into practical insight.",
    examples: [
      "Data science and analytical modelling",
      "Machine learning applications",
      "Decision-support insights",
    ],
    tags: ["Data science", "Machine learning"],
  },
];

export const learningSteps = [
  {
    title: "Basics",
    subtitle: "Understand the foundations",
    description:
      "Start with the language of AI, data and responsible adoption. Build a clear understanding before moving into tools and code.",
    outcome: "A foundation you can explain and apply.",
  },
  {
    title: "Python",
    subtitle: "Build your technical toolkit",
    description:
      "Develop Python skills for working with data and implementing AI ideas. Connect programming fundamentals to practical tasks.",
    outcome: "Confidence working with Python for AI.",
  },
  {
    title: "Machine Learning",
    subtitle: "Learn how models learn",
    description:
      "Explore how machine learning uses data, and how to evaluate a model against the problem it needs to solve.",
    outcome: "An understanding of the model-building workflow.",
  },
  {
    title: "Generative AI",
    subtitle: "Work with modern AI systems",
    description:
      "Explore generative AI, retrieval-augmented generation and useful agent workflows with responsible implementation in mind.",
    outcome: "A practical approach to generative AI.",
  },
  {
    title: "Projects",
    subtitle: "Put your skills to work",
    description:
      "Connect foundations and tools in applied projects. Practise translating a problem into a working AI approach.",
    outcome: "Project work that connects learning to implementation.",
  },
  {
    title: "Portfolio",
    subtitle: "Make your progress visible",
    description:
      "Organise and explain your project work. Show the problem, your approach and what you learned along the way.",
    outcome: "A clear story of your developing AI capability.",
  },
];

export const programmes = [
  {
    id: "accelerator",
    number: "01",
    image: brandAssets.originalVisuals.academy,
    imageAlt: "People learning together in a technology classroom",
    title: "AI Career Accelerator",
    duration: "3–6 months",
    audience: "Professionals & students",
    description:
      "A hands-on route from AI foundations to practical projects and portfolio-ready capability.",
    outcomes: [
      "Machine learning and data foundations",
      "Applied AI strategy and implementation",
      "Portfolio-building, mentoring and career guidance",
    ],
  },
  {
    id: "automation",
    number: "02",
    image: brandAssets.originalVisuals.aiStrategy,
    imageAlt: "Artificial intelligence concepts on a digital display",
    title: "AI Automation",
    duration: "3 weeks",
    audience: "Teams & professionals",
    description:
      "A focused programme for connecting tools, prototyping faster and putting useful AI workflows to work.",
    outcomes: [
      "No-code and low-code workflow design",
      "AI API integration patterns",
      "Reusable automations for rapid prototyping",
    ],
  },
  {
    id: "impact",
    number: "03",
    image: brandAssets.originalVisuals.agritech,
    imageAlt: "Agricultural fields viewed from above",
    title: "AI & Social Entrepreneurship",
    duration: "Customisable",
    audience: "Startups & organisations",
    description:
      "Apply AI to social-impact challenges and develop ideas aligned with the Sustainable Development Goals.",
    outcomes: [
      "A curriculum shaped around your SDG focus",
      "AI solutions for social-impact challenges",
      "Mentoring for implementation and business models",
    ],
  },
];

// Event references from the supplied brand guide, not claims of attendance or partnership.
export const events = [
  {
    name: "GITEX Global",
    year: "2025",
    location: "Dubai, UAE",
    href: "https://www.gitex.com/",
    theme: "AI, technology and enterprise innovation",
  },
  {
    name: "LEAP",
    year: "2026",
    location: "Riyadh, Saudi Arabia",
    href: "https://onegiantleap.com/",
    theme: "Technology and the future of business",
  },
  {
    name: "AI Everything Egypt",
    year: "2026",
    location: "Cairo, Egypt",
    href: "https://www.aieverythingegypt.com/",
    theme: "The region’s AI conversation",
  },
];

// The live-site capability portfolio, re-presented as a scroll-driven route sequence.
export const capabilityStories = [
  {
    title: "Computer Vision & Edge Intelligence",
    label: "See more clearly at the edge",
    description:
      "Explore on-device computer vision and pattern recognition for industrial and field environments.",
    tags: ["Computer vision", "Edge AI"],
    image: brandAssets.originalVisuals.aiStrategy,
    imageAlt: "A humanoid robot prototype seated at a workbench",
  },
  {
    title: "Autonomous Robotics & ROS 2 Fleet",
    label: "Navigation, sensing and coordinated motion",
    description:
      "Explore ROS 2, LiDAR-SLAM, obstacle avoidance and fleet telemetry for autonomous rover platforms.",
    tags: ["ROS 2", "LiDAR-SLAM"],
    image: brandAssets.originalVisuals.robotics,
    imageAlt: "A robotics platform with a compact autonomous robot",
  },
  {
    title: "Precision Agritech & Resource AI",
    label: "Make resource decisions with better context",
    description:
      "Combine connected field sensors and predictive analysis to support irrigation planning, soil health and resource stewardship.",
    tags: ["Agritech", "Soil IoT"],
    image: brandAssets.originalVisuals.agritech,
    imageAlt: "Agricultural field rows viewed from above",
  },
  {
    title: "Autonomous Agents & Operations AI",
    label: "Move from information to a useful next step",
    description:
      "Connect knowledge and enterprise systems to support multi-step operational workflows, with people in control.",
    tags: ["AI Agents", "Enterprise workflows"],
    image: brandAssets.originalVisuals.cloudData,
    imageAlt: "An analytics dashboard displayed on a screen",
  },
  {
    title: "Smart Mobility & Urban Intelligence",
    label: "Understand movement across connected systems",
    description:
      "Explore urban data and computer-vision approaches for understanding traffic patterns and planning more informed mobility decisions.",
    tags: ["Urban data", "Mobility AI"],
    image: brandAssets.originalVisuals.researchLab,
    imageAlt: "A technology research environment with measurement equipment",
  },
  {
    title: "AI Capacity Building & Academy",
    label: "Build capability alongside the technology",
    description:
      "Develop practical AI skills through focused training pathways and hands-on learning for professionals and teams.",
    tags: ["AI training", "Capacity building"],
    image: brandAssets.originalVisuals.academy,
    imageAlt: "People learning together in a technology classroom",
  },
];

// Projects and descriptions carried over from the live AI-ROS website; no results metrics added.
export const featuredProjects = [
  {
    title: "GROW+ Smart Plant Doctor",
    category: "Agritech",
    description: "AI-powered plant disease detection platform.",
    tags: ["IoT", "Drones", "Edge computing"],
    image: brandAssets.originalVisuals.agritech,
    imageAlt: "Agricultural field rows viewed from above",
  },
  {
    title: "Cozy Earth Air Quality System",
    category: "Environment",
    description: "VR-powered plant recommendation engine.",
    tags: ["AI sensors", "Edge computing", "Sustainability"],
    image: brandAssets.originalVisuals.learning,
    imageAlt: "A living room filled with potted houseplants and natural light",
  },
  {
    title: "Industrial Predictive Maintenance Platform",
    category: "Industrial AI",
    description:
      "A machine-learning platform for equipment-failure prediction.",
    tags: ["IoT", "Machine learning", "Edge computing"],
    image: brandAssets.originalVisuals.industry,
    imageAlt: "An engineer working with industrial equipment",
  },
];

export const ecosystem = [
  "The Knowledge Academy",
  "ZAKA",
  "Huawei",
  "TIEC",
  "Samsung Innovation Campus",
  "ITIDA",
  "SDAIA",
  "AI for Good",
];

// Actual logo artwork extracted from the approved instructor introduction deck.
export const partnerVisuals = [
  {
    name: "The Knowledge Academy",
    image: "/manus-storage/knowledge-academy_e083af95.webp",
  },
  { name: "ZAKA", image: "/manus-storage/zaka_4ba8bea6.webp" },
  {
    name: "Huawei ICT Talent Bank",
    image: "/manus-storage/huawei-talent-bank_e0ad21bc.webp",
  },
  { name: "ITIDA and TIEC", image: "/manus-storage/itida-tiec_07aced67.webp" },
  {
    name: "Samsung Innovation Campus",
    image: "/manus-storage/samsung-innovation-campus_fbb9862e.webp",
  },
  { name: "SDAIA", image: "/manus-storage/sdaia_b31dcec7.webp" },
];
