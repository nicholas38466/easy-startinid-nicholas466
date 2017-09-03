// PRODUCT TABS
function activeProduct(value1, value2) {	
	var products = document.querySelectorAll(value1);  
	var buttons = document.querySelectorAll(value2);

	function clear(arr, cls) {
		arr.forEach(function(element) {
			element.classList.remove(cls);
		});
	}

	buttons.forEach(function(element, index) {
		element.addEventListener('click', function() {
			clear(buttons, 'is-active');
			element.classList.add('is-active');
			clear(products, 'is-current');
			products[index].classList.add('is-current');
		});
	});
}

activeProduct('.js-product1-img', '.js-product1-btn');
activeProduct('.js-product2-img', '.js-product2-btn');
activeProduct('.js-product3-img', '.js-product3-btn');
activeProduct('.js-product4-img', '.js-product4-btn');
activeProduct('.js-product5-img', '.js-product5-btn');
activeProduct('.js-product6-img', '.js-product6-btn');
activeProduct('.js-product7-img', '.js-product7-btn');
activeProduct('.js-product8-img', '.js-product8-btn');
activeProduct('.js-product9-img', '.js-product9-btn');

// END PRODUCT TABS
