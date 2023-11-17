
let numeroA = parseInt(prompt('Inserisci un numero di almeno due cifre'));
let numeroB = parseInt(prompt('Inserisci un numero di almeno quattro cifre'));

let numeroFinale = numeroA;

// for (let i = numeroA ; i <= numeroB ; i= i * 2 ) {
//     if ( i >= numeroB / 2){
//         numeroFinale = i;
//     }
//     console.log(i);
// }

// console.log('Il numero finale e\':', numeroFinale * 2);

for (let i = 0 ; i < 1 ; i++){
    numeroFinale = numeroFinale * 2;
    if (numeroFinale < numeroB){
        i--; // ? i = i - 1;
    }
    console.log('Valore della moltiplicazione per due:', numeroFinale);
}

console.warn('Risultato:', numeroFinale);