/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('nav').style.top = '0'
    document.getElementById('logo').style.width = '400%'
    document.getElementById('logo').style.marginLeft = '-150%'
  } else {
    document.getElementById('nav').style.top = '-20px'
    document.getElementById('logo').style.width = '200%'
    document.getElementById('logo').style.marginLeft = '-50%'
  }
  prevScrollpos = currentScrollPos
}

