'use client';

import { useTranslation } from 'react-i18next';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Home() {
  const { t } = useTranslation('mainSection');

  return (
    <main className="min-h-screen bg-background">
      <Hero t={t} />
      <About t={t} />
      <Experience t={t} />
      <Skills t={t} />
      <Education t={t} />
    </main>
  );
}
