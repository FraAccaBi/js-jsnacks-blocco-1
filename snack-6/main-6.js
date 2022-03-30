/*
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
*/
let numero = Number(prompt('Inserisci un numero'));
let cuboArray = [];

for (let i = 0; i < numero; numero--){
if (i < numero) {
    let cubo = numero * numero * numero;
    cuboArray.push(cubo)
    console.log(cuboArray);
}
}