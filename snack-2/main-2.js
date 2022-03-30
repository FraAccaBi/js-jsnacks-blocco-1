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