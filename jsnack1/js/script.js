// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.



const firstWord = prompt("Inserisci la prima parola");
const secondWord = prompt("Inserisci la seconda parola");

if (firstWord.length > secondWord.length) {
    document.querySelector("#result").innerHTML = `La parola "${firstWord}" è più lunga della parola "${secondWord}."`;
} else if (firstWord.length < secondWord.length) {
    document.querySelector("#result").innerHTML = `La parola "${firstWord}" è più corta della parola "${secondWord}."`;
} else {
    document.querySelector("#result").innerHTML = `Le parole "${firstWord}" e "${secondWord}" hanno la stessa lunghezza.`;
}