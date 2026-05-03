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
        companies: [
            {
                company: "Trend Micro（趨勢科技）",
                location: "台北市",
                span: "2024/07 - 至今",
                startDate: "2024-07",
                region: "台灣",
                workMode: "混合型",
                logo: "/experience-logos/trend-micro.png",
                roles: [
                    {
                        title: "Senior Software Engineer",
                        period: "2026/01 - 至今",
                        employmentType: "正職",
                        description: "協助 FIPS/STIG 合規認證的開發工作，確保系統的可靠性和效能。",
                        achievements: [
                            "與利害關係人密切合作，進行需求討論、跨團隊整合和問題排除",
                            "整合 ChainGuard 的 FIPS 140-3 合規 Docker image，並進行 STIG 合規認證",
                            "使用 AWS GovCloud 進行合規認證的開發和測試",
                        ],
                        technologies: ["Kubernetes", "FIPS 140-3", "STIG", "ChainGuard", "Terraform"],
                    },
                    {
                        title: "Software Engineer",
                        period: "2024/07 - 2025/12",
                        employmentType: "正職",
                        description:
                            "作為雲端工程師，負責開發和維護企業級的雲端服務，確保系統的可靠性和效能。",
                        achievements: [
                            "與利害關係人密切合作，進行需求討論、跨團隊整合和問題排除",
                            "作為全週期開發者，負責從規劃、設計到實作、測試、部署和營運的完整流程",
                            "自動化和改進開發及發布流程",
                        ],
                        technologies: ["Azure", "Oracle Cloud", "CI/CD", "Kubernetes", "Python", "Golang"],
                    },
                ],
            },
            {
                company: "LINE TV（巧克科技）",
                location: "台北市",
                span: "2022/09 - 2024/04",
                logo: "/experience-logos/line-tv.png",
                roles: [
                    {
                        title: "後端工程師",
                        period: "2022/09 - 2024/04",
                        employmentType: "正職",
                        description: "負責開發和維護 LINE TV 的後端系統，處理大規模用戶請求和資料處理。",
                        achievements: [
                            "與 PM 緊密合作了解商業需求，設計 API、資料庫和系統架構",
                            "根據 POC 後的架構撰寫邏輯，透過單元測試和整合測試確保產品迭代順暢",
                            "參與大型系統重構專案，提升系統效能和可維護性",
                        ],
                        technologies: ["Node.js", "SQL", "RESTful API", "Microservices", "Docker", "AWS"],
                    },
                ],
            },
            {
                company: "Google（谷歌）",
                location: "台灣 · 遠距",
                span: "2021/03 - 2021/06",
                logo: "/experience-logos/google.png",
                roles: [
                    {
                        title: "Cloud Student Sprint Program",
                        period: "2021年3月 – 2021年6月 · 4 個月",
                        employmentType: "學徒",
                        description:
                            "由 Google 舉辦，於 3 月至 6 月進行為期 10 週的線上課程與工作坊，帶領學員建立 Google Cloud Platform 基礎並鎖定 Associate Cloud Engineer 認證。",
                        achievements: [
                            "計畫網羅 40 名來自台灣、中國與海外的學員，以 5～6 人一組，由擔任 Google Cloud 雲端工程師的 Googler 導師分組指導",
                            "取得 Google Cloud Platform 相關基礎知識，並體驗 Google 的工程文化",
                            "計畫目標為協助學員通過 Google Cloud Associate Cloud Engineer（ACE）專業認證考試",
                            "計畫結束後成功取得「Associate Cloud Engineer」專業認證",
                        ],
                        technologies: ["Google Cloud Platform（GCP）", "雲端運算", "Associate Cloud Engineer"],
                    },
                ],
            },
        ],
    },
    skills: {
        title: "專業技能",
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
            },
            soft: {
                title: "軟技能",
                skills: [
                    "跨團隊溝通與需求釐清",
                    "系統性思考與架構設計",
                    "技術決策與 Trade-off 分析",
                    "全週期交付與 Ownership",
                    "知識管理與文件撰寫",
                    "問題解決與根本原因分析",
                    "技術社群經營與教學輔導",
                    "Bilingual / 跨文化協作"
                ]
            }
        }
    },
    projects: {
        title: "代表專案",
        releasesLabel: "發佈時間",
        linksLabel: "相關連結",
        items: [
            {
                title: "Google Assistant Actions",
                description: "為 Google Assistant 第三方平台（Actions on Google, AoG）開發多個語音互動技能，使用 Node.js、DialogFlow 與 Firebase 建置，並獲 Google Taiwan 官方部落格報導。",
                tags: ["DialogFlow", "Cloud Functions", "Node.js", "Firebase"],
                logo: "/project-logos/google-assistant.png",
                highlightGroups: [
                    {
                        label: "2019 年 7 月 31 日",
                        items: [
                            "Meal Decider（美食決定器）",
                            "Cows and Bulls（1A2B 猜數）",
                            "Master of Riddle（燈謎大師）",
                            "Sport Meeting of Brain（大腦運動會）",
                        ],
                    },
                    {
                        label: "2020 年 3 月 31 日",
                        items: [
                            "Text Solitaire（詞語接龍）",
                        ],
                    },
                ],
                links: [
                    {
                        label: "GitHub Repo",
                        url: "https://github.com/hank199599/Google-Assistant-APP",
                    },
                    {
                        label: "Google Taiwan 官方部落格（2019/07）",
                        url: "https://taiwan.googleblog.com/2019/07/google_31.html",
                    },
                    {
                        label: "Google Taiwan 官方部落格（2020/03）",
                        url: "https://taiwan.googleblog.com/2020/03/tips-for-home-entertainment.html",
                    },
                ],
            },
            {
                title: "Gemini 驅動的 Facebook 自動發文系統",
                description: "以 Gemini 自動摘要 Google Blog 文章並發布至 GDG Taipei 粉絲專頁，降低資訊落差、提升粉專觸及與互動，並強化活動宣傳成效。",
                tags: ["Gemini", "Google Apps Script", "RSS", "Facebook Graph API", "自動化"],
                logo: "/volunteer-logos/gdg-taipei.png",
                period: "2024/03 - 2025/06",
                highlightGroups: [
                    {
                        label: "成效",
                        items: [
                            "透過 Gemini 自動摘要 Google Blog 文章",
                            "降低社群成員的資訊落差",
                            "提升粉專觸及、互動與活動宣傳成效",
                        ],
                    },
                ],
                links: [
                    {
                        label: "GitHub Repo",
                        url: "https://github.com/GDGTaipei/rss-auto-post-facebook-with-gemini",
                    },
                    {
                        label: "GDG Taipei 粉絲專頁",
                        url: "https://www.facebook.com/GDG.Taipei",
                    },
                ],
            },
        ]
    },
    volunteer: {
        title: "志工經歷",
        linksLabel: "相關連結",
        items: [
            {
                role: "Organizer",
                organization: "GDG Taipei",
                period: "2022年11月 - 2024年9月",
                startDate: "2022-11",
                endDate: "2024-09",
                cause: "科學與技術",
                achievements: [
                    "協助籌辦社群活動",
                    "協助建置 GDG 與 WTM 網站，並以開源形式供他人使用",
                    "協助籌辦 I/O Extends 2023",
                    "協助籌辦 DevFest 2023，創下 700 人參與的紀錄",
                    "協助建置生成式 AI 自動發文系統，幫助管理粉絲專頁（如：https://www.facebook.com/GDG.Taipei）",
                ],
                logo: "/volunteer-logos/gdg-taipei.png",
                links: [
                    {
                        label: "GDG 網站 GitHub Repo",
                        url: "https://github.com/gdg-twhk/gdg-taiwan-React",
                    },
                    {
                        label: "WTM 網站 GitHub Repo",
                        url: "https://github.com/GDGTaipei/wtm-temp-website/tree/main/public",
                    },
                    {
                        label: "自動發文系統 GitHub Repo",
                        url: "https://github.com/GDGTaipei/rss-auto-post-facebook-with-gemini",
                    },
                    {
                        label: "DevFest 2023 LinkedIn 貼文",
                        url: "https://www.linkedin.com/posts/shaohungyu_%E6%84%9F%E8%AC%9D%E6%89%80%E6%9C%89%E8%AC%9B%E8%80%85%E8%88%87%E6%9C%83%E7%9C%BE%E7%9A%84%E5%8F%83%E8%88%87%E8%AE%93-devfest-taipei-2023-%E5%85%8B%E6%9C%8D%E5%A4%A9%E6%B0%A3%E7%9A%84%E6%8C%91%E6%88%B0-ugcPost-7142033789345480704-v4JZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAABuzp-YB4UrcrROGNCKaHk9Qj_JMqaMXN3E",
                    }
            
                ],
            },
            {
                role: "Co Organizer",
                organization: "TensorFlow User Group (TFUG)",
                period: "2020年11月 - 2022年9月",
                startDate: "2020-11",
                endDate: "2022-09",
                cause: "科學與技術",
                achievements: [
                    "協助 ML GDE Jerry Wu 管理 Meetup 社群",
                    "主辦「從 Python 到 TensorFlow」線上讀書會",
                    "協助建置官方網站和相關系統",
                    "參與「TENSORFLOW EVERYWHERE: From 0 to 1」活動並擔任講者",
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
        title: "學術發表",
        linksLabel: "相關連結",
        metadataLabel: "期刊資訊",
        authorsLabel: "作者",
        items: [
            {
                title: "Multiattribute decision making based on novel score function and the power operator of interval-valued intuitionistic fuzzy values",
                authors: "S. M. Chen and S. H. Yu",
                venue: "Information Sciences",
                citation: "vol. 606, pp. 763-785",
                year: "2022 年 8 月",
                logo: "/publication-logos/information-sciences.jpg",
                metadata: [
                    { label: "類型", value: "SCI 期刊論文" },
                    { label: "影響因子", value: "8.233" },
                    { label: "研究領域", value: "Computer Science, Information Systems" },
                    { label: "排名", value: "16 / 164" }
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
                logo: "/education-logos/NTUST.png",
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
                logo: "/education-logos/NCNU.png",
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
        ]
    },
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
    // googleAssistant 已遷移到 googleAssistant.ts
}