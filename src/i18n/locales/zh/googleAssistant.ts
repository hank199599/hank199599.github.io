export const googleAssistant = {
  assistantName: "Google 助理",
  stats: {
    skills: {
      number: '32',
      title: '技能總數',
      description: '只需網路即可隨時取得協助'
    },
    users: {
      number: '3000',
      title: '不重複使用者',
      description: '每周平均的觸及的陌生使用者比率'
    },
    languages: {
      number: '10',
      title: '支援語系',
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
    Food_Decider: { name: '美食決定器', content: '只要簡單詢問即可快速得到建議，\n是個可幫助你減少思考時間的小幫手!' },
    Daily_History: { name: '每日大事記', content: '透過對話快速查詢曾經發生的歷史事件!\n資訊來源：維基百科\nhttps://zh.wikipedia.org/wiki/歷史上的今天 \n' },
    Taiwan_Dictoinary: { name: '臺灣國語辭典', content: '這是介接《萌典》所提供之API所達成的字典詞條查詢服務。\n使用者可以透過對話、直接輸入或利用麥克風等方式來進行查詢。\n查詢之詞彙及詞條內容來自《重編國語辭典修訂本》。' },
    Taiwan_Rail_Dictoinary: { name: '鐵道詞典', content: '由交通部鐵路改建工程局提供，\n主要內容為傳統鐵路、高速鐵路、捷運系統等相關名詞\n\nⒸ授權資訊：政府資料開放授權條款-第1版' },
    Cangjie_Dictoinary: { name: '倉頡字典', content: '透過對話查詢每個字在「倉頡第五代」對應的倉頡碼。\n\n有關倉頡輸入法：\n是一種相當有效率的中文輸入法，此種方法利用英文拼字的觀念，巧妙的將每個中文字拆開來，然後歸納且編列出二十四個中文字母，並衍生出七十五個輔助字形，使得中文字形皆可以用二十四個中文字母，依一定的取碼規則而得到該字。' },
    Positive_Quote: { name: '正能量語錄', content: '網羅來自網路上的正能量語錄，\n每次使用本服務即隨機挑選一則語錄作為輸出。\n\n同時使用來自Youtube 音效庫的免費授權音樂作為背景音樂。\n提供使用者截然不同的感受!' },
    Negative_Quote: { name: '負能量語錄', content: '網羅來自網路上的負能量語錄，\n每次使用本服務即隨機挑選一則語錄作為輸出。\n\n同時使用來自Youtube 音效庫的免費授權音樂作為背景音樂。\n提供使用者截然不同的感受!' },
    Today_Quote: { name: '今日名言', content: '隨時呼叫Google助理，即可存取《維基語錄》收錄的每日名言。\n查看名言的同時也可以前往維基百科上該名人的對應頁面連結了解更多資訊。\n\n每日更新一次(以台北標準時間為基準)' },
    NASA_daily: { name: '每日天文圖', content: '為使用者提供來自「每日一天文圖(APOD)」的每日精選圖片，\n並附上由專業的天文學家寫上的一份扼要說明。\n帶你遨遊迷人的宇宙!\n\n有關「每日一天文圖(APOD)」：\n源自於美國國家航空暨太空總署與密西根科技大學（MTU）所提供的服務，自1995年6月16日開始，這個網站每天會提供一張宇宙不同的影像並附上簡要說明。' },
    Fortune_Master: { name: '運勢大師', content: '本服務提供今天與後兩日的星座運勢。\n使用者亦可透過透過生日查詢對應的運勢!\n\n星座運勢內容授權：科技紫微網\nhttp://click108.tw/RiYbJ' },
    Brain_Game: { name: '大腦運動會', content: '使用來自網路上或維基百科的題庫，\n透過簡易選擇題或對話機制進行遊戲。\n玩家可以選擇無限題目或是最多十題題目的模式。\n每個題目在選擇後會判別錯誤與否並提供相關連結供參考(大多來自維基百科)。' },
    Riddle_Game: { name: '燈謎大師', content: '網羅網路上的各式謎語，\n不必再翻找書本即能享有猜謎樂趣!\n\n特殊設計\n可提示謎底之字數，若猜測的答案接近正解亦可算答對。\n若想跳過題目亦可提出需求，本服務會直接給予答案。' },
    Number_Elf: { name: '數字精靈', content: '在遊戲開始前，使用者必須選擇一個數字做為上限。\n接著程式會依據這個上限自其中隨機挑選一個數字做為答案。\n\n隨著猜測的數字，程式會予以提示接近答案的區間。\n直到使用者猜測到答案。\n中途如果想放棄亦可直接看到答案。' },
    Cows_and_Bulls: { name: '1A2B猜數', content: '遊戲開始時，會產生一個四位數字，其中：\n\n每個數字範圍：0 ~ 9\n數字間關係：彼此不能重複\n整體範圍：0123 ~ 9876\n答案可能性：5040種\n「A」：代表有數值在答案中且位置正確\n「B」：代表有數值在答案中但位置不正確\n\n玩家在這個遊戲中要做的，即利用隨機的數字與系統給予的提示，\n推敲出唯一的答案!' },
    Flag_Game: { name: '國旗達人', content: ' 透過隨機生成的選項與答案，\n以全世界各地的旗幟做題題目的益智遊戲。\n在每個作答結束後，亦提供簡易說明與維基百科連結供使用。' },
    text_solitaire: { name: '詞語接龍', content: '使用來自《教育部重編國語辭典修訂本》收錄的詞彙，\n與使用者進行接龍的文字遊戲。\n在遊戲中不能輸入重複的詞彙，但可以隨時中斷遊戲。\n玩家在每回合有三次跳過詞彙的機會，本服務會自動給予提示以便繼續進行。' },
    idiom_solitaire: { name: '成語接龍', content: '使用來自《成語典》收錄的詞彙，\n與使用者進行接龍的文字遊戲。\n在遊戲中不能輸入重複的成語，但可以隨時中斷遊戲。\n如果玩家連續三次無法輸入正確的接續詞，本服務會自動給予提示以便繼續進行。' },
    easy_text_solitaire: { name: '讀音接龍', content: ' 使用來自《教育部重編國語辭典修訂本》收錄的詞彙，\n與使用者進行接龍的文字遊戲。\n在遊戲中不能輸入重複的詞彙，但可以隨時中斷遊戲。\n\n範例 歲歲平安>黯然消魂>魂歸來兮>喜出望外>歪頭' },
    twenty_four_points: { name: '24點巧算', content: '遊戲開始時，會產生一組固定順序的四個數字，其中：\n\n每個數字範圍：1 ~ 13\n數字間關係：彼此可重複\n組合可能性：28561種\n玩家在這個遊戲中要做的，即利用指定順序的數字進行加減乘除，\n得到指定的答案! (例如24)' },
    Insight_Station: { name: '洞察號', content: '「洞察號」是一顆用於研究火星內部結構的無人著陸探測器。\n於2019年2月19日起，NASA根據洞察號無人探測器的數據發布火星每日天氣報告，提供火星氣溫、風速、氣壓等信息。\n本服務能讓你即時取得NASA所發布的最新天氣報告。' },
    ISS_Info: { name: '國際太空站', content: '製作緣由\n仿造美國區的「ISS Info」Action\n1.查詢國際太空站目前所在位置\n2.查詢所在位置何時能看見國際太空站\n3.查詢國際太空站上有幾個人\n4.可自動判斷是否是「直接查詢」來決定是否要繼續對話' },
    Google_Trend: { name: '熱搜趨勢', content: '透過Google趨勢的RSS， 為使用者快速取得當前的熱門搜尋關鍵字。\n在啟動本服務同時，會自動判斷使用者所在地區來切換搜尋地區' },
    Moon_info: { name: '月相精靈', content: '快速獲得今天的月相資訊、亮度\n以及預計的月出月落時間。' },
    Toeic_tester: { name: '多益測驗', content: '這是一個回合制的多益題目測驗，每回合一共有五個單字。\n使用者有三次猜測正確涵義的機會。' },
    Zip_code: { name: '郵遞區號查詢器', content: '透過政府資料開放平台取得各縣市的郵遞區號資訊，\n本服務提供使用者以口語快速查詢所需測站，\n或是透過區域查詢、GPS查詢等方式尋找測站。\n也可以加入日常安排以自定義的詞彙呼叫本服務。\n 有關五碼郵遞區號查詢\n這是由台灣 3+2郵遞區號 查詢所提供的查詢服務。\n透過他們所開放的API來查詢任意地址的五碼郵遞區號' },
    Blood_Index: { name: '捐血幫手', content: '使用來自台灣血液基金會的血庫資訊，\n讓使用者能隨時查詢血庫庫存情形。\n資訊於每日整點更新一次。\n此外也提供查詢各縣市固定捐血站的服務。 可透過區域查詢或是利用GPS定位取得固定捐血站資訊。' },
    Power_Index: { name: '電力精靈', content: '透過爬蟲取得台灣電力公司於網頁上公布之電力即時資訊 供使用者輕易獲取所需資訊' },
    TW_AQI_index: { name: '空汙查詢精靈', content: '透過環境保護局開放資料平台取得原始的空汙測站資訊，\n在篩選留下所需資訊後，儲存至Firebase Cloud Store以利Fulfillment隨時存取。\n\n本服務提供使用者以口語快速查詢所需測站， 或是透過區域查詢、GPS查詢等方式尋找測站。\n\n也可以加入日常安排以自定義的詞彙呼叫本服務。' },
    TW_UVI_index: { name: '紫外線精靈', content: '透過環境保護局開放資料平台取得原始的紫外線測站資訊，\n在篩選留下所需資訊後，儲存至Firebase Cloud Store以利Fulfillment隨時存取。\n\n本服務提供使用者以口語快速查詢所需測站， 或是透過區域查詢、GPS查詢等方式尋找測站。\n\n也可以加入日常安排以自定義的詞彙呼叫本服務。' },
    TW_Radiation_index: { name: '輻射精靈', content: '透過原子能委員會開放資料平台取得原始的環境輻射測站資訊，\n在篩選留下所需資訊後，儲存至Firebase Cloud Store以利Fulfillment隨時存取。\n\n本服務提供使用者以口語快速查詢所需測站， 或是透過區域查詢、GPS查詢等方式尋找測站。\n\n也可以加入日常安排以自定義的詞彙呼叫本服務。' },
    TW_Sea_Waether: { name: '海象精靈', content: '透過氣象資料開放平台，\n獲取由中央氣象局提供之近三日海象資訊。\n藉由Google助理之特性達成口語互動之境界!' },
    World_AQI_index: { name: '世界空氣質量指數', content: '透過API介接來自The World Air Quality Project的即時空氣品質資訊。\n使用者只要傳送GPS資訊給Google助理，即可獲得距離最近的測站資訊。' },
    TW_Weather_helper: { name: '天氣小幫手', content: '透過氣象資料開放平台，獲取由中央氣象局提供之口語化氣象預報資訊。\n藉由Google助理之特性達成口語互動之境界!' },
    TW_WG_Translator: { name: '護照英文翻譯機', content: '使用來自外交部的「護照外文姓名拼音對照表」，\n提供快速便捷的翻譯功能!' },
    Morse_Translator: { name: '摩斯密碼翻譯機', content: '透過與Google助理對話來查看任意文字對應的摩斯密碼表示法!' },
    Binary_Translator: { name: '二進制翻譯機', content: '透過與Google助理對話來查看任意文字對應的二進制表示法!' },
    Invoice_redemptioner: { name: '發票對獎機', content: '藉由爬蟲獲取來自財政部的發票開獎號碼，\n以便使用者藉由對話進行兌獎。' }
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
  },
  howItWorks: {
    title: "運作原理",
    subtitle: "建立技能的原理說明",
    accordion: {
      1: {
        title: "簡單來說，基礎原理是什麼?",
        content: `它是一個介接於Google助理的一個基於語音設計界面的新型態應用程式。\n使用者在向Google助理表明想使用某個特定的Action(動作)後，\nGoogle會在Actions On Google平台上搜尋是否有對應名稱的Action。\n接著使用者會被Google助理導引至Action的使用介面。\n從此刻開始，Google助理的角色轉變為協助進行語音辨識與傳遞資訊的角色。\n辨識使用者輸入的意圖與給予對應回應的工作則轉由開發者所設計的Action所執行。`
      },
      2: {
        title: "以Actions On Google (AoG)平台的觀點來說，基礎架構又是什麼呢?",
        content: `在支援Google語音助理的裝置上，\n原生內建一個由官方支持的第三方平台(Actions On Google, AoG)。\n當用戶請求與第三方平台的技能互動時，系統會自動到AoG上尋找對應的技能。\n一旦找到就會將畫面使用權交給第三方技能。\n自此刻開始，Google助理的角色轉為進行語音辨識與呈現第三方技能內容的中介。\n在實作上，整個互動的過程是透過JSON為格式的API進行資訊傳遞。`
      },
      3: {
        title: "當使用者與Action互動時，在後台會發生甚麼事?",
        content: `當使用者與Action互動時，以下流程會被觸發。\n而直到使用者的需求被滿足或中斷，都是這個形式進行每輪的對話：\n1. 使用者向助理提問\n2. 助理將(辨識到的)文字傳送給第三方Action\n3. 在第三方Action架構中，利用DialogFlow訓練的機器模型去判斷使用者的意圖\n4. 為進一步回應，將篩選後的參數傳進Fulfillment中進行邏輯判斷或資料拉取\n5. Fulfillment回傳對應Intent的回應給助理\n6. 助理接收到回應並呈獻給使用者`
      }
    }
  },
  userComments: {
    title: "用戶留言",
    subtitle: "來自 {language} 用戶的回饋",
    noComments: "此語言暫無留言"
  },
  dialog: {
    github: 'Github 原始碼',
    offline: '本服務已下線',
    archive: '網際網路檔案館的頁面備份'
  }
}; 