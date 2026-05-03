"use client";

import { useState } from "react";
import Image from "next/image";
import { FolderKanban, Gem, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TFunction } from "i18next";
import { cn } from "@/lib/utils";

const LOGO_BOX = 56;

function ProjectLogo({
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
        <FolderKanban className="h-7 w-7 text-muted-foreground" aria-hidden />
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium text-muted-foreground/80 dark:text-zinc-500">
        {children}
      </span>
      <span
        className="h-px flex-1 bg-border/70 dark:bg-zinc-800"
        aria-hidden
      />
    </div>
  );
}

interface HighlightGroup {
  label?: string;
  items: string[];
}

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  logo?: string;
  role?: string;
  period?: string;
  highlightGroups?: HighlightGroup[];
  links?: ProjectLink[];
}

interface Props {
  t: TFunction<"mainSection">;
}

const Projects = ({ t }: Props) => {
  const projects = t("projects.items", { returnObjects: true }) as Project[];
  const releasesLabel = t("projects.releasesLabel", {
    defaultValue: "Releases",
  }) as string;
  const linksLabel = t("projects.linksLabel", {
    defaultValue: "Links",
  }) as string;

  return (
    <section
      id="projects"
      className="border-t border-border/40 bg-muted/20 py-20 dark:bg-background"
    >
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          {t("projects.title")}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className={cn(
                "rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm sm:p-6",
                "dark:border-zinc-800/90 dark:bg-[#1b1b1f] dark:shadow-none"
              )}
            >
              <div className="flex gap-4 sm:gap-5">
                <ProjectLogo src={project.logo} alt={project.title} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0 space-y-1">
                      <h3 className="text-lg font-bold leading-snug text-foreground">
                        {project.title}
                      </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mt-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="rounded-md border-0 bg-muted/70 px-2 py-0.5 text-[11px] font-normal text-foreground/90 dark:bg-zinc-800 dark:text-zinc-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                  </div>
                      {project.role ? (
                        <p className="text-sm text-muted-foreground dark:text-zinc-400">
                          {project.role}
                        </p>
                      ) : null}
                    </div>
                    {project.period ? (
                      <span className="shrink-0 text-sm tabular-nums text-muted-foreground dark:text-zinc-400 sm:pt-0.5 sm:text-right">
                        {project.period}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground dark:text-zinc-400">
                    {project.description}
                  </p>

                  {project.highlightGroups?.length ? (
                    <div className="mt-6">
                      <SectionLabel>{releasesLabel}</SectionLabel>
                      <div className="mt-3 space-y-4">
                        {project.highlightGroups.map((group, groupIndex) => (
                          <div key={groupIndex}>
                            {group.label ? (
                              <p className="text-sm font-medium tabular-nums text-foreground/90 dark:text-zinc-300">
                                {group.label}
                              </p>
                            ) : null}
                            <ul
                              className={cn(
                                "space-y-1.5",
                                group.label ? "mt-1.5" : ""
                              )}
                            >
                              {group.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex gap-2 pl-3 text-sm leading-relaxed text-muted-foreground dark:text-zinc-400"
                                >
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/70 dark:bg-zinc-500" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {project.links?.length ? (
                    <div className="mt-6">
                      <SectionLabel>{linksLabel}</SectionLabel>
                      <ul className="mt-3 flex flex-col gap-1.5">
                        {project.links.map((link) => {
                          const isGithub =
                            /github\.com/i.test(link.url) ||
                            /github/i.test(link.label);
                          const Icon = isGithub ? Github : ExternalLink;
                          return (
                            <li key={link.url}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline dark:text-blue-400"
                              >
                                <Icon
                                  className="h-3.5 w-3.5 shrink-0"
                                  aria-hidden
                                />
                                <span>{link.label}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
