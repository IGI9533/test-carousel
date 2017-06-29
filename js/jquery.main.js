$(document).ready(function(){
	initCarousel();
});

function initCarousel() {
	jQuery('.carousel').scrollGallery({
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