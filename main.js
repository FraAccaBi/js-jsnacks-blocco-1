/*  
SNACK 1 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

/* const first_number = Number(prompt('inserisci un numero'));
const second_number = Number(prompt('inserisci un altro numero'));

if (first_number > second_number) {
    console.log('il primo numero è maggiore');
} else if (second_number > first_number) {
    console.log('il secondo numero è maggiore');
} else {
    console.log('i numeri sono uguali');
} */

/* 
SNACK 2 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */

const prima_parola = prompt('scrivi una parola');
const seconda_parola = prompt("scrivi un'altra parola");

if (prima_parola.length > seconda_parola.length){
    console.log('la prima parola è più lunga');
} else if (seconda_parola.length > prima_parola.length) {
    console.log('la seconda parola è più lunga');
} else {
    console.log('le due parole sono lunghe uguali');
}