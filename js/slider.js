/* JavaRama 
-- Andre's Restaurant 
-- Final Project  
-- HTTP 5103  */

/* ----- SLIDER ------ */

window.onload = pageInit;
function pageInit() {

  //Set the window width variable
  var windowWidth = window.innerWidth;

  //Set up the slider position, parent id, children and interval
  var ulPos = 0;
  var ulSlider = document.getElementById("h-5-5-img");
  var ulArray = ulSlider.children;
  var time = 4500;

  //Set up buttons
  var nextBtn = document.getElementById("nextBtn");
  var pauseBtn = document.getElementById("pauseBtn");
  var playBtn = document.getElementById("playBtn");
  var prevBtn = document.getElementById("prevBtn");

  //Set the width of the images to the width of the window upon load.
  for (var i = 0; i < ulArray.length; i++) {
    ulArray[i].style.width = windowWidth + "px";
  }

  //Set the width of the container to the width of the contents.
  ulSlider.style.width = windowWidth * ulArray.length + "px";

  //Set the tranform-translate position.
  function ulTransform(e, transform) {
    if (transform === 0) {
      //account for invalid input of '-0px'
      e.style["-webkit-transform"] = "translate(0px, 0px)";
      e.style["-moz-transform"] = "translate(0px, 0px)";
      e.style["-ms-transform"] = "translate(0px, 0px)";
      e.style["-o-transform"] = "translate(0px, 0px)";
      e.style.transform = "translate(0px, 0px)";
    } else {
      //move the slider horizontally
      e.style["-webkit-transform"] = "translate(-" + transform + "px, 0px)";
      e.style["-moz-transform"] = "translate(-" + transform + "px, 0px)";
      e.style["-ms-transform"] = "translate(-" + transform + "px, 0px)";
      e.style["-o-transform"] = "translate(-" + transform  + "px, 0px)";
      e.style.transform = "translate(-" + transform + "px, 0px)";
    }
  }

  //Increment the position and pass it through ulTranform within the array's range
  function liNext() {
    if (ulPos < windowWidth * (ulArray.length -1)) {
      ulPos += windowWidth;
      ulTransform(ulSlider, ulPos);
    } else {
      ulPos = 0;
      ulTransform(ulSlider, ulPos);
    }
  }

  //decrement the position and pass it through ulTransform within the array's range
  function liPrev() {
     if (ulPos <= 0) {
      ulPos = windowWidth * (ulArray.length - 1);
      ulTransform(ulSlider, ulPos);
    } else {
      ulPos -= windowWidth;
      ulTransform(ulSlider, ulPos);
    }
  }

  //Set interval with incrementor and interval
  var ulInterval = setInterval(liNext, time);

  //Next Button - clear interval, increment, reset interval
  nextBtn.onclick = function() {
    clearInterval(ulInterval);
    liNext();
    ulInterval = setInterval(liNext, time);
  }

  //Previous Button - clear interval, decrement, reset interval
  prevBtn.onclick = function() {
    clearInterval(ulInterval);
    liPrev();
    ulInterval = setInterval(liNext, time);
  }

  //Pause Button - clear the interval
  pauseBtn.onclick = function() {
    clearInterval(ulInterval);
  }

  //Play Button - reset the interval
  playBtn.onclick = function () {
    clearInterval(ulInterval);
    ulInterval = setInterval(liNext, time);
  }
}
