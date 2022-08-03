// DECLARATION DE VARIABLE

/*
nomVariable = valeur

nomVariable {Obligatoire} <==> Le nom de la variable utilisé lors de son appel.
= [Facultatif] Affectation (définissant le contenu de la variable)
valeur {Requis lors de l'utilisation de l'affectation}

*/

// => NOTE : LES MOT-CLES DU JS NE PEUVENT ETRE UTILISER COMME NOM DE VARIABLE

// On peut utiliser le mot clé var pour declarer une variable
var maVariable = "Voici une variable";

// Ceci est un exemple de declaration de variables.
// Cette variable est appelée "chaîne" car elle contient des caractères ASCII (A-Z, 0-9, !@#$, etc.)

// On peut declarer plusieurs fois la meme variable avec le mot clé var
var maVariable = "Voici une variable";

// On va preferer l'utilisation du mot cle let pour declarer une variable
let autreVariable = '........';

// On ne peut pas declarer plusieurs fois la meme variable avec le mot clé let
let autreVariable = '.........'; // => SyntaxError: Identifier 'maVariable' has already been declared

// let 8autreVariable = 25; // => SyntaxError: Invalid or unexpected token

