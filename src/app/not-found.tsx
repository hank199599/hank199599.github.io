"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation('notFound');

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          
          {/* Main heading with gradient text */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-google-red via-google-yellow to-google-blue bg-clip-text text-transparent">
              404
            </span>
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-2 max-w-lg mx-auto">
            {t('subtitle')}
          </p>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground/80 mb-8 max-w-md mx-auto">
            {t('description')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"> 
            <Button asChild variant="outline" size="lg" className="glass-card glass-card-hover group border-google-blue/30 hover:border-google-blue">
              <Link href="javascript:history.back()" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                {t('goBack')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}