const {add} = require('./calculator');

describe('Pruebas en el componente calculadora', () => {

    test('Prueba en la función sumar', () => {
        expect(add(3, 5)).toBe(8);
    });
});

const {subtract} = require('./calculator');

describe('Pruebas en el componente calculadora', () => {
    test('Prueba en la función restar', () => {
        expect(subtract(20, 10)).toBe(10);
    });
});

const {multiply} = require('./calculator');

describe('Pruebas en el componente calculadora', () => {
    test('Prueba en la función multiplicar', () => {
        expect(multiply(10, 10)).toBe(100);
    });
});

const {divide} = require('./calculator');

describe('Pruebas en el componente calculadora', () => {
    test('Prueba en la función multiplicar', () => {
        expect(divide(20, 2)).toBe(10);
    });
});
