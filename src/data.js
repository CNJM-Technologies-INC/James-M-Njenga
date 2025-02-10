// export const projects = [
//     {
//       title: "Research Citation Assistant",
//       description: "Full-stack academic research tool with AI integration",
//       detailedDescription: "Developed a comprehensive research assistance platform leveraging Google's Gemini AI for intelligent citation management and content analysis. The system integrates with academic databases and provides automated reference formatting.",
//       technologies: ["Flask", "Google Gemini API", "SQLite", "Scholarly API"],
//       features: [
//         "AI-powered citation suggestions",
//         "Automatic reference formatting",
//         "Research paper summarization",
//         "Cross-platform compatibility"
//       ],
//       screenshots: [
//         "/screenshots/research1.jpg",
//         "/screenshots/research2.jpg",
//         "/screenshots/research3.jpg"
//       ],
//       link: "#",
//       role: "Full-stack Developer & AI Integration",
//       duration: "6 months"
//     },
//     {
//       title: "Luxury Footwear E-commerce Platform",
//       description: "Scalable e-commerce solution",
//       detailedDescription: "Architected a high-performance e-commerce platform specializing in luxury footwear. Implemented a custom CMS for product management and integrated secure payment gateways.",
//       technologies: ["CherryPy", "MongoDB", "Vue.js", "Vite"],
//       features: [
//         "Real-time inventory management",
//         "3D product visualization",
//         "AI-powered recommendations",
//         "Multi-currency support"
//       ],
//       screenshots: [
//         "/screenshots/ecom1.jpg",
//         "/screenshots/ecom2.jpg",
//         "/screenshots/ecom3.jpg"
//       ],
//       link: "#",
//       role: "Lead Developer & Architect",
//       duration: "8 months"
//     },
//     {
//       title: "House Help App (In Progress)",
//       description: "On-demand domestic service platform",
//       detailedDescription: "Building a mobile-first platform connecting households with verified domestic helpers. Features include real-time tracking, background checks, and automated scheduling.",
//       technologies: ["Go", "Svelte", "Pocketbase", "REST API"],
//       features: [
//         "Geolocation-based matching",
//         "Secure in-app payments",
//         "Rating system",
//         "Instant booking system"
//       ],
//       screenshots: [
//         "/screenshots/househelp1.jpg",
//         "/screenshots/househelp2.jpg"
//       ],
//       link: "#",
//       role: "Full-stack Developer",
//       duration: "3 months (ongoing)"
//     }
//   ];
export const projects = [
  {
    title: "CNJM Money Market Fund Calculator",
    description: "A financial tool for calculating money market fund returns.",
    detailedDescription: "Developed an intuitive Svelte-based calculator for estimating money market fund earnings. The application provides real-time calculations and visualizes investment growth over time.",
    technologies: ["Svelte"],
    features: [
      "Instant investment return calculations",
      "User-friendly interface",
      "Dynamic chart visualization"
    ],
    screenshots: [
      "/screenshots/mmf1.png",
      "/screenshots/mmf2.png",
      "/screenshots/mmf3.png"
    ],
    link: "https://cnjm-money-market-fund-calculator.vercel.app/",
    role: "Frontend Developer",
    duration: "Ongoing"
  },
  {
    title: "Corrupt Zone",
    description: "A Flask-based web app for tracking corruption cases and incidents.",
    detailedDescription: "Created a robust corruption tracking platform using Flask. The application allows users to report and browse corruption cases while ensuring anonymity and security.",
    technologies: ["Flask"],
    features: [
      "Secure case submission",
      "Anonymous reporting",
      "Search and filter corruption cases"
    ],
    screenshots: [
      "/screenshots/corrupt1.png",
      "/screenshots/corrupt2.png",
      "/screenshots/corrupt3.png"
    ],
    link: "https://corrupt-zone.vercel.app/",
    role: "Full-stack Developer",
    duration: "Ongoing"
  },
  {
    title: "CNJM Constructions",
    description: "A Svelte-powered website for a construction company.",
    detailedDescription: "Developed a sleek and modern website for a construction company using Svelte. The platform highlights completed projects, services, and client testimonials.",
    technologies: ["Svelte"],
    features: [
      "Showcasing completed projects",
      "Interactive service catalog",
      "Client testimonials section"
    ],
    screenshots: [],
    link: "https://cnjm-constructions.vercel.app/",
    role: "Frontend Developer",
    duration: "Ongoing"
  },
  {
    title: "CNJM Photography",
    description: "A photography portfolio website built with Svelte.",
    detailedDescription: "Designed and developed a visually stunning portfolio website for photographers. The platform allows for high-resolution image galleries and an elegant UI to enhance visual storytelling.",
    technologies: ["Svelte"],
    features: [
      "High-resolution image galleries",
      "Responsive and mobile-friendly UI",
      "Portfolio showcase"
    ],
    screenshots: [],
    link: "https://cnjm-photography.vercel.app/",
    role: "Frontend Developer",
    duration: "Ongoing"
  }
];

export const skills = [
    {
        category: "Backend Development",
        items: [
            { name: "Go", level: 90 },
            { name: "Python (Flask/Django)", level: 99 },
            { name: "RESTful APIs", level: 95 }
        ]
    },
    {
        category: "Frontend Development",
        items: [
            { name: "Svelte", level: 88 },
            { name: "Vue.js/Vite", level: 82 },
            { name: "HTML/CSS", level: 95 }
        ]
    },
    {
        category: "AI/ML",
        items: [
            { name: "Machine Learning", level: 80 },
            { name: "NLP", level: 75 },
            { name: "Big Data", level: 78 }
        ]
    }
];

export const experiences = [
    {
        title: "Digital Marketing Intern",
        company: "Context Experts Agencies Limited",
        duration: "June 2024 – Jan 2025",
        achievements: [
            "Automated Phone Number Management System using Python",
            "Developed CiteBuddy writing assistant with Flask",
            "Managed digital marketing assets creation"
        ]
    },
    {
        title: "Software Development Intern",
        company: "Machini Technologies",
        duration: "May 2023 - July 2023",
        achievements: [
            "Built school management system with C#/PostgreSQL",
            "Developed POS system using Django",
            "Implemented Trello for project management"
        ]
    }
];

export const education = [
    {
    degree: "Bachelor of Science in Information Technology",
    university: "Meru University of Science and Technology",
    duration: "2020 - 2024",
    achievements: [
        "Artificial Intelligence - A",
        "Database Systems - A",
        "Big Data Analytics - A"
    ]
},
{
    degree: "Kenya Certificate of Secondary Education (KCSE)",
    university: "Kangui Boys High School",
    duration: "2016 - 2019",
    achievements: [
        "Mathematics - A",
    ]
},
{
    degree: "Kenya Certificate of Primary Education (KCPE)",
    university: "Flying Kite Leadership Academy (FKLA)",
    duration: "2009 - 2015",
    achievements: [
        "Scouting Badges"
    ]
}

];

export const leadership = [
    "Machine Learning Innovation Club Member (2023-2024)",
    "Certified Peer Counsellor (2023)",
    "Active Chess Player - University Team (2021-2023)"
];