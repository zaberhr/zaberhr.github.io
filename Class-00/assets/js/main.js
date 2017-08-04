jQuery(document).ready(function($){
    $(".team-carousel").owlCarousel({
       items: 3,
        margin: 30,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></>", "<i class='fa fa-angle-right'></>"],
    });
});