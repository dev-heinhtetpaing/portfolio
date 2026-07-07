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
  "Next.js",
  "Node.js",
  "Express.js",
  "Shadcn UI",
  "Tailwind CSS",
  "Redux Toolkit",
  "TanStack Query",
  "Motion",
  "GSAP",
  "REST API Development",
  "WebSockets",
  "MongoDB",
  "PostgreSQL",
  "SQLite",
  "Prisma ORM",
  "Zod",
  "React Hook Form",
  "Docker",
  "CI/CD",
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
    image: "/images/projects/house-hedges.webp",
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
    image: "/images/projects/restaurant-dashboard.webp",
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


export const experience_1= [
  {
    "company": "Promes MM (Yangon)",
    "role": "Junior Frontend Developer (Internship)",
    "period": "April 2023 - November 2023",
    "location": "Yangon, Myanmar",
    "technologies": ["React", "React Admin", "Parse Server", "Bootstrap"],
    "timeline": [
      {
        "phase": "Milestone 1: Onboarding & The ISP Billing App",
        "date": "April - July 2023",
        "title": "Stepping into Production-Ready Frontend Development",
        "description": "Kicked off the role by joining the development team for a robust Billing Collection Application tailored for a prominent local Internet Service Provider (ISP) in Yangon. Working closely under the mentorship of a Senior Mobile Developer and the Project Manager, I focused on building clean, user-friendly dashboard interfaces to streamline customer accounts and collection workflows.",
        "image": null
      },
      {
        "phase": "Milestone 2: Technical Deep Dive",
        "date": "August - September 2023",
        "title": "Mastering the Stack with React Admin & Parse Server",
        "description": "Accelerated the development of the ISP billing system by leveraging React Admin, Parse Server, and Bootstrap. I gained hands-on experience handling real-world data relationships, managing state across complex administrative tables, and ensures responsive UI layouts that made field collections more efficient.",
        "image": null
      },
      {
        "phase": "Milestone 3: Advanced Projects",
        "date": "October - November 2023",
        "title": "Contributing to an AI-Driven In-House Real Estate Portal",
        "description": "Transitioned to a sophisticated in-house Real Estate Portal development team. This project pushed my frontend skills forward as the platform integrated complex automated features, including social media crawling to aggregate and display dynamic market listings seamlessly.",
        "image": null
      }
    ]
  }
]

export const experience_2= [
  {
    "company": "JM505 Computer Sale and Service",
    "role": "IT Technical Specialist / Support",
    "period": "May 2024 - December 2024",
    "location": "Bangkok, Thailand",
    "technologies": ["Hardware Diagnostics", "OS Deployment", "Inventory Management", "System Maintenance"],
    "timeline": [
      {
        "phase": "Milestone 1: Hardware Troubleshooting & Diagnostics",
        "date": "May - July 2024",
        "title": "Establishing Rapid Technical Support & Repair Workflows",
        "description": "Stepped into the hardware and service sector by taking ownership of incoming technical issues. Utilized deep foundational knowledge in computer architecture to diagnose, troubleshoot, and repair complex laptop and desktop hardware failures, minimizing repair turnaround times for clients.",
        "image": null
      },
      {
        "phase": "Milestone 2: Systems Deployment & Maintenance",
        "date": "August - October 2024",
        "title": "Software Optimization, OS Deployment, and Quality Assurance",
        "description": "Managed full-cycle software configurations, operating system installations, and updates across a high volume of machines. Developed a methodical approach to routine hardware cleaning, thermal management, software optimization, and secure packing to ensure every device met peak operational standards before delivery.",
        "image": null
      },
      {
        "phase": "Milestone 3: Operations & Inventory Control",
        "date": "November - December 2024",
        "title": "Streamlining Stock Management and Logistics",
        "description": "Expanded responsibilities beyond technical repairs to manage the core inventory logistics. Developed and updated rigorous stock lists tracking incoming laptops, delicate replacement parts, and accessories, ensuring optimal stock availability and precise documentation for the service team.",
        "image": null
      }
    ]
  }
]

