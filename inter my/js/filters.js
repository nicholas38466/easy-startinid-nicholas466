
//filter__toggle 
$(document).ready(function() {
	$('.filter__toggle--season').on('click', function() {
		$('#filter--season').toggleClass('checks--visible');
	})
	$('.filter__toggle--category').on('click', function() {
		$('#filter--category').toggleClass('checks--visible');
	})
	$('.filter__toggle--brands').on('click', function() {
		$('#filter--brands').toggleClass('checks--visible');
	})
	$('.filter__toggle--sizes').on('click', function() {
		$('#filter--sizes').toggleClass('checks--visible');
	})
	$('.filter__toggle--price').on('click', function() {
		$('#filter--price').toggleClass('checks--visible');
	})
	$('.filter__toggle--colors').on('click', function() {
		$('#filter--colors').toggleClass('checks--visible');
	})
	$('.filter__toggle--lining').on('click', function() {
		$('#filter--lining').toggleClass('checks--visible');
	})
	$('.filter__toggle--technology').on('click', function() {
		$('#filter--technology').toggleClass('checks--visible');
	})
	$('.filter__toggle--style').on('click', function() {
		$('#filter--style').toggleClass('checks--visible');
	})
});

//btn open filt
$(document).ready(function() {
	$('.filt-vis-btn').on('click', function() {
		$('.sidebar').toggleClass('sidebar-visible');
	})
	$('.filt-close-btn').on('click', function() {
		$('.sidebar').removeClass('sidebar-visible');
	})
	$('.btn-clean-filter').on('click', function() {
		$('.selected-filters').removeClass('selected-filters--visible');
		$('.filter__link').removeClass('filter__link--active');
		$('.selected-filters__item').removeClass('visible');
	})
});

	//selected-filters--visible
$(document).ready(function() {
	$('.filter__link').on('click', function() {
		$('.selected-filters').addClass('selected-filters--visible');
	})
	$('.check-color').on('click', function() {
		$('.selected-filters').addClass('selected-filters--visible');
	})
	$('.check-size').on('click', function() {
		$('.selected-filters').addClass('selected-filters--visible');
	})
});

	//filter__link--active
$(document).ready(function() {
	$(document).on('click', '.filter__link', function(){
    	$(this).toggleClass("filter__link--active");
    })
});


	//selected--filters

	//selected--news/sale
$(document).ready(function() {
	$('#filt-sale').on('click', function() {
		$('#filt-sale--act').toggleClass('visible');
	})
	$('#filt-news').on('click', function() {
		$('#filt-news--act').toggleClass('visible');
	})
	//remove
	$('#filt-sale--act').on('click', function() {
		$('#filt-sale').toggleClass('filter__link--active');
	})
	$('#filt-news--act').on('click', function() {
		$('#filt-news').toggleClass('filter__link--active');
	})
});
	//selected--season
$(document).ready(function() {
	$('#filt-zima').on('click', function() {
		$('#filt-zima--act').toggleClass('visible');
	})
	$('#filt-leto').on('click', function() {
		$('#filt-leto--act').toggleClass('visible');
	})

	//remove
	$('#filt-zima--act').on('click', function() {
		$('#filt-zima').toggleClass('filter__link--active');
	})
	$('#filt-leto--act').on('click', function() {
		$('#filt-leto').toggleClass('filter__link--active');
	})
});
	//selected--category
