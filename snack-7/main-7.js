/* 
Stampa le potenze di 2 fino a 1000.
*/

let potenzeArray = [];

let potenza = 0;

for (let i = 0; potenza < 1000; i++){

    potenza = Math.pow(2, i);
    
    if (potenza < 1000){
        potenzeArray.push(potenza);
    }

}

console.log(potenzeArray);