export const experience_3= [
  {
    "company": "Self-Directed Professional Engineering Track",
    "role": "Full Stack Web Developer & DevOps (Upskilling & Open Source)",
    "period": "January 2025 - September 2025",
    "location": "Remote / Independent",
    "technologies": ["React", "Node.js", "TypeScript", "Redux", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "MongoDB", "Socket.io", "AWS EC2", "AWS S3", "PM2", "Cloudflare DNS", "Git/GitHub"],
    "timeline": [
      {
        "phase": "Phase 1: Modernizing the Architecture Stack",
        "date": "January - March 2025",
        "title": "Transitioning to Type-Safe, Scalable Architecture",
        "description": "Dedicated myself to deep-diving into modern enterprise web tech stacks. Shifted from standard JavaScript to TypeScript for rigid type safety, mastered global state architecture using Redux, and adopted Tailwind CSS for highly responsive, efficient UI engineering. During this time, I also shifted toward modern database modeling using Prisma ORM to interface fluidly with PostgreSQL, MongoDB, and SQLite.",
        "image": null
      },
      {
        "phase": "Phase 2: Building Production-Grade Systems",
        "date": "April - June 2025",
        "title": "Engineering Real-World Practical Platforms",
        "description": "Applied newly expanded technical skills directly into building high-complexity applications. Engineered a full-scale Restaurant Management System to handle dynamic ordering workflows, alongside multiple practical tools designed to solve real-world operational problems. Focused heavily on version control best practices, clean directory structuring, and modular codebase architectures using Git and GitHub.",
        "image": null
      },
      {
        "phase": "Phase 3: Cloud Infrastructure, DevOps & Real-Time Deployment",
        "date": "July - September 2025",
        "title": "Mastering Production Deployments, Cloud Storage, and Live Networking",
        "description": "Pushed application capabilities further by introducing bi-directional real-time communication into projects using Socket.io—culminating in a live Social Media Application. To transition these projects from local systems to production, I mastered cloud infrastructure deployment. I configured AWS EC2 instances for hosting, utilized AWS S3 for scalable cloud asset storage, managed server processes using PM2 for zero-downtime handling, and optimized network routing and domain security using Cloudflare DNS. This intensive engineering period successfully prepared me to take on complex, dual-responsibility development and IT infrastructure roles globally.",
        "image": null
      }
    ]
  }
]

export const experience_4= [
  {
    "company": "House & Hedges Real Estate",
    "role": "Full Stack Web Developer & IT Coordinator",
    "period": "September 2025 - Present",
    "location": "Dubai, UAE",
    "technologies": ["Next.js", "React", "Node.js", "Prisma ORM", "PostgreSQL", "Docker", "GitHub Actions", "VPS", "Cloudflare", "WhatsApp API", "Automated Broadcasting", "SEO Architecture", "Headless Chromium"],
    "timeline": [
      {
        "phase": "Phase 1: Legacy Migration & Custom Stack Foundations",
        "date": "September - October 2025",
        "title": "Replacing Legacy WordPress with a High-Performance Custom Architecture",
        "description": "Recognizing that the company's legacy WordPress site suffered from severe UI limitations and lacked responsiveness, I advocated for a complete modern rewrite. I architected and implemented a custom full-stack system using React, Tailwind CSS, Node.js, Prisma, and PostgreSQL. Within two months, I fully developed the backend database schemas and shaped a highly functional, responsive frontend and administrative dashboard.",
        "image": null
      },
      {
        "phase": "Phase 2: DevOps, Data Migration & Initial Deployment",
        "date": "November - December 2025",
        "title": "Containerization, CI/CD Pipeline Automation, and Live Cutover",
        "description": "Shifted focus to enterprise-grade web security and operations. I containerized the full-stack application using Docker and established automated CI/CD workflows using GitHub Actions. I successfully migrated historical data from the old WordPress setup into the new PostgreSQL database, deployed the system onto a raw VPS server, reconfigured the DNS, and initiated an iterative cycle of fixing bugs and optimizing weak UX patterns.",
        "image": null
      },
      {
        "phase": "Phase 3: The SSR Challenge & Headless Chromium Experiment",
        "date": "January 2026",
        "title": "Navigating Bootstrapped SEO and Server Performance Hurdles",
        "description": "To bypass the costs of premium third-party rendering services, I engineered an in-house solution to render dynamic React pages using headless Chromium on our own VPS. However, this introduced a critical bottleneck: the resource-heavy browser rendering caused a major drop in page speed, negatively impacting search rankings and organic traffic compared to local competitors.",
        "image": null
      },
      {
        "phase": "Phase 4: Next.js Re-Architecture & 40% Growth Milestone",
        "date": "February 2026",
        "title": "Migrating to Next.js, Strategic SEO Engineering, and Infrastructure Scaling",
        "description": "To solve the performance bottleneck permanently, I re-architected the entire frontend using Next.js for native server-side rendering (SSR). I meticulously optimized page-level meta tags, generated dynamic sitemaps to ensure perfect crawling/indexing by Google Search Console, and dramatically improved Largest Contentful Paint (LCP) alongside optimized image delivery pipelines. To further maximize performance, I migrated DNS management from Hostinger to Cloudflare to leverage advanced CDN page caching. This massive upgrade drove an immediate surge in organic traffic and boosted digital lead generation by a staggering 40%.",
        "image": null
      },
      {
        "phase": "Phase 5: Automated Marketing & Communications Infrastructure",
        "date": "Recent 2026",
        "title": "Independently Engineering an In-House WhatsApp Broadcasting System",
        "description": "To scale the company's marketing outreach without depending on expensive external CRM add-ons, I independently designed and developed a custom, in-house WhatsApp SMS Broadcasting System. Built entirely from scratch, this system empowers the operation and marketing teams to dispatch bulk updates and real estate announcements efficiently. I owned the entire pipeline, from integrating the communication endpoints to structuring the backend message queues, ensuring secure and reliable message delivery.",
        "image": null
      },
      {
        "phase": "Phase 6: Continuous Operations & Comprehensive IT Coordination",
        "date": "Ongoing",
        "title": "Managing the Digital Platform and Spearheading Company-Wide IT Support",
        "description": "Beyond day-to-day web master duties—including monitoring page rankings, posting real estate projects, and publishing blogs—I operate as the sole IT Coordinator for the firm. I handle full-cycle hardware/software diagnostics, repair physical laptops, manage enterprise business email accounts, and actively train and guide the real estate agents and operations team on using new tech tools and digital features smoothly.",
        "image": null
      }
    ]
  }
]