$(document).ready(function() {
	$('#filt-tufli').on('click', function() {
		$('#filt-tufli--act').toggleClass('visible');
	})
	$('#filt-crosi').on('click', function() {
		$('#filt-crosi--act').toggleClass('visible');
	})
	$('#filt-sliponi').on('click', function() {
		$('#filt-sliponi--act').toggleClass('visible');
	})
	$('#filt-baletki').on('click', function() {
		$('#filt-baletki--act').toggleClass('visible');
	})
	$('#filt-polubotinki').on('click', function() {
		$('#filt-polubotinki--act').toggleClass('visible');
	})
	$('#filt-sapogi').on('click', function() {
		$('#filt-sapogi--act').toggleClass('visible');
	})
	$('#filt-mokasi').on('click', function() {
		$('#filt-mokasi--act').toggleClass('visible');
	})
	$('#filt-bosonojki').on('click', function() {
		$('#filt-bosonojki--act').toggleClass('visible');
	})
	$('#filt-pinetki').on('click', function() {
		$('#filt-pinetki--act').toggleClass('visible');
	})
	$('#filt-sabo').on('click', function() {
		$('#filt-sabo--act').toggleClass('visible');
	})
	$('#filt-sandali').on('click', function() {
		$('#filt-sandali--act').toggleClass('visible');
	})
	$('#filt-vietnamki').on('click', function() {
		$('#filt-vietnamki--act').toggleClass('visible');
	})
	$('#filt-shlepki').on('click', function() {
		$('#filt-shlepki--act').toggleClass('visible');
	})
	$('#filt-tapki').on('click', function() {
		$('#filt-tapki--act').toggleClass('visible');
	})
	$('#filt-kedi').on('click', function() {
		$('#filt-kedi--act').toggleClass('visible');
	})
	$('#filt-botinki').on('click', function() {
		$('#filt-botinki--act').toggleClass('visible');
	})
	$('#filt-aerozol').on('click', function() {
		$('#filt-aerozol--act').toggleClass('visible');
	})

	//remove
	$('#filt-tufli--act').on('click', function() {
		$('#filt-tufli').toggleClass('filter__link--active');
	})
	$('#filt-crosi--act').on('click', function() {
		$('#filt-crosi').toggleClass('filter__link--active');
	})
	$('#filt-sliponi--act').on('click', function() {
		$('#filt-sliponi').toggleClass('filter__link--active');
	})
	$('#filt-baletki--act').on('click', function() {
		$('#filt-baletki').toggleClass('filter__link--active');
	})
	$('#filt-polubotinki--act').on('click', function() {
		$('#filt-polubotinki').toggleClass('filter__link--active');
	})
	$('#filt-sapogi--act').on('click', function() {
		$('#filt-sapogi').toggleClass('filter__link--active');
	})
	$('#filt-mokasi--act').on('click', function() {
		$('#filt-mokasi').toggleClass('filter__link--active');
	})
	$('#filt-bosonojki--act').on('click', function() {
		$('#filt-bosonojki').toggleClass('filter__link--active');
	})
	$('#filt-pinetki--act').on('click', function() {
		$('#filt-pinetki').toggleClass('filter__link--active');
	})
	$('#filt-sabo--act').on('click', function() {
		$('#filt-sabo').toggleClass('filter__link--active');
	})
	$('#filt-sandali--act').on('click', function() {
		$('#filt-sandali').toggleClass('filter__link--active');
	})
	$('#filt-vietnamki--act').on('click', function() {
		$('#filt-vietnamki').toggleClass('filter__link--active');
	})
	$('#filt-shlepki--act').on('click', function() {
		$('#filt-shlepki').toggleClass('filter__link--active');
	})
	$('#filt-tapki--act').on('click', function() {
		$('#filt-tapki').toggleClass('filter__link--active');
	})
	$('#filt-kedi--act').on('click', function() {
		$('#filt-kedi').toggleClass('filter__link--active');
	})
	$('#filt-botinki--act').on('click', function() {
		$('#filt-botinki').toggleClass('filter__link--active');
	})
	$('#filt-aerozol--act').on('click', function() {
		$('#filt-aerozol').toggleClass('filter__link--active');
	})
});

	//selected--brand
