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