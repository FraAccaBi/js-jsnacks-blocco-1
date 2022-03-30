/*
SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

let myArray = []

for (let i = 0; i < 6; i++){
    let numero = Number(prompt('inserisci un numero'));
    if (numero%2 == 1) {
        myArray.push(numero);
    } 
}

console.log(myArray);


