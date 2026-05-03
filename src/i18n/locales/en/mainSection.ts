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
    companies: [
      {
        company: "Trend Micro",
        location: "Taipei",
        span: "Jul 2024 - Present",
        tenureLabel: "1 yr 11 mos",
        region: "Taiwan",
        workMode: "Hybrid",
        logo: "/experience-logos/trend-micro.png",
        roles: [
          {
            title: "Senior Software Engineer",
            period: "Jan 2026 - Present",
            employmentType: "Full-time",
            description:
              "Assist in the development of FIPS/STIG compliance certification, ensuring system reliability and performance.",
            achievements: [
              "Collaborate closely with stakeholders for requirement discussions, cross-team integration, and problem-solving",
              "Integrate ChainGuard's FIPS 140-3 compliant Docker image and perform STIG compliance certification",
              "Use AWS GovCloud for development and testing of compliance certification",
            ],
            technologies: ["Kubernetes", "FIPS 140-3", "STIG", "ChainGuard", "Terraform"],
          },
          {
            title: "Software Engineer",
            period: "Jul 2024 - Dec 2025",
            employmentType: "Full-time",
            description:
              "As a Cloud Engineer, I developed and maintained enterprise-level cloud services, ensuring system reliability and performance.",
            achievements: [
              "Collaborate closely with stakeholders for requirement discussions, cross-team integration, and problem-solving",
              "As a full-cycle developer, responsible for the complete process from planning, design, to implementation, testing, deployment, and operation",
              "Automate and improve development and release processes",
            ],
            technologies: ["Azure", "Oracle Cloud", "CI/CD", "Kubernetes", "Python", "Golang"],
          },
        ],
      },
      {
        company: "LINE TV (CHOCO Media)",
        location: "Taipei",
        span: "Sep 2022 - Apr 2024",
        logo: "/experience-logos/line-tv.png",
        roles: [
          {
            title: "Backend Engineer",
            period: "Sep 2022 - Apr 2024",
            employmentType: "Full-time",
            description:
              "Developed and maintained core backend systems for LINE TV's streaming platform.",
            achievements: [
              "Worked closely with PMs to understand business needs, design APIs, databases, and system architecture",
              "Wrote logic based on the post-POC architecture, ensuring smooth product iteration through unit and integration testing",
              "Participated in a large-scale system refactoring project to improve system performance and maintainability",
            ],
            technologies: ["Node.js", "SQL", "RESTful API", "Microservices", "Docker", "AWS"],
          },
        ],
      },
      {
        company: "Google",
        location: "Taiwan · Remote",
        span: "Mar 2021 - Jun 2021",
        logo: "/experience-logos/google.png",
        roles: [
          {
            title: "Cloud Student Sprint Program",
            period: "Mar 2021 - Jun 2021 · 4 mos",
            employmentType: "Apprentice",
            description:
              "A 10-week online curriculum and workshops run by Google (March–June), introducing Google Cloud Platform and preparing cohorts for the Associate Cloud Engineer certification.",
            achievements: [
              "Joined a cohort of 40 students from Taiwan, China, and overseas; learned in teams of 5–6 with mentorship from Googlers working as Google Cloud engineers",
              "Built foundational knowledge of Google Cloud Platform and experienced Google's engineering culture",
              "Program goal: prepare students to earn the Google Cloud Associate Cloud Engineer (ACE) certification",
              "Passed the Google Cloud Associate Cloud Engineer certification after completing the program",
            ],
            technologies: ["Google Cloud Platform", "Cloud Computing", "Associate Cloud Engineer"],
          },
        ],
      },
    ],
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
          "Oracle Cloud",
          "Google Cloud Platform",
          "AWS", 
          "Azure",
          "Firebase"
        ]
      },
      devops: {
        title: "DevOps & Infrastructure", 
        skills: [
          "Terraform",
          "Kubernetes",
          "Docker",
          "CI/CD Pipeline",
          "Cloud Functions"
        ]
      },
      backend: {
        title: "Backend Development",
        skills: [
          "Python",
          "Go", 
          "Node.js",
          "SQL",
          "RESTful API"
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
  volunteer: {
    title: "Volunteering",
    items: [
      {
        role: "Organizer",
        organization: "GDG Taipei",
        period: "Nov 2022 - Sep 2024",
        tenureLabel: "1 yr 11 mos",
        cause: "Science and Technology",
        achievements: [
          "Assist in organizing community events",
          "Help build GDG and WTM websites and make them open source for others to use",
        ],
        logo: "/volunteer-logos/gdg-taipei.png",
      },
      {
        role: "Co Organizer",
        organization: "TensorFlow User Group (TFUG)",
        period: "Nov 2020 - Sep 2022",
        tenureLabel: "1 yr 11 mos",
        cause: "Science and Technology",
        achievements: [
          "Assist ML GDE Jerry Wu in managing Meetup communities",
          "Host an online book club on \"From Python to TensorFlow\"",
        ],
        logo: "/volunteer-logos/tfug.png",
      },
    ],
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
        logo: "/education-logos/NTUST.png",
        description: "Focused on fuzzy mathematics in multi-attribute decision-making, published a research paper.",
        coursework: [
          "Fuzzy Systems",
          "Introduction to Deep Learning and Its Applications",
          "Database Design",
          "Social Media Data Analysis"
        ],
        achievements: [
          "Published a research paper",
          "Served as a Teaching Assistant"
        ]
      },
      {
        degree: "Bachelor of Science in Applied Materials and Optoelectronic Engineering",
        school: "National Chi Nan University",
        location: "Nantou",
        period: "2014 - 2018",
        logo: "/education-logos/NCNU.png",
        description: "Built interdisciplinary thinking on the foundation of materials science and began to learn programming, laying the groundwork for future technological development.",
        coursework: [
          "Optoelectronic Engineering",
          "Fundamentals of Programming",
          "Numerical Analysis",
          "Materials Science"
        ],
        achievements: [
          "Served as a Teaching Assistant",
          "Assisted with thesis guidance and wrote SOP"
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
        }
      ]
    }
  }
  // googleAssistant 已遷移到 googleAssistant.ts
}