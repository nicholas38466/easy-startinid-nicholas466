var products = document.querySelectorAll('.js-product-img');  //записываем в массив все блоки с картинками
var buttons = document.querySelectorAll('.js-product-btn');  // записываем в массив все кнопки переключающие картинки

function clear(arr, cls) {       // универсальная функция, которая в определенном массиве удаляет определенный класс
	arr.forEach(function(element) { // цикл, пробегается по всем элементам массива и удаляет определенный класс 
		element.classList.remove(cls);
	});
}

buttons.forEach(function(element, index) {  // цикл, пробегается по всем кнопкам
	element.addEventListener('click', function() { // событие нажатия на каждую кнопку
		clear(buttons, 'is-active');  // наша универсальная функция, удаляет класс is-active со всех кнопок
		element.classList.add('is-active'); // добавляем класс is-active текущей кнопке
		clear(products, 'is-current'); // наша универсальня функция, удаляет класс is-current со всех блоков с картинками
		products[index].classList.add('is-current'); // добавляет класс is-current текущему блоку с картинкой, используя index кнопки (последовательность имеет значение!!!) Удачи!)
	});
});