export const project_1 =[
  {
    "projectId": "whatsapp-broadcasting-system",
    "coverImage": "/images/projects/whatsapp-broadcast.webp",
    "projectTitle": "Custom In-House WhatsApp Marketing & Broadcasting Platform",
    "projectSummary": "An enterprise communication tool built from scratch to eliminate reliance on expensive third-party marketing services, allowing automated, secure, high-volume message broadcasting directly from local company infrastructure.",
    "technologies": ["Node.js", "React", "PostgreSQL", "Prisma ORM", "JWT Authentication", "Tailwind CSS", "TanStack Query", "Docker", "CI/CD", "VPS Server"],
    "timeline": [
      {
        "phase": "Phase 1: Architecture Design under Tight Constraints",
        "title": "Engineering a Zero-Cost Enterprise Solution",
        "description": "Faced with the business constraint of avoiding expensive monthly subscription fees for third-party marketing platforms, I took on the challenge of engineering a proprietary broadcasting system from scratch. I mapped out a decoupled architecture using Node.js for heavy-lifting background tasks, React for the administration hub, and structured a scalable relational schema in PostgreSQL using Prisma ORM to efficiently log message states, campaign metadata, and recipient lists.",
        "image": null
      },
      {
        "phase": "Phase 2: Authentication, Security & Queue Optimization",
        "title": "Securing the Platform and Building Reliable Message Pipelines",
        "description": "To safeguard company operations and prevent unauthorized access, I implemented secure state management and JWT-driven authentication. On the backend, I engineered custom message-throttling logic and queues to handle bulk message dispatching. This controlled flow ensured the system could transmit automated announcements reliably without hitting rate limits or triggering network overhead on our VPS server.",
        "image": null
      },
      {
        "phase": "Phase 3: Frontend Administration & State Syncing",
        "title": "Developing a High-Fidelity Dashboard with Tailwind and TanStack Query",
        "description": "I built the administration dashboard using React and Tailwind CSS, focusing on clean information architecture so the operations team could monitor active broadcasts effortlessly. To eliminate UI lagging and handle rapid asynchronous data updates—such as real-time delivery status tracking and inventory filtering—I implemented TanStack Query (React Query) for smart caching, background data refetching, and optimistic UI transitions.",
        "image": null
      },
      {
        "phase": "Phase 4: Session Persistence & Containerized Deployment",
        "title": "Solving Authentication Persistence and Automating CI/CD Pipelines",
        "description": "One of the most complex engineering challenges was ensuring seamless session persistence and socket stability inside isolated environments. I resolved this by containerizing the entire app ecosystem using Docker, configuring volume mappings to preserve critical authentication sessions across container restarts. Finally, I established an automated CI/CD pipeline using GitHub Actions to push zero-downtime updates straight to our self-hosted production VPS.",
        "image": null
      }
    ]
  }
]

