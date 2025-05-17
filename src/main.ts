//! Snack 1
let dato: unknown;
switch (typeof dato) {
    case "string":
        dato = dato.toUpperCase();
        break;
    case "number":
        dato = dato * 2;
        break;
    case "boolean":
        if (dato === true) {
            console.log("Si");
        } else {
            console.log("No");
        }
        break;
    default:
        console.log("Tipo non supportato");
}


//! 🏆 Snack 1
//* Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia…
//* Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
//todo     Se è una stringa: stampala in maiuscolo
//todo     Se è un numero: moltiplicalo per due e stampalo
//todo    Se è un booleano: stampa “Sì” o “No” in base al suo valore
//todo     In tutti gli altri casi: stampa “Tipo non supportato”
//! 🎯 BONUS
//?     Se è null: stampa “Il dato è vuoto”
//?     Se è un array: stampa la sua lunghezza
//?     Se è una Promise: attendi che si risolva e stampa il valore del resolve.