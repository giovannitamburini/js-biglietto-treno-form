/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio,
 secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e
un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in
pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo
dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire
per il secondo milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile,
ma in ogni caso cercate di farla vostra.
*/

/*PSEUDO CODICE

-chiedi all'utente nome e cognome tramite input e memorizza(per MILESTONE 2)

-chiedi all'utente il numero di km tramite input e memorizza
-chiedi all'utente l'età tramite input e memorizza

-calcola il prezzo intermedio del biglietto senza sconti (km * 0.21)

-calcola il prezzo finale del biglietto in base all'età:
? SE l'età è inferiore a 18 anni
  °stampa prezzo biglietto con sconto del 20%

? ALTRIMENTI SE l'età è inferiore ai 65 anni
  °stampa prezzo biglietto privo di sconto

  ALTRIMENTI (cioè l'età è pari o superiore ai 65)
  °stampa prezzo del biglietto con sconto del 40%.

*/


let inputAge = document.getElementById("userAge");

let inputKm = document.getElementById('userKm');

let myButton = document.getElementById("userButton");

let firstPrice;
let finalPrice;

/*-------------------------
MILESTONE 1
-------------------------*/


//aggiungo un evento click
myButton.addEventListener('click', function() {

    console.log(inputAge.value);
    console.log(inputKm.value);

    let firstPrice = (inputKm.value * 0.21);

    console.log (firstPrice);

    if (inputAge.value < 18) {

        finalPrice = ((firstPrice / 100) * 80);

        console.log (finalPrice.toFixed(2));

    } else if (inputAge.value < 65) {

        finalPrice = firstPrice;

        console.log (finalPrice);

    } else {

        finalPrice = ((firstPrice / 100) * 60);

        console.log (finalPrice);
    }
} )


/*-------------------------
MILESTONE 2
-------------------------*/

//aggiungo un evento click
myButton.addEventListener('click', function() {

    let firstPrice = (inputKm.value * 0.21);

    if (inputAge.value < 18) {

        finalPrice = ((firstPrice / 100) * 80);

        document.writeln(`prezzo intero del biglietto: ${firstPrice.toFixed(2)}. <br>
        per gli under 18 è previsto uno sconto del 20%. <br>
        prezzo finale del biglietto: ${finalPrice.toFixed(2)}
        `)

    } else if (inputAge.value < 65) {

        finalPrice = firstPrice;

        document.writeln(`prezzo intero del biglietto: ${firstPrice.toFixed(2)}. <br>
        per gli under 65 non è previsto uno sconto. <br>
        prezzo finale del biglietto: ${finalPrice.toFixed(2)}.
        `)

    } else {

        finalPrice = ((firstPrice / 100) * 60);

        document.writeln(`prezzo intero del biglietto: ${firstPrice.toFixed(2)}. <br>
        per gli over 65 è previsto uno sconto pari al 40%. <br>
        prezzo finale del biglietto: ${finalPrice.toFixed(2)}.
        `)
    }
} )
