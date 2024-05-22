Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Risoluzione:

- Per prima cosa chiediamo una parola in input all'utente e la salviamo in una variabile.
- Dovendo lavorare sui singoli caratteri della stringa potrebbe essere utile utilizzare una funzione elimini spazi inseriti per sbaglio dall'utente prima e dopo la parola
- Trasformiamo tutta la stringa in minuscolo, in modo che eventuali iniziali maiuscole non falsino il risultato
- Possiamo procedere impostando un ciclo For che confronti la prima lettera della stringa con l'ultima nel primo ciclo, la seconda lettera con la penultima nel secondo e prosegua fino alla metà della lunghezza della stringa.
Se la stringa è di lunghezza dispari non è un problema, in quanto il carattere al centro resterebbe nella stessa posizione anche invertendola, quindi si può immaginare una stringa composta da 6 carateri come 3+3, una stringa composta da 7 caratteri come 3+1+3, in entrambi i casi vengono confrontanti sempre i gruppi da 3 caratteri. 
Per impostare il valore massimo del contatore bisognerà ignorare l'eventuale resto della divisione di un numero dispari.
- Possiamo creare una funzione che restituisca un valore booleano, in modo da gestire i due possibili risultati con una struttura If Else