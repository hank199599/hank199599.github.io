'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { ModeToggle } from "./model-toggle";
import { LanguageToggle } from "./language-toggle";
import { ChevronDown, ChevronRight, Home, BookOpen, Clock, FolderOpen, Mic, Users, Heart } from "lucide-react";

interface SiteMobileMenuProps {
  onItemClick?: () => void;
}

export function SiteMobileMenu({ onItemClick }: SiteMobileMenuProps) {
  const { t } = useTranslation('navigation');
  const [sideProjectsOpen, setSideProjectsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    onItemClick?.();
  };

  const toggleSideProjects = () => {
    setSideProjectsOpen(!sideProjectsOpen);
  };

  const isActive = (path: string) => {
    // Handle trailing slashes for static export
    const normalizedPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    const normalizedPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
    
    // Debug logging (remove in production)
    console.log('Checking path:', { path, pathname, normalizedPath, normalizedPathname });
    
    return normalizedPathname === normalizedPath;
  };

  const getActiveClasses = (path: string) => {
    return isActive(path) 
      ? "flex items-center px-4 py-3 text-lg font-medium transition-all duration-200 bg-primary/10 text-primary rounded-lg border border-primary/20" 
      : "flex items-center px-4 py-3 text-lg font-medium transition-all duration-200 hover:bg-muted/50 hover:text-primary rounded-lg";
  };

  const getSubActiveClasses = (path: string) => {
    return isActive(path)
      ? "flex items-center px-4 py-2 text-base font-medium transition-all duration-200 bg-primary/10 text-primary rounded-lg border border-primary/20"
      : "flex items-center px-4 py-2 text-base font-medium transition-all duration-200 hover:bg-muted/30 hover:text-primary rounded-lg";
  };

  return (
    <nav className="flex flex-col w-full py-2">
      {/* Main Navigation */}
      <div className="flex flex-col space-y-1">
        <Link 
          href="/" 
          className={getActiveClasses("/")}
          onClick={handleLinkClick}
        >
          <Home className="w-5 h-5 mr-3" />
          {t('home')}
        </Link>
        
        <Link 
          href="/blog" 
          className={getActiveClasses("/blog")}
          onClick={handleLinkClick}
        >
          <BookOpen className="w-5 h-5 mr-3" />
          {t('blog')}
        </Link>
        
        <Link 
          href="/timeline" 
          className={getActiveClasses("/timeline")}
          onClick={handleLinkClick}
        >
          <Clock className="w-5 h-5 mr-3" />
          {t('timeline')}
        </Link>

        {/* Side Projects Section */}
        <div className="flex flex-col">
          <button
            onClick={toggleSideProjects}
            className="flex items-center justify-between px-4 py-3 text-lg font-medium transition-all duration-200 hover:bg-muted/50 hover:text-primary rounded-lg w-full text-left"
          >
            <div className="flex items-center">
              <FolderOpen className="w-5 h-5 mr-3" />
              {t('sideProjects.title')}
            </div>
            {sideProjectsOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          
          {sideProjectsOpen && (
            <div className="ml-8 flex flex-col space-y-1 mt-1">
              <Link 
                href="/google-assistant" 
                className={getSubActiveClasses("/google-assistant")}
                onClick={handleLinkClick}
              >
                <Mic className="w-4 h-4 mr-3" />
                {t('sideProjects.googleAssistant')}
              </Link>
              
              <Link 
                href="/gdg-taipei-projects" 
                className={getSubActiveClasses("/gdg-taipei-projects")}
                onClick={handleLinkClick}
              >
                <Users className="w-4 h-4 mr-3" />
                {t('sideProjects.gdgTaipei')}
              </Link>
              
              <Link 
                href="https://mindfulmoments-e8722.web.app/" 
                className="flex items-center px-4 py-2 text-base font-medium transition-all duration-200 hover:bg-muted/30 hover:text-primary rounded-lg"
                onClick={handleLinkClick}
              >
                <Heart className="w-4 h-4 mr-3" />
                {t('sideProjects.mindfulMoments')}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border my-4"></div>

      {/* Settings */}
      <div className="flex items-center justify-center space-x-6 px-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground font-medium">Language:</span>
          <LanguageToggle />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground font-medium">Theme:</span>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
