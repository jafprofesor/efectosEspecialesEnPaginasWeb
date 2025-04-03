// Animaciones avanzadas con GSAP

// 1. Ejemplo básico de animación con GSAP
document.addEventListener("DOMContentLoaded", () => {
  // Animación simple de una caja
  gsap.to(".caja", {
    // Selecciona la caja a animar
    duration: 2, // Duración de la animación en segundos
    x: 200,
    y: 200, // Desplazamiento horizontal
    rotation: 360, // Rotación en grados
    ease: "bounce.out", // Tipo de easing, easing es el tipo de animación
    // existen muchos tipos de easing en la documentación de GSAP, como bounce, elastic, etc.
    repeat: -1, // Repetir la animación infinitamente
    yoyo: true, // Hacer que la animación vaya y vuelta
  });

  // 2. Efecto marquee con GSAP
  const texto = document.querySelector(".texto-deslizante");
  gsap.to(texto, {
    // Selecciona el elemento de texto
    duration: 10, // Duración de la animación en segundos
    x: -1000, // Desplazamiento horizontal
    repeat: -1,
    yoyo: true, // Repetir la animación infinitamente
    ease: "none", // Sin easing
  });

  // 3. Animación de botón con interacción
  const boton = document.querySelector(".boton-animado");
  boton.addEventListener("click", () => {
    gsap.to(boton, {
      // Selecciona el botón
      duration: 0.2, // Duración de la animación en segundos
      scale: 1.2, // Escala del botón
      backgroundColor: "#e74c3c", // Cambio de color de fondo
      yoyo: true, // Hacer que la animación vaya y vuelta
      repeat: 3, // Repetir la animación una vez
    });
  });
});
