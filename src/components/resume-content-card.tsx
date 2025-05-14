import React from "react";
import Link from "next/link";

export function ResumeContentCard({ title, company, description, link, startDate, endDate }: { title: string, company: string, description?: string[], link?: string, startDate: string, endDate: string }) {
  return (
    <div className="mb-2">
      <div className="text-xl md:text-2xl font-bold mb-2">
        {startDate} - {endDate} <span className="font-normal">|</span> <span className="font-bold">{title}</span>
      </div>
      <div className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">
        {company}
      </div>
      <ul className="list-disc list-inside text-gray-500 text-base md:text-lg mb-4 space-y-1">
        {Array.isArray(description) && description.length > 1 ? (
          description.map((item) => (
            <li key={item}>{item}</li>
          ))
        ) : (
          description && description.length === 1 ? (
            <span>{description[0]}</span>
          ) : null
        )}
      </ul>
      {link && <Link href={link} className="text-blue-600 hover:underline flex items-center gap-1 font-medium" target="_blank">
        相關頁面 <span className="text-lg">&rarr;</span>
      </Link>}
    </div>
  );
}
