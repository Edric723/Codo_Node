
// Carga todo el contenido de la página, botón incluido pero automáticamente luego...
document.addEventListener("DOMContentLoaded", function() {
    
    
    // ... Oculta el botón de "Ir arriba" al cargar la página
    document.getElementById("boton-arriba").style.display = "none";

    // Mostrar u ocultar el botón de "Ir arriba" al hacer scroll
    window.addEventListener("scroll", function() {
        var botonArriba = document.getElementById("boton-arriba");
        var seccionInicio = document.getElementById("inicio");
        var scrollY = window.scrollY || window.pageYOffset;

        // Si el scroll está más abajo de la sección de inicio, mostrar el botón
        if (scrollY > seccionInicio.offsetHeight) {
            botonArriba.style.display = "block";
        } else {
            botonArriba.style.display = "none";
        }
    });
});

