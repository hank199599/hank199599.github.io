function picture_generator(number) {
    if (number >= 0) {
        return "./image/" + number + ".jpg";
    } else {
        return "./image/NaN.jpg"
    }
}

function info_output_generator(number) {
    if (number < 0.005) {
        return "手足或骨密度X射線檢查劑量。"
    } else if (number >= 0.005 && number < 0.01) {
        return "口腔X射線檢查劑量。"
    } else if (number >= 0.01 && number < 0.02) {
        return "四肢X射線檢查劑量。"
    } else if (number >= 0.02 && number < 0.1) {
        return "胸部X射線檢查劑量。"
    } else if (number >= 0.1 && number < 0.2) {
        return "乘飛機從東京到紐約之間往返一次的劑量。"
    } else if (number >= 0.2 && number < 0.4) {
        return "篩查乳腺癌的鉬靶檢查劑量。"
    } else if (number >= 0.4 && number < 0.54) {
        return "腹部X射線檢查劑量。"
    } else if (number >= 0.54 && number < 0.66) {
        return "骨盆X射線檢查劑量。"
    } else if (number >= 0.66 && number < 1) {
        return "一般人一年工作所受人工放射劑量。"
    } else if (number >= 1 && number <= 1.5) {
        return "腰椎X射線檢查或胸部低劑量CT檢查劑量。"
    } else if (number > 1.5 && number <= 2.0) {
        return "頭部CT檢查劑量。"
    } else if (number > 2 && number <= 2.4) {
        return "地球人平均一年纍計所受輻射。"
    } else if (number > 2.4 && number <= 4) {
        return "一次胃部X射線鋇餐透視的劑量。"
    } else if (number > 4 && number <= 6) {
        return "上消化道X射線檢查。"
    } else if (number > 6 && number <= 6.9) {
        return "一次胸部CT檢查。"
    } else if (number > 7 && number <= 7.1) {
        return "一次X射線胸部透視的劑量。"
    } else if (number > 7.1 && number <= 8) {
        return "下消化道X射線檢查。"
    } else if (number > 8 && number <= 10) {
        return "一次腹腔骨盆CT檢查。"
    } else if (number > 10 && number < 20) {
        return "一次全身CT檢查。"
    } else if (number === 20) {
        return "放射性職業工作者一年累積全身受職業照射的上限。"
    } else if (number === 50) {
        return "從事輻射相關工作者（非女性）一年纍計所受輻射舊標准規定的上限。"
    } else if (number > 13 && number <= 60) {
        return "1天平均吸1.5盒（30支）紙菸者一年纍計。"
    } else if (number > 60 && number <= 100) {
        return "從事輻射相關工作者（非女性）五年纍計所受輻射法定極限。"
    } else if (number > 100 && number < 500) {
        return "從事輻射相關工作者（非女性）五年纍計所受輻射法定極限。"
    } else if (number === 500) {
        return "國際放射防護委員會規定除人命救援外所能承受的輻射極限。"
    } else if (number > 500 && number <= 1000) {
        return "出現被輻射症狀。噁心，嘔吐。水晶體渾濁。"
    } else if (number > 1000 && number < 2000) {
        return "細胞組織遭破壞，內部出血，脫毛脫髮。死亡率5%。"
    } else if (number > 2000 && number < 3000) {
        return "死亡率50%，局部被輻射時脫毛脫髮。"
    } else if (number > 3000 && number < 4000) {
        return "死亡率50%，局部被輻射時失去生育能力。"
    } else if (number > 4000 && number < 5000) {
        return "死亡率50%，局部被輻射時白內障、皮膚出現紅斑。"
    } else if (number >= 5000) { return "死亡率99%。" } else {
        return "設備維護、儀器校正、儀器異常、傳輸異常、電力異常 <br>或有效數據不足等需查修維護情形，以致資料暫時中斷服務。"
    }

}

function status_generator(number) {
    if (number < 0.2) {
        return "一般背景輻射"
    } else if (number >= 0.2 && number < 20) {
        return "緊急狀況"
    } else if (number >= 20) {
        return "危急狀態"
    } else {
        return "儀器故障或校驗"
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
    return oYear + "/" + oMoth + "/" + oDay + " " + oHour + ":00"
}