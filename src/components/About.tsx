import { Code, Cloud, Database, Bot } from "lucide-react";

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
    <section id="about" className="py-24 relative">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-950"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            關於我
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Professional Introduction */}
          <div className="glass-card rounded-3xl p-10 shadow-soft-lg">
            <h3 className="text-2xl font-bold text-foreground mb-8">專業背景</h3>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                我是一位專注於雲端技術與後端開發的工程師，擁有豐富的系統架構和開發經驗。
                從研究所開始接觸 AI 技術，到現在在趨勢科技擔任 Cloud Engineer，
                一路走來都在追求如何將技術轉化為實際的商業價值。
              </p>
              
              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                除了工作，我也積極參與技術社群活動，擔任 GDG Taipei 和 TensorFlow User Group 的講者，
                分享技術經驗的同時也不斷學習新知。我相信技術不僅是解決問題的工具，
                更是創造價值的媒介。
              </p>
            </div>
            
            {/* Tech Stack */}
            <div className="mt-10">
              <h4 className="text-lg font-bold text-foreground mb-6">技術專長</h4>
              <div className="flex flex-wrap gap-3">
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
                    className="glass-card px-4 py-2 rounded-xl text-sm font-semibold text-foreground shadow-soft hover:shadow-soft-lg glass-card-hover"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Expertise Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div 
                key={title} 
                className="glass-card glass-card-hover rounded-2xl p-8 shadow-soft-lg"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-soft">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 