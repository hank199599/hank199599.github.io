var tab_dict = {
    "food": { "tag": "fastfood", "name": "取得餐飲建議" },
    "school": { "tag": "school", "name": "參考資料" },
    "reader": { "tag": "chrome_reader_mode", "name": "朗讀語錄" },
    "color_lens": { "tag": "color_lens", "name": "藝術與生活品味" },
    "sports_esports": { "tag": "sports_esports", "name": "休閒娛樂" },
    "science": { "tag": "science", "name": "科技資訊" },
    "public": { "tag": "public", "name": "公共資訊" },
    "cloud": { "tag": "cloud", "name": "查詢天氣資訊" },
    "translate": { "tag": "translate", "name": "進行翻譯" },
    "date_range": { "tag": "date_range", "name": "提升生產力" }
}

var langeuage_dict={
    "中文(台灣)":{
        "food":["Food_Decider"],
        "school":["Daily_History","Taiwan_Dictoinary",  "Taiwan_Rail_Dictoinary","Cangjie_Dictoinary"],
        "reader":["Positive_Quote","Negative_Quote","Today_Quote"],
        "color_lens":["NASA_daily","Fortune_Master"],
        "sports_esports":["Brain_Game","Riddle_Game","Number_Elf","1A2B","Flag_Game","text_solitaire","idiom_solitaire","easy_text_solitaire","24_points"],
        "science":["Insight_Station","ISS_Info", "Google_Trend","Moon_info"],
        "public":["Zip_code","Blood_Index","Power_Index"],
        "cloud":["TW_AQI_index",  "TW_UVI_index","TW_Radiation_index", "TW_Sea_Waether","World_AQI_index","TW_Weather_helper"],
        "translate":["TW_WG_Translator","Morse_Translator","Binary_Translator"],
        "date_range":["Invoice-redemptioner"]
    },
    "廣東話":{
        "food":["Food_Decider"],
        "school":["Cangjie_Dictoinary"],
        "color_lens":["NASA_daily","Fortune_Master"],
        "sports_esports":["Number_Elf","1A2B","24_points"],
        "science":["Insight_Station","ISS_Info", "Google_Trend"],
        "cloud":["World_AQI_index"],
        "translate":["Morse_Translator","Binary_Translator"],
    },
    "英文":{
        "food":["Food_Decider"],
        "sports_esports":["Number_Elf","1A2B"],
        "science":["Insight_Station", "Google_Trend"]
    },
    "日文":{
        "food":["Food_Decider"],
        "sports_esports":["Number_Elf","1A2B"],
        "cloud":["World_AQI_index"],
        "science":["Insight_Station", "Google_Trend"]
    },
    "韓文":{
        "sports_esports":["Number_Elf","1A2B"],
        "cloud":["World_AQI_index"],
        "science":["Insight_Station", "Google_Trend"]
    },
    "泰文":{
        "sports_esports":["Number_Elf","1A2B"],
        "cloud":["World_AQI_index"],
        "science":["Insight_Station", "Google_Trend"]
    },
    "德文":{
        "sports_esports":["Number_Elf"],
        "science":["Insight_Station", "Google_Trend"]
    },
    "西班牙文":{
        "science":["Insight_Station", "Google_Trend"]
    },
    "荷蘭文":{
        "science":["Insight_Station", "Google_Trend"]
    },
    "丹麥文":{
        "science":["Insight_Station", "Google_Trend"]
    },
    "法文":{
        "science":["Insight_Station", "Google_Trend"]
    }
}

var detail_dict = {
    "Food_Decider": {
        "src": "https://lh3.googleusercontent.com/ydRrGO73QtkvNGjrclVYOSD6fGwWp3vHQTFLQUjEmLTjopR0xsXpI29bPPzgs5eYwO7mjobiXKdt=s81",
        "Titile": "美食決定器",
        "Language": ["中文(台灣)", "廣東話", "英文", "日文"],
        "content": "只要簡單詢問即可快速得到建議，</br>是個可幫助你減少思考時間的小幫手!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/%E7%BE%8E%E9%A3%9F%E6%B1%BA%E5%AE%9A%E5%99%A8",
        "Action_link": "https://assistant.google.com/services/invoke/uid/00000058f29109ab"
    },

    "Daily_History": {
        "src": "https://lh3.googleusercontent.com/1U6-HhkKdaVzPMMsz5XmKZ31lTnOkXWz4eTuDcNTejlgatqouaKoniXkxfMC0AKvRx4wSjHmynvs=s81",
        "Titile": "每日大事記",
        "Language": ["中文(台灣)"],
        "content": "透過對話快速查詢曾經發生的歷史事件!</br>資訊來源：維基百科</br>https://zh.wikipedia.org/wiki/歷史上的今天 </br>",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/%E7%BE%8E%E9%A3%9F%E6%B1%BA%E5%AE%9A%E5%99%A8",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000d67993a1d2"
    },
    "Taiwan_Dictoinary": {
        "src": "https://lh3.googleusercontent.com/b5mi7bsFMvz5vbzdQYkGvRTCZQlwgCOvIlmNAds6dvjuLGwC-gzhYDMowSi7_e4OR1o9fY0ecBY=s81",
        "Titile": "臺灣國語辭典",
        "Language": ["中文(台灣)"],
        "content": "這是介接《萌典》所提供之API所達成的字典詞條查詢服務。</br>使用者可以透過對話、直接輸入或利用麥克風等方式來進行查詢。</br>查詢之詞彙及詞條內容來自《重編國語辭典修訂本》。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/臺灣國語辭典",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000008d7409cb2a"
    },
    "Taiwan_Rail_Dictoinary": {
        "src": "https://lh3.googleusercontent.com/RD6WQND-5BmBiDt2UfnbrqnMIWquswEXE1hySqSCBHwLMgQLeS0taGu6y2Ezgqnr-ADzo637fVp1=s90",
        "Titile": "鐵道詞典",
        "Language": ["中文(台灣)"],
        "content": "由交通部鐵路改建工程局提供，</br>主要內容為傳統鐵路、高速鐵路、捷運系統等相關名詞</br></br>Ⓒ授權資訊：政府資料開放授權條款-第1版",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/鐵道詞典",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000862113b0f6"
    },
    "Cangjie_Dictoinary": {
        "src": "https://lh3.googleusercontent.com/UVAu76LGBKhH-4DRHihBAQhF3tKBrjxr1ZE3n2N_o2QPbCSpbYl8Ue6_TD5YULulFmwupCoRbhI1=s90",
        "Titile": "倉頡字典",
        "Language": ["中文(台灣)", "廣東話"],
        "content": "透過對話查詢每個字在「倉頡第五代」對應的倉頡碼。</br></br>有關倉頡輸入法：</br>是一種相當有效率的中文輸入法，此種方法利用英文拼字的觀念，巧妙的將每個中文字拆開來，然後歸納且編列出二十四個中文字母，並衍生出七十五個輔助字形，使得中文字形皆可以用二十四個中文字母，依一定的取碼規則而得到該字。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/倉頡字典",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000009932f37dce"
    },
    "Positive_Quote": {
        "src": "https://lh3.googleusercontent.com/XAylvXmY2tTWiQVtuwbcan_nno8pM7q9Qro6aEBECzTEN-x8jqAjuMm-ZqL_qCVvvkYhgw1_VVNI=s90",
        "Titile": "正能量語錄",
        "Language": ["中文(台灣)"],
        "content": "網羅來自網路上的正能量語錄，</br>每次使用本服務即隨機挑選一則語錄作為輸出。</br></br>同時使用來自Youtube 音效庫的免費授權音樂作為背景音樂。</br>提供使用者截然不同的感受!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/正能量語錄",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000b877fb7629"
    },
    "Negative_Quote": {
        "src": "https://lh3.googleusercontent.com/9eRDWvPEh3jeQmuBcpiXtX4gH9yTGqvyO1ur_PQ-K7H9KiR6A24zluD7ENZeIr0nNvshlOLH-yrw=s90",
        "Titile": "負能量語錄",
        "Language": ["中文(台灣)"],
        "content": "網羅來自網路上的負能量語錄，</br>每次使用本服務即隨機挑選一則語錄作為輸出。</br></br>同時使用來自Youtube 音效庫的免費授權音樂作為背景音樂。</br>提供使用者截然不同的感受!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/負能量語錄",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000e8f5894304"
    },
    "Today_Quote": {
        "src": "https://lh3.googleusercontent.com/DPDoPBFLpDglYGoU2zNdzACtOFfE-rsPvK2kJC1jA_scJTJM69x8SmycybTIipNMC0LsJdz06j5qwQ=s90",
        "Titile": "今日名言",
        "Language": ["中文(台灣)"],
        "content": "隨時呼叫Google助理，即可存取《維基語錄》收錄的每日名言。</br>查看名言的同時也可以前往維基百科上該名人的對應頁面連結了解更多資訊。</br></br>每日更新一次(以台北標準時間為基準)",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/今日名言",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000002a10f761c0"
    },
    "NASA_daily": {
        "src": "https://lh3.googleusercontent.com/NnDqEoQYzER27FJ8X-6fAxdRkSQ35j6MbiMfwMu5V_tqLZDopKQ1YcCPMLwwmIA-WQmEFaJ1Y6YA=s90",
        "Titile": "每日天文圖",
        "Language": ["中文(台灣)", "廣東話"],
        "content": "為使用者提供來自「每日一天文圖(APOD)」的每日精選圖片，</br>並附上由專業的天文學家寫上的一份扼要說明。</br>帶你遨遊迷人的宇宙!</br></br>有關「每日一天文圖(APOD)」：</br>源自於美國國家航空暨太空總署與密西根科技大學（MTU）所提供的服務，自1995年6月16日開始，這個網站每天會提供一張宇宙不同的影像並附上簡要說明。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/每日天文圖",
        "Action_link": "https://assistant.google.com/services/invoke/uid/00000011ac49f35c"
    },
    "Fortune_Master": {
        "src": "https://lh3.googleusercontent.com/hKT5442d4Mmrmx6tCPV6Ft-ZUwvR6zps3pmArImOjbCTKS5SjQM_bvUEmYixA8fDzwCwJoAPmR5I=s90",
        "Titile": "運勢大師",
        "Language": ["中文(台灣)", "廣東話"],
        "content": "本服務提供今天與後兩日的星座運勢。</br>使用者亦可透過透過生日查詢對應的運勢!</br></br>星座運勢內容授權：科技紫微網</br>http://click108.tw/RiYbJ",
        "Github_link": "",
        "Action_link": "https://assistant.google.com/services/invoke/uid/00000084fd2effe4"
    },
    "Brain_Game": {
        "src": "https://lh3.googleusercontent.com/IC_vSx1qVU6iTofmMzVjUIDjEcQ33KicmwUQS8CInXLghiMVayuCmn2aXEMTqp6DTrg7fbFLBxUT=s90",
        "Titile": "大腦運動會",
        "Language": ["中文(台灣)"],
        "content": "使用來自網路上或維基百科的題庫，</br>透過簡易選擇題或對話機制進行遊戲。</br>玩家可以選擇無限題目或是最多十題題目的模式。</br>每個題目在選擇後會判別錯誤與否並提供相關連結供參考(大多來自維基百科)。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/大腦運動會",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000603cba0b27"
    },
    "Riddle_Game": {
        "src": "https://lh3.googleusercontent.com/5Iy10xZI4gE58MPb2-j5Sd6SrKPg7dSHzcfp7woqTqQiHf4w4dh6r-UPALvtp0X38NtKNt8zsguz=s90",
        "Titile": "燈謎大師",
        "Language": ["中文(台灣)"],
        "content": "網羅網路上的各式謎語，</br>不必再翻找書本即能享有猜謎樂趣!</br></br>特殊設計</br>可提示謎底之字數，若猜測的答案接近正解亦可算答對。</br>若想跳過題目亦可提出需求，本服務會直接給予答案。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/燈謎大師",
        "Action_link": "https://assistant.google.com/services/invoke/uid/00000046536e4ef2"
    },
    "Number_Elf": {
        "src": "https://lh3.googleusercontent.com/98fcN9pEn4mfaJJxil5jvKD6PADUa7d2LfMexZriVgMxXw47y8_If3bxuhibtClnscx4TvE0d7cP=s90",
        "Titile": "數字精靈",
        "Language": ["中文(台灣)", "廣東話", "英文", "日文", "韓文", "泰文", "德文"],
        "content": "在遊戲開始前，使用者必須選擇一個數字做為上限。</br>接著程式會依據這個上限自其中隨機挑選一個數字做為答案。</br></br>隨著猜測的數字，程式會予以提示接近答案的區間。</br>直到使用者猜測到答案。</br>中途如果想放棄亦可直接看到答案。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/數字精靈",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000008473a60dc8"
    },
    "1A2B": {
        "src": "https://lh3.googleusercontent.com/bq7AdNyaNrET2f4F55Eq27vxnfA-G3odqoOZPA9_hl3sadVsSHzoFWEOeseoootSzwuewJyxfIU=s90",
        "Titile": "1A2B猜數",
        "Language": ["中文(台灣)", "廣東話", "英文", "日文", "韓文", "泰文"],
        "content": "遊戲開始時，會產生一個四位數字，其中：</br></br>每個數字範圍：0 ~ 9</br>數字間關係：彼此不能重複</br>整體範圍：0123 ~ 9876</br>答案可能性：5040種</br>「A」：代表有數值在答案中且位置正確</br>「B」：代表有數值在答案中但位置不正確</br></br>玩家在這個遊戲中要做的，即利用隨機的數字與系統給予的提示，</br>推敲出唯一的答案!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/1A2B",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000b5033b5e97"
    },
    "Flag_Game": {
        "src": "https://lh3.googleusercontent.com/8p8IQ-hEspewNRYI77jtHy7W1cM8jBWP6lVxLXXqQ9K5GjwCxlIOqUx3QxGLx8_gyuoQq_MUXFVxmQ=s90",
        "Titile": "國旗達人",
        "Language": ["中文(台灣)"],
        "content": " 透過隨機生成的選項與答案，</br>以全世界各地的旗幟做題題目的益智遊戲。</br>在每個作答結束後，亦提供簡易說明與維基百科連結供使用。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/國旗達人",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000008b6d90ac06"
    },
    "text_solitaire": {
        "src": "https://lh3.googleusercontent.com/Cc6BaW2bvr3i7N5V0pPb9RDtIZo8wIVFPFPV9Ev9tWtYgMvRBf8kCnhBpldEV-dG0eqDNlchpXQlhw=s90",
        "Titile": "詞語接龍",
        "Language": ["中文(台灣)"],
        "content": "使用來自《教育部重編國語辭典修訂本》收錄的詞彙，</br>與使用者進行接龍的文字遊戲。</br>在遊戲中不能輸入重複的詞彙，但可以隨時中斷遊戲。</br>玩家在每回合有三次跳過詞彙的機會，本服務會自動給予提示以便繼續進行。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/詞語接龍",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000ca4e8b5d65"
    },
    "idiom_solitaire": {
        "src": "https://lh3.googleusercontent.com/jgOHyXLYLFSqbnQFpS8ax8Y_I0nT7UYcPqyzSNjoOBx0Od3CnMQ05OiL6DV8rg_L2gHrVgyt9CY1=s90",
        "Titile": "成語接龍",
        "Language": ["中文(台灣)"],
        "content": "使用來自《成語典》收錄的詞彙，</br>與使用者進行接龍的文字遊戲。</br>在遊戲中不能輸入重複的成語，但可以隨時中斷遊戲。</br>如果玩家連續三次無法輸入正確的接續詞，本服務會自動給予提示以便繼續進行。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/成語接龍",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000005fc779da97"
    },
    "easy_text_solitaire": {
        "src": "https://lh3.googleusercontent.com/RaAMZ5KmCKWojxT-Zv-dwv5Pxqpvgc-sdWIgp_E0HOGyXERr0btrkcxQQRZJ4FLPAERm8q1XbuQ=s90",
        "Titile": "讀音接龍",
        "Language": ["中文(台灣)"],
        "content": " 使用來自《教育部重編國語辭典修訂本》收錄的詞彙，</br>與使用者進行接龍的文字遊戲。</br>在遊戲中不能輸入重複的詞彙，但可以隨時中斷遊戲。</br></br>範例 歲歲平安>黯然消魂>魂歸來兮>喜出望外>歪頭",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/讀音接龍",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000f85bd23edc"
    },
    "24_points": {
        "src": "https://lh3.googleusercontent.com/CceE_F175HAi1aWL5cA6wFCJMi85emmsVkUdyMfr1t7WqdegcVHZKaFUtLm7fZBjewXO4aSGU_eDdw=s90",
        "Titile": "24點巧算",
        "Language": ["中文(台灣)", "廣東話"],
        "content": "遊戲開始時，會產生一組固定順序的四個數字，其中：</br></br>每個數字範圍：1 ~ 13</br>數字間關係：彼此可重複</br>組合可能性：28561種</br>玩家在這個遊戲中要做的，即利用指定順序的數字進行加減乘除，</br>得到指定的答案! (例如24)",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/24點巧算",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000c29cce8146"
    },
    "Insight_Station": {
        "src": "https://lh3.googleusercontent.com/m6AndjL1T-BndHICYTed_LPaF2P3APyFaOL_DxpSlkPORIi6w14xob0V-CbDdtd-I5KNWzsygMw=s90",
        "Titile": "洞察號",
        "Language": ["中文(台灣)", "廣東話", "英文", "日文", "韓文", "泰文", "德文", "法文", "丹麥文", "荷蘭文", "西班牙文"],
        "content": "「洞察號」是一顆用於研究火星內部結構的無人著陸探測器。</br>於2019年2月19日起，NASA根據洞察號無人探測器的數據發布火星每日天氣報告，提供火星氣溫、風速、氣壓等信息。</br>本服務能讓你即時取得NASA所發布的最新天氣報告。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/洞察號",
        "Action_link": "https://assistant.google.com/services/invoke/uid/00000038183bf1fb"
    },
    "ISS_Info": {
        "src": "https://lh3.googleusercontent.com/Hs7eFeeWgCKl_-Ir4ngXl3lXkLeG7SLrQKo84kMIfOONu4A6zpa6OftHrZNBDoMVYqoT151huMjt=s90",
        "Titile": "國際太空站",
        "Language": ["中文(台灣)", "廣東話"],
        "content": "<div class='blockquote undefined'>製作緣由</br>仿造美國區的「ISS Info」Action</div><br>1.查詢國際太空站目前所在位置</br>2.查詢所在位置何時能看見國際太空站</br>3.查詢國際太空站上有幾個人</br>4.可自動判斷是否是「直接查詢」來決定是否要繼續對話",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/國際太空站",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000ee35748109"
    },
    "Google_Trend": {
        "src": "https://lh3.googleusercontent.com/UreYAi8D2h2nlgsBT8ILAAuQTnYOUe5sPQfbLAu0skUL1L01BpHT7eNFe5TqASC-g5eZirjysx4=s90",
        "Titile": "熱搜趨勢",
        "Language": ["中文(台灣)", "廣東話", "英文", "日文", "韓文", "泰文", "德文", "法文", "丹麥文", "荷蘭文"],
        "content": "透過Google趨勢的RSS， 為使用者快速取得當前的熱門搜尋關鍵字。</br>在啟動本服務同時，會自動判斷使用者所在地區來切換搜尋地區",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/熱搜趨勢",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000fe8bfde8db"
    },
    "Moon_info": {
        "src": "https://lh3.googleusercontent.com/P_cYQtn-NsKHndUqeytSl6e62UhHA9DDhsEF9_ensKoV6Rjitd79gZwHtjD3XDqsG7c4Zi6ByGrRdw=s90",
        "Titile": "月相精靈",
        "Language": ["中文(台灣)"],
        "content": "快速獲得今天的月相資訊、亮度</br>以及預計的月出月落時間。",
        "Github_link": "",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000004eb1cefaba"
    },
    "Zip_code": {
        "src": "https://lh3.googleusercontent.com/I_NnCp30icOJul74LqvuhrXakeM0xhFWBKp0nRQ8dGMoqAqg4BSmwG4UyRvZYpTuluSfXS-CERDu=s90",
        "Titile": "郵遞區號查詢器",
        "Language": ["中文(台灣)"],
        "content": "透過政府資料開放平台取得各縣市的郵遞區號資訊，</br>本服務提供使用者以口語快速查詢所需測站，</br>或是透過區域查詢、GPS查詢等方式尋找測站。</br>也可以加入日常安排以自定義的詞彙呼叫本服務。</br> <div class='blockquote undefined'> 有關五碼郵遞區號查詢</br>這是由台灣 3+2郵遞區號 查詢所提供的查詢服務。</br>透過他們所開放的API來查詢任意地址的五碼郵遞區號</div>",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/郵遞區號查詢器",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000ccf8e1037c"
    },
    "Blood_Index": {
        "src": "https://lh3.googleusercontent.com/oI6uG6rwPuex3kpDmn2TkL_0zJVmYP7wEWTMQ5D05zSNOAk6hA_1vlQhBXAQOwVVnz5rEprvUSIZ=s90",
        "Titile": "捐血幫手",
        "Language": ["中文(台灣)"],
        "content": "使用來自台灣血液基金會的血庫資訊，<br>讓使用者能隨時查詢血庫庫存情形。<br>資訊於每日整點更新一次。<br>此外也提供查詢各縣市固定捐血站的服務。 可透過區域查詢或是利用GPS定位取得固定捐血站資訊。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/捐血幫手",
        "Action_link": "https://assistant.google.com/services/invoke/uid/00000038f48e6d7d"
    },
    "Power_Index": {
        "src": "https://lh3.googleusercontent.com/uaOnDI3M7mPHQlIuuu6ruOD_DPFYjUinRZl1-M7YH-oTr_Qqzq0dlQK05cMr5jbi7WBl81W9Rgg=s90",
        "Titile": "電力精靈",
        "Language": ["中文(台灣)"],
        "content": "透過爬蟲取得台灣電力公司於網頁上公布之電力即時資訊 供使用者輕易獲取所需資訊",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/電力精靈",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000008efe74c3bf"
    },
    "TW_AQI_index": {
        "src": "https://lh3.googleusercontent.com/1eK9cMVUJJAmPWbp-kbseKXH7qFjByWkpgSEnamflSYF22jkcDkmazAfw_W2VGK2ILIoIUhUBIU=s90",
        "Titile": "空汙查詢精靈",
        "Language": ["中文(台灣)"],
        "content": "透過環境保護局開放資料平台取得原始的空汙測站資訊，</br>在篩選留下所需資訊後，儲存至Firebase Cloud Store以利Fulfillment隨時存取。</br></br>本服務提供使用者以口語快速查詢所需測站， 或是透過區域查詢、GPS查詢等方式尋找測站。</br></br>也可以加入日常安排以自定義的詞彙呼叫本服務。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/空汙查詢精靈",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000fa049fc5e5"
    },
    "TW_UVI_index": {
        "src": "https://lh3.googleusercontent.com/tFLlLU7i_2G20MQdyc2cslBtZfxXKvSHbQfe42DT4A5q6iSUNxSeh7jxzBQUuiv-XuC83NOwnTGy=s90",
        "Titile": "紫外線精靈",
        "Language": ["中文(台灣)"],
        "content": "透過環境保護局開放資料平台取得原始的紫外線測站資訊，</br>在篩選留下所需資訊後，儲存至Firebase Cloud Store以利Fulfillment隨時存取。</br></br>本服務提供使用者以口語快速查詢所需測站， 或是透過區域查詢、GPS查詢等方式尋找測站。</br></br>也可以加入日常安排以自定義的詞彙呼叫本服務。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/紫外線精靈",
        "Action_link": "https://assistant.google.com/services/invoke/uid/00000008b2c308d2"
    },
    "TW_Radiation_index": {
        "src": "https://lh3.googleusercontent.com/CnIRqKjc5uGejjiit-asiFCMDAFH_1HCLEK5kA0vTH32dJw_UVA4Ylp_oVMN_c8Xs9cdKHShpJfh=s90",
        "Titile": "輻射精靈",
        "Language": ["中文(台灣)"],
        "content": "透過原子能委員會開放資料平台取得原始的環境輻射測站資訊，</br>在篩選留下所需資訊後，儲存至Firebase Cloud Store以利Fulfillment隨時存取。</br></br>本服務提供使用者以口語快速查詢所需測站， 或是透過區域查詢、GPS查詢等方式尋找測站。</br></br>也可以加入日常安排以自定義的詞彙呼叫本服務。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/輻射精靈",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000a573924fc8"
    },
    "TW_Sea_Waether": {
        "src": "https://lh3.googleusercontent.com/PAh2x6gmA8Tjw_ogniq_utapmAFmJj4SXIz_m3xOgsWR5PH-eeXDwpgDwhJ05rGJDzBPk9fonWQ=s90",
        "Titile": "海象精靈",
        "Language": ["中文(台灣)"],
        "content": "透過氣象資料開放平台，</br>獲取由中央氣象局提供之近三日海象資訊。</br>藉由Google助理之特性達成口語互動之境界!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/海象精靈",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000003f49171d8f"
    },
    "World_AQI_index": {
        "src": "https://lh3.googleusercontent.com/jvwwmLpMpt3Ryp_LUM5Y0kvf1qrx2hncQASL6LWtVc5jqYeDD6C6vuQbCf07dwMiQ7MAdgaptur-=s90",
        "Titile": "世界空氣質量指數",
        "Language": ["中文(台灣)", "廣東話", "日文", "韓文", "泰文"],
        "content": "透過API介接來自The World Air Quality Project的即時空氣品質資訊。</br>使用者只要傳送GPS資訊給Google助理，即可獲得距離最近的測站資訊。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/世界空氣質量指數",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000b85163c25c"
    },
    "TW_Weather_helper": {
        "src": "https://lh3.googleusercontent.com/v3moXhFOp3ADc_GaPjTNxwx53JRIkJtpP1IN7zok_7mm2KJrX9t7b81VitsXoCAtNF-H5aMSpoCK5g=s90",
        "Titile": "天氣小幫手",
        "Language": ["中文(台灣)"],
        "content": "透過氣象資料開放平台，獲取由中央氣象局提供之口語化氣象預報資訊。</br>藉由Google助理之特性達成口語互動之境界!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/天氣小幫手",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000971a4ed57e"
    },
    "TW_WG_Translator": {
        "src": "https://lh3.googleusercontent.com/cf1EkCmbRkqQ_ghf8h-SwKs7pBHwEPwJPbNDCveVBewPLCfeWJXsuoJHK5QkrgLEWkAcz5xOYI9U=s90",
        "Titile": "護照英文翻譯機",
        "Language": ["中文(台灣)"],
        "content": "使用來自外交部的「護照外文姓名拼音對照表」，</br>提供快速便捷的翻譯功能!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/台灣護照英文翻譯機",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000835c0b1f9e"
    },
    "Morse_Translator": {
        "src": "https://lh3.googleusercontent.com/fxyZgV3doVdffoeB6fwcCOQnAn58ih5LaJAYgzg0qi2tA02XH4BEz2jgFW0ac2rTSP7Jarc2EnI1=s90",
        "Titile": "摩斯密碼翻譯機",
        "Language": ["中文(台灣)", "廣東話"],
        "content": "透過與Google助理對話來查看任意文字對應的摩斯密碼表示法!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/摩斯密碼翻譯機",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000003c8f1151a9"
    },
    "Binary_Translator": {
        "src": "https://lh3.googleusercontent.com/A4HU334fqf4ZNvkpEL2nfsfy_x1DRilzSKxO_kAi48SYDpZa4GLb80D_AF1ntC72Pcqr-hy3G_EZ5A=s90",
        "Titile": "二進制翻譯機",
        "Language": ["中文(台灣)", "廣東話"],
        "content": "透過與Google助理對話來查看任意文字對應的二進制表示法!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/二進制翻譯機",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000974738914a"
    },
    "Invoice-redemptioner": {
        "src": "https://lh3.googleusercontent.com/YeR_buvHOHYKwXPox9bmeiW-qnYxgd0wmQlnAzPHXPNoNRq6Dydxgdz6wLH4EBSV8875ugxtS3eC=s90",
        "Titile": "發票對獎機",
        "Language": ["中文(台灣)"],
        "content": "藉由爬蟲獲取來自財政部的發票開獎號碼，</br>以便使用者藉由對話進行兌獎。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/發票對獎機",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000f3dc6153fc"
    }
};