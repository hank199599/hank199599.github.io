window.addEventListener("load",init);

var nav = document.getElementById("nav");
var isNavScrolled = false;

function init() {
    var email = document.getElementById("email");
    email.addEventListener("click",toggleEmailDialog,false);

    document.addEventListener("scroll",scrollHandler);
    scrollHandler();

    $(".nav_item").on('click', function (e) {
        
        var tag = this.getAttribute("data-page");
        // $(".nav_item").removeClass("nav_active");
        // this.classList.add("nav_active");
      
        $('html, body').stop().animate({
            'scrollTop': $(tag).offset().top
        }, 500, 'swing', function () {
            window.location.hash = tag;
        });
    });
}

function toggleEmailDialog(){
    var email_dialog = document.getElementById("email_dialog").style;

    if(email_dialog.display == "block"){
        email_dialog.display = "none";
    }
    else{
        email_dialog.display = "block";
    }
}

function scrollHandler(){
    var scrollHeight = document.documentElement.scrollTop||document.body.scrollTop;

    if(isNavScrolled && scrollHeight<=1){
        isNavScrolled = false;
        // nav.style.boxShadow = "none";
        nav.style.backgroundColor = "rgba(0,0,0,0)";
    }
    else if(!isNavScrolled && scrollHeight>0){
        isNavScrolled = true;
        // nav.style.boxShadow = "0px -1px 9px 1px #444";
        nav.style.backgroundColor = "rgba(0,0,0,    0.25)";
    }

    onScroll(scrollHeight);
}

function onScroll(scrollHeight){
    
    $(".nav_item").each(function () {
        var tag = this.getAttribute("data-page");
        
        var refElement = $(tag);
        if (refElement.position().top <= scrollHeight+1 && refElement.position().top + refElement.height() > scrollHeight) {
            $(".nav_item").removeClass("nav_active");
            this.classList.add("nav_active");
        }
        else{
            this.classList.remove("nav_active");
        }
    });
}
