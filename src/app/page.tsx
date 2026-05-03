'use client';

import { useTranslation } from 'react-i18next';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Volunteer from "@/components/Volunteer";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
export default function Home() {
  const { t } = useTranslation('mainSection');

  return (
    <main className="min-h-screen bg-background">
      <Hero t={t} />
      <About t={t} />
      <Experience t={t} />
      <Volunteer t={t} />
      <Skills t={t} />
      <Projects t={t} />
      <Education t={t} />
      <Publications t={t} />
      <Certifications t={t} />
    </main>
  );
}
