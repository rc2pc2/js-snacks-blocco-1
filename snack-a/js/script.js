const array = []

for (let i =0; i < 6; i++){
    const userNumber = prompt('inserisci un nuovo numero');
    if (userNumber % 2 !== 0){
        array.push(userNumber);
    }
}

console.log(array);