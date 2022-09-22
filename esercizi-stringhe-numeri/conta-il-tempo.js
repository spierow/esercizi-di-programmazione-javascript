/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

let input = 12599;
let ora = input / 3600;
let minuti = input/60%60;
let secondi = input%60;

console.log(`${Math.floor(ora)} ore`);
console.log(`${Math.floor(minuti)} minuti`);
console.log(`${Math.floor(secondi)} secondi`);