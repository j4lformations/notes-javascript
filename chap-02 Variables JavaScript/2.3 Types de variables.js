// ON UTILISE LE MOT CLE TYPEOF POUR CONNAITRE LE TYPE D'UNE VARIABLE

let nonDefinie;                                                             // => undefined

let monNombre = 12;                                                         // => number
monNombre = 9310141419482;                                                  // => number
monNombre = 5.5;                                                            // => number
monNombre = 9310141419474.35;                                               // => number

let monBooleen = true;                                                      // => boolean
monBooleen = false;                                                         // => boolean

let maChaine = "Joachim";                                                   // => string
maChaine = 'Ange';                                                          // => string
maChaine = `Bonjour ${maChaine}`;                                           // => string

let monTableau = [];                                                        // => object
monTableau = ["apple", "orange", "strawberry"];                             // => object
monTableau = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];                      // => object
monTableau = [2, "tout type fonctionne", undefined, null, true, 2.51];      // => object

let monObjet = {};                                                          // => object
monObjet = {prenom: "Joachim", nom: "Zadi", nomComplet: "Joachim Zadi"};    // => object

console.log(typeof monObjet);


