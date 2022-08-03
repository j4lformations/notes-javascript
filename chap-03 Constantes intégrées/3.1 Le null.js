/*
    null est utilisé pour représenter l'absence intentionnelle d'une valeur d'objet et est une valeur primitive.
    Contrairement à indéfini, ce n'est pas une propriété de l'objet global.
    Il est égal à undefined mais pas identique à lui.
*/

null == undefined;                                  // => true
null === undefined;                                 // => false

typeof null;                                        // => object

console.log(typeof null);
