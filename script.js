const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    // Ativa/Desativa o menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fecha o menu quando um link é clicado
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
