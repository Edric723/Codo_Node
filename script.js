// Función para ir arriba
function irArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Agregar evento click al botón "Ir arriba" del footer
document.querySelector('footer button').addEventListener('click', irArriba);

// Obtener todas las secciones excepto la primera
const secciones = document.querySelectorAll('.seccion:not(:first-child)');

// Mostrar el botón "Ir arriba" cuando se desplaza más allá de la primera sección
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const primeraSeccion = document.querySelector('.seccion:first-child');
    const alturaPrimeraSeccion = primeraSeccion.offsetHeight;

    if (scrollPosition > alturaPrimeraSeccion) {
        document.querySelector('footer button').style.display = 'block';
    } else {
        document.querySelector('footer button').style.display = 'none';
    }
});
