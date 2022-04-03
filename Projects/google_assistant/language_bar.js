var language_list = Object.keys(langeuage_url_dict)

function langeage_bar_generator(language){

var bar_countant='<ul class="nav nav-pills nav-fill p-1" role="tablist">'

for (var i=0;i<language_list.length;i++){

    document.getElementById(language_list[i]).classList.remove('active');
    bar_countant=bar_countant+ '<li class="nav-item">'+'<a class="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center'
    if(language_list[i] === language){
        bar_countant=bar_countant+' active '
        document.getElementById(language_list[i]).classList.add('active');
    }
    bar_countant=bar_countant+ '" href="#'+language_list[i]+'" aria-controls="'+language_list[i]+'" role="tab" aria-controls="profile" aria-selected="false">'+language_list[i]+'</a>'+'</li>'
}
var bar_countant=bar_countant+'</ul>'
document.getElementById('language_bar').innerHTML = bar_countant
}
