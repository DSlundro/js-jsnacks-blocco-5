// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


// creo gli array
console.log(`
Array di lettere`);
const arrayLetters = ['a', 'b', 'c'];
console.log(arrayLetters);

console.log(`
Array di numeri`);
const arrayNumbers = ['1', '2', '3'];
console.log(arrayNumbers);


// creo una costante per inserire i valori mischiati
const toGether = [];
// creo un ciclo per verificare la presenza delle stringhe
for (let i = 0; i < arrayLetters.length; i++) {
    // pusho i valori ottenuti nel array
    toGether.push(arrayNumbers[i]);
    // creo un condizione per verificare la presenza delle stringhe già inserite nel array
    if (toGether.includes(arrayLetters[i])) {
    toGether.push(arrayNumbers[i]);
    } 
    else {
    toGether.push(arrayLetters[i]);
    }
}

console.log(`
Array mischiati`);
console.log(toGether);


