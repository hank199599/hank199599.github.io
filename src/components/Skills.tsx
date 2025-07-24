import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TFunction } from 'i18next';

interface SkillCategory {
  title: string;
  skills: string[];
}

interface Project {
  title: string;
  description: string;
  tags: string[];
}

interface Props {
  t: TFunction<"mainSection">;
}

const Skills = ({ t }: Props) => {
  const skillCategories = t('skills.categories', { returnObjects: true }) as Record<string, SkillCategory>;
  const projects = t('skills.projects', { returnObjects: true }) as Project[];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="skills">{t('skills.tabs.skills')}</TabsTrigger>
            <TabsTrigger value="projects">{t('skills.tabs.projects')}</TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skillCategories).map(([key, category]) => (
                <Card key={key} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
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