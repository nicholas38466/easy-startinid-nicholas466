
// MAIN SLIDER

var btns = document.querySelectorAll('.js-btn');
var slide = document.querySelector('.js-slide');
var btnL = document.querySelector('.js-l');
var btnR = document.querySelector('.js-r');

function clear(btns){
	btns.forEach(function(element){
		if(element.classList.contains('is-active')){
			element.classList.remove('is-active');
		}
	})
}

var current = 0;

var start = setInterval(function(){
	current++;
	if(current < btns.length){
		clear(btns);
		btns[current].classList.add('is-active');
		var w = slide.offsetWidth;
		slide.style.marginLeft = -w*current+'px';
	} else {
		current = 0;
		clear(btns);
		btns[current].classList.add('is-active');
		var w = slide.offsetWidth;
		slide.style.marginLeft = -w*current+'px';
	}
},4000)  //auto infinity slider



btns.forEach(function(element,index){
	element.addEventListener('click', function(){
		current = index;
		clear(btns);
		this.classList.add('is-active');
		var w = slide.offsetWidth;
		slide.style.marginLeft = -w*current+'px';
		console.log(w);
		clearInterval(start);
	});
})


//left-right  btns
btnR.addEventListener('click',function(){
	current++;
	if(current < btns.length){
		clear(btns);
		btns[current].classList.add('is-active');
		var w = slide.offsetWidth;
		slide.style.marginLeft = -w*current+'px';
	} else {
		current = 0;
		clear(btns);
		btns[current].classList.add('is-active');
		var w = slide.offsetWidth;
		slide.style.marginLeft = -w*current+'px';
	}
})

btnL.addEventListener('click',function(){
	current--;
	if(current >=0){
		clear(btns);
		btns[current].classList.add('is-active');
		var w = slide.offsetWidth;
		slide.style.marginLeft = -w*current+'px';
	} else {
		current = btns.length -1;
		clear(btns);
		btns[current].classList.add('is-active');
		var w = slide.offsetWidth;
		slide.style.marginLeft = -w*current+'px';
	}
})
//END left-right  btns

// END MAIN SLIDER


