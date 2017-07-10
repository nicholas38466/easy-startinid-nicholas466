

$(".delivery-info").on("click", ".delivery-info__nav--item", function(){
    $(".delivery-info__nav--item").removeClass("item--active");
    $(this).addClass("item--active");
});

$('#delivery-info__btn--shop').on('click', function() {
	$(".delivery-info__block").removeClass("delivery-info__block--visible");
	$('.delivery-info--shop').addClass('delivery-info__block--visible');
})
$('#delivery-info__btn--newpost').on('click', function() {
	$(".delivery-info__block").removeClass("delivery-info__block--visible");
	$('.delivery-info--newpost').addClass('delivery-info__block--visible');
})
$('#delivery-info__btn--delivery-man').on('click', function() {
	$(".delivery-info__block").removeClass("delivery-info__block--visible");
	$('.delivery-info--delivery-man').addClass('delivery-info__block--visible');
})
$('#delivery-info__btn--questions').on('click', function() {
	$(".delivery-info__block").removeClass("delivery-info__block--visible");
	$('.delivery-info--questions').addClass('delivery-info__block--visible');
})


//form-question__btn--close
$('.form-question__btn--close').on('click', function() {
	$('.form-question').css('display', 'none');
	$('#btn--open-qustion-form').css('display', 'inline-flex');
})
$('#btn--open-qustion-form').on('click', function() {
	$('.form-question').css('display', 'flex');
	$('#btn--open-qustion-form').css('display', 'none');
})




	
$("#questions1").on("click", ".questions__title", function(){
    $('#questions1').toggleClass("opened");
});
$("#questions2").on("click", ".questions__title", function(){
    $('#questions2').toggleClass("opened");
});
$("#questions3").on("click", ".questions__title", function(){
    $('#questions3').toggleClass("opened");
});
$("#questions4").on("click", ".questions__title", function(){
    $('#questions4').toggleClass("opened");
});
$("#questions5").on("click", ".questions__title", function(){
    $('#questions5').toggleClass("opened");
});


//mobile

$('#delivery-info__btn-tel--shop').on('click', function() {
	$('.delivery-info--shop').toggleClass('delivery-info__block--visible');
})
$('#delivery-info__btn-tel--newpost').on('click', function() {
	$('.delivery-info--newpost').toggleClass('delivery-info__block--visible');
})
$('#delivery-info__btn-tel--delivery-man').on('click', function() {
	$('.delivery-info--delivery-man').toggleClass('delivery-info__block--visible');
})
$('#delivery-info__btn-tel--questions').on('click', function() {
	$('.delivery-info--questions').toggleClass('delivery-info__block--visible');
})


//btn--open-info-delivery
$('#btn--open-info-delivery-shop').on('click', function() {
	$('.info-delivery-shop').toggleClass('info-delivery-shop--visible');
})
$('#btn--open-info-delivery-newPost').on('click', function() {
	$('.info-delivery-newPost').toggleClass('info-delivery-shop--visible');
})
$('#btn--open-info-delivery-curier').on('click', function() {
	$('.info-delivery-curier').toggleClass('info-delivery-shop--visible');
})



