'use strict';
//Get button:
const mybutton = document.getElementById('myBtn');

// When user scrolls down 100px from top of document, show button
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

window.onscroll = function() {scrollFunction();};

// When user clicks on button, scroll to top of document
// eslint-disable-next-line no-unused-vars
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}