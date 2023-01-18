
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!"

startApp();
function startApp() {
	output(calculator(getNumber1(), getNumber2(), getOp()));
}

function getNumber1() {
	return prompt("Zahl1 eingeben:");
}
function getNumber2() {
	return prompt("Zahl2 eingeben:");
}
function getOp() {
	return prompt("Operator eingeben:");
}


// modul: calculator | tests:
// module: check operator | Test:
// agreement : "+","-","*","/"
// output(calculator(2, 3, "+"));
// output(calculator(3, 2, "-"));
// output(calculator(2, 3, "*"));
// output(calculator(4, 2, "/"));
// output(calculator(4, 2, ":"));
// output(calculator(4, 0, "/"));
// output(calculator(4, 0, ":"));
// output(calculator(4, 2, "ads"));
function calculator(a, b, op) {

	switch (op) {
		case "+":	// addition
			return add(a, b);
		case "-":	// subtraktion
			return sub(a, b);
		case "*":	// multiplikation
			return multi(a, b);
		case "/":	// division
		case ":":	// division
			return div(a, b);
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
  