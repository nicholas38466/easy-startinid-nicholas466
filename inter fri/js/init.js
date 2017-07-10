// Окно для входа и залогиненого юзера
$('.u-1 > a').click(function(){
	$('.bl-reg-log').fadeToggle('400');
})

// войти через меил
$('.mail-link').click(function() {
	$('.bl-reg-log-choose').fadeOut(0);
	$('.bl-reg-log-email').fadeIn(400);
});

// вернуться на основной блок входа
$('.back-log').click(function() {
	$(this).parent().fadeOut(0);
	$('.bl-reg-log-choose').fadeIn(400);
});

// забыли пароль
$('.one-log-forg a').click(function() {
	$('.bl-reg-log-email').fadeOut(0);
	$('.bl-reg-log-pass').fadeIn(400);
});

// закрыть окно
$('.bl-reg-close').click(function() {
	$('.bl-reg-log').fadeOut(300);
	setTimeout(function() {
      $('.bl-reg-log-choose').fadeIn(0);
			$('.bl-reg-log-email, .bl-reg-log-pass').fadeOut(0);
  }, 300);
	
});
// Конец Окно для входа и залогиненого юзера

// поиск
$('.search-inp').click(function(e) {
	$('.head-search').addClass("focus");
	$('.search-res, .bg-search').fadeIn(300);
	e.stopPropagation();
});

$(document).click(function(e) {
	if (!$(e.target).is('.head-search, .head-search *')) {
		$('.search-res, .bg-search').fadeOut(0);
		$('.head-search').removeClass("focus");
	}
});
// Конец поиск

// Слайдер на главной
$(document).ready(function(){
  $('.home-slider-in').bxSlider({
		pagerCustom: '.home-slider-thumb-in, .mobile-page-in'  
	});
});
// Конец Слайдер на главной

// Карусель пейджеров для слайдера на главной

$(document).ready(function(){
	if ($(window).width() < 1600 & $(window).width() > 768 ) {

		

	}
	else if ($(window).width() < 768) {
			$('.mobile-page-in').bxSlider({
				slideWidth: 45,
				minSlides: 1,
				maxSlides: 6,
				slideMargin: 15,
				pager: false,
				infiniteLoop: false,
			});
	}
	else {
		// анимация для пейджеров
		$('.home-slider-thumb-in').lavalamp({
		    easing: 'ease',
		    enableHover: false,
		    setOnClick:true,
		    duration: 300,
		    //autoUpdate: true
		});
		// Конец анимация для пейджеров
	}
  
});
// Конец Карусель пейджеров для слайдера на главной



// Карусель брендов
$(document).ready(function(){
  $('.carus-brend-in').bxSlider({
    slideWidth: 230,
    minSlides: 1,
    maxSlides: 6,
    slideMargin: 30,
		pager: false,
		infiniteLoop: false,
  });
});
// Конец Карусель брендов

// карусель товара

$('.one-item-thumb-in').each(function (idx) {
   var carouselId = "carousel" + idx++;
   var pageId = "page" + idx++;
   $(this).attr('id', carouselId);
   $(this).parents('.one-item-in').find('.one-item-choose').attr('id', pageId);
});

var sliderSets = $('.one-item-thumb');

function initSliders(targetSlider, targetPager) {
  $(targetSlider).bxSlider({
    pagerCustom: targetPager,
    mode: 'fade',
  });
}

$(sliderSets).each(function(idx) {
  var targetSlider = "#" + $(this).children('.one-item-thumb-in').attr('id');
  var targetPager = "#" + $(this).parents('.one-item-in').find('.one-item-choose').attr('id');
  
  initSliders(targetSlider, targetPager);
});

// Конец карусель товара

// показать больше о компании
$('.about-more').click(function() {
	$(this).fadeOut(300);
	$('.about-in').addClass('open')
});


// Скрол
window.onload = function () {
  [].forEach.call(document.querySelectorAll('.news-card-in'), function (el) {
    Ps.initialize(el);
  });
};

// Открытие закрытие фильтра
$('.com_show').click(function() {
	$(this).toggleClass('open');
	$(this).parents('.filt').find('.comments_container .panel-body').slideToggle(500);;
});

// стилизация сеоекта
(function($) {
$(function() {

  $('select').styler();

});
})(jQuery);

// Рады видеть в магазинах

$('.our-shop a').click(function() {
	$(this).addClass('open');
	$('.our-shop-wrap').fadeIn(300);
	initMap()
});

$('.our-shop-left li').click(function() {
	$('.our-shop-left li').removeClass()
	$('.shop-cont').fadeOut(0);
	$(this).addClass('open');
	$(this).find('.shop-cont').fadeIn(300);
});

// карта магазинов
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

// Показать фильтр для планшета-моб
$('.filt-bt, .filt-close-btn').click(function() {
	$('.filt-ins').fadeToggle(300);
});

// 
$('.sort-bt-mob a, .sort-close').click(function() {
	$('.filt-sort-mob').fadeToggle(300);
});
