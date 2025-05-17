//! Snack 1
let dato: unknown;
switch (typeof dato) {
    case "string":
        console.log(dato.toUpperCase());
        break;
    case "number":
        console.log(dato * 2);
        break;
    case "boolean":
        if (dato === true) {
            console.log("Si");
        } else {
            console.log("No");
        }
        break;
    default:
        if (dato === null) {
            console.log("Il dato è vuoto");
        } else if (Array.isArray(dato)) {
            console.log(dato.length);
        } else if (dato instanceof Promise) {
            dato.then((msg) => console.log(msg))
        } else {
            console.log("Tipo non supportato");
        }
}

//! Snack 2
type Dipendente = {
    nome: string,
    cognome: string,
    annoNascita: number,
    sesso: "m" | "f",
    anniDiServizio: number[],
    readonly emailAziendale: string,
    contratto: "indeterminato" | "determinato" | "freelance"
}


//! Snack 3



//! 🏆 Snack 3
//* Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:
//todo   Developer
//?         livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
//?         linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
//?         certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
//todo   ProjectManager
//?         teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
//?         budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
//?         stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).
//! 🎯 BONUS
//* Definiamo un nuovo type alias Team, che rappresenta un gruppo di lavoro all'interno dell'azienda:
//?     nome → Nome del team (stringa).
//?     progettoAttuale → Nome del progetto su cui lavora il team (può essere null se il team è in attesa di assegnazione).
//?     budget → Importo numerico del budget assegnato al team (sempre presente).
//?     membri → Una tuple in cui il primo elemento è sempre un Project Manager, seguito da uno o più Developers (almeno un developer obbligatorio).
