import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import slick from 'slick-carousel';
// import Swup from 'swup';
// import LazyLoad from "vanilla-lazyload";
import 'magnific-popup';


(function ($) {

	svg4everybody();

	$(function() {

			var styles = [
				'padding: 2px 9px',
				'background: #82B93C',
				'color: #fff',
				'display: inline-block',
				'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
				'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
				'line-height: 1.56',
				'text-align: left',
				'font-size: 16px',
				'font-weight: 400'
			].join(';');

			console.log('%c developed by igor gorlov https://webjeb.ru', styles);


			var $slider = $('.slider__list'); 

			if( $slider.length > 0 ) {
				$slider.slick({
					dots: false,
					infinite: true,
					slidesToShow: 1,
					nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg class="slider__arrow"><use xlink:href="assets/images/icon.svg#icon_arrow"></use></svg></button>',
					prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style="display: block;"><svg class="slider__arrow"><use xlink:href="assets/images/icon.svg#icon_arrow"></use></svg></button>',
					speed: 500,
					adaptiveHeight: true,
				});
			}

			var $newSlider = $('.new__list , .sales__list'); 

			if( $newSlider.length > 0 ) {
				$newSlider.slick({
					dots: false,
					infinite: true,
					slidesToShow: 3,
					arrows: true,
					speed: 500,
					nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><svg class="sales__arrow"><use xlink:href="assets/images/icon.svg#icon_arrow"></use></svg></button>',
					prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style="display: block;"><svg class="sales__arrow"><use xlink:href="assets/images/icon.svg#icon_arrow"></use></svg></button>',
					adaptiveHeight: true,
					// variableWidth: true,
					responsive: [
						{
							breakpoint: 991,
							settings: {
							  slidesToShow: 3,
							}
						},
						{
						  breakpoint: 768,
						  settings: {
							slidesToShow: 2,
						  }
						},
						{
							breakpoint: 568,
							settings: {
							  slidesToShow: 1,
							}
						  }
					]
				});
			}


			// Nav

			const $navButton = $('.nav__button');
			const $nav = $('.header__nav');


			$navButton.on('click', function () {
				$(this).toggleClass('nav__button_active');
				$nav.toggleClass('nav_active');

			});


			// Sidebar

			const $sidebarButton = $('.sidenav__title');
			const $sidebarNav = $('.sidenav__list');
			
			$sidebarButton.on('click', function () {
				$(this).toggleClass('sidenav__title_active');
				$sidebarNav.toggleClass('sidenav__list_active');
			});

			// Magnific

			// $('.slider__link').magnificPopup({
			// 	type: 'image',
			// 	gallery:{
			// 		enabled:true
			// 	}
			// });

	});


})(jQuery);
