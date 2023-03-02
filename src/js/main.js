import $ from 'jquery'
import setupSlideshow from './components/slideshow'
import objectFitImages from 'object-fit-images'
import LazyLoad from "vanilla-lazyload"
import { animateElements } from './animations'

window.onload = () => {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazyload",
  })

  const coverImages = document.querySelectorAll('.cover-image')
  objectFitImages(coverImages)
  setupSlideshow('#full-width-slideshow .slides')
  animateElements()
}
