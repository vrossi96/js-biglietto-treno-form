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
const userName = document.getElementById('name-input');
const userDistance = document.getElementById('distance-input');
const userAge = document.getElementById('age-input');
const buttonGenerate = document.getElementById('generate');
const buttonClear = document.getElementById('clear');
// Const Show
const showName = document.getElementById('show-name');
const showTicketType = document.getElementById('show-ticket-type');
const showWagon = document.getElementById('show-wagon');
const showCP = document.getElementById('show-cp');
const showPrice = document.getElementById('show-price');


//* Creo variabili per il prezzo del biglietto
let ticketPrice;
let finalPrice;
let ticketType;
let wagonNumber;
let ticketCP;

//* Creo evento al click con calcolo prezzo e stampa
buttonGenerate.addEventListener ('click', function() {
let userNameV = userName.value;
let userDistanceV = userDistance.value;
let userAgeV = userAge.value;

if (!userNameV || !isNaN(userNameV) || userDistanceV <= 0 || isNaN(userDistanceV)) {
   alert('Controllare i dati inseriti');
} else {
   // Calcolo prezzo iniziale del biglietto 
   let ticketPrice = userDistanceV * 0.21;
   let finalPrice;
   wagonNumber = Math.floor(Math.random() * 12) + 1;
   ticketCP = Math.floor(Math.random() * 100000) + 1;
   
   // Controllo l'età del passegero
   if (userAgeV == 'no-age') {
      alert("Seleziona l'età");
   } else if (userAgeV == 'under-age') {
      finalPrice = ticketPrice * 0.8;
      ticketType = 'Biglietto UNDER';
   } else if (userAgeV == 'old-age') {
      finalPrice = ticketPrice * 0.6;
      ticketType = 'Biglietto OVER';
   } else {
      finalPrice = ticketPrice;
      ticketType = 'Biglietto STANDARD';
   }
   
   //* Controllo che in console sia tutto giusto
   console.log('User Name: ', userNameV);
   console.log('User KM: ', userDistanceV);
   console.log('User Age: ', userAgeV);
   console.log('Ticket price: ', finalPrice);
   console.log('Ticket type: ', ticketType);
   
   //* Mostro risultati in pagina
   showName.innerText = userNameV.trim();
   showPrice.innerText = finalPrice.toFixed(2);
   showTicketType.innerText = ticketType;
   showWagon.innerText = wagonNumber;
   showCP.innerText = ticketCP;
}

})

//* Resetto i campi di input
buttonClear.addEventListener ('click', function() {
userName.value = '';
userDistance.value = '';
userAge.value = 'no-age';
})

