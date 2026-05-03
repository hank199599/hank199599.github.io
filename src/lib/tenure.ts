/**
 * Format a work/volunteering tenure as a human-readable duration string.
 *
 * Months are computed inclusively (Nov 2022 → Sep 2024 counts both endpoints),
 * matching the convention used on LinkedIn and most résumés.
 */

type TenureOptions = {
  /** ISO month string, "YYYY-MM". */
  startDate: string;
  /** ISO month string, "YYYY-MM". Omit to mean "Present" / up to today. */
  endDate?: string;
  /** i18n language code; only "zh" is treated as Chinese, everything else falls back to English. */
  language: string;
};

function parseYearMonth(value: string): { year: number; month: number } {
  const [y, m] = value.split("-").map(Number);
  return { year: y, month: m };
}

function totalMonthsBetween(start: string, end: string): number {
  const s = parseYearMonth(start);
  const e = parseYearMonth(end);
  // Inclusive of both endpoint months.
  return (e.year - s.year) * 12 + (e.month - s.month) + 1;
}

function formatEn(years: number, months: number): string {
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.length > 0 ? parts.join(" ") : "0 mos";
}

function formatZh(years: number, months: number): string {
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} 年`);
  if (months > 0) parts.push(`${months} 個月`);
  return parts.length > 0 ? parts.join(" ") : "未滿 1 個月";
}

export function formatTenure({ startDate, endDate, language }: TenureOptions): string {
  const now = new Date();
  const effectiveEnd =
    endDate ?? `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  const total = Math.max(0, totalMonthsBetween(startDate, effectiveEnd));
  const years = Math.floor(total / 12);
  const months = total % 12;

  return language === "zh" ? formatZh(years, months) : formatEn(years, months);
}

const EN_MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatMonth(value: string, language: string): string {
  const { year, month } = parseYearMonth(value);
  if (language === "zh") {
    return `${year}/${String(month).padStart(2, "0")}`;
  }
  return `${EN_MONTHS[month - 1]} ${year}`;
}

/**
 * Format an ISO YYYY-MM date range as a locale-aware string.
 * zh: "2022/09 - 2024/04" / "2024/07 - 至今"
 * en: "Sep 2022 - Apr 2024" / "Jul 2024 - Present"
 */
export function formatDateRange({ startDate, endDate, language }: TenureOptions): string {
  const present = language === "zh" ? "至今" : "Present";
  const start = formatMonth(startDate, language);
  const end = endDate ? formatMonth(endDate, language) : present;
  return `${start} - ${end}`;
}
