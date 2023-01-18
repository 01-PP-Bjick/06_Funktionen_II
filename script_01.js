
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart :
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole : check!
*/

// module: addition a + b |  test:
output(add(2, 3));
output(add(2.5, -3));
output(add(2, 0));
function add(a, b) {
	return a + b;
}

// module: subtraktion a - b |  test:
output(sub(7, 6));
output(sub(9.5, -15));
output(sub(8, 0));
function sub(a, b) {
	return a - b;
}

// module: multiplikation a * b |  test:
output(multi(7, 6));
output(multi(9.5, -15));
output(multi(8, 0));
function multi(a, b) {
	return a * b;
}

// module: division a / b |  test:
output(div(6, 6));
output(div(10, -2));
output(div(8, 0));
function div(a, b) {
	if (b == 0) {
		return "Division durch 0 nicht möglich!";
	} else {
		return a / b;	
	}
}

// module:  output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  