import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  GraduationCap,
} from "lucide-react";

export const brandAssets = {
  logo: "/manus-storage/airos-logo_d5de32ee.png",
  mark: "/manus-storage/airos-mark_637af318.png",
};

export const navigation = [
  { label: "Solutions", href: "/solutions" },
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
