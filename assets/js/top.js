let boutonHaut = document.getElementById("btnTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    boutonHaut.style.display = "block";
  } else {
    boutonHaut.style.display = "none";
  }
}

function hautFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}