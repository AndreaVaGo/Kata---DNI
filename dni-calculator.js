//Scenario: Iniciar el sistema
  //Given que el usuario está en la página para iniciar la aplicación
  //When hace click en el botón iniciar
  //Then el botón desaparecerá y se le solicitará el número para realizar el cálculo

const btnStart = document.getElementById('btn-start');

btnStart.addEventListener('click', () => {
    // 1. Hacemos que el botón desaparezca cambiando su estilo display a 'none'
    btnStart.style.display = 'none';

    // 2. Solicitamos el número al usuario con un prompt y lo guardamos en una variable
    let numeroDNI = prompt("Introduce el número de tu DNI (entre 0 y 99999999):");
});