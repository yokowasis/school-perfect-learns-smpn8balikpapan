(function ($) {
    "use strict";
	
	$("a[href*='#']").click(function() {
		$.get("#");
		return false; // prevent default browser refresh on "#" link
	});
		
	// $("a.counter").click(function()
    // {
    //      $.get("#");
    //      return false; // prevent default browser refresh on "#" link
    // });
	/* ..............................................
	Loader 
    ................................................. */
	
	$(window).on('load', function() { 
		$('.preloader').fadeOut(); 
		$('#preloader').delay(550).fadeOut('slow'); 
		$('body').delay(450).css({'overflow':'visible'});
	});
    	
	$(window).resize(function () {
		if ($(window).width() <= 992) {
			$("#responsv-topbar").addClass("d-none");
		} else {
			$("#responsv-topbar").removeClass("d-none");
		}
	  }).resize();

	/* ..............................................
    Navbar Bar
    ................................................. */
	// li a.nav-item nav-link ul.dropdown-menu li a.dropdown-item

	// $('.navbar-nav .nav-link').on('click', function() {
	// 	var toggle = $('.navbar-toggler').is(':visible');
	// 	if (toggle) {
	// 		// $('.navbar-collapse').collapse('hide');
	// 		// alert ("123");
	// 	}
	// });
	$(document).ready(function() {
		// Menutup navbar saat mengklik di luar navbar
		$(document).click(function(event) {
			var clickover = $(event.target);
			var _opened = $(".navbar-collapse").hasClass("show");
			if (_opened === true && !clickover.hasClass("navbar-toggler") && !clickover.closest('.navbar-collapse').length) {
				$(".navbar-toggler").click();
			}
		});
	});
	

	$(document).ready(function() {
		$(window).resize(function () {
			$(".nav-link").on("click", function(e) {
				if ($(window).width() >= 992) {
					// Prevent the default action of the link
					// e.preventDefault();
		
				  // Find the corresponding dropdown menu
				  var $submenu = $(this).siblings(".dropdown-menu");
				  
				  // If the dropdown menu is already shown, remove the 'show' class to hide it
				  if ($submenu.hasClass("show")) {
					$submenu.removeClass("show");
				  } else {
					// Hide all other open submenus
					$(".dropdown-menu").removeClass("show");
					
					// Show the clicked submenu
					$submenu.addClass("show");
				  }
				} else {
					var $submenu = $(this).siblings(".dropdown-menu");
					$(".dropdown-menu").removeClass("show");
					setTimeout($submenu.addClass("show"), 350);
				}
			});
		  }).resize();
		// Toggle submenu on clicking the nav-link
		
		
	  
		// Close submenu when clicking outside of it
		$(document).on("click touchstart", function(e) {
		  if (!$(e.target).closest(".nav-item").length) {
			$(".dropdown-menu").removeClass("show");
		  }
		});
	});
	
	// $(document).ready(function() {
	// 	// Select all nav-link elements
	// 	const navLinks = $('.nav-link');
  
	// 	navLinks.on('click', function(event) {
	// 	  // Check if the clicked link already has the active class
	// 	  if($(this).hasClass('active')) {
	// 		// If it has, remove the active class
	// 		$(this).removeClass('active');
	// 	  } else {
	// 		// Otherwise, remove the active class from all nav-links
	// 		navLinks.removeClass('active');
	// 		// And add the active class to the clicked nav-link
	// 		$(this).addClass('active');
	// 	  }
	// 	});
	//   });
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
			$(".navbar").addClass("sticky-top shadow-sm");
			$("#navbarCollapse a.nav-item.nav-link").removeClass("text-white");
			// $("#navbar-logo").attr("src", "/images/smpn8_new-foto/new-logo.png");
		} else {
			$(".navbar").removeClass("sticky-top shadow-sm");
			$("#navbarCollapse a.nav-item.nav-link").addClass("text-white");
			// $("#navbar-logo").attr("src", "/images/logobg.png");
		}
	});
	  
	  $(window).resize(function () {
		if ($(window).width() <= 760) {
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
		touchDrag: false,
		navText: [
		  '<i class="bi bi-arrow-left"></i>',
		  '<i class="bi bi-arrow-right"></i>',
		],
	  });
	  // news carousel
	  $(".news-carousel").owlCarousel({
		autoplay: true,
		items: 1,
		smartSpeed: 1000,
		dots: true,
		loop: true,
		margin: 25,
		nav: true,
		mouseDrag: false,
		touchDrag: false,
		navText: [
		  '<i class="bi bi-arrow-left"></i>',
		  '<i class="bi bi-arrow-right"></i>',
		],
		responsiveClass: true,
		responsive: {
		  0: {
			items: 1,
		  }
		//   400: {
		// 	items: 2,
		//   },
		//   768: {
		// 	items: 3,
		//   },
		//   900: {
		// 	items: 3,
		//   },
		//   976: {
		// 	items: 4,
		//   },
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
	  
	  $(document).ready(function () {
        // Event listener for image click
        $('.gallery img').on('click', function () {
            var src = $(this).data('src');
            var alt = $(this).attr('alt');
			// var title = $(this).data('title');

            // Update the modal title
            // $('#imageModalLabel').text(title);

            // Update the modal title
            $('#modalText').text(alt);

            // Update the modal image
            $('#modalImage').attr('src', src);
            $('#modalImage').attr('alt', alt);

            // Show the modal
            $('#imageModal').modal('show');
        });

        $('#imageModal').on('shown.bs.modal', function () {
            // Set the width of the modal text to match the image width
            var imgWidth = document.getElementById("modalImage").scrollWidth;
			$(".modal-foot").css("width", imgWidth + "px");
        });

        $('#imageModal').on('hidden.bs.modal', function () {
            $('#modalImage').attr('src', '');
        });
    });
	/-----------------/ 
	$(document).ready(function () {
		$('.employe img').on('click', function () {
			var src = $(this).data('src');
			var alt = $(this).attr('alt');
			var subjects = $(this).data('subjects');
			var status = $(this).data('status');
			// var title = $(this).data('title');

			// Update the modal title
			// $('#imageModalLabel').text(title);

			// Update the modal title
			$('#modalText').text(alt);
			$('#modalStatus').text(status);
			
			// Format the subjects list
            var formattedSubjects = subjects.split('-').join('<br>-');
            $('#modalList').html(formattedSubjects);

			// Update the modal image
			$('#modalImage').attr('src', src);
			$('#modalImage').attr('alt', alt);

			// Show the modal
			$('#staffModal').modal('show');
		});

		$('#staffModal').on('shown.bs.modal', function () {
			// Set the width of the modal text to match the image width
			var imgWidth = document.getElementById("modalImage").scrollWidth;
			$(".modal-foot").css("width", imgWidth + "px");
		});

		$('#staffModal').on('hidden.bs.modal', function () {
			$('#modalImage').attr('src', '');
		});
	});

	
}(jQuery));
;