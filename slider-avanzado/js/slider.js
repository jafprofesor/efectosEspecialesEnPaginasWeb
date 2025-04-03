document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const toggleAutoplayBtn = document.querySelector(".toggle-autoplay");

  let currentIndex = 0;
  let autoplayInterval;
  let isAutoplayActive = true;

  // Iniciar autoplay
  startAutoplay();

  let transitionSpeed = 1000; // Velocidad predeterminada en ms
  let transitionType = "ease-in-out"; // Tipo de transición predeterminado

  function showSlide(index, isManual = false) {
    // Actualizar velocidad si es manual
    const speed = isManual ? transitionSpeed / 2 : transitionSpeed;

    // Ocultar todas las slides
    slides.forEach((slide) => {
      slide.style.transition = `opacity ${speed}ms ${transitionType}`;
      slide.classList.remove("active");
    });
    dots.forEach((dot) => dot.classList.remove("active"));

    // Mostrar la slide actual
    slides[index].style.transition = `opacity ${speed}ms ${transitionType}`;
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentIndex = index;
  }

  function nextSlide() {
    let newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex, true);
  }

  function prevSlide() {
    let newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex, true);
  }

  function startAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 3000);
    isAutoplayActive = true;
    toggleAutoplayBtn.textContent = "Pausar";
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
    isAutoplayActive = false;
    toggleAutoplayBtn.textContent = "Reproducir";
  }

  // Event listeners
  nextBtn.addEventListener("click", function () {
    nextSlide();
    if (isAutoplayActive) {
      stopAutoplay();
      startAutoplay();
    }
  });

  prevBtn.addEventListener("click", function () {
    prevSlide();
    if (isAutoplayActive) {
      stopAutoplay();
      startAutoplay();
    }
  });

  toggleAutoplayBtn.addEventListener("click", function () {
    if (isAutoplayActive) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const slideIndex = parseInt(this.getAttribute("data-index"));
      showSlide(slideIndex);
      if (isAutoplayActive) {
        stopAutoplay();
        startAutoplay();
      }
    });
  });
});
