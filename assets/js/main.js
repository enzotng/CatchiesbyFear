

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

const wrapWindow = document.querySelector('.wrap_window')
const myWindow = document.querySelector('.window')
const wallGlass = document.querySelector('.wall_glass')
const wrapAmbiance = document.querySelector('.wrap_ambiance')

let tlWindow = gsap.timeline({paused: true})
.to(".wrap_window", {"top": "-175px", "left": "-125px", "z-index": "4"})
.to(".window", {"width": "calc(100vw + 175px)", "height": "calc(100vh + 175px)"}, "<")
.to(".wall_glass", {"width": "calc(100vw + 175px)", "height": "calc(100vh + 175px)"}, "<")
.to(".eyes", {"display": "none"}, "<")
.to(".wrap_ambiance", {"display": "block"})
.to(".wrap_ambiance", {"opacity": "1"}, "<1.5")
.to('.wrap_txt_ambiance p:nth-of-type(1)', {"opacity": "1"}, '<1.5')
.to('.wrap_txt_ambiance p:nth-of-type(2)', {"opacity": "1"}, '<3.5')
.to('.wrap_txt_ambiance p:nth-of-type(n+1)', {"opacity": "0"}, '<10')
.to('.wrap_txt_ambiance p:nth-of-type(3)', {"opacity": "1"}, '<0.5')
.to('.wrap_txt_ambiance p:nth-of-type(3)', {"opacity": "0"}, '<12')
.to('.wrap_txt_ambiance p:nth-of-type(4)', {"opacity": "1"}, '<0.5')
.to('.wrap_txt_ambiance p:nth-of-type(4)', {"opacity": "0"}, '<10')
.to('.wrap_txt_ambiance p:nth-of-type(5)', {"opacity": "1"}, '<0.5')
.to('.wrap_txt_ambiance p:nth-of-type(6)', {"opacity": "0"}, '<12')
  // setTimeout(() => {
  //   wallGlass.style.background = "rgba(200, 255, 230, 0.1)"
  // }, 1000);  
wrapWindow.addEventListener('click', () => {
  tlWindow.play()

});