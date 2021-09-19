// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header =  document.querySelector("header");
var logo_btn = document.querySelector(".logo__btn");
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header-scrolled");
    logo_btn.classList.remove("logo__btn");
    logo_btn.classList.add("logo__btn1");
  } else {
    header.classList.remove("header-scrolled");
    logo_btn.classList.add("logo__btn");
    logo_btn.classList.remove("logo__btn1");
  }
}
