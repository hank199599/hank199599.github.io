'use client';
import Link from "next/link";
import { TFunction } from 'i18next';

interface Props {
  t: TFunction<"navigation">;
}

export function SiteDesktopMenu({ t }: Props) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="flex items-center space-x-6">
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        {t('home')}
      </Link>
      <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
        {t('blog')}
      </Link>
      <Link href="/timeline" className="text-sm font-medium transition-colors hover:text-primary">
        {t('timeline')}
      </Link>
      <Link href="/google-assistant" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => scrollToSection('google-assistant')}>
        {t('googleAssistant')}
      </Link>
    </nav>
  );
}
