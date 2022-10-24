function update(e) {
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY

    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', update)
document.addEventListener('touchmove', update)

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


var side,
    movingRight,
    max = 0,
    ghost = document.getElementById('_02-ghost');

atBounds = () => {
  if (movingRight) {
    if (ghost.getBoundingClientRect().right >= max) {
      return true;
    }
  } else {
    if (ghost.getBoundingClientRect().left <= max) {
      return true;
    }
  }
  return false;
}

move = () => setTimeout(() => {
  if (!atBounds()) {
    ghost.style.left = String((parseInt(ghost.style.left) || 0) + side) + 'px';
  }
  if (side > 0) {
    ghost.style.transform = 'rotateY(180deg)';
    ghost.style.transformOrigin = '50% 50%';
  } else {
    ghost.style.transform = 'rotateY(0deg)';
    ghost.style.transformOrigin = '0% 0%';
  }
  move();
}, 10);

document.onmousemove = e => {
  movingRight = e.screenX > (window.innerWidth / 2);
  max = e.screenX;

  if (atBounds()) {
    side = 0;
    return;
  }

  side = e.screenX > (window.innerWidth / 2) ? 2 : -2;
}

move();