$(document).ready(function() {
	$('#filt-Braska').on('click', function() {
		$('#filt-Braska--act').toggleClass('visible');
	})
	$('#filt-Ecco').on('click', function() {
		$('#filt-Ecco--act').toggleClass('visible');
	})
	$('#filt-Geox').on('click', function() {
		$('#filt-Geox--act').toggleClass('visible');
	})
	$('#filt-Clarks').on('click', function() {
		$('#filt-Clarks--act').toggleClass('visible');
	})
	$('#filt-Bronx').on('click', function() {
		$('#filt-Bronx--act').toggleClass('visible');
	})
	$('#filt-Tommy').on('click', function() {
		$('#filt-Tommy--act').toggleClass('visible');
	})
	$('#filt-all-brands').on('click', function() {
		$('#filt-all-brands--act').toggleClass('visible');
	})

	//remove
	$('#filt-Braska--act').on('click', function() {
		$('#filt-Braska').toggleClass('filter__link--active');
	})
	$('#filt-Ecco--act').on('click', function() {
		$('#filt-Ecco').toggleClass('filter__link--active');
	})
	$('#filt-Geox--act').on('click', function() {
		$('#filt-Geox').toggleClass('filter__link--active');
	})
	$('#filt-Clarks--act').on('click', function() {
		$('#filt-Clarks').toggleClass('filter__link--active');
	})
	$('#filt-Bronx--act').on('click', function() {
		$('#filt-Bronx').toggleClass('filter__link--active');
	})
	$('#filt-Tommy--act').on('click', function() {
		$('#filt-Tommy').toggleClass('filter__link--active');
	})
	$('#filt-all-brands--act').on('click', function() {
		$('#filt-all-brands').toggleClass('filter__link--active');
	})
});

	//selected--sizes
$(document).ready(function(){
	$('#size-n-35').on('click', function(){
		$('#size-n-35--act').toggleClass('visible');
	})
	$('#size-n-35-5').on('click', function(){
		$('#size-n-35-5--act').toggleClass('visible');
	})
	$('#size-n-36').on('click', function(){
		$('#size-n-36--act').toggleClass('visible');
	})
	$('#size-n-36-5').on('click', function(){
		$('#size-n-36-5--act').toggleClass('visible');
	})
	$('#size-n-37').on('click', function(){
		$('#size-n-37--act').toggleClass('visible');
	})
	$('#size-n-37-5').on('click', function(){
		$('#size-n-37-5--act').toggleClass('visible');
	})
	$('#size-n-38').on('click', function(){
		$('#size-n-38--act').toggleClass('visible');
	})
	$('#size-n-38-5').on('click', function(){
		$('#size-n-38-5--act').toggleClass('visible');
	})
	$('#size-n-39').on('click', function(){
		$('#size-n-39--act').toggleClass('visible');
	})
	$('#size-n-39-5').on('click', function(){
		$('#size-n-39-5--act').toggleClass('visible');
	})
	$('#size-n-40').on('click', function(){
		$('#size-n-40--act').toggleClass('visible');
	})
	$('#size-n-40-5').on('click', function(){
		$('#size-n-40-5--act').toggleClass('visible');
	})
	$('#size-n-41').on('click', function(){
		$('#size-n-41--act').toggleClass('visible');
	})
	$('#size-n-41-5').on('click', function(){
		$('#size-n-41-5--act').toggleClass('visible');
	})
	$('#size-n-42').on('click', function(){
		$('#size-n-42--act').toggleClass('visible');
	})
	$('#size-n-42-5').on('click', function(){
		$('#size-n-42-5--act').toggleClass('visible');
	})
	$('#all-sizes').on('click', function(){
		$('#all-sizes--act').toggleClass('visible');
	})
});

	//selected--price
$(document).ready(function() {
	$('#filt-pre1000').on('click', function() {
		$('#filt-pre1000--act').toggleClass('visible');
	})
	$('#filt-aper1000').on('click', function() {
		$('#filt-aper1000--act').toggleClass('visible');
	})
	$('#filt-aper2000').on('click', function() {
		$('#filt-aper2000--act').toggleClass('visible');
	})

	//remove
	$('#filt-pre1000--act').on('click', function() {
		$('#filt-pre1000').toggleClass('filter__link--active');
	})
	$('#filt-aper1000--act').on('click', function() {
		$('#filt-aper1000').toggleClass('filter__link--active');
	})
	$('#filt-aper2000--act').on('click', function() {
		$('#filt-aper2000').toggleClass('filter__link--active');
	})
});

	//selected--colors
