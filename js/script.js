console.log('JS ok');

/* 
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).

1-Chiedo nome e cognome
2-Chiedo i km da percorrere
3-Chiedo l'età
*/

//* Chiedo i dati
// Const input
const userName = document.getElementById('name-input').value;
const userDistance = document.getElementById('distance-input').value;
const userAge = document.getElementById('age-input').value;
const buttonGenerate = document.getElementById('generate');
const buttonClear = document.getElementById('clear');
// Const Show
const showName = document.getElementById('show-name');
const showPrice = document.getElementById('show-price');

console.log('User Name: ', userName);
console.log('User KM: ', userDistance);
console.log('User Age: ', userAge);


//* Creo variabili per il prezzo del biglietto
let ticketPrice;
let finalPrice;

//* Creo evento al click con calcolo prezzo e stampa
buttonGenerate.addEventListener ('click', function() {

// Calcolo prezzo iniziale del biglietto 
let ticketPrice = userDistance * 0.21;
let finalPrice;

// Controllo l'età del passegero
if (userAge == 'no-age') {
   alert("Seleziona l'età");
} else if (userAge == 'under-age') {
   finalPrice = ticketPrice * 0.8;
} else if (userAge == 'old-age') {
   finalPrice = ticketPrice * 0.6;
} else {
   finalPrice = ticketPrice;
}

//* Controllo che in console sia tutto giusto
console.log('User Name: ', userName);
console.log('User KM: ', userDistance);
console.log('User Age: ', userAge);
console.log('Ticket price: ', finalPrice);

//* Mostro risultati in pagina
showName.innerText = userName;
showPrice.innerText = finalPrice.toFixed(2);
})

//* Resetto i campi di input
buttonClear.addEventListener ('click', function() {
userName = '';
userDistance = '';
userAge = 'no-age';
})

