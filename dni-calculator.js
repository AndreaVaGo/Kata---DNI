const LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

// 1. Función con la lógica de cálculo y validación
function procesarDNI() {
    // Buscamos los elementos dentro de la función para que capturen el DOM del test en tiempo real
    const dniInput = document.getElementById('dni-input');
    const resultMessage = document.getElementById('result-message');

    if (!dniInput || !resultMessage) return;

    let numeroDNI = dniInput.value; 
    let numeroConvertido = parseInt(numeroDNI);

    if (isNaN(numeroConvertido) || numeroConvertido < 0 || numeroConvertido > 99999999) {
        resultMessage.textContent = "El dato introducido es incorrecto.";
        resultMessage.style.color = "red";
    } else {
        let resto = numeroConvertido % 23;
        let letra = LETRAS_DNI[resto];
        resultMessage.textContent = `Tu NIF es: ${numeroConvertido}-${letra}`;
        resultMessage.style.color = "green";
    }
}

// 2. Función contenedora para inicializar los eventos
function inicializarCalculadora() {
    const btnCalculate = document.getElementById('btn-calculate');
    const dniInput = document.getElementById('dni-input');

    if (btnCalculate) {
        btnCalculate.addEventListener('click', procesarDNI);
    }

    if (dniInput) {
        dniInput.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                procesarDNI(); 
            }
        });
    }
}

// Si estamos en el navegador, inicializamos automáticamente
if (typeof window !== 'undefined') {
    inicializarCalculadora();
}

// 3. Bloque de exportación limpio para Vitest
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LETRAS_DNI, procesarDNI, inicializarCalculadora };
}