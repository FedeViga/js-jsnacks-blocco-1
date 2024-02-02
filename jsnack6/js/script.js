// Calcola la somma e la media dei primi 10 numeri.

// inizializzo l'array e il bottone
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const buttonElement = document.querySelector("#button");
console.log(buttonElement);

// creo funzione che al click del bottone calcola la somma e la media e le stampa in pagina
buttonElement.addEventListener('click', 
    function() {

        let sum = 0;
        let mean = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        mean = sum / 10;

        document.querySelector("#result").innerHTML = `La somma dei numeri da 1 a 10 è pari a ${sum}, mentre la media è pari a ${mean}`;
    }

)
