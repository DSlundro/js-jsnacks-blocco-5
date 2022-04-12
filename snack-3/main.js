// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

// creo la constante
console.log(`
Questa è la parola originale`);
const stringa = 'Ciao'
console.log(stringa);

// creo la funzione per invertire la stringa
function reverseString(string) {
    // creo una variabile dove inserirò la stringa
    let reverseString = '';
    // creo un ciclo per ottenere la lunghezza della stringa partendo dall'ultima lettera fino alla prima
    for (let i = stringa.length - 1; i >= 0; i--) {
    // aggiungo ogni lettera nella variabile creata prima
    reverseString += stringa[i];
    }
    return reverseString;
}

console.log(`
Questa è la parola invertita`);
const reverse = reverseString(stringa);
console.log(reverse);