 const submenu = document.getElementById('submenu');

    function showSubmenu() {
      gsap.to(submenu, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        pointerEvents: "auto",
        onStart: () => submenu.classList.remove("pointer-events-none")
      });
    }

    function hideSubmenu() {
      gsap.to(submenu, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
        pointerEvents: "none",
        onComplete: () => submenu.classList.add("pointer-events-none")
      });
    }