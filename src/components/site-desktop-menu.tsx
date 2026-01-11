'use client';

import Link from "next/link";
import { TFunction } from 'i18next';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/ui/list-item";

interface Props {
  t: TFunction<"navigation">;
}

export function SiteDesktopMenu({ t }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/" className={navigationMenuTriggerStyle()}>
              {t('home')}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/blog" className={navigationMenuTriggerStyle()}>
              {t('blog')}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/timeline" className={navigationMenuTriggerStyle()}>
              {t('timeline')}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t('sideProjects.title')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4">
              <ListItem href="/google-assistant" title={t('sideProjects.googleAssistant')}>
                {t('sideProjects.googleAssistantDescription')}
              </ListItem>
              <ListItem href="/gdg-taipei-projects" title={t('sideProjects.gdgTaipei')}>
                {t('sideProjects.gdgTaipeiDescription')}
              </ListItem>
              <ListItem href="https://mindfulmoments-e8722.web.app/" title={t('sideProjects.mindfulMoments')}>
                {t('sideProjects.mindfulMomentsDescription')}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
