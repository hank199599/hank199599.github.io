"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  ExternalLink,
  Calendar,
  Users,
  Globe,
  Utensils,
  GraduationCap,
  BookText,
  Palette,
  Gamepad2,
  FlaskConical,
  Globe2,
  Cloud,
  Languages,
  CalendarDays,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { googleAssistantData } from "@/data/google-assistant";
import { comments } from "@/data/google-assistant";
import { action_name_dict } from "@/data/google-assistant";
import { ActionProject, RawComment } from "@/types/google-assistant";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

const iconMap: { [key: string]: React.ElementType } = {
  fastfood: Utensils,
  school: GraduationCap,
  chrome_reader_mode: BookText,
  color_lens: Palette,
  sports_esports: Gamepad2,
  science: FlaskConical,
  public: Globe2,
  cloud: Cloud,
  translate: Languages,
  date_range: CalendarDays,
};

const GoogleAssistant = () => {
  const { t } = useTranslation('googleAssistant');
  const isMobile = useIsMobile();
  const [activeLanguage, setActiveLanguage] = useState("zh-TW");
  const [activeCategory, setActiveCategory] = useState("food");
  const [openAccordion, setOpenAccordion] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ActionProject | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [languageDrawerOpen, setLanguageDrawerOpen] = useState(false);

  const stats = [
    {
      icon: Users,
      number: t("stats.skills.number"),
      title: t("stats.skills.title"),
      description: t("stats.skills.description")
    },
    {
      icon: Calendar,
      number: t("stats.users.number"),
      title: t("stats.users.title"),
      description: t("stats.users.description")
    },
    {
      icon: Globe,
      number: t("stats.languages.number"),
      title: t("stats.languages.title"),
      description: t("stats.languages.description")
    }
  ];

  // 從 `googleAssistantData.projects` 篩選出當前語言的專案
  const projectsForLanguage = googleAssistantData.projects.filter(p =>
    p.languages.includes(activeLanguage)
  );

  // 從這些專案中找出所有可用的分類
  const availableCategoryIds = [...new Set(projectsForLanguage.map(p => p.category.id))];
  const allCategories = googleAssistantData.categories;
  const availableCategories = allCategories
    .filter(c => availableCategoryIds.includes(c.id))
    .map(category => ({
      ...category,
      name: t(`categories.${category.id}`)
    }));

  // activeCategory 合理切換
  useEffect(() => {
    if (
      availableCategories.length > 0 &&
      !availableCategories.some((cat) => cat.id === activeCategory)
    ) {
      setActiveCategory(availableCategories[0].id);
    }
  }, [activeLanguage, availableCategories, activeCategory]);

  // 根據當前選定的分類，篩選出要顯示的專案
  const filteredProjects = projectsForLanguage.filter(
    p => p.category.id === activeCategory
  );

  const accordionItems = [
    {
      title: t("howItWorks.accordion.1.title"),
      content: t("howItWorks.accordion.1.content")
    },
    {
      title: t("howItWorks.accordion.2.title"),
      content: t("howItWorks.accordion.2.content")
    },
    {
      title: t("howItWorks.accordion.3.title"),
      content: t("howItWorks.accordion.3.content")
    }
  ];

  return (
    <section id="google-assistant" className="relative overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/assistant_background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                <Image
                  src="/img/Google-Assistant-icon.gif"
                  alt="Google Assistant Icon"
                  width={64}
                  height={64}
                />
              </div>
              <div className="text-left">
                <h1 className="text-5xl lg:text-7xl font-bold">
                  {t("hero.title")}
                </h1>
                <p className="text-xl lg:text-2xl mt-2 text-white/80 whitespace-pre-line">
                  {t("hero.subtitle")}
                </p>
              </div>
            </div>
            <Link
              href="https://github.com/hank199599/Google-Assistant-APP"
              target="_blank"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              <Github className="mr-2 h-5 w-5" />
              {t("hero.githubButton")}
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

            {/* Deprecation Notice */}
            <div className="bg-red-500 text-white p-6 rounded-2xl mb-16">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🎤</span>
                <span className="font-bold">{t("deprecation.title")}</span>
              </div>
              <p className="mb-2">{t("deprecation.description")}</p>
              <Link
                href="https://developers.google.com/assistant/ca-sunset"
                target="_blank"
                className="inline-flex items-center text-white underline hover:text-gray-200"
              >
                {t("deprecation.link")} <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* How It Works Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  {t("howItWorks.title")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("howItWorks.subtitle")}
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

            {/* Skills Overview Section */}
            <div className="mb-16">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-4">
                    {t("skillsOverview.title")}
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    {t("skillsOverview.subtitle")}
                  </p>
                </div>
                {isMobile ? (
                  <div className="mt-4 lg:mt-0">
                    <Drawer open={languageDrawerOpen} onOpenChange={setLanguageDrawerOpen}>
                      <DrawerTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                          <div className="flex items-center">
                            <Globe className="mr-2 h-4 w-4" />
                            {t(`languages.${activeLanguage}`)}
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle className="text-2xl font-bold text-foreground text-center">{t("skillsOverview.selectLanguage")}</DrawerTitle>
                        </DrawerHeader>
                        <div className="px-4 pb-4">
                          <div className="grid grid-cols-1 gap-2">
                            {googleAssistantData.languages.map((lang) => (
                              <button
                                key={lang.code}
                                onClick={() => {
                                  setActiveLanguage(lang.code);
                                  setLanguageDrawerOpen(false);
                                }}
                                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                                  activeLanguage === lang.code
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 dark:bg-gray-700 text-foreground hover:bg-gray-200 dark:hover:bg-gray-600'
                                }`}
                              >
                                <Globe className="mr-3 h-5 w-5" />
                                <span className="font-medium">{t(`languages.${lang.code}`)}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </DrawerContent>
                    </Drawer>
                  </div>
                ) : (
                  <select
                    value={activeLanguage}
                    onChange={(e) => setActiveLanguage(e.target.value)}
                    className="mt-4 lg:mt-0 px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                  >
                    {googleAssistantData.languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>{t(`languages.${lang.code}`)}</option>
                    ))}
                  </select>
                )}
              </div>

              {/* Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">{t(`languages.${activeLanguage}`)}</h3>
                
                {/* Category Selection */}
                {isMobile ? (
                  <div className="mb-6">
                    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                      <DrawerTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                          <div className="flex items-center">
                            {(() => {
                              const activeCategory_data = availableCategories.find(cat => cat.id === activeCategory);
                              const Icon = activeCategory_data ? iconMap[activeCategory_data.tag] : null;
                              return (
                                <>
                                  {Icon && <Icon className="mr-2 h-4 w-4" />}
                                  {activeCategory_data?.name}
                                </>
                              );
                            })()}
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle className="text-2xl font-bold text-foreground text-center">{t("skillsOverview.selectCategory")}</DrawerTitle>
                        </DrawerHeader>
                        <div className="px-4 pb-4">
                          <div className="grid grid-cols-2 gap-2">
                            {availableCategories.map((category: { id: string; tag: string; name: string }) => {
                              const Icon = iconMap[category.tag];
                              return (
                                <button
                                  key={category.id}
                                  onClick={() => {
                                    setActiveCategory(category.id);
                                    setDrawerOpen(false);
                                  }}
                                  className={`flex items-center justify-center px-4 py-3 rounded-lg transition-colors ${
                                    activeCategory === category.id
                                      ? 'bg-blue-500 text-white'
                                      : 'bg-gray-100 dark:bg-gray-700 text-foreground hover:bg-gray-200 dark:hover:bg-gray-600'
                                  }`}
                                >
                                  <div className="text-center">
                                    {Icon && <Icon className="mx-auto mb-1 h-5 w-5" />}
                                    <div className="text-sm font-medium">{category.name}</div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </DrawerContent>
                    </Drawer>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {availableCategories.map((category: { id: string; tag: string; name: string }) => {
                      const Icon = iconMap[category.tag];
                      return (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                            activeCategory === category.id
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-foreground hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {Icon && <Icon className="mr-2 h-4 w-4" />}
                          {category.name}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Skills */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {filteredProjects.map((project: ActionProject) => (
                    <button
                      key={project.id}
                      className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex flex-col items-center justify-center text-white font-bold hover:scale-105 transition-transform cursor-pointer p-2 text-center"
                      title={t(`projects.${project.id}.content`)}
                      onClick={() => setSelectedProject(project)}
                    >
                      <Image
                        src={project.src}
                        alt={t(`projects.${project.id}.name`)}
                        width={60}
                        height={60}
                        className="mb-2 rounded"
                      />
                      <span className="text-xs text-center leading-tight">
                        {/* 優先用 action_name_dict，無則 fallback i18n */}
                        {action_name_dict[project.id] && action_name_dict[project.id][activeLanguage]
                        ? action_name_dict[project.id][activeLanguage]
                        : t(`projects.${project.id}.name`)}
                      </span>
                    </button>
                  ))}
                </div>
                {filteredProjects.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    {t("skillsOverview.noSkills")}
                  </div>
                )}
              </div>
            </div>

            {/* User Comments Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  {t("userComments.title")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("userComments.subtitle", { language: t(`languages.${activeLanguage}`) })}
                </p>
              </div>

              {/* 根據 activeLanguage 取得對應 comments */}
              {(() => {
                const userComments: RawComment[] = comments[activeLanguage] || [];
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userComments.length === 0 ? (
                      <div className="col-span-full text-center text-muted-foreground py-8">
                        {t("userComments.noComments")}
                      </div>
                    ) : (
                      userComments.map((comment, index) => (
                        <div key={index} className="glass-card rounded-2xl overflow-hidden shadow-lg">
                          <div
                            className="p-4"
                            style={{
                              background: `linear-gradient(135deg, ${comment.bg_color[0]}, ${comment.bg_color[1]})`
                            }}
                          >
                            <h3 className="text-xl font-bold" style={{ color: comment.text_color }}>
                              {comment.name}
                            </h3>
                          </div>
                          <div className="p-6">
                            <h4 className="font-bold text-foreground mb-2">{comment.title}</h4>
                            <p className="text-sm text-muted-foreground mb-1">{comment.reviewer}</p>
                            <p className="text-xs text-muted-foreground" dangerouslySetInnerHTML={{ __html: comment.date }} />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                );
              })()}
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
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <div className="flex items-start space-x-4">
                <Image
                  src={selectedProject.src}
                  alt={t(`projects.${selectedProject.id}.name`)}
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <DialogTitle className="text-2xl mb-2">
                    {/* 優先用 action_name_dict，無則 fallback i18n */}
                    {action_name_dict[selectedProject.id] && action_name_dict[selectedProject.id][activeLanguage]
                      ? action_name_dict[selectedProject.id][activeLanguage]
                      : t(`projects.${selectedProject.id}.name`)}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.languages.map((lang) => (
                      <Badge key={lang} variant="secondary">{t(`languages.${lang}`)}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {t(`projects.${selectedProject.id}.content`)}
              </p>
            </div>
            <DialogFooter className="sm:justify-between gap-2 flex-col sm:flex-row">
              <Button asChild variant="outline">
                <Link href={selectedProject.githubLink} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  {t("dialog.github")}
                </Link>
              </Button>
              {selectedProject.actionLink === 'javascript:;' ? (
                <Button disabled variant="outline">
                  {t("dialog.offline")}
                </Button>
              ) : (
                <Button asChild>
                  <Link href={selectedProject.actionLink} target="_blank">
                    {t("dialog.archive")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default GoogleAssistant;