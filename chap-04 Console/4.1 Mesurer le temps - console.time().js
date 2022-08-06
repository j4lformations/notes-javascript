/*
    console.time() peut être utilisé pour mesurer la durée d'exécution d'une tâche dans votre code.

    L'appel de console.time([label]) démarre une nouvelle minuterie. Lorsque console.timeEnd([label]) est appelé, le temps écoulé, en millisecondes, depuis l'appel .time() d'origine est calculé et enregistré.

    En raison de ce comportement, vous pouvez appeler.timeEnd() plusieurs fois avec la même étiquette pour enregistrer le temps écoulé depuis l'appel .time() d'origine.
*/

console.time('TEMPS');
console.log('Affiche moi et continue');
console.timeEnd('TEMPS');

console.time('TEMPS');
console.log('Affiche moi et arrete');
console.timeEnd('TEMPS');

console.time('TEMPS BOUCLE FOR');
for (let i = 0; i < 25000; i++) {
    i * i;
    for (let j = 0; j < 25000; j++) {
        j * j;
    }
}
console.timeEnd('TEMPS BOUCLE FOR');

/*
    Dans la plupart des environnements, console.table() peut être utilisé pour afficher des objets
    et des tableaux dans un format tabulaire
*/

console.table(['Bonjour', 'Joachim']);

var personnes = [
    {
        "Id": 123,
        "Nom": "Jhon",
        "Ville": "Melbourne",
        "Telephone": "1234567890"
    },
    {
        "Id": 124,
        "Nom": "Amelia",
        "Ville": "Sydney",
        "Telephone": "1234567890"
    },
    {
        "Id": 125,
        "Nom": "Emily",
        "Ville": "Perth",
        "Telephone": "1234567890"
    },
    {
        "Id": 126,
        "Nom": "Abraham",
        "Ville": "Perth",
        "Telephone": "1234567890"
    }
];

console.table(personnes);