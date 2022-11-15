window.onload=function() { 
    setTimeout(() => {
        tlLoader.play()
    }, 7000);
}
const loader = document.querySelector('.wrap_loader_txt');
const hero = document.querySelector('.hero');
let tlLoader = gsap.timeline({paused: true})
.to('.wrap_loader', {"opacity": "0"})
.to('.loader_txt p', {"opacity": "1"})
.to('.loader_txt button', {"opacity": "1"}, "<4")

function skipLoader() {
    loader.style.opacity = "0"
    setTimeout(() => {
        loader.style.display = "none" 
        hero.style.display = "flex" 
        hero.style.opacity = "1"
        document.querySelector('.flashlight_css').href = "./assets/css/flashlight.css"
    }, 1000);
}


