'use client';

import '@mcp-b/global';
import { useWebMCP } from '@mcp-b/react-webmcp';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import i18n from '@/i18n/config';

function GetProfileInfoTool() {
  const { t } = useTranslation('mainSection');

  useWebMCP({
    name: 'get_profile_info',
    description: 'Get the profile owner\'s basic information including name, job title, quote, and contact links.',
    inputSchema: {},
    annotations: {
      title: 'Get Profile Info',
      readOnlyHint: true,
    },
    handler: async () => {
      return {
        name: t('hero.name'),
        greeting: t('hero.greeting'),
        quote: t('hero.quote'),
        jobTitle: t('hero.jobTitle'),
        contacts: {
          github: 'https://github.com/hank199599',
          linkedin: 'https://www.linkedin.com/in/shaohungyu/',
          email: 'hank199599@gmail.com',
        },
      };
    },
  });

  return null;
}

function GetAboutInfoTool() {
  const { t } = useTranslation('mainSection');

  useWebMCP({
    name: 'get_about_info',
    description: 'Get detailed information about the profile owner, including professional background, tech stack, and expertise highlights.',
    inputSchema: {},
    annotations: {
      title: 'Get About Info',
      readOnlyHint: true,
    },
    handler: async () => {
      return {
        professionalBackground: {
          paragraph1: t('about.professionalBackground.paragraph1'),
          paragraph2: t('about.professionalBackground.paragraph2'),
        },
        techStack: ['Python', 'Node.js', 'GCP', 'Firebase', 'SQL', 'Keras', 'DialogFlow'],
        highlights: {
          cloud: {
            title: t('about.highlights.cloud.title'),
            description: t('about.highlights.cloud.description'),
          },
          backend: {
            title: t('about.highlights.backend.title'),
            description: t('about.highlights.backend.description'),
          },
          data: {
            title: t('about.highlights.data.title'),
            description: t('about.highlights.data.description'),
          },
          ai: {
            title: t('about.highlights.ai.title'),
            description: t('about.highlights.ai.description'),
          },
        },
      };
    },
  });

  return null;
}

function GetWorkExperienceTool() {
  const { t } = useTranslation('mainSection');

  useWebMCP({
    name: 'get_work_experience',
    description: 'Get the profile owner\'s work experience including job titles, companies, achievements, and technologies used.',
    inputSchema: {},
    annotations: {
      title: 'Get Work Experience',
      readOnlyHint: true,
    },
    handler: async () => {
      const jobs = t('experience.jobs', { returnObjects: true }) as Array<{
        title: string;
        company: string;
        location: string;
        period: string;
        description: string;
        achievements: string[];
        technologies: string[];
      }>;

      return { jobs };
    },
  });

  return null;
}

function GetSkillsTool() {
  const { t } = useTranslation('mainSection');

  useWebMCP({
    name: 'get_skills',
    description: 'Get the profile owner\'s professional skills organized by category (cloud, devops, backend) and key projects.',
    inputSchema: {},
    annotations: {
      title: 'Get Skills',
      readOnlyHint: true,
    },
    handler: async () => {
      const categories = {
        cloud: {
          title: t('skills.categories.cloud.title'),
          skills: t('skills.categories.cloud.skills', { returnObjects: true }),
        },
        devops: {
          title: t('skills.categories.devops.title'),
          skills: t('skills.categories.devops.skills', { returnObjects: true }),
        },
        backend: {
          title: t('skills.categories.backend.title'),
          skills: t('skills.categories.backend.skills', { returnObjects: true }),
        },
      };

      const projects = t('skills.projects', { returnObjects: true }) as Array<{
        title: string;
        description: string;
        tags: string[];
      }>;

      return { categories, projects };
    },
  });

  return null;
}

function GetEducationTool() {
  const { t } = useTranslation('mainSection');

  useWebMCP({
    name: 'get_education',
    description: 'Get the profile owner\'s education background including degrees, schools, coursework, achievements, and certifications.',
    inputSchema: {},
    annotations: {
      title: 'Get Education',
      readOnlyHint: true,
    },
    handler: async () => {
      const educationHistory = t('education.educationHistory', { returnObjects: true }) as Array<{
        degree: string;
        school: string;
        location: string;
        period: string;
        description: string;
        coursework: string[];
        achievements: string[];
      }>;

      const certifications = {
        items: t('education.certifications.items', { returnObjects: true }) as Array<{
          name: string;
          issuer: string;
          score: string;
          year: string;
        }>,
      };

      return { educationHistory, certifications };
    },
  });

  return null;
}

function SwitchLanguageTool() {
  useWebMCP({
    name: 'switch_language',
    description: 'Switch the website display language between English (en) and Traditional Chinese (zh).',
    inputSchema: {
      language: z.enum(['en', 'zh']).describe('The language to switch to: "en" for English, "zh" for Traditional Chinese'),
    },
    annotations: {
      title: 'Switch Language',
      readOnlyHint: false,
      idempotentHint: true,
    },
    handler: async ({ language }) => {
      i18n.changeLanguage(language);
      return {
        success: true,
        currentLanguage: language,
        message: `Language switched to ${language === 'en' ? 'English' : 'Traditional Chinese'}`,
      };
    },
  });

  return null;
}

function SwitchThemeTool() {
  const { setTheme, theme } = useTheme();

  useWebMCP({
    name: 'switch_theme',
    description: 'Switch the website theme between light, dark, and system default.',
    inputSchema: {
      theme: z.enum(['light', 'dark', 'system']).describe('The theme to apply: "light", "dark", or "system"'),
    },
    annotations: {
      title: 'Switch Theme',
      readOnlyHint: false,
      idempotentHint: true,
    },
    handler: async ({ theme: newTheme }) => {
      setTheme(newTheme);
      return {
        success: true,
        previousTheme: theme,
        currentTheme: newTheme,
        message: `Theme switched to ${newTheme}`,
      };
    },
  });

  return null;
}

function NavigateToSectionTool() {
  useWebMCP({
    name: 'navigate_to_section',
    description: 'Scroll to a specific section of the portfolio page.',
    inputSchema: {
      section: z.enum(['home', 'about', 'experience', 'skills', 'education']).describe('The section to navigate to'),
    },
    annotations: {
      title: 'Navigate to Section',
      readOnlyHint: true,
      idempotentHint: true,
    },
    handler: async ({ section }) => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return { success: true, section, message: `Scrolled to ${section} section` };
      }
      return { success: false, section, message: `Section "${section}" not found` };
    },
  });

  return null;
}

export default function WebMCPTools() {
  return (
    <>
      <GetProfileInfoTool />
      <GetAboutInfoTool />
      <GetWorkExperienceTool />
      <GetSkillsTool />
      <GetEducationTool />
      <SwitchLanguageTool />
      <SwitchThemeTool />
      <NavigateToSectionTool />
    </>
  );
}
