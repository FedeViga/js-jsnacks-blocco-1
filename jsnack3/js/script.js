// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Solo se è dispari inseriscilo nell’array.
// Stampa a schermo il contenuto dell'array


// inizializzo array vuoto e variabile vuota
let array = [];
let number;

// riempio l'array con i numeri insriti dall'utente solo se sono dispari
for (i = 0; i < 6; i++) {

    number = prompt("inserisci un numero");

    if (! isNaN(number) && number % 2 != 0) {
    
        array.push(number);
    }
}

// stampo l'array in pagina
console.log(array)
if (array.length == 0) {
    document.querySelector("#result").innerHTML = `array vuoto`;
} else {
    document.querySelector("#result").innerHTML = `${array}`;
}
