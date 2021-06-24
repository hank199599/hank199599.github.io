var language_list = Object.keys(langeuage_url_dict)

function langeage_bar_generator(language){

var bar_countant='<ul class="nav nav-tabs" data-tabs="tabs">'

for (var i=0;i<language_list.length;i++){

    document.getElementById(String(i+1)).classList.remove('active');
    bar_countant=bar_countant+ '<li class="nav-item">'+'<a class="nav-link'
    if(language_list[i] === language){
        bar_countant=bar_countant+' active '
        document.getElementById(String(i+1)).classList.add('active');
    }
    bar_countant=bar_countant+ '" href="#'+String(i+1)+'" data-toggle="tab">'+language_list[i]+'</a>'+'</li>'
}
var bar_countant=bar_countant+'</ul>'
document.getElementById('language_bar').innerHTML = bar_countant
}
