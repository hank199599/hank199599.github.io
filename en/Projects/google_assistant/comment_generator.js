
var search_lang = Object.keys(search_link);

for (var i = 0; i < Object.keys(comments).length; i++) {

    var content = '<div class="col-md-4 mx-auto" style="background-position: center center">' +
        '<a href="https://assistant.google.com/explore/search?q=AtesX%20Team&hl=' + search_lang[i] + '"class="btn btn-secondary btn-lg btn-lg" target="_blank"style="bottom:0px; color:#4d5257">' +
        '<span class="iconify" data-icon="mdi-google-assistant" data-inline="false">' +
        '</span>&emsp;' + search_link[search_lang[i]] + '</a></a></div>';

    var comment_list = comments[String(i + 1)]

    content = content + '<div class="row">'

    if (comment_list.length !== 0) {

        for (var j = 0; j < comment_list.length; j++) {
            content = content +
                '<div class="col-md-4">' +
                '<div class="card" style="padding: 10px 10px;">' +
                '<h4 class="card-header" style="color:' + comment_list[j].text_color + ';background: linear-gradient(60deg, ' + comment_list[j].bg_color[0] + ', ' + comment_list[j].bg_color[1] + ');">' + comment_list[j].name + '</h4>' +
                '<div class="card-body">' +
                '<h4 class="card-title">' + comment_list[j].title + '</h4>' +
                '<h6 class="card-subtitle mb-2 text-muted">' + comment_list[j].reviewer +
                '</br>' +
                '<small>' + comment_list[j].date + '</small>' +
                '</h6>' +
                '</div>' +
                '</div>' +
                '</div>'
        }
    }
    else {
        content = content + '<div class="col-md-4" style="margin:auto;">'+'<h2>No comment now</h2>'+'</div>'
    }
    content = content + '</div>'
    document.getElementById(String(i + 1)).innerHTML = content

}
