'use client';
import { ListItem } from "@/components/ui/list-item"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

export function SiteDesktopMenu() {
  return (
    <nav className="flex items-center space-x-6">
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
  );
}
