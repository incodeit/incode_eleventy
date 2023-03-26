import $ from 'jquery'
import setupSlideshow from './components/slideshow'
import objectFitImages from 'object-fit-images'
import LazyLoad from "vanilla-lazyload"
import Typed from 'typed.js';

document.addEventListener("DOMContentLoaded", () => {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazyload",
  })

  const coverImages = document.querySelectorAll('.cover-image')
  objectFitImages(coverImages)
  setupSlideshow('#full-width-slideshow .slides')
    var options = {
    strings: ["We build.", "We code.", "We design."],
    typeSpeed: 150,
    smartBackspace: false,
    fadeOut: true,
    loop: true,
    backDelay: 2500,
  }

  if(document.getElementsByClassName("hero__typewrite")[0]) new Typed(".hero__typewrite", options);
});
