// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


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
        lunghezza: '22',
    },
    {
        varieta: 'mau',
        peso: '110',
        lunghezza: '20',
    },
    {
        varieta: 'mau',
        peso: '102',
        lunghezza: '17',
    },
    {
        varieta: 'mau',
        peso: '106',
        lunghezza: '18',
    },
    {
        varieta: 'mau',
        peso: '150',
        lunghezza: '17',
    },
    {
        varieta: 'mau',
        peso: '100',
        lunghezza: '11',
    },
    {
        varieta: 'mau',
        peso: '180',
        lunghezza: '12',
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

// zucchine lunghezza minore di 15 cm
console.log(`
Zucchine minori di 15 cm`);
const underZucchine = zucchine.filter(zucchina => zucchina.lunghezza < 15);
console.log(underZucchine);

// somma dei pesi delle zucchine minore di 15 cm
let sommaUnder = 0;
underZucchine.forEach(zucchina =>{
// console.log(zucchina.peso);
    sommaUnder += Number(zucchina.peso);
    });
console.log(`Peso totale delle zucchine minori di 15 cm:     ${sommaUnder} g     =>  ${sommaUnder / 1000} kg`);

// zucchine lunghezza maggiore di 15 cm
console.log(`
Zucchine maggiori di 15 cm`);
const overZucchine = zucchine.filter(zucchina => zucchina.lunghezza > 15);
console.log(overZucchine);

// somma dei pesi delle zucchine maggiori di 15 cm
let sommaOver = 0;
overZucchine.forEach(zucchina =>{
// console.log(zucchina.peso);
    sommaOver += Number(zucchina.peso);
    });
console.log(`Peso totale delle zucchine minori di 15 cm:     ${sommaOver} g     =>  ${sommaOver / 1000} kg`);

// peso totale di entrambi i gruppi
console.log(`
Somma totale delle zucchine`);
let sommaTotale = 0;
sommaTotale += Number(sommaOver + sommaUnder);
console.log(sommaTotale);

