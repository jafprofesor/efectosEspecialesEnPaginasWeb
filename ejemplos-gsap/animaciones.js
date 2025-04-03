// Ejemplos de animaciones con GSAP

// 1. Animación básica
gsap.to(".caja", {
  // Selecciona todos los elementos con la clase "caja"
  duration: 1, // Duración de la animación en segundos
  x: 200, // Mover 200 píxeles hacia la derecha
  rotation: 360, // Rotar 360 grados
  backgroundColor: "#e74c3c", // Cambiar el color de fondo
  ease: "power2.out", // Efecto de animación
});

// 2. Timeline básica
const tl = gsap.timeline();
tl.to(".caja", { x: 100, duration: 1 }) // Mover 100 píxeles hacia la derecha
  .to(".caja", { y: 100, duration: 1 }) // Mover 100 píxeles hacia abajo
  .to(".caja", { x: 0, duration: 1 }) // Mover 0 píxeles hacia la derecha
  .to(".caja", { y: 0, duration: 1 }); // Mover 0 píxeles hacia abajo

// 3. ScrollTrigger
gsap.registerPlugin(ScrollTrigger); // Registrar el plugin ScrollTrigger

gsap.to(".caja", {
  // Selecciona todos los elementos con la clase "caja"
  scrollTrigger: {
    // Configuración del ScrollTrigger
    trigger: ".caja", // Elemento que activará la animación
    start: "top center", // Punto de inicio de la animación
    end: "bottom center", // Punto de fin de la animación
    scrub: true, // Hacer que la animación se desplace con el scroll
    markers: true, // Mostrar marcadores en el navegador
  },
  x: 500, // Mover 500 píxeles hacia la derecha
  rotation: 360, // Rotar 360 grados
  duration: 2, // Duración de la animación en segundos
});
