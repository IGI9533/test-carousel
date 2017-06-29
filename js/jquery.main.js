$(document).ready(function(){
	initCarousel();
	initRange();
});

function initCarousel() {
	$('.carousel').scrollGallery({
		mask: '.mask',
		slider: '.slideset',
		slides: '.slide',
		btnPrev: 'a.btn-prev',
		btnNext: 'a.btn-next',
		pagerLinks: '.pagination li',
		currentNumber: 'span.current-num',
		totalNumber: 'span.total-num',
		maskAutoSize: true,
		stretchSlideToMask: true,
		autoRotation: false,
		switchTime: 3000,
		animSpeed: 500
	});
}

function initRange() {
	$("#range-slider").ionRangeSlider({
		min: 0,
		max: 27000,
		from: 15000,
		min_interval: 3000,
		grid: true,
		grid_num: 9,
		hide_min_max: true
	});
};