export const project_2 = [
  {
    "projectId": "house-and-hedges-platform",
    "coverImage": "/images/projects/house-hedges.webp",
    "projectTitle": "Enterprise Real Estate Platform & Search Engine",
    "projectSummary": "A complete architectural overhaul migrating a fragmented, broken legacy platform into a high-throughput, search-optimized custom application that directly boosted company lead generation.",
    "technologies": ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "TanStack Query", "Docker", "GitHub Actions", "VPS", "Cloudflare"],
    "timeline": [
      {
        "phase": "Phase 1: Crisis Management & System Re-Design",
        "title": "Auditing a Fragmented Legacy System and Mapping a New Vision",
        "description": "Upon joining the company, I inherited an unfinished, unoptimized, and non-responsive legacy website that bottlenecked daily business operations and required extensive manual data management. I took immediate ownership, reverse-engineering the useful bits of the old architecture and combining them with AI-assisted modern layouts to design a seamless, mobile-first real estate portal from scratch.",
        "image": null
      },
      {
        "phase": "Phase 2: Dual-Track Development Challenge",
        "title": "Building a Full-Stack Infrastructure While Running Corporate IT Operations",
        "description": "I engineered the initial custom full-stack system using React, Node.js, Prisma, and PostgreSQL. Development required high discipline: because I was the sole technical anchor, I had to build this entire platform while simultaneously keeping the failing legacy site alive, listing daily property inventories, managing corporate email configurations, and troubleshooting company-wide hardware, network, and printer issues. Despite the heavy dual workload, the core platform, secure JWT authentication system, and administrative dashboard were built and polished in just two and a half months.",
        "image": null
      },
      {
        "phase": "Phase 3: Data Migration & Production Launch",
        "title": "Migrating Content Inventories and Automating Deployment Pipelines",
        "description": "With the core application built, I focused on data integrity. I wrote custom scripts to safely extract, clean, and migrate existing high-value off-plan projects, property listings, and articles from the old database into our structured PostgreSQL database. To ensure stable production lifecycles, I containerized the services with Docker and set up automated GitHub Actions CI/CD pipelines to deploy updates directly to a self-hosted VPS.",
        "image": null
      },
      {
        "phase": "Phase 4: The SEO Pivot & Next.js Migration",
        "title": "Re-Architecting to Next.js for Native Server-Side Rendering and Business Growth",
        "description": "While the initial React SPA architecture delivered beautiful performance and fluid UI interactions, it struggled significantly with client-side rendering indexing limitations, causing our pages to lag behind competitors in Google search rankings. Operating under a strict zero-budget constraint for premium rendering services, I made the strategic choice to re-architect the entire frontend using Next.js. Embracing Native Server-Side Rendering (SSR) allowed search engines to instantly crawl fully rendered page templates, bringing our technical SEO to peak health, unlocking higher organic keyword rankings, and driving a massive surge in client lead generation.",
        "image": null
      }
    ]
  }
]

