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
        { categoryId: "school", projectIds: ["Daily_History", "Taiwan_Dictoinary", "Taiwan_Rail_Dictoinary", "Cangjie_Dictoinary", "Toeic_tester"] },
        { categoryId: "reader", projectIds: ["Positive_Quote", "Negative_Quote", "Today_Quote"] },
        { categoryId: "color_lens", projectIds: ["NASA_daily", "Fortune_Master"] },
        { categoryId: "sports_esports", projectIds: ["Brain_Game", "Riddle_Game", "Number_Elf", "Cows_and_Bulls", "Flag_Game", "text_solitaire", "idiom_solitaire", "easy_text_solitaire", "twenty_four_points"] },
        { categoryId: "science", projectIds: ["Insight_Station", "ISS_Info", "Google_Trend", "Moon_info"] },
        { categoryId: "public", projectIds: ["Zip_code", "Blood_Index", "Power_Index"] },
        { categoryId: "cloud", projectIds: ["TW_AQI_index", "TW_UVI_index", "TW_Radiation_index", "TW_Sea_Waether", "World_AQI_index", "TW_Weather_helper"] },
        { categoryId: "translate", projectIds: ["TW_WG_Translator", "Morse_Translator", "Binary_Translator"] },
        { categoryId: "date_range", projectIds: ["Invoice-redemptioner"] }
      ],
    },
    {
      id: "廣東話",
      categories: [
        { categoryId: "food", projectIds: ["Food_Decider"] },
        { categoryId: "school", projectIds: ["Cangjie_Dictoinary"] },
        { categoryId: "color_lens", projectIds: ["NASA_daily", "Fortune_Master"] },
        { categoryId: "sports_esports", projectIds: ["Number_Elf", "Cows_and_Bulls", "twenty_four_points"] },
        { categoryId: "science", projectIds: ["Insight_Station", "ISS_Info", "Google_Trend"] },
        { categoryId: "cloud", projectIds: ["World_AQI_index"] },
        { categoryId: "translate", projectIds: ["Morse_Translator", "Binary_Translator"] },
      ],
    },
    {
      id: "英文",
      categories: [
        { categoryId: "food", projectIds: ["Food_Decider"] },
        { categoryId: "sports_esports", projectIds: ["Number_Elf", "Cows_and_Bulls"] },
        { categoryId: "science", projectIds: ["Insight_Station", "Google_Trend"] },
      ],
    },
    {
      id: "日文",
      categories: [
        { categoryId: "food", projectIds: ["Food_Decider"] },
        { categoryId: "sports_esports", projectIds: ["Number_Elf", "Cows_and_Bulls"] },
        { categoryId: "cloud", projectIds: ["World_AQI_index"] },
        { categoryId: "science", projectIds: ["Insight_Station", "Google_Trend"] },
      ],
    },
    {
      id: "韓文",
      categories: [
        { categoryId: "sports_esports", projectIds: ["Number_Elf", "Cows_and_Bulls"] },
        { categoryId: "cloud", projectIds: ["World_AQI_index"] },
        { categoryId: "science", projectIds: ["Insight_Station", "Google_Trend"] },
      ],
    },
    {
      id: "泰文",
      categories: [
        { categoryId: "sports_esports", projectIds: ["Number_Elf", "Cows_and_Bulls"] },
        { categoryId: "cloud", projectIds: ["World_AQI_index"] },
        { categoryId: "science", projectIds: ["Insight_Station", "Google_Trend"] },
      ],
    },
    {
      id: "德文",
      categories: [
        { categoryId: "sports_esports", projectIds: ["Number_Elf"] },
        { categoryId: "science", projectIds: ["Insight_Station", "Google_Trend"] },
      ],
    },
    {
      id: "西班牙文",
      categories: [
        { categoryId: "science", projectIds: ["Insight_Station"] },
      ],
    },
    {
      id: "荷蘭文",
      categories: [
        { categoryId: "science", projectIds: ["Insight_Station", "Google_Trend"] },
      ],
    },
    {
      id: "丹麥文",
      categories: [
        { categoryId: "science", projectIds: ["Insight_Station", "Google_Trend"] },
      ],
    },
    {
      id: "法文",
      categories: [
        { categoryId: "science", projectIds: ["Insight_Station", "Google_Trend"] },
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
    { id: 'Fortune_Master', src: 'https://lh3.googleusercontent.com/hKT5442d4Mmrmx6tCPV6Ft-ZUwvR6zps3pmArImOjbCTKS5SjQM_bvUEmYixA8fDzwCwJoAPmR5I=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/%E9%81%8B%E5%8B%A2%E5%A4%A7%E5%B8%AB', actionLink: 'javascript:;', isActive: false, contentId: 'Fortune_Master' },
    { id: 'Brain_Game', src: 'https://lh3.googleusercontent.com/IC_vSx1qVU6iTofmMzVjUIDjEcQ33KicmwUQS8CInXLghiMVayuCmn2aXEMTqp6DTrg7fbFLBxUT=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/大腦運動會', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000603cba0b27', isActive: false, contentId: 'Brain_Game' },
    { id: 'Riddle_Game', src: 'https://lh3.googleusercontent.com/5Iy10xZI4gE58MPb2-j5Sd6SrKPg7dSHzcfp7woqTqQiHf4w4dh6r-UPALvtp0X38NtKNt8zsguz=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/燈謎大師', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/00000046536e4ef2', isActive: false, contentId: 'Riddle_Game' },
    { id: 'Cows_and_Bulls', src: 'https://lh3.googleusercontent.com/bq7AdNyaNrET2f4F55Eq27vxnfA-G3odqoOZPA9_hl3sadVsSHzoFWEOeseoootSzwuewJyxfIU=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/1A2B', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000b5033b5e97', isActive: false, contentId: 'Cows_and_Bulls' },
    { id: 'Flag_Game', src: 'https://lh3.googleusercontent.com/8p8IQ-hEspewNRYI77jtHy7W1cM8jBWP6lVxLXXqQ9K5GjwCxlIOqUx3QxGLx8_gyuoQq_MUXFVxmQ=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/國旗達人', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000008b6d90ac06', isActive: false, contentId: 'Flag_Game' },
    { id: 'text_solitaire', src: 'https://lh3.googleusercontent.com/Cc6BaW2bvr3i7N5V0pPb9RDtIZo8wIVFPFPV9Ev9tWtYgMvRBf8kCnhBpldEV-dG0eqDNlchpXQlhw=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/詞語接龍', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000ca4e8b5d65', isActive: false, contentId: 'text_solitaire' },
    { id: 'idiom_solitaire', src: 'https://lh3.googleusercontent.com/jgOHyXLYLFSqbnQFpS8ax8Y_I0nT7UYcPqyzSNjoOBx0Od3CnMQ05OiL6DV8rg_L2gHrVgyt9CY1=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/成語接龍', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000005fc779da97', isActive: false, contentId: 'idiom_solitaire' },
    { id: 'easy_text_solitaire', src: 'https://lh3.googleusercontent.com/RaAMZ5KmCKWojxT-Zv-dwv5Pxqpvgc-sdWIgp_E0HOGyXERr0btrkcxQQRZJ4FLPAERm8q1XbuQ=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/讀音接龍', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000f85bd23edc', isActive: false, contentId: 'easy_text_solitaire' },
    { id: 'twenty_four_points', src: 'https://lh3.googleusercontent.com/CceE_F175HAi1aWL5cA6wFCJMi85emmsVkUdyMfr1t7WqdegcVHZKaFUtLm7fZBjewXO4aSGU_eDdw=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/24點巧算', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000c29cce8146', isActive: false, contentId: 'twenty_four_points' },
    { id: 'Invoice-redemptioner', src: 'https://lh3.googleusercontent.com/YeR_buvHOHYKwXPox9bmeiW-qnYxgd0wmQlnAzPHXPNoNRq6Dydxgdz6wLH4EBSV8875ugxtS3eC=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/發票對獎機', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000f3dc6153fc', isActive: false, contentId: 'Invoice-redemptioner' },
    { id: 'ISS_Info', src: 'https://lh3.googleusercontent.com/Hs7eFeeWgCKl_-Ir4ngXl3lXkLeG7SLrQKo84kMIfOONu4A6zpa6OftHrZNBDoMVYqoT151huMjt=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/國際太空站', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000ee35748109', isActive: false, contentId: 'ISS_Info' },
    { id: 'Google_Trend', src: 'https://lh3.googleusercontent.com/UreYAi8D2h2nlgsBT8ILAAuQTnYOUe5sPQfbLAu0skUL1L01BpHT7eNFe5TqASC-g5eZirjysx4=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/熱搜趨勢', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000fe8bfde8db', isActive: false, contentId: 'Google_Trend' },
    { id: 'Moon_info', src: 'https://lh3.googleusercontent.com/P_cYQtn-NsKHndUqeytSl6e62UhHA9DDhsEF9_ensKoV6Rjitd79gZwHtjD3XDqsG7c4Zi6ByGrRdw=s90', githubLink: '', actionLink: 'javascript:;', isActive: false, contentId: 'Moon_info' },
    { id: 'Toeic_tester', src: 'https://lh3.googleusercontent.com/6QvDGU9WMc1QC1c8F9GHS8bPiUgs4yfX2SVrAfwwX9zNnOy77AfjlOdIwG5taGCvmZxVKsq4tcX5=s90', githubLink: '', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000006745131063', isActive: false, contentId: 'Toeic_tester' },
    { id: 'Zip_code', src: 'https://lh3.googleusercontent.com/I_NnCp30icOJul74LqvuhrXakeM0xhFWBKp0nRQ8dGMoqAqg4BSmwG4UyRvZYpTuluSfXS-CERDu=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/郵遞區號查詢器', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000ccf8e1037c', isActive: false, contentId: 'Zip_code' },
    { id: 'Blood_Index', src: 'https://lh3.googleusercontent.com/oI6uG6rwPuex3kpDmn2TkL_0zJVmYP7wEWTMQ5D05zSNOAk6hA_1vlQhBXAQOwVVnz5rEprvUSIZ=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/捐血幫手', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/00000038f48e6d7d', isActive: false, contentId: 'Blood_Index' },
    { id: 'Power_Index', src: 'https://lh3.googleusercontent.com/uaOnDI3M7mPHQlIuuu6ruOD_DPFYjUinRZl1-M7YH-oTr_Qqzq0dlQK05cMr5jbi7WBl81W9Rgg=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/電力精靈', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000008efe74c3bf', isActive: false, contentId: 'Power_Index' },
    { id: 'TW_AQI_index', src: 'https://lh3.googleusercontent.com/1eK9cMVUJJAmPWbp-kbseKXH7qFjByWkpgSEnamflSYF22jkcDkmazAfw_W2VGK2ILIoIUhUBIU=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/空汙查詢精靈', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000fa049fc5e5', isActive: false, contentId: 'TW_AQI_index' },
    { id: 'TW_UVI_index', src: 'https://lh3.googleusercontent.com/tFLlLU7i_2G20MQdyc2cslBtZfxXKvSHbQfe42DT4A5q6iSUNxSeh7jxzBQUuiv-XuC83NOwnTGy=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/紫外線精靈', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/00000008b2c308d2', isActive: false, contentId: 'TW_UVI_index' },
    { id: 'TW_Radiation_index', src: 'https://lh3.googleusercontent.com/CnIRqKjc5uGejjiit-asiFCMDAFH_1HCLEK5kA0vTH32dJw_UVA4Ylp_oVMN_c8Xs9cdKHShpJfh=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/輻射精靈', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000a573924fc8', isActive: false, contentId: 'TW_Radiation_index' },
    { id: 'TW_Sea_Waether', src: 'https://lh3.googleusercontent.com/PAh2x6gmA8Tjw_ogniq_utapmAFmJj4SXIz_m3xOgsWR5PH-eeXDwpgDwhJ05rGJDzBPk9fonWQ=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/海象精靈', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000003f49171d8f', isActive: false, contentId: 'TW_Sea_Waether' },
    { id: 'World_AQI_index', src: 'https://lh3.googleusercontent.com/jvwwmLpMpt3Ryp_LUM5Y0kvf1qrx2hncQASL6LWtVc5jqYeDD6C6vuQbCf07dwMiQ7MAdgaptur-=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/世界空氣質量指數', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000b85163c25c', isActive: false, contentId: 'World_AQI_index' },
    { id: 'TW_Weather_helper', src: 'https://lh3.googleusercontent.com/v3moXhFOp3ADc_GaPjTNxwx53JRIkJtpP1IN7zok_7mm2KJrX9t7b81VitsXoCAtNF-H5aMSpoCK5g=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/天氣小幫手', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000971a4ed57e', isActive: false, contentId: 'TW_Weather_helper' },
    { id: 'TW_WG_Translator', src: 'https://lh3.googleusercontent.com/cf1EkCmbRkqQ_ghf8h-SwKs7pBHwEPwJPbNDCveVBewPLCfeWJXsuoJHK5QkrgLEWkAcz5xOYI9U=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/台灣護照英文翻譯機', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000835c0b1f9e', isActive: false, contentId: 'TW_WG_Translator' },
    { id: 'Morse_Translator', src: 'https://lh3.googleusercontent.com/fxyZgV3doVdffoeB6fwcCOQnAn58ih5LaJAYgzg0qi2tA02XH4BEz2jgFW0ac2rTSP7Jarc2EnI1=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/摩斯密碼翻譯機', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/0000003c8f1151a9', isActive: false, contentId: 'Morse_Translator' },
    { id: 'Binary_Translator', src: 'https://lh3.googleusercontent.com/A4HU334fqf4ZNvkpEL2nfsfy_x1DRilzSKxO_kAi48SYDpZa4GLb80D_AF1ntC72Pcqr-hy3G_EZ5A=s90', githubLink: 'https://github.com/hank199599/Google-Assistant-APP/tree/master/二進制翻譯機', actionLink: 'https://web.archive.org/web/20200922045406/https://assistant.google.com/services/a/uid/000000974738914a', isActive: false, contentId: 'Binary_Translator' }
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