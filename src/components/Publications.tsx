"use client";

import { useState } from "react";
import Image from "next/image";
import { BookOpen, ExternalLink } from "lucide-react";
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

function PublicationLogo({
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
        <BookOpen className="h-7 w-7 text-muted-foreground" aria-hidden />
      )}
    </div>
  );
}

interface PublicationLink {
  label: string;
  url: string;
}

interface PublicationMetadata {
  label: string;
  value: string;
}

interface PublicationItem {
  title: string;
  authors: string;
  venue: string;
  citation?: string;
  year?: string;
  logo?: string;
  metadata?: PublicationMetadata[];
  links?: PublicationLink[];
}

interface Props {
  t: TFunction<"mainSection">;
}

const Publications = ({ t }: Props) => {
  const items = t("publications.items", {
    returnObjects: true,
  }) as PublicationItem[];
  const linksLabel = t("publications.linksLabel", {
    defaultValue: "Links",
  }) as string;
  const metadataLabel = t("publications.metadataLabel", {
    defaultValue: "Journal Metadata",
  }) as string;

  return (
    <section
      id="publications"
      className="border-t border-border/40 bg-muted/20 py-20 dark:bg-background"
    >
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          {t("publications.title")}
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
                <PublicationLogo src={item.logo} alt={item.venue} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0 space-y-1">
                      <h3 className="text-lg font-bold leading-snug text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-zinc-400">
                        {item.authors}
                      </p>
                      <p className="text-sm italic text-foreground/80 dark:text-zinc-300">
                        {item.venue}
                        {item.citation ? `, ${item.citation}` : ""}
                      </p>
                    </div>
                    {item.year ? (
                      <span className="shrink-0 text-sm tabular-nums text-muted-foreground dark:text-zinc-400 sm:pt-0.5 sm:text-right">
                        {item.year}
                      </span>
                    ) : null}
                  </div>

                  {item.metadata?.length ? (
                    <div className="mt-6">
                      <SectionLabel>{metadataLabel}</SectionLabel>
                      <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                        {item.metadata.map((meta) => (
                          <div
                            key={meta.label}
                            className="flex gap-2 text-sm leading-relaxed"
                          >
                            <dt className="shrink-0 font-medium text-foreground/90 dark:text-zinc-300">
                              {meta.label}:
                            </dt>
                            <dd className="text-muted-foreground dark:text-zinc-400">
                              {meta.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ) : null}

                  {item.links?.length ? (
                    <div className="mt-6">
                      <SectionLabel>{linksLabel}</SectionLabel>
                      <ul className="mt-3 flex flex-col gap-1.5">
                        {item.links.map((link) => (
                          <li key={link.url}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline dark:text-blue-400"
                            >
                              <ExternalLink
                                className="h-3.5 w-3.5 shrink-0"
                                aria-hidden
                              />
                              <span>{link.label}</span>
                            </a>
                          </li>
                        ))}
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

export default Publications;
