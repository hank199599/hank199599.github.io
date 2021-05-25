function picture_generator(number) {
    if (number > 0 && number <= 50) {
        return "https://dummyimage.com/1933x1068/1e9165/ffffff.png&text=" + number;
    } else if (number >= 51 && number <= 100) {
        return "https://dummyimage.com/1933x1068/fc920b/ffffff.png&text=" + number;
    } else if (number >= 100 && number <= 150) {
        return "https://dummyimage.com/1933x1068/ef4621/ffffff.png&text=" + number;
    } else if (number >= 151 && number <= 199) {
        return "https://dummyimage.com/1933x1068/b71411/ffffff.png&text=" + number;
    } else if (number >= 200 && number <= 300) {
        return "https://dummyimage.com/1933x1068/5b0e31/ffffff.png&text=" + number;
    } else if (number > 301) {
        return "https://dummyimage.com/1933x1068/4f1770/ffffff.png&text=" + number;
    } else {
        return "https://dummyimage.com/1933x1068/232830/ffffff.png&text=NaN";
    }
}

function info_output_generator(number) {
    if (number > 0 && number <= 50) {
        return "對一般民眾身體健康無影響。";
    } else if (number >= 51 && number <= 100) {
        return "極特殊敏感族群建議注意  <br>可能產生的咳嗽或呼吸急促症狀。";
    } else if (number >= 101 && number <= 150) {
        return "1.一般民眾如果有不適，應考慮減少戶外活動。  <br>2.學生仍可進行戶外活動，但建議減少長時間劇烈運動。  <br>3.有心臟、呼吸道及心血管疾病患者、孩童及老年人，建議減少體力消耗活動及戶外活動，外出應配戴口罩。  <br>4.具有氣喘的人可能需增加使用吸入劑的頻率。";
    } else if (number >= 151 && number <= 199) {
        return "1.一般民眾如果有不適，應減少體力消耗及戶外活動。  <br>2.學生應避免長時間劇烈運動並增加休息時間。  <br>3.有心臟、呼吸道及心血管疾病患者、孩童及老年人，建議留在室內減少體力消耗活動，外出應配戴口罩。  <br>4.具有氣喘的人可能需增加使用吸入劑的頻率。"
    } else if (number >= 200 && number <= 300) {
        return "1.一般民眾應減少戶外活動。  <br>2.學生應立即停止戶外活動，並將課程調整於室內進行。  <br>3.有心臟、呼吸道及心血管疾病患者、孩童及老年人應留在室內並減少體力消耗活動，外出應配戴口罩。  <br>4.具有氣喘的人應增加使用吸入劑的頻率。";
    } else if (number > 301) {
        return "1.一般民眾應避免戶外活動，室內應緊閉門窗，必要外出應配戴口罩等防護用具。  <br>2.學生應立即停止戶外活動，並將課程調整於室內進行。  <br>3.有心臟、呼吸道及心血管疾病患者、孩童及老年人應留在室內並避免體力消耗活動，外出應配戴口罩。  <br>4.具有氣喘的人應增加使用吸入劑的頻率。";
    } else {
        return "設備維護、儀器校正、儀器異常、傳輸異常、電力異常 \n或有效數據不足等需查修維護情形，以致資料暫時中斷服務。"
    }
}

function status_generator(number) {
    if (number > 0 && number <= 50) {
        return "良好";
    } else if (number >= 51 && number <= 100) {
        return "普通";
    } else if (number >= 100 && number <= 150) {
        return "對敏感族群不健康";
    } else if (number >= 151 && number <= 199) {
        return "對所有族群不健康";
    } else if (number >= 200 && number <= 300) {
        return "非常不健康";
    } else if (number > 301) {
        return "危害";
    } else {
        return "有效數據不足";
    }

}

function getDay(num) {
    var today = new Date();
    var nowTime = today.getTime() + 8 * 3600 * 1000;
    var ms = 24 * 3600 * 1000 * num;
    today.setTime(parseInt(nowTime + ms));
    var oMoth = (today.getMonth() + 1).toString();
    var oDay = today.getDate().toString();
    var oWeek = weekdays[today.getDay()];
    return oMoth + '月' + oDay + '日 (' + oWeek + ')';
}

function FormatTime() {
    var today = new Date();
    var nowTime = today.getTime();
    today.setTime(parseInt(nowTime));
    var oYear = today.getFullYear().toString();
    var oMoth = (today.getMonth() + 1).toString();
    var oDay = today.getDate().toString();
    var oHour = today.getHours().toString();
    if (oMoth.length <= 1) { oMoth = '0' + oMoth; }
    if (oDay.length <= 1) { oDay = '0' + oDay; }
    if (oHour.length <= 1) { oHour = '0' + oHour; }
    return oYear + "/" + oMoth + "/" + oDay + " " + oHour + ":00";
}

var contry_row = [
    "臺北",
    "新北",
    "永和",
    "桃園",
    "新竹",
    "苗栗",
    "臺中",
    "彰化",
    "南投",
    "雲林",
    "嘉義",
    "臺南",
    "高雄",
    "屏東",
    "宜蘭",
    "花蓮",
    "臺東",
]

/**
 * 這是相加的功能
 * 
 * @param {List} station_array 輸入現有的監測站矩陣
 * @returns 經篩選後，屬於行動測站的監測站列表
 */
function machine(station_array) {

    var output = {};
    var results = [];
    console.log(station_array.length)

    for (var i = 0; i < contry_row.length; i++) {
        if (output[contry_row[i]] === undefined) { output[contry_row[i]] = [] }

        for (var j = 0; j < station_array.length; j++) {
            if (station_array[j].indexOf(contry_row[i]) !== -1 && station_array[j].indexOf("(") !== -1) {
                output[contry_row[i]] = output[contry_row[i]].concat([station_array[j]])
            }
        }
        if (output[contry_row[i]].length === 0) { delete output[contry_row[i]] } else {
            results = results.concat(output[contry_row[i]])
        }
    }
    return results
}

function matcher(name, list) {
    var key_word = name.replace(/[\縣|\市]/gm, "");
    var retrun_array = []
    for (var i = 0; i < list.length; i++) {
        if (list[i].indexOf(key_word) !== -1) {
            retrun_array.push(list[i])
        }
    }
    return retrun_array
}