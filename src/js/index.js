const buttonHamburguer = document.getElementById("idbutton");
const menuHamburguer = document.getElementById('hamburguerMenuID');

function toggleMenu() {

    const isMenuVisible = menuHamburguer.style.display === "flex";
    
    menuHamburguer.style.display = isMenuVisible ? "none" : "flex";
}

buttonHamburguer.addEventListener("click", toggleMenu)

