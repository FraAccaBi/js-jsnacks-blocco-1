/* 
SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const lista = ['Fra', 'Riccardo', 'Elisa', 'Marco', 'Martina','Fabio']
let nome = prompt('inserisci il tuo nome')
let presenza = false;

for (let i = 0; i < lista.length; i++) {
    if (nome == lista[i]) {
        console.log('puoi entrare');
        presence = true;
    }  
    
}
if (!presenza) {
    console.log('non sei in lista');
}

