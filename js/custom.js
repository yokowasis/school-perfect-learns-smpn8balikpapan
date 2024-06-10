(function ($) {
    "use strict";
	
	/* ..............................................
	Loader 
    ................................................. */
	
	$(window).on('load', function() { 
		$('.preloader').fadeOut(); 
		$('#preloader').delay(550).fadeOut('slow'); 
		$('body').delay(450).css({'overflow':'visible'});
	});
    	
	/* ..............................................
    Navbar Bar
    ................................................. */
	
	$('.navbar-nav .nav-link').on('click', function() {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			// $('.navbar-collapse').collapse('hide');
			// alert ("123");
		}
	});

	$(".nav-link").on("click", function() {
		$(this).closest("li").find("ul").addClass("show");
	});
	
	/* ..............................................
    Fixed Menu
    ................................................. */
    
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 1) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});

	/* ..............................................
    Properties Filter
    ................................................. */
	var Container = $('.container');
	Container.imagesLoaded(function () {
		var portfolio = $('.properties-menu');
		portfolio.on('click', 'button', function () {
			$(this).addClass('active').siblings().removeClass('active');
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		var $grid = $('.properties-list').isotope({
			itemSelector: '.properties-grid'
		});

	});

	/* ..............................................
    Gallery
    ................................................. */
	
	$(document).ready(function() {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	});
	
	///// FROM TEMPLATE ////////
	/* ..............................................
    Scroll To Top
    ................................................. */
	
	$(document).ready(function () {

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#scroll-to-top').fadeIn();
			} else {
				$('#scroll-to-top').fadeOut();
			}
		});

		$('#scroll-to-top').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});

	});
	
	// // Spinner
	// var spinner = function () {
	// 	setTimeout(function () {
	// 	  if ($("#spinner").length > 0) {
	// 		$("#spinner").removeClass("show");
	// 	  }
	// 	}, 1);
	//   };
	//   spinner(0);
	
	  // Initiate the wowjs
	  new WOW().init();
	
	  // Sticky Navbar
	  $(window).scroll(function () {
		if ($(this).scrollTop() > 45) {
		  $(".navbar").addClass("sticky-top shadow-sm ");
		  $("#navbarCollapse a.nav-item.nav-link").removeClass("text-white");
		} else {
			$(".navbar").removeClass("sticky-top shadow-sm");
			$("#navbarCollapse a.nav-item.nav-link").addClass("text-white");
		}
	  });
	  
	  $(window).resize(function () {
		if ($(window).width() < 575) {
			$("#responsv-topbar").addClass("d-none");
			$("#responsv-topbar1").removeClass("col-4");
		} else {
			$("#responsv-topbar").removeClass("d-none");
			$("#responsv-topbar1").addClass("col-4");
			$("#responsv-topbar1 ul").addClass("justify-content-end");
			$("#responsv-topbar1 ul").removeClass("justify-content-center");
		}
	  }).resize();

	  // Hero Header carousel
	  $(".header-carousel").owlCarousel({
		animateOut: "fadeOut",
		items: 1,
		autoplay: true,
		smartSpeed: 1500,
		dots: false,
		loop: true,
		nav: true,
		mouseDrag: false,
		navText: [
		  '<i class="bi bi-arrow-left"></i>',
		  '<i class="bi bi-arrow-right"></i>',
		],
	  });
	  // news carousel
	  $(".news-carousel").owlCarousel({
		autoplay: true,
		items: 4,
		smartSpeed: 1000,
		dots: true,
		loop: true,
		margin: 25,
		nav: true,
		mouseDrag: false,
		navText: [
		  '<i class="bi bi-arrow-left"></i>',
		  '<i class="bi bi-arrow-right"></i>',
		],
		responsiveClass: true,
		responsive: {
		  0: {
			items: 1,
		  },
		  400: {
			items: 2,
		  },
		  768: {
			items: 3,
		  },
		  900: {
			items: 3,
		  },
		  976: {
			items: 4,
		  },
		},
	  });
	
	  // International carousel
	//   $(".testimonial-carousel").owlCarousel({
	// 	autoplay: true,
	// 	items: 1,
	// 	smartSpeed: 1500,
	// 	dots: true,
	// 	loop: true,
	// 	margin: 25,
	// 	nav: true,
	// 	navText: [
	// 	  '<i class="bi bi-arrow-left"></i>',
	// 	  '<i class="bi bi-arrow-right"></i>',
	// 	],
	//   });
	  // Service spread
	//   const paragraphs = document.querySelectorAll('.mu-service-single .service-text p');
	// 	paragraphs.forEach(p => {
	// 	  while (p.scrollHeight > p.clientHeight) {
	// 		p.textContent = p.textContent.replace(/\W*\s(\S)*$/, ' ...');
	// 	  }
	// 	});
	
	  // Modal Video
	  $(document).ready(function () {
		var $videoSrc;
		$(".btn-play").click(function () {
		  $videoSrc = $(this).data("src");
		});
		console.log($videoSrc);
	
		$("#videoModal").on("shown.bs.modal", function (e) {
		  $("#video").attr(
			"src",
			$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
		  );
		});
	
		$("#videoModal").on("hide.bs.modal", function (e) {
		  $("#video").attr("src", $videoSrc);
		});
	  });
	
	  // testimonial carousel
	  $(".testimonial-carousel").owlCarousel({
		autoplay: true,
		smartSpeed: 1000,
		center: true,
		dots: true,
		loop: true,
		margin: 25,
		nav: true,
		navText: [
		//   '<i class="bi bi-arrow-left"></i>',
		//   '<i class="bi bi-arrow-right"></i>',
		],
		responsiveClass: true,
		responsive: {
		  0: {
			items: 1,
		  },
		  576: {
			items: 1,
		  },
		  768: {
			items: 1,
		  },
		  992: {
			items: 1,
		  },
		  1200: {
			items: 1,
		  },
		},
	  });
	
	  // Back to top button
	  $(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
		  $(".back-to-top").fadeIn("slow");
		} else {
		  $(".back-to-top").fadeOut("slow");
		}
	  });
	  $(".back-to-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
		return false;
	  });

	
}(jQuery));
;