var slides = $('.slides .container').children();
var currentSlide = 0;
const slidesCount = slides.length;

$('.arrow').click(e => {
	var arrowDir;
	console.log(e.target.children[0]);
	arrowDir = e.target.children[0].classList.contains('left') ? 'left' : 'right';

	var previousSlide = slides[currentSlide];
	if (arrowDir == 'left') {
		currentSlide = currentSlide < slidesCount - 1 ? currentSlide + 1 : 0;

		// for (var i = 0; i < slides.length - 1; i++) {
		// 	slides[i] = slides[i + 1];
		// }

		// slides[slidesCount - 1] = currentSlide;
	} else {
		currentSlide = currentSlide > 0 ? currentSlide - 1 : slidesCount - 1;
		// const aux = currentSlide;
		// slides[0] = slides[slidesCount - 1];
		// slides[slidesCount - 1] = aux;
	}

	$(previousSlide).animate(
		{
			opacity: 0,
			display: 'none'
		},
		500
	);

	$(slides[currentSlide]).animate(
		{
			opacity: 1,
			display: 'block'
		},
		1000
	);

	$('.slides .container')
		.empty()
		.append(slides);

	$('.menu .container')
		.children()
		.map((i, slide) => {
			console.log(slide);
			if (i === currentSlide) slide.children[1].style.color = 'orange';
			else slide.children[1].style.color = 'black';
		});
});
