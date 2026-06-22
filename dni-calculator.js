const dniInput = document.getElementById('dni-input');
const btnCalculate = document.getElementById('btn-calculate');
const resultMessage = document.getElementById('result-message');
const LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

// 1. Función con la lógica de cálculo y validación
function procesarDNI() {
    let numeroDNI = dniInput.value; 
    let numeroConvertido = parseInt(numeroDNI);

    if (isNaN(numeroConvertido) || numeroConvertido < 0 || numeroConvertido > 99999999) {
        // Mensaje limpio para que coincida exactamente con las expectativas del test
        resultMessage.textContent = "El dato introducido es incorrecto.";
        resultMessage.style.color = "red";
    } else {
        let resto = numeroConvertido % 23;
        let letra = LETRAS_DNI[resto];
        resultMessage.textContent = `Tu NIF es: ${numeroConvertido}-${letra}`;
        resultMessage.style.color = "green";
    }
}

// 2. Escuchamos el CLIC en el botón
if (btnCalculate) {
    btnCalculate.addEventListener('click', procesarDNI);
}

// 3. Escuchamos la tecla ENTER dentro de la caja de texto
if (dniInput) {
    dniInput.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            procesarDNI(); 
        }
    });
}

// 4. Bloque de exportación obligatorio para Jest (entorno Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LETRAS_DNI, procesarDNI };
}