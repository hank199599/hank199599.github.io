'use client';
import { ModeToggle } from "./model-toggle"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { SiteMobileMenu } from "./site-mobile-menu";
import { SiteDesktopMenu } from "./site-desktop-menu";


export function SiteHeader() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={`bg-background/80 backdrop-blur-sm rounded-[10px] fixed top-4 left-0 right-0 flex h-fit-content py-3 px-4 lg:mx-16 lg:my-10 lg:px-20 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) z-11 `}>
      <div className={`flex flex-row h-full w-full items-${isMobile ? "between" : "center"} justify-${isMobile ? "between" : "center"} gap-1 px-4 lg:gap-2 lg:px-6`}>
        {isMobile && (
          <div className="flex items-center justify-between gap-2">
            <SiteMobileMenu />
          </div>
        )}
        {mounted && (
          <div className="flex items-center justify-between gap-2">
            <Link href="/" passHref>
              個人網頁
            </Link>
          </div>
        )}
        {!isMobile && (
          <div className="ml-auto flex items-between justify-between gap-2 w-1/3 ">
            <SiteDesktopMenu />
        </div>
        )}
        <div className="flex items-center justify-between gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
