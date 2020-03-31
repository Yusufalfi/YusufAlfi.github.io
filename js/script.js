
// event di saat di click 

$('.page-scroll').on('click', function(e) {
	
	//ambil fungsi a href 

	var tujuan = $(this).attr('href');

	//tangkap section About
	var elementTujuan = $(tujuan);

	//pindahkan fungsi scroll
	$('html, body').animate({
		scrollTop: elementTujuan.offset().top - 30 
	}, 1250, 'easeInOutExpo');


	e.preventDefault();

});

//about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	   $('.btn-primary').addClass('muncul');
});


$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	//logo 
	if(wScroll > $('.section-logo').offset().top - 280) {

		$('.section-logo .logo').each(function(i){
			setTimeout(function() {
				$('.section-logo .logo').eq(i).addClass('muncul');
			}, 500 * (i+1));
		});
		
	}


});


new Typed('#typed',{
  strings : [" I'am Yusuf Alfi... "],
  typeSpeed : 200,
  delaySpeed : 200,
  loop : true
});

