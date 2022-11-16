let boutonHaut = document.getElementById("btnTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    boutonHaut.style.opacity = "1";
  } else {
    boutonHaut.style.opacity = "0";
  }
}

function hautFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}