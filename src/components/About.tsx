import { Code, Cloud, Database, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "雲端架構",
      description: "專注於建立可擴展、高可用性的雲端服務"
    },
    {
      icon: Code,
      title: "後端開發",
      description: "打造穩健、高效能的後端系統"
    },
    {
      icon: Database,
      title: "資料工程",
      description: "設計優化的資料庫結構和資料流"
    },
    {
      icon: Bot,
      title: "AI 應用",
      description: "整合 AI 技術於實際應用場景"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            關於我
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              我是一位專注於雲端技術與後端開發的工程師，擁有豐富的系統架構和開發經驗。
              從研究所開始接觸 AI 技術，到現在在趨勢科技擔任 Cloud Engineer，
              一路走來都在追求如何將技術轉化為實際的商業價值。
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              除了工作，我也積極參與技術社群活動，擔任 GDG Taipei 和 TensorFlow User Group 的講者，
              分享技術經驗的同時也不斷學習新知。我相信技術不僅是解決問題的工具，
              更是創造價值的媒介。
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Python",
                "Node.js",
                "GCP",
                "Firebase",
                "SQL",
                "Keras",
                "DialogFlow"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <Card key={title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 