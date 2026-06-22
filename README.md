# 🧮 Calculadora de NIF (Kata DNI)

Una aplicación web interactiva y moderna para calcular la letra correspondiente a un número de DNI español (NIF) utilizando la fórmula matemática del **Módulo 23**. Desarrollada aplicando los principios de desarrollo guiado por comportamiento (BDD).

## 🚀 Enlaces del Proyecto

* **Sitio web en vivo (GitHub Pages):** [Probar Aplicación](https://andreavago.github.io/Kata---DNI/)
* **Repositorio de código (GitHub):** [Ver Código Fuente](https://github.com/AndreaVaGo/Kata---DNI)

## 📋 Criterios de Aceptación (Escenarios BDD)

El desarrollo se estructuró completando de forma incremental cada uno de los escenarios requeridos:

* **Inicio e Interfaz:** El sistema ofrece un formulario interactivo integrado en la interfaz en lugar de popups bloqueantes.
* **Dato no numérico:** Si el usuario introduce letras, se muestra el mensaje *"El dato introducido es incorrecto: ¡No has introducido un número!"*.
* **Número fuera de rango:** Controla números negativos o mayores de 8 dígitos mostrando el motivo específico del error.
* **DNI válido:** Calcula el residuo exacto entre 23 y asigna la letra oficial (`TRWAGMYFPDXBNJZSQVHLCKE`), mostrando el NIF completo formateado.
* **Usabilidad:** Permite procesar el formulario tanto haciendo clic en el botón como pulsando la tecla **Enter**.

## 🛠️ Tecnologías utilizadas

* **HTML5** - Estructura semántica del formulario.
* **CSS3** - Diseño moderno, centrado y con transiciones (Hover/Active).
* **JavaScript (ES6)** - Manipulación del DOM, gestión de eventos de teclado/ratón y lógica del Módulo 23.