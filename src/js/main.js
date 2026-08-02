import $ from 'jquery'
import setupSlideshow from './components/slideshow'
import objectFitImages from 'object-fit-images'
import LazyLoad from "vanilla-lazyload"
import Typed from 'typed.js';

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

document.addEventListener("DOMContentLoaded", () => {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazyload",
  })

  const coverImages = document.querySelectorAll('.cover-image')
  objectFitImages(coverImages)
  setupSlideshow('#full-width-slideshow .slides')

  // Shuffle works
  const container = document.getElementById('works-container');
  if (container) {
    const works = Array.from(container.querySelectorAll('.work'));
    const shuffled = shuffleArray(works);
    shuffled.forEach(work => container.appendChild(work));
  }

  var options = {
    strings: ["We build.", "We code.", "We design."],
    typeSpeed: 150,
    smartBackspace: false,
    fadeOut: true,
    loop: true,
    backDelay: 2500,
  }

  if (document.getElementsByClassName("hero__typewrite")[0]) new Typed(".hero__typewrite", options);
}); 