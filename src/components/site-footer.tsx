"use client";

import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from "./language-toggle";

export function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="py-10 border-t border-gray-400 border-t-3">
      <div className="flex flex-row items-center mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-left text-base mt-8">
            © 2025 <Link href="/" className="underline text-google-blue">{t('footer.siteName')}</Link>
          </p>
        </div>
        <div className="flex flex-row items-center mx-auto px-4">
        <LanguageToggle />
      </div>
      </div>
    </footer>
  );
}
