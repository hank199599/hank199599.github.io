
function model_generator(language){

var action_list = Object.keys(detail_dict)
var modal_content = "";

    for (var i = 0; i < action_list.length; i++) {
        var temp = detail_dict[action_list[i]]

        var badge_content = "";
        var badge_list = temp["Language"];
        for (var j = 0; j < badge_list.length; j++) {
            badge_content = badge_content + '<span class="badge rounded-pill bg-light text-dark" style="margin:2px 2px">' + badge_list[j] + '</span>'
        }

        var action_title= action_name_dict[action_list[i]][language];
        if(action_title===undefined){ action_title= action_name_dict[action_list[i]]["Chinese(Taiwan)"];}

        modal_content = modal_content +
            '<div class="modal fade" id="' + action_list[i] + '" tabindex=" -1 " role=" dialog " class="col-lg-3 ">' +
            '<div class=" modal-dialog modal-dialog-centered " role=" document ">' +
            '<div class=" modal-content ">' +
            '<div class=" modal-header ">' +
            '<table>' +
            '<tr>' +
            '<td>' +
            '<img style=" width: 50px; " src="' + temp['src'] + '"/>' +
            '</td>' +
            '<td width=" 5px "></td>' +
            '<td style=" vertical-align:center; ">' +
            '<h3 class=" modal-title ">' + action_title + '</h3>' +
            badge_content +
            '</td>' +
            '</tr>' +
            '</table>' +
            '<button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close">' +
            '<i class="material-icons">clear</i>' +
            '</button>' +
            '</div>' +
            '<div class=" modal-body ">' +
            '<p>' + temp['content'] + '</p>' +
            '</div>' +
            '<div class="modal-footer justify-content-between">'+
                '<a title="Origin code on Github"' +
                'href="' + temp['Github_link'] + '" target="_blank" class="btn btn-outline-dark"><i class="fa fa-github"></i></a>'

                if(temp['Action_link']==="javascript:;"){
                    modal_content = modal_content + '<button type="button" class="btn btn-outline-secondary disabled" data-bs-dismiss="modal">Out of service</button>' 
                }
                else{
                    modal_content = modal_content + 
                        '<a title="' + action_title + ' | ' + assistant_name_dict[language]+'" '+
                        'href="' + temp['Action_link'] + '?hl='+langeuage_url_dict[language]+'"' +
                        'target="_blank" class="btn btn-outline-info" >Try on Google Assistant<i class="fas fa-arrow-right text-xs ms-1"></i></a>' 
                }
            modal_content = modal_content + '</div>'
        
        modal_content = modal_content +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>'
    }
document.getElementById('Action_details').innerHTML = modal_content
}
