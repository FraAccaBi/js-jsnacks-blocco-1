/* 
Calcola la somma e la media dei primi 10 numeri. 
*/

/* let numeriArray = [];

let somma = 0

for (let numero = 0; numero <= 10; numero++){
    numeriArray.push(numero);  
    somma += numeriArray[numero];
}

console.log(numeriArray);

console.log(somma);

let media = somma / (numeriArray.length - 1);
console.log(media); */

let somma = 0;
let media = 0;

for (let i= 1; i<=10; i++){
    somma += i;

}
media = somma / 10;
console.log(media);
console.log(somma);