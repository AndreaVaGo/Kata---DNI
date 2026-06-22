// 1. Capturamos el botón de inicio desde el HTML usando su ID
const btnStart = document.getElementById('btn-start');

// Cadena con las letras del NIF en el orden oficial del Módulo 23
const LETRAS_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";

// 2. Escuchamos cuando el usuario hace clic en el botón
btnStart.addEventListener('click', () => {
    // Ocultamos el botón para cumplir el primer escenario
    btnStart.style.display = 'none';
    
    let numeroDNI; 

    // 3. Iniciamos el bucle para permitir la repetición del proceso
    do {
        // Solicitamos el número al usuario
        numeroDNI = prompt("Introduce el número de tu DNI (entre 0 y 99999999):");

        // ESCENARIO: Cancelación del proceso
        
        if (numeroDNI === null) {
            break; 
        }

        // Convertimos el texto introducido a un número entero
        let numeroConvertido = parseInt(numeroDNI);

        // 4. Bloque de validaciones con mensajes específicos personalizados
        if (isNaN(numeroConvertido)) {
            // ESCENARIO: Dato no numérico
            alert("El dato introducido es incorrecto: ¡No has introducido un número!");

        } else if (numeroConvertido < 0) {
            // ESCENARIO: Número fuera de rango (Negativo)
            alert("El dato introducido es incorrecto: El número no puede ser negativo.");

        } else if (numeroConvertido > 99999999) {
            // ESCENARIO: Número fuera de rango (Demasiado largo)
            alert("El dato introducido es incorrecto: El número es demasiado largo (máximo 8 dígitos).");

        } else {
            // ESCENARIO: DNI válido (Cálculo real de la letra)
            // Calculamos el resto usando el operador de módulo (%)
            let resto = numeroConvertido % 23;
            
            // Buscamos la letra que corresponde a esa posición
            let letraCorrespondiente = LETRAS_DNI[resto];
            
            // Mostramos el NIF completo al usuario
            alert(`La letra de tu DNI es la: ${letraCorrespondiente}. Tu NIF completo es: ${numeroConvertido}-${letraCorrespondiente}`);
        }

    } while (numeroDNI !== null); // Se repite mientras el usuario no pulse cancelar
});