$(document).ready(function(){
	// слайдер
	$(".slider").owlCarousel({
		items: 1,
		loop: true, // бесконечный цикл слайдера
		nav: true
	});
	// конец слайдера
	
	// адаптивное меню
	$(".btn-nav").on("click", function() {
		var target = $(this).data("target");
		$(target).toggleClass("nav__list--open");
	});
	// конец адаптивного меню 
	
	// переключатель вкладок 
    $('.our-works__tabs-box a').click(function(e) {
        e.preventDefault();
        $('.our-works__tabs-box .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.our-works__projects-wrap').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });
    // конец переключателя вкладок
    
    // изменение стилей одного елемента при наведении на другой элемент
    $('.bars-box__link a').on('mouseover', function(){
  		$('.bars-box__link span').css('color','#8a8a8a');
  		$('.bars-box__link a').on('mouseleave', function() {
		$('.bars-box__link span').css('color','#a6a6a6');
		})
	});
	// окончание изменений стиля одного елемента при наведении на другой элемент
 
});


