const toggle = document.querySelector(".boutonmenu");
const nav = document.querySelector("#menu");
const accueil = document.getElementById("accueil");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;

    toggle.ariaExpanded = isClosed;
    nav.hidden = isOpen; 

    if (isClosed) {
      accueil.style.display = "none"; 
    } else {
      accueil.style.display = "block"; 
    }
  });
}