import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TFunction } from 'i18next';

interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
  coursework: string[];
  achievements: string[];
}

interface Certification {
  name: string;
  issuer: string;
  score?: string;
  description?: string;
  year: string;
}

interface Props {
  t: TFunction<"mainSection">;
}

const Education = ({ t }: Props) => {
  const education = t('education.educationHistory', { returnObjects: true }) as EducationItem[];
  const certifications = t('education.certifications.items', { returnObjects: true }) as Certification[];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('education.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Section */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('education.educationExperience')}</h3>
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
                      <h4 className="font-semibold mb-3 text-foreground">{t('education.coursework')}：</h4>
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
                      <h4 className="font-semibold mb-3 text-foreground">{t('education.achievements')}：</h4>
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
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('education.certifications.title')}</h3>
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
                            {cert.score || t('education.certifications.professional')}
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