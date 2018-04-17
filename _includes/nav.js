function toggleNav() {
  nav.classList.add("nav--animatable");
  if(!nav.classList.contains("nav--visible")) {
    nav.classList.add("nav--visible");
  } else {
    nav.classList.remove('nav--visible');
  }
}

function OnTransitionEnd() {
nav.classList.remove("nav--animatable");
}

var nav = document.querySelector(".nav");
var navIcon = document.querySelector(".nav-bar__icon");
nav.addEventListener("transitionend", OnTransitionEnd, false);
navIcon.addEventListener("click", toggleNav, false);
nav.addEventListener("click", toggleNav, false);
