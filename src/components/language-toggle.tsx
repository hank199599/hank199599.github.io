"use client";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import i18n from "@/i18n/config";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


const languages = [
    { code: 'en', name: "English" },
    { code: 'zh', name: "繁體中文" },
  ];
  
export function LanguageToggle() {
  const router = useRouter();
  const [language, setLanguage] = useState(i18n.language);
  
  useEffect(() => {
    setLanguage(i18n.language);
  }, [language]);
  
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    router.refresh();
  };

  return (
    <Select onValueChange={handleLanguageChange} defaultValue={i18n.language}>
      <SelectTrigger>
        <SelectValue placeholder={languages.find(language => language.code === i18n.language)?.name} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              {language.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}