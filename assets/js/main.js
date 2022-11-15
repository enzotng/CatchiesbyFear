
let compteur = 1
let compteurBis = 1
 let dollPosition = -222;
const buttonSkipTxtAmbiance = document.getElementById('skipAmbiance')
const scream = new Audio('./../assets/sounds/girl_scream_shortwav-14510.mp3');

function overLink() {
  tlPointer.reverse()
}

function outLink() {
  tlPointer.play()
}
const eyes = document.querySelector('.eyes')
function eyesDisepearOver(){
  eyes.style.opacity = "0"
}
function eyesDisepearOut(){
  eyes.style.opacity = "1"
}


let tlWindow = gsap.timeline({paused: true, onComplete: windowBis})
.to(".wrap_window", {"top": "-175px", "left": "-125px", "z-index": "4"})
.to(".window", {"width": "calc(100vw + 175px)", "height": "calc(100vh + 175px)"}, "<")
.to(".wall_glass", {"width": "calc(100vw + 175px)", "height": "calc(100vh + 175px)"}, "<")
.to(".eyes", {"display": "none"}, "<")
.to(".wrap_ambiance", {"display": "block"})
.to(".wrap_ambiance", {"opacity": "1"}, "<1.5")


let tlWindowBis = gsap.timeline({paused: true})
.to('.wrap_txt_ambiance p:nth-of-type(1)', {"opacity": "1"}, '<1.5')
.to('.wrap_txt_ambiance p:nth-of-type(2)', {"opacity": "1"}, '<2')
.to('.wrap_txt_ambiance button', {"opacity": "1"}, '<2.5')


function windowBis() {
  tlWindowBis.play()
}

let tlWindow2 = gsap.timeline({paused: true})
.to('.wrap_txt_ambiance p', {"opacity": "0"})
.to('.wrap_txt_ambiance button', {"opacity": "0"}, "<0.1")
.to('.overlay_ambiance', {"display": "block"})
.to('.overlay_ambiance', {"background": "rgb(0 0 0 0.95)"}, '<0.1')
.to('.light_switch', {"opacity": "1"}, '<0.5')

document.querySelector('.wrap_window').addEventListener('click', () => {
  tlWindow.play()
});
let tlSwitch= gsap.timeline({paused: true, onComplete: switchRestart})
.to(".light_switch", {"background": "#1E1E1E"})
.to(".light_switch span", {"left": "47px", "background": "#efeee5"})
const lightSwitch = document.querySelector('.light_switch')
lightSwitch.addEventListener('click', () => {
  tlSwitch.play()  
  if (dollPosition !== -22){
    dollPosition += 100
    document.querySelector(".creepy_doll_ambiance").style.top = dollPosition+"px"
  }
});

function appearSwitch() {
  tlWindow2.play()
}

function switchRestart() {
  lightSwitch.style.opacity = "0"
  tlSwitch.reverse()
  lightSwitch.style.display = "none"
  if (compteur === 1){
    tlWindow3.play()
  }
  if(compteur === 2){
    tlWindow4.play()
  }
  if(compteur === 3){
    tlWindow5.play()
  }
  compteur += 1
}

function skipTxtAmbiance() {
  if(compteurBis === 1){
    appearSwitch()
  }
  if(compteurBis === 2){
    tlWindow6.play()
  }
  if(compteurBis === 3){
    tlWindow7.play()
  }
  compteurBis += 1;
}

let tlWindow4= gsap.timeline({paused: true})
.to('.overlay_ambiance', {"background": "black"})
.to('.overlay_ambiance', {"background": "white"}, "<0.1")
.to('.overlay_ambiance', {"display": "none"}, "<0.2")
.to('.wrap_txt_ambiance p:nth-of-type(4)', {"opacity": "1"})
.to('.wrap_txt_ambiance button', {"opacity": "1"}, "<4")

let tlWindow7= gsap.timeline({paused: true})
.to('.wrap_txt_ambiance p', {"opacity": "0"})
.to('.wrap_txt_ambiance button', {"opacity": "0"}, "<0.1")
.to('.overlay_ambiance', {"display": "block"})
.to('.light_switch', {"display": "block"}, "<")
.to('.overlay_ambiance', {"background": "rgb(0 0 0 0.95)"}, '<0.1')
.to('.light_switch', {"opacity": "1"}, '<0.5')


let tlWindow3 = gsap.timeline({paused: true})
.to('.overlay_ambiance', {"background": "black"})
.to('.overlay_ambiance', {"background": "white"}, "<0.1")
.to('.overlay_ambiance', {"display": "none"}, "<0.2")
.to('.wrap_txt_ambiance p:nth-of-type(3)', {"opacity": "1"})
.to('.wrap_txt_ambiance button', {"opacity": "1"}, '<2.5')


let tlWindow6 = gsap.timeline({paused: true})
.to('.wrap_txt_ambiance p', {"opacity": "0"})
.to('.wrap_txt_ambiance button', {"opacity": "0"}, "<0.1")
.to('.overlay_ambiance', {"display": "block"})
.to('.light_switch', {"display": "block"}, "<")
.to('.overlay_ambiance', {"background": "rgb(0 0 0 0.95)"}, '<0.1')
.to('.light_switch', {"opacity": "1"}, '<0.5')


