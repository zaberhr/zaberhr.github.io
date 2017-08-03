jQuery(document).ready(function($){
    

    $(".js-modal-btn").modalVideo();

    var homepageSlides = $(".homepage-slides");

    homepageSlides.owlCarousel({

    	items: 1,
       	loop: true,
        autoplay: true,
        nav: true,
        dots: true,
        navText: ["<i class='fa fa-long-arrow-left'></>", "<i class='fa fa-long-arrow-right'></>"],

    });

        homepageSlides.on('translate.owl.carousel', function(event) {
   		$(".welcome-area-text h4").removeClass("animated bounceIn");
   		$(".welcome-area-text h1").removeClass("animated jackInTheBox");
   		$(".welcome-area-text p").removeClass("animated fadeIn");
});

    homepageSlides.on('translated.owl.carousel', function(event) {
   		$(".welcome-area-text h4").addClass("animated bounceIn");
   		$(".welcome-area-text h1").addClass("animated jackInTheBox");
   		$(".welcome-area-text p").addClass("animated fadeIn");
});

     $(".welcome-area").YTPlayer({

      fitToBackground: true,
      videoId: 'LSmgKRx5pBo'
    });



});

