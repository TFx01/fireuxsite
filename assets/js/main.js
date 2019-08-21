// class Letter {
// 	constructor(letter, bold) {
//   	this.value = letter;
//     this.bold = bold;
//   }
// }

// const letters = [
// 	new Letter("O", false),
//   new Letter("L", false),
//   new Letter("Á", false),
//   new Letter(",", false),
//   new Letter(&nbsp;, false),
//   new Letter("S", false),
//   new Letter("I", false),
//   new Letter("N", false),
//   new Letter("T", false),
//   new Letter("A", false),
//   new Letter("-", false),
//   new Letter("S", false),
//   new Letter("E", false),
//   new Letter("&nbps;", false),
//   new Letter("À", false),
//   new Letter("&nbps;", false),
//   new Letter("V", false),
//   new Letter("O", false),
//   new Letter("N", false),
//   new Letter("T", false),
//   new Letter("A", false),
//   new Letter("D", false),
//   new Letter("E", false),
//   new Letter("&nbps;", false),
//   new Letter("N", false),
//   new Letter("O", false),
//   new Letter("S", false),
//   new Letter("&nbps;", false),
//   new Letter("C", true),
//   new Letter("O", true),
//   new Letter("N", true),
//   new Letter("H", true),
//   new Letter("E", true),
//   new Letter("C", true),
//   new Letter("E", true),
//   new Letter("N", true),
//   new Letter("D", true),
//   new Letter("O", true),
// ]

// var field = document.getElementById("text");

// var i = 0;
// const interval = setInterval(() => {
//   const bold = '<strong>' + letters[i].value + '</strong>'
//   const normal = letters[i].value
// 	field.innerHTML = field.innerHTML + (letters[i].bold ? bold : normal)
//   if(i === letters.length - 1 ) clearInterval(interval)
//   i++;
// }, 300)

new universalParallax().init();

new universalParallax().init({
	speed: 8.0
});

const backdrop = document.getElementById('backdrop');
var isMobile = false;

window.addEventListener('resize', e => {
	const width = window.innerWidth;

	if (checkIfIsInMobileMode(width)) {
		backdrop.style.display = 'none';
		isMobile = false;
	} else isMobile = true;
});

function checkIfIsInMobileMode(width) {
	if (width > 786) {
		isMobile = false;
		return false;
	} else {
		isMobile = true;
		return true;
	}
}

// Menu
var menuOpen = false;

const mainMenuMobile = document.getElementById('mainMenuMobile')
	.firstElementChild;

document.getElementById('mainMenuMobile').addEventListener('click', () => {
	if (menuOpen) {
		backdrop.style.display = 'none';
		mainMenuMobile.setAttribute('src', './assets/images/menu_button.png');
	} else {
		backdrop.style.display = 'block';
		mainMenuMobile.setAttribute('src', './assets/images/cancel_button.png');
	}

	console.log(mainMenuMobile);

	menuOpen = !menuOpen;
});

// Scroll
$(document).ready(function() {
	checkIfIsInMobileMode(window.innerWidth);
	$('a[href*="#"]').on('click', function(event) {
		console.log(isMobile);
		let hash = this.hash;
		if (hash) {
			event.preventDefault();
			$('html, body').animate(
				{ scrollTop: $(hash).offset().top - (isMobile ? 70 : 80) },
				10
			);
		}
	});
});
