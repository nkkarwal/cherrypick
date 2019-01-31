
/* */
$(document).ready(function () {
	var owl = $('.owl-carousel3');
	owl.owlCarousel({
		margin: 4,
		nav: true,
		dots: true,
		loop: true,
		items: 3,
		responsive: {
			0: {
				items: 2,
				margin: 14,
			},
			600: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});
});


$(document).ready(function () {
	var owl = $('.owl-carousel4');
	owl.owlCarousel({
		margin: 4,
		nav: true,
		dots: true,
		loop: true,
		items: 4,
		responsive: {
			0: {
				items: 2,
				margin: 14,
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	})
});


$(document).ready(function () {
	var owl = $('.owl-carousel2');
	owl.owlCarousel({
		margin: 15,
		nav: true,
		dots: true,
		loop: true,
		items: 2,
		responsive: {
			0: {
				items: 2,
				margin: 14,
			},
			600: {
				items: 3
			},
			1000: {
				items: 2
			}
		}
	})
});


/*SEARCH MENU TOGGLE  */
$(".iconSearch").click(function () {
	$(".search--holder").slideToggle();
});