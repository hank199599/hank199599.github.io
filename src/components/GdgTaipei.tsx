"use client";

import { useState } from "react";
import {
  ChevronDown,
  Github,
  ExternalLink,
  Users,
  Globe,
  Code,
  Rss,
  MessageSquare,
  Bot,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FacebookPost } from "@/components/ui/facebook-post";
import { ThreadsPost } from "@/components/ui/threads-post";

interface GdgProject {
  id: string;
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  icon: React.ElementType;
  gradient: string;
}

const gdgProjects: GdgProject[] = [
  {
    id: "rss-auto-post",
    name: "RSS Auto Post with Gemini",
    description: "Auto Facebook post system with Gemini by fetching RSS as source. Summarizes articles, schedules posts via Meta API, reduces operation time, and enhances cross-language delivery.",
    features: [
      "Automatic RSS feed monitoring",
      "AI-powered content summarization with Gemini",
      "Multi-platform posting (Facebook, Threads)",
      "Cross-language content delivery",
      "Scheduled posting automation"
    ],
    techStack: ["JavaScript", "Google Apps Script", "Firebase", "Facebook Graph API", "Threads API", "Gemini AI"],
    githubUrl: "https://github.com/GDGTaipei/rss-auto-post-facebook-with-gemini",
    icon: Rss,
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "social-media-api",
    name: "Social Media Post Cloud Function",
    description: "An API to transform blog posts into social media formats, including translation, tagging, and summarization using Firebase Vertex AI.",
    features: [
      "Content transformation API",
      "Multi-language translation",
      "Automatic tag generation", 
      "Content summarization",
      "RESTful API endpoints",
      "CI/CD with GitHub Actions"
    ],
    techStack: ["TypeScript", "Firebase", "Express", "Vertex AI", "GitHub Actions"],
    githubUrl: "https://github.com/GDGTaipei/SocialMediaPost_Cloud_Function",
    icon: MessageSquare,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: "gdg-taiwan-website",
    name: "GDG Taiwan Website (React)",
    description: "Redesigned GDG Taiwan website built with Next.js, TypeScript, Tailwind CSS, and i18n to promote Google tech and community.",
    features: [
      "Next.js 14 with SSR/SSG/ISR",
      "Multi-language support (i18n)",
      "SEO optimization with sitemap",
      "Component-based architecture",
      "Unit testing framework",
      "Hydration optimization"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "react-i18next", "next-sitemap", "Firebase"],
    githubUrl: "https://github.com/gdg-twhk/gdg-taiwan-React",
    icon: Code,
    gradient: "from-green-500 to-teal-600",
    demoUrl: "https://gdg.tw"
  }
];

