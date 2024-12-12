document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".boutonmenu");
  const closeButton = document.querySelector(".boutonfermer");
  const sideMenu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  const accueil = document.getElementById("accueil");

  // Fonction pour ouvrir le menu
  const openMenu = () => {
    sideMenu.classList.add("open");
    overlay.classList.add("active");
    toggleButton.setAttribute("aria-expanded", "true");
    sideMenu.setAttribute("aria-hidden", "false");
    accueil.style.display = "none";
  };

  // Fonction pour fermer le menu
  const closeMenu = () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("active");
    toggleButton.setAttribute("aria-expanded", "false");
    sideMenu.setAttribute("aria-hidden", "true");
    accueil.style.display = "block";
  };

  // Événement pour ouvrir le menu
  if (toggleButton) {
    toggleButton.addEventListener("click", openMenu);
  }

  // Événement pour fermer le menu via le bouton fermer
  if (closeButton) {
    closeButton.addEventListener("click", closeMenu);
  }

  // Événement pour fermer le menu en cliquant sur l'overlay
  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }
});