export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Training {
  title: string;
  provider: string;
  year: string;
}

export const personalInfo = {
  name: "Salman Sadik Siddiquee",
  title: "Full Stack Developer",
  email: "salman.dnj@gmail.com",
  phone: "+8801780666043",
  github: "salsadsid",
  linkedin: "salsadsid",
  twitter: "salsadsid",
  instagram: "salsadsid",
  stackoverflow: "yourusername",
  location: "Bangladesh",
  bio: "Passionate Full Stack Developer with expertise in building scalable web applications using modern technologies. Specialized in MERN stack with a strong focus on creating efficient, user-centric solutions.",
};

export const skills = {
  "Programming Languages": [
    "JavaScript",
    "TypeScript",
    "C",
    "C++",
    "Python",
    "PHP",
  ],
  Frontend: ["React.js", "Next.js", "Redux", "React Native", "HTML", "CSS"],
  Backend: ["Node.js", "Express.js", "Nestjs", "REST API", "GraphQL"],
  Database: ["MongoDB", "Mongoose", "SQL", "MySQL", "PostgreSQL"],
  Styling: ["Tailwind CSS", "Bootstrap", "Material UI", "Shadcn"],
  Testing: ["Jest", "React Testing Library"],
  "Cloud & DevOps": [
    "Digital Ocean",
    "Contabo",
    "Vercel",
    "CI/CD (GitHub Actions)",
  ],
  Security: ["OAuth2", "JWT", "RBAC"],
  Other: ["Git", "WordPress", "Shopify", "ArcGIS", "Google Earth Engine"],
};

export const experiences: Experience[] = [
  {
    title: "MERN Stack Developer",
    company: "AlgoSoft Technologies Limited",
    location: "Narayanganj, Bangladesh",
    period: "September 2025 - Present",
    description: [
      "Built production-grade Node.js/Express backend with 78+ MongoDB models, managing complex device lifecycle tracking, warranty agreements, and support ticket workflows for neurofeedback medical device management.",
      "Developed sophisticated email notification workflows with Handlebars templates, integrated scheduled job automation (QStash), SMS services, and user preference systems to orchestrate complex support ticket lifecycles.",
      "Implemented Quality Management System (QMS) with multi-stage document approval workflows, version control, electronic signatures, and automated PDF generation using pdf-lib for compliance documentation.",
      "Developed Learning Management System (LMS) with course management, progress tracking, quiz/exam systems, and multi-cloud file storage integration.",
    ],
  },
  {
    title: "Frontend React Developer",
    company: "Affpilot",
    location: "Dhaka, Bangladesh",
    period: "October 2023 - September 2025",
    description: [
      "Designed and maintained modular, reusable, and scalable frontend components to ensure seamless user experiences and long-term product reliability.",
      "Developed features for Affpilot, an AI-powered auto blogging platform with 100k+ registered users, including content generation, SEO optimization, and multi-platform integration.",
      "Contributed to backend development, improving API performance and ensuring efficient data flow between frontend and backend systems.",
    ],
  },
  {
    title: "Freelance Software Developer",
    company: "H.A.K Academy",
    location: "Jaina Bazar, Gazipur, Bangladesh",
    period: "2025 (Part-Time)",
    description: [
      "Designed and developed a custom school management system to digitalize academic and administrative workflows.",
      "Implemented role-based portals for students, teachers, guardians, and admins with JWT authentication.",
      "Built modules for attendance tracking, fee management, class and exam routine management, result generation, and SMS/email notifications.",
      "Developed real-time attendance notification system integrated with ZKTeco BioTime device and SMS gateway.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "School Management System",
    description:
      "Developed a scalable React.js application with Node.js, MongoDB, and JWT authentication, enabling efficient attendance, fee, class routine management, and role-based portals for students, teachers, and administrators.",
    link: "#",
  },
  {
    title: "Brain Booming",
    description:
      "A productivity platform offering AI-powered tools like Text Converter, Grammar Checker, Image to Text, Text Summarizer, Spell Checker, and Paraphrasing Tool.",
    link: "#",
  },
];

export const education: Education = {
  degree: "Bachelor in Science",
  institution: "Begum Rokeya University, Rangpur",
  location: "Department of Geography and Environmental Science",
  period: "December 2022",
};

export const training: Training[] = [
  {
    title: "CS Fundamentals With Phitron",
    provider: "phitron.io",
    year: "2024",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    provider: "freeCodeCamp.org",
    year: "2023",
  },
  {
    title: "Coding Problem Solving",
    provider: "Ostad",
    year: "2023",
  },
  {
    title: "Node-Mongo Advanced Crash Course",
    provider: "Programming Hero",
    year: "2022",
  },
];

export const languages = ["Bangla (Native)", "English (Professional)"];

export const achievements = [
  "CodeChef [username: salsadsid] - Max rating: 1426 (2-Star)",
];
