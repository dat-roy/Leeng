window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var logo = document.getElementById("logo");
var openNavbar = document.getElementById("open__mobile-navbar__icon");
var linkNavbar = document.getElementsByClassName("header__navbar__link");
var sticky = header.offsetTop;
var i;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    logo.style.color = "var(--color-theme)";
    openNavbar.style.color = "var(--color-theme)";
    for (i=0; i<linkNavbar.length; i++)
    {
      linkNavbar[i].style.color = "var(--text-color)";
    }
  } else {
    header.classList.remove("sticky");
    logo.style.color = "#fff";
    openNavbar.style.color = "#fff";
    for (i=0; i<linkNavbar.length; i++)
    {
      linkNavbar[i].style.color = "#fff";
    }
  }
}