let tlWindow5 = gsap.timeline({paused: true, onComplete: closeWindow})
.to('.creepy_doll_ambiance', {"top": "-50vh", duration: 0})
.to('.overlay_ambiance', {"background": "black"})
.to('.overlay_ambiance', {"background": "white"}, "<0.1")
.to('.overlay_ambiance', {"display": "none"}, "<0.2")
.to('.wrap_txt_ambiance p:nth-of-type(5)', {"opacity": "1"})
.to('.wrap_txt_ambiance p', {"opacity": "0"}, '<20')
.to('.creepy_doll_ambiance', {"top": "120vh"})
.to('.overlay_ambiance', {"display": "block"})
.to('.overlay_ambiance', {"background": "rgb(0 0 0 0.95)"}, '<0.1')
.to('.overlay_ambiance', {"display": "none"}, '<0.1')
.to('.overlay_ambiance', {"background": "white"}, '<')
.to('.overlay_ambiance', {"display": "block"}, "<0.1")
.to('.wrap_ambiance', {"background": "black"}, '<')
.to('.overlay_ambiance', {"background": "black", onComplete: screamAmbiance}, '<0.1')
.to('.doll_jumpscare', {"height": "500vh", "opacity": "0", y: 1000, x: -1000}, "<0.5")
.to('.overlay_ambiance', {"clip-path": "inset(100% 0 0 0)"}, "<2")
.to('.wrap_ambiance', {"opacity": "0"}, "<")
.to('.overlay_ambiance', {"display": "none"}, "<0.5")
.to('.wrap_ambiance', {"display": "none"}, "<")


function closeWindow() {
  tlWindow.reverse()
}

let tlCadavre = gsap.timeline({paused: true})
.to('.cadavre', {"right": "300vh", duration: 1.5})

function cadavreMove(){
  tlCadavre.play();
}

function screamAmbiance() {
  setTimeout(() => {
    scream.play();
  }, 1000);
}

let tlSmile = gsap.timeline({paused: true, onComplete: rythme1})
.to('.creepy_smile', {"width": "600%", "right":"-100%", "top": "-500%", "z-index": "3", duration: 1.5})
.to('.overlay_rythme', {"display": "flex"}, "<")
.to('.overlay_rythme', {"opacity": "1"}, "<")
.to('.creepy_smile', {"opacity": "0"}, "<2")
.to('.creepy_smile', {"display": "none"})

function smileMove(){
  tlSmile.play();
}

let tlRythme = gsap.timeline({})
.to('.cd_rythme', {"background": "radial-gradient(circle 15vmax,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.5) 80%,rgba(0, 0, 0, 0.95) 100%)"}, "<3")
.to('.light_rythme', {"top": "100vh", duration:4})
.to('.overlay_rythme', {"height": "200vh", duration:4}, "<")
.to('.overlay_rythme p:nth-of-type(1)', {"opacity": "0"}, "<")
.to('.overlay_rythme p:nth-of-type(2)', {"opacity": "1"}, "<")
.to('.cd_rythme', {"background": "radial-gradient(circle 50vmax,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.5) 80%,rgba(0, 0, 0, 0.95) 100%)"}, "<3")
.to('#skipRythme1', {"opacity" : "1"})

function rythme1(){
  tlRythme.play();
}



function elementPosition (a) {
  let b = a.getBoundingClientRect();
  return {
    viewportY: (b.y || b.top)
  }
}
const mon_element = document.querySelector('.death_overlay');

window.addEventListener('scroll', function() {

  let positions = elementPosition(mon_element);
  if (positions.viewportY >= -235) {
    tlLooseRythme.play()
    setTimeout(() => {
      scream.play();
    }, 1000);
  }

});
let tlLooseRythme = gsap.timeline({paused: true, onComplete: smileReverse})
.to('.overlay_ambiance', {"background": "white", "z-index": "10"})
.to('.overlay_ambiance', {"display": "block", "position" : "fixed", "top": "0", "left": "0"})
.to('.overlay_ambiance', {"clip-path": "inset(0 0 0 0)"}, "<")
.to('.overlay_ambiance', {"background": "black"}, '<0.1')
.to('.doll_jumpscare', {"height": "500vh", "opacity": "0", y: 1000, x: -1000}, "<0.5")


function smileReverse(){
  tlSmile.reverse()
  setTimeout(() => {
    document.querySelector('.overlay_ambiance').style.display = "none"
    document.querySelector('.overlay_ambiance').style.overflow = "hidden"
  }, 2000);

}

let tlRythme2 = gsap.timeline({paused: true})
.to('#skipRythme1', {"opacity" : "0", "top": "290vh"})
.to('.cd_rythme', {"background": "radial-gradient(circle 15vmax,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.5) 80%,rgba(0, 0, 0, 0.95) 100%)"}, "<0.1")
.to('.light_rythme', {"top": "200vh", duration:4})
.to('.overlay_rythme', {"height": "300vh", duration:4}, "<")
.to('.overlay_rythme p:nth-of-type(2)', {"opacity": "0"}, "<")
.to('.videoRythme', {"opacity": "1"}, "<")
.to('.cd_rythme', {"background": "radial-gradient(circle 50vmax,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.5) 80%,rgba(0, 0, 0, 0.95) 100%)"}, "<3")
.to('#skipRythme1', {"opacity" : "1"})

let compteur3 = 1


function skipRythme() {
  if (compteur3 === 1) {
    tlRythme2.play()
  }
  if (compteur3 === 2) {
    tlRythme3.play()
  }
  compteur3 += 1
}

let tlRythme3 = gsap.timeline({paused: true})
.to('.cd_rythme', {"background": "radial-gradient(circle 15vmax,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.5) 80%,rgba(0, 0, 0, 0.95) 100%)"}, "<0.1")
.to('.light_rythme', {"top": "300vh", duration:4})
.to('.overlay_rythme', {"height": "400vh", duration:4}, "<")
.to('.overlay_rythme p:nth-of-type(2)', {"opacity": "0"}, "<")
.to('.overlay_rythme p:nth-of-type(3)', {"opacity": "1"}, "<")
.to('.cd_rythme', {"background": "radial-gradient(circle 50vmax,rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.5) 80%,rgba(0, 0, 0, 0.95) 100%)"}, "<3")

