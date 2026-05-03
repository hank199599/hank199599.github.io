"use client";

import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TFunction } from "i18next";
import { cn } from "@/lib/utils";

const LOGO_BOX = 56;

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

const Certifications = ({ t }: Props) => {
  const certifications = t("certifications.items", {
    returnObjects: true,
  }) as Certification[];

  if (!certifications?.length) return null;

  return (
    <section
      id="certifications"
      className="border-t border-border/40 bg-muted/20 py-20 dark:bg-background"
    >
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          {t("certifications.title")}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                      {cert.score || t("certifications.professional")}
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
      </div>
    </section>
  );
};

export default Certifications;
