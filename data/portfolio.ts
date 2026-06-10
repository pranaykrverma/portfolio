import {
  BookOpen,
  BriefcaseBusiness,
  Command,
  Compass,
  Download,
  GraduationCap,
  LayoutGrid,
  Mail,
  NotebookText,
  Settings,
  Smile,
  Sparkles,
  Terminal,
  Trophy,
  UserRound,
} from "lucide-react";
import type { AppId, ContactRow, DockApp, EducationEntry, ExperienceEntry, PortfolioProfile, Project } from "@/types/portfolio";

export const profile: PortfolioProfile = {
  name: "Pranay Kumar Verma",
  initials: "PV",
  role: "AI/ML & Data Analytics",
  location: "India",
  bio:
    "I've experience that has enriched my skills in AI/ML, data analytics, and business consulting. As a Computer Science student, I've applied these skills through impactful projects like fraud detection using Graph Neural Networks and AI Solutions with OpenAI. My journey includes hands-on roles in business analysis, startup consulting and research strengthening both my technical depth and strategic thinking.",
  skills: [
    "C++",
    "Java",
    "JavaScript",
    "Python",
    "Scala",
    "React.js",
    "Node.js",
    "SQL",
    "MongoDB",
    "Hadoop",
    "Hive",
    "Kafka",
    "Spark",
    "Tableau",
    "PowerBI",
    "PyTorch",
    "GNN",
    "OpenAI API",
    "Machine Learning",
  ],
};

export const dockApps: DockApp[] = [
  { id: "about", title: "About Me", icon: Smile, gradient: "from-sky-400 to-blue-600" },
  { id: "education", title: "Education", icon: Compass, gradient: "from-blue-500 to-cyan-400" },
  { id: "projects", title: "Projects", icon: NotebookText, gradient: "from-yellow-300 to-yellow-500", glyphColor: "text-yellow-950" },
  { id: "skills", title: "Skills", icon: LayoutGrid, gradient: "from-fuchsia-400 to-violet-600" },
  { id: "resume", title: "Resume", icon: Download, gradient: "from-purple-400 to-fuchsia-500" },
  { id: "contact", title: "Contact", icon: Mail, gradient: "from-sky-300 to-blue-600" },
  { id: "terminal", title: "Terminal", icon: Terminal, gradient: "from-zinc-900 to-zinc-700" },
  { id: "settings", title: "Settings", icon: Settings, gradient: "from-zinc-400 to-zinc-600" },
];

export const sectionApps: Record<string, { id: AppId; icon: typeof UserRound }> = {
  "About Me": { id: "about", icon: UserRound },
  Education: { id: "education", icon: GraduationCap },
  Skills: { id: "skills", icon: Sparkles },
  Experience: { id: "about", icon: BriefcaseBusiness },
  Projects: { id: "projects", icon: NotebookText },
  Research: { id: "projects", icon: BookOpen },
  Achievements: { id: "resume", icon: Trophy },
  Certifications: { id: "resume", icon: Command },
  Leadership: { id: "resume", icon: BriefcaseBusiness },
  Resume: { id: "resume", icon: Download },
  Contact: { id: "contact", icon: Mail },
};

export const education: EducationEntry = {
  university: "Kalinga Institute of Industrial Technology",
  degree: "B.Tech in Computer Science Engineering",
  timeline: "Oct 2022 - Present",
  coursework: ["Computer Science", "Machine Learning", "Data Analytics", "Database Systems", "Business Analytics"],
  achievements: [
    "KPS Memorial High School - Senior Secondary, CBSE Class XII",
    "Christ Church High School - Secondary, ICSE Class X",
  ],
};

export const projects: Project[] = [
  {
    name: "Credit Card Fraud Detection Using GNN",
    description:
      "Built a GCN model with PyTorch Geometric to detect credit card fraud by modeling hidden relationships between users, devices, and transactions using KNN-based graph construction.",
    stack: ["Python", "PyTorch", "PyTorch Geometric", "GNN", "KNN"],
    github: "https://github.com",
    demo: "https://github.com",
    category: "AI",
  },
  {
    name: "AI-Powered Chatbot using OpenAI API",
    description:
      "Built a full-stack chatbot using OpenAI's GPT API with a React.js chat interface, Node.js backend, RESTful APIs, and dynamic prompt handling.",
    stack: ["OpenAI API", "React.js", "Node.js", "REST API", "JavaScript"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "AI",
  },
  {
    name: "Startup Research & Business Analysis",
    description:
      "Analyzed startup business models, financial structures, market strategies, and investor readiness through research reports and consulting-style presentations.",
    stack: ["Research", "Business Analysis", "Consulting", "Tableau", "PowerBI"],
    github: "https://github.com",
    demo: "https://example.com",
    category: "Systems",
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Research Intern",
    company: "Startup Grind",
    timeline: "Dec 2024 - Present",
    summary:
      "Organized startup events including Global Induction Drive 5.0 at IIT Bhubaneswar and SELL IT, evaluated early-stage startups, advised founders on business models, and connected them with investors and mentors.",
  },
  {
    role: "Finance Executive",
    company: "Kraya & Kuber",
    timeline: "Nov 2023 - Apr 2025",
    summary:
      "Organized finance forums and panel discussions, handled event marketing, researched startup financial models and market strategies, and created reports and presentations.",
  },
];

export const certifications = [
  "Deloitte Australia - Data Analytics Job Simulation",
  "Deploying and Evaluating GenAI Apps Learning Badge Path",
  "Business Analytics for Decision Making",
];

export const interests = ["Singing", "Athletics", "Reading Books", "Drawing"];

export const contactRows: ContactRow[] = [
  { title: "Email", value: "pranaykverma@gmail.com", href: "mailto:pranaykverma@gmail.com", initials: "E" },
  { title: "Phone", value: "+91 9334123916", href: "tel:+919334123916", initials: "P" },
  { title: "LinkedIn", value: "linkedin.com/in/pranaykrverma", href: "https://linkedin.com/in/pranaykrverma/", initials: "L" },
  { title: "Location", value: "India", href: "mailto:pranaykverma@gmail.com", initials: "I" },
];

export const terminalCommands: Record<string, string[]> = {
  help: ["Available commands: about, skills, projects, education, contact, clear"],
  about: [`${profile.name} - ${profile.role}`, profile.bio],
  skills: profile.skills,
  projects: projects.map((project) => `${project.name}: ${project.description}`),
  education: [education.university, education.degree, education.timeline],
  contact: contactRows.map((row) => `${row.title}: ${row.value}`),
};
