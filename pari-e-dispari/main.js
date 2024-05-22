'use strict'

const mainForm = document.getElementById('main-form')
//console.log(mainForm);

mainForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //Acquisiamo i dati dell'utente
    const userGuess = document.getElementById('user-guess');
    const userNumber = document.getElementById('user-number');

    //Definiamo una variabile booleana per salvare la scelta dell'utente
    let userGuessBoolean = false;

    if (userGuess.value === 'pari') {
        userGuessBoolean = true;

    }

    //Convertiamo l'input dell'utente da stringa a numero e definiamo una variabile per conservarne il valore

    const userNumberInt = Number(userNumber.value);

    //definiamo una funzione per creare un numero random

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Creiamo il numero random per il computer e salviamolo in una variabile

    const cpuRandom = getRndInteger(1, 5);
    console.log(cpuRandom)

    //Sommiamo i valori dei due numeri e salviamoli in una variabile
    const sum = userNumberInt + cpuRandom;

    // creiamo una funzione che verifichi che la somma sia pari o dispari e che restituisca un valore booleano

    function pari(num) {
        let result = false;
        if (num % 2 === 0) {
            result = true;

        }
        return result;
    }

    // Salviamo il risultato della funzione in una variabile booleana

    const gameResult = pari(sum);

    // Verifichiamo se l'utente ha vinto e stampiamo il risultato in pagina

    const resultPrint = document.getElementById('result');

    if (gameResult === userGuessBoolean) {

        resultPrint.innerText = 'Complimenti hai vinto!';

    } else {

        resultPrint.innerText = 'Mi dispiace hai perso!';


    }









});

