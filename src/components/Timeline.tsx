'use client';

import { Button } from "@/components/ui/button";
import { School, MapPin, ExternalLink, Youtube, BookOpen, GraduationCap, Award, Shield, BookmarkIcon, Calendar, Building2 } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Timeline = () => {
  const events = [
    {
      date: "2024/07-NOW",
      title: "Cloud Engineer",
      company: "Trend Micro (趨勢科技)",
      type: "work",
      description: "雲端工程師",
      link: {
        url: "https://www.trendmicro.com/zh_tw/business.html",
        text: "官方頁面"
      }
    },
    {
      date: "2022/09-2024/04",
      title: "後端工程師",
      company: "LINE TV (巧克科技)",
      type: "work",
      description: "後端工程師",
      link: {
        url: "https://www.linetv.tw/",
        text: "官方頁面"
      }
    },
    {
      date: "2022/08",
      title: "期刊論文發表",
      company: "S. M. Chen and S. H. Yu",
      type: "education",
      description: "「Multiattribute decision making based on novel score function and the power operator of interval-valued intuitionistic fuzzy values」\nInformation Sciences, vol. 606, pp. 763-785, August 2022.",
      link: {
        url: "https://www.sciencedirect.com/science/article/pii/S0020025522004674",
        text: "Journal Paper 頁面"
      }
    },
    {
      date: "2022/03-2022/06",
      title: "教學助理 TA",
      company: "國立臺灣科技大學",
      type: "work",
      description: "CS2006301 計算機組織\n1.Moodle教學系統的操作\n(為論文指導教授所教授的課)",
      location: "台北市",
      link: {
        url: "https://www.ntust.edu.tw/",
        text: "學校頁面"
      }
    },
    {
      date: "2021/11/29",
      title: "DevFest 2021 講者",
      company: "Google Developer Group Taipei/Taoyuan",
      type: "activity",
      description: "由 Google Developer Group Taipei/Taoyuan 主辦,\n在這個線上演講中:\n分享開發Google Assistant 與語音對話設計的主要流程\n並提供於鐵人賽分享的詳細教學。",
      link: {
        url: "https://youtu.be/Qc5aUWCA43k?t=16550",
        text: "線上直播頁面"
      }
    },
    {
      date: "2021/9",
      title: "2021 iThome 鐵人賽",
      company: "IT邦幫忙",
      type: "activity",
      description: "由 IT邦幫忙 主辦,\n在這個連續30日不間斷的教學中:\n分享開發Google Assistant 與語音對話設計的主要流程",
      link: {
        url: "https://ithelp.ithome.com.tw/users/20141015/ironman/4365",
        text: "教學頁面"
      }
    },
    {
      date: "2021/08/20",
      title: "助教",
      company: "Woman in AI",
      type: "activity",
      description: "本工作坊會從一個資料科學家的角度，手把手教學AI的操作流程，你不需要具備高深的程式能力。\n工作坊會由業界學長姐擔任導師和助教，帶領大家從基本的資料處理開始，帶到如何將數據轉換為電腦可運算的數據。",
      link: {
        url: "https://www.accupass.com/event/2104250103576884283220",
        text: "ACCUPASS 頁面"
      }
    },
    {
      date: "2021/07/10",
      title: "講者",
      company: "TensorFlow Everywhere",
      type: "activity",
      description: "這是一項由全球TensorFlow和機器學習社區的負責人舉辦的一系列活動。",
      link: {
        url: "https://www.meetup.com/en-AU/TensorFlow-User-Group-Taipei/events/277170902/",
        text: "Meetup 頁面"
      }
    },
    {
      date: "2020/2022",
      title: "就讀國立台灣科技大學",
      company: "國立台灣科技大學",
      type: "education",
      description: "資訊工程所",
      icon: <GraduationCap className="h-4 w-4" />
    },
    {
      date: "2018/07~10",
      title: "義務役",
      company: "陸軍",
      type: "work",
      description: "陸軍",
      icon: <Shield className="h-4 w-4" />,
      duration: "(2018/07/10/~2018/10/21，共四個月)"
    },
    {
      date: "2016/2018",
      title: "教學助理 TA",
      company: "國立暨南國際大學",
      type: "work",
      description: "1.協助出題與批改考卷\n2.Moodle教學系統的操作\n3.曾擔任普通物理、材料科學導論等課程，是專題指導教授所教授的課",
      location: "南投縣",
      icon: <MapPin className="h-4 w-4" />,
      duration: "(2016/02~2018/06，共兩年五個月)"
    },
    {
      date: "2014/2015",
      title: "工讀生",
      company: "國立暨南國際大學圖書館",
      type: "work",
      description: "1.跨館的借書、還書協助\n2.圖書館閉館協助",
      location: "南投縣",
      icon: <MapPin className="h-4 w-4" />,
      duration: "(2014/11~2015/06，共七個月)"
    },
    {
      date: "2013/2018",
      title: "就讀國立暨南國際大學",
      company: "國立暨南國際大學",
      type: "education",
      description: "應用材料與光電工程學系",
      icon: <GraduationCap className="h-4 w-4" />,
      duration: "(2013/09~2018/06)"
    },
    {
      date: "2014/2016",
      title: "擔任論壇版主",
      company: "apk.tw",
      type: "activity",
      description: "職務內容為：\n管理論壇、發布或統整版上資源。\n任職期間鑽研BB代碼(簡化版HTML)應用到極致。\n為眾多版友帶來極簡美化的瀏覽與統整資源。",
      icon: <BookmarkIcon className="h-4 w-4" />,
      link: {
        url: "https://apk.tw/thread-674690-1-1.html",
        text: "相關頁面"
      }
    }
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'work':
        return "bg-blue-500/10 text-blue-700 border-blue-200";
      case 'education':
        return "bg-green-500/10 text-green-700 border-green-200";
      case 'activity':
        return "bg-purple-500/10 text-purple-700 border-purple-200";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'work':
        return Building2;
      case 'education':
        return GraduationCap;
      default:
        return Calendar;
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            時間軸
          </h1>
          <p className="text-xl text-muted-foreground">
            我的成長歷程
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {events.map((event, index) => {
                const Icon = getTypeIcon(event.type);
                
                return (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center relative z-10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <CardTitle className="text-xl">{event.title}</CardTitle>
                            <Badge variant="outline" className={getTypeColor(event.type)}>
                              {event.type === "work" ? "工作經驗" : 
                               event.type === "education" ? "教育背景" : "活動經歷"}
                            </Badge>
                          </div>
                          <CardDescription className="flex flex-col gap-1">
                            <span className="font-medium text-foreground">{event.company}</span>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                              </span>
                              {event.location && (
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {event.location}
                                </span>
                              )}
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{event.description}</p>
                          {event.link && (
                            <Button variant="outline" size="sm" asChild>
                              <Link href={event.link.url} target="_blank" className="inline-flex items-center">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                {event.link.text}
                              </Link>
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline; 