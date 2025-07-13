"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Github, ExternalLink, Calendar, Users, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { googleAssistantData } from "@/data/google-assistant";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  src: string;
  githubLink: string;
  actionLink: string;
  isActive: boolean;
  contentId: string;
  languages: string[];
}

const GoogleAssistant = () => {
  const { i18n, t } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState("中文(臺灣)");
  const [activeCategory, setActiveCategory] = useState("food");
  const [openAccordion, setOpenAccordion] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const currentLanguage = i18n.language === 'en' ? 'en' : 'zh';

  const stats = [
    {
      icon: Users,
      number: t("googleAssistant.stats.skills.number"),
      title: t("googleAssistant.stats.skills.title"),
      description: t("googleAssistant.stats.skills.description")
    },
    {
      icon: Calendar,
      number: t("googleAssistant.stats.users.number"),
      title: t("googleAssistant.stats.users.title"),
      description: t("googleAssistant.stats.users.description")
    },
    {
      icon: Globe,
      number: t("googleAssistant.stats.languages.number"),
      title: t("googleAssistant.stats.languages.title"),
      description: t("googleAssistant.stats.languages.description")
    }
  ];

  const languages = googleAssistantData.languages.map(lang => lang.name);
  const userComments = googleAssistantData.comments[currentLanguage] || [];

  // 取得 langeuage_dict 結構（activeLanguage -> categoryId -> projectIds[]）
  const langeuageDictRaw = (googleAssistantData.langeuage_dict ?? []) as Array<{
    id: string;
    categories: Array<{ categoryId: string; projectIds: string[] }>;
  }>;
  // 轉成 { [lang: string]: { [categoryId: string]: string[] } }
  const langeuageDict: Record<string, Record<string, string[]>> = {};
  for (const langEntry of langeuageDictRaw) {
    langeuageDict[langEntry.id] = {};
    for (const cat of langEntry.categories) {
      langeuageDict[langEntry.id][cat.categoryId] = cat.projectIds;
    }
  }

  // 取得所有分類定義
  const allCategories = googleAssistantData.categories;

  // 依語言取得有專案的分類
  const availableCategoryIds = Object.keys(langeuageDict[activeLanguage] ?? {});
  const availableCategories = availableCategoryIds.map((catId) => {
    const cat = allCategories.find((c) => c.id === catId);
    return {
      id: catId,
      tag: cat?.tag || '',
      name: t(`googleAssistant.categories.${catId}`)
    };
  });

  // activeCategory 合理切換
  useEffect(() => {
    if (
      availableCategories.length > 0 &&
      !availableCategories.some((cat) => cat.id === activeCategory)
    ) {
      setActiveCategory(availableCategories[0].id);
    }
  }, [activeLanguage, availableCategories]);

  // 取得所有專案的詳細資料
  const detailDictArr = (googleAssistantData.detail_dict ?? []) as Array<{
    id: string;
    src: string;
    githubLink: string;
    actionLink: string;
    isActive: boolean;
    contentId: string;
  }>;

  // Skills 區塊內容同步（改為從 detail_dict 取得）
  const projectIds = langeuageDict[activeLanguage]?.[activeCategory] ?? [];
  const filteredProjects = projectIds
    .map(id => detailDictArr.find(p => p.id === id))
    .filter((p): p is Project => !!p);

  const accordionItems = [
    {
      title: "簡單來說，基礎原理是什麼?",
      content: `它是一個介接於Google助理的一個基於語音設計界面的新型態應用程式。
      使用者在向Google助理表明想使用某個特定的Action(動作)後，
      Google會在Actions On Google平台上搜尋是否有對應名稱的Action。
      接著使用者會被Google助理導引至Action的使用介面。
      從此刻開始，Google助理的角色轉變為協助進行語音辨識與傳遞資訊的角色。
      辨識使用者輸入的意圖與給予對應回應的工作則轉由開發者所設計的Action所執行。`
    },
    {
      title: "以Actions On Google (AoG)平台的觀點來說，基礎架構又是什麼呢?",
      content: `在支援Google語音助理的裝置上，
      原生內建一個由官方支持的第三方平台(Actions On Google, AoG)。
      當用戶請求與第三方平台的技能互動時，系統會自動到AoG上尋找對應的技能。
      一旦找到就會將畫面使用權交給第三方技能。
      自此刻開始，Google助理的角色轉為進行語音辨識與呈現第三方技能內容的中介。
      在實作上，整個互動的過程是透過JSON為格式的API進行資訊傳遞。`
    },
    {
      title: "當使用者與Action互動時，在後台會發生甚麼事?",
      content: `當使用者與Action互動時，以下流程會被觸發。
      而直到使用者的需求被滿足或中斷，都是這個形式進行每輪的對話：
      1. 使用者向助理提問
      2. 助理將(辨識到的)文字傳送給第三方Action
      3. 在第三方Action架構中，利用DialogFlow訓練的機器模型去判斷使用者的意圖
      4. 為進一步回應，將篩選後的參數傳進Fulfillment中進行邏輯判斷或資料拉取
      5. Fulfillment回傳對應Intent的回應給助理
      6. 助理接收到回應並呈獻給使用者`
    }
  ];


  return (
    <section id="google-assistant" className="py-24 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                <span className="text-4xl">🎤</span>
              </div>
              <div className="text-left">
                <h1 className="text-5xl lg:text-7xl font-bold">
                  {t("googleAssistant.hero.title")}
                </h1>
                <p className="text-xl lg:text-2xl mt-2 text-white/80 whitespace-pre-line">
                  {t("googleAssistant.hero.subtitle")}
                </p>
              </div>
            </div>
            <Link
              href="https://github.com/hank199599/Google-Assistant-APP"
              target="_blank"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              <Github className="mr-2 h-5 w-5" />
              {t("googleAssistant.hero.githubButton")}
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
                <span className="font-bold">{t("googleAssistant.deprecation.title")}</span>
              </div>
              <p className="mb-2">{t("googleAssistant.deprecation.description")}</p>
              <Link
                href="https://developers.google.com/assistant/ca-sunset"
                target="_blank"
                className="inline-flex items-center text-white underline hover:text-gray-200"
              >
                {t("googleAssistant.deprecation.link")} <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* How It Works Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  {t("googleAssistant.howItWorks.title")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("googleAssistant.howItWorks.subtitle")}
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
                    {t("googleAssistant.skillsOverview.title")}
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    {t("googleAssistant.skillsOverview.subtitle")}
                  </p>
                </div>
                <select
                  value={activeLanguage}
                  onChange={(e) => setActiveLanguage(e.target.value)}
                  className="mt-4 lg:mt-0 px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              {/* Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6">{activeLanguage}</h3>
                
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {availableCategories.map((category: { id: string; tag: string; name: string }) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-foreground hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <span className="mr-2">🔧</span>
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Skills */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {filteredProjects.map((project: Project) => (
                    <button
                      key={project.id}
                      className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex flex-col items-center justify-center text-white font-bold hover:scale-105 transition-transform cursor-pointer p-2 text-center"
                      title={t(`googleAssistant.projects.${project.id}.content`)}
                      onClick={() => setSelectedProject(project)}
                    >
                      <Image
                        src={project.src}
                        alt={t(`googleAssistant.projects.${project.id}.name`)}
                        width={60}
                        height={60}
                        className="mb-2 rounded"
                      />
                      <span className="text-xs text-center leading-tight">
                        {t(`googleAssistant.projects.${project.id}.name`)}
                      </span>
                    </button>
                  ))}
                </div>
                {filteredProjects.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    {t("googleAssistant.skillsOverview.noSkills")}
                  </div>
                )}
              </div>
            </div>

            {/* User Comments Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  {t("googleAssistant.userComments.title")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("googleAssistant.userComments.subtitle", { language: activeLanguage })}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userComments.map((comment, index) => (
                  <div key={index} className="glass-card rounded-2xl overflow-hidden shadow-lg">
                    <div 
                      className="p-4"
                      style={{
                        background: `linear-gradient(135deg, ${comment.bgColor[0]}, ${comment.bgColor[1]})`
                      }}
                    >
                      <h3 className="text-xl font-bold" style={{ color: comment.textColor }}>
                        {comment.projectName}
                      </h3>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-foreground mb-2">{comment.title}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{comment.reviewer}</p>
                      <p className="text-xs text-muted-foreground">{comment.date}</p>
                    </div>
                  </div>
                ))}
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
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <div className="flex items-start space-x-4">
                <Image
                  src={selectedProject.src}
                  alt={t(`googleAssistant.projects.${selectedProject.id}.name`)}
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <DialogTitle className="text-2xl mb-2">
                    {t(`googleAssistant.projects.${selectedProject.id}.name`)}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.languages.map((lang) => (
                      <Badge key={lang} variant="secondary">{lang}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {t(`googleAssistant.projects.${selectedProject.id}.content`)}
              </p>
            </div>
            <DialogFooter className="sm:justify-between gap-2 flex-col sm:flex-row">
              <Button asChild variant="outline">
                <Link href={selectedProject.githubLink} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Github 原始碼
                </Link>
              </Button>
              {selectedProject.actionLink === 'javascript:;' ? (
                <Button disabled variant="outline">
                  本服務已下線
                </Button>
              ) : (
                <Button asChild>
                  <Link href={selectedProject.actionLink} target="_blank">
                    網際網路檔案館的頁面備份
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