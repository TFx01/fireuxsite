var slides = $('.slides .container .slide_box').children();
var currentSlide = 0;
const slidesCount = slides.length;
const dots = $('.dots').children();

$('.arrow').click(e => {
	var arrowDir;
	arrowDir = e.target.children[0].classList.contains('left') ? 'left' : 'right';

	var previousSlide = slides[currentSlide];
	if (arrowDir == 'left') {
		currentSlide = currentSlide > 0 ? currentSlide - 1 : slidesCount - 1;
	} else {
		currentSlide = currentSlide < slidesCount - 1 ? currentSlide + 1 : 0;
	}

	$(previousSlide)
		.stop(true)
		.animate(
			{
				opacity: 0,
				display: 'none'
			},
			500
		);

	$(slides[currentSlide])
		.stop(true)
		.animate(
			{
				opacity: 1,
				display: 'block'
			},
			1000
		);

	$('.menu .container')
		.children()
		.map((i, slide) => {
			if (i === currentSlide) slide.children[1].style.color = 'orange';
			else slide.children[1].style.color = 'black';
		});

	dots.map((i, dot) => {
		if (i === currentSlide) {
			dot.style.background = '#ff4800';
		} else {
			dot.style.background = 'white';
		}
	});
});
