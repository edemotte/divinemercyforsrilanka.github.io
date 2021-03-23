/*
	Epilogue by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	$(function() {

		var	$window = $(window),
			$header = $('#header1'),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);

				// Poptrox
				$('.thumbnails').poptrox({
					onPopupClose: function() { $body.removeClass('is-covered'); },
					onPopupOpen: function() { $body.addClass('is-covered'); },
					baseZIndex: 10001,
					useBodyOverflow: false,
					usePopupEasyClose: true,
					overlayColor: '#000000',
					overlayOpacity: 0.75,
					popupLoaderText: '',
					fadeSpeed: 500,
					usePopupDefaultStyling: false,
					windowMargin: (skel.breakpoint('small').active ? 5 : 50)
				});
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Items.
			$('.item').each(function() {

				var $this = $(this),
					$header = $this.find('header'),
					$a = $header.find('a'),
					$img = $header.find('img');

				// Set background.
					$a.css('background-image', 'url(' + $img.attr('src') + ')');

				// Remove original image.
					$img.remove();

			});

			
		// Menu.
		$('#menu')
		.append('<a href="#menu" class="close"><i class="fas fa-times"></i></a>')
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right'
		});
		

// Header.
	if (skel.vars.IEVersion < 9)
		$header.removeClass('alt');

	if ($banner.length > 0
	&&	$header.hasClass('alt')) {

		$window.on('resize', function() { $window.trigger('scroll'); });

		$banner.scrollex({
			bottom:		$header.outerHeight(),
			terminate:	function() { $header.removeClass('alt'); },
			enter:		function() { $header.addClass('alt'); },
			leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
		});

	}


	});


})(jQuery);