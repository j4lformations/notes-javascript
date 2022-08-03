/*
    La fonction globale isNaN() peut être utilisée pour vérifier si une certaine valeur ou expression est évaluée à NaN.
    Cette fonction (en court) vérifie d'abord si la valeur est un nombre,
    sinon essaie de la convertir (*), puis vérifie si la valeur résultante est NaN.
    Pour cette raison, cette méthode de test peut prêter à confusion
*/

// Les exemples suivants vous aideront à mieux comprendre le comportement isNaN()

isNaN(NaN);                                             // true
isNaN(1);                                        // false: 1 est un  number
isNaN(-2e-4);                                    // false: -2e-4 est un number (-0.0002) en notation scientifique
isNaN(Infinity);                                        // false: Infinity est un number
isNaN(true);                                     // false: converti en 1, qui est un nombre
isNaN(false);                                    // false: converti en 0, qui est un nombre
isNaN(null);                                     // false: converti en 0, qui est un nombre
isNaN("");                                       // false: converti en 0, qui est un nombre
isNaN(" ");                                      // false: converti en 0, qui est un nombre
isNaN("45.3");                                   // false: chaine représentant un nombre, converti en 45,3
isNaN("1.2e3");                                  // false: chaine représentant un nombre, converti en 1.2e3
isNaN("Infinity");                               // false: chaîne représentant un nombre, converti en Infinity
isNaN("Infinity");                               // false: chaîne représentant un nombre, converti en Infinity
isNaN(new Date);                                        // false: Objet date, converti en millisecondes depuis l'époque
isNaN("10€");                                    // true : la conversion échoue, le signe € n'est pas un chiffre
isNaN("Bonjour");                                // true : la conversion échoue, pas de chiffres du tout
isNaN(undefined);                                // true : converti en NaN
isNaN();                                                // true : converti en NaN (implicitement indéfini)
isNaN(function () {});                           // true : la conversion échoue
isNaN({});                                       // true : la conversion échoue
isNaN([1, 2]);                                   // true : converti en "1, 2", qui ne peut pas être converti en nombre

/*
    Dans ECMAScript 6, la fonction Number.isNaN() a été implémentée principalement
    pour éviter le problème de window.isNaN() consistant à convertir de force le paramètre en nombre.

    Number.isNaN(), en effet, n'essaie pas de convertir la valeur en nombre avant le test.
    Cela signifie également que seules les valeurs du type number, qui sont également NaN,
    renvoient true (ce qui signifie essentiellement que Number.isNaN(NaN))
*/

// Le seul et unique
Number.isNaN(NaN); // true

// Nombres
Number.isNaN(1);                    // => false
Number.isNaN(-2e-4);                // => false
Number.isNaN(Infinity);                    // => false

// Valeurs non de type numéro
Number.isNaN(true);                 // => false
Number.isNaN(false);                // => false
Number.isNaN(null);                 // => false
Number.isNaN("");                   // => false
Number.isNaN(" ");                  // => false
Number.isNaN("45.3");               // => false
Number.isNaN("1.2e3");              // => false
Number.isNaN("Infinity");           // => false
Number.isNaN(new Date);                    // => false
Number.isNaN("10$");                // => false
Number.isNaN("hello");              // => false
Number.isNaN(undefined);            // => false
Number.isNaN();                            // => false
Number.isNaN(function(){});         // => false
Number.isNaN({});                   // => false
Number.isNaN([]);                   // => false
Number.isNaN([1]);                  // => false
Number.isNaN([1, 2]);               // => false
Number.isNaN([true]);               // => false