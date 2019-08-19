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