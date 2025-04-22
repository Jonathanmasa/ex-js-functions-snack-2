// 🏆 Snack 1
// Crea una funzione che somma due numeri.
function somma(a, b) {
    return a + b;
}
console.log(somma(5, 5));


// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function sommaDichiarativa(a, b) {
    return a + b;
}
console.log(sommaDichiarativa(8, 5));

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const sommaAnonima = function(a, b) {
    return a + b;
}
console.log(sommaAnonima(2, 5));

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
const sommaArrow = (a, b) => a + b;
console.log(sommaArrow(10, 5));


// 🏆 Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
const quadratoCalc = (num) => num * num;
console.log(quadratoCalc(4));

// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
let quadrato = (num) => num * num;
console.log(quadrato(6));


// 🏆 Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
function eseguiOperazione(num1, num2, operatore) {
    return operatore(num1, num2);
}
console.log(eseguiOperazione(5, 3, somma));


// 🏆 Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
function creaTimer(tempo) {
    return function() {
        setTimeout(() => {
            console.log("Tempo scaduto!");
        }, tempo);
    }
}
const timer = creaTimer(2000); 
timer();


// 🏆 Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
// 🏆 Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

// 🏆 Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
