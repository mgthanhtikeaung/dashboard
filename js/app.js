$(".show-sidebar-btn").click(function () {
    $(".sidebar").animate({marginLeft:0});
});

$(".hide-sidebar-btn").click(function () {
    $(".sidebar").animate({marginLeft:"-100%"});
});
function go(url){
    setTimeout(function(){
        location.href = `${url}`
    },500)
}
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

$(".full-screen-btn").click(function(){
    let current = $(this).closest(".card");
    current.toggleClass("full-screen-card");
    if(current.hasClass("full-screen-card")){
        $(this).html(`<i class="fas fa-compress-alt"></i>`);
    }
    else{
        $(this).html(`<i class="fas fa-expand-alt"></i>`);
    }
});

let screenHeight = $(window).height();
let currentMenuHeight = $(".nav-menu .active").offset().top;

if(currentMenuHeight < screenHeight*0.8){
    $('.sidebar').animate({
        scrollTop:currentMenuHeight 
    },1000)
}