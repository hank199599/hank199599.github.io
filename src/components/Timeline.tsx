'use client';

import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink, GraduationCap, Shield, BookmarkIcon, Calendar, Building2 } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineEvent {
  date: string;
  title: string;
  company: string;
  description: string;
  location?: string;
  duration?: string;
  link?: { text: string; };
}

const Timeline = () => {
  const { t } = useTranslation('timeline');
  const events = t('events', { returnObjects: true }) as unknown as TimelineEvent[];

  const originalEvents = [
    {
      date: "2024/07-NOW",
      type: "work",
      link: { url: "https://www.trendmicro.com/zh_tw/business.html" }
    },
    {
      date: "2022/09-2024/04",
      type: "work",
      link: { url: "https://www.linetv.tw/" }
    },
    {
      date: "2022/08",
      type: "education",
      link: { url: "https://www.sciencedirect.com/science/article/pii/S0020025522004674" }
    },
    {
      date: "2022/03-2022/06",
      type: "work",
      link: { url: "https://www.ntust.edu.tw/" }
    },
    {
      date: "2021/11/29",
      type: "activity",
      link: { url: "https://youtu.be/Qc5aUWCA43k?t=16550" }
    },
    {
      date: "2021/9",
      type: "activity",
      link: { url: "https://ithelp.ithome.com.tw/users/20141015/ironman/4365" }
    },
    {
      date: "2021/08/20",
      type: "activity",
      link: { url: "https://www.accupass.com/event/2104250103576884283220" }
    },
    {
      date: "2021/07/10",
      type: "activity",
      link: { url: "https://www.meetup.com/en-AU/TensorFlow-User-Group-Taipei/events/277170902/" }
    },
    {
      date: "2020/2022",
      type: "education",
      icon: <GraduationCap className="h-4 w-4" />
    },
    {
      date: "2018/07~10",
      type: "work",
      icon: <Shield className="h-4 w-4" />
    },
    {
      date: "2016/2018",
      type: "work",
      icon: <MapPin className="h-4 w-4" />
    },
    {
      date: "2014/2015",
      type: "work",
      icon: <MapPin className="h-4 w-4" />
    },
    {
      date: "2013/2018",
      type: "education",
      icon: <GraduationCap className="h-4 w-4" />
    },
    {
      date: "2014/2016",
      type: "activity",
      icon: <BookmarkIcon className="h-4 w-4" />,
      link: { url: "https://apk.tw/thread-674690-1-1.html" }
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
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {events.map((event, index) => {
                const Icon = getTypeIcon(originalEvents[index].type);
                
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
                            <Badge variant="outline" className={getTypeColor(originalEvents[index].type)}>
                              {t(`${originalEvents[index].type}`)}
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
                          <p className="text-muted-foreground mb-4 whitespace-pre-line">{event.description}</p>
                          {
                            originalEvents[index].link && event.link && (
                                <Button 
                                  variant="glass" 
                                  size="sm" 
                                  asChild
                                >
                                  <Link href={originalEvents[index].link!.url} target="_blank" className="inline-flex items-center">
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