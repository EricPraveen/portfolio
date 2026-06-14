import {
  SiHtml5, SiCss as SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss,
  SiNodedotjs, SiExpress, SiSpringboot, SiPhp,
  SiMongodb, SiMysql, SiPostgresql,
  SiPython, SiC, SiCplusplus,
  SiGit, SiGithub, SiFigma, SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

export const personalInfo = {
  name: "EricPraveen",
  fullName: "Eric Praveen",
  title: "Full Stack Developer",
  subtitle: "B.Sc. IT (Hons) | University of Moratuwa",
  location: "Jaffna, Sri Lanka",
  email: "ericpraveen123@gmail.com",
  github: "https://github.com/EricPraveen",
  linkedin: "https://linkedin.com/in/ericpraveen-alricprashanth",
  upwork: "https://www.upwork.com/freelancers/ericpraveen",
  bio: "Passionate full-stack developer from Sri Lanka building modern web experiences. Currently pursuing B.Sc. IT (Hons) at University of Moratuwa with a 3.63 GPA. I love turning ideas into elegant, performant applications.",
  gpa: "3.63",
  university: "University of Moratuwa",
};

export const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "Spring Boot", "PHP"],
  database: ["MongoDB", "MySQL", "PostgreSQL"],
  languages: ["Java", "Python", "C", "C++"],
  tools: ["Git", "GitHub", "Figma", "VS Code", "Arduino"],
  other: ["IoT", "Embedded Systems", "Linux", "OOP"],
};

export const skillBars = [
  { name: "React.js", level: 85, color: "#61DAFB" },
  { name: "Node.js / Express", level: 80, color: "#68A063" },
  { name: "Spring Boot", level: 72, color: "#6DB33F" },
  { name: "PostgreSQL / MySQL", level: 78, color: "#336791" },
  { name: "MongoDB", level: 75, color: "#47A248" },
  { name: "Java", level: 80, color: "#F89820" },
  { name: "Python", level: 70, color: "#3776AB" },
  { name: "Tailwind CSS", level: 88, color: "#38BDF8" },
];

