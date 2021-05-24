// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD7QTtDBeC-O0tjPGfr6HjO-tK3Qz8J_L0",
    authDomain: "b1a2b-krmfch.firebaseapp.com",
    databaseURL: "https://b1a2b-krmfch.firebaseio.com",
    projectId: "b1a2b-krmfch",
    storageBucket: "b1a2b-krmfch.appspot.com",
    messagingSenderId: "777443303063",
    appId: "1:777443303063:web:ad45bae1d1dd1f85ded3d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var county_list = Object.keys(test_list);
var nav_items = '';
var nav_content = '';
var modal_content = '';
for (var i = 0; i < county_list.length; i++) {
    nav_items = nav_items + '<li class="nav-item" > <a class="nav-link';
    nav_content = nav_content + '<div class="tab-pane';
    if (i === 0) {
        nav_items = nav_items + ' active'
        nav_content = nav_content + ' active'
    }
    nav_items = nav_items + '" href="#' + tab_list[county_list[i]] + '" data-toggle="tab">' + county_list[i] + '</a></li>'
    nav_content = nav_content + '" id="' + tab_list[county_list[i]] + '">' + '<p></p></div>'
}
document.getElementById('county_list').innerHTML = nav_items
document.getElementById('county_content').innerHTML = nav_content

var myData = firebase.database().ref('/TWair');

myData.once('value', function(snapshot) {

    var snapshot_data = snapshot.val();

    document.getElementById("weather_report").innerHTML = '<h1 class="title">現在天氣概況</h1><h4>' + snapshot_data.report + "<br><br> 更新時間 •  <b>" + FormatTime() + '</b></h4>';

    var mobile_array = machine(Object.keys(snapshot_data.data))

    for (var i = 0; i < county_list.length; i++) {
        var station_array = test_list[county_list[i]];
        var content = '';
        station_array = station_array.concat(matcher(county_list[i], mobile_array))

        for (var j = 0; j < station_array.length; j++) {
            var station = station_array[j];
            var data = snapshot_data.data[station];

            if (station.indexOf('(') !== -1) {
                station = station.split('(')[1].replace(')', '(行動站)')
            }

            content = content +
                '<div class="col-md-3 ml-auto mr-auto">' +
                '<div class="card">' +
                '<div class="card-body" style="padding: 0;">' +
                '<img class="card-img-top" src="' + picture_generator(data.AQI) + '" rel="nofollow" alt="Card image cap">' +
                ' <div class = "card-body" >' +
                '<p class = "card-text">' +
                '<h2 class="card-title" style="margin: 0 0 ">' + station + '</h2>' +
                '<h2 class="card-text"  style="margin: 0 0 "><small class="text-muted">' + status_generator(data.AQI) + '</small></h2>' +
                '</p>' +
                '<a href="#' + station + '"  data-toggle="modal" >詳細資訊</a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            modal_content = modal_content +
                '<div class="modal fade" id="' + station + '" tabindex="-1" role="dialog">' +
                '<div class="modal-dialog modal-dialog-centered" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                '<i class="material-icons">clear</i>' +
                '</button>' +
                '</div>' +
                '<div class="modal-body" style="padding-top: 0;">' +
                '<table><tr><td style="width:70%">' +
                '<h2  style="margin: 0 0 ">' + station + '</h2>' +
                '<h3 class="card-text"  style="margin: 0 0 "><small class="text-muted">' + status_generator(data.AQI) + '</small></h3>' +
                '<p class="card-text">' + info_generator(data.AQI) + '</p>' +
                '<p class="card-text" style="margin: 0 0 "> PM₁₀ ' + data.PM10 + '(μg/m³) • PM₂.₅ ' + data.PM25 + '(μg/m³) • 臭氧 ' + data.O3 + '(ppb) </p>' +
                '</td><td>' +
                '<img class="img-container" src="' + picture_generator(data.AQI) + '" rel="nofollow" style="width:80%;" alt="Card image cap">' +
                '</td></tr></table>' + '</div>' +
                '<div class="modal-footer">' +
                '<button type="button" class="btn btn-danger btn-link" data-dismiss="modal">關閉頁面</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'
        }

        document.getElementById(tab_list[county_list[i]]).innerHTML = '<div class="row">' + content + '</div>'
    }

    document.getElementById('modal creator').innerHTML = modal_content
})