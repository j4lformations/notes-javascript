// Les opérations mathématiques sur des valeurs autres que des nombres renvoient NaN.

"b" * 3; // => NaN
"cde" - "e"; // => NaN
[1, 2, 3] * 2; // => NaN

// Une exception : les tableaux à un seul nombre.
[2] * [3]; // => 6

// N'oubliez pas non plus que l'opérateur + concatène les chaînes.
"a" + "b"; // => ab

0 / 0; // => NaN

// Fonctions de la bibliothèque mathématique qui renvoient NaN
Math.floor("a"); // => NaN
Math.sqrt(-1); // => NaN
console.log(Math.floor("a"));

