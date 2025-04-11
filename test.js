// test.js

const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Test de suma
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

// Test de conversión Euro -> Dólar
test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745); // 3.5 * 1.07
});

// Test de conversión Dólar -> Yen
test("One dollar should be about 146.26 yen", () => {
    const yenes = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5; // 1 USD convertido a yen
    expect(yenes).toBeCloseTo(expected); // usamos toBeCloseTo para decimales
});

// Test de conversión Yen -> Libra
test("One yen should be about 0.00556 pounds", () => {
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87; // 1 yen convertido a libra
    expect(pounds).toBeCloseTo(expected); // usamos toBeCloseTo también
});
