/* JavaRama 
-- Andre's Restaurant 
-- Final Project  
-- HTTP 5103  */

/* ----- SLIDER ------ */

window.onload = pageInit;
function pageInit() {

  var windowWidth = window.innerWidth;

  var ulPos = 0;
  var ulSlider = document.getElementById("h-5-5-img");
  var ulArray = ulSlider.children;
  var time = 4500;

  var nextBtn = document.getElementById("nextBtn");
  var pauseBtn = document.getElementById("pauseBtn");
  var playBtn = document.getElementById("playBtn");
  var prevBtn = document.getElementById("prevBtn");
  
  for (var i = 0; i < ulArray.length; i++) {
    ulArray[i].style.width = windowWidth + "px";
  }

  function ulTransform(e, transform) {
    if (transform === 0) {
      e.style["-webkit-transform"] = "translate(0px, 0px)";
      e.style["-moz-transform"] = "translate(0px, 0px)";
      e.style["-ms-transform"] = "translate(0px, 0px)";
      e.style["-o-transform"] = "translate(0px, 0px)";
      e.style.transform = "translate(0px, 0px)";
    } else {
      e.style["-webkit-transform"] = "translate(" + transform + "px, 0px)";
      e.style["-moz-transform"] = "translate(-" + transform + "px, 0px)";
      e.style["-ms-transform"] = "translate(-" + transform + "px, 0px)";
      e.style["-o-transform"] = "translate(" + transform  + "px, 0px)";
      e.style.transform = "translate(-" + transform + "px, 0px)";
    }
  }

  function liIncrease() {
    if (ulPos < windowWidth * (ulSlider.children.length - 1)) {
      ulPos += windowWidth;
      ulTransform(ulSlider, ulPos);
    } else {
      ulPos = 0;
      ulTransform(ulSlider, ulPos);
    }
  }

  function liNext() {
    if (ulPos < windowWidth * (ulArray.length -1)) {
      ulPos += windowWidth;
      ulTransform(ulSlider, ulPos);
    } else {
      ulPos = 0;
      ulTransform(ulSlider, ulPos);
    }
  }

  function liPrev() {
     if (ulPos <= 0) {
      ulPos = windowWidth * (ulArray.length - 1);
      ulTransform(ulSlider, ulPos);
    } else {
      ulPos -= windowWidth;
      ulTransform(ulSlider, ulPos);
    }
  }

  var ulInterval = setInterval(liIncrease, time);

  nextBtn.onclick = function() {
    clearInterval(ulInterval);
    liNext();
    ulInterval = setInterval(liIncrease, time);
  }
  prevBtn.onclick = function() {
    clearInterval(ulInterval);
    liPrev();
    ulInterval = setInterval(liIncrease, time);
  }
  pauseBtn.onclick = function() {
    clearInterval(ulInterval);
  }
  playBtn.onclick = function () {
    clearInterval(ulInterval);
    ulInterval = setInterval(liIncrease, time);
  }
}
