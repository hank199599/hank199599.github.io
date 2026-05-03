"use client";

import { useState } from "react";
import Image from "next/image";
import { HeartHandshake, ExternalLink, Github } from "lucide-react";
import { TFunction } from "i18next";
import { cn } from "@/lib/utils";

const LOGO_BOX = 56;

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

function OrgLogo({
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
        <HeartHandshake className="h-7 w-7 text-muted-foreground" aria-hidden />
      )}
    </div>
  );
}

interface VolunteerLink {
  label: string;
  url: string;
}

interface VolunteerItem {
  role: string;
  organization: string;
  period: string;
  tenureLabel?: string;
  cause?: string;
  description?: string;
  achievements: string[];
  logo?: string;
  links?: VolunteerLink[];
}

interface Props {
  t: TFunction<"mainSection">;
}

const Volunteer = ({ t }: Props) => {
  const items = t("volunteer.items", { returnObjects: true }) as VolunteerItem[];
  const linksLabel = t("volunteer.linksLabel", {
    defaultValue: "Links",
  }) as string;

  return (
    <section
      id="volunteer"
      className="border-t border-border/40 bg-muted/20 py-20 dark:bg-background"
    >
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {t('volunteer.title')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {items.map((item, index) => (
            <article
              key={index}
              className={cn(
                "rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm sm:p-6",
                "dark:border-zinc-800/90 dark:bg-[#1b1b1f] dark:shadow-none"
              )}
            >
              <div className="flex gap-4 sm:gap-5">
                <OrgLogo src={item.logo} alt={item.organization} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0 space-y-1">
                      <h3 className="text-lg font-bold leading-snug text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-zinc-400">
                        {item.organization}
                      </p>
                      {item.cause ? (
                        <p className="text-sm text-muted-foreground dark:text-zinc-400">
                          {item.cause}
                        </p>
                      ) : null}
                    </div>
                    <span className="shrink-0 text-sm tabular-nums text-muted-foreground dark:text-zinc-400 sm:pt-0.5 sm:text-right">
                      {item.tenureLabel
                        ? `${item.period} · ${item.tenureLabel}`
                        : item.period}
                    </span>
                  </div>

                  {item.description ? (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground dark:text-zinc-400">
                      {item.description}
                    </p>
                  ) : null}

                  {item.achievements.length > 0 && (
                    <ul
                      className={cn(
                        "space-y-2",
                        item.description ? "mt-3" : "mt-4"
                      )}
                    >
                      {item.achievements.map((achievement, i) => (
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

                  {item.links?.length ? (
                    <div className="mt-6">
                      <SectionLabel>{linksLabel}</SectionLabel>
                      <ul className="mt-3 flex flex-col gap-1.5">
                        {item.links.map((link) => {
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

export default Volunteer;
