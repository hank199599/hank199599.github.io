import { GoogleAssistantData } from '@/types/google-assistant';

export const googleAssistantData: GoogleAssistantData = {
  statistics: [
    { id: 'total-skills', value: 32, label: {}, description: {} },
    { id: 'unique-users', value: 3000, label: {}, description: {} },
    { id: 'supported-languages', value: 10, label: {}, description: {} }
  ],

  categories: [
    { id: 'food', tag: 'fastfood', name: {} },
    { id: 'school', tag: 'school', name: {} },
    { id: 'reader', tag: 'chrome_reader_mode', name: {} },
    { id: 'color_lens', tag: 'color_lens', name: {} },
    { id: 'sports_esports', tag: 'sports_esports', name: {} },
    { id: 'science', tag: 'science', name: {} },
    { id: 'public', tag: 'public', name: {} },
    { id: 'cloud', tag: 'cloud', name: {} },
    { id: 'translate', tag: 'translate', name: {} },
    { id: 'date_range', tag: 'date_range', name: {} }
  ],

  projects: [
    {
      id: 'Food_Decider',
      name: {},
      category: { id: 'food', tag: 'fastfood', name: {} },
      src: 'https://lh3.googleusercontent.com/ydRrGO73QtkvNGjrclVYOSD6fGwWp3vHQTFLQUjEmLTjopR0xsXpI29bPPzgs5eYwO7mjobiXKdt=s90',
      languages: ['中文(臺灣)', '廣東話', '英文', '日文'],
      content: '',
      githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/%E7%BE%8E%E9%A3%9F%E6%B1%BA%E5%AE%9A%E5%99%A8',
      actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/00000058f29109ab',
      isActive: false
    },
    {
      id: 'Number_Elf',
      name: {},
      category: { id: 'sports_esports', tag: 'sports_esports', name: {} },
      src: 'https://lh3.googleusercontent.com/98fcN9pEn4mfaJJxil5jvKD6PADUa7d2LfMexZriVgMxXw47y8_If3bxuhibtClnscx4TvE0d7cP=s90',
      languages: ['中文(臺灣)', '廣東話', '英文', '日文', '韓文', '泰文', '德文'],
      content: '',
      githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/數字精靈',
      actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000008473a60dc8',
      isActive: false
    },
    {
      id: 'Insight_Station',
      name: {},
      category: { id: 'science', tag: 'science', name: {} },
      src: 'https://lh3.googleusercontent.com/m6AndjL1T-BndHICYTed_LPaF2P3APyFaOL_DxpSlkPORIi6w14xob0V-CbDdtd-I5KNWzsygMw=s90',
      languages: ['中文(臺灣)', '廣東話', '英文', '日文', '韓文', '泰文', '德文', '法文', '丹麥文', '荷蘭文', '西班牙文'],
      content: '',
      githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/洞察號',
      actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/00000038183bf1fb',
      isActive: false
    },
    {
      id: 'Daily_History',
      name: {},
      category: { id: 'school', tag: 'school', name: {} },
      src: 'https://lh3.googleusercontent.com/1U6-HhkKdaVzPMMsz5XmKZ31lTnOkXWz4eTuDcNTejlgatqouaKoniXkxfMC0AKvRx4wSjHmynvs=s90',
      languages: ['中文(臺灣)'],
      content: '',
      githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/%E7%BE%8E%E9%A3%9F%E6%B1%BA%E5%AE%9A%E5%99%A8',
      actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000d67993a1d2',
      isActive: false
    },
    {
      id: 'Taiwan_Dictoinary',
      name: {},
      category: { id: 'school', tag: 'school', name: {} },
      src: 'https://lh3.googleusercontent.com/b5mi7bsFMvz5vbzdQYkGvRTCZQlwgCOvIlmNAds6dvjuLGwC-gzhYDMowSi7_e4OR1o9fY0ecBY=s90',
      languages: ['中文(臺灣)'],
      content: '',
      githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/臺灣國語辭典',
      actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000008d7409cb2a',
      isActive: false
    },
    {
      id: 'Taiwan_Rail_Dictoinary',
      name: {},
      category: { id: 'school', tag: 'school', name: {} },
      src: 'https://lh3.googleusercontent.com/RD6WQND-5BmBiDt2UfnbrqnMIWquswEXE1hySqSCBHwLMgQLeS0taGu6y2Ezgqnr-ADzo637fVp1=s90',
      languages: ['中文(臺灣)'],
      content: '',
      githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/鐵道詞典',
      actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000862113b0f6',
      isActive: false
    },
    {
      id: 'Cangjie_Dictoinary',
      name: {},
      category: { id: 'school', tag: 'school', name: {} },
      src: 'https://lh3.googleusercontent.com/UVAu76LGBKhH-4DRHihBAQhF3tKBrjxr1ZE3n2N_o2QPbCSpbYl8Ue6_TD5YULulFmwupCoRbhI1=s90',
      languages: ['中文(臺灣)', '廣東話'],
      content: '',
      githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/倉頡字典',
      actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000009932f37dce',
      isActive: false
    },
    {
      id: 'Positive_Quote',
      name: {},
      category: { id: 'reader', tag: 'chrome_reader_mode', name: {} },
      src: 'https://lh3.googleusercontent.com/XAylvXmY2tTWiQVtuwbcan_nno8pM7q9Qro6aEBECzTEN-x8jqAjuMm-ZqL_qCVvvkYhgw1_VVNI=s90',
      languages: ['中文(臺灣)'],
      content: '',
      githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/正能量語錄',
      actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000b877fb7629',
      isActive: false
    },
    {
      id: 'Negative_Quote',
      name: {},
      category: { id: 'reader', tag: 'chrome_reader_mode', name: {} },
      src: 'https://lh3.googleusercontent.com/9eRDWvPEh3jeQmuBcpiXtX4gH9yTGqvyO1ur_PQ-K7H9KiR6A24zluD7ENZeIr0nNvshlOLH-yrw=s90',
      languages: ['中文(臺灣)'],
      content: '',
      githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/負能量語錄',
      actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000e8f5894304',
      isActive: false
    },
    {
      id: 'Today_Quote',
      name: {},
      category: { id: 'reader', tag: 'chrome_reader_mode', name: {} },
      src: 'https://lh3.googleusercontent.com/DPDoPBFLpDglYGoU2zNdzACtOFfE-rsPvK2kJC1jA_scJTJM69x8SmycybTIipNMC0LsJdz06j5qwQ=s90',
      languages: ['中文(臺灣)'],
      content: '',
      githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/今日名言',
      actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000002a10f761c0',
      isActive: false
    },
    {
      id: 'NASA_daily',
      name: {},
      category: { id: 'color_lens', tag: 'color_lens', name: {} },
      src: 'https://lh3.googleusercontent.com/NnDqEoQYzER27FJ8X-6fAxdRkSQ35j6MbiMfwMu5V_tqLZDopKQ1YcCPMLwwmIA-WQmEFaJ1Y6YA=s90',
      languages: ['中文(臺灣)', '廣東話'],
      content: '',
      githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/每日天文圖',
      actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/00000011ac49f35c',
      isActive: false
    },
    {
      id: 'Fortune_Master',
      name: {},
      category: { id: 'color_lens', tag: 'color_lens', name: {} },
      src: 'https://lh3.googleusercontent.com/hKT5442d4Mmrmx6tCPV6Ft-ZUwvR6zps3pmArImOjbCTKS5SjQM_bvUEmYixA8fDzwCwJoAPmR5I=s90',
      languages: ['中文(臺灣)', '廣東話'],
      content: '',
      githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/%E9%81%8B%E5%8B%A2%E5%A4%A7%E5%B8%AB',
      actionLink: 'javascript:;',
      isActive: false
    }
  ],

  comments: {
    'zh': [
      {
        projectName: '數字精靈',
        title: '很好玩啊，這根本就是終極密碼!',
        reviewer: '洪那馬',
        date: '2019年8月17日',
        textColor: '#ffffff',
        bgColor: ['#e51516', '#a20102']
      },
      {
        projectName: '洞察號',
        title: '好酷喔',
        reviewer: '是我',
        date: '2020年5月10日',
        textColor: '#ffffff',
        bgColor: ['#c23c02', '#732503']
      },
      {
        projectName: '詞語接龍',
        title: '挑戰你腦海中的詞語資料庫',
        reviewer: 'Google Taiwan',
        date: '2020年3月31日',
        textColor: '#ffffff',
        bgColor: ['#a6afb1', '#505657']
      }
    ],
    'en': [
      {
        projectName: 'Number Elf',
        title: 'this app is making me smarter!',
        reviewer: 'Keith Lloyd',
        date: 'September 10, 2019',
        textColor: '#ffffff',
        bgColor: ['#e51516', '#a20102']
      },
      {
        projectName: 'The Insight Station',
        title: 'GREAT APP',
        reviewer: 'Janninee Greenfield',
        date: 'June 3, 2021',
        textColor: '#ffffff',
        bgColor: ['#c23c02', '#732503']
      }
    ]
  },

  languages: [
    { code: 'zh-TW', name: '中文(臺灣)', urlCode: 'zh-TW' },
    { code: 'zh-HK', name: '廣東話', urlCode: 'zh-HK' },
    { code: 'en', name: '英文', urlCode: 'en' },
    { code: 'ja', name: '日文', urlCode: 'ja' },
    { code: 'ko', name: '韓文', urlCode: 'ko' },
    { code: 'th', name: '泰文', urlCode: 'th' },
    { code: 'de', name: '德文', urlCode: 'de' },
    { code: 'es', name: '西班牙文', urlCode: 'es' },
    { code: 'nl', name: '荷蘭文', urlCode: 'nl' },
    { code: 'da', name: '丹麥文', urlCode: 'da' },
    { code: 'fr', name: '法文', urlCode: 'fr' }
  ],

  langeuage_dict: [
    {
      id: "中文(臺灣)",
      categories: [
        { categoryId: "food", projectIds: ["Food_Decider"] },
        { categoryId: "school", projectIds: ["Daily_History", "Taiwan_Dictoinary", "Taiwan_Rail_Dictoinary", "Cangjie_Dictoinary"] },
        { categoryId: "reader", projectIds: ["Positive_Quote", "Negative_Quote", "Today_Quote"] },
        { categoryId: "color_lens", projectIds: ["NASA_daily", "Fortune_Master"] },
        { categoryId: "sports_esports", projectIds: ["Number_Elf"] },
        { categoryId: "science", projectIds: ["Insight_Station"] },
      ],
    },
    {
      id: "廣東話",
      categories: [
        { categoryId: "food", projectIds: ["Food_Decider"] },
        { categoryId: "school", projectIds: ["Cangjie_Dictoinary"] },
        { categoryId: "color_lens", projectIds: ["NASA_daily", "Fortune_Master"] },
        { categoryId: "sports_esports", projectIds: ["Number_Elf"] },
        { categoryId: "science", projectIds: ["Insight_Station"] },
      ],
    },
    {
      id: "英文",
      categories: [
        { categoryId: "food", projectIds: ["Food_Decider"] },
        { categoryId: "sports_esports", projectIds: ["Number_Elf"] },
        { categoryId: "science", projectIds: ["Insight_Station"] },
      ],
    },
    {
      id: "日文",
      categories: [
        { categoryId: "food", projectIds: ["Food_Decider"] },
        { categoryId: "sports_esports", projectIds: ["Number_Elf"] },
        { categoryId: "science", projectIds: ["Insight_Station"] },
      ],
    },
    {
      id: "韓文",
      categories: [
        { categoryId: "sports_esports", projectIds: ["Number_Elf"] },
        { categoryId: "science", projectIds: ["Insight_Station"] },
      ],
    },
    {
      id: "泰文",
      categories: [
        { categoryId: "sports_esports", projectIds: ["Number_Elf"] },
        { categoryId: "science", projectIds: ["Insight_Station"] },
      ],
    },
    {
      id: "德文",
      categories: [
        { categoryId: "sports_esports", projectIds: ["Number_Elf"] },
        { categoryId: "science", projectIds: ["Insight_Station"] },
      ],
    },
    {
      id: "法文",
      categories: [
        { categoryId: "science", projectIds: ["Insight_Station"] },
      ],
    },
    {
      id: "丹麥文",
      categories: [
        { categoryId: "science", projectIds: ["Insight_Station"] },
      ],
    },
    {
      id: "荷蘭文",
      categories: [
        { categoryId: "science", projectIds: ["Insight_Station"] },
      ],
    },
    {
      id: "西班牙文",
      categories: [
        { categoryId: "science", projectIds: ["Insight_Station"] },
      ],
    },
  ],

  detail_dict: [
    { id: 'Food_Decider', src: 'https://lh3.googleusercontent.com/ydRrGO73QtkvNGjrclVYOSD6fGwWp3vHQTFLQUjEmLTjopR0xsXpI29bPPzgs5eYwO7mjobiXKdt=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/%E7%BE%8E%E9%A3%9F%E6%B1%BA%E5%AE%9A%E5%99%A8', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/00000058f29109ab', isActive: false, contentId: 'Food_Decider' },
    { id: 'Number_Elf', src: 'https://lh3.googleusercontent.com/98fcN9pEn4mfaJJxil5jvKD6PADUa7d2LfMexZriVgMxXw47y8_If3bxuhibtClnscx4TvE0d7cP=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/數字精靈', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000008473a60dc8', isActive: false, contentId: 'Number_Elf' },
    { id: 'Insight_Station', src: 'https://lh3.googleusercontent.com/m6AndjL1T-BndHICYTed_LPaF2P3APyFaOL_DxpSlkPORIi6w14xob0V-CbDdtd-I5KNWzsygMw=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/洞察號', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/00000038183bf1fb', isActive: false, contentId: 'Insight_Station' },
    { id: 'Daily_History', src: 'https://lh3.googleusercontent.com/1U6-HhkKdaVzPMMsz5XmKZ31lTnOkXWz4eTuDcNTejlgatqouaKoniXkxfMC0AKvRx4wSjHmynvs=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/%E7%BE%8E%E9%A3%9F%E6%B1%BA%E5%AE%9A%E5%99%A8', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000d67993a1d2', isActive: false, contentId: 'Daily_History' },
    { id: 'Taiwan_Dictoinary', src: 'https://lh3.googleusercontent.com/b5mi7bsFMvz5vbzdQYkGvRTCZQlwgCOvIlmNAds6dvjuLGwC-gzhYDMowSi7_e4OR1o9fY0ecBY=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/臺灣國語辭典', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000008d7409cb2a', isActive: false, contentId: 'Taiwan_Dictoinary' },
    { id: 'Taiwan_Rail_Dictoinary', src: 'https://lh3.googleusercontent.com/RD6WQND-5BmBiDt2UfnbrqnMIWquswEXE1hySqSCBHwLMgQLeS0taGu6y2Ezgqnr-ADzo637fVp1=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/鐵道詞典', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000862113b0f6', isActive: false, contentId: 'Taiwan_Rail_Dictoinary' },
    { id: 'Cangjie_Dictoinary', src: 'https://lh3.googleusercontent.com/UVAu76LGBKhH-4DRHihBAQhF3tKBrjxr1ZE3n2N_o2QPbCSpbYl8Ue6_TD5YULulFmwupCoRbhI1=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/倉頡字典', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000009932f37dce', isActive: false, contentId: 'Cangjie_Dictoinary' },
    { id: 'Positive_Quote', src: 'https://lh3.googleusercontent.com/XAylvXmY2tTWiQVtuwbcan_nno8pM7q9Qro6aEBECzTEN-x8jqAjuMm-ZqL_qCVvvkYhgw1_VVNI=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/正能量語錄', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000b877fb7629', isActive: false, contentId: 'Positive_Quote' },
    { id: 'Negative_Quote', src: 'https://lh3.googleusercontent.com/9eRDWvPEh3jeQmuBcpiXtX4gH9yTGqvyO1ur_PQ-K7H9KiR6A24zluD7ENZeIr0nNvshlOLH-yrw=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/負能量語錄', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000e8f5894304', isActive: false, contentId: 'Negative_Quote' },
    { id: 'Today_Quote', src: 'https://lh3.googleusercontent.com/DPDoPBFLpDglYGoU2zNdzACtOFfE-rsPvK2kJC1jA_scJTJM69x8SmycybTIipNMC0LsJdz06j5qwQ=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/今日名言', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000002a10f761c0', isActive: false, contentId: 'Today_Quote' },
    { id: 'NASA_daily', src: 'https://lh3.googleusercontent.com/NnDqEoQYzER27FJ8X-6fAxdRkSQ35j6MbiMfwMu5V_tqLZDopKQ1YcCPMLwwmIA-WQmEFaJ1Y6YA=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/每日天文圖', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/00000011ac49f35c', isActive: false, contentId: 'NASA_daily' },
    { id: 'Fortune_Master', src: 'https://lh3.googleusercontent.com/hKT5442d4Mmrmx6tCPV6Ft-ZUwvR6zps3pmArImOjbCTKS5SjQM_bvUEmYixA8fDzwCwJoAPmR5I=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/%E9%81%8B%E5%8B%A2%E5%A4%A7%E5%B8%AB', actionLink: 'javascript:;', isActive: false, contentId: 'Fortune_Master' }
  ],

  supplementalDictionaries: {
    action_name_dict: [
      { id: 'Food_Decider' },
      { id: 'Daily_History' },
      { id: 'Taiwan_Dictoinary' },
      { id: 'Taiwan_Rail_Dictoinary' },
      { id: 'Cangjie_Dictoinary' },
      { id: 'Positive_Quote' },
      { id: 'Negative_Quote' },
      { id: 'Today_Quote' },
      { id: 'NASA_daily' },
      { id: 'Fortune_Master' },
      { id: 'Brain_Game' },
      { id: 'Riddle_Game' },
      { id: 'Number_Elf' },
      { id: 'Cows_and_Bulls' },
      { id: 'Flag_Game' },
      { id: 'text_solitaire' },
      { id: 'idiom_solitaire' },
      { id: 'easy_text_solitaire' },
      { id: 'twenty_four_points' },
      { id: 'Insight_Station' },
      { id: 'ISS_Info' },
      { id: 'Google_Trend' },
      { id: 'Moon_info' },
      { id: 'Toeic_tester' },
      { id: 'Zip_code' },
      { id: 'Blood_Index' },
      { id: 'Power_Index' },
      { id: 'TW_AQI_index' },
      { id: 'TW_UVI_index' },
      { id: 'TW_Radiation_index' },
      { id: 'TW_Sea_Waether' },
      { id: 'World_AQI_index' },
      { id: 'TW_Weather_helper' },
      { id: 'TW_WG_Translator' },
      { id: 'Morse_Translator' },
      { id: 'Binary_Translator' },
      { id: 'Invoice-redemptioner' }
    ],
    assistant_name_dict: [
      { id: 'zh-TW' },
      { id: 'en' },
      { id: 'zh-HK' },
      { id: 'ja' },
      { id: 'ko' },
      { id: 'th' },
      { id: 'de' },
      { id: 'es' },
      { id: 'nl' },
      { id: 'da' },
      { id: 'fr' }
    ],
    tab_dict: [
      { id: 'food', tag: 'fastfood' },
      { id: 'school', tag: 'school' },
      { id: 'reader', tag: 'chrome_reader_mode' },
      { id: 'color_lens', tag: 'color_lens' },
      { id: 'sports_esports', tag: 'sports_esports' },
      { id: 'science', tag: 'science' },
      { id: 'public', tag: 'public' },
      { id: 'cloud', tag: 'cloud' },
      { id: 'translate', tag: 'translate' },
      { id: 'date_range', tag: 'date_range' }
    ],
    langeuage_url_dict: [
      { id: '中文(臺灣)', urlCode: 'zh-TW' },
      { id: '廣東話', urlCode: 'zh-HK' },
      { id: '英文', urlCode: 'en' },
      { id: '日文', urlCode: 'ja' },
      { id: '韓文', urlCode: 'ko' },
      { id: '泰文', urlCode: 'th' },
      { id: '德文', urlCode: 'de' },
      { id: '西班牙文', urlCode: 'es' },
      { id: '荷蘭文', urlCode: 'nl' },
      { id: '丹麥文', urlCode: 'da' },
      { id: '法文', urlCode: 'fr' }
    ]
  }
};