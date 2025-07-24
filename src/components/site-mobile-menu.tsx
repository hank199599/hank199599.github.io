'use client';

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ModeToggle } from "./model-toggle";
import { LanguageToggle } from "./language-toggle";

interface SiteMobileMenuProps {
  onItemClick?: () => void;
}

export function SiteMobileMenu({ onItemClick }: SiteMobileMenuProps) {
  const { t } = useTranslation('navigation');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onItemClick?.();
    }
  };

  const handleLinkClick = () => {
    onItemClick?.();
  };

  return (
    <nav className="flex flex-col space-y-4 items-center w-full">
      <button 
        onClick={() => scrollToSection('home')}
        className="text-xl font-medium transition-colors hover:text-primary text-left"
      >
        {t('home')}
      </button>
      <button 
        onClick={() => scrollToSection('about')}
        className="text-xl font-medium transition-colors hover:text-primary text-left"
      >
        關於
      </button>
      <Link 
        href="/google-assistant" 
        className="text-xl font-medium transition-colors hover:text-primary"
        onClick={handleLinkClick}
      >
        {t('sideProjects.googleAssistant')}
      </Link>
      <Link 
        href="/timeline" 
        className="text-xl font-medium transition-colors hover:text-primary"
        onClick={handleLinkClick}
      >
        {t('timeline')}
      </Link>
      <div className="flex items-center space-x-4 pt-4 border-t border-border w-full justify-center">
        <LanguageToggle />
        <ModeToggle />
      </div>
    </nav>
  );
}
