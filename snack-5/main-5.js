/*
SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

let myArray = []

let numero = Number(prompt('inserisci un numero'))

if (numero%0 == true) {
    numero = Number(prompt('inserisci un altro numero'))
    
} else {
    myArray.push(numero)
    console.log(myArray);
}