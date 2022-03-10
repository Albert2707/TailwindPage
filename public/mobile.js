const menubutton = document.querySelector("#mobile-menu");
const menu = document.querySelector(".mobile-links");

menubutton.addEventListener("click", e=>{
menu.classList.toggle("hidden");

})