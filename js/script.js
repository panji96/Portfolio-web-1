$(document).ready(function(){
	$('.fa-bars').click(function(){
		$(this).toggleClass('fa-times');
		$('.navbar').toggleClass('nav-toggle')
	});

	$(window).on('scroll load', function(){
		if($(window).scrollTop() < 25){
			$('.header').hide();
		}
		else{
			$('.header').show();
		}

		
	});

	$('.fa-bars').removeClass('fa-times');
		$('.navbar').removeClass('nav-toggle');
});

const typed = new Typed('.typing-text', {
  strings: ['Web Designer', 'Front-End Developer'],
  typeSpeed: 50,
  loop:true
});