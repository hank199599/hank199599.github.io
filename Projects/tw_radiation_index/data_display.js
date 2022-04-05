// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD7QTtDBeC-O0tjPGfr6HjO-tK3Qz8J_L0",
    authDomain: "b1a2b-krmfch.firebaseapp.com",
    databaseURL: "https://b1a2b-krmfch.firebaseio.com",
    projectId: "b1a2b-krmfch",
    storageBucket: "b1a2b-krmfch.appspot.com",
    messagingSenderId: "777443303063",
    appId: "1:777443303063:web:da8a0160d289078cded3d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var input_dict = county_dict;

var database = firebase.database();

var selection_dict={
    "縣市":county_dict,
    "核電廠":nuclear_dict
}

var myData = firebase.database().ref('/TWradiation');

function display_generator(selection){

    var county_list = Object.keys(selection_dict[selection]);
    var nav_items = '';
    var nav_content = '';
    for (var i = 0; i < county_list.length; i++) {
        nav_items = nav_items + '<li class="nav-item" > <a class="nav-link mb-0 px-0 py-1';
        nav_content = nav_content + '<div class="tab-pane';
        if (i === 0) {
            nav_items = nav_items + ' active'
            nav_content = nav_content + ' active'
        }
        nav_items = nav_items  + '" data-bs-toggle="tab" href="#' + tab_list[county_list[i]] + '" role="tab" aria-controls="' + tab_list[county_list[i]] + '" aria-selected="true">' + county_list[i] + '</a></li>'
        nav_content = nav_content + '" id="' + tab_list[county_list[i]] + '">' + '<p></p></div>'
    }
document.getElementById('county_list').innerHTML = nav_items
document.getElementById('county_content').innerHTML = nav_content
document.getElementById('selection').innerHTML = selection+"角度"


myData.on('value', function(snapshot) {

    var snapshot_data = snapshot.val();
    document.getElementById("uvi_report").innerHTML = '<h4>更新時間 •  <b>' + snapshot_data.PublishTime + '</b></h4>';
    var modal_content = '';

    for (var i = 0; i < county_list.length; i++) {
        var station_array = selection_dict[selection][county_list[i]];
        var content = '';

        for (var j = 0; j < station_array.length; j++) {
            var station = station_array[j];
            var data = snapshot_data.data[station];

            content = content +
                '<div class="col-md-3 ml-auto mr-auto" style="padding: 10px;">' +
                '<div class="card">' +
                '<div class="card-body" style="padding: 0;">' +
                '<img class="card-img-top" src="' + picture_generator(parseFloat(data["SVC"])) + '" rel="nofollow" alt="Card image cap">' +
                ' <div class = "card-body" style="padding : 5px 5px;">' +
                '<p class = "card-text">' +
                '<h2 class="card-title" style="margin: 0 0 ">' + station + '</h2>' +
                '<h2 class="card-text"  style="margin: 0 0 "><small class="text-muted">' + status_generator(data["SVC"]) + '</small></h2>' +
                '</p>' +
                '</div>' +
                '<div class="center" style="' +
                'padding: 1.25rem 1.5rem;' +
                'background-color: #f6f9fc;' +
                'border-top: 0.0625rem solid rgba(0, 0, 0, 0.05);' +
                'text-align: center !important;' +
                '">' +
                '<a href="#' + station + '"  data-bs-toggle="modal" >詳細資訊</a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';

            modal_content = modal_content +
                '<div class="modal fade" id="' + station + '" tabindex="-1" role="dialog">' +
                '<div class="modal-dialog modal-dialog-centered" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<table>'+
                '<tr><td style="width:60%">'+
                '<h2 class="card-title">' + station + '</h2>' +
                '<h5 class="text-muted">' +status_generator(data["SVC"]) + '</h5>' +
                '</td><td style="width:40%;">'+
                '<img class="img-container" src="' + picture_generator(parseFloat(data["SVC"])) + '" rel="nofollow" style="width:100%; padding:15px 5px" alt="Card image cap">' +
                '</td></tr>'+
                '</table>'+
                '</div>' +
                '<div class="modal-body" style="padding-top: 0;">' +
                '<p class="card-text" style="margin-top:16px;">根據<a href="https://zh.wikipedia.org/wiki/%E8%A5%BF%E5%BC%97#%E4%BA%BA%E9%AB%94%E5%BD%B1%E9%9F%BF" target="_blank" style="color:#248da3">維基百科</a>的資料，<br>這個輻射劑量相當於' + info_output_generator(data["SVC"]) + '</p>' +
                '<br>' +
                '<p> 更新時間 •  ' + data["PublishTime"] + '</p>' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">關閉頁面</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'
        }

        document.getElementById(tab_list[county_list[i]]).innerHTML = '<div class="row justify-content-center">' + content + '</div>'
    }

    document.getElementById('modal creator').innerHTML = modal_content
})

}