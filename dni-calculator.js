const dniInput = document.getElementById('dni-input');
const btnCalculate = document.getElementById('btn-calculate');
const resultMessage = document.getElementById('result-message');
const LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

// 1. Creamos una función con toda la lógica que ya tenías hecha
function procesarDNI() {
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

// 2. Escuchamos el CLIC en el botón
btnCalculate.addEventListener('click', procesarDNI);

// 3. Escuchamos la tecla ENTER dentro de la caja de texto
dniInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        procesarDNI(); // Ejecuta la misma lógica
    }
});