//slider
$(document).ready(function() {
	$('.slider').slick({
		infinite: true,
		autoplay: true,
		dots: true,
		arrows: false,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1
	});
})

//scroll
$(document).ready(function(){
    $('#link-to-about-us').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
	    return false;
    });
    $('#link-to-service').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
	    return false;
    });
});

//mobile btn
$(document).ready(function(){
	$('.mobile-menu-btn').on('click', function(){
		$('.main-menu').addClass('visible');
	});
	$('.btn-close-menu').on('click', function(){
		$('.main-menu').removeClass('visible');
	});
})