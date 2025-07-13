"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  游
                </span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              游紹宏
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            「機會，是留給準備好的人」
          </p>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Cloud Engineer @ Trend Micro
          </p>
          
          <div className="flex justify-center space-x-6">
            {[
              { 
                icon: Github, 
                href: "https://github.com/hank199599", 
                label: "GitHub" 
              },
              { 
                icon: Linkedin, 
                href: "https://www.linkedin.com/in/shaohungyu/", 
                label: "LinkedIn" 
              },
              { 
                icon: Mail, 
                href: "mailto:hank199599@gmail.com", 
                label: "Email" 
              }
            ].map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="p-3 rounded-full border border-border hover:border-primary transition-all duration-200 hover:scale-110 group"
                aria-label={label}
              >
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero; 