const GdgTaipei = () => {
  const { t } = useTranslation('gdgTaipei');
  const [openAccordion, setOpenAccordion] = useState(0);
  const [selectedProject, setSelectedProject] = useState<GdgProject | null>(null);

  const stats = [
    {
      icon: Code,
      number: t("stats.projects.number"),
      title: t("stats.projects.title"),
      description: t("stats.projects.description")
    },
    {
      icon: Bot,
      number: t("stats.aiSolutions.number"),
      title: t("stats.aiSolutions.title"),
      description: t("stats.aiSolutions.description")
    },
    {
      icon: Users,
      number: t("stats.members.number"),
      title: t("stats.members.title"),
      description: t("stats.members.description")
    }
  ];

  const accordionItems = [
    {
      title: t("about.accordion.whatIs.title"),
      content: t("about.accordion.whatIs.content")
    },
    {
      title: t("about.accordion.mission.title"),
      content: t("about.accordion.mission.content")
    },
    {
      title: t("about.accordion.contribute.title"),
      content: t("about.accordion.contribute.content")
    }
  ];

  return (
    <section id="gdg-taipei" className="relative overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/GDG23-VideoChatBG-Blue.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                <Image
                  src="/img/gdg_taipei.png"
                  alt="GDG Taipei Logo"
                  width={64}
                  height={64}
                />
              </div>
              <div className="text-left">
                <h1 className="text-5xl lg:text-7xl font-bold">
                  {t("hero.title")}
                </h1>
                <p className="text-xl lg:text-2xl mt-2 text-white/80">
                  {t("hero.subtitle")}
                </p>
              </div>
            </div>
            <Link
              href="https://github.com/GDGTaipei"
              target="_blank"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              <Github className="mr-2 h-5 w-5" />
              {t("hero.viewOrganization")}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="relative -mt-32 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 lg:p-12 shadow-2xl">
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {stats.map(({ icon: Icon, number, title, description }, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{number}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{description}</p>
                </div>
              ))}
            </div>

            {/* About Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  {t("about.title")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("about.subtitle")}
                </p>
              </div>

              <div className="space-y-4">
                {accordionItems.map((item, index) => (
                  <div key={index} className="border border-border rounded-2xl overflow-hidden">
                    <button
                      className="w-full px-6 py-4 text-left font-bold text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between"
                      onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                    >
                      {item.title}
                      <ChevronDown
                        className={`h-5 w-5 transform transition-transform ${
                          openAccordion === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openAccordion === index && (
                      <div className="px-6 py-4 border-t border-border">
                        <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  {t("projects.title")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("projects.subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gdgProjects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <button
                      key={project.id}
                      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-left"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {t(`projects.${project.id}.name`)}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {t(`projects.${project.id}.description`)}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-4">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.techStack.length - 3}
                          </Badge>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Social Media Posts Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  {t("socialMedia.title")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("socialMedia.subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="glass-card rounded-2xl overflow-hidden">
                  <FacebookPost postId="842702457884541" />
                </div>
                <div className="glass-card rounded-2xl overflow-hidden">
                  <FacebookPost postId="829667782521342" />
                </div>
                <div className="glass-card rounded-2xl overflow-hidden">
                  <FacebookPost postId="1073956091425842" />
                </div>
                <div className="glass-card rounded-2xl overflow-hidden">
                  <ThreadsPost postUrl="https://www.threads.com/@gdg.taipei/post/DFwZbnLovzD" />
                </div>
              </div>
            </div>

            {/* Community Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  {t("community.title")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("community.subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card rounded-2xl p-6 text-center">
                  <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{t("community.officialWebsite.title")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("community.officialWebsite.description")}
                  </p>
                  <Button asChild variant="outline">
                    <Link href="https://gdg.community.dev/gdg-taipei/" target="_blank">
                      {t("community.officialWebsite.button")}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="glass-card rounded-2xl p-6 text-center">
                  <Github className="h-12 w-12 text-gray-800 dark:text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{t("community.github.title")}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t("community.github.description")}
                  </p>
                  <Button asChild>
                    <Link href="https://github.com/GDGTaipei" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      {t("community.github.button")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setSelectedProject(null);
            }
          }}
        >
          <DialogContent className="sm:max-w-[625px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${selectedProject.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <selectedProject.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <DialogTitle className="text-2xl mb-2">
                    {t(`projects.${selectedProject.id}.name`)}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </DialogHeader>
            <div className="py-4 space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">{t("dialog.description")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t(`projects.${selectedProject.id}.description`)}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">{t("dialog.keyFeatures")}</h4>
                <ul className="space-y-1">
                  {(t(`projects.${selectedProject.id}.features`, { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <DialogFooter className="sm:justify-between gap-2 flex-col sm:flex-row">
              <Button asChild variant="outline">
                <Link href={selectedProject.githubUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  {t("dialog.viewSource")}
                </Link>
              </Button>
              {selectedProject.demoUrl ? (
                <Button asChild>
                  <Link href={selectedProject.demoUrl} target="_blank">
                    {t("dialog.liveDemo")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button disabled variant="outline">
                  {t("dialog.noDemoAvailable")}
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default GdgTaipei;