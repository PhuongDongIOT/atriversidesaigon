window.addEventListener("load", () => {
    gsap.to("#animatedImage", {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
    });
});