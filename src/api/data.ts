// import { experiences } from '@/api/data';
// import { experiences } from '@/api/data';
import {
  Code2,
  Database,
  Globe,
  Coffee,
  Music,
  Camera,
  Gamepad2,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
} from "lucide-react";

export const skills = [
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "Shadcn/ui",
  "Tailwind CSS",
  "Redux",
  "React Query",
  "Prisma",
  "MongoDB",
  "SQLite",
  "PostgreSQL",
  "Zod",
  "React-hook-form",
  "WebSocket",
  "Git",
  "Postman",
  "API",
  "Motion",
  "PM2",
  "Nginx",
  "EC2",
  "S3",
];

export const activities = [
  {
    title: "Transitioning from IT Assistant to Main Career Path",
    company: "Self-Employed",
    location: "Bangkok",
    period: "2025 - Present",
    type: "work",
    description:
      "After leaving my IT Assistant role, I refocused on my primary career as a developer. I have been learning new tech stacks, practicing with real-world projects, and strengthening hands-on experience to build production-ready skills.",
    achievements: [
      { Icon: GraduationCap, value: "Learned and applied modern tech stacks such as Vite, TypeScript, Express, WebSocket, Prisma, TailwindCSS, Shadcn/UI, etc." },
      { Icon: BriefcaseBusiness, value: "Practiced usage of key tools and libraries including Redux Toolkit, Framer Motion, Zod, React Hook Form, React Query, etc." },
      { Icon: GraduationCap, value: "Explored AI-powered development tools, including AI-integrated IDEs and productivity extensions." },
      { Icon: BriefcaseBusiness, value: "Developed real-world projects to gain production-level experience, such as a Social Media Application and a Restaurant Management System." },
    ],
  },
  {
    title: "Starting a New Career as an IT Assistant in Bangkok",
    company: "JM505 Computer Sales & Service",
    location: "Bangkok",
    period: "2024 - 2025",
    type: "work",
    description:
      "When conflict escalated across the country, I relocated to Bangkok. As a junior, securing a permanent web development role was challenging, so I began a new career path as an IT Assistant.",
    achievements: [
      { Icon: MapPin, value: "Relocated to Bangkok" },
      { Icon: BriefcaseBusiness, value: "Responsible for sales, software and hardware maintenance, repairs, packaging, and product delivery" },
      { Icon: BriefcaseBusiness, value: "Improved customer engagement by 25%" },
      { Icon: BriefcaseBusiness, value: "Digitized product information and improved quality control with real-time updates" },
      { Icon: BriefcaseBusiness, value: "Optimized product information system and improved response time to customers by 50%" },
    ],
  },
  {
    title: "Relocating to Yangon to Begin My Career as a Developer",
    company: "Promes MM",
    location: "Yangon",
    period: "2023 - 2024",
    type: "work",
    description:
      "Began my professional development career by contributing to scalable web applications using React, TypeScript, and Node.js. Supported project development and gained hands-on industry experience.",
    achievements: [
      { Icon: MapPin, value: "Relocated to Yangon" },
      { Icon: BriefcaseBusiness, value: "Started career as a Junior Frontend Developer at Promes MM Company" },
      { Icon: BriefcaseBusiness, value: "Contributed to projects such as Healthcare System, Billing Management, and Real Estate applications" },
      { Icon: BriefcaseBusiness, value: "Maintained and improved legacy frontend projects, and helped build new projects using React, React Admin, Bootstrap, and related packages" },
    ],
  },
  {
    title: "Supporting Family Business During Fire Hazards and Regional Conflict",
    company: "Family Business",
    location: "Shwebo",
    period: "2022 - 2023",
    type: "work",
    description:
      "After the military takeover and rising regional conflict, our family business was impacted by instability and fire hazards. I focused on helping sustain operations during this difficult period.",
    achievements: [
      { Icon: BriefcaseBusiness, value: "Helped stabilize and maintain family business operations until regional conflict subsided" },
    ],
  },
  {
    title: "Home Quarantine and Self-Study",
    company: "Self-Learning",
    location: "Shwebo",
    period: "2021 - 2022",
    type: "education",
    description:
      "During the peak of COVID-19, I returned to my hometown for safety, self-studied new technologies, and supported my family’s business during quarantine.",
    achievements: [
      { Icon: MapPin, value: "Relocated to hometown" },
      { Icon: GraduationCap, value: "Self-studied new technologies during home quarantine" },
      { Icon: BriefcaseBusiness, value: "Assisted family business during COVID-19 lockdowns" },
    ],
  },
  {
    title: "Professional Web Developer Course",
    company: "Fairway Technology",
    location: "Yangon",
    period: "2019 - 2020",
    type: "education",
    description:
      "When universities shut down due to COVID-19, I relocated to Yangon to focus on web development and enrolled in a professional web development course at a well-known private institute.",
    achievements: [
      { Icon: MapPin, value: "Relocated to Yangon" },
      { Icon: GraduationCap, value: "Gained practical knowledge in real-world web development" },
      { Icon: GraduationCap, value: "Learned industry-relevant tech stack including HTML, CSS, Bootstrap, Node.js, Express, JWT, and MongoDB, and practiced building projects with these technologies" },
      { Icon: GraduationCap, value: "Attended English classes to improve speaking and listening skills" },
    ],
  },
  {
    title: "Computer Science Degree",
    company: "University of Computer Studies",
    location: "Monywa",
    period: "2015 - 2019",
    type: "education",
    description:
      "Bachelor's degree in Computer Science with a focus on software engineering and web technologies.",
    achievements: [
      { Icon: GraduationCap, value: "Gained foundational knowledge of web development languages such as HTML, CSS, and JavaScript." },
      { Icon: GraduationCap, value: "Studied various programming languages including OOP, C++, C#, and Java." },
      { Icon: GraduationCap, value: "Acquired knowledge in Database Management Systems, Networking, and Software Engineering." },
      { Icon: GraduationCap, value: "Completed A+ certification covering practical computer installation, repair, and maintenance." },
    ],
  },
];

