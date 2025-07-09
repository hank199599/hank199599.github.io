'use client';
import { useTranslation } from 'react-i18next';
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { DrawerTrigger } from './ui/drawer';
import { Drawer, DrawerFooter } from './ui/drawer';
import { DrawerContent } from './ui/drawer';
import { Separator } from './ui/separator';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function SiteMobileMenu() {
  const { t } = useTranslation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col space-y-4 mt-8">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            首頁
          </Link>
          <Link href="/timeline" className="text-sm font-medium transition-colors hover:text-primary">
            Timeline
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            關於
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            聯絡
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
