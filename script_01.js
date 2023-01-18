
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart :
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!"

// modul: calculator | tests:
// module: check operator | Test:
// agreement : "+","-","*","/"
output(calculator(2, 3, "+"));
output(calculator(3, 2, "-"));
output(calculator(2, 3, "*"));
output(calculator(4, 2, "/"));
output(calculator(4, 2, ":"));
output(calculator(4, 0, "/"));
output(calculator(4, 0, ":"));
output(calculator(4, 2, "ads"));
function calculator(a, b, op) {

	switch (op) {
		case "+":	// addition
			return "Ergebnis Addition";
		case "-":	// subtraktion
			return "Ergebnis Subtraktion";
		case "*":	// multiplikation
			return "Ergebnis Multiplikation";
		case "/":	// division
		case ":":	// division
			return "Ergebnis Division";
		default:
			return ERROR_STR_GEN;
	}


}


// module: addition a + b |  test:
// output(add(2, 3));
// output(add(2.5, -3));
// output(add(2, 0));
function add(a, b) {
	return a + b;
}

// module: subtraktion a - b |  test:
// output(sub(7, 6));
// output(sub(9.5, -15));
// output(sub(8, 0));
function sub(a, b) {
	return a - b;
}

// module: multiplikation a * b |  test:
// output(multi(7, 6));
// output(multi(9.5, -15));
// output(multi(8, 0));
function multi(a, b) {
	return a * b;
}

// module: division a / b |  test:
// output(div(6, 6));
// output(div(10, -2));
// output(div(8, 0));
function div(a, b) {
	if (b == 0) {
		return ERROR_STR_DIV;
	}
		return a / b;	
}

// module:  output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  