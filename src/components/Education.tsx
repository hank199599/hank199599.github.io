import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "資訊工程所",
      school: "國立台灣科技大學",
      location: "台北市",
      period: "2020 - 2022",
      description: "專注於人工智慧和機器學習領域的研究，探索 AI 技術在實際應用場景中的可能性。",
      coursework: [
        "機器學習",
        "深度學習",
        "自然語言處理",
        "雲端運算"
      ],
      achievements: [
        "發表研究論文",
        "參與產學合作專案",
        "擔任研究助理"
      ]
    },
    {
      degree: "應用材料與光電工程學系",
      school: "國立暨南國際大學",
      location: "南投縣",
      period: "2014 - 2018",
      description: "在材料科學的基礎上，培養跨領域思維，並開始接觸程式設計，為未來的技術發展奠定基礎。",
      coursework: [
        "材料科學",
        "光電工程",
        "程式設計基礎",
        "數值分析"
      ],
      achievements: [
        "專題研究優等",
        "程式設計競賽佳作",
        "系學會幹部"
      ]
    }
  ];

  const certifications = [
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
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            學歷背景
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Section */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">教育經歷</h3>
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 flex items-start gap-2">
                        <GraduationCap className="h-5 w-5 mt-1 text-primary" />
                        {edu.degree}
                      </CardTitle>
                      <div className="flex flex-col gap-2 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">{edu.school}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">主要課程：</h4>
                      <ul className="space-y-1">
                        {edu.coursework.map((course, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">成就：</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <Award className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">證照與認證</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-muted-foreground text-xs mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {cert.score || "Professional"}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {cert.year}
                          </span>
                        </div>
                        {cert.description && (
                          <p className="text-xs text-muted-foreground mt-2">
                            {cert.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 