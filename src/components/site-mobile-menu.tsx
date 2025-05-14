'use client';
import { useTranslation } from 'react-i18next';
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { DrawerTrigger } from './ui/drawer';
import { Drawer, DrawerFooter } from './ui/drawer';
import { DrawerContent } from './ui/drawer';
import { Separator } from './ui/separator';

export function SiteMobileMenu() {
  const { t } = useTranslation();

  return (
  <Drawer>
      <DrawerTrigger><MenuIcon className="w-4 h-4" /></DrawerTrigger>
      <DrawerContent>
        <DrawerFooter className="flex flex-col gap-4 w-full">
          <Link className="text-lg font-bold hover:text-primary text-center w-full py-2 text-google-blue" href="/activity">{t('navigation.recentActivities')}</Link>
          <Separator className="w-full h-0 border-t border-off-white border-t-3 shadow-md mt-0 gap-0" />
          <h2 className="text-2xl font-bold text-center w-full py-2 text-halftone-green">{t('navigation.annualActivities')}</h2>
          <Link className="text-lg font-bold hover:text-primary text-center w-full py-2 text-google-green" href="/annual_activity/international_womens_day">{t('navigation.internationalWomensDay.title')}</Link>
          <Link className="text-lg font-bold hover:text-primary text-center w-full py-2 text-google-green" href="/annual_activity/google_io_extended">{t('navigation.googleIOExtended.title')}</Link>
          <Link className="text-lg font-bold hover:text-primary text-center w-full py-2 text-google-green" href="/annual_activity/cloud_study_jam">{t('navigation.cloudStudyJam.title')}</Link>
          <Link className="text-lg font-bold hover:text-primary text-center w-full py-2 text-google-green" href="/annual_activity/devfest">{t('navigation.devfest.title')}</Link>
          <Separator className="w-full h-0 border-t border-off-white border-t-3 shadow-md mt-0 gap-0" />
          <Link className="text-lg font-bold hover:text-primary text-center w-full py-2 text-google-red" href="/chapters">{t('navigation.chapters')}</Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>    
  )
}
