export const mainSection = {
  title: "",
  description: "",
  hero: {
    greeting: "Hi, I'm",
    name: "Shao-Hung Yu",
    quote: "'Opportunity is reserved for those who are prepared.'",
    jobTitle: "Cloud Engineer @ Trend Micro"
  },
  about: {
    title: "About Me",
    professionalBackground: {
      title: "Professional Background",
      paragraph1: "I am an engineer focused on cloud technologies and backend development, with extensive experience in system architecture and development. From my graduate studies in AI to my current role as a Cloud Engineer at Trend Micro, I have always strived to translate technology into real business value.",
      paragraph2: "Beyond my work, I actively participate in tech communities, speaking at events for GDG Taipei and TensorFlow User Group. While sharing my technical experience, I continuously learn new things. I believe that technology is not just a tool for solving problems, but a medium for creating value."
    },
    techStack: {
      title: "Technical Skills"
    },
    highlights: {
      cloud: {
        title: "Cloud Architecture",
        description: "Focused on building scalable and highly available cloud services"
      },
      backend: {
        title: "Backend Development",
        description: "Creating robust and high-performance backend systems"
      },
      data: {
        title: "Data Engineering",
        description: "Designing optimized database structures and data flows"
      },
      ai: {
        title: "AI Applications",
        description: "Integrating AI technology into practical application scenarios"
      }
    }
  },
  experience: {
    title: "Work Experience",
    achievements: "Main Achievements",
    technologies: "Technologies Used",
    jobs: [
      {
        title: "Cloud Engineer",
        company: "Trend Micro",
        location: "Taipei",
        period: "Jul 2024 - Present",
        description: "As a Cloud Engineer, I am responsible for developing and maintaining enterprise-level cloud services, ensuring system reliability and performance.",
        achievements: [
          "Collaborate closely with stakeholders for requirement discussions, cross-team integration, and problem-solving",
          "As a full-cycle developer, responsible for the complete process from planning, design, to implementation, testing, deployment, and operation",
          "Automate and improve development and release processes"
        ],
        technologies: ["GCP", "Python", "Cloud Functions", "Cloud Run"]
      },
      {
        title: "Backend Engineer",
        company: "LINE TV (CHOCO Media)",
        location: "Taipei",
        period: "Sep 2022 - Apr 2024",
        description: "As a Backend Engineer at LINE TV, I was responsible for developing and maintaining core service systems.",
        achievements: [
          "Worked closely with PMs to understand business needs, design APIs, databases, and system architecture",
          "Wrote logic based on the post-POC architecture, ensuring smooth product iteration through unit and integration testing",
          "Participated in a large-scale system refactoring project to improve system performance and maintainability"
        ],
        technologies: ["Python", "SQL", "RESTful API", "Microservices"]
      }
    ]
  },
  skills: {
    title: "Skills & Projects",
    tabs: {
      skills: "Professional Skills",
      projects: "Key Projects"
    },
    categories: {
      cloud: {
        title: "Cloud Technologies",
        skills: [
          { name: "Google Cloud Platform", level: 90 },
          { name: "Firebase", level: 85 },
          { name: "Cloud Functions", level: 85 },
          { name: "Cloud Storage", level: 80 },
          { name: "Cloud Run", level: 80 }
        ]
      },
      backend: {
        title: "Backend Development",
        skills: [
          { name: "Python", level: 90 },
          { name: "Node.js", level: 85 },
          { name: "SQL", level: 85 },
          { name: "RESTful API", level: 90 },
          { name: "System Design", level: 85 }
        ]
      },
      ai: {
        title: "AI & Data",
        skills: [
          { name: "Keras", level: 80 },
          { name: "DialogFlow", level: 85 },
          { name: "Data Analysis", level: 80 },
          { name: "Machine Learning", level: 75 },
          { name: "Data Engineering", level: 80 }
        ]
      }
    },
    projects: [
      {
        title: "Google Assistant Actions",
        description: "Developed multiple Google Assistant applications to provide users with diverse voice interaction services.",
        tags: ["DialogFlow", "Cloud Functions", "Node.js"]
      },
      {
        title: "LINE TV Backend System",
        description: "Participated in the development and maintenance of LINE TV's backend system, handling large-scale user requests and data processing.",
        tags: ["Python", "SQL", "System Design"]
      },
      {
        title: "Cloud Monitoring System",
        description: "Designed and implemented a monitoring system for cloud services to ensure service stability and availability.",
        tags: ["GCP", "Cloud Monitoring", "Python"]
      }
    ]
  },
  education: {
    title: "Education Background",
    educationExperience: "Education Experience",
    coursework: "Main Coursework",
    achievements: "Achievements",
    educationHistory: [
      {
        degree: "Master of Science in Computer Science and Information Engineering",
        school: "National Taiwan University of Science and Technology",
        location: "Taipei",
        period: "2020 - 2022",
        description: "Focused on research in Artificial Intelligence and Machine Learning, exploring the possibilities of AI technology in practical application scenarios.",
        coursework: [
          "Machine Learning",
          "Deep Learning",
          "Natural Language Processing",
          "Cloud Computing"
        ],
        achievements: [
          "Published a research paper",
          "Participated in industry-academia collaboration projects",
          "Served as a Research Assistant"
        ]
      },
      {
        degree: "Bachelor of Science in Applied Materials and Optoelectronic Engineering",
        school: "National Chi Nan University",
        location: "Nantou",
        period: "2014 - 2018",
        description: "Built interdisciplinary thinking on the foundation of materials science and began to learn programming, laying the groundwork for future technological development.",
        coursework: [
          "Materials Science",
          "Optoelectronic Engineering",
          "Fundamentals of Programming",
          "Numerical Analysis"
        ],
        achievements: [
          "Excellent Undergraduate Research Project",
          "Honorable Mention in Programming Contest",
          "Department Student Association Officer"
        ]
      }
    ],
    certifications: {
      title: "Licenses & Certifications",
      professional: "Professional",
      items: [
        {
          name: "TOEIC",
          issuer: "ETS",
          score: "825",
          year: "2023"
        },
        {
          name: "Associate Cloud Engineer",
          issuer: "Google Cloud",
          description: "An Associate Cloud Engineer deploys applications, monitors operations, and manages enterprise solutions.",
          year: "2023"
        }
      ]
    }
  }
  // googleAssistant 已遷移到 googleAssistant.ts
}