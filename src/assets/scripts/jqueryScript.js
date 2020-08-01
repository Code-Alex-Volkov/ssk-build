$(document).ready(function () {
	'use strict';

	/* Residential Complexes Slider*/
	if ($('.residential_complexes_slider').length) {
		$('.residential_complexes_slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: $('.slider_navigation'),
			prevArrow: "<div class=\"left\"></div>",
			nextArrow: "<div class=\"right\"></div>",
			responsive: [{
					breakpoint: 1250,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 993,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}, 
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				}
			]
		});
	}

	/* Slider Full Slider*/
	if ($('.slider_full').length) {
		$('.slider_full').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: true,
			responsive: [{
					breakpoint: 993,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false
					}
				},
				{
					breakpoint: 577,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows: false
					}
				}
			]
		});
	}

	/* Construction Diary Slider*/
	if ($('.diary_slider').length) {
		$('.diary_slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: $('.diary_navigation'),
			prevArrow: "<div class=\"left\"></div>",
			nextArrow: "<div class=\"right\"></div>",
			responsive: [{
					breakpoint: 993,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 577,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows: false
					}
				}
			]
		});
	}

	/* Infrastructure Slider*/
	if ($('.infrastructure_slider').length) {
		$('.infrastructure_slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: $('.infrastructure_navigation'),
			prevArrow: "<div class=\"left\"></div>",
			nextArrow: "<div class=\"right\"></div>",
			responsive: [{
					breakpoint: 1250,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 993,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: true
					}
				}
			]
		});
	}

	/* News Slider*/
	if ($('.container_news').length) {
		$('.container_news').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [{
					breakpoint: 993,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						dots: true
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows: false
					}
				}
			]
		});
	}

	/* Adv Slider*/
	if ($('.adv_slider').length) {
		$('.adv_slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			appendArrows: $('.adv_navigation'),
			prevArrow: "<div class=\"left\"></div>",
			nextArrow: "<div class=\"right\"></div>",
			responsive: [{
					breakpoint: 993,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 577,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						arrows: false
					}
				}
			]
		});
	}

	/* Popup */
	$('.popup-btn').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeIn(400);
		$('body').addClass('over_hidden');
	});
	$('.popup-close').on('click', function (event) {
		event.preventDefault();
		$('.popup').fadeOut(400);
		$('body').removeClass('over_hidden');
	});

	/* Popup Politic */
	$('.popup-btn-politic').on('click', function (event) {
		event.preventDefault();
		$('.popup-politic').fadeIn(400);
		$('body').addClass('over_hidden');
	});
	$('.popup-close-politic').on('click', function (event) {
		event.preventDefault();
		$('.popup-politic').fadeOut(400);
		$('body').removeClass('over_hidden');
	});

	/* Popup Ipoteca */
	$('.popup-btn-ipt').on('click', function (event) {
		event.preventDefault();
		$('.popup_ipt').fadeIn(400);
		$('body').addClass('over_hidden');
	});
	$('.popup-close').on('click', function (event) {
		event.preventDefault();
		$('.popup_ipt').fadeOut(400);
		$('body').removeClass('over_hidden');
	});

	/* Popup Rasrochca */
	$('.popup-btn-rs').on('click', function (event) {
		event.preventDefault();
		$('.popup_rs').fadeIn(400);
		$('body').addClass('over_hidden');
	});
	$('.popup-close').on('click', function (event) {
		event.preventDefault();
		$('.popup_rs').fadeOut(400);
		$('body').removeClass('over_hidden');
	});

	/* Smooth Scrolling */
	$(document).on("click", ".click_nav", function (e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var top = $(id).offset().top;
		$('body, html').animate({
			scrollTop: top
		}, 800);
	});

	/* Popup Video */
	$(function () {
		$('.popup-modal').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
			modal: true
		});
		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	});

	if ($('.open_video').length) {
		$('.open_video').magnificPopup({
			type: 'iframe'
		});
	}


	/* Fixed Menu */
	var h_hght = 580;
	var h_mrg = 0;
	$(function () {
		$(window).scroll(function () {
			var top = $(this).scrollTop();
			var elem = $('#top_nav');
			if (top + h_mrg < h_hght) {
				elem.css('top', (h_hght - top));
			} else {
				elem.css('top', h_mrg);
			}
		});
	});

	/* btn menu */
	$(".nav_btn").click(function () {
		$(".nav_btn").toggleClass("nav-active");
		$(".top_nav_1").toggleClass("nav_mobile");
		$("body").toggleClass("over_hidden");
	});

});