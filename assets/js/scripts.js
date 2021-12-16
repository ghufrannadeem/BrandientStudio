$(function(){


// AOS initialized
AOS.init({
  duration: 500,
  easing: 'ease-out-quart',
  once: true
});



$('.testiSlides').slick({
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  dots: true,
  // slidesToScroll: 3
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
});


// $('#nav-icon4').click(function(){
// 	$(this).toggleClass('open');
// 	$('.header .mainNav').slideToggle();
// 	$('.overlay').toggleClass('show');
// });



// Smooth Scroll 
	// jQuery(function() {
	// 	jQuery('.smoothClick, .smoothLink > a').click(function() {
		
	// 	var dis = jQuery(this);

	// 	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	// 	  var target = jQuery(this.hash);
	// 	  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	// 	  if (target.length) {
	// 		$('html, body').animate({
	// 		  scrollTop: target.offset().top-80
	// 		}, 1000);
	// 		return false;
	// 	  }
	// 	}
	//   });
	// });



		$('#nav-icon4').click(function(){
			// $(this).toggleClass('open');
		    $('.mainMenu').addClass('active');
		});
		$('.mainMenu .popupcClose').click(function(){
		    $('.mainMenu').removeClass('active');
		});

		$('.estimateForm').click(function(){
			$('body').addClass('overflow');
			$('.popupForm').addClass('active')
		});
		$('.popupcClose, .menuBack').click(function(){
			$('body').removeClass('overflow');
			$('#servMenu').removeClass('active');
			$('.popupForm, .subMenu').removeClass('active')
		});

		$('#servMenu').click(function(){
			 $(this).toggleClass('active');
		    $('.subMenu').addClass('active');
		});


});

