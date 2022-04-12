// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// creo un array di 10 oggetti
const zucchine = 
[
    {
        varieta: 'bau',
        peso: '130',
        lunghezza: '12',
    },
    {
        varieta: 'mau',
        peso: '100',
        lunghezza: '10',
    },
    {
        varieta: 'mau',
        peso: '110',
        lunghezza: '11',
    },
    {
        varieta: 'mau',
        peso: '102',
        lunghezza: '17',
    },
    {
        varieta: 'mau',
        peso: '106',
        lunghezza: '10',
    },
    {
        varieta: 'mau',
        peso: '150',
        lunghezza: '10',
    },
    {
        varieta: 'mau',
        peso: '100',
        lunghezza: '10',
    },
    {
        varieta: 'mau',
        peso: '180',
        lunghezza: '10',
    },
    {
        varieta: 'mau',
        peso: '150',
        lunghezza: '15',
    },
    {
        varieta: 'mau',
        peso: '80',
        lunghezza: '8',
    },
]

/* // creo una costante per la somma delle zucchine
let pesoTotale = 0;

//ciclo per estrarre i pesi delel zucchine
for (let i = 0; i < zucchine.length; i++) {
    let { peso } = zucchine[i];
    pesoTotale += Number(peso);
// console.log(`Peso: ${peso} g`);
}
console.log(`
Peso totale delle Zucchine:     ${pesoTotale} g     =>  ${pesoTotale / 1000} kg`);
 */

let somma = 0;
zucchine.forEach(zucchina =>{
// console.log(zucchina.peso);
    somma += Number(zucchina.peso);
        
    });
console.log(`
Peso totale delle zucchine:     ${somma} g     =>  ${somma / 1000} kg`);