jQuery(document).ready(function($){
    $(".homepage-slides").owlCarousel({
       items: 1,
       loop: true,
        autoplay: true,
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></>", "<i class='fa fa-long-arrow-right'></>"],
    });

    $(".js-modal-btn").modalVideo({channel:'vimeo'});
});

