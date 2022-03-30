/*
 SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti

*/

let somma = 0

for (let i = 0; i < 10; i++ ) {
    let numero = Number(prompt('inserisci numero'))
    somma = somma + numero
    console.log(somma);
}
console.log(`la somma totale dei numeri è ${somma}`);