export const project_3 = [
  {
    "projectId": "restaurant-management-system",
    "coverImage": "/images/projects/restaurant-dashboard.webp",
    "projectTitle": "Omnichannel Restaurant Management & Real-Time POS Platform",
    "projectSummary": "A highly ambitious, production-ready full-stack ecosystem engineered to bridge the gap between customers, servers, and kitchen staff through real-time communication, centralized ordering, and point-of-sale workflows.",
    "technologies": ["TypeScript", "React", "Node.js", "MongoDB", "Prisma ORM", "Socket.io (WebSockets)", "TanStack Query", "TanStack Table", "Tailwind CSS", "AWS EC2", "AWS S3", "PM2", "JWT"],
    "timeline": [
      {
        "phase": "Phase 1: Architectural Evolution with TypeScript",
        "title": "Transitioning to Strict Type Safety and Enterprise Architecture",
        "description": "Marking a major milestone in my evolution from a frontend developer into a full-stack engineer, I initiated this project to master strict type safety using TypeScript across an entire application ecosystem. I designed a schema-driven backend using MongoDB and utilized Prisma ORM to map relational-like data structures safely, implementing secure JWT-driven session boundaries to handle multiple user permission levels securely.",
        "image": null
      },
      {
        "phase": "Phase 2: Real-Time Sync & Complex Data Wrangling",
        "title": "Implementing WebSockets and Managing Advanced UI Data States",
        "description": "To seamlessly coordinate client orders with the kitchen, I integrated WebSockets (Socket.io) to enable bi-directional, sub-second communication channels. This allowed incoming orders to pop up instantly on kitchen screens without manual page refreshing. On the front end, I built a high-density Point of Sale (POS) interface, leveraging TanStack Table and TanStack Query to manipulate massive product grids, handle rapid invoice filtering, and manage real-time global UI state transitions.",
        "image": null
      },
      {
        "phase": "Phase 3: Omnichannel Feature Engineering",
        "title": "Developing End-to-End Kitchen, Server, and Self-Ordering Pipelines",
        "description": "I dedicated intense effort into transforming this platform into a comprehensive omnichannel suite. I successfully engineered individual dedicated interfaces for digital self-ordering, tableside order taking by waitstaff, automated kitchen display queues, and traditional counter POS checkout systems. To support a real-world launch, I uploaded food assets securely via AWS S3 and deployed the live services onto an AWS EC2 instance managed stably under PM2 process managers.",
        "image": null
      },
      {
        "phase": "Phase 4: Beta Assessment & Future Horizons",
        "title": "Perfecting the Beta and Preparing for Production Localization",
        "description": "The application is currently operating in a fully functional Beta phase, with all core routing, database mutations, and networking sockets working stably. To elevate the platform to a polished production release, I plan to integrate raw ESC/POS thermal receipt printing drivers and build localized customer order customizers. This project remains a core testament to my ability to self-start and scale highly complex, asynchronous software architectures independently."
      }
    ]
  }
]

export const project_4 = [
  {
    "projectId": "social-media-platform",
    "coverImage": "/images/projects/social-media-app.png",
    "projectTitle": "Real-Time Social Media & Networking Application",
    "projectSummary": "The foundational full-stack milestone project built to bridge the gap into backend engineering, featuring full user social graphs, dynamic feeds, and real-time instant messaging.",
    "technologies": ["JavaScript", "Node.js", "Express", "SQLite", "Prisma ORM", "WebSockets (Socket.io)", "Tailwind CSS", "AWS EC2", "AWS S3"],
    "timeline": [
      {
        "phase": "Phase 1: Transitioning to Full-Stack Architectures",
        "title": "Breaking into Backend Engineering with Node.js and Prisma",
        "description": "When I committed to returning to the web development field, I knew expanding my skill set into server-side engineering was critical. I built this comprehensive Social Media Application as my flagship project to master Node.js. To support complex relational features like user profiles, social connections, and content engagement, I designed a lightweight relational database schema using SQLite, interfacing with it cleanly via Prisma ORM.",
        "image": null
      },
      {
        "phase": "Phase 2: Modeling the Social Graph and Content Feeds",
        "title": "Implementing Profiles, Dynamic Interactivity, and Social Interactions",
        "description": "I engineered the core social network features entirely from scratch. This involved mapping a system capable of handling complex database queries to process friend requests, manage asymmetric 'following' metrics, and feed dynamic user timelines with posts, likes, comments, and shares. I styled the entire responsive interface using Tailwind CSS to maintain smooth interaction states.",
        "image": null
      },
      {
        "phase": "Phase 3: Introducing Bi-Directional Real-Time Networking",
        "title": "Integrating WebSockets for Instant Messaging and Asset Pipelines",
        "description": "To transform the application from a static experience into a living platform, I integrated WebSockets. This unlocked real-time response capabilities for instant messaging and live chat channels between connected users without relying on heavy HTTP polling. To complete the production pipeline, I implemented cloud asset handling via AWS S3 for secure profile and media uploads, deploying the server instances seamlessly onto AWS EC2.",
        "image": null
      }
    ]
  }
]