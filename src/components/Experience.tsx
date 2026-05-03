"use client";

import { useState } from "react";
import Image from "next/image";
import { Building2, Gem } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TFunction } from "i18next";
import { cn } from "@/lib/utils";

const LOGO_COL_W = "w-14"; // 56px — aligns timeline with logo column

const LOGO_BOX = 56;

function CompanyLogo({
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
        "flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-muted/30 dark:border-zinc-700/80 dark:bg-zinc-950/60",
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
        <Building2 className="h-7 w-7 text-muted-foreground" aria-hidden />
      )}
    </div>
  );
}

interface Role {
  title: string;
  period: string;
  /** e.g. Full-time / 正職 */
  employmentType?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface CompanyGroup {
  company: string;
  location: string;
  span: string;
  /** Human-readable total tenure at company (e.g. "1 yr 11 mos") — shown when multiple roles */
  tenureLabel?: string;
  /** e.g. Taiwan / 台灣 */
  region?: string;
  /** e.g. Hybrid / 混合型 */
  workMode?: string;
  logo?: string;
  roles: Role[];
}

interface Props {
  t: TFunction<"mainSection">;
}

function CompanyMetaLine({ group }: { group: CompanyGroup }) {
  const place = [group.region, group.location].filter(Boolean).join(" ");
  const tail = [place, group.workMode].filter(Boolean).join(" · ");
  if (!tail) return null;
  return (
    <p className="text-sm text-muted-foreground dark:text-zinc-400">{tail}</p>
  );
}

function RoleContent({
  role,
  className,
}: {
  role: Role;
  className?: string;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground dark:text-zinc-400">
        {role.description}
      </p>

      <ul className="mt-3 space-y-2">
        {role.achievements.map((achievement: string, i: number) => (
          <li
            key={i}
            className="flex gap-2 text-sm leading-relaxed text-muted-foreground dark:text-zinc-400"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/70 dark:bg-zinc-500" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
        <Gem
          className="h-3.5 w-3.5 shrink-0 text-muted-foreground/80 dark:text-zinc-500"
          aria-hidden
        />
        <div className="flex flex-wrap gap-2">
          {role.technologies.map((tech: string) => (
            <Badge
              key={tech}
              variant="secondary"
              className="rounded-md border-0 bg-muted/70 px-2 py-0.5 text-[11px] font-normal text-foreground/90 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

const Experience = ({ t }: Props) => {
  const companies = t("experience.companies", { returnObjects: true }) as CompanyGroup[];

  return (
    <section
      id="experience"
      className="border-t border-border/40 bg-muted/20 py-20 dark:bg-background"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-left text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t("experience.title")}
        </h2>

        <div className="flex flex-col gap-6">
          {companies.map((group, companyIndex) => {
            const isMulti = group.roles.length > 1;
            const lastRoleIndex = group.roles.length - 1;

            return (
              <article
                key={companyIndex}
                className={cn(
                  "rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm sm:p-6",
                  "dark:border-zinc-800/90 dark:bg-[#1b1b1f] dark:shadow-none"
                )}
              >
                {isMulti ? (
                  <>
                    <div className="flex gap-4 sm:gap-5">
                      <CompanyLogo src={group.logo} alt={group.company} />
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-bold leading-snug text-foreground">
                          {group.company}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground dark:text-zinc-400">
                          {group.tenureLabel ?? group.span}
                        </p>
                        <div className="mt-0.5">
                          <CompanyMetaLine group={group} />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col">
                      {group.roles.map((role, roleIndex) => (
                        <div key={roleIndex} className="flex gap-4 sm:gap-5">
                          <div
                            className={cn(
                              LOGO_COL_W,
                              "flex shrink-0 flex-col items-center self-stretch pt-1"
                            )}
                          >
                            {roleIndex > 0 && (
                              <div className="h-4 w-px shrink-0 bg-border dark:bg-zinc-600" />
                            )}
                            <div className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-card bg-muted-foreground ring-background dark:border-[#1b1b1f] dark:bg-zinc-400 dark:ring-[#1b1b1f]" />
                            {roleIndex < lastRoleIndex && (
                              <div className="w-px flex-1 bg-border dark:bg-zinc-600" />
                            )}
                          </div>

                          <div
                            className={cn(
                              "min-w-0 flex-1",
                              roleIndex < lastRoleIndex && "pb-10"
                            )}
                          >
                            <h4 className="text-base font-bold leading-snug text-foreground">
                              {role.title}
                            </h4>
                            {role.employmentType ? (
                              <p className="mt-0.5 text-sm text-muted-foreground dark:text-zinc-400">
                                {role.employmentType}
                              </p>
                            ) : null}
                            <p className="mt-1 text-sm tabular-nums text-muted-foreground dark:text-zinc-400">
                              {role.period}
                            </p>
                            <RoleContent role={role} className="mt-1" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex gap-4 sm:gap-5">
                    <CompanyLogo src={group.logo} alt={group.company} />
                    <div className="min-w-0 flex-1">
                      {group.roles[0] ? (
                        <>
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                            <div className="min-w-0 space-y-1">
                              <h3 className="text-lg font-bold leading-snug text-foreground">
                                {group.roles[0].title}
                              </h3>
                              <p className="text-sm text-muted-foreground dark:text-zinc-400">
                                {[group.company, group.location].filter(Boolean).join(" · ")}
                              </p>
                              {group.roles[0].employmentType ? (
                                <p className="text-sm text-muted-foreground dark:text-zinc-400">
                                  {group.roles[0].employmentType}
                                </p>
                              ) : null}
                            </div>
                            <span className="shrink-0 text-sm tabular-nums text-muted-foreground dark:text-zinc-400 sm:pt-0.5 sm:text-right">
                              {group.roles[0].period}
                            </span>
                          </div>
                          <RoleContent role={group.roles[0]} />
                        </>
                      ) : null}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
