

let x;
$(window).on('scroll', function() {
	x = $(window).scrollTop();
	$('.test').css('background-size', 100 + parseInt(x / 10) + '% ');
}); // обозначаем перееменную, обращаемся к вьюпорту
//scrollTop() -  величина в позиции 0, когда эллемент в начальной позиции
//обращаемся ко всем дивам и работаем со всеми его background-size
// parseInt - работа с целым значением


let y;
$(window).on('scroll', function() {
	y = $(window).scrollTop();
	$('.kubik').css('left', 0 + parseInt(y-2) + '%');
});
