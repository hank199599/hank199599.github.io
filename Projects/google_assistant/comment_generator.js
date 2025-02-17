
var search_lang = Object.keys(search_link);
var content = '<div class="tab-content" id="v-pills-tabContent">';
var language_list = Object.keys(langeuage_url_dict)


for (var i = 0; i < Object.keys(comments).length; i++) {

    content = content+'<div class="tab-pane fade show" id="'+language_list[i]+'" role="tabpanel" aria-labelledby="'+language_list[i]+'">'

    content = content+'<div class="col-md-4 mx-auto" style="background-position: center center">' +
        '<a href="https://web.archive.org/web/20200922045406/https://assistant.google.com/explore/search?q=AtesX%20Team&hl=' + search_lang[i] + '"class="btn btn-outline-dark btn-lg blur" target="_blank" style="bottom:0px;">' +
        '<span class="iconify" data-icon="mdi-google-assistant" data-inline="false"></span>' +
        '&emsp;' + search_link[search_lang[i]] + '</a></div>';
  
    var comment_list = comments[String(i + 1)]

    content = content + '<div class="row">'

    if (comment_list.length !== 0) {

        for (var j = 0; j < comment_list.length; j++) {

        content = content +'<div class="col-lg-4">'+
            '<div class="card shadow-lg mb-4" style="margin:15px 15px">'+
              '<div class="card-header p-0 position-relative mt-n3 mx-3 z-index-2 bg-transparent">'+
                '<div class="border-radius-lg p-2 shadow-lg" style="color:' + comment_list[j].text_color + ';background: linear-gradient(60deg, ' + comment_list[j].bg_color[0] + ', ' + comment_list[j].bg_color[1] + ');">' +
                  '<h3 class="text-white mb-0">'+comment_list[j].name+'</h3>'+
                '</div>'+
              '</div>'+
              '<div class="card-body p-3">'+
                '<h6 class="card-title">' + comment_list[j].title + '</h6>' +
                '<h6 class="card-subtitle mb-2 text-muted">' + comment_list[j].reviewer +
                '</br>' +
                '<small>' + comment_list[j].date + '</small>' +
                '</h6>' +
              '</div>'+
            '</div>'+
          '</div>'

        }
    }
    else {
        content = content + '<div class="col-md-4" style="margin:auto;">'+'<h2>尚未被評論</h2>'+'</div>'
    }
    content = content + '</div>' + '</div>'

}

document.getElementById('language_comments').innerHTML = content
