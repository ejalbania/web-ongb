import data from "../data/gems_home-slideshow-data.js";
import { SlideShowProvider } from "./slideshow.js";

let slideShowModel = new SlideShowProvider(data, loadHeader);

document.addEventListener("DOMContentLoaded", function () {
  let headerLeftButton = document.querySelector(".sld-btn-left");
  let headerRightButton = document.querySelector(".sld-btn-right");

  headerLeftButton.onclick = () => {
    slideShowModel.previousSlide();
  };
  headerRightButton.onclick = () => {
    slideShowModel.nextSlide();
  };

  setTimeout(() => {
    loadHeader();
  }, 500);
  performParallax();
});

function performParallax() {
  window.onscroll = (value) => {
    const screenTop = window.scrollY;
    const screenHeight = window.innerHeight;

    document.querySelectorAll(".parallax-sample").forEach((element) => {
      const screenBottom = screenTop + screenHeight;

      const elementTop = element.offsetTop;

      element.style.backgroundPositionY = `calc(-400% + ${
        (elementTop + screenTop - screenHeight) / 2.5
      }px)`;
    });
  };
}

function loadHeader() {
  let currentSlide = slideShowModel.getCurrentSlide();

  let slideShow = document.querySelector("#ej-sld-shw");
  let slideContainer = slideShow.querySelector(".slide-container");
  slideContainer.innerHTML = "";

  slideContainer.appendChild(currentSlide.getBackground());
  slideContainer.appendChild(currentSlide.getLabel());
  currentSlide.addIconsIn(slideContainer);
}
