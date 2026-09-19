export const mainSection = {
    title: "",
    description: "",
    hero: {
        greeting: "Hi, 我是",
        name: "游紹宏",
        quote: "「機會，是留給準備好的人」",
        jobTitle: "Senior Software Engineer @ Trend Micro"
    },
    about: {
        title: "關於我",
        professionalBackground: {
            title: "專業背景",
            paragraph1: "身為一位全端資深後端工程師（Full-cycle Senior Backend Engineer），我樂於透過可擴展的雲端架構與生成式 AI 解決複雜的分散式系統挑戰。在趨勢科技任職期間，我主導了 ASSESSMENTS 模組的優化專案，結合 GenAI 系統分析、多層快取與訊息佇列，消除系統過載風險，將系統可用性從 99.7% 提升至 99.9%。",
            paragraph2: "我的經歷涵蓋在 LINE TV 打造高流量串流服務後端架構、獨立開發 32 款橫跨 10 種語言的 Google Assistant 語音技能（每週吸引超過 3,000 名新使用者，並兩度獲 Google 台灣官方部落格報導），以及作為讀書會共同創辦人與 GDG Taipei GenAI 機器人開發者持續投入技術社群。我持續探索前沿技術，致力於創造具突破性的工程價值。"
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
                        description: "主導 Trend Micro Vision One Container Security（Sovereign Private Cloud）產品的 FIPS 140-3 與 STIG 合規工程，結合 Compliance-as-Code 自動化與 AI 輔助工具。",
                        achievements: [
                            "與同事共同於 5 週內，將基礎設施層級的映像檔遷移至符合 ChainGuard FIPS 140-3 標準的版本",
                            "Compliance as Code：自動化 FIPS 合規與 STIG 掃描流程，將資訊延遲從 7 天縮短至 30 分鐘內",
                            "重構 Helm Charts 以符合 STIG 合規要求，達成嚴謹的聯邦等級安全標準",
                            "為 80 多個利害關係團隊撰寫常見 FIPS 140-3 合規問題與排錯指南，降低部署阻力",
                            "運用 Claude AI skills 整理 FIPS/STIG 遷移指引，加速團隊對 Docker image 與 Helm Charts 的導入",
                            "將 Claude Code 整合進 GitHub Actions，自動化強化映像檔遷移與 CVE 修復，自主驗證 Helm charts、提交變更並部署修補程式至測試環境，減少 40% 人工工程投入",
                        ],
                        technologies: ["Kubernetes", "FIPS 140-3", "STIG", "ChainGuard", "Terraform", "Claude Code", "GitHub Actions"],
                    },
                    {
                        title: "Software Engineer",
                        period: "2024/07 - 2025/12",
                        employmentType: "正職",
                        description:
                            "以全週期開發者身分負責 ASSESSMENTS 模組，涵蓋規劃、設計、實作、測試、部署到維運的完整流程。",
                        achievements: [
                            "設計獨立的 worker node 處理資料同步，達成即時存取並提升 40% 作業效率",
                            "導入共用 Redis 快取並運用 LLM 工具診斷效能瓶頸，將服務可用性 SLO 從 98% 提升至 99.9%",
                            "運用 AI 工具（Claude Code）自動化測試，將覆蓋率從 0% 提升至 94.17%，並解決關鍵的併發問題",
                            "以 Domain-Driven Design（DDD）與 Azure Functions 重構核心邏輯，自動化夥伴站台建立流程，將處理時間從 2 週縮短至 2 天",
                            "透過 GitHub Actions 自動化 Azure AD 密鑰輪替，並成功處理 11 件關鍵支援/PCT 案件",
                            "與日本利害關係人合作蒐集並整理 ISMAP 註冊所需證明文件，確保符合官方資安要求",
                        ],
                        technologies: ["Azure", "Oracle Cloud", "CI/CD", "Kubernetes", "Python", "Golang", "Redis", "Domain-Driven Design"],
                    },
                ],
            },
            {
                company: "LINE TV（巧克科技）",
                location: "台北市",
                startDate: "2022-09",
                endDate: "2024-04",
                logo: "/experience-logos/line-tv.png",
                workMode: "混合型",
                roles: [
                    {
                        title: "後端工程師",
                        startDate: "2022-09",
                        endDate: "2024-04",
                        employmentType: "正職",
                        description: "負責與同事一同維護並開發 LINE TV 的產品，與 PM 緊密合作了解商業需求，設計 API、資料庫與系統架構。",
                        achievements: [
                            "發送獎勵模組化：將原先本地化、手動執行的腳本轉為模組化架構設計，減少內部 OP 80%",
                            "任務模組改版：與同事協作將原本實作於行動端的邏輯搬遷至後端，撰寫資料庫互動邏輯並同步建立後台，減少內部 OP 90%，並完善整合測試與單元測試確保後續迭代順暢",
                            "網頁端購買頁改版：新增折扣碼功能，並協助建立後台以減少內部 OP",
                            "供第三方的推薦系統建置：與 Data Team 協作建立片單資訊發送 pipeline，並協助建立對應後台供 Data Team 核對推薦片單",
                            "方案設定後台化：協助建立方案相關 API，並加上稽核功能",
                        ],
                        technologies: ["Node.js", "SQL", "RESTful API", "Microservices", "Docker", "AWS"],
                    },
                ],
            },
            {
                company: "Google（谷歌）",
                location: "台灣 · 遠距",
                startDate: "2021-03",
                endDate: "2021-06",
                workMode: "遠距",
                logo: "/experience-logos/google.png",
                roles: [
                    {
                        title: "Cloud Student Sprint Program（雲端學生加速計畫）",
                        startDate: "2021-03",
                        endDate: "2021-06",
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
                    "Cloud Functions",
                    "Helm",
                    "GitHub Actions"
                ]
            },
            security: {
                title: "資安與合規",
                skills: [
                    "FIPS 140-3",
                    "STIG",
                    "ChainGuard",
                    "Compliance as Code",
                    "DevSecOps",
                    "ISMAP"
                ]
            },
            backend: {
                title: "後端開發",
                skills: [
                    "Python",
                    "Go",
                    "Node.js",
                    "SQL",
                    "RESTful API",
                    "GraphQL",
                    "Domain-Driven Design（DDD）"
                ]
            },
            frontend: {
                title: "前端開發",
                skills: [
                    "React",
                    "Next.js",
                    "HTML5",
                    "CSS3"
                ]
            },
            data: {
                title: "資料管理",
                skills: [
                    "MySQL",
                    "MongoDB",
                    "Redis"
                ]
            },
            ai: {
                title: "AI 與自動化",
                skills: [
                    "Generative AI",
                    "LLMOps",
                    "AI Agents",
                    "Claude Code",
                    "MCP（Model Context Protocol）"
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
                    "受邀於 GDG Taiwan DevFest '20 及 GDG Taipei/Taiyuan DevFest '21 擔任講者，與開發者社群分享技術洞見",
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
                year: "2020"
            }
        ]
    },
    accomplishments: {
        title: "成就與榮譽",
        items: [
            {
                type: "award",
                title: "2026Q2 Quarter Star",
                organization: "趨勢科技",
                period: "2026 Q2",
                description: "表彰主導 Vision One Container Security 的 FIPS 140-3 與 STIG 合規工程之貢獻"
            },
            {
                type: "award",
                title: "2025Q3 Quarter Star",
                organization: "趨勢科技",
                period: "2025 Q3",
                description: "表彰優化 ASSESSMENTS 模組、將服務可用性提升至 99.9% 之貢獻"
            },
            {
                type: "writing",
                title: "iThome 鐵人賽 2021（第 13 屆 ITHELP Ironman Contest）",
                organization: "iThome",
                period: "2021",
                description: "完成第 13 屆 iThome 鐵人賽，連續 30 天發表技術文章的寫作挑戰"
            }
        ]
    }
    // googleAssistant 已遷移到 googleAssistant.ts
}