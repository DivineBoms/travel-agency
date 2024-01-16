
	$(function(){
		var navbar = $('#header');

		$(window).scroll(function(){
			if($(window).scrollTop() <= 40){
				navbar.removeClass('navbar-scroll');

			}else{
                  navbar.addClass('navbar-scroll');
			}
		});
	});

	
    // wow js
	new WOW().init();
	
	$('.form-control').each(function () {
		floatedLabel($(this));
	});

	$('.form-control').on('input', function () {
		floatedLabel($(this));
	});

	function floatedLabel(input) {
		var $field = input.closest('.form-group');
		if (input.val()) {
			$field.addClass('input-not-empty');
		} else {
			$field.removeClass('input-not-empty');
		}
	}
	$('.hotel').owlCarousel({
		loop:true,
		margin:20,
		smartSpeed: 1000,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
		autoplay:true, 
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
	(function ($) {
		$.fn.countTo = function (options) {
			options = options || {};
			
			return $(this).each(function () {
				// set options for current element
				var settings = $.extend({}, $.fn.countTo.defaults, {
					from:            $(this).data('from'),
					to:              $(this).data('to'),
					speed:           $(this).data('speed'),
					refreshInterval: $(this).data('refresh-interval'),
					decimals:        $(this).data('decimals')
				}, options);
				
				// how many times to update the value, and how much to increment the value on each update
				var loops = Math.ceil(settings.speed / settings.refreshInterval),
					increment = (settings.to - settings.from) / loops;
				
				// references & variables that will change with each update
				var self = this,
					$self = $(this),
					loopCount = 0,
					value = settings.from,
					data = $self.data('countTo') || {};
				
				$self.data('countTo', data);
				
				// if an existing interval can be found, clear it first
				if (data.interval) {
					clearInterval(data.interval);
				}
				data.interval = setInterval(updateTimer, settings.refreshInterval);
				
				// initialize the element with the starting value
				render(value);
				
				function updateTimer() {
					value += increment;
					loopCount++;
					
					render(value);
					
					if (typeof(settings.onUpdate) == 'function') {
						settings.onUpdate.call(self, value);
					}
					
					if (loopCount >= loops) {
						// remove the interval
						$self.removeData('countTo');
						clearInterval(data.interval);
						value = settings.to;
						
						if (typeof(settings.onComplete) == 'function') {
							settings.onComplete.call(self, value);
						}
					}
				}
				
				function render(value) {
					var formattedValue = settings.formatter.call(self, value, settings);
					$self.html(formattedValue);
				}
			});
		};
		
		$.fn.countTo.defaults = {
			from: 0,               // the number the element should start at
			to: 0,                 // the number the element should end at
			speed: 1000,           // how long it should take to count between the target numbers
			refreshInterval: 100,  // how often the element should be updated
			decimals: 0,           // the number of decimal places to show
			formatter: formatter,  // handler for formatting the value before rendering
			onUpdate: null,        // callback method for every time the element is updated
			onComplete: null       // callback method for when the element finishes updating
		};
		
		function formatter(value, settings) {
			return value.toFixed(settings.decimals);
		}
	}(jQuery));
	
	jQuery(function ($) {
	  // custom formatting example
	  $('.count-number').data('countToOptions', {
		formatter: function (value, options) {
		  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
		}
	  });
	  
	  // start all the timers
	  $('.timer').each(count);  
	  
	  function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	  }
	});

	 $(".col-xs-12").slice(0, 3).show()
	 $(".btn").on("click", function(){
		  $(".col-xs-12:hidden").slice(0, 3).slideDown()
		  if ($(".col-xs-12:hidden").length = 0) {
			$(".btn").fadeOut('slow') 
		  }
	 })
	//  jQuery(document).ready(function ($) {
	// 	var feedbackSlider = $(".feedback-slider");
	// 	feedbackSlider.owlCarousel({
	// 		items: 1,
	// 		nav: true,
	// 		dots: true,
	// 		autoplay: true,
	// 		loop: true,
	// 		mouseDrag: true,
	// 		touchDrag: true,
	// 		navText: [
	// 			"<i class='fa fa-long-arrow-left'></i>",
	// 			"<i class='fa fa-long-arrow-right'></i>"
	// 		],
	// 		responsive: {
	// 			// breakpoint from 767 up
	// 			767: {
	// 				nav: true,
	// 				dots: false
	// 			}
	// 		}
	// 	});
	
	// 	feedbackSlider.on("translate.owl.carousel", function () {
	// 		$(".feedback-slider-item h3")
	// 			.removeClass("animated fadeIn")
	// 			.css("opacity", "0");
	// 		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
	// 			.removeClass("animated zoomIn")
	// 			.css("opacity", "0");
	// 	});
	
	// 	feedbackSlider.on("translated.owl.carousel", function () {
	// 		$(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
	// 		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
	// 			.addClass("animated zoomIn")
	// 			.css("opacity", "1");
	// 	});
	// 	feedbackSlider.on("changed.owl.carousel", function (property) {
	// 		var current = property.item.index;
	// 		var prevThumb = $(property.target)
	// 			.find(".owl-item")
	// 			.eq(current)
	// 			.prev()
	// 			.find("img")
	// 			.attr("src");
	// 		var nextThumb = $(property.target)
	// 			.find(".owl-item")
	// 			.eq(current)
	// 			.next()
	// 			.find("img")
	// 			.attr("src");
	// 		var prevRating = $(property.target)
	// 			.find(".owl-item")
	// 			.eq(current)
	// 			.prev()
	// 			.find("span")
	// 			.attr("data-rating");
	// 		var nextRating = $(property.target)
	// 			.find(".owl-item")
	// 			.eq(current)
	// 			.next()
	// 			.find("span")
	// 			.attr("data-rating");
	// 		$(".thumb-prev").find("img").attr("src", prevThumb);
	// 		$(".thumb-next").find("img").attr("src", nextThumb);
	// 		$(".thumb-prev")
	// 			.find("span")
	// 			.next()
	// 			.html(prevRating + '<i class="fa fa-star"></i>');
	// 		$(".thumb-next")//
	// 			.find("span")
	// 			.next()
	// 			.html(nextRating + '<i class="fa fa-star"></i>');
	// 	});
	// 	$(".thumb-next").on("click", function () {
	// 		feedbackSlider.trigger("next.owl.carousel", [300]);
	// 		return false;
	// 	});
	// 	$(".thumb-prev").on("click", function () {
	// 		feedbackSlider.trigger("prev.owl.carousel", [300]);
	// 		return false;
	// 	});
	// });
	
	$(document).ready(function(){
		$("#testimonial-slider").owlCarousel({
			items:1,
			itemsDesktop:[1000,1],
			itemsDesktopSmall:[979,1],
			itemsTablet:[769,1],
			pagination:true,
			transitionStyle:"goDown",	
			loop:true,
			margin:20,
			smartSpeed: 1000,
			autoplay:false,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			autoplay:true
		});
	});
	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();
	$(document).ready(function(){
		$("#mod").modal('show');
	});
	

	document.addEventListener('DOMContentLoaded', function(){
		let btnToggle = document.querySelector('#btn-toggle');
		let rowCards = document.querySelector('.row-cards');
		let mainRow = document.querySelector('.main-row');
		let colCardAll = document.querySelectorAll('.col-card');
		let cardAll = document.querySelectorAll('.card');
	
		btnToggle.addEventListener('click', function(){
			if (!rowCards.classList.contains('is-moving')) {
				mainRow.classList.toggle("no-menu");
	
				for(i=0; i<cardAll.length; i++){
					let clone = cardAll[i].cloneNode(true);
					clone.classList.add("clone");
					cardAll[i].parentElement.insertBefore(clone, cardAll[i]);
	
					let top = clone.getBoundingClientRect().top;
					let left = clone.getBoundingClientRect().left;
					let width = clone.getBoundingClientRect().width;
					let height = clone.getBoundingClientRect().height;
	
					
					clone.style.position = 'fixed';
					clone.style.top = top+'px';
					clone.style.left = left+'px';
					clone.style.width = width+'px';
					clone.style.height = height+'px';
				}
	
				document.querySelector('.col-menu').classList.toggle('col-0');
				document.querySelector('.col-menu').classList.toggle('col-4');
				document.querySelector('.col-cards').classList.toggle('col-8');
				document.querySelector('.col-cards').classList.toggle('col-12');
				for(i=0; i<colCardAll.length; i++){
					colCardAll[i].classList.toggle('col-4');
					colCardAll[i].classList.toggle('col-6');
				}
				rowCards.classList.add('is-moving');
	
				let cardCloneAll = document.querySelectorAll('.card.clone');
				for(i=0; i<cardCloneAll.length; i++){
					let top = cardAll[i].getBoundingClientRect().top;
					let left = cardAll[i].getBoundingClientRect().left;
					let width = cardAll[i].getBoundingClientRect().width;
					let height = cardAll[i].getBoundingClientRect().height;
	
					cardCloneAll[i].style.top = top+'px';
					cardCloneAll[i].style.left = left+'px';
					cardCloneAll[i].style.width = width+'px';
					cardCloneAll[i].style.height = height+'px';
				}
	
				setTimeout(function(){
					rowCards.classList.remove('is-moving');
					for(i=0; i<cardCloneAll.length; i++){
						cardCloneAll[i].remove();
					}
				}, 1000)
	
			}
	
		})
	
	
		//simulate click for thumbnail 
		setTimeout(function(){
			document.getElementById('btn-toggle').click();
		}, 500);
		setTimeout(function(){
			document.getElementById('btn-toggle').click();
		}, 2500)
	})
	


	$(document).ready(function(){
		$(".fancybox").fancybox({
			  openEffect: "none",
			  closeEffect: "none"
		  });
		  
		  $(".zoom").hover(function(){
			  
			  $(this).addClass('transition');
		  }, function(){
			  
			  $(this).removeClass('transition');
		  });
	  });
		  

	