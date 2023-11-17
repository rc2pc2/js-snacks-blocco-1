const userNumber = prompt('Inserisci un numero di almeno 7 cifre').trim();

// ? soluzione usando array e String.split()
// const digitsArray = userNumber.split('');

// console.log(digitsArray);
// let somma = 0;

// for (let i=0; i < digitsArray.length ; i++){
//     somma = somma + parseInt(digitsArray[i]);
// }

// console.log(somma);

let somma = 0;

// % soluzione usando le stringhe
for (let index = 0; index < userNumber.length; index++) {
    // somma = somma + parseInt(userNumber.charAt(index));
    somma += parseInt(userNumber.charAt(index))
}

console.log(somma);