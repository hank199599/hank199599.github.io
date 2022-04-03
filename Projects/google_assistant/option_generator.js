
function display_generator(language){

var nav_options="";
var option_buttons="";
var display_dict = langeuage_dict[language];
var display_list = Object.keys(display_dict);

for (var i=0;i < display_list.length;i++){
    var type = tab_dict[display_list[i]];
    var button_list = display_dict[display_list[i]];

    nav_options=nav_options+'<li class="nav-item">'+'<a class="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center'
    option_buttons=option_buttons+'<div class="tab-pane'

    if(i===0){
        nav_options=nav_options+' active '
        option_buttons=option_buttons+' active '
    } 

    nav_options=nav_options+'" data-bs-toggle="tab" href="#'+display_list[i]+'" role="tab" aria-controls="'+display_list[i]+'" aria-selected="'
   
    if(i===0){
        nav_options=nav_options+'true" >'
    } 
    else{
        nav_options=nav_options+'false" >'
    }
    
    nav_options=nav_options+'<i class="material-icons">'+type.tag+'</i> &ensp;'+ type.name+'</a>'+'</li>';

    option_buttons=option_buttons+'" id="'+display_list[i]+'">'

    for (var j=0;j<button_list.length;j++){
        option_buttons=option_buttons+'<button class="btn bg-gradient-white w-auto me-2" data-bs-toggle="modal" data-bs-target="#'+button_list[j]+'">'+
        '<img src="'+detail_dict[button_list[j]]['src']+'"/></button>'
    }
    option_buttons=option_buttons+'</div>'
}
                                                  
document.getElementById('nav_items').innerHTML = '<ul class="nav nav-pills nav-fill p-1" role="tablist">'+nav_options+'</ul>'
document.getElementById('nav_buttons').innerHTML = option_buttons
document.getElementById('navbar-brand').innerHTML = ''+language
document.getElementById('comment-brand').innerHTML = '來自'+language+'語系的使用者'
model_generator(language)
langeage_bar_generator(language)
}

