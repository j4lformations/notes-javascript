/*
    À première vue, il peut sembler que null et undefined sont fondamentalement les mêmes,
    mais il existe des différences subtiles mais importantes.

    undefined est l'absence de valeur pour le compilateur, car là où il devrait y avoir une valeur, il n'y en a pas eu, comme dans le cas d'une variable non affectée.
*/

// undefined est une valeur globale qui représente l'absence d'une valeur assignée
typeof undefined; // => undefined;

// null est un objet qui indique qu'une variable a été explicitement assignée "aucune valeur".
typeof null; // => object;

/*
    Définir une variable sur undefined signifie que la variable n'est pas assigné. 
    
    Certains processus, tels que la sérialisation JSON, peuvent supprimer les propriétés non assignées des objets. 
    
    En revanche, les propriétés nulles indiquées seront conservées afin que vous puissiez transmettre explicitement le concept de propriété "vide".
*/

// Les éléments suivants sont évalués à undefined
let uneVariable;
console.log("est undefined", uneVariable === undefined);        // => true

uneVariable = { prenom: "Joachim" };
console.log("est undefined", uneVariable.nom === undefined);    // => true

function maFonction() {
  return;
}
console.log("est undefined", maFonction() === undefined);       // => true

function autreFonction(parametre) {
  console.log("est undefined", parametre === undefined);        // => true
}
autreFonction('a');                                             // => false
autreFonction();                                                // => true