$(document).ready(function() {
	$('#c-black').on('click', function() {
		$('#c-black--act').toggleClass('visible');
	})
	$('#c-bone').on('click', function() {
		$('#c-bone--act').toggleClass('visible');
	})
	$('#c-copper').on('click', function() {
		$('#c-copper--act').toggleClass('visible');
	})
	$('#c-gray').on('click', function() {
		$('#c-gray--act').toggleClass('visible');
	})
	$('#c-blue').on('click', function() {
		$('#c-blue--act').toggleClass('visible');
	})
	$('#c-white-blue').on('click', function() {
		$('#c-white-blue--ac').toggleClass('visible');
	})
	$('#c-lite-blue').on('click', function() {
		$('#c-lite-blue--act').toggleClass('visible');
	})
	$('#c-green').on('click', function() {
		$('#c-green--act').toggleClass('visible');
	})
	$('#c-dark-green').on('click', function() {
		$('#c-dark-green--act').toggleClass('visible');
	})
	$('#c-yellow').on('click', function() {
		$('#c-yellow--act').toggleClass('visible');
	})
	$('#c-pink').on('click', function() {
		$('#c-pink--act').toggleClass('visible');
	})
	$('#c-red').on('click', function() {
		$('#c-red--act').toggleClass('visible');
	})
	$('#c-rose').on('click', function() {
		$('#c-rose--act').toggleClass('visible');
	})
	$('#c-orange').on('click', function() {
		$('#c-orange--act').toggleClass('visible');
	})
	$('#c-white').on('click', function() {
		$('#c-white--act').toggleClass('visible');
	})
	$('#c-all').on('click', function() {
		$('#c-all--act').toggleClass('visible');
	})
});

	//selected--lining
$(document).ready(function() {
	$('#filt-lin-none').on('click', function() {
		$('#filt-lin-none--act').toggleClass('visible');
	})
	$('#filt-lin-fake-koja').on('click', function() {
		$('#filt-lin-fake-koja--act').toggleClass('visible');
	})
	$('#filt-lin-fake-sherst').on('click', function() {
		$('#filt-lin-fake-sherst--act').toggleClass('visible');
	})
	$('#filt-lin-fake-meh').on('click', function() {
		$('#filt-lin-fake-meh--act').toggleClass('visible');
	})
	$('#filt-lin-koja').on('click', function() {
		$('#filt-lin-koja--act').toggleClass('visible');
	})
	$('#filt-lin-koja-ecokoja').on('click', function() {
		$('#filt-lin-koja-ecokoja--act').toggleClass('visible');
	})
	$('#filt-lin-koja-textil').on('click', function() {
		$('#filt-lin-koja-textil--act').toggleClass('visible');
	})
	$('#filt-lin-microfibra').on('click', function() {
		$('#filt-lin-microfibra--act').toggleClass('visible');
	})
	$('#filt-lin-textil').on('click', function() {
		$('#filt-lin-textil--act').toggleClass('visible');
	})
	$('#filt-lin-ecokoja').on('click', function() {
		$('#filt-lin-ecokoja--act').toggleClass('visible');
	})
	$('#filt-lin-flis').on('click', function() {
		$('#filt-lin-flis--act').toggleClass('visible');
	})
	$('#filt-lin-sherst').on('click', function() {
		$('#filt-lin-sherst--act').toggleClass('visible');
	})

	//remove
	$('#filt-lin-none--act').on('click', function() {
		$('#filt-lin-none').toggleClass('filter__link--active');
	})
	$('#filt-lin-fake-koja--act').on('click', function() {
		$('#filt-lin-fake-koja').toggleClass('filter__link--active');
	})
	$('#filt-lin-fake-sherst--act').on('click', function() {
		$('#filt-lin-fake-sherst').toggleClass('filter__link--active');
	})
	$('#filt-lin-fake-meh--act').on('click', function() {
		$('#filt-lin-fake-meh').toggleClass('filter__link--active');
	})
	$('#filt-lin-koja--act').on('click', function() {
		$('#filt-lin-koja').toggleClass('filter__link--active');
	})
	$('#filt-lin-koja-ecokoja--act').on('click', function() {
		$('#filt-lin-koja-ecokoja').toggleClass('filter__link--active');
	})
	$('#filt-lin-koja-textil--act').on('click', function() {
		$('#filt-lin-koja-textil').toggleClass('filter__link--active');
	})
	$('#filt-lin-microfibra--act').on('click', function() {
		$('#filt-lin-microfibra').toggleClass('filter__link--active');
	})
	$('#filt-lin-textil--act').on('click', function() {
		$('#filt-lin-textil').toggleClass('filter__link--active');
	})
	$('#filt-lin-ecokoja--act').on('click', function() {
		$('#filt-lin-ecokoja').toggleClass('filter__link--active');
	})
	$('#filt-lin-flis--act').on('click', function() {
		$('#filt-lin-flis').toggleClass('filter__link--active');
	})
	$('#filt-lin-sherst--act').on('click', function() {
		$('#filt-lin-sherst').toggleClass('filter__link--active');
	})
});

	//selected--technology
