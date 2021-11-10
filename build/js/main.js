/* =====================================
Template Name: Meheraj
Author Name: Shakil Hossain
Description: Meheraj is a modern Creative Personal Portfolio Template, you can use this template for your own personal portfolio,CV,Resume purpouse.
Version:	1.1
========================================*/   
/*======================================
[Start Activation Code]
========================================
	* One Page Nav
	* Sticky JS
	* Mobile Menu
	* Social JS
	* Service hover
	* Isotop Active
	* Counter JS
	* Testimonial Carousel
	* Blog Carousel
	* Blog Slider
	* Clients Carousel
	* Wow JS
	* Parallax JS
	* Video Background
	* Side Navigation
	* Personal slider
	* Extra JS
	* Preloader JS
========================================
[End Activation Code]
========================================*/ 
(function ($) {
	"use strict";
    $(document).ready(function(){
		
		function Maheraz_Custom_JS() {
			var windowS = $(window),
				windowH = windowS.height(),
				projecthoverS = $('.portfolio-hover'),
				projecthoverH = projecthoverS.height(),
				proejectdevide = (projecthoverH / 2);
				projecthoverS.css({
				marginTop: -proejectdevide,
			});
		}; 
		
		/*====================================
		//  Onepage Nav
		======================================*/ 
		if ($.fn.onePageNav) {
			$('.mainmenu .nav').onePageNav({
				currentClass: 'active',
				scrollSpeed: 1000,
				easing: 'easeInOutQuart'
			});
		}
		
		/*====================================
		// Sticky JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 1) {
				$('#header').addClass("sticky");
			} else {
				$('#header').removeClass("sticky");
			}
		});
			
		/*====================================
		// 	Mobile Menu
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			closeOnClick:true,
		});
		
		/*====================================
		// 	Social JS
		======================================*/ 	
		$('.social-icon li a').on( "click", function(){
			$('.social').toggleClass('active');
		});
		
		
		/*====================================
		// Service Hover
		======================================*/ 
		$('.single-service').on('mouseenter', function(){
			$(' .single-service').removeClass('active');
			$(this).addClass('active');
		});
		
		/*====================================
		// Isotop Active
		======================================*/
		$(window).on('load', function() {
					
			
		

					$('.portfolio-nav ul li').on('click', function() {
                    $(".portfolio-nav ul li").removeClass("active");
                    $(this).addClass("active");

                   
                });
            
		});
		
	
		
		
		/*====================================
			Wow JS
		======================================*/		
	
		
	
		
		
		/*====================================
		// 	Side Navigation
		======================================*/ 	
		$('.side-icon a').on( "click", function(){
			$('#header').toggleClass('active');
		});
		
		
		
		
		
			

		
		/*====================================
		Extra JS
		======================================*/
		$('.btn, .arrow a, .slicknav_menu li a').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 20 
			}, 1000, 'easeInOutQuart');
			event.preventDefault();
		});
		
		
		/*====================================
			Video Background
		======================================*/
				
		
    });
	
	/*======================================
	// Preloader
	======================================*/ 	
		$(window).load(function(){
				$('.loader').fadeOut('slow', function(){
				$(this).remove();
			});
		});
})(jQuery);	