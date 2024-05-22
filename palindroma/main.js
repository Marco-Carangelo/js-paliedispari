'use strict'

//Chiediamo all'utente di inserire una parola e la inseriamo in una variabile
let userInput = prompt("Inserisci una parola o frase per verificare se è palindroma");

//Validiamo l'input assicurandoci che non ci siano spazi prima e dopo la stringa inserita tramite il metodo trim
userInput = userInput.trim();

//Struttura che gestisce le due possibili risposte in base al risultato della funzione

if (palindrome(userInput)) {

    alert(`La parola ${userInput} è palindroma`);

} else {

    alert(`La parola ${userInput} non è palindroma`);


}

//Definiamo la funzione che verificherà se la parola è palindroma

function palindrome(userString) {

    //Creiamo una variabile per il risultato e la inizializziamo con il valore true
    let result = true;

    //Trasformiamo la stringa in caratteri minuscoli per evitare risultati falsati
    userString = userString.toLowerCase();

    //Cancelliamo eventuali spazi interni della stringa per poterla far funzionare anche con delle frasi
    userString = userString.replace(/\s+/g, '');

    //Creiamo un ciclo For per confrontare i caratteri della stringa

    for (let i = 0; i < (userString.length / 2); i++) {

        //Non appena vengono confrontati due valori diversi, viene assegnato a result il valore false ed il ciclo viene interrotto
        //Se non ci sono valori diversi tra le due parti della stringa il valore rimane True e quindi viene restituito che è palindroma
        if (userString.at(i) != userString.at(-(i + 1))) {

            result = false;
            break;

        }


    }

    return result;

}







