export const googleAssistant = {
  assistantName: "Google Assistant",
  hero: {
    title: "OK Google!",
    subtitle: "Through Actions on Google platform\nGoogle Assistant can do more than you think",
    githubButton: "Github Project Page"
  },
  statistics: {
    'total-skills': {
      label: 'Total Skills',
      description: 'Get help anytime with just internet connection'
    },
    'unique-users': {
      label: 'Unique Users',
      description: 'Average weekly reach of new users'
    },
    'supported-languages': {
      label: 'Supported Languages',
      description: 'Assistance available in multiple languages'
    }
  },
  categories: {
    food: "Food",
    school: "School",
    reader: "Reader",
    color_lens: "Color",
    sports_esports: "Games",
    science: "Science",
    public: "Public",
    cloud: "Cloud",
    translate: "Translate",
    date_range: "Date"
  },
  projects: {
    Food_Decider: { name: 'Meal Decider', content: 'Can\'t decide what to eat? Let the Meal Decider help you!' },
    Daily_History: { name: 'Daily History', content: 'Review the major events that happened today in history.' },
    Taiwan_Dictoinary: { name: 'Taiwanese Mandarin Dictionary', content: 'Look up the Taiwanese Mandarin Dictionary to understand the explanation and usage of words.' },
    Taiwan_Rail_Dictoinary: { name: 'Railway Dictionary', content: 'Provides explanations of terms related to Taiwan\'s railways.' },
    Cangjie_Dictoinary: { name: 'Cangjie Dictionary', content: 'Look up Cangjie codes to help you type Chinese faster.' },
    Positive_Quote: { name: 'Positive Quote', content: 'A positive quote every day to keep you energized.' },
    Negative_Quote: { name: 'Negative Quote', content: 'A dose of negative energy to help you face reality and be more motivated.' },
    Today_Quote: { name: 'Quote of the Day', content: 'A famous quote every day to inspire your thoughts.' },
    NASA_daily: { name: 'Astronomy Picture of the Day', content: 'Enjoy the daily astronomy picture from NASA and explore the mysteries of the universe.' },
    Fortune_Master: { name: 'Fortune Master', content: 'Check your fortune for the day and grasp your destiny.' },
    Brain_Game: { name: 'Brain Game', content: 'Activate your brain with interesting questions.' },
    Riddle_Game: { name: 'Riddle Master', content: 'Challenge various riddles and see how many you can guess correctly.' },
    Number_Elf: { name: 'Number Elf', content: 'The classic 1A2B number guessing game to challenge your logical skills.' },
    Cows_and_Bulls: { name: 'Cows and Bulls', content: 'The English version of the 1A2B number guessing game.' },
    Flag_Game: { name: 'Flag Expert', content: 'Guess the corresponding national flag based on the hints.' },
    text_solitaire: { name: 'Word Solitaire', content: 'The classic word solitaire game to challenge your vocabulary.' },
    idiom_solitaire: { name: 'Idiom Solitaire', content: 'A more difficult idiom solitaire to test your accumulation of idioms.' },
    easy_text_solitaire: { name: 'Pronunciation Solitaire', content: 'A solitaire game based on pronunciation, where words with the same sound but different characters are also acceptable.' },
    twenty_four_points: { name: '24 Points', content: 'Use four numbers to calculate 24 through addition, subtraction, multiplication, and division.' },
    Insight_Station: { name: 'The Insight Station', content: 'Get the latest information from NASA\'s InSight Mars lander.' },
    ISS_Info: { name: 'International Space Station', content: 'Check the current position and related information of the International Space Station.' },
    Google_Trend: { name: 'Search Trends', content: 'Find out the latest popular Google search trends.' },
    Moon_info: { name: 'Moon Phase Elf', content: 'Check today\'s moon phase, moonrise and moonset times.' },
    Toeic_tester: { name: 'TOEIC Test', content: 'Provides TOEIC vocabulary tests to improve your English proficiency.' },
    Zip_code: { name: 'ZIP Code Finder', content: 'Quickly find the ZIP code for any area in Taiwan.' },
    Blood_Index: { name: 'Blood Donor Helper', content: 'Check the blood inventory status of blood centers.' },
    Power_Index: { name: 'Power Wizard', content: 'Check the current power consumption and reserve margin in Taiwan.' },
    TW_AQI_index: { name: 'Air Quality Wizard', content: 'Check the Air Quality Index (AQI) in various parts of Taiwan.' },
    TW_UVI_index: { name: 'UV Index Wizard', content: 'Check the UV index in various parts of Taiwan.' },
    TW_Radiation_index: { name: 'Radiation Wizard', content: 'Check the environmental radiation values in various parts of Taiwan.' },
    TW_Sea_Waether: { name: 'Sea Weather Wizard', content: 'Provides sea weather forecasts for the waters around Taiwan.' },
    World_AQI_index: { name: 'World Air Quality Index', content: 'Check the air quality index of major cities around the world.' },
    TW_Weather_helper: { name: 'Weather Helper', content: 'Provides weather forecasts for various parts of Taiwan.' },
    TW_WG_Translator: { name: 'Passport English Name Translator', content: 'Translate Chinese names into Wade-Giles romanization for passports.' },
    Morse_Translator: { name: 'Morse Code Translator', content: 'Encrypt and decrypt Morse code.' },
    Binary_Translator: { name: 'Binary Translator', content: 'Convert between binary and text.' },
    Invoice_redemptioner: { name: 'Invoice Redeemer', content: 'Enter the invoice number to quickly check for prizes.' }
  },
  actions: {
    Food_Decider: 'Meal Decider',
    Daily_History: 'Daily History',
    Taiwan_Dictoinary: 'Taiwan Dictionary',
    Taiwan_Rail_Dictoinary: 'Taiwan Rail Dictionary',
    Cangjie_Dictoinary: 'Cangjie Dictionary',
    Positive_Quote: 'Positive Quote',
    Negative_Quote: 'Negative Quote',
    Today_Quote: 'Today Quote',
    NASA_daily: 'NASA Daily',
    Fortune_Master: 'Fortune Master'
  },
  tabs: {
    food: 'Food Recommendations',
    school: 'Reference Materials',
    reader: 'Quote Reading',
    color_lens: 'Art & Lifestyle',
    sports_esports: 'Entertainment',
    science: 'Tech Info',
    public: 'Public Information',
    cloud: 'Weather Information',
    translate: 'Translation',
    date_range: 'Productivity'
  },
  details: {
    Food_Decider: {
      title: 'Meal Decider',
      content: 'Just ask and get a quick suggestion, a handy tool to help you save thinking time!'
    }
  },
  deprecation: {
    title: "Service will be deprecated by Google...",
    description: "Conversational Actions will no longer be invokable after 2023/06/13!",
    link: "More Information"
  },
  howItWorks: {
    title: "How It Works",
    subtitle: "The principles behind building skills"
  },
  skillsOverview: {
    title: "Skills Overview",
    subtitle: "Automatically switches response language based on user's locale",
    languageSelector: "Select Language"
  },
  userComments: {
    title: "User Reviews",
    subtitle: "Feedback from {language} users"
  }
}; 