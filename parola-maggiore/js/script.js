
const firstWord = prompt('Inserisci la prima parola');
const secondWord = prompt('Inserisci la seconda parola');

// const isFirstWordLonger = firstWord.length > secondWord.length;

if ( firstWord.length >= secondWord.length ) {
    console.log(secondWord, firstWord);
} else {
    console.log(firstWord, secondWord);
}