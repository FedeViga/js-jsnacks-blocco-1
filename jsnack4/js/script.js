// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

// inzializzo elementi html
const inputElement = document.querySelector("#inputnumber");
const buttonElement = document.querySelector("#button");

// creo evento al click del pulsante che calcola la somma delle 4 cifre del numero inserito
buttonElement.addEventListener('click' ,
    function() {
        
        let number;
        let sum = 0;
        number = inputElement.value;

        // se il numero ha 4 cifre calcolo somma
        if (number.length == 4) {

            for (i = 0; i < number.length; i++) {
                sum += Number(number[i]);
            }

            document.querySelector("#result").innerHTML = `la somma delle cifre del numero inerito è : ${sum}`;

        // altrimenti stampo errore
        } else {
            document.querySelector("#result").innerHTML = `ERRORE: inserire un numero di 4 cifre e riprovare`;
        }
    }
)