import { Calendar, MapPin, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TFunction } from "i18next";
import { cn } from "@/lib/utils";

interface Role {
  title: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface CompanyGroup {
  company: string;
  location: string;
  span: string;
  roles: Role[];
}

interface Props {
  t: TFunction<"mainSection">;
}

const Experience = ({ t }: Props) => {
  const companies = t("experience.companies", { returnObjects: true }) as CompanyGroup[];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("experience.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {companies.map((group, companyIndex) => (
            <Card
              key={companyIndex}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border-border/60"
            >
              <CardHeader className="pb-4 bg-gradient-to-br from-muted/40 to-transparent border-b border-border/50">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground">
                      <Building2 className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                      {group.company}
                    </div>
                    <div className="flex flex-col gap-1.5 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-1">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        {group.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                        <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        {group.span}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="relative">
                  {group.roles.map((role, roleIndex) => (
                    <div
                      key={roleIndex}
                      className={cn(
                        "relative flex gap-4 sm:gap-6",
                        roleIndex < group.roles.length - 1 && "pb-10 sm:pb-12"
                      )}
                    >
                      {/* Timeline rail */}
                      <div className="flex w-4 shrink-0 flex-col items-center pt-1">
                        <span
                          className="z-10 h-3 w-3 shrink-0 rounded-full border-2 border-primary bg-background shadow-sm ring-2 ring-primary/20"
                          aria-hidden
                        />
                        {roleIndex < group.roles.length - 1 && (
                          <span className="mt-2 w-px flex-1 min-h-[3rem] bg-gradient-to-b from-border to-transparent" />
                        )}
                      </div>

                      <div className="min-w-0 flex-1 space-y-5">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                          <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
                          <span className="shrink-0 text-sm font-medium tabular-nums text-primary">
                            {role.period}
                          </span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{role.description}</p>

                        <div>
                          <h4 className="mb-3 font-semibold text-foreground">
                            {t("experience.achievements")}：
                          </h4>
                          <ul className="space-y-2">
                            {role.achievements.map((achievement: string, i: number) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="mb-3 font-semibold text-foreground">
                            {t("experience.technologies")}：
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {role.technologies.map((tech: string) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
