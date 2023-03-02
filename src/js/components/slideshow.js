import $ from 'jquery'
import slick from 'slick-carousel'

const setupSlideshow = (el, type = 'fullwidth') => {
  let $el = $(el);
  let opts = {
    fullwidth: {
      autoplay: true,
      dots: true,
      arrows: true,
      infinite: true,
      fade: false
    }
  }

  $el.slick(opts[type])
}

export default setupSlideshow
