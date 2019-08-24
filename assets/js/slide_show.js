var slides = $('.slides .container .slide_box').children(); // Pega todos os slides
var currentSlide = 0;
const slidesCount = slides.length;
const dots = $('.dots').children(); // Pega a div dos dots

$('.arrow').click(e => {
	var arrowDir;
	arrowDir = e.target.children[0].classList.contains('left') ? 'left' : 'right'; // Verifico qual das arrows o usuario clicou

	var previousSlide = slides[currentSlide];
	if (arrowDir == 'left') {
		currentSlide = currentSlide > 0 ? currentSlide - 1 : slidesCount - 1; // Se clicou na da esquerda vai pro slide de cima, se o slide atual for o indice 0 vai pro ultimo slide da lista
	} else {
		currentSlide = currentSlide < slidesCount - 1 ? currentSlide + 1 : 0; // Se clicou na da direita vai pro slide de baixo, se o slide atual for o ultimo da lista vai pro primeiro slide da lista
	}

	// Diminui a opacidade do slide que tava sendo mostrado
	$(previousSlide)
		.stop(true) // Se essa animação for ativada novamente executa instantaneamente a anterior
		.animate(
			{
				opacity: 0,
				display: 'none'
			},
			500 // Tempo de duração da animação
		);

	// Aumenta a opacidade do slide que vai ser mostrado
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
		.map((i, product) => {
			// É tipo um FOR por todos os produtos do menu, o "product" recebe a div do produto tipo na primeira iteração pega o primeiro produto, na segunda o segundo e assim vai
			if (i === currentSlide) {
				// Verifica se o item do menu "produto", tem o mesmo indice do slide selecionado para fazer a troca de cor para laranjado
				$('.menu .container').scrollTop(product.offsetTop); // Scrolla o menu pro produto selecionado
				product.children[1].style.color = '#ff4800'; // Seta o texto do menu pra laranjado
			} else product.children[1].style.color = 'black'; // Seta o texto do menu pra preto
		});

	// Se ler o de cima acho que voce entende esse tbm
	dots.map((i, dot) => {
		if (i === currentSlide) {
			dot.style.background = '#ff4800';
		} else {
			dot.style.background = 'white';
		}
	});
});
