// image animation
const tl = gsap.timeline();

tl.from(".hero-img", {
    duration: 1.5,
    opacity: 0,
    filter: "blur(100px)",
    scale: 0
});


gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    toggleActions: "play none none none",
    snap: {
      snapTo: 'labels',
      duration: { min: 0.2, max: 3 },
      delay: 0.2,
      ease: 'power1.inOut'
    }
  }
})
.from(".box", {
  opacity: 0,
  y: 100,
  scale: 0.7,
  filter: "blur(20px)",
  ease: "power2.out",
  duration: 1.2
});