export const techStack = [
  { icon: SiHtml5,      name: "HTML5",      color: "#E34F26" },
  { icon: SiCss3,       name: "CSS3",       color: "#1572B6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact,      name: "React",      color: "#61DAFB" },
  { icon: SiTailwindcss,name: "Tailwind",   color: "#38BDF8" },
  { icon: SiBootstrap,  name: "Bootstrap",  color: "#7952B3" },
  { icon: SiNodedotjs,  name: "Node.js",    color: "#68A063" },
  { icon: SiExpress,    name: "Express",    color: "#ffffff" },
  { icon: SiSpringboot, name: "Spring Boot",color: "#6DB33F" },
  { icon: SiPhp,        name: "PHP",        color: "#777BB4" },
  { icon: SiMongodb,    name: "MongoDB",    color: "#47A248" },
  { icon: SiMysql,      name: "MySQL",      color: "#4479A1" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { icon: FaJava,       name: "Java",       color: "#F89820" },
  { icon: SiPython,     name: "Python",     color: "#3776AB" },
  { icon: SiC,          name: "C",          color: "#A8B9CC" },
  { icon: SiCplusplus,  name: "C++",        color: "#00599C" },
  { icon: SiGit,        name: "Git",        color: "#F05032" },
  { icon: SiGithub,     name: "GitHub",     color: "#ffffff" },
  { icon: SiFigma,      name: "Figma",      color: "#F24E1E" },
  { icon: VscVscode,    name: "VS Code",    color: "#007ACC" },
  { icon: SiLinux,      name: "Linux",      color: "#FCC624" },
];

export const projects = [
  {
    id: 1,
    title: "Campus Info Web App",
    description: "A comprehensive web application providing campus information and resources for students.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "completed",
    github: "https://github.com/EricPraveen/EduTrack",
    live: "",
    featured: true,
  },
  {
    id: 2,
    title: "EShop — Dynamic E-Commerce",
    description: "Full-stack e-commerce platform with cart, auth, and product management built on the MERN stack.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap"],
    status: "completed",
    github: "https://github.com/EricPraveen/EShop",
    live: "",
    featured: true,
  },
  {
    id: 3,
    title: "IdeaPad Blog Platform",
    description: "A modern blogging platform with rich text editing, categories, and user authentication.",
    tech: ["React", "PostgreSQL", "Tailwind", "Spring Boot"],
    status: "Completed",
    github: "https://github.com/EricPraveen/IdeaPad",
    live: "",
    featured: true,
  },
  {
    id: 4,
    title: "Travel Hub",
    description: "A travel planning and discovery platform with destination guides and itinerary management.",
    tech: ["React", "Spring Boot", "Tailwind CSS", "PostgreSQL"],
    status: "in-progress",
    github: "https://github.com/pirathee587/travelhub",
    live: "",
    featured: true,
  },
];

export const education = [
  {
    id: 1,
    degree: "G.C.E. Ordinary Level",
    institution: "St. Patrick's College",
    period: "2020",
    gpa: "8 A's & 1 C",
    description: "Distinction pass with 8 subject A grades.",
  },
  {
    id: 2,
    degree: "G.C.E. Advanced Level",
    institution: "St. Patrick's College",
    period: "2023",
    gpa: "A2B | Z-Score 1.805",
    description: "Combined Mathematics, Physics, and ICT stream.",
  },
  {
    id: 3,
    degree: "B.Sc. Information Technology (Hons)",
    institution: "University of Moratuwa",
    period: "2023 – Present",
    gpa: "3.63 / 4.0",
    description: "Studying software engineering, databases, algorithms, and system design.",
  }
];

export const values = [
  {
    title: "Craftsmanship",
    description: "I care deeply about detail, from architecture to micro-interactions. Great software should feel intentional at every layer.",
    icon: "FaWandSparkles",
  },
  {
    title: "Curiosity",
    description: "I explore new tools, patterns, and ideas constantly. Learning is how I stay sharp and create better outcomes.",
    icon: "FaCompass",
  },
  {
    title: "Impact",
    description: "I focus on work that solves real problems and improves lives. Shipping useful products matters more than shipping noise.",
    icon: "FaRocket",
  },
  {
    title: "Authenticity",
    description: "I show up as myself in work and communication. Honest collaboration builds stronger products and better relationships.",
    icon: "FaHeart",
  },
];

export const journeyTimeline = [
  {
    year: "2003",
    title: "Born",
    description: "The beginning of the story in Sri Lanka.",
  },
  {
    year: "2019",
    title: "GCE O/L completed",
    description: "Completed Ordinary Level examinations with 9A results.",
  },
  {
    year: "2020",
    title: "First line of code",
    description: "Started programming and discovered the craft of building software.",
  },
  {
    year: "2023",
    title: "GCE A/L completed",
    description: "Completed Advanced Level in Combined Mathematics, Physics, and ICT.",
  },
  {
    year: "2024",
    title: "University entered",
    description: "Started my IT undergraduate journey at the University of Moratuwa.",
  },
  {
    year: "2025",
    title: "Level 1 hardware project completed",
    description: "Completed my first university hardware project milestone.",
  },
  {
    year: "2026",
    title: "Level 2 software project in progress",
    description: "Currently building Planora as my Level 2 software project.",
  },
];

export const stats = [
  { label: "Projects Built", value: 4, suffix: "+" },
  { label: "GPA Score", value: 3.63, suffix: "" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Cups of Coffee", value: 500, suffix: "+" },
];

export const services = [
  {
    title: "Frontend Development",
    description: "Pixel-perfect React apps with smooth animations and responsive design.",
    icon: "FaReact",
  },
  {
    title: "Backend Development",
    description: "Scalable REST APIs with Node.js, Express, and Spring Boot.",
    icon: "FaServer",
  },
  {
    title: "Database Design",
    description: "Efficient schema design with MongoDB, PostgreSQL, and MySQL.",
    icon: "FaDatabase",
  },
  {
    title: "UI/UX Design",
    description: "Clean, modern interfaces designed in Figma with user experience in focus.",
    icon: "FaPaintBrush",
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Certificates", href: "/certifications" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
];

export const certifications = [
  {
    id: 1,
    title: "Student SOC Program Foundations training",
    issuer: "Microsoft",
    date: "2025 AUG",
    color: "#68A063",
    pdf: "/certificates/SOC.pdf",
  },
  {
    id: 2,
    title: "Web Design for Beginners",
    issuer: "CODL University of Moratuwa",
    date: "2025 SEP",
    color: "#61DAFB",
    pdf: "/certificates/Web Design for Beginners.pdf",
  },
  {
    id: 3,
    title: "Python For Beginners",
    issuer: "CODL University of Moratuwa",
    date: "2023 MAY",
    color: "#61DAFB",
    pdf: "/certificates/Python_for_Beginners.pdf",
  },
  {
    id: 4,
    title: "Introduction to Software Engineering",
    issuer: "Coursera",
    date: "2025 APR",
    color: "#68A063",
    pdf: "/certificates/Introduction to Software Engineering.pdf",
  },
  {
    id: 5,
    title: "Introduction to HTML, CSS, & JavaScript",
    issuer: "Coursera",
    date: "2025 JUN",
    color: "#68A063",
    pdf: "/certificates/Introduction to HTML, CSS, & JavaScript.pdf",
  },
  {
    id: 6,
    title: "Developing Front-End Apps with React",
    issuer: "Coursera",
    date: "2025 JUL",
    color: "#61DAFB",
    pdf: "/certificates/Developing Front End Apps with React.pdf",
  },
  {
    id: 7,
    title: "Prompt Engineering",
    issuer: "Sololearn",
    date: "2025 AUG",
    color: "#68A063",
    pdf: "/certificates/Prompt Engineering.pdf",
  },
  {
    id: 8,
    title: "ML for Beginners",
    issuer: "Sololearn",
    date: "2025 SEP",
    color: "#61DAFB",
    pdf: "/certificates/ML for Beginners.pdf",
  },
  {
    id: 9,
    title: "Introduction to LLMs",
    issuer: "SoloLearn",
    date: "2025 SEP",
    color: "#61DAFB",
    pdf: "/certificates/Introduction to LLMs.pdf",
  },
  {
    id: 10,
    title: "Introduction to Java",
    issuer: "SoloLearn",
    date: "2025 JUL",
    color: "#61DAFB",
    pdf: "/certificates/Intorduction to JAVA.pdf",
  },
  {
    id: 11,
    title: "Introduction to JavaScript",
    issuer: "SoloLearn",
    date: "2025 MAY",
    color: "#68A063",
    pdf: "/certificates/Intorduction to JacaScript.pdf",
  },
  {
    id: 12,
    title: "Introduction to C",
    issuer: "SoloLearn",
    date: "2024 APR",
    color: "#61DAFB",
    pdf: "/certificates/Intorduction to C.pdf",
  },
  {
    id: 13,
    title: "Ethical AI Foundations",
    issuer: "SoloLearn",
    date: "2025 AUG",
    color: "#68A063",
    pdf: "/certificates/Ethical AI Foundations.pdf",
  },
  {
    id: 14,
    title: "AI in Data Analysis",
    issuer: "Sololearn",
    date: "2025 AUG",
    color: "#68A063",
    pdf: "/certificates/Data Literacy with AI.pdf",
  },
  {
    id: 15,
    title: "Data Analytics with AI",
    issuer: "SoloLearn",
    date: "2025 AUG",
    color: "#61DAFB",
    pdf: "/certificates/Data Analytics with AI.pdf",
  },
  {
    id: 16,
    title: "Brainstorm with AI",
    issuer: "SoloLearn",
    date: "2025 AUG",
    color: "#68A063",
    pdf: "/certificates/Brainstorm with AI.pdf",
  }
];