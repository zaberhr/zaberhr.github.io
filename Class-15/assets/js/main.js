jQuery(document).ready(function($){
  
    $(".profilo-filter li").on('click', function() {

    	var filterData = $(this).attr("data-filter");

    	$(".portfolio-list").isotope({
    		filter: filterData

    	});

    	$(".profilo-filter li").removeClass('active');
    	$(this).addClass('active');
    });
    
    $(".portfolio-list").isotope({
    	itemSelector: '.single-portfolio-item',
    	percentPosition: true,
    	masonry: {
    		columnWidth: '.single-portfolio-item',
    		horizontalOrder: true
    	}
    });

});

