1 / 0; // => Infinity

// L'infini est une propriété de l'objet global (donc une variable globale) qui représente
// l'infini mathématique. C'est une référence à Number.POSITIVE_INFINITY

// Elle est supérieure à toute autre valeur, et vous pouvez l'obtenir en divisant par 0 ou en 
// évaluant l'expression d'un nombre si grand qu'il déborde.
// Cela signifie en fait qu'il n'y a pas d'erreurs de division par 0 en JavaScript, il y a Infinity

// Il y a aussi -Infinity qui est l'infini mathématique négatif, et il est inférieur à toute autre valeur.
// Pour obtenir -Infinity, vous annulez Infinity ou obtenez une référence à celui-ci dans Number.
// NEGATIVE_INFINITY

Infinity > 123192310293;                                      // true
-Infinity < -123192310293;                                    // true
1 / 0;                                                        // Infinity
Math.pow(123123123, 9123192391023);                           // Infinity
Number.MAX_VALUE * 2;                                         // Infinity
23 / Infinity;                                                // 0
-Infinity;                                                    // -Infinity
-Infinity === Number.NEGATIVE_INFINITY;                       // true
-0;                                                           // -0 , 
0 === -0;                                                     // true
1 / -0;                                                       // -Infinity
1 / 0 === 1 / -0;                                             // false
Infinity + Infinity;                                          // Infinity
let a = 0, b = -0;                                        
a === b;                                                      // true
1 / a === 1 / b;                                              // false