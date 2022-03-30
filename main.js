/*  
SNACK 1 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

const first_number = Number(prompt('inserisci un numero'));
const second_number = Number(prompt('inserisci un altro numero'));

if (first_number > second_number) {
    console.log('il primo numero è maggiore');
} else  {
    console.log('il secondo numero è maggiore');
}