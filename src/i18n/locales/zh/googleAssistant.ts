export const googleAssistant = {
  assistantName: "Google 助理",
  statistics: {
    'total-skills': {
      label: '技能總數',
      description: '只需網路即可隨時取得協助'
    },
    'unique-users': {
      label: '不重複使用者',
      description: '每周平均的觸及的陌生使用者比率'
    },
    'supported-languages': {
      label: '支援語系',
      description: '無論使用哪種語言都能為你提供協助'
    }
  },
  categories: {
    food: "美食",
    school: "校園",
    reader: "閱讀",
    color_lens: "色彩",
    sports_esports: "遊戲",
    science: "科學",
    public: "公共",
    cloud: "雲端",
    translate: "翻譯",
    date_range: "日期"
  },
  projects: {
    Food_Decider: { name: '美食決定器', content: '不知道要吃什麼嗎？讓美食決定器幫你決定！' },
    Daily_History: { name: '每日大事記', content: '回顧歷史上的今天發生了哪些大事。' },
    Taiwan_Dictoinary: { name: '臺灣國語辭典', content: '查詢臺灣國語辭典，了解詞語的解釋與用法。' },
    Taiwan_Rail_Dictoinary: { name: '鐵道詞典', content: '提供臺灣鐵道相關的詞語解釋。' },
    Cangjie_Dictoinary: { name: '倉頡字典', content: '查詢倉頡碼，幫助你更快速地輸入中文。' },
    Positive_Quote: { name: '正能量語錄', content: '每天給你一句正能量語錄，讓你充滿活力。' },
    Negative_Quote: { name: '負能量語錄', content: '來點負能量，讓你面對現實，更有動力。' },
    Today_Quote: { name: '今日名言', content: '每天一句名言，啟發你的思想。' },
    NASA_daily: { name: '每日天文圖', content: '欣賞來自 NASA 的每日天文圖片，探索宇宙的奧秘。' },
    Fortune_Master: { name: '運勢大師', content: '查詢今日運勢，掌握一天的運程。' },
    Brain_Game: { name: '大腦運動會', content: '透過有趣的問題，活化你的大腦。' },
    Riddle_Game: { name: '燈謎大師', content: '挑戰各種燈謎，看看你能猜對多少。' },
    Number_Elf: { name: '數字精靈', content: '經典的 1A2B 猜數字遊戲，挑戰你的邏輯能力。' },
    Cows_and_Bulls: { name: '1A2B猜數', content: '英文版的 1A2B 猜數字遊戲。' },
    Flag_Game: { name: '國旗達人', content: '根據提示猜出對應的國家國旗。' },
    text_solitaire: { name: '詞語接龍', content: '經典的詞語接龍遊戲，挑戰你的詞彙量。' },
    idiom_solitaire: { name: '成語接龍', content: '更高難度的成語接龍，考驗你的成語積累。' },
    easy_text_solitaire: { name: '讀音接龍', content: '以讀音進行的接龍遊戲，同音不同字也可以。' },
    twenty_four_points: { name: '24點巧算', content: '利用四個數字，透過加減乘除算出 24。' },
    Insight_Station: { name: '洞察號', content: '取得 NASA 洞察號火星探測器的最新資訊。' },
    ISS_Info: { name: '國際太空站', content: '查詢國際太空站的目前位置與相關資訊。' },
    Google_Trend: { name: '熱搜趨勢', content: '了解最新的 Google 熱門搜尋趨勢。' },
    Moon_info: { name: '月相精靈', content: '查詢今天的月相、月出月落時間。' },
    Toeic_tester: { name: '多益測驗', content: '提供多益單字測驗，提升你的英語能力。' },
    Zip_code: { name: '郵遞區號查詢器', content: '快速查詢臺灣地區的郵遞區號。' },
    Blood_Index: { name: '捐血幫手', content: '查詢各地捐血中心的血液庫存狀況。' },
    Power_Index: { name: '電力精靈', content: '查詢臺灣目前的用電狀況與備轉容量。' },
    TW_AQI_index: { name: '空汙查詢精靈', content: '查詢臺灣各地的空氣品質指標(AQI)。' },
    TW_UVI_index: { name: '紫外線精靈', content: '查詢臺灣各地的紫外線指數。' },
    TW_Radiation_index: { name: '輻射精靈', content: '查詢臺灣各地的環境輻射值。' },
    TW_Sea_Waether: { name: '海象精靈', content: '提供臺灣周邊海域的海象預報。' },
    World_AQI_index: { name: '世界空氣質量指數', content: '查詢全球主要城市的空氣品質指標。' },
    TW_Weather_helper: { name: '天氣小幫手', content: '提供臺灣各地的天氣預報。' },
    TW_WG_Translator: { name: '護照英文翻譯機', content: '將中文姓名翻譯成護照使用的威妥瑪拼音。' },
    Morse_Translator: { name: '摩斯密碼翻譯機', content: '進行摩斯密碼的加密與解密。' },
    Binary_Translator: { name: '二進制翻譯機', content: '進行二進位與文字的轉換。' },
    Invoice_redemptioner: { name: '發票對獎機', content: '輸入發票號碼，快速對獎。' }
  },
  actions: {
    Food_Decider: '美食決定器',
    Daily_History: '每日大事記',
    Taiwan_Dictoinary: '臺灣國語辭典',
    Taiwan_Rail_Dictoinary: '鐵道詞典',
    Cangjie_Dictoinary: '倉頡字典',
    Positive_Quote: '正能量語錄',
    Negative_Quote: '負能量語錄',
    Today_Quote: '今日名言',
    NASA_daily: '每日天文圖',
    Fortune_Master: '運勢大師',
    // ... 其餘 action_name_dict ...
  },
  tabs: {
    food: '取得餐飲建議',
    school: '參考資料',
    reader: '朗讀語錄',
    color_lens: '藝術與生活品味',
    sports_esports: '休閒娛樂',
    science: '科技資訊',
    public: '公共資訊',
    cloud: '查詢天氣資訊',
    translate: '進行翻譯',
    date_range: '提升生產力'
  },
  details: {
    Food_Decider: {
      title: '美食決定器',
      content: '只要簡單詢問即可快速得到建議，是個可幫助你減少思考時間的小幫手!'
    },
    // ... 其餘 detail_dict ...
  }
}; 