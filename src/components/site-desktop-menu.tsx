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
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
        Blog
      </Link>
      <Link href="/timeline" className="text-sm font-medium transition-colors hover:text-primary">
        Timeline
      </Link>
      <Link href="/google-assistant" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => scrollToSection('google-assistant')}>
        Google Assistant
      </Link>
    </nav>
  );
}
