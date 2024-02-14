const fetchUVIData = async () => {
    const res = await fetch('https://script.google.com/macros/s/AKfycbwxxyBKvBZwmlo57kgc42yqlfQad-B6ovUVx_k2vcAaZwQ2aFEIL6jiYxddmSRaRE1gsg/exec?type=uvi')
    const response = await res.json()
    return response
}

fetchUVIData().then((snapshot_data) => {

    var county_list = Object.keys(test_list);
    var nav_items = '';
    var nav_content = '';
    for (var i = 0; i < county_list.length; i++) {
        nav_items = nav_items + '<li class="nav-item" > <a class="nav-link mb-0 px-0 py-1';
        nav_content = nav_content + '<div class="tab-pane';
        if (i === 0) {
            nav_items = nav_items + ' active'
            nav_content = nav_content + ' active'
        }
        nav_items = nav_items + '" data-bs-toggle="tab" href="#' + tab_list[county_list[i]] + '" role="tab" aria-controls="' + tab_list[county_list[i]] + '" aria-selected="true">' + county_list[i] + '</a></li>'
        nav_content = nav_content + '" id="' + tab_list[county_list[i]] + '">' + '<p></p></div>'
    }
    document.getElementById('county_list').innerHTML = nav_items
    document.getElementById('county_content').innerHTML = nav_content
    document.getElementById("uvi_report").innerHTML = '<h4>更新時間 •  <b>' + snapshot_data['臺北'].datacreationdate + '</b></h4>';
    var modal_content = '';

    for (var i = 0; i < county_list.length; i++) {
        var station_array = test_list[county_list[i]];
        var content = '';

        for (var j = 0; j < station_array.length; j++) {
            var station = station_array[j];
            var data = snapshot_data[station];
            console.log(station)
            console.log(snapshot_data[station])
            const uvi = data !== undefined ? parseInt(data['uvi']) : -1

            content = content +
                '<div class="col-md-3 ml-auto mr-auto" style="padding: 10px;">' +
                '<div class="card">' +
                '<div class="card-body" style="padding: 0;">' +
                '<img class="card-img-top" src="' + picture_generator(uvi) + '" rel="nofollow" alt="Card image cap">' +
                ' <div class = "card-body" style="padding : 5px 5px;">' +
                '<p class = "card-text">' +
                '<h2 class="card-title" style="margin: 0 0 ">' + station + '</h2>' +
                '<h2 class="card-text"  style="margin: 0 0 "><small class="text-muted">' + status_generator(uvi) + '</small></h2>' +
                '</p>' +
                '</div>' +
                '<div class="center" style="' +
                'padding: 1.25rem 1.5rem;' +
                'background-color: #f6f9fc;' +
                'border-top: 0.0625rem solid rgba(0, 0, 0, 0.05);' +
                'text-align: center !important;' +
                '">' +
                '<a href="#' + station + '" data-bs-toggle="modal">詳細資訊</a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';

            modal_content = modal_content +
                '<div class="modal fade" id="' + station + '" tabindex="-1" role="dialog">' +
                '<div class="modal-dialog modal-dialog-centered" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<table>' +
                '<tr><td style="width:60%">' +
                '<h2 class="card-title">' + station + '</h2>' +
                '<h5 class="text-muted">' + status_generator(uvi) + '</h5>' +
                '</td><td style="width:40%;">' +
                '<img class="img-container" src="' + picture_generator(uvi) + '" rel="nofollow" style="width:100%; padding:15px 5px" alt="Card image cap">' +
                '</td></tr>' +
                '</table>' +
                '</div>' +
                '<div class="modal-body" style="padding-top: 0;">' +
                '<p class="card-text" style="margin-top:16px;">' + info_output_generator(uvi) + '</p>' +
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