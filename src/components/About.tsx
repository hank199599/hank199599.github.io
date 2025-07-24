import { Code, Cloud, Database, Bot } from "lucide-react";
import { TFunction } from 'i18next';

interface Props {
  t: TFunction<"mainSection">;
}

const About = ({ t }: Props) => {
  const highlights = [
    {
      icon: Cloud,
      title: t('about.highlights.cloud.title'),
      description: t('about.highlights.cloud.description')
    },
    {
      icon: Code,
      title: t('about.highlights.backend.title'),
      description: t('about.highlights.backend.description')
    },
    {
      icon: Database,
      title: t('about.highlights.data.title'),
      description: t('about.highlights.data.description')
    },
    {
      icon: Bot,
      title: t('about.highlights.ai.title'),
      description: t('about.highlights.ai.description')
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-950"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Professional Introduction */}
          <div className="glass-card rounded-3xl p-10 shadow-soft-lg">
            <h3 className="text-2xl font-bold text-foreground mb-8">{t('about.professionalBackground.title')}</h3>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                {t('about.professionalBackground.paragraph1')}
              </p>
              
              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                {t('about.professionalBackground.paragraph2')}
              </p>
            </div>
            
            {/* Tech Stack */}
            <div className="mt-10">
              <h4 className="text-lg font-bold text-foreground mb-6">{t('about.techStack.title')}</h4>
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