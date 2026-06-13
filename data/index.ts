export const personalInfo = {
  name: "EricPraveen",
  fullName: "Alric Prashanth",
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
  languages: ["Java", "Python", "C"],
  tools: ["Git", "GitHub", "Figma", "VS Code", "Arduino"],
  other: ["IoT", "Embedded Systems", "Linux", "OOP"],
};

export const projects = [
  {
    id: 1,
    title: "Campus Info Web App",
    description: "A comprehensive web application providing campus information and resources for students.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "completed",
    github: "https://github.com/EricPraveen",
    live: "",
    featured: true,
  },
  {
    id: 2,
    title: "EShop — Dynamic E-Commerce",
    description: "Full-stack e-commerce platform with cart, auth, and product management built on the MERN stack.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap"],
    status: "completed",
    github: "https://github.com/EricPraveen",
    live: "",
    featured: true,
  },
  {
    id: 3,
    title: "IdeaPad Blog Platform",
    description: "A modern blogging platform with rich text editing, categories, and user authentication.",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    status: "in-progress",
    github: "https://github.com/EricPraveen",
    live: "",
    featured: true,
  },
  {
    id: 4,
    title: "Travel Hub",
    description: "A travel planning and discovery platform with destination guides and itinerary management.",
    tech: ["React", "Spring Boot", "Tailwind CSS", "PostgreSQL"],
    status: "in-progress",
    github: "https://github.com/EricPraveen",
    live: "",
    featured: true,
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Sc. Information Technology (Hons)",
    institution: "University of Moratuwa",
    period: "2023 – Present",
    gpa: "3.63 / 4.0",
    description: "Studying software engineering, databases, algorithms, and system design.",
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
    degree: "G.C.E. Ordinary Level",
    institution: "St. Patrick's College",
    period: "2020",
    gpa: "8 A's & 1 C",
    description: "Distinction pass with 8 subject A grades.",
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
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];