$(document).ready(function() {
	$('#filt-Anti-fatigue').on('click', function() {
		$('#filt-Anti-fatigue--act').toggleClass('visible');
	})
	$('#filt-Anti-shock').on('click', function() {
		$('#filt-Anti-shock--act').toggleClass('visible');
	})
	$('#filt-Cusionplus').on('click', function() {
		$('#filt-Cusionplus--act').toggleClass('visible');
	})
	$('#filt-Cusionsoft').on('click', function() {
		$('#filt-Cusionsoft--act').toggleClass('visible');
	})
	$('#filt-Dual').on('click', function() {
		$('#filt-Dual--act').toggleClass('visible');
	})
	$('#filt-Flex').on('click', function() {
		$('#filt-Flex--act').toggleClass('visible');
	})
	$('#filt-Flexsole').on('click', function() {
		$('#filt-Flexsole--act').toggleClass('visible');
	})
	$('#filt-Geoxamphiblox').on('click', function() {
		$('#filt-Geoxamphiblox--act').toggleClass('visible');
	})
	$('#filt-Golmpulse').on('click', function() {
		$('#filt-Golmpulse--act').toggleClass('visible');
	})
	$('#filt-Gsr').on('click', function() {
		$('#filt-Gsr--act').toggleClass('visible');
	})
	$('#filt-Gogamattechnology').on('click', function() {
		$('#filt-Gogamattechnology--act').toggleClass('visible');
	})
	$('#filt-Gore-tex').on('click', function() {
		$('#filt-Gore-tex--act').toggleClass('visible');
	})
	$('#filt-Greenrubber').on('click', function() {
		$('#filt-Greenrubber--act').toggleClass('visible');
	})
	$('#filt-Hydromax').on('click', function() {
		$('#filt-Hydromax--act').toggleClass('visible');
	})
	$('#filt-Helcor').on('click', function() {
		$('#filt-Helcor--act').toggleClass('visible');
	})
	$('#filt-Memoryfoam').on('click', function() {
		$('#filt-Memoryfoam--act').toggleClass('visible');
	})
	$('#filt-Otholite').on('click', function() {
		$('#filt-Otholite--act').toggleClass('visible');
	})
	$('#filt-Primaloft').on('click', function() {
		$('#filt-Primaloft--act').toggleClass('visible');
	})
	$('#filt-Receptor').on('click', function() {
		$('#filt-Receptor--act').toggleClass('visible');
	})
	$('#filt-Resalyte').on('click', function() {
		$('#filt-Resalyte--act').toggleClass('visible');
	})
	$('#filt-Rlekertex').on('click', function() {
		$('#filt-Rlekertex--act').toggleClass('visible');
	})
	$('#filt-Rleker-tex').on('click', function() {
		$('#filt-Rleker-tex--act').toggleClass('visible');
	})
	$('#filt-Sensor-flex').on('click', function() {
		$('#filt-Sensor-flex--act').toggleClass('visible');
	})
	$('#filt-Sensorflex').on('click', function() {
		$('#filt-Sensorflex--act').toggleClass('visible');
	})
	$('#filt-Softwear').on('click', function() {
		$('#filt-Softwear--act').toggleClass('visible');
	})
	$('#filt-Stretch-fit').on('click', function() {
		$('#filt-Stretch-fit--act').toggleClass('visible');
	})
	$('#filt-Timberdry').on('click', function() {
		$('#filt-Timberdry--act').toggleClass('visible');
	})
	$('#filt-TouchIt').on('click', function() {
		$('#filt-TouchIt--act').toggleClass('visible');
	})
	$('#filt-Tractlonlug').on('click', function() {
		$('#filt-Tractlonlug--act').toggleClass('visible');
	})
	$('#filt-Trigenic').on('click', function() {
		$('#filt-Trigenic--act').toggleClass('visible');
	})
	$('#filt-Warmlining').on('click', function() {
		$('#filt-Warmlining--act').toggleClass('visible');
	})
	$('#filt-Waterproof').on('click', function() {
		$('#filt-Waterproof--act').toggleClass('visible');
	})

	//remove
	$('#filt-Anti-fatigue--act').on('click', function() {
		$('#filt-Anti-fatigue').toggleClass('filter__link--active');
	})
	$('#filt-Anti-shock--act').on('click', function() {
		$('#filt-Anti-shock').toggleClass('filter__link--active');
	})
	$('#filt-Cusionplus--act').on('click', function() {
		$('#filt-Cusionplus').toggleClass('filter__link--active');
	})
	$('#filt-Cusionsoft--act').on('click', function() {
		$('#filt-Cusionsoft').toggleClass('filter__link--active');
	})
	$('#filt-Dual--act').on('click', function() {
		$('#filt-Dual').toggleClass('filter__link--active');
	})
	$('#filt-Flex--act').on('click', function() {
		$('#filt-Flex').toggleClass('filter__link--active');
	})
	$('#filt-Flexsole--act').on('click', function() {
		$('#filt-Flexsole').toggleClass('filter__link--active');
	})
	$('#filt-Geoxamphiblox--act').on('click', function() {
		$('#filt-Geoxamphiblox').toggleClass('filter__link--active');
	})
	$('#filt-Golmpulse--act').on('click', function() {
		$('#filt-Golmpulse').toggleClass('filter__link--active');
	})
	$('#filt-Gsr--act').on('click', function() {
		$('#filt-Gsr').toggleClass('filter__link--active');
	})
	$('#filt-Gogamattechnology--act').on('click', function() {
		$('#filt-Gogamattechnology').toggleClass('filter__link--active');
	})
	$('#filt-Gore-tex--act').on('click', function() {
		$('#filt-Gore-tex').toggleClass('filter__link--active');
	})
	$('#filt-Greenrubber--act').on('click', function() {
		$('#filt-Greenrubber').toggleClass('filter__link--active');
	})
	$('#filt-Hydromax--act').on('click', function() {
		$('#filt-Hydromax').toggleClass('filter__link--active');
	})
	$('#filt-Helcor--act').on('click', function() {
		$('#filt-Helcor').toggleClass('filter__link--active');
	})
	$('#filt-Memoryfoam--act').on('click', function() {
		$('#filt-Memoryfoam').toggleClass('filter__link--active');
	})
	$('#filt-Otholite--act').on('click', function() {
		$('#filt-Otholite').toggleClass('filter__link--active');
	})
	$('#filt-Primaloft--act').on('click', function() {
		$('#filt-Primaloft').toggleClass('filter__link--active');
	})
	$('#filt-Receptor--act').on('click', function() {
		$('#filt-Receptor').toggleClass('filter__link--active');
	})
	$('#filt-Resalyte--act').on('click', function() {
		$('#filt-Resalyte').toggleClass('filter__link--active');
	})
	$('#filt-Rlekertex--act').on('click', function() {
		$('#filt-Rlekertex').toggleClass('filter__link--active');
	})
	$('#filt-Rleker-tex--act').on('click', function() {
		$('#filt-Rleker-tex').toggleClass('filter__link--active');
	})
	$('#filt-Sensor-flex--act').on('click', function() {
		$('#filt-Sensor-flex').toggleClass('filter__link--active');
	})
	$('#filt-Sensorflex--act').on('click', function() {
		$('#filt-Sensorflex').toggleClass('filter__link--active');
	})
	$('#filt-Softwear--act').on('click', function() {
		$('#filt-Softwear').toggleClass('filter__link--active');
	})
	$('#filt-Stretch-fit--act').on('click', function() {
		$('#filt-Stretch-fit').toggleClass('filter__link--active');
	})
	$('#filt-Timberdry--act').on('click', function() {
		$('#filt-Timberdry').toggleClass('filter__link--active');
	})
	$('#filt-TouchIt--act').on('click', function() {
		$('#filt-TouchIt').toggleClass('filter__link--active');
	})
	$('#filt-Tractlonlug--act').on('click', function() {
		$('#filt-Tractlonlug').toggleClass('filter__link--active');
	})
	$('#filt-Trigenic--act').on('click', function() {
		$('#filt-Trigenic').toggleClass('filter__link--active');
	})
	$('#filt-Warmlining--act').on('click', function() {
		$('#filt-Warmlining').toggleClass('filter__link--active');
	})
	$('#filt-Waterproof--act').on('click', function() {
		$('#filt-Waterproof').toggleClass('filter__link--active');
	})
});

	//selected--style
