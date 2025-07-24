import { Calendar, MapPin, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TFunction } from 'i18next';

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Props {
  t: TFunction<"mainSection">;
}

const Experience = ({ t }: Props) => {
  const workExperience = t('experience.jobs', { returnObjects: true }) as WorkExperience[];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('experience.title')}
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
                  <h4 className="font-semibold mb-3 text-foreground">{t('experience.achievements')}：</h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">{t('experience.technologies')}：</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech: string) => (
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