// ? In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (createlo voi con almeno 5 nomi), chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const guestList = [
    'Mario Il Falegname',
    'Ginevra La Taglialegna',
    'Johnny Il Pizzettaro',
    'Lorenza La Pianista',
    'Cesco',
    'Sora Lella'
];

const userName = prompt('Inserisci il tuo nome');
let answer = false;

for (let index = 0; index < guestList.length; index++) {
    const guest = guestList[index];

    if (guest.toLowerCase().trim() == userName.toLowerCase().trim()) {
        answer = true;
    }
}

console.log(answer);