$(document).ready(function() {
	$('#filt-style-active').on('click', function() {
		$('#filt-style-active--act').toggleClass('visible');
	})
	$('#filt-style-classical').on('click', function() {
		$('#filt-style-classical--act').toggleClass('visible');
	})
	$('#filt-style-fashion').on('click', function() {
		$('#filt-style-fashion--act').toggleClass('visible');
	})
	$('#filt-style-casual').on('click', function() {
		$('#filt-style-casual--act').toggleClass('visible');
	})
	$('#filt-style-sport').on('click', function() {
		$('#filt-style-sport--act').toggleClass('visible');
	})
	$('#filt-style-unknow').on('click', function() {
		$('#filt-style-unknow--act').toggleClass('visible');
	})
	$('#filt-style-unique').on('click', function() {
		$('#filt-style-unique--act').toggleClass('visible');
	})
	$('#filt-style-formal').on('click', function() {
		$('#filt-style-formal--act').toggleClass('visible');
	})

	//remove
	$('#filt-style-active--act').on('click', function() {
		$('#filt-style-active').toggleClass('filter__link--active');
	})
	$('#filt-style-classical--act').on('click', function() {
		$('#filt-style-classical').toggleClass('filter__link--active');
	})
	$('#filt-style-fashion--act').on('click', function() {
		$('#filt-style-fashion').toggleClass('filter__link--active');
	})
	$('#filt-style-casual--act').on('click', function() {
		$('#filt-style-casual').toggleClass('filter__link--active');
	})
	$('#filt-style-sport--act').on('click', function() {
		$('#filt-style-sport').toggleClass('filter__link--active');
	})
	$('#filt-style-unknow--act').on('click', function() {
		$('#filt-style-unknow').toggleClass('filter__link--active');
	})
	$('#filt-style-unique--act').on('click', function() {
		$('#filt-style-unique').toggleClass('filter__link--active');
	})
	$('#filt-style-formal--act').on('click', function() {
		$('#filt-style-formal').toggleClass('filter__link--active');
	})
});


	//resep all filter
$(document).ready(function() {
	$('.btn--reset-all-filter').on('click', function() {
		$('.selected-filters').removeClass('selected-filters--visible');
		$('.filter__link').removeClass('filter__link--active');
		$('.selected-filters__item').removeClass('visible');
	})
});

//mobile sort-vis-btn
$(document).ready(function() {
	$('.sort-vis-btn').on('click', function() {
		$('.mobile-sort-filters').toggleClass('mobile-sort-filters--visible');
	})
	$('.sort-hide-btn').on('click', function() {
		$('.mobile-sort-filters').removeClass('mobile-sort-filters--visible');
	})
});

//reset one select filter
$(document).ready(function() {
	$('.selected-filters__item').on('click', function() {
		$(this).removeClass('visible');
	})
});

$(document).ready(function() {
	$('.btn--look-more-info').on('click', function() {
		$('#home-text--more').toggleClass('visible');
	})
});

// home text dropdown
$(document).ready(function() {
	$('.user-link--profile').on('click', function() {
		$('.login-modal').toggleClass('visible');
	})
});

//search__info--visible
$(document).ready(function() {
	$('#title-search-input').on('focus', function() {
		$('.search__info').toggleClass('search__info--visible');
	})
	
});
