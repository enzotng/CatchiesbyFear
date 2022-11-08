

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
wrapWindow.addEventListener('click', () => {
  wrapWindow.style.top = '-175px';
  wrapWindow.style.left = '-125px';
  myWindow.style.width = 'calc(100vw + 175px)';
  myWindow.style.height = 'calc(100vh + 175px)';
  wallGlass.style.width = 'calc(100vw + 175px)';
  wallGlass.style.height = 'calc(100vh + 175px)';
  eyes.style.display = 'none';
  setTimeout(() => {
    wrapAmbiance.style.display = "block"
  }, 1000);
  wrapWindow.style.zIndex = "4"
  wrapAmbiance.style.zIndex = "11"
});