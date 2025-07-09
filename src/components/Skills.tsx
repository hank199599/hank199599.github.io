import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Skills = () => {
  const skillCategories = {
    cloud: {
      title: "雲端技術",
      skills: [
        { name: "Google Cloud Platform", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "Cloud Functions", level: 85 },
        { name: "Cloud Storage", level: 80 },
        { name: "Cloud Run", level: 80 }
      ]
    },
    backend: {
      title: "後端開發",
      skills: [
        { name: "Python", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "SQL", level: 85 },
        { name: "RESTful API", level: 90 },
        { name: "System Design", level: 85 }
      ]
    },
    ai: {
      title: "AI & 資料",
      skills: [
        { name: "Keras", level: 80 },
        { name: "DialogFlow", level: 85 },
        { name: "資料分析", level: 80 },
        { name: "機器學習", level: 75 },
        { name: "資料工程", level: 80 }
      ]
    }
  };

  const projects = [
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
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            技能與專案
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="skills">專業技能</TabsTrigger>
            <TabsTrigger value="projects">代表專案</TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skillCategories).map(([key, category]) => (
                <Card key={key} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={project.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills; 