export const experiences = [
  {
    title: "Full-Stack Developer",
    company: "House & Hedges Real Estate",
    location: "Dubai, UAE",
    period: "September 2025 – Present",
    type: "work",
    icon: BriefcaseBusiness,
    description:
      "Architected and deployed a custom real estate platform, replacing a legacy WordPress system with a scalable, high-performance full-stack solution.",
    achievements: [
      "Architected and launched a custom real estate platform replacing a legacy WordPress system",
      "Designed full-stack architecture using React, TypeScript, Node.js, and PostgreSQL",
      "Executed full data migration including structured property data, blog content, and media assets",
      "Improved performance through code refactoring, caching strategies, and server-level tuning",
      "Implemented technical SEO including structured data, sitemap automation, and metadata optimization",
      "Containerized applications using Docker and configured Nginx reverse proxy for production deployment",
      "Built CI/CD pipelines with GitHub Actions for automated builds and deployments",
      "Managed Linux VPS infrastructure including DNS configuration, SSL certificates, and release cycles",
    ],
  },
  {
    title: "IT Support & Technical Assistant",
    company: "JM505 Computer Sales & Services",
    location: "Bangkok, Thailand",
    period: "May 2024 - Dec 2024",
    type: "work",
    icon: BriefcaseBusiness,
    description:
      "Delivered technical support and hardware maintenance services while assisting customers and supporting retail operations in a computer sales and service environment.",
    achievements: [
      "Diagnosed and resolved hardware and software issues for customers",
      "Performed system repairs, upgrades, and performance optimization",
      "Provided technical consultation and after-sales support",
      "Supported inventory handling and packaging of computer components and accessories",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Promes MM",
    location: "Yangon, MICT Park",
    period: "May 2023 - Nov 2023",
    type: "work",
    icon: BriefcaseBusiness,
    description:
      "Developed responsive web interfaces and supported backend integration for web and mobile applications in an agile development environment.",
    achievements: [
      "Built responsive dashboards using React.js and Tailwind CSS",
      "Integrated RESTful APIs to support mobile and web application features",
      "Collaborated with designers to deliver clean, accessible UI components",
      "Participated in sprint planning, stand-ups, and peer code reviews",
    ],
  },
  {
    title: "Professional Web Developer Program",
    company: "Fairway Technology",
    location: "Yangon, Myanmar",
    period: "2020 - 2021",
    type: "education",
    icon: GraduationCap,
    description:
      "Intensive hands-on training focused on modern web development using the MERN stack and real-world project workflows.",
    achievements: [
      "Developed full-stack projects using React, Node.js, and MongoDB",
      "Learned modern frontend design and responsive layout techniques",
      "Practiced real-world development workflows and deployment fundamentals",
    ],
  },
  {
    title: "Bachelor of Computer Science (Undergraduate)",
    company: "University of Computer Studies",
    location: "Monywa, Myanmar",
    period: "2015 - 2019",
    type: "education",
    icon: GraduationCap,
    description:
      "Studied computer science fundamentals with emphasis on software engineering, programming, and database systems.",
    achievements: [
      "Learned object-oriented programming and multiple programming languages",
      "Studied database systems and software development lifecycle",
      "Built foundational knowledge in web development technologies",
      "Completed practical A+ hardware certification training",
    ],
  },
];


// export const experiences = [
//   {
//     title: "Junior Full Stack Developer",
//     company: "Self-Employed",
//     location: "Bangkok",
//     period: "2025 - Present",
//     type: "work",
//     icon: BriefcaseBusiness,
//     description:
//       "Focused on building personal projects to strengthen full-stack development expertise, applying modern web technologies in real-world scenarios.",
//     achievements: [
//       "Built personal projects that demonstrated practical application of full-stack development skills",
//       "Practiced TypeScript integration across both frontend and backend",
//       "Explored AI tools and packages to enhance productivity",
//       "Strengthened knowledge in CRUD operations, API consumption, and application architecture",
//     ],
//   },
//   {
//     title: "IT Assistant",
//     company: "JM505 Computer Sales & Services",
//     location: "Bangkok",
//     period: "May 2024 - Dec 2024",
//     type: "work",
//     icon: BriefcaseBusiness,
//     description:
//       "Assisted in providing technical support, hardware maintenance, and customer service for a computer sales and services business.",
//     achievements: [
//       "Provided technical support for computer hardware and software issues",
//       "Performed computer repairs, upgrades, and hardware diagnostics",
//       "Supported sales operations and assisted with packaging of computer accessories",
//     ],
//   },
//   {
//     title: "Frontend Developer",
//     company: "Promes MM",
//     location: "Yangon, MICT Park",
//     period: "May 2023 - Nov 2023",
//     type: "work",
//     icon: BriefcaseBusiness,
//     description:
//       "Contributed to the development of web and mobile applications by building responsive dashboards, developing RESTful APIs, and collaborating with cross-functional teams in an agile environment.",
//     achievements: [
//       "Developed RESTful APIs using Express.js to support mobile application features",
//       "Created responsive dashboards with React.js and Tailwind CSS",
//       "Collaborated with designers to implement clean and accessible UI components",
//       "Actively participated in sprint planning, daily standups, and code reviews",
//     ],
//   },
//   {
//     title: "Professional Web Developer Course",
//     company: "Fairway technology",
//     location: "Yangon",
//     period: "2020 - 2021",
//     type: "education",
//     icon: GraduationCap,
//     description:
//       "Production-applied course focused on MERN stack technologies, covering HTML, CSS, Bootstrap, React, Node.js, related packages, and practical projects.",
//     achievements: [
//       "Gained hands-on experience with real-life web development workflows",
//     ],
//   },
//   {
//     title: "Computer Science Degree(Undergraduate)",
//     company: "University of Computer Studies",
//     location: "Monywa",
//     period: "2015 - 2019",
//     type: "education",
//     icon: GraduationCap,
//     description:
//       "Bachelor's degree in Computer Science with focus on software engineering and web technologies.",
//     achievements: [
//       "Studied OOP and various programming languages",
//       "Learned fundamental web development",
//       "Learned Software development life-cycle, Database management system, Software engineering ",
//       "Practical A+ certification course",
//     ],
//   },
// ];
export const services = [
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Scalable server-side solutions with robust APIs, databases, and cloud integrations.",
    features: [
      "Node.js & Express",
      "Database Design",
      "API Development",
      "Cloud Deployment",
      "Authentication & Authorization",
    ],
    popular: false,
  },
  {
    icon: Globe,
    title: "Frontend Development",
    description:
      "Modern, responsive web applications using React, TypeScript, and cutting-edge CSS frameworks.",
    features: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "State Management (Redux)",
      "UI/UX Optimization",
      "Animations (Motion)",
    ],
    popular: true,
  },
  {
    icon: Code2,
    title: "Full-Stack Solutions",
    description:
      "End-to-end web application development from concept to deployment and maintenance.",
    features: [
      "Complete Web Apps",
      "Database Integration",
      "Authentication",
      "Performance Optimization",
      "Real-time Features (WebSockets)",
    ],
    popular: false,
  },
];

