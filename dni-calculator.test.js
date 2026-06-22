/**
 * @jest-environment jsdom
 */

const { LETRAS_DNI } = require('./dni-calculator');

describe('Kata DNI - Tests Unitarios de Escenarios BDD', () => {
    let dniInput, btnCalculate, resultMessage;

    // Antes de cada test, simulamos el HTML en un entorno virtual
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="text" id="dni-input">
            <button id="btn-calculate">Calcular Letra</button>
            <p id="result-message"></p>
        `;

        // Volvemos a requerir la lógica limpia para el entorno virtual
        jest.resetModules();
        require('./dni-calculator');

        dniInput = document.getElementById('dni-input');
        btnCalculate = document.getElementById('btn-calculate');
        resultMessage = document.getElementById('result-message');
    });

    // SCENARIO: DNI válido
    test('Debe devolver la letra correspondiente según el módulo 23 para un DNI válido', () => {
        dniInput.value = '12345678';
        btnCalculate.click(); // Simulamos el clic

        expect(resultMessage.textContent).toContain('Tu NIF es: 12345678-Z');
        expect(resultMessage.style.color).toBe('green');
    });

    // SCENARIO: Número fuera de rango (Menor que 0)
    test('Debe mostrar error si el número es menor que 0', () => {
        dniInput.value = '-5';
        btnCalculate.click();

        expect(resultMessage.textContent).toBe('El dato introducido es incorrecto.');
        expect(resultMessage.style.color).toBe('red');
    });

    // SCENARIO: Número fuera de rango (Mayor que 99999999)
    test('Debe mostrar error si el número es mayor que 99999999', () => {
        dniInput.value = '100000000';
        btnCalculate.click();

        expect(resultMessage.textContent).toBe('El dato introducido es incorrecto.');
        expect(resultMessage.style.color).toBe('red');
    });

    // SCENARIO: Dato no numérico
    test('Debe mostrar error si se introducen caracteres no numéricos', () => {
        dniInput.value = 'abc';
        btnCalculate.click();

        expect(resultMessage.textContent).toBe('El dato introducido es incorrecto.');
        expect(resultMessage.style.color).toBe('red');
    });
});