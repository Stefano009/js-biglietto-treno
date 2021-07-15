/*
//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
BONUS: introduzione della parte grafica con CSS
*/

var kmToGo = prompt("inserire i km che il passeggero desidera percorrere");
console.log(kmToGo);
var passengerAge = prompt("inserire l'età del passeggero");
console.log(passengerAge);
if (passengerAge<18) {
    discount = 0.8;
} else if (passengerAge>64) {
    discount = 0.6;
} else {
    discount = 1;
}
console.log(discount.toFixed(2))
var ticketPrice = discount * 0.21 * kmToGo;
console.log(ticketPrice.toFixed(2))

document.getElementById("ticket").innerHTML= "il prezzo del tuo biglietto è" + " " + ticketPrice;