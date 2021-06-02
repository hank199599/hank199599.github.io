function picture_generator(UVI) {
    if (UVI >= 0 && UVI <= 15) {
        return "./image/" + UVI + ".jpg";
    } else {
        return "./image/NaN.jpg"
    }
}

function info_output_generator(UVI) {
    if (UVI >= 0 && UVI < 3) {
        return "可以安心外出，但請留意瞬間的紫外線。";
    } else if (UVI >= 3 && UVI < 6) {
        return "1.防護措施：帽子/陽傘+防曬液+太陽眼鏡。  <br>2.儘量待在陰涼處";
    } else if (UVI >= 6 && UVI < 8) {
        return "1.曬傷時間：30分鐘內  <br>2.防護措施：帽子/陽傘+防曬液+太陽眼鏡。  <br>3.儘量待在陰涼處。";
    } else if (UVI >= 8 && UVI < 11) {
        return "1.曬傷時間：20分鐘內  <br>2.防護措施：	帽子/陽傘+防曬液+太陽眼鏡+長袖衣物。  <br>3.儘量待在陰涼處  <br>4.10至14時最好不在烈日下活動"
    } else if (UVI >= 11) {
        return "1.曬傷時間：15分鐘內  <br>2.防護措施：帽子/陽傘+防曬液+太陽眼鏡+長袖衣物。  <br>3.儘量待在陰涼處  <br>4.10至14時最好不在烈日下活動";
    } else {
        return "設備維護、儀器校正、儀器異常、傳輸異常、電力異常 \n或儀器故障或校驗等需查修維護情形，以致資料暫時中斷服務。"
    }
}

function status_generator(UVI) {
    if (UVI >= 0 && UVI < 3) {
        return "低量級";
    } else if (UVI >= 3 && UVI < 6) {
        return "中量級";
    } else if (UVI >= 6 && UVI < 8) {
        return "高量級";
    } else if (UVI >= 8 && UVI < 11) {
        return "過量級";
    } else if (UVI >= 11) {
        return "危險級";
    } else {
        return "儀器故障或校驗";
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

var today = new Date();
var nowTime = today.getTime();
today.setTime(parseInt(nowTime));
var hour_now = today.getHours().toString();


if (hour_now < 6 || hour_now > 17) {
    document.getElementById("background").style.backgroundImage = "url('../../assets/img/ejlSjF3.png')";
} else {
    document.getElementById("background").style.backgroundImage = "url('../../assets/img/0Is452b.jpg')";
}