var tab_dict = {
    "food": { "tag": "fastfood", "name": "Food Advice" },
    "school": { "tag": "school", "name": "References" },
    "reader": { "tag": "chrome_reader_mode", "name": "Quotes" },
    "color_lens": { "tag": "color_lens", "name": "Art & Life" },
    "sports_esports": { "tag": "sports_esports", "name": "Entertainment" },
    "science": { "tag": "science", "name": "Science" },
    "public": { "tag": "public", "name": "Public info." },
    "cloud": { "tag": "cloud", "name": "Weather" },
    "translate": { "tag": "translate", "name": "Translation" },
    "date_range": { "tag": "date_range", "name": "Enpower" }
}

var langeuage_url_dict={
    "Chinese(Taiwan)":"zh-TW",
    "Cantonese":"zh-HK",
    "English":"en",
    "Japanese":"ja",
    "Korean":"ko",
    "Thai":"th",
    "German":"de",
    "Spanish":"es",
    "Dutch":"nl",
    "Danish":"da",
    "French":"fr"
}

var langeuage_dict={
    "Chinese(Taiwan)":{
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
    "Cantonese":{
        "food":["Food_Decider"],
        "school":["Cangjie_Dictoinary"],
        "color_lens":["NASA_daily","Fortune_Master"],
        "sports_esports":["Number_Elf","1A2B","24_points"],
        "science":["Insight_Station","ISS_Info", "Google_Trend"],
        "cloud":["World_AQI_index"],
        "translate":["Morse_Translator","Binary_Translator"],
    },
    "English":{
        "food":["Food_Decider"],
        "sports_esports":["Number_Elf","1A2B"],
        "science":["Insight_Station", "Google_Trend"]
    },
    "Japanese":{
        "food":["Food_Decider"],
        "sports_esports":["Number_Elf","1A2B"],
        "cloud":["World_AQI_index"],
        "science":["Insight_Station", "Google_Trend"]
    },
    "Korean":{
        "sports_esports":["Number_Elf","1A2B"],
        "cloud":["World_AQI_index"],
        "science":["Insight_Station", "Google_Trend"]
    },
    "Thai":{
        "sports_esports":["Number_Elf","1A2B"],
        "cloud":["World_AQI_index"],
        "science":["Insight_Station", "Google_Trend"]
    },
    "German":{
        "sports_esports":["Number_Elf"],
        "science":["Insight_Station", "Google_Trend"]
    },
    "Spanish":{
        "science":["Insight_Station"]
    },
    "Dutch":{
        "science":["Insight_Station", "Google_Trend"]
    },
    "Danish":{
        "science":["Insight_Station", "Google_Trend"]
    },
    "French":{
        "science":["Insight_Station", "Google_Trend"]
    }
}

var detail_dict = {
    "Food_Decider": {
        "src": "https://lh3.googleusercontent.com/ydRrGO73QtkvNGjrclVYOSD6fGwWp3vHQTFLQUjEmLTjopR0xsXpI29bPPzgs5eYwO7mjobiXKdt=s90",
        "Titile": "美食決定器",
        "Language": ["Chinese(Taiwan)", "Cantonese", "English", "Japanese"],
        "content": "Just simply ask to get advice quickly,</br> is a little helper that can help you reduce your thinking time!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/%E7%BE%8E%E9%A3%9F%E6%B1%BA%E5%AE%9A%E5%99%A8",
        "Action_link": "https://assistant.google.com/services/invoke/uid/00000058f29109ab"
    },

    "Daily_History": {
        "src": "https://lh3.googleusercontent.com/1U6-HhkKdaVzPMMsz5XmKZ31lTnOkXWz4eTuDcNTejlgatqouaKoniXkxfMC0AKvRx4wSjHmynvs=s90",
        "Titile": "每日大事記",
        "Language": ["Chinese(Taiwan)"],
        "content": "Quickly check historical events that have occurred through dialogue!</br> Information source: Wikipedia</br>https://zh.wikipedia.org/wiki/歷史上的今天 </br>",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/%E7%BE%8E%E9%A3%9F%E6%B1%BA%E5%AE%9A%E5%99%A8",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000d67993a1d2"
    },
    "Taiwan_Dictoinary": {
        "src": "https://lh3.googleusercontent.com/b5mi7bsFMvz5vbzdQYkGvRTCZQlwgCOvIlmNAds6dvjuLGwC-gzhYDMowSi7_e4OR1o9fY0ecBY=s90",
        "Titile": "臺灣國語辭典",
        "Language": ["Chinese(Taiwan)"],
        "content": "This is a dictionary entry query service achieved through the API provided by &quot;萌典(moedict)&quot;. </br>Users can make inquiries through dialogue, direct input, or using microphones. </br>The vocabulary and entry content of the query are from &quot;Revised Chinese Dictionary&quot;。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/臺灣國語辭典",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000008d7409cb2a"
    },
    "Taiwan_Rail_Dictoinary": {
        "src": "https://lh3.googleusercontent.com/RD6WQND-5BmBiDt2UfnbrqnMIWquswEXE1hySqSCBHwLMgQLeS0taGu6y2Ezgqnr-ADzo637fVp1=s90",
        "Titile": "鐵道詞典",
        "Language": ["Chinese(Taiwan)"],
        "content": "Provided by the Railway Reconstruction Engineering Bureau of the Ministry of Communications,</br>The main content is traditional railways, high-speed railways, MRT systems and other related terms</br></br>ⒸLicensing Information: Government Data Open License Terms-Version 1",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/鐵道詞典",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000862113b0f6"
    },
    "Cangjie_Dictoinary": {
        "src": "https://lh3.googleusercontent.com/UVAu76LGBKhH-4DRHihBAQhF3tKBrjxr1ZE3n2N_o2QPbCSpbYl8Ue6_TD5YULulFmwupCoRbhI1=s90",
        "Titile": "倉頡字典",
        "Language": ["Chinese(Taiwan)", "Cantonese"],
        "content": "Query the corresponding Cangjie code of each word in &quot;Cangjie Fifth Generation&quot; through dialogue. </br></br>About Cangjie input method: </br> is a very efficient Chinese input method, this method uses the concept of English spelling, cleverly separates each Chinese character, and then summarizes it In addition, twenty-four Chinese letters are compiled, and seventy-five auxiliary glyphs are derived, so that all Chinese characters can use twenty-four Chinese letters, and the character can be obtained according to certain code-taking rules.",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/倉頡字典",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000009932f37dce"
    },
    "Positive_Quote": {
        "src": "https://lh3.googleusercontent.com/XAylvXmY2tTWiQVtuwbcan_nno8pM7q9Qro6aEBECzTEN-x8jqAjuMm-ZqL_qCVvvkYhgw1_VVNI=s90",
        "Titile": "正能量語錄",
        "Language": ["Chinese(Taiwan)"],
        "content": "Collect positive energy quotations from the Internet.</br> Each time you use this service, a quotation is randomly selected as output. </br></br> At the same time, use free licensed music from Youtube sound effects library as background music. </br>Provide users with a completely different experience!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/正能量語錄",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000b877fb7629"
    },
    "Negative_Quote": {
        "src": "https://lh3.googleusercontent.com/9eRDWvPEh3jeQmuBcpiXtX4gH9yTGqvyO1ur_PQ-K7H9KiR6A24zluD7ENZeIr0nNvshlOLH-yrw=s90",
        "Titile": "負能量語錄",
        "Language": ["Chinese(Taiwan)"],
        "content": "Collect negative energy quotations from the Internet.</br> Each time you use this service, a quotation is randomly selected as output. </br></br> At the same time, use free licensed music from Youtube sound effects library as background music. </br>Provide users with a completely different experience!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/負能量語錄",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000e8f5894304"
    },
    "Today_Quote": {
        "src": "https://lh3.googleusercontent.com/DPDoPBFLpDglYGoU2zNdzACtOFfE-rsPvK2kJC1jA_scJTJM69x8SmycybTIipNMC0LsJdz06j5qwQ=s90",
        "Titile": "今日名言",
        "Language": ["Chinese(Taiwan)"],
        "content": "Call Google Assistant at any time to access the daily quotes included in &quot;Wikiquote&quot;. </br>While viewing the famous quote, you can also go to the corresponding page link of the celebrity on Wikipedia for more information. </br></br>Updated once a day (based on Taipei Standard Time)",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/今日名言",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000002a10f761c0"
    },
    "NASA_daily": {
        "src": "https://lh3.googleusercontent.com/NnDqEoQYzER27FJ8X-6fAxdRkSQ35j6MbiMfwMu5V_tqLZDopKQ1YcCPMLwwmIA-WQmEFaJ1Y6YA=s90",
        "Titile": "每日天文圖",
        "Language": ["Chinese(Taiwan)", "Cantonese"],
        "content": "Provide users with daily selected pictures from &quot;Astronomy Picture of the Day (APOD)&quot;,</br> and attach a brief description written by a professional astronomer. </br>Take you to a fascinating universe!</br></br>About &quot;Astronomy Picture of the Day (APOD)&quot;: </br>From the National Aeronautics and Space Administration and Michigan University of Science and Technology The service provided by (MTU) began on June 16, 1995. This website will provide a different image of the universe every day with a brief description.",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/每日天文圖",
        "Action_link": "https://assistant.google.com/services/invoke/uid/00000011ac49f35c"
    },
    "Fortune_Master": {
        "src": "https://lh3.googleusercontent.com/hKT5442d4Mmrmx6tCPV6Ft-ZUwvR6zps3pmArImOjbCTKS5SjQM_bvUEmYixA8fDzwCwJoAPmR5I=s90",
        "Titile": "運勢大師",
        "Language": ["Chinese(Taiwan)", "Cantonese"],
        "content": "This service provides the horoscope for today and the next two days. </br>Users can also check the corresponding fortune through birthday!</br></br> Horoscope content authorization: 科技紫微網.com</br>http://click108.tw/RiYbJ",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/%E9%81%8B%E5%8B%A2%E5%A4%A7%E5%B8%AB",
        "Action_link": "javascript:;"
    },
    "Brain_Game": {
        "src": "https://lh3.googleusercontent.com/IC_vSx1qVU6iTofmMzVjUIDjEcQ33KicmwUQS8CInXLghiMVayuCmn2aXEMTqp6DTrg7fbFLBxUT=s90",
        "Titile": "大腦運動會",
        "Language": ["Chinese(Taiwan)"],
        "content": "Use question banks from the Internet or Wikipedia,</br> play through simple multiple choice questions or dialogue mechanisms. </br>Players can choose the mode of unlimited questions or up to ten questions. </br>After selecting each topic, it will judge whether it is wrong or not and provide related links for reference (mostly from Wikipedia)。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/大腦運動會",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000603cba0b27"
    },
    "Riddle_Game": {
        "src": "https://lh3.googleusercontent.com/5Iy10xZI4gE58MPb2-j5Sd6SrKPg7dSHzcfp7woqTqQiHf4w4dh6r-UPALvtp0X38NtKNt8zsguz=s90",
        "Titile": "燈謎大師",
        "Language": ["Chinese(Taiwan)"],
        "content": "Collect all kinds of riddles on the Internet,</br>you can enjoy the fun of guessing without having to search for books!</br></br>Special design</br> can prompt the number of words in the answer, if the guessed answer is close A positive solution can also be considered a correct answer. </br>If you want to skip the question, you can also make a request, and the service will give the answer directly.",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/燈謎大師",
        "Action_link": "https://assistant.google.com/services/invoke/uid/00000046536e4ef2"
    },
    "Number_Elf": {
        "src": "https://lh3.googleusercontent.com/98fcN9pEn4mfaJJxil5jvKD6PADUa7d2LfMexZriVgMxXw47y8_If3bxuhibtClnscx4TvE0d7cP=s90",
        "Titile": "數字精靈",
        "Language": ["Chinese(Taiwan)", "Cantonese", "English", "Japanese", "Korean", "Thai", "German"],
        "content": "Before the game starts, the user must choose a number as the upper limit. </br>Then the program will randomly select a number as the answer based on this upper limit. </br></br>With the guessed number, the program will prompt the interval close to the answer. </br>Until the user guesses the answer. </br>If you want to give up halfway, you can also see the answer directly.",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/數字精靈",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000008473a60dc8"
    },
    "1A2B": {
        "src": "https://lh3.googleusercontent.com/bq7AdNyaNrET2f4F55Eq27vxnfA-G3odqoOZPA9_hl3sadVsSHzoFWEOeseoootSzwuewJyxfIU=s90",
        "Titile": "1A2B猜數",
        "Language": ["Chinese(Taiwan)", "Cantonese", "English", "Japanese", "Korean", "Thai"],
        "content": "At the beginning of the game, a four-digit number will be generated, among which:</br></br>Each number range: 0 ~ 9</br>The relationship between numbers: each other cannot be repeated</br> The overall range: 0123 ~ 9876 </br>Possibility of answer: 5040 kinds</br>&quot;A&quot;: It means there is a value in the answer and the position is correct</br>&quot;B&quot;: It means there is a value in the answer but the position is incorrect</br><br>What the player has to do in this game is to use random numbers and hints given by the system,</br> to figure out the only answer!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/1A2B",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000b5033b5e97"
    },
    "Flag_Game": {
        "src": "https://lh3.googleusercontent.com/8p8IQ-hEspewNRYI77jtHy7W1cM8jBWP6lVxLXXqQ9K5GjwCxlIOqUx3QxGLx8_gyuoQq_MUXFVxmQ=s90",
        "Titile": "國旗達人",
        "Language": ["Chinese(Taiwan)"],
        "content": " Through randomly generated options and answers,</br> a puzzle game with flags from all over the world. </br>After each answer, a brief description and Wikipedia link are also provided for use.",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/國旗達人",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000008b6d90ac06"
    },
    "text_solitaire": {
        "src": "https://lh3.googleusercontent.com/Cc6BaW2bvr3i7N5V0pPb9RDtIZo8wIVFPFPV9Ev9tWtYgMvRBf8kCnhBpldEV-dG0eqDNlchpXQlhw=s90",
        "Titile": "詞語接龍",
        "Language": ["Chinese(Taiwan)"],
        "content": "Use the vocabulary included in the &quot;Revised Chinese Dictionary of the Ministry of Education&quot; to play a solitaire word game with users. </br> Repeated words cannot be entered in the game, but the game can be interrupted at any time. </br> Players have three chances to skip vocabulary in each round, and the service will automatically give prompts to continue.Use the vocabulary included in the &quot;Revised Chinese Dictionary of the Ministry of Education&quot; to play a solitaire word game with users. </br> Repeated words cannot be entered in the game, but the game can be interrupted at any time. </br> Players have three chances to skip vocabulary in each round, and the service will automatically give prompts to continue.",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/詞語接龍",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000ca4e8b5d65"
    },
    "idiom_solitaire": {
        "src": "https://lh3.googleusercontent.com/jgOHyXLYLFSqbnQFpS8ax8Y_I0nT7UYcPqyzSNjoOBx0Od3CnMQ05OiL6DV8rg_L2gHrVgyt9CY1=s90",
        "Titile": "成語接龍",
        "Language": ["Chinese(Taiwan)"],
        "content": "Use the vocabulary from the &quot;Idioms Dictionary&quot; to play a word game with the user in Solitaire. </br> Repeated idioms cannot be entered in the game, but the game can be interrupted at any time. </br>If the player fails to enter the correct connection word three times in a row, the service will automatically give a prompt to continue.Use the vocabulary from the &quot;Idioms Dictionary&quot; to play a word game with the user in Solitaire. </br> Repeated idioms cannot be entered in the game, but the game can be interrupted at any time. </br>If the player fails to enter the correct connection word three times in a row, the service will automatically give a prompt to continue.",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/成語接龍",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000005fc779da97"
    },
    "easy_text_solitaire": {
        "src": "https://lh3.googleusercontent.com/RaAMZ5KmCKWojxT-Zv-dwv5Pxqpvgc-sdWIgp_E0HOGyXERr0btrkcxQQRZJ4FLPAERm8q1XbuQ=s90",
        "Titile": "讀音接龍",
        "Language": ["Chinese(Taiwan)"],
        "content": " Use the vocabulary included in the &quot;Revised Chinese Dictionary of the Ministry of Education&quot; to play a solitaire word game with users. </br> Repeated words cannot be entered in the game, but the game can be interrupted at any time. </br></br>Example Sui Sui Ping An> Despaired> Soul returns> Overjoyed> Tilted headUse the vocabulary included in the &quot;Revised Chinese Dictionary of the Ministry of Education&quot; to play a solitaire word game with users. </br> Repeated words cannot be entered in the game, but the game can be interrupted at any time. </br></br>Example: 歲歲平安>黯然消魂>魂歸來兮>喜出望外>歪頭",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/讀音接龍",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000f85bd23edc"
    },
    "24_points": {
        "src": "https://lh3.googleusercontent.com/CceE_F175HAi1aWL5cA6wFCJMi85emmsVkUdyMfr1t7WqdegcVHZKaFUtLm7fZBjewXO4aSGU_eDdw=s90",
        "Titile": "24點巧算",
        "Language": ["Chinese(Taiwan)", "Cantonese"],
        "content": "At the beginning of the game, a set of four numbers in a fixed order will be generated, where:</br></br>Each number range: 1 ~ 13</br>Relationship between numbers: each other can be repeated</br>The combination is possible Sex: 28561 kinds of</br> players have to do in this game, that is, use the numbers in the specified order to add, subtract, multiply and divide,</br> get the specified answer! (for example, 24)",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/24點巧算",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000c29cce8146"
    },
    "Insight_Station": {
        "src": "https://lh3.googleusercontent.com/m6AndjL1T-BndHICYTed_LPaF2P3APyFaOL_DxpSlkPORIi6w14xob0V-CbDdtd-I5KNWzsygMw=s90",
        "Titile": "洞察號",
        "Language": ["Chinese(Taiwan)", "Cantonese", "English", "Japanese", "Korean", "Thai", "German", "French", "Danish", "Dutch", "Spanish"],
        "content": "&quot;Insight&quot; is an unmanned landing probe used to study the internal structure of Mars. </br>From February 19, 2019, NASA will release daily Martian weather reports based on data from the InSight unmanned probe, providing information on Martian temperature, wind speed, and pressure. </br>This service allows you to instantly obtain the latest weather reports released by NASA.",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/洞察號",
        "Action_link": "https://assistant.google.com/services/invoke/uid/00000038183bf1fb"
    },
    "ISS_Info": {
        "src": "https://lh3.googleusercontent.com/Hs7eFeeWgCKl_-Ir4ngXl3lXkLeG7SLrQKo84kMIfOONu4A6zpa6OftHrZNBDoMVYqoT151huMjt=s90",
        "Titile": "國際太空站",
        "Language": ["Chinese(Taiwan)", "Cantonese"],
        "content": "<div class='blockquote undefined'>Reason for making</br>Imitate the &quot;ISS Info&quot; Action in the U.S.</div><br>1. Check the current location of the International Space Station</br> 2. Check when it is located Can see the International Space Station</br> 3. Check how many people are on the International Space Station</br> 4. It can automatically determine whether it is a &quot;direct inquiry&quot; to decide whether to continue the conversation",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/國際太空站",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000ee35748109"
    },
    "Google_Trend": {
        "src": "https://lh3.googleusercontent.com/UreYAi8D2h2nlgsBT8ILAAuQTnYOUe5sPQfbLAu0skUL1L01BpHT7eNFe5TqASC-g5eZirjysx4=s90",
        "Titile": "熱搜趨勢",
        "Language": ["Chinese(Taiwan)", "Cantonese", "English", "Japanese", "Korean", "Thai", "German", "French", "Danish", "Dutch"],
        "content": "Through the RSS of Google Trends, users can quickly obtain the current popular search keywords. </br>When this service is activated, it will automatically determine the user's location to switch the search area",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/熱搜趨勢",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000fe8bfde8db"
    },
    "Moon_info": {
        "src": "https://lh3.googleusercontent.com/P_cYQtn-NsKHndUqeytSl6e62UhHA9DDhsEF9_ensKoV6Rjitd79gZwHtjD3XDqsG7c4Zi6ByGrRdw=s90",
        "Titile": "月相精靈",
        "Language": ["Chinese(Taiwan)"],
        "content": "Quickly get today's moon phase information, brightness</br> and estimated moonrise and moonset time.",
        "Github_link": "",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000004eb1cefaba"
    },
    "Zip_code": {
        "src": "https://lh3.googleusercontent.com/I_NnCp30icOJul74LqvuhrXakeM0xhFWBKp0nRQ8dGMoqAqg4BSmwG4UyRvZYpTuluSfXS-CERDu=s90",
        "Titile": "郵遞區號查詢器",
        "Language": ["Chinese(Taiwan)"],
        "content": "Obtain the postal code information of each county and city through the government data open platform.</br>This service provides users to quickly query the required station in spoken language,</br> or find the station through regional query, GPS query, etc. </br>You can also join the daily schedule to call this service with a customized vocabulary. </br> <div class='blockquote undefined'> About five-digit postal code query</br> This is the query service provided by Taiwan 3+2 postal code query. </br>Query the five-digit postal code of any address through the API they open</div>",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/郵遞區號查詢器",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000ccf8e1037c"
    },
    "Blood_Index": {
        "src": "https://lh3.googleusercontent.com/oI6uG6rwPuex3kpDmn2TkL_0zJVmYP7wEWTMQ5D05zSNOAk6hA_1vlQhBXAQOwVVnz5rEprvUSIZ=s90",
        "Titile": "捐血幫手",
        "Language": ["Chinese(Taiwan)"],
        "content": "Using blood bank information from the Taiwan Blood Foundation,<br>allows users to check blood bank inventory at any time. <br>The information is updated on the hour every day. <br>In addition, it also provides services for inquiring about fixed blood donation stations in various counties and cities. Information on fixed blood donation stations can be obtained through regional query or GPS positioning.",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/捐血幫手",
        "Action_link": "https://assistant.google.com/services/invoke/uid/00000038f48e6d7d"
    },
    "Power_Index": {
        "src": "https://lh3.googleusercontent.com/uaOnDI3M7mPHQlIuuu6ruOD_DPFYjUinRZl1-M7YH-oTr_Qqzq0dlQK05cMr5jbi7WBl81W9Rgg=s90",
        "Titile": "電力精靈",
        "Language": ["Chinese(Taiwan)"],
        "content": "Obtain real-time electricity information published by the Taiwan Power Company on the website through crawlers, so that users can easily obtain the information they need",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/電力精靈",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000008efe74c3bf"
    },
    "TW_AQI_index": {
        "src": "https://lh3.googleusercontent.com/1eK9cMVUJJAmPWbp-kbseKXH7qFjByWkpgSEnamflSYF22jkcDkmazAfw_W2VGK2ILIoIUhUBIU=s90",
        "Titile": "空汙查詢精靈",
        "Language": ["Chinese(Taiwan)"],
        "content": "Obtain the original air pollution station information through the open data platform of the Environmental Protection Agency,</br> after filtering and leaving the required information, save it to the Firebase Cloud Store for Fulfillment to access at any time. </br></br>This service provides users to quickly query the required station in spoken language, or find the station through area query, GPS query, etc. </br></br>You can also join the daily schedule to call this service with a customized vocabulary.",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/空汙查詢精靈",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000fa049fc5e5"
    },
    "TW_UVI_index": {
        "src": "https://lh3.googleusercontent.com/tFLlLU7i_2G20MQdyc2cslBtZfxXKvSHbQfe42DT4A5q6iSUNxSeh7jxzBQUuiv-XuC83NOwnTGy=s90",
        "Titile": "紫外線精靈",
        "Language": ["Chinese(Taiwan)"],
        "content": "Obtain the original UV station information through the open data platform of the Environmental Protection Agency.</br> After filtering and leaving the required information, save it to the Firebase Cloud Store for Fulfillment to access at any time. </br></br>This service provides users to quickly query the required station in spoken language, or find the station through area query, GPS query, etc. </br></br>You can also join the daily schedule to call this service with a customized vocabulary.",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/紫外線精靈",
        "Action_link": "https://assistant.google.com/services/invoke/uid/00000008b2c308d2"
    },
    "TW_Radiation_index": {
        "src": "https://lh3.googleusercontent.com/CnIRqKjc5uGejjiit-asiFCMDAFH_1HCLEK5kA0vTH32dJw_UVA4Ylp_oVMN_c8Xs9cdKHShpJfh=s90",
        "Titile": "輻射精靈",
        "Language": ["Chinese(Taiwan)"],
        "content": "Obtain the original environmental radiation station information through the Atomic Energy Commission's open data platform,</br> after screening and leaving the required information, save it to the Firebase Cloud Store for Fulfillment to access at any time. </br></br>This service provides users to quickly query the required station in spoken language, or find the station through area query, GPS query, etc. </br></br>You can also join the daily schedule to call this service with a customized vocabulary.",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/輻射精靈",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000a573924fc8"
    },
    "TW_Sea_Waether": {
        "src": "https://lh3.googleusercontent.com/PAh2x6gmA8Tjw_ogniq_utapmAFmJj4SXIz_m3xOgsWR5PH-eeXDwpgDwhJ05rGJDzBPk9fonWQ=s90",
        "Titile": "海象精靈",
        "Language": ["Chinese(Taiwan)"],
        "content": "Through the open platform of meteorological data,</br> obtain the walrus information provided by the Central Meteorological Bureau in the past three days. </br>Achieve the realm of oral interaction with the characteristics of Google Assistant!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/海象精靈",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000003f49171d8f"
    },
    "World_AQI_index": {
        "src": "https://lh3.googleusercontent.com/jvwwmLpMpt3Ryp_LUM5Y0kvf1qrx2hncQASL6LWtVc5jqYeDD6C6vuQbCf07dwMiQ7MAdgaptur-=s90",
        "Titile": "世界空氣質量指數",
        "Language": ["Chinese(Taiwan)", "Cantonese", "Japanese", "Korean", "Thai"],
        "content": "Interface with real-time air quality information from The World Air Quality Project through API. </br>Users only need to send GPS information to Google Assistant to get the nearest station information.",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/世界空氣質量指數",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000b85163c25c"
    },
    "TW_Weather_helper": {
        "src": "https://lh3.googleusercontent.com/v3moXhFOp3ADc_GaPjTNxwx53JRIkJtpP1IN7zok_7mm2KJrX9t7b81VitsXoCAtNF-H5aMSpoCK5g=s90",
        "Titile": "天氣小幫手",
        "Language": ["Chinese(Taiwan)"],
        "content": "Obtain the colloquial weather forecast information provided by the Central Meteorological Bureau through the weather data open platform. </br>Achieve the realm of oral interaction with the characteristics of Google Assistant!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/天氣小幫手",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000971a4ed57e"
    },
    "TW_WG_Translator": {
        "src": "https://lh3.googleusercontent.com/cf1EkCmbRkqQ_ghf8h-SwKs7pBHwEPwJPbNDCveVBewPLCfeWJXsuoJHK5QkrgLEWkAcz5xOYI9U=s90",
        "Titile": "護照英文翻譯機",
        "Language": ["Chinese(Taiwan)"],
        "content": "Use the &quot;Passport Foreign Name Pinyin Comparison Table&quot; from the Ministry of Foreign Affairs,</br> to provide a quick and convenient translation function!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/台灣護照英文翻譯機",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000835c0b1f9e"
    },
    "Morse_Translator": {
        "src": "https://lh3.googleusercontent.com/fxyZgV3doVdffoeB6fwcCOQnAn58ih5LaJAYgzg0qi2tA02XH4BEz2jgFW0ac2rTSP7Jarc2EnI1=s90",
        "Titile": "摩斯密碼翻譯機",
        "Language": ["Chinese(Taiwan)", "Cantonese"],
        "content": "View the Morse code notation corresponding to any text by talking to Google Assistant!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/摩斯密碼翻譯機",
        "Action_link": "https://assistant.google.com/services/invoke/uid/0000003c8f1151a9"
    },
    "Binary_Translator": {
        "src": "https://lh3.googleusercontent.com/A4HU334fqf4ZNvkpEL2nfsfy_x1DRilzSKxO_kAi48SYDpZa4GLb80D_AF1ntC72Pcqr-hy3G_EZ5A=s90",
        "Titile": "二進制翻譯機",
        "Language": ["Chinese(Taiwan)", "Cantonese"],
        "content": "View the binary representation of any text by talking to Google Assistant!",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/二進制翻譯機",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000974738914a"
    },
    "Invoice-redemptioner": {
        "src": "https://lh3.googleusercontent.com/YeR_buvHOHYKwXPox9bmeiW-qnYxgd0wmQlnAzPHXPNoNRq6Dydxgdz6wLH4EBSV8875ugxtS3eC=s90",
        "Titile": "發票對獎機",
        "Language": ["Chinese(Taiwan)"],
        "content": "Use the crawler to obtain the invoice lottery number from the Ministry of Finance,</br> so that the user can redeem the prize through dialogue。",
        "Github_link": "https://github.com/hank199599/Google-Assistant-APP/tree/master/發票對獎機",
        "Action_link": "https://assistant.google.com/services/invoke/uid/000000f3dc6153fc"
    }
};