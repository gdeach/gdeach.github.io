window.onscroll = function(){
    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("icon__pag")
    var elemento2 = document.getElementById("icon__pag2")

    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}
document.getElementById("icon_menu").addEventListener("click", mostrar_menu);
function mostrar_menu(){
        document.querySelector(".menu").classList.toggle("mostrar_menu");
}
