document.addEventListener("DOMContentLoaded", function() {
    const divContainer = document.querySelector(".boton-container");

    divContainer.addEventListener("click", function(event) {
        alert("Hola! Soy el div");
        event.stopPropagation(); // Detiene la propagación del evento click
    });

    const button = document.querySelector(".boton");
    
    button.addEventListener("click", function(event) {
        alert("Hola! Soy el botón");
        event.stopPropagation(); // Detiene la propagación del evento click
    });
});
