
var recommand_list=["Food_Decider","Brain_Game","Riddle_Game","1A2B","text_solitaire"];

function display_generator(language){

var nav_options="";
var option_buttons="";
var display_dict = langeuage_dict[language];
var display_list = Object.keys(display_dict);

for (var i=0;i < display_list.length;i++){
    var type = tab_dict[display_list[i]];
    var button_list = display_dict[display_list[i]];

    nav_options=nav_options+'<li class="nav-item">'+'<a class="nav-link'
    option_buttons=option_buttons+'<div class="tab-pane'

    if(i===0){
        nav_options=nav_options+' active '
        option_buttons=option_buttons+' active '
    } 

    nav_options=nav_options+'" href="#'+display_list[i]+'" data-toggle="tab">'+
                '<i class="material-icons">'+type.tag+'</i>'+ type.name+'</a>'+'</li>';

    option_buttons=option_buttons+'" id="'+display_list[i]+'">'

    for (var j=0;j<button_list.length;j++){
        option_buttons=option_buttons+'<button class="btn btn-primary btn-link" data-toggle="modal" data-target="#'+button_list[j]+'">'+
        '<img src="'+detail_dict[button_list[j]]['src']+'"'
        if (recommand_list.indexOf(button_list[j])!==-1){
            option_buttons=option_buttons+' data-toggle="tooltip" data-placement="top" title="Google官方推薦" data-container="body"'
        }
        option_buttons=option_buttons+'/></button>'
    }
    option_buttons=option_buttons+'</div>'
}

document.getElementById('nav_items').innerHTML = '<ul class="nav nav-tabs" data-tabs="tabs">'+nav_options+'</ul>'
document.getElementById('nav_buttons').innerHTML = option_buttons
document.getElementById('navbar-brand').innerHTML = language
}

