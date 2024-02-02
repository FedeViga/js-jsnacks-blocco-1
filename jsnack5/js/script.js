// Stampa il cubo dei primi N numeri,
// (partendo da 1, il numero N indicato dall'utente è compreso)
// dove N è un numero indicato dall’utente.


// inzializzo elementi html
const inputElement = document.querySelector("#inputnumber");
const buttonElement = document.querySelector("#button");


// creo evento al click del pulsante che calcola i cubi dei numeri da 1 a N
buttonElement.addEventListener('click' ,
    function() {
        
        const N = inputElement.value;
        console.log(N);
        let array = [];

        // se il numero è minore di 100 procedo 
        if (N < 100) {

            // ciclo for per inserire i numeri da 1 a N nell'array e per calcolarne i cubi
            for (let i = 1; i <= N; i++) {
                array[i - 1] = Math.pow(i, 3);
                document.querySelector("#result").innerHTML = array;
            }
        }
    }
)