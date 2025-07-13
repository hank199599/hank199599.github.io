export interface ActionProject {
  id: string;
  name: Record<string, string>; // language -> name mapping
  category: ProjectCategory;
  src: string; // icon URL
  languages: string[];
  content: string;
  githubLink: string;
  actionLink: string;
  isActive: boolean;
}

export interface ProjectCategory {
  id: string;
  tag: string;
  name: Record<string, string>; // language -> name mapping
}

export interface UserComment {
  projectName: string;
  title: string;
  reviewer: string;
  date: string;
  textColor: string;
  bgColor: [string, string]; // gradient colors
}

export interface StatisticItem {
  id: string;
  value: number;
  label: Record<string, string>; // language -> label mapping
  description: Record<string, string>; // language -> description mapping
}

export interface LanguageSupport {
  code: string;
  name: string;
  urlCode: string;
}

export interface GoogleAssistantData {
  statistics: StatisticItem[];
  categories: ProjectCategory[];
  projects: ActionProject[];
  comments: Record<string, UserComment[]>; // language code -> comments
  languages: LanguageSupport[];
  langeuage_dict: {
    id: string;
    categories: {
      categoryId: string;
      projectIds: string[];
    }[];
  }[];
  detail_dict: {
    id: string;
    src: string;
    githubLink: string;
    actionLink: string;
    isActive: boolean;
    contentId: string;
  }[];
  supplementalDictionaries: {
    action_name_dict: { id: string }[];
    assistant_name_dict: { id: string }[];
    tab_dict: { id: string; tag: string }[];
    langeuage_url_dict: { id: string; urlCode: string }[];
  };
}