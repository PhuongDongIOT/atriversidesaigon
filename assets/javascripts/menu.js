document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector("#logo text");
  const length = text.getComputedTextLength();

  text.setAttribute("stroke-dasharray", length);
  text.setAttribute("stroke-dashoffset", length);

  const tli = gsap.timeline();

  tli.to(text, {
    strokeDashoffset: 0,
    duration: 2,
    ease: "power2.out",
  })

  .to(".preloader", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.querySelector(".preloader").style.display = "none";
    }
  })

  .fromTo("#content", 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" } 
  );
});



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
    gsap.to(mobileMenu, { y: 0, opacity: 1, display: "block", height: "85vh", duration: 0.4, ease: "power2.out" });
  } else {
    gsap.to(mobileMenu, { y: "100%", opacity: 0, display: "none", height: 0, duration: 0.4, ease: "power2.in" });
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


window.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("floatingMenu");
  const icons = menu.querySelectorAll(".icon");

  gsap.from(menu, {
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  gsap.from(icons, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.2,
    delay: 0.5,
    ease: "back.out(1.7)",
  });
});
