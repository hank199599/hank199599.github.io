
var substance="";
var date_array=Object.keys(contents);

for (var i=0;i<date_array.length;i++){
    substance=substance+'<li class="event" data-date="'+date_array[i]+'">';
    substance=substance+'<h3 class="title">'+contents[date_array[i]].title+'</h3>';
    substance=substance+contents[date_array[i]].content;
    if(contents[date_array[i]].button!==undefined){
        substance=substance+'<br><br>';
        substance=substance+'<a href="'+contents[date_array[i]].button.herf+'" target="_blank"><button class="btn btn-primary btn-round">'+contents[date_array[i]].button.content+'</button></a>'
    }                            
    substance=substance+'</li>'
}

document.getElementById('timeline_content').innerHTML = substance
