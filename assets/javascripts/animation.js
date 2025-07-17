// image animation
let tl = gsap.timeline();

tl.from(".hero-img", {
    duration: 1.5,
    opacity: 0,
    filter: "blur(100px)",
    scale: 0
});

  ScrollReveal().reveal('.box', {
    duration: 1000,
    distance: '200px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
    reset: false
  });