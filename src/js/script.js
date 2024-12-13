const menuButton = document.querySelector('.boutonmenu');
const menu = document.getElementById('mainNav');

menuButton.addEventListener('click', () => {
  const isHidden = menu.getAttribute('aria-hidden') === 'true';
  menu.setAttribute('aria-hidden', !isHidden);
});

// Délégation d'événements pour l'image "logoaccueil.png"
document.addEventListener('click', function(event) {
  if (event.target.src.endsWith('/assets/icons/logoaccueil.png')) {
    menu.setAttribute('aria-hidden', 'true');
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const indicators = document.querySelectorAll('.indicator');
  let currentIndex = 0;
  const totalSlides = slides.length;

  // Variables pour les gestes tactiles
  let startX = 0;
  let endX = 0;

  // Fonction pour afficher une slide spécifique
  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove('active');
          indicators[i].classList.remove('active');
          if (i === index) {
              slide.classList.add('active');
              indicators[i].classList.add('active');
          }
      });
      currentIndex = index;
  }

  // Fonction pour afficher la slide suivante
  function nextSlide() {
      let index = currentIndex + 1;
      if (index >= totalSlides) {
          index = 0;
      }
      showSlide(index);
  }

  // Fonction pour afficher la slide précédente
  function prevSlide() {
      let index = currentIndex - 1;
      if (index < 0) {
          index = totalSlides - 1;
      }
      showSlide(index);
  }

  // Événements pour les boutons de navigation
  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  // Événements pour les indicateurs
  indicators.forEach(indicator => {
      indicator.addEventListener('click', (e) => {
          const index = parseInt(e.target.getAttribute('data-slide'));
          showSlide(index);
      });
  });

  // Rotation automatique toutes les 5 secondes
  let autoSlide = setInterval(nextSlide, 5000);

  // Pause de la rotation automatique lors du survol
  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', () => {
      clearInterval(autoSlide);
  });
  carousel.addEventListener('mouseleave', () => {
      autoSlide = setInterval(nextSlide, 5000);
  });

  // Gestion des gestes tactiles
  carousel.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].screenX;
  });

  carousel.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].screenX;
      handleGesture();
  });

  function handleGesture() {
      if (endX < startX - 50) {
          nextSlide();
      }
      if (endX > startX + 50) {
          prevSlide();
      }
  }

  // Afficher la première slide au chargement
  showSlide(currentIndex);
});