const navcon = document.querySelector(".nav__contenedor");
const menu = document.querySelector(".menu__img");

menu.addEventListener('click', ()=>{
    navcon.classList.toggle("active");
});