export const projects = [
  {
    title: "Restaurant Management System",
    description:
      "Full-stack restaurant management solution with real-time stock list, waiter interface, customer interface, kitchen user interface, payment processing, and admin dashboard.",
    image: "/images/projects/restaurant-dashboard.png",
    technologies: ["TypeScript", "React", "Node.js","TailWindCSS","Shadcn/UI","Prisma", "MongoDb", "React-Query","Redux-toolkits","Socket.io","EC2","S3"],
    github: "https://github.com/dev-heinhtetpaing/Restaurant_Frontend",
    demo: "https://restaurant.heinhtetpaing.com",
    featured: true,
  },
  {
    title: "Social App",
    description:
      "A social application that including features like register, login, add post, delete post, add comment, delete comment, like post, like comment, follow, unfollow, chat, reat-time notification and etc...",
    image: "/images/projects/social-app.png",
    technologies: ["React", "React Query","TailwindCSS","Express","Prisma","SQLite","JWT","WebSocket", ],
    github: "https://github.com/dev-heinhtetpaing/Frontend_Social_APP",
    demo: "https://frontend-app-k86t.onrender.com",
    featured: true,
  },
  {
    title: "Role Permission Playground",
    description:
      " Playground for role permission, you can assign permission to each role of user, and you can see different permission effect on the messages. All the permssion, role and users are real time updated from fully CRUD operation from backend.",
    image: "/images/projects/role-permission-playground.png",
    technologies: ["React", "TypeScript", "Express", "React Query","Tailwind", "Shadcn/ui","Prisma","SQLite","JsonWebToken"],
    github: "https://github.com/dev-heinhtetpaing/Role_Permission_Playground_Frontend",
    demo: "https://playground.heinhtetpaing.com",
    featured: false,
  }, {
    title: "Sample frontend SPA",
    description:
      " This is sample SPA example and it was also a practied app for me.",
    image: "/images/projects/sample-spa.png",
    technologies: ["React", "React Router", "Bootstrap", "JavaScript","CSS",],
    github: "https://github.com/dev-heinhtetpaing/Sample-Website-With-React",
    demo: "https://funny-poo.netlify.app",
    featured: false,
  },
  
];

export const interests = [
  {
    icon: Coffee,
    label: "Coffee Enthusiast",
    description: "Fueled by great coffee and even better code",
  },
  {
    icon: Music,
    label: "Music Lover",
    description: "Coding with the perfect playlist",
  },
  {
    icon: Camera,
    label: "Photography",
    description: "Capturing moments between commits",
  },
  {
    icon: Gamepad2,
    label: "Gaming",
    description: "Relaxing with indie games and puzzles",
  },
];

export const values = [
  "Clean, maintainable code",
  "User-centered design",
  "Continuous learning",
  "Team collaboration",
  "Problem-solving mindset",
];
