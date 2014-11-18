window.onload = pageInit;
function pageInit() {

  var windowWidth = window.innerWidth;
  var ulWidth = windowWidth;
  var currentNext = windowWidth;
  var currentPrev = 0;
  var currentInterval = windowWidth;

  var ulSlider = document.getElementById("h-5-5-img");
  var slideArray = ["slide1", "slide2", "slide3", "slide4"];
  
  var slideOne = document.getElementById("slide1");
  var slideTwo = document.getElementById("slide2");
  var slideThree = document.getElementById("slide3");
  var slideFour = document.getElementById("slide4");

  var nextBtn = document.getElementById("nextBtn");
  var prevBtn = document.getElementById("prevBtn");

  slideOne.style.width = windowWidth + "px";
  slideTwo.style.width = windowWidth + "px";
  slideThree.style.width = windowWidth + "px";
  slideFour.style.width = windowWidth + "px";

  function imgTransform(e, transform) {
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

  function imgSliderInterval() {
    imgTransform(ulSlider, ulWidth);
    if (ulWidth < windowWidth * (slideArray.length - 1)) {
      ulWidth += windowWidth;
      currentInterval = ulWidth;
    } else {
      ulWidth = 0;
    }
    console.log("Interval: " + currentInterval);
  }

  function imgSliderNext() {
    imgTransform(ulSlider, ulWidth);
    if (ulWidth < windowWidth * (slideArray.length - 1)) {
      ulWidth += windowWidth;
    } else {
      ulWidth = 0;
    }
  }

  function imgSliderPrev() {
    if (currentPrev <= currentNext || currentPrev <= currentInterval) {
      console.log("Next inside Prev:" + currentNext);
      ulWidth -= (windowWidth * 2);
      imgTransform(ulSlider, ulWidth);
      if (ulWidth < 0) {
        ulWidth = windowWidth * (slideArray.length - 1);
        imgTransform(ulSlider, ulWidth);
      }
    } else if (ulWidth > 0) {
      ulWidth -= windowWidth;
      if (ulWidth < 0) {
        ulWidth = windowWidth * (slideArray.length - 1);
        imgTransform(ulSlider, ulWidth);
      } else {
        imgTransform(ulSlider, ulWidth);
      }
    } else {
      ulWidth = windowWidth * (slideArray.length - 1);
      imgTransform(ulSlider, ulWidth);
    }
  }

  var intervalSlider = setInterval(imgSliderInterval, 3500);

  nextBtn.onclick = function () {
    clearInterval(intervalSlider);
    imgSliderNext();
    currentNext = ulWidth;
    console.log("Next: " + currentNext);
    intervalSlider = setInterval(imgSliderInterval, 3500);
  }

  prevBtn.onclick = function () {
    clearInterval(intervalSlider);
    imgSliderPrev();
    currentPrev = ulWidth;
    console.log("Prev: " + currentPrev);
    intervalSlider = setInterval(imgSliderInterval, 3500);
  }

}
