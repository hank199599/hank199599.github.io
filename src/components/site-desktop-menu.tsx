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
    <NavigationMenu className="w-full">
      <NavigationMenuList className="flex flex-row gap-2">
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/activity">時間軸</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/chapters">部落格</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>作品集</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-card">
        <ul className="grid gap-3 p-6 md:w-[400px]">
          <ListItem href="/annual_activity/international_womens_day" title="時間軸">
            Google 語音助理 App
          </ListItem>
          <ListItem href="/annual_activity/google_io_extended" title="年度活動">
            粉專自動發文系統
          </ListItem>
          <ListItem href="/annual_activity/cloud_study_jam" title="作品集">
            正念冥想服務
          </ListItem>
        </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      
      </NavigationMenuList>
    </NavigationMenu>  
  )
}
