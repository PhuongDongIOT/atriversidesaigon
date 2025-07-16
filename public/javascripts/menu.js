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


const mobileBtn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
let menuOpen = false;

mobileBtn.addEventListener("click", () => {
  if (!menuOpen) {
    gsap.to(mobileMenu, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
  } else {
    gsap.to(mobileMenu, { y: "100%", opacity: 0, duration: 0.4, ease: "power2.in" });
  }
  menuOpen = !menuOpen;
});


 const toggleBtn = document.getElementById("toggle-project");
  const submenuMobile = document.getElementById("project-submenu");
  let isOpen = false;

  toggleBtn.addEventListener("click", () => {
    if (!isOpen) {
      gsap.to(submenuMobile, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    } else {
      gsap.to(submenuMobile, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      });
    }
    isOpen = !isOpen;
  });