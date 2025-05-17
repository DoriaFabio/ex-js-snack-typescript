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