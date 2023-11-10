// Chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9.
// Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer.
// Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

// chiediamo all'utente se vuole sceglie pari o dispari
const userChoice = prompt('Choose odd or even...');
const userNumber = parseInt( prompt('Type a number between 1 and 9') ); // trasformo in un intero la stringa data dall'utente

// generiamo un numero randomico tra 1 e 9 compresi per il computer
const aiNumber = Math.floor( Math.random() * 9 ) + 1;

// ? il risultato e' pari o dispari?
const result = userNumber + aiNumber;

let oddOrEven;

// il numero sara' pari se e' divisibile per 2
if ( result % 2 === 0 ){    // il risultato e' pari
    oddOrEven = 'even';
} else {     // il risulato e' dispari
    oddOrEven = 'odd';
}

console.log(userChoice, userNumber, aiNumber, result, oddOrEven);

if (userChoice === oddOrEven){
    console.log('User wins!!')
} else {
    console.log('USER LOSE, I AM THE MACHINE, I AM EVERYTHING! I WON!');
}

