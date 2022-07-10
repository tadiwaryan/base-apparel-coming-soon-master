let hero = document.querySelector('.hero_mobile');

let viewport = window.innerWidth;

//changes the hero banner image based on display size...
if (viewport > 500){

    hero.src = "images/hero-desktop.jpg";

    hero.setAttribute('class','hero_desktop');

}