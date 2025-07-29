export const mainSection = {
    title: "",
    description: "",
    hero: {
        greeting: "Hi, 我是",
        name: "游紹宏",
        quote: "「機會，是留給準備好的人」",
        jobTitle: "Cloud Engineer @ Trend Micro"
    },
    about: {
        title: "關於我",
        professionalBackground: {
            title: "專業背景",
            paragraph1: "我是一位專注於雲端技術與後端開發的工程師，擁有豐富的系統架構和開發經驗。從研究所開始接觸 AI 技術，到現在在趨勢科技擔任 Cloud Engineer，一路走來都在追求如何將技術轉化為實際的商業價值。",
            paragraph2: "除了工作，我也積極參與技術社群活動，擔任 GDG Taipei 和 TensorFlow User Group 的講者，分享技術經驗的同時也不斷學習新知。我相信技術不僅是解決問題的工具，更是創造價值的媒介。"
        },
        techStack: {
            title: "技術專長"
        },
        highlights: {
            cloud: {
                title: "雲端架構",
                description: "專注於建立可擴展、高可用性的雲端服務"
            },
            backend: {
                title: "後端開發",
                description: "打造穩健、高效能的後端系統"
            },
            data: {
                title: "資料工程",
                description: "設計優化的資料庫結構和資料流"
            },
            ai: {
                title: "AI 應用",
                description: "整合 AI 技術於實際應用場景"
            }
        }
    },
    experience: {
        title: "工作經驗",
        achievements: "主要成就",
        technologies: "使用技術",
        jobs: [
            {
                title: "Cloud Engineer",
                company: "Trend Micro (趨勢科技)",
                location: "台北市",
                period: "2024/07 - 至今",
                description: "作為雲端工程師，負責開發和維護企業級的雲端服務，確保系統的可靠性和效能。",
                achievements: [
                    "與利害關係人密切合作，進行需求討論、跨團隊整合和問題排除",
                    "作為全週期開發者，負責從規劃、設計到實作、測試、部署和營運的完整流程",
                    "自動化和改進開發及發布流程"
                ],
                technologies: ["Azure", "Oracle Cloud", "CI/CD", "Kubernetes","Python","Golang"]
            },
            {
                title: "後端工程師",
                company: "LINE TV (巧克科技)",
                location: "台北市",
                period: "2022/09 - 2024/04",
                description: "在 LINE TV 團隊中擔任後端工程師，負責開發和維護核心服務系統。",
                achievements: [
                    "與 PM 緊密合作了解商業需求，設計 API、資料庫和系統架構",
                    "根據 POC 後的架構撰寫邏輯，透過單元測試和整合測試確保產品迭代順暢",
                    "參與大型系統重構專案，提升系統效能和可維護性"
                ],
                technologies: ["Node.js", "SQL", "RESTful API", "Microservices", "Docker", "AWS"]
            }
        ]
    },
    skills: {
        title: "技能與專案",
        tabs: {
            skills: "專業技能",
            projects: "代表專案"
        },
        categories: {
            cloud: {
                title: "雲端技術",
                skills: [
                    "Oracle Cloud",
                    "Google Cloud Platform", 
                    "AWS",
                    "Azure",
                    "Firebase"
                ]
            },
            devops: {
                title: "DevOps & 基礎設施",
                skills: [
                    "Terraform",
                    "Kubernetes", 
                    "Docker",
                    "CI/CD Pipeline",
                    "Cloud Functions"
                ]
            },
            backend: {
                title: "後端開發",
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
                description: "開發多個 Google Assistant 應用程式，提供使用者多元的語音互動服務",
                tags: ["DialogFlow", "Cloud Functions", "Node.js"]
            },
            {
                title: "LINE TV 後端系統",
                description: "參與開發和維護 LINE TV 的後端系統，處理大規模用戶請求和資料處理",
                tags: ["Python", "SQL", "System Design"]
            },
            {
                title: "雲端監控系統",
                description: "設計和實現雲端服務的監控系統，確保服務的穩定性和可用性",
                tags: ["GCP", "Cloud Monitoring", "Python"]
            }
        ]
    },
    education: {
        title: "學歷背景",
        educationExperience: "教育經歷",
        coursework: "主要課程",
        achievements: "成就",
        educationHistory: [
            {
                degree: "資訊工程所",
                school: "國立台灣科技大學",
                location: "台北市",
                period: "2020 - 2022",
                description: "專注於模糊領域在多屬性決策的應用，發表一篇期刊論文",
                coursework: [
                    "模糊系統",
                    "深度學習導論與其應用",
                    "資料庫設計",
                    "社群媒體資料分析實務"
                ],
                achievements: [
                    "發表研究論文",
                    "擔任教學助理"
                ]
            },
            {
                degree: "應用材料與光電工程學系",
                school: "國立暨南國際大學",
                location: "南投縣",
                period: "2014 - 2018",
                description: "在材料科學的基礎上，培養跨領域思維，並開始接觸程式設計，為未來的技術發展奠定基礎。",
                coursework: [
                    "光電工程",
                    "材料科學",
                    "程式設計基礎"
                ],
                achievements: [
                    "擔任教學助理",
                    "協助專題指導並撰寫SOP"
                ]
            }
        ],
        certifications: {
            title: "證照與認證",
            professional: "專業級",
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