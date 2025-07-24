'use client';

import { useState, useEffect } from "react";
import { ModeToggle } from "./model-toggle";
import { SiteDesktopMenu } from "@/components/site-desktop-menu";
import { SiteMobileMenu } from "@/components/site-mobile-menu";
import { LanguageToggle } from "./language-toggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";

export function SiteHeader() {
  const { t } = useTranslation('navigation');
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
      scrolled
        ? "bg-background/95 backdrop-blur-sm border-b border-border"
        : "bg-background/80 backdrop-blur-sm"
    }`}>
      <div className="container flex h-16 items-center">
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {mounted && <SiteDesktopMenu t={t} />}
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
        {isMobile && <SiteMobileMenu />}
      </div>
    </header>
  );
}
