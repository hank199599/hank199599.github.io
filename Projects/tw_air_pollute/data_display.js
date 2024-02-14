const fetchData = async()=>{
    const res = await fetch('https://script.google.com/macros/s/AKfycbz_Qx1rwGkxvmrV8ipjfXJnX8sLAXI7KVTdR-Z-lU6olRV6ZncY0ONvqdRLN_Ujz569gg/exec/air', { mode: 'no-cors'})
    return res.json()
}


var county_list = Object.keys(tab_list);
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


const snapshot_data = fetchData()

document.getElementById("report_time").innerHTML ='<h4>更新時間 • <b>' + snapshot_data.PublishTime + '</b></h4>';

var mobile_array = machine(Object.keys(snapshot_data))
var modal_content = '';

for (var i = 0; i < county_list.length; i++) {
    var station_array = test_list[county_list[i]];
    var content = '';
    station_array = station_array.concat(matcher(county_list[i], mobile_array))

    for (var j = 0; j < station_array.length; j++) {
        var station = station_array[j];
        var data = snapshot_data[station];

        if (station.indexOf('(') !== -1) {
            station = station.split('(')[1].replace(')', '(行動站)')
        }
        if (data===undefined){continue;}
        content = content +`
            <div class="col-md-3 ml-auto mr-auto" style="padding: 10px;"> 
                <div class="card" > 
                    <div class="card-body" style="padding: 0px;"> 
                        <img class="card-img-top" src="  ${picture_generator(data.AQI)} " rel="nofollow" alt="AQI valuedata.AQI"> 
                        <div class = "card-body" style="padding : 5px 5px;"> 
                        <p class = "card-text"> 
                            <h2 class="card-title" style="margin: 0 0 ">${station}</h2> 
                            <h3 class="card-text"  style="margin: 0 0 "><small class="text-muted">  ${status_generator(data.AQI)}  </small></h3> 
                        </p> 
                        </div> 
                        <div class="center" style=" 
                            padding: 1.25rem 1.5rem; 
                            background-color: #f6f9fc; 
                            border-top: 0.0625rem solid rgba(0, 0, 0, 0.05); 
                            text-align: center !important; 
                            "> 
                            <a data-bs-toggle="modal" href="#${station.replace(/[(].+[)]/gm,"")}" >詳細資訊</a> 
                        </div> 
                    </div> 
                </div> 
            </div>`;

        modal_content = modal_content +
            '<div class="modal fade" id="' + station.replace(/[(].+[)]/gm,"") + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog modal-dialog-centered" role="document">' +
            '<div class="modal-content" style="width:600px">' +
            '<div class="modal-header">' +
            '<table>'+
            '<tr><td style="width:60%">'+
            '<h2 class="card-title">' + station + '</h2>' +
            '<h5 class="text-muted">' +status_generator(data.AQI) 
            if (data.AQI > 50) {
                modal_content = modal_content + ' • ' + pollutant_dict[data.Pollutant];
            }
            modal_content = modal_content + '</h5>'+'</td><td style="width:40%;">'+
            '<img class="img-container" src="' + picture_generator(data.AQI) + '" rel="nofollow" style="width:100%; padding:15px 5px" alt="Card image cap">' +
            '</td></tr>'+
            '</table>'+
            '</div>' +
            '<div class="modal-body" style="padding-top: 0;">' +
            '<p class="card-text" style="margin-top:16px;">' + info_output_generator(data.AQI) + '</p>'
            if (status_generator(data.AQI) !== "有效數據不足") {
                modal_content = modal_content + '<p class="card-text" style="margin: 0 0 "> PM₁₀ ' + data.PM10 + '(μg/m³) • PM₂.₅ ' + data.PM25 + '(μg/m³) • 臭氧 ' + data.O3 + '(ppb) </p>'
            }
        modal_content = modal_content + 
                `</div> 
                    <div class="modal-footer"> 
                        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">關閉頁面</button> 
                    </div> 
                </div> 
            </div> 
        </div>`

    }

    document.getElementById(tab_list[county_list[i]]).innerHTML = '<div class="row justify-content-center">' + content + '</div>'
}
document.getElementById('modal creator').innerHTML = modal_content

