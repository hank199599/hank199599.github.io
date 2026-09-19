"use client";

import { Star, PenLine, type LucideIcon } from "lucide-react";
import { TFunction } from "i18next";
import { cn } from "@/lib/utils";

const LOGO_BOX = 56;

interface Accomplishment {
  type: "award" | "writing";
  title: string;
  organization: string;
  period: string;
  description?: string;
}

interface Props {
  t: TFunction<"mainSection">;
}

const TYPE_META: Record<
  Accomplishment["type"],
  { icon: LucideIcon; accent: string }
> = {
  award: {
    icon: Star,
    accent: "from-amber-500 to-orange-500",
  },
  writing: {
    icon: PenLine,
    accent: "from-blue-500 to-indigo-600",
  },
};

const Accomplishments = ({ t }: Props) => {
  const accomplishments = t("accomplishments.items", {
    returnObjects: true,
  }) as Accomplishment[];

  if (!accomplishments?.length) return null;

  return (
    <section
      id="accomplishments"
      className="border-t border-border/40 bg-muted/20 py-20 dark:bg-background"
    >
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          {t("accomplishments.title")}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accomplishments.map((item, index) => {
            const meta = TYPE_META[item.type] ?? TYPE_META.award;
            const Icon = meta.icon;

            return (
              <article
                key={index}
                className={cn(
                  "rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm sm:p-6",
                  "dark:border-zinc-800/90 dark:bg-[#1b1b1f] dark:shadow-none"
                )}
              >
                <div className="flex gap-4 sm:gap-5">
                  <div
                    className={cn(
                      "flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm",
                      meta.accent
                    )}
                    style={{ width: LOGO_BOX, height: LOGO_BOX }}
                  >
                    <Icon className="h-6 w-6 text-white" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-base font-bold leading-snug text-foreground">
                        {item.title}
                      </h4>
                      <span className="shrink-0 text-sm tabular-nums text-muted-foreground dark:text-zinc-400">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground dark:text-zinc-400">
                      {item.organization}
                    </p>
                    {item.description && (
                      <p className="mt-3 text-xs text-muted-foreground dark:text-zinc-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
