'use client';
import Link from "next/link";

export function SiteDesktopMenu() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="flex items-center space-x-6">
      <button 
        onClick={() => scrollToSection('home')}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        首頁
      </button>
      <button 
        onClick={() => scrollToSection('about')}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        關於
      </button>
      <Link href="/google-assistant" className="text-sm font-medium transition-colors hover:text-primary">
        Google Assistant
      </Link>
      <Link href="/timeline" className="text-sm font-medium transition-colors hover:text-primary">
        Timeline
      </Link>
    </nav>
  );
}
