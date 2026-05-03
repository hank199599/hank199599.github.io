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
        startDate: "2024-07",
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
        startDate: "2022-09",
        endDate: "2024-04",
        workMode: "Hybrid",
        logo: "/experience-logos/line-tv.png",
        roles: [
          {
            title: "Backend Engineer",
            startDate: "2022-09",
            endDate: "2024-04",
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
        startDate: "2021-03",
        endDate: "2021-06",
        workMode: "Remote",
        logo: "/experience-logos/google.png",
        roles: [
          {
            title: "Cloud Student Sprint Program",
            startDate: "2021-03",
            endDate: "2021-06",
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
    title: "Professional Skills",
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
      },
      soft: {
        title: "Soft Skills",
        skills: [
          "Cross-team Communication & Requirement Clarification",
          "Systems Thinking & Architecture Design",
          "Technical Decision-making & Trade-off Analysis",
          "End-to-end Delivery & Ownership",
          "Knowledge Management & Documentation",
          "Problem Solving & Root Cause Analysis",
          "Community Building & Mentorship",
          "Bilingual / Cross-cultural Collaboration"
        ]
      }
    }
  },
  projects: {
    title: "Key Projects",
    releasesLabel: "Releases",
    linksLabel: "Links",
    items: [
      {
        title: "Google Assistant Actions",
        description: "Voice-enabled skills built on the Google Assistant third-party platform (Actions on Google, AoG) using Node.js, DialogFlow, and Firebase. Featured on the official Google Taiwan blog.",
        tags: ["DialogFlow", "Cloud Functions", "Node.js", "Firebase"],
        logo: "/project-logos/google-assistant.png",
        highlightGroups: [
          {
            label: "July 31, 2019",
            items: [
              "Meal Decider (美食決定器)",
              "Cows and Bulls (1A2B 猜數)",
              "Master of Riddle (燈謎大師)",
              "Sport Meeting of Brain (大腦運動會)"
            ]
          },
          {
            label: "March 31, 2020",
            items: [
              "Text Solitaire (詞語接龍)"
            ]
          }
        ],
        links: [
          {
            label: "GitHub Repo",
            url: "https://github.com/hank199599/Google-Assistant-APP"
          },
          {
            label: "Google Taiwan Blog (2019/07)",
            url: "https://taiwan.googleblog.com/2019/07/google_31.html"
          },
          {
            label: "Google Taiwan Blog (2020/03)",
            url: "https://taiwan.googleblog.com/2020/03/tips-for-home-entertainment.html"
          }
        ]
      },
      {
        title: "Gemini-powered Auto-posting System for Facebook",
        description: "A Gemini-powered automation that summarizes Google Blog posts and publishes them to the GDG Taipei Facebook page, reducing information gaps, increasing fan page reach and engagement, and boosting event promotion effectiveness.",
        tags: ["Gemini", "Google Apps Script", "RSS", "Facebook Graph API", "Automation"],
        logo: "/volunteer-logos/gdg-taipei.png",
        period: "Mar 2024 - Jun 2025",
        highlightGroups: [
          {
            label: "Impact",
            items: [
              "Automatically summarizes Google Blog posts via Gemini",
              "Reduces information gaps for community members",
              "Increases fan page reach, engagement, and event promotion effectiveness"
            ]
          }
        ],
        links: [
          {
            label: "GitHub Repo",
            url: "https://github.com/GDGTaipei/rss-auto-post-facebook-with-gemini"
          },
          {
            label: "GDG Taipei Facebook Page",
            url: "https://www.facebook.com/GDG.Taipei"
          }
        ]
      }
    ]
  },
  volunteer: {
    title: "Volunteering",
    linksLabel: "Links",
    items: [
      {
        role: "Organizer",
        organization: "GDG Taipei",
        period: "Nov 2022 - Sep 2024",
        startDate: "2022-11",
        endDate: "2024-09",
        cause: "Science and Technology",
        achievements: [
          "Assist in organizing community events",
          "Help build GDG and WTM websites and make them open source for others to use",
          "Assist in organizing I/O Extends 2023",
          "Assist in organizing DevFest 2023, achieving a record attendance of 700 people",
          "Assist in building a generative AI-powered automated posting system to help manage fan pages ( as the following link https://www.facebook.com/GDG.Taipei )",
        ],
        logo: "/volunteer-logos/gdg-taipei.png",
        links: [
          {
            label: "GDG Website GitHub Repo",
            url: "https://github.com/gdg-twhk/gdg-taiwan-React",
          },
          {
            label: "WTM Website GitHub Repo",
            url: "https://github.com/GDGTaipei/wtm-temp-website/tree/main/public",
          },
          {
            label: "Auto-posting System GitHub Repo",
            url: "https://github.com/GDGTaipei/rss-auto-post-facebook-with-gemini",
          },
          {
            label: "DevFest 2023 LinkedIn Post",
            url: "https://www.linkedin.com/posts/shaohungyu_%E6%84%9F%E8%AC%9D%E6%89%80%E6%9C%89%E8%AC%9B%E8%80%85%E8%88%87%E6%9C%83%E7%9C%BE%E7%9A%84%E5%8F%83%E8%88%87%E8%AE%93-devfest-taipei-2023-%E5%85%8B%E6%9C%8D%E5%A4%A9%E6%B0%A3%E7%9A%84%E6%8C%91%E6%88%B0-ugcPost-7142033789345480704-v4JZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAABuzp-YB4UrcrROGNCKaHk9Qj_JMqaMXN3E",
          }
        ],
      },
      {
        role: "Co Organizer",
        organization: "TensorFlow User Group (TFUG)",
        period: "Nov 2020 - Sep 2022",
        startDate: "2020-11",
        endDate: "2022-09",
        cause: "Science and Technology",
        achievements: [
          "Assist ML GDE Jerry Wu in managing Meetup communities",
          "Host an online book club on \"From Python to TensorFlow\"",
          "Help building official website and related system",
          "Participate in the \"TENSORFLOW EVERYWHERE: From 0 to 1\" event as a speaker",
        ],
        logo: "/volunteer-logos/tfug.png",
        links: [
          {
            label: "TFUG Taipei Meetup",
            url: "https://www.meetup.com/tensorflow-user-group-taipei/",
          },
        ],
      },
    ],
  },
  publications: {
    title: "Publications",
    linksLabel: "Links",
    metadataLabel: "Journal Metadata",
    authorsLabel: "Authors",
    items: [
      {
        title: "Multiattribute decision making based on novel score function and the power operator of interval-valued intuitionistic fuzzy values",
        authors: "S. M. Chen and S. H. Yu",
        venue: "Information Sciences",
        citation: "vol. 606, pp. 763-785",
        year: "August 2022",
        logo: "/publication-logos/information-sciences.jpg",
        metadata: [
          { label: "Type", value: "SCI Journal Paper" },
          { label: "Impact Factor", value: "8.233" },
          { label: "Field", value: "Computer Science, Information Systems" },
          { label: "Ranking", value: "16 / 164" }
        ],
        links: [
          {
            label: "ScienceDirect",
            url: "https://www.sciencedirect.com/science/article/abs/pii/S0020025522004674"
          }
        ]
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
    ]
  },
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
  // googleAssistant 已遷移到 googleAssistant.ts
}