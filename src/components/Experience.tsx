import { Calendar, MapPin, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const workExperience = [
    {
      title: "Cloud Engineer",
      company: "Trend Micro (趨勢科技)",
      location: "台北市",
      period: "2024/07 - NOW",
      description: "作為雲端工程師，負責開發和維護企業級的雲端服務，確保系統的可靠性和效能。",
      achievements: [
        "與利害關係人密切合作，進行需求討論、跨團隊整合和問題排除",
        "作為全週期開發者，負責從規劃、設計到實作、測試、部署和營運的完整流程",
        "自動化和改進開發及發布流程"
      ],
      technologies: ["GCP", "Python", "Cloud Functions", "Cloud Run"]
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
      technologies: ["Python", "SQL", "RESTful API", "Microservices"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            工作經驗
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-medium">
                    <Calendar className="h-4 w-4" />
                    <span>{job.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">主要成就：</h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">使用技術：</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 