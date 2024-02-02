// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


// ininializzo array e somma vuoti
let array = [];
let sum = 0;


// genero array chiedendo all'utente di inserire 10 numeri
for (i = 0; i < 10; i++) {
    array[i] = prompt("inserisci un numero");
}

// faccio la somma dei numeri
for (i = 0; i < array.length; i++) {
    sum = sum + Number(array[i]);
}

// controllo se la somma è un numero e stampo il risultato
if (isNaN(sum)) {
    document.querySelector("#result").innerHTML = `Impossibile calcolare la somma, inserire solo numeri`;
} else {
    document.querySelector("#result").innerHTML = `La somma dei numeri inseriti è : ${sum}`;
}


