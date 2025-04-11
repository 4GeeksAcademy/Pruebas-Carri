// app.js

// One euro is:
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

// Función de ejemplo para testear suma
const sum = (a, b) => {
    return a + b;
}

// fromEuroToDollar
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// fromDollarToYen
const fromDollarToYen = (dollars) => {
    let euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
}

// fromYenToPound
const fromYenToPound = (yen) => {
    let euros = yen / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"];
}

// Exportamos todas las funciones
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
