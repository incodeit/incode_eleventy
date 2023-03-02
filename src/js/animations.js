import $ from 'jquery'
import { TimelineLite, Power2, TweenMax } from 'gsap';
import { Controller, Scene } from 'scrollmagic';
import Typed from 'typed.js';
// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import 'imports-loader?define=>false!gsap/ScrollToPlugin.js';


export const animateElements = () => {

  var options = {
    strings: ["We build.", "We code.", "We design."],
    typeSpeed: 150,
    smartBackspace: false,
    fadeOut: true,
    loop: true,
    backDelay: 2500,
  }

  var typed = new Typed(".hero__typewrite", options);

  if ($('#hero').length > 0 ) {
    var controller = new Controller();
    var scene = new Scene({
      triggerElement: "#hero",
      duration: "90%",
      triggerHook: 'onLeave',
    })
    .setTween($("#hero"), {
      y: "20%",
      ease: Linear.easeNone
    })
    .addTo(controller);

    var scene2 = new Scene({
      triggerElement: "#hero",
      duration: "20%",
      triggerHook: 'onLeave',
    })
    .setTween($(".hero__toggle"), {
      autoAlpha: "0",
      ease: Linear.easeNone
    })
    .addTo(controller);

    var scene3 = new Scene({
      triggerElement: "#latest-works",
      duration: "100%",
      triggerHook: 'onLeave',
    })
    .setTween($(".work"), {
      y: "10%",
      ease: Linear.easeNone
    })
    .addTo(controller);

    var scene4 = new Scene({
      triggerElement: "#we-make-things",
      duration: "100%",
      triggerHook: 'onLeave',
    })
    .setTween($(".section__title, section__content"), {
      y: "10%",
      ease: Linear.easeNone
    })
    .addTo(controller);

  }
}
