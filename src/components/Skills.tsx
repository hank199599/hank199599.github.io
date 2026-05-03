import { Badge } from "@/components/ui/badge";
import { TFunction } from "i18next";
import { cn } from "@/lib/utils";
import { Cloud, Cog, Code2, Users, type LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
}

interface Props {
  t: TFunction<"mainSection">;
}

const CATEGORY_META: Record<
  string,
  { icon: LucideIcon; accent: string; iconBg: string }
> = {
  cloud: {
    icon: Cloud,
    accent: "from-blue-500 to-sky-500",
    iconBg: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
  },
  devops: {
    icon: Cog,
    accent: "from-violet-500 to-purple-500",
    iconBg:
      "bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400",
  },
  backend: {
    icon: Code2,
    accent: "from-emerald-500 to-teal-500",
    iconBg:
      "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
  },
  soft: {
    icon: Users,
    accent: "from-amber-500 to-orange-500",
    iconBg:
      "bg-amber-500/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400",
  },
};

const Skills = ({ t }: Props) => {
  const skillCategories = t("skills.categories", {
    returnObjects: true,
  }) as Record<string, SkillCategory>;

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("skills.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([key, category]) => {
            const meta = CATEGORY_META[key] ?? CATEGORY_META.cloud;
            const Icon = meta.icon;
            const isFullWidth = key === "soft";

            return (
              <article
                key={key}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border/70 bg-card/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
                  "dark:border-zinc-800/90 dark:bg-[#1b1b1f] dark:shadow-none",
                  isFullWidth && "md:col-span-3"
                )}
              >
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
                    meta.accent
                  )}
                  aria-hidden
                />

                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                      meta.iconBg
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-md border-0 bg-muted/70 px-2.5 py-1 text-xs font-normal text-foreground/90 transition-colors hover:bg-primary hover:text-primary-foreground dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
