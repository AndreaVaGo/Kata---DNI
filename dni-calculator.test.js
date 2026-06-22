import { describe, test, expect, beforeEach } from 'vitest';

// Importamos la función usando rutas y require completo de objeto
const calculator = require('./dni-calculator');

describe('Kata DNI - Tests Unitarios con Vitest', () => {
    let dniInput, btnCalculate, resultMessage;

    
    beforeEach(() => {
        // 1. Montamos el DOM virtual
        document.body.innerHTML = `
            <input type="text" id="dni-input">
            <button id="btn-calculate">Calcular Letra</button>
            <p id="result-message"></p>
        `;

        // 2. Conectamos los eventos llamando a la función desde el módulo cargado
        calculator.inicializarCalculadora();

        dniInput = document.getElementById('dni-input');
        btnCalculate = document.getElementById('btn-calculate');
        resultMessage = document.getElementById('result-message');
    });


    test('Debe devolver la letra correspondiente según el módulo 23 para un DNI válido', () => {
        dniInput.value = '12345678';
        btnCalculate.click(); 
        expect(resultMessage.textContent).toContain('Tu NIF es: 12345678-Z');
        expect(resultMessage.style.color).toBe('green');
    });


    test('Debe mostrar error si el número es menor que 0', () => {
        dniInput.value = '-5';
        btnCalculate.click();

        expect(resultMessage.textContent).toBe('El dato introducido es incorrecto.');
        expect(resultMessage.style.color).toBe('red');
    });


    test('Debe mostrar error si el número es mayor que 99999999', () => {
        dniInput.value = '100000000';
        btnCalculate.click();

        expect(resultMessage.textContent).toBe('El dato introducido es incorrecto.');
        expect(resultMessage.style.color).toBe('red');
    });


    test('Debe mostrar error si se introducen caracteres no numéricos', () => {
        dniInput.value = 'abc';
        btnCalculate.click();

        expect(resultMessage.textContent).toBe('El dato introducido es incorrecto.');
        expect(resultMessage.style.color).toBe('red');
    });
});