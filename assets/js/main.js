

 let dollPosition = -230;
var curseur = document.querySelector('.pointer');
 var centreYcurseur = parseInt(getComputedStyle(curseur, null).height) / 2;
 var centreXcurseur = parseInt(getComputedStyle(curseur, null).width) / 2;
 window.addEventListener('mousemove', e => {
    curseur.style.left = e.pageX - centreXcurseur + "px"
      curseur.style.top = e.pageY - centreYcurseur + "px"
  })
let tlPointer = gsap.timeline({paused: true, defaults: {duration: 0.3}})
tlPointer.to(".pointer", {"background-color": "#efeee5", "border-radius": "50%", "width": "45px", "height": "45px"})
tlPointer.play()
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


let tlWindow = gsap.timeline({paused: true, onComplete: appearSwitch})
.to(".wrap_window", {"top": "-175px", "left": "-125px", "z-index": "4"})
.to(".window", {"width": "calc(100vw + 175px)", "height": "calc(100vh + 175px)"}, "<")
.to(".wall_glass", {"width": "calc(100vw + 175px)", "height": "calc(100vh + 175px)"}, "<")
.to(".eyes", {"display": "none"}, "<")
.to(".wrap_ambiance", {"display": "block"})
.to(".wrap_ambiance", {"opacity": "1"}, "<1.5")
.to('.wrap_txt_ambiance p:nth-of-type(1)', {"opacity": "1"}, '<1.5')
.to('.wrap_txt_ambiance p:nth-of-type(2)', {"opacity": "1"}, '<3.5')
.to('.wrap_txt_ambiance p', {"opacity": "0"}, '<12')

let tlWindow2 = gsap.timeline({paused: true, onComplete: appear2})
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
  dollPosition += 57.5
  document.querySelector(".creepy_doll_ambiance").style.top = dollPosition+"px"
});

function appearSwitch() {
  tlWindow2.play()
}

function switchRestart() {
  lightSwitch.style.opacity = "0"
  tlSwitch.reverse()
  lightSwitch.style.display = "none"
  tlWindow2.reverse()
}


let tlWindow3 = gsap.timeline({paused: true})
.to('.wrap_txt_ambiance p:nth-of-type(3)', {"opacity": "1"})
.to('.wrap_txt_ambiance p', {"opacity": "0"}, '<12')
.to('.overlay_ambiance', {"display": "block"})
.to('.light_switch', {"display": "block"}, "<")
.to('.overlay_ambiance', {"background": "rgb(0 0 0 0.95)"}, '<0.1')
.to('.light_switch', {"opacity": "1"}, '<0.5')
function appear2() {
  tlWindow3.play()
}
