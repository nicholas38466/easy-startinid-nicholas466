$(document).ready(function() {
	$('.nav-toggle').on('click', function() {
		$('#nav-main').toggleClass('visible');
		$('.nav-toggle').toggleClass('visible');
	})

});