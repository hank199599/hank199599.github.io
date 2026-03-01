'use client';

import '@mcp-b/global';
import { useWebMCP } from '@mcp-b/react-webmcp';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import i18n from '@/i18n/config';
import { googleAssistantData, action_name_dict } from '@/data/google-assistant';

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
    description: 'Scroll to a specific section of the current page (works on the home page).',
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

function GetSitePagesTool() {
  const { t } = useTranslation('navigation');

  useWebMCP({
    name: 'get_site_pages',
    description: 'Get the full site structure with all available pages and their descriptions.',
    inputSchema: {},
    annotations: {
      title: 'Get Site Pages',
      readOnlyHint: true,
    },
    handler: async () => {
      return {
        pages: [
          {
            path: '/',
            name: t('home'),
            description: 'Main portfolio page with profile, about, work experience, skills, and education sections.',
          },
          {
            path: '/timeline/',
            name: t('timeline'),
            description: 'Career and life timeline showing work, education, and community activity events in chronological order.',
          },
          {
            path: '/gdg-taipei-projects/',
            name: 'GDG Taipei Projects',
            description: 'Open-source projects by Google Developer Group Taipei, including AI-powered RSS auto-posting, social media APIs, and the GDG Taiwan website.',
          },
          {
            path: '/google-assistant/',
            name: 'Google Assistant',
            description: 'Showcase of 32+ Google Assistant voice applications across 10 languages and multiple categories.',
          },
        ],
        currentPath: window.location.pathname,
      };
    },
  });

  return null;
}

function NavigateToPageTool() {
  const router = useRouter();

  useWebMCP({
    name: 'navigate_to_page',
    description: 'Navigate to a different page on the website.',
    inputSchema: {
      page: z.enum(['/', '/timeline/', '/gdg-taipei-projects/', '/google-assistant/']).describe('The page path to navigate to'),
    },
    annotations: {
      title: 'Navigate to Page',
      readOnlyHint: false,
      idempotentHint: true,
    },
    handler: async ({ page }) => {
      router.push(page);
      return { success: true, page, message: `Navigated to ${page}` };
    },
  });

  return null;
}

function GetTimelineTool() {
  const { t } = useTranslation('timeline');

  useWebMCP({
    name: 'get_timeline',
    description: 'Get the career and life timeline events including work experience, education, and community activities.',
    inputSchema: {},
    annotations: {
      title: 'Get Timeline',
      readOnlyHint: true,
    },
    handler: async () => {
      const events = t('events', { returnObjects: true }) as Array<{
        date: string;
        title: string;
        company: string;
        description: string;
        location?: string;
        duration?: string;
        type: string;
        link?: { text: string; url: string };
      }>;

      return {
        title: t('title'),
        subtitle: t('subtitle'),
        events,
      };
    },
  });

  return null;
}

function GetGdgProjectsTool() {
  const { t } = useTranslation('gdgTaipei');

  useWebMCP({
    name: 'get_gdg_projects',
    description: 'Get GDG Taipei open-source projects including project details, tech stacks, and community information.',
    inputSchema: {},
    annotations: {
      title: 'Get GDG Projects',
      readOnlyHint: true,
    },
    handler: async () => {
      const projects = [
        {
          id: 'rss-auto-post',
          name: t('projects.rss-auto-post.name'),
          description: t('projects.rss-auto-post.description'),
          features: t('projects.rss-auto-post.features', { returnObjects: true }),
          techStack: ['JavaScript', 'Google Apps Script', 'Firebase', 'Facebook Graph API', 'Threads API', 'Gemini AI'],
          githubUrl: 'https://github.com/GDGTaipei/rss-auto-post-facebook-with-gemini',
        },
        {
          id: 'social-media-api',
          name: t('projects.social-media-api.name'),
          description: t('projects.social-media-api.description'),
          features: t('projects.social-media-api.features', { returnObjects: true }),
          techStack: ['TypeScript', 'Firebase', 'Express', 'Vertex AI', 'GitHub Actions'],
          githubUrl: 'https://github.com/GDGTaipei/SocialMediaPost_Cloud_Function',
        },
        {
          id: 'gdg-taiwan-website',
          name: t('projects.gdg-taiwan-website.name'),
          description: t('projects.gdg-taiwan-website.description'),
          features: t('projects.gdg-taiwan-website.features', { returnObjects: true }),
          techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'react-i18next', 'next-sitemap', 'Firebase'],
          githubUrl: 'https://github.com/gdg-twhk/gdg-taiwan-React',
          demoUrl: 'https://gdg.tw',
        },
      ];

      return {
        about: {
          title: t('about.title'),
          subtitle: t('about.subtitle'),
        },
        community: {
          website: 'https://gdg.community.dev/gdg-taipei/',
          github: 'https://github.com/GDGTaipei',
        },
        projects,
      };
    },
  });

  return null;
}

function GetGoogleAssistantProjectsTool() {
  const { t } = useTranslation('googleAssistant');

  useWebMCP({
    name: 'get_google_assistant_projects',
    description: 'Get Google Assistant voice application projects with details, supported languages, and user reviews.',
    inputSchema: {},
    annotations: {
      title: 'Get Google Assistant Projects',
      readOnlyHint: true,
    },
    handler: async () => {
      const projects = googleAssistantData.projects.map((p) => ({
        id: p.id,
        name: action_name_dict[p.id] ?? {},
        category: p.category.id,
        languages: p.languages,
        githubLink: p.githubLink,
        isActive: p.isActive,
      }));

      const categories = googleAssistantData.categories.map((c) => ({
        id: c.id,
        name: t(`categories.${c.id}`),
      }));

      const supportedLanguages = googleAssistantData.languages.map((l) => ({
        code: l.code,
        name: t(`languages.${l.code}`),
      }));

      return {
        stats: {
          totalSkills: t('stats.skills.number'),
          uniqueUsers: t('stats.users.number'),
          supportedLanguages: t('stats.languages.number'),
        },
        deprecationNote: t('deprecation.description'),
        categories,
        supportedLanguages,
        projects,
      };
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
      <GetSitePagesTool />
      <NavigateToPageTool />
      <GetTimelineTool />
      <GetGdgProjectsTool />
      <GetGoogleAssistantProjectsTool />
    </>
  );
}
