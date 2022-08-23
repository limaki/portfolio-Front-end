let toggleNav = document.querySelector(".toggler-nav");
let menuNav = document.querySelector(".menu-navi");

toggleNav.addEventListener("click", () => {
    menuNav.classList.toggle("menu-nav__desplegable");
});



/*Teclas iluminadas escritas*/


    let escribir = document.getElementsByClassName("text_index-back/text");
    let str = text.innerHTML;

    text.innerHTML = "";

    let speed = 200;
    let i = 0;

    function typeWriter(){

        if (i < str.length){

        
        text.innerHTML += str.charAt(i) ;
        i++;
        
       setTimeout(typeWriter, speed);
    }
    
}


setTimeout(typeWriter, speed);

