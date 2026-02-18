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
  "JavaScript",
  "React",
  "Shadcn UI",
  "Tailwind CSS",
  "Redux Toolkit",
  "TanStack Query (React Query)",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "REST API Development",
  "WebSockets (Socket.IO)",
  "MongoDB",
  "PostgreSQL",
  "SQLite",
  "Prisma ORM",
  "Zod",
  "React Hook Form",
  "Docker",
  "Nginx",
  "PM2",
  "AWS EC2",
  "AWS S3",
  "Git & GitHub",
  "Postman",
  "Linux Server Management",
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
        "Architected and launched a custom real estate platform replacing a legacy WordPress system, delivering a modern UI/UX that significantly improved usability and user engagement.",
        "Redesigned user experience and navigation flow, resulting in a cleaner interface and faster interactions compared to the previous WordPress site.",
        "Designed full-stack architecture using React, TypeScript, Node.js, and PostgreSQL to ensure scalability and long-term maintainability.",
        "Executed complete data migration of structured property listings, blog content, and media assets with zero data loss.",
        "Improved SEO performance by 25%, increasing page indexing coverage and search ranking visibility through technical SEO enhancements.",
        "Implemented structured data, automated sitemap generation, and metadata optimization to strengthen search engine discoverability.",
        "Built conversion-focused landing pages that improved user engagement and increased lead generation by 35%.",
        "Enhanced performance through code refactoring, caching strategies, and server-level optimization for faster load times.",
        "Containerized applications using Docker and configured Nginx reverse proxy for secure, production-grade deployment.",
        "Built CI/CD pipelines with GitHub Actions to automate testing, builds, and deployments.",
        "Managed Linux VPS infrastructure including DNS configuration, SSL certificates, monitoring, and release cycles.",
      ]
      
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

export const services = [
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Robust and scalable server-side systems with secure APIs, efficient databases, and cloud-ready architecture.",
    features: [
      "Node.js & Express.js",
      "RESTful API & JWT Authentication",
      "Database Design & Optimization",
      "Prisma ORM Integration",
      "Cloud Deployment & Storage",
      "Security & Access Control",
    ],
    popular: false,
  },
  {
    icon: Globe,
    title: "Frontend Development",
    description:
      "Fast, responsive, and user-focused interfaces built with modern frameworks and optimized for performance.",
    features: [
      "React & TypeScript",
      "ShadCN UI & Tailwind CSS",
      "Responsive & Mobile-First Design",
      "State Management (Redux Toolkit)",
      "Data Fetching (TanStack Query)",
      "UI Performance Optimization",
      "Smooth Animations (Framer Motion)",
    ],
    popular: true,
  },
  {
    icon: Code2,
    title: "Full-Stack Web Solutions",
    description:
      "Complete web applications built from concept to deployment with scalable architecture and real-time capabilities.",
    features: [
      "End-to-End Web App Development",
      "Authentication & Role-Based Access",
      "Real-Time Features (WebSockets)",
      "Performance & SEO Optimization",
      "Deployment, CI/CD & Maintenance",
    ],
    popular: false,
  },
];


export const projects = [
  {
    title: "Real Estate Website – House & Hedges",
    description:
      "A modern real estate platform showcasing property listings with advanced search filters, SEO optimization, responsive design, and an admin interface for property management.",
    image: "/images/projects/house-hedges.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "SEO Optimization",
      "Responsive Design",
      "VPS + Nginx Deployment",
    ],
    github: "https://github.com/dev-heinhtetpaing/house-and-hedges",
    demo: "https://houseandhedges.ae",
    featured: true,
  },
  {
    title: "Restaurant Management System",
    description:
      "A full-stack restaurant management platform featuring real-time order processing, kitchen workflow, waiter interface, stock tracking, customer ordering, payment handling, and an admin dashboard.",
    image: "/images/projects/restaurant-dashboard.png",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Prisma ORM",
      "MongoDB",
      "TanStack Query",
      "Redux Toolkit",
      "Socket.IO",
      "AWS EC2",
      "AWS S3",
    ],
    github: "https://github.com/dev-heinhtetpaing/Restaurant_Frontend",
    demo: "https://restaurant.heinhtetpaing.com",
    featured: true,
  },
  {
    title: "Social App",
    description:
      "A full-featured social platform with authentication, posts, comments, likes, follow system, real-time chat, and live notifications.",
    image: "/images/projects/social-app.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Prisma ORM",
      "SQLite",
      "JWT Authentication",
      "WebSockets",
      "TanStack Query",
    ],
    github: "https://github.com/dev-heinhtetpaing/Frontend_Social_APP",
    demo: "https://frontend-app-k86t.onrender.com",
    featured: false,
  },
  {
    title: "Role Permission Playground",
    description:
      "A role-based access control playground demonstrating real-time permission management. Roles, permissions, and users are fully managed through CRUD operations with instant updates.",
    image: "/images/projects/role-permission-playground.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Prisma ORM",
      "SQLite",
      "JWT Authentication",
      "TanStack Query",
    ],
    github: "https://github.com/dev-heinhtetpaing/Role_Permission_Playground_Frontend",
    demo: "https://playground.heinhtetpaing.com",
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
