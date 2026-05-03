"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TFunction } from "i18next";
import { cn } from "@/lib/utils";

const LOGO_BOX = 56;

function SchoolLogo({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src && !failed);

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-neutral-200/90 bg-white shadow-sm dark:border-zinc-300/80 dark:bg-white",
        className
      )}
      style={{ width: LOGO_BOX, height: LOGO_BOX }}
    >
      {showImage ? (
        <Image
          src={src!}
          alt={alt}
          width={LOGO_BOX}
          height={LOGO_BOX}
          className="h-full w-full object-contain p-1.5"
          unoptimized
          onError={() => setFailed(true)}
        />
      ) : (
        <GraduationCap className="h-7 w-7 text-muted-foreground" aria-hidden />
      )}
    </div>
  );
}

interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
  coursework: string[];
  achievements: string[];
  logo?: string;
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
  const education = t("education.educationHistory", {
    returnObjects: true,
  }) as EducationItem[];
  const certifications = t("education.certifications.items", {
    returnObjects: true,
  }) as Certification[];

  return (
    <section
      id="education"
      className="border-t border-border/40 bg-muted/20 py-20 dark:bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-left text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t("education.title")}
        </h2>

        <div className="flex flex-col gap-6">
          {education.map((edu, index) => (
            <article
              key={index}
              className={cn(
                "rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm sm:p-6",
                "dark:border-zinc-800/90 dark:bg-[#1b1b1f] dark:shadow-none"
              )}
            >
              <div className="flex gap-4 sm:gap-5">
                <SchoolLogo src={edu.logo} alt={edu.school} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0 space-y-1">
                      <h3 className="text-lg font-bold leading-snug text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-zinc-400">
                        {[edu.school, edu.location].filter(Boolean).join(" · ")}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm tabular-nums text-muted-foreground dark:text-zinc-400 sm:pt-0.5 sm:text-right">
                      {edu.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground dark:text-zinc-400">
                    {edu.description}
                  </p>

                  {edu.achievements.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground dark:text-zinc-400"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/70 dark:bg-zinc-500" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {edu.coursework.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
                      <BookOpen
                        className="h-3.5 w-3.5 shrink-0 text-muted-foreground/80 dark:text-zinc-500"
                        aria-hidden
                      />
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge
                            key={course}
                            variant="secondary"
                            className="rounded-md border-0 bg-muted/70 px-2 py-0.5 text-[11px] font-normal text-foreground/90 dark:bg-zinc-800 dark:text-zinc-300"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {certifications.length > 0 && (
          <>
            <h3 className="mb-6 mt-12 text-left text-2xl font-bold tracking-tight text-foreground">
              {t("education.certifications.title")}
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <article
                  key={index}
                  className={cn(
                    "rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm sm:p-6",
                    "dark:border-zinc-800/90 dark:bg-[#1b1b1f] dark:shadow-none"
                  )}
                >
                  <div className="flex gap-4 sm:gap-5">
                    <div
                      className="flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-sm"
                      style={{ width: LOGO_BOX, height: LOGO_BOX }}
                    >
                      <Award className="h-6 w-6 text-white" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-base font-bold leading-snug text-foreground">
                          {cert.name}
                        </h4>
                        <span className="shrink-0 text-sm tabular-nums text-muted-foreground dark:text-zinc-400">
                          {cert.year}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground dark:text-zinc-400">
                        {cert.issuer}
                      </p>
                      <div className="mt-3">
                        <Badge
                          variant="secondary"
                          className="rounded-md border-0 bg-muted/70 px-2 py-0.5 text-[11px] font-normal text-foreground/90 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {cert.score || t("education.certifications.professional")}
                        </Badge>
                      </div>
                      {cert.description && (
                        <p className="mt-2 text-xs text-muted-foreground dark:text-zinc-400">
                          